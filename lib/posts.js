import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function parseMdxFile(slug) {
  const filePath = path.join(postsDirectory, slug);
  const contents = fs.readFileSync(filePath, "utf8");
  const parsedData = matter(contents);
  return parsedData;
}

export function getPostMetaData(slug) {
  const parsedData = parseMdxFile(slug);
  return parsedData.data;
}

export function getPostMainText(slug) {
  const parsedData = parseMdxFile(slug);
  return parsedData.content;
}

export function getSortedPostList() {
  // posts 폴더 안에 있는 파일명들 가져오기
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 파일 명에서 ".mdx" 확장자 제거
    const id = fileName.replace(/\.mdx$/, "");
    const url = `/posts/${fileName}`;
    const postMetaData = getPostMetaData(fileName);

    return {
      id,
      url,
      ...postMetaData,
    };
  });

  // date 순으로 포스트 정렬
  const sortedPostList = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedPostList;
}
