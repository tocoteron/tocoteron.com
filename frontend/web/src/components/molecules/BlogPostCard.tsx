import React from "react";
import {
  Heading,
  HStack,
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
    <Heading>{post.title}</Heading>
    <Wrap>
      {post.tags.map((tag) => (
        <WrapItem>
          <Tag>{tag}</Tag>
        </WrapItem>
      ))}
    </Wrap>
    <Wrap>
      <HStack>
        <DateWithIcon date={post.createdAt} />
      </HStack>
      <HStack>
        <Text>(</Text>
        <Text>Updated at</Text>
        <DateWithIcon date={post.updatedAt} />
        <Text>)</Text>
      </HStack>
    </Wrap>
  </Stack>
);

export default BlogPostCard;
