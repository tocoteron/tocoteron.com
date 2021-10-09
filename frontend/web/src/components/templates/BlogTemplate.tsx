import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import BlogPostCardList from "../organisms/BlogPostCardList";
import BlogPost from "../../types/BlogPost";

interface Props {
  title: string;
  posts: BlogPost[];
}

const BlogTemplate: React.FC<Props> = ({ title, posts }) => (
  <Container>
    <Heading mb={8}>{title}</Heading>
    <BlogPostCardList posts={posts} />
  </Container>
);

export default BlogTemplate;
