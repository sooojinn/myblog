export default function Tag({ children }: { children: string }) {
  return (
    <div className="bg-gray-200 text-main rounded-[3px] text-[0.9em] px-1.5 py-1 hover:cursor-pointer">
      #{children}
    </div>
  );
}
