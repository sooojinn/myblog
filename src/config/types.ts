export interface PostMetaData {
  title: string;
  date: string;
  desc: string;
}

export interface PostMainData {
  content: string;
}

export interface PostData {
  data: PostMetaData;
  content: string;
}

export interface PostListItem extends PostMetaData {
  slug: string;
  url: string;
}
