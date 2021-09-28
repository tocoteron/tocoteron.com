import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  link?: string;
}

const TextWithLinkLine: React.FC<Props> = ({ text, link }) => {
  if (!link) {
    return <Text>{text}</Text>;
  }

  return (
    <Link href={link} isExternal>
      {text}
      <ExternalLinkIcon />
    </Link>
  );
};

TextWithLinkLine.defaultProps = {
  link: undefined,
};

export default TextWithLinkLine;
