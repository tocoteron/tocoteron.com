import React from "react";
import { Container, Divider, Stack, Text } from "@chakra-ui/react";
import BlogPost from "../../types/BlogPost";
import BlogPostCard from "../molecules/BlogPostCard";

interface Props {
  post: BlogPost;
}

const BlogPostTemplate: React.FC<Props> = ({ post }) => (
  <Container>
    <Stack>
      <BlogPostCard post={post} />
      <Divider />
      <Text>{post.content}</Text>
    </Stack>
  </Container>
);

export default BlogPostTemplate;
