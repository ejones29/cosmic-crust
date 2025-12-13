import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

// ------------------
// Validation helpers
// ------------------
function validateContactForm(form: ContactFormState): ContactErrors {
  const errors: ContactErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  message?: string;
}

function ContactRoute() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactErrors>({});

  const mutation = useMutation({
    mutationKey: ["contact"],
    mutationFn: (formData: FormData) =>
      postContact(
        formData.get("name") as string,
        formData.get("email") as string,
        formData.get("message") as string,
      ),
  });

  function handleSubmit(formData: FormData) {
    const newErrors = validateContactForm({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      mutation.mutate(formData);
    }
  }

  return (
    <div className="bg-cosmic-beige min-h-screen px-6 py-10 md:py-16">
      <div className="shadow-card mx-auto max-w-xl rounded-[--radius-card] bg-white/60 p-8 backdrop-blur-md md:p-10">
        <h2 className="text-h2 text-cosmic-midnight-plum mb-8 text-center">
          Contact Us
        </h2>

        {mutation.isSuccess ? (
          <div className="text-center">
            {" "}
            <h3 className="text-cosmic-midnight-plum animate-fade-up text-center text-xl font-semibold">
              Message submitted! 🚀
            </h3>
            <Link
              to="/"
              className="text-cosmic-midnight-plum! mt-6 inline-block underline"
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <form
            action={handleSubmit}
            className="animate-fade-up-slow flex flex-col gap-7"
          >
            {/* NAME FIELD */}
            <FloatingInput
              label="Name"
              name="name"
              type="text"
              value={form.name}
              error={errors.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />

            {/* EMAIL FIELD */}
            <FloatingInput
              label="Email"
              name="email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />

            {/* MESSAGE FIELD */}
            <FloatingTextarea
              label="Message"
              name="message"
              value={form.message}
              error={errors.message}
              onChange={(v) => setForm({ ...form, message: v })}
            />

            <button
              className="bg-cosmic-orange rounded-[--radius-pill] px-6 py-3 text-center text-[16px] font-medium text-white transition hover:shadow-[0_0_14px_rgba(255,164,50,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={mutation.isPending}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// Floating INPUT component
// ------------------------------------------------------------
function FloatingInput({
  label,
  name,
  type,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`peer text-cosmic-space w-full rounded-lg border p-4 pt-6 text-[15px] ${error ? "border-red-500" : "border-cosmic-shadow/40"} focus:border-cosmic-orange focus:ring-cosmic-orange/30 bg-white transition focus:ring-2`}
        placeholder=" "
      />

      <label className="text-cosmic-space/50 peer-focus:text-cosmic-orange pointer-events-none absolute top-4 left-4 text-[15px] transition-all peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-focus:top-1 peer-focus:text-xs">
        {label}
      </label>

      {error && (
        <p className="animate-fade-up mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Floating TEXTAREA component
// ------------------------------------------------------------
function FloatingTextarea({
  label,
  name,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className={`peer text-cosmic-space min-h-[140px] w-full rounded-lg border p-4 pt-6 text-[15px] ${error ? "border-red-500" : "border-cosmic-shadow/40"} focus:border-cosmic-orange focus:ring-cosmic-orange/30 bg-white transition focus:ring-2`}
      />
      <label className="text-cosmic-space/50 peer-focus:text-cosmic-orange pointer-events-none absolute top-4 left-4 text-[15px] transition-all peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-focus:top-1 peer-focus:text-xs">
        {label}
      </label>

      {error && (
        <p className="animate-fade-up mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
