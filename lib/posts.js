import fs from "fs";
import path from "path";
import { sync } from "glob";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function parseMdxFile(category, slug) {
  const filePath = path.join(postsDirectory, category, slug);
  const contents = fs.readFileSync(filePath, "utf8");
  const parsedData = matter(contents);
  return parsedData;
}

export function getPostMetaData(category, slug) {
  const parsedData = parseMdxFile(category, slug);
  return parsedData.data;
}

export function getPostMainText(category, slug) {
  const parsedData = parseMdxFile(category, slug);
  return parsedData.content;
}

const getPostPaths = (category) => {
  const folder = category || "**";
  const postPaths = sync(`${postsDirectory}/${folder}/*.mdx`);
  return postPaths;
};

export function getSortedPostList(category) {
  const postPaths = getPostPaths(category);
  const postList = postPaths.map((postPath) => {
    const [category, slug] = postPath.split("/").slice(-2);
    const url = `/posts/${category}/${slug}`;
    const postMetaData = getPostMetaData(category, slug);

    return { slug, url, ...postMetaData };
  });

  const sortedPostList = postList.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedPostList;
}

export function getCategoryList() {
  const categoryList = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  return categoryList;
}

export function CountPosts(category) {
  return getSortedPostList(category).length;
}
