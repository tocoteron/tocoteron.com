import React from "react";
import BlogTemplate from "../templates/BlogTemplate";
import BlogPost from "../../types/BlogPost";

const posts: BlogPost[] = [
  {
    id: 0,
    title: "Hello, world",
    content: "# Hello\nThis is a first post.",
    tags: ["test"],
    createdAt: {
      year: 2021,
      month: 10,
      day: 10,
    },
    updatedAt: {
      year: 2021,
      month: 10,
      day: 10,
    },
  },
  {
    id: 1,
    title: "Hello, world",
    content: "# Hello\nThis is a first post.",
    tags: ["test"],
    createdAt: {
      year: 2021,
      month: 10,
      day: 10,
    },
    updatedAt: {
      year: 2021,
      month: 10,
      day: 10,
    },
  },
];

const BlogPage: React.FC = () => (
  <BlogTemplate title="Tocoteron's Diary" posts={posts} />
);

export default BlogPage;
