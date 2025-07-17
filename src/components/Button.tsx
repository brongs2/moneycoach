type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center border border-black text-black px-4 py-2 rounded-full hover:bg-gray-100 transition"
    >
      <span className="mr-2">{label}</span>
      <span>→</span>
    </button>
  );
}
