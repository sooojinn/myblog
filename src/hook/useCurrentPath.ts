import { usePathname, useSearchParams } from "next/navigation";

export default function useCurrentPath() {
  const pathname = usePathname();
  const params = useSearchParams();

  const currentCategory = pathname.split("/")[2] || "";
  const currentTag = params.get("tag");

  return { currentCategory, currentTag, pathname };
}
