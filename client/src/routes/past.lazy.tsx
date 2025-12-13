import { useState, Suspense, use } from "react";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import getPastOrders from "../api/getPastOrders.ts";
import getPastOrder from "../api/getPastOrder.ts";
import Modal from "../components/Modal.tsx";
import ErrorBoundary from "../components/ErrorBoundary.tsx";
import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter.tsx";

import { FiEye } from "react-icons/fi";

type PastOrdersResponse = {
  order_id: number;
  date: string;
  time: string;
}[];

type PastOrderDetail = {
  orderItems: {
    pizzaTypeId: number;
    size: string;
    quantity: number;
    price: number;
    total: number;
    image: string;
    name: string;
  }[];
};

export const Route = createLazyFileRoute("/past")({
  component: ErrorBoundaryWrappedPastOrderRoutes,
});

function ErrorBoundaryWrappedPastOrderRoutes() {
  const [page, setPage] = useState(1);
  const loadedPromise = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  }).promise;
  return (
    <ErrorBoundary>
      {/* Suspense = "A boundary where stuff inside of it might be loading" */}
      <Suspense
        fallback={
          <div className="w-full px-4 py-8 text-center">
            <h2 className="text-display text-cosmic-space">
              Loading Past Orders…
            </h2>
          </div>
        }
      >
        <PastOrdersRoute
          page={page}
          setPage={setPage}
          loadedPromise={loadedPromise}
        />
      </Suspense>
    </ErrorBoundary>
  );
}

function PastOrdersRoute({
  page,
  setPage,
  loadedPromise,
}: {
  page: number;
  setPage: (n: number) => void;
  loadedPromise: Promise<PastOrdersResponse>;
}) {
  /* if this promise is not yet resolved, React will suspend rendering this component and tell the nearest Suspense boundary to show its fallback */
  const data = use(loadedPromise);
  const [focusedOrder, setFocusedOrder] = useState<number | undefined>();
  const { isLoading: isLoadingPastOrder, data: pastOrderData } = useQuery({
    queryKey: ["past-order", focusedOrder],
    queryFn: (): Promise<PastOrderDetail> => getPastOrder(focusedOrder!),
    staleTime: 24 * 60 * 60 * 1000,
    enabled: !!focusedOrder,
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      {/* PAGE TITLE */}
      <h1 className="text-cosmic-midnight-plum mb-6 text-3xl font-semibold">
        Past Orders
      </h1>

      {/* ORDERS TABLE */}
      <div className="rounded-card bg-cosmic-sand shadow-card overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-cosmic-orange text-white">
              <th className="px-5 py-3 text-sm font-semibold tracking-wide">
                ID
              </th>
              <th className="px-5 py-3 text-sm font-semibold tracking-wide">
                Date
              </th>
              <th className="px-5 py-3 text-sm font-semibold tracking-wide">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((order) => (
              <tr
                key={order.order_id}
                className="hover:border-cosmic-orange/40 border-b border-black/10 transition hover:bg-white/40 hover:shadow-sm"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-cosmic-midnight-plum/80 font-medium">
                      {order.order_id}
                    </span>

                    <button
                      onClick={() => setFocusedOrder(order.order_id)}
                      className="text-cosmic-orange hover:text-cosmic-gold transition-transform hover:scale-110 focus:outline-none"
                      aria-label="View order details"
                    >
                      <FiEye className="h-5 w-5" />
                    </button>
                  </div>
                </td>

                <td className="text-cosmic-midnight-plum/90 px-5 py-4">
                  {order.date}
                </td>

                <td className="text-cosmic-midnight-plum/90 px-5 py-4">
                  {order.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="bg-cosmic-midnight-plum rounded-md px-4 py-2 text-white disabled:opacity-40"
        >
          Previous
        </button>

        <span className="text-cosmic-space text-lg font-semibold">{page}</span>

        <button
          disabled={data.length < 10}
          onClick={() => setPage(page + 1)}
          className="bg-cosmic-midnight-plum rounded-md px-4 py-2 text-white disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* MODAL FOR ORDER DETAILS */}
      {focusedOrder ? (
        <Modal>
          <div className="space-y-4">
            <h2 className="text-cosmic-midnight-plum text-2xl font-semibold">
              Order #{focusedOrder}
            </h2>

            {!isLoadingPastOrder ? (
              <div className="rounded-card bg-cosmic-sand shadow-card overflow-hidden">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-cosmic-orange text-white">
                      <th className="px-4 py-2 font-semibold">Image</th>
                      <th className="px-4 py-2 font-semibold">Name</th>
                      <th className="px-4 py-2 font-semibold">Size</th>
                      <th className="px-4 py-2 font-semibold">Qty</th>
                      <th className="px-4 py-2 font-semibold">Price</th>
                      <th className="px-4 py-2 font-semibold">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {pastOrderData!.orderItems.map((pizza, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-black/10 transition hover:bg-white/60"
                      >
                        <td className="px-4 py-3">
                          <img
                            src={pizza.image}
                            alt={pizza.name}
                            className="h-14 w-14 rounded-md object-cover shadow-sm"
                          />
                        </td>
                        <td className="text-cosmic-midnight-plum px-4 py-3">
                          {pizza.name}
                        </td>
                        <td className="text-cosmic-midnight-plum px-4 py-3">
                          {pizza.size}
                        </td>
                        <td className="text-cosmic-midnight-plum px-4 py-3">
                          {pizza.quantity}
                        </td>
                        <td className="text-cosmic-midnight-plum px-4 py-3">
                          {useCurrencyFormatter(pizza.price)}
                        </td>
                        <td className="text-cosmic-midnight-plum px-4 py-3 font-semibold">
                          {useCurrencyFormatter(pizza.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-cosmic-space">Loading…</p>
            )}

            <button
              onClick={() => setFocusedOrder(undefined)}
              className="bg-cosmic-midnight-plum rounded-md px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
