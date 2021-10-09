import React from "react";
import {
  Heading,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import TextWithLinkLine from "../atoms/TextWithLinkLine";
import {
  infrastructures,
  naturalLanguages,
  programmingLanguages,
} from "../../data/skills";

const ProfileDisplay: React.FC = () => (
  <Stack spacing={8}>
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
      <UnorderedList stylePosition="inside">
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
        <UnorderedList stylePosition="inside">
          <ListItem>Web backend</ListItem>
          <ListItem>Web frontend</ListItem>
          <ListItem>iOS apps</ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Text>I am learning:</Text>
        <UnorderedList stylePosition="inside">
          <ListItem>Google Cloud Platform</ListItem>
          <ListItem>Cryptocurrency / Blockchain</ListItem>
          <ListItem>GraphQL</ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
    <Stack spacing={4}>
      <Stack>
        <Heading>Skills</Heading>
        <Heading size="md">Natural languages</Heading>
        <Wrap>
          {naturalLanguages.map((language) => (
            <WrapItem key={language.name}>
              <Tag>
                {language.isGoodAt && <StarIcon />}
                {language.name}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
      <Stack>
        <Heading size="md">Programming languages</Heading>
        <Wrap>
          {programmingLanguages.map((language) => (
            <WrapItem key={language.name}>
              <Tag>
                {language.isGoodAt && <StarIcon />}
                {language.name}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
      <Stack>
        <Heading size="md">Infrastructures</Heading>
        <Wrap>
          {infrastructures.map((infrastructure) => (
            <WrapItem key={infrastructure.name}>
              <Tag>
                {infrastructure.isGoodAt && <StarIcon />}
                {infrastructure.name}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </Stack>
  </Stack>
);

export default ProfileDisplay;
