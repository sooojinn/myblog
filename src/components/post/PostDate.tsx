import { formatDate } from "@/lib/utilis";
import { HiCalendarDays } from "react-icons/hi2";

export default function PostDate({ children }: { children: string }) {
  const formatedDate = formatDate(children);
  return (
    <span className="flex items-center gap-1 text-[0.9rem] text-gray-400">
      <HiCalendarDays size={14} color="gray" />
      {formatedDate}
    </span>
  );
}
