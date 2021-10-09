import React from "react";
import { Box, Container, Divider, Heading, Stack } from "@chakra-ui/react";
import BlogPostCard from "../molecules/BlogPostCard";
import BlogPost from "../../types/BlogPost";

interface Props {
  title: string;
  posts: BlogPost[];
}

const BlogTemplate: React.FC<Props> = ({ title, posts }) => (
  <Container>
    <Heading mb={8}>{title}</Heading>
    {posts.map((post) => (
      <Stack>
        <Box py={4}>
          <BlogPostCard post={post} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Container>
);

export default BlogTemplate;
