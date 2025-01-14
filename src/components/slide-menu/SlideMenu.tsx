import { GITHUB_LINK } from "@/config/const";
import { SlideMenuItem } from "./SlideMenuItem";
import { SlideMenuPost } from "./SlideMenuPost";
import { SlideMenuTags } from "./SlideMenuTags";

export default function SlideMenu() {
  return (
    <div className="w-[300px] flex flex-col">
      <SlideMenuItem href="/about">About</SlideMenuItem>
      <SlideMenuPost />
      <SlideMenuTags />
      <SlideMenuItem href={GITHUB_LINK}>Github</SlideMenuItem>
    </div>
  );
}
