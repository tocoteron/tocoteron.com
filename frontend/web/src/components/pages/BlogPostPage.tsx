import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingDisplay from "../organisms/LoadingDisplay";
import BlogPostTemplate from "../templates/BlogPostTemplate";
import BlogPost from "../../types/BlogPost";
import blogPosts from "../../data/blogPosts";

interface PathParams {
  postId: string;
}

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<PathParams>();
  const [post, setPost] = useState<BlogPost>();

  useEffect(() => {
    const targetPost = blogPosts.find((p) => p.id === Number(postId));

    if (targetPost) {
      setPost(targetPost);
    }
  }, [postId]);

  return post ? <BlogPostTemplate post={post} /> : <LoadingDisplay />;
};

export default BlogPostPage;
