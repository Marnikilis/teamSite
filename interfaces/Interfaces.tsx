export interface PostType {
  id: string;
  title: string;
  slug?: string;
  author?: {
    name: string;
    avatar: string;
  };
  postPhoto: string;
  text?: string;
}

export interface BlogI {
  posts: PostType[];
  pages: number;
}

export interface PostI {
  post: PostType;
}

export interface CommentType {
  id?: string;
  author: string;
  avatar: string;
  text?: string;
}

export interface CommentsType {
  comments: CommentType[];
}

export interface EmailType {
  email: string;
  setEmail: any;
}

export interface PaginationI {
  totalPages: number;
  path: string;
}
