import { Date } from "./Time";

export default interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
