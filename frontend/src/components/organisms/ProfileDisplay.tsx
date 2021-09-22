import React from "react";
import {
  Heading,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
  Wrap,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import TextWithLinkLine from "../atoms/TextWithLinkLine";

const ProfileDisplay: React.FC = () => (
  <Stack>
    <Stack>
      <Heading>Hi</Heading>
      <Text>
        I&#39;m a 4th year college student who loves computers. In the college,
        I&#39;m researching security for machine learning model.
      </Text>
    </Stack>
    <Stack>
      <Heading>What do I like to</Heading>
      <Text>I like to:</Text>
      <UnorderedList>
        <ListItem>
          Code (Visit &nbsp;
          <TextWithLinkLine
            text="my GitHub"
            link="https://github.com/tocoteron"
          />{" "}
          )
        </ListItem>
        <ListItem>Model data</ListItem>
        <ListItem>Consider algotithms</ListItem>
        <ListItem>Design architectures</ListItem>
        <ListItem>Learn new techs</ListItem>
      </UnorderedList>
    </Stack>
    <Stack>
      <Heading>Technical domains</Heading>
      <Stack>
        <Text>I devlelop:</Text>
        <UnorderedList>
          <ListItem>Web backend</ListItem>
          <ListItem>Web frontend</ListItem>
          <ListItem>iOS apps</ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Text>I am learning:</Text>
        <UnorderedList>
          <ListItem>Google Cloud Platform</ListItem>
          <ListItem>Cryptocurrency / Blockchain</ListItem>
          <ListItem>GraphQL</ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
    <Stack>
      <Heading>Languages</Heading>
      <Wrap>
        <Tag>
          <StarIcon />
          Japanese
        </Tag>
        <Tag>English</Tag>
      </Wrap>
      <Wrap>
        <Tag>
          <StarIcon />C
        </Tag>
        <Tag>C++</Tag>
        <Tag>C#</Tag>
        <Tag>Java</Tag>
        <Tag>
          <StarIcon />
          Go
        </Tag>
        <Tag>Rust</Tag>
        <Tag>Swift</Tag>
        <Tag>JavaScript</Tag>
        <Tag>
          <StarIcon />
          TypeScript
        </Tag>
        <Tag>Python 3</Tag>
        <Tag>Scala 3</Tag>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
      </Wrap>
    </Stack>
  </Stack>
);

export default ProfileDisplay;
