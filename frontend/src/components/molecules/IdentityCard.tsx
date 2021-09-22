import React from "react";
import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";

interface Props {
  iconLink: string;
  name: string;
  phrase: string;
}

const IdentityCard: React.FC<Props> = ({ iconLink, name, phrase }) => (
  <HStack>
    <Avatar src={iconLink} size="xl" />
    <Stack>
      <Heading>{name}</Heading>
      <Text>{phrase}</Text>
    </Stack>
  </HStack>
);

export default IdentityCard;
