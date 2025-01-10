import fs from "fs";
import path from "path";
import { sync } from "glob";
import matter from "gray-matter";
import { PostData, PostMetaData, PostListItemProps } from "@/config/types";

const postsDirectory = path.join(process.cwd(), "posts");

function parseMdxFile(category: string, slug: string): PostData {
  const filePath = path.join(postsDirectory, category, slug);
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
  return parsedData.data;
}

export function getPostMainText(category: string, slug: string): string {
  const parsedData = parseMdxFile(category, slug);
  return parsedData.content;
}

export async function getPostPaths(category?: string): Promise<string[]> {
  const folder = category || "**";
  const postPaths = sync(`${postsDirectory}/${folder}/*.mdx`);
  return postPaths;
}

export async function getSortedPostList(
  category?: string
): Promise<PostListItemProps[]> {
  const postPaths = await getPostPaths(category);
  const postList: PostListItemProps[] = await Promise.all(
    postPaths.map(async (postPath) => {
      const [category, slug] = postPath.split("/").slice(-2);
      const url = `/posts/${category}/${slug}`;
      const postMetaData = await getPostMetaData(category, slug); // 비동기 호출

      return { slug, url, ...postMetaData }; // PostListItem 형태로 반환
    })
  );

  const sortedPostList = postList.sort((a, b) => {
    return a.date < b.date ? 1 : -1; // 날짜 기준 정렬
  });

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
  const renderedCategory = `${changedCategory} (${count})`;
  return renderedCategory;
}

export async function getRenderedCategoryList(): Promise<string[]> {
  const categoryList = getCategoryList();
  categoryList.unshift("");
  const renderedCategoryList = await Promise.all(
    categoryList.map((category) => renderCategory(category))
  );

  return renderedCategoryList;
}
