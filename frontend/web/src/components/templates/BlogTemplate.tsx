import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import BlogPostListDisplay from "../organisms/BlogPostListDisplay";
import BlogPost from "../../types/BlogPost";

interface Props {
  title: string;
  posts: BlogPost[];
}

const BlogTemplate: React.FC<Props> = ({ title, posts }) => (
  <Container>
    <Heading mb={8}>{title}</Heading>
    <BlogPostListDisplay posts={posts} />
  </Container>
);

export default BlogTemplate;
