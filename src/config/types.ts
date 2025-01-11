export interface PostMetaData {
  title: string;
  date: string;
  tags: string[];
}

export interface PostMainData {
  content: string;
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
