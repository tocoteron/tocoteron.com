import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import BlogPostCard from "../molecules/BlogPostCard";
import BlogPost from "../../types/BlogPost";

interface Props {
  posts: BlogPost[];
}

const BlogPostListDisplay: React.FC<Props> = ({ posts }) => (
  <Stack>
    {posts.map((post) => (
      <Stack key={post.id}>
        <Box py={4}>
          <BlogPostCard post={post} />
        </Box>
        <Divider />
      </Stack>
    ))}
  </Stack>
);

export default BlogPostListDisplay;
