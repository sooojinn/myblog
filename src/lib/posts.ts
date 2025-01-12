import fs from "fs";
import path from "path";
import { sync } from "glob";
import matter from "gray-matter";
import { PostData, PostMetaData, PostListItemProps } from "@/config/types";
import { extractPreviewContent } from "./utilis";

const postsDirectory = path.join(process.cwd(), "posts");

function parseMdxFile(category: string, slug: string): PostData {
  const filePath = path.join(postsDirectory, category, `${slug}.mdx`);
  const contents = fs.readFileSync(filePath, "utf8");
  const parsedData = matter(contents);
  return {
    data: parsedData.data as PostMetaData,
    content: parsedData.content,
  };
}

export async function getPostMetaData(
  category: string,
  slug: string
): Promise<PostMetaData> {
  const parsedData = parseMdxFile(category, slug);
  return { ...parsedData.data, category };
}

export async function getPostMainText(
  category: string,
  slug: string
): Promise<string> {
  const parsedData = parseMdxFile(category, slug);
  return parsedData.content;
}

export async function getPostPaths(category?: string): Promise<string[]> {
  const folder = category || "**";
  const postPaths = sync(`${postsDirectory}/${folder}/*.mdx`);
  return postPaths.map((postPath) =>
    postPath.replace(`${postsDirectory}/`, "").replace(/\.mdx$/, "")
  );
}

export async function getSortedPostList(
  category?: string,
  tag?: string
): Promise<PostListItemProps[]> {
  const postPaths = await getPostPaths(category);
  const postList: PostListItemProps[] = await Promise.all(
    postPaths.map(async (postPath) => {
      const [category, slug] = postPath.split("/").slice(-2);
      const url = `/posts/${category}/${slug}`;
      const postMetaData = await getPostMetaData(category, slug);
      const postMainContent = await getPostMainText(category, slug);
      const previewContent = extractPreviewContent(postMainContent);

      return { slug, url, ...postMetaData, previewContent };
    })
  );

  const sortedPostList = postList.sort((a, b) => {
    return a.date < b.date ? 1 : -1; // 날짜 기준 정렬
  });

  if (tag) {
    return sortedPostList.filter((post) => post.tags?.includes(tag)); // 태그 필터링
  }

  return sortedPostList;
}

export function getCategoryList(): string[] {
  const categoryList = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  return categoryList;
}

export async function countPosts(category?: string): Promise<number> {
  const sortedPostList = await getSortedPostList(category);
  return sortedPostList.length;
}

export function changeCategoryName(category: string): string {
  return category[0].toUpperCase() + category.slice(1, category.length);
}

export async function renderCategory(category?: string): Promise<string> {
  const changedCategory = changeCategoryName(category || "all");
  const count = await countPosts(category);
  const categoryWithCount = `${changedCategory} (${count})`;
  return categoryWithCount;
}

export async function getCategoryWithCount(): Promise<string[]> {
  const categoryList = getCategoryList();
  categoryList.unshift("");
  const categoryWithCountList = await Promise.all(
    categoryList.map((category) => renderCategory(category))
  );

  return categoryWithCountList;
}

export async function getAllTags() {
  const allPostMetaData = await getSortedPostList();
  const allTags = allPostMetaData
    .map((el) => el.tags)
    .flat()
    .filter((el) => el !== undefined);
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags;
}
