const CardCategory = ({ emoji, label }: { emoji: string; label: string }) => (
  <button className="rounded-card shadow-card hover:shadow-deep flex flex-col items-center bg-white p-4 transition md:p-6 md:text-[15px]">
    <span className="mb-2 text-3xl">{emoji}</span>
    <span className="text-cosmic-space font-sans text-sm">{label}</span>
  </button>
);
export default CardCategory;
