export interface PostMetaData {
  title: string;
  date: string;
  tags: string[];
  keywords: string[];
  category: string;
}

export interface PostData {
  data: PostMetaData;
  content: string;
}

export interface PostListItemProps extends PostMetaData {
  slug: string;
  url: string;
  previewContent: string;
}

export interface CategoryAndLabel {
  category: string;
  label: string;
}
