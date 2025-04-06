export function extractPreviewContent(markdown: string) {
  return markdown
    .replace(/^#{1,6}\s.*$/gm, "") // 헤더 제거
    .replace(/\(https?:\/\/[^\s)]+\)/g, "") // (https://... ) 패턴 제거
    .replace(/<[^>]*>/g, "") // HTML 태그 제거
    .replace(/\*\*(.*?)\*\*/g, "$1") // ** 굵게 제거
    .replace(/`([^`]*)`/g, "$1") // 백틱 제거
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // 마크다운 이미지 제거
    .replace(/[\[\]]/g, "") // 대괄호 제거
    .replace(/\s+/g, " ") // 공백 정리
    .trim()
    .slice(0, 300); // 최대 300자 반환
}

export function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-");
  return `${year}년 ${month}월 ${day}일`;
}

export function capitalizeFirstLetter(str: string): string {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export const removeCodeBlocks = (text: string): string => {
  return text.replace(/```[\s\S]*?```/g, ""); // 코드 블럭 제거
};

export const scrollToHeadingCenterById = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // 요소가 뷰포트 중앙에 오도록 스크롤
    const topOffset = window.innerHeight / 2 - element.offsetHeight / 2;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - topOffset,
      behavior: "smooth",
    });
  }
};
