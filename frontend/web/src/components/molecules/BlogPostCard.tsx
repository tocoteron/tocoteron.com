import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import BlogPost from "../../types/BlogPost";
import DateWithIcon from "../atoms/DateWithIcon";

interface Props {
  post: BlogPost;
}

const BlogPostCard: React.FC<Props> = ({ post }) => (
  <Stack>
    <Link as={ReactRouterLink} to={`/blog/${post.id}`}>
      <Heading>{post.title}</Heading>
    </Link>
    <Wrap>
      {post.tags.map((tag) => (
        <WrapItem key={tag}>
          <Tag>{tag}</Tag>
        </WrapItem>
      ))}
    </Wrap>
    <Wrap>
      <WrapItem>
        <HStack>
          <DateWithIcon date={post.createdAt} />
        </HStack>
      </WrapItem>
      <WrapItem>
        <HStack>
          <Text>(</Text>
          <Text>Updated at</Text>
          <DateWithIcon date={post.updatedAt} />
          <Text>)</Text>
        </HStack>
      </WrapItem>
    </Wrap>
  </Stack>
);

export default BlogPostCard;
