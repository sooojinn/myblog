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
    .replace(/^#{1,6}\s.*$/gm, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);
}
