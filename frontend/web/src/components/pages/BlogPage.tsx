import React from "react";
import BlogTemplate from "../templates/BlogTemplate";
import blogPosts from "../../data/blogPosts";

const BlogPage: React.FC = () => (
  <BlogTemplate title="Tocoteron's Blog" posts={blogPosts} />
);

export default BlogPage;
