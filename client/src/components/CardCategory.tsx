const CardCategory = ({ emoji, label }: { emoji: string; label: string }) => (
  <button className="rounded-card shadow-card hover:shadow-deep bg-cosmic-sand flex flex-col items-center p-4 transition hover:cursor-pointer md:p-6 md:text-[15px]">
    <span className="text-cosmic-space mb-2 text-3xl">{emoji}</span>
    <span className="text-cosmic-space font-sans text-sm">{label}</span>
  </button>
);
export default CardCategory;
