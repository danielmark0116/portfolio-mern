export interface postData {
  title: string;
  author: string;
  content: string;
  id: string;
  _id: string;
  createdAt: Date;
  likes: number;
  updatedAt: Date;
}

export interface postDataElements {
  title?: string;
  author?: string;
  content?: string;
  id?: string;
  _id?: string;
  createdAt?: Date;
  likes?: number;
  updatedAt?: Date;
}
