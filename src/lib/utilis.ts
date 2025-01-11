import GithubSlugger from "github-slugger";

export function parseMarkdownHeading(str: string) {
  const slugger = new GithubSlugger();
  const depth = (str.match(/^#+/)?.[0].length ?? 1) - 1;
  const headingText = str.replace(/^#+/, "").trim();
  const headingLink = slugger.slug(headingText);

  return { depth, headingText, headingLink };
}

export function extractPreviewContent(markdown: string) {
  return markdown
    .replace(/^#{1,6}\s.*$/gm, "") // 헤더 제거
    .replace(/\(https?:\/\/[^\s)]+\)/g, "") // (https://... ) 패턴 제거
    .replace(/<[^>]*>/g, "") // HTML 태그 제거
    .replace(/\s+/g, " ") // 공백 정리
    .trim()
    .slice(0, 200); // 최대 200자 반환
}
