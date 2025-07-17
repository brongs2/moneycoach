// components/SelectBox.tsx
type Props = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export default function SelectBox({ label, value, options, onChange }: Props) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-gray-500">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-400 rounded-md px-4 py-2 appearance-none bg-white bg-no-repeat bg-right"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg fill='black' height='12' viewBox='0 0 24 24' width='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
