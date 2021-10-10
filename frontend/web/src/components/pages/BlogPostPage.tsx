import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Divider, Spinner, Stack, Text } from "@chakra-ui/react";
import BlogPost from "../../types/BlogPost";
import blogPosts from "../../data/blogPosts";
import BlogPostCard from "../molecules/BlogPostCard";

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

  return (
    <Container>
      {post ? (
        <Stack>
          <BlogPostCard post={post} />
          <Divider />
          <Text>{post.content}</Text>
        </Stack>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default BlogPostPage;
