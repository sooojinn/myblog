import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // posts 폴더 안에 있는 파일명들을 가져온다.
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 파일 명에서 ".mdx" 확장자를 제거한다.
    const id = fileName.replace(/\.mdx$/, "");

    // 마크다운 파일을 읽는다.
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 메타데이터를 파싱하기 위해 gray-matter를 사용한다.
    const matterResult = matter(fileContents);
    const url = `/posts/${fileName}`;

    // id와 데이터를 한 객체로 묶는다.
    return {
      id,
      url,
      ...matterResult.data,
    };
  });
  // date 순으로 포스트를 정렬한다.
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostDetails(slug) {
  const fullPath = path.join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return matterResult.content;
}
