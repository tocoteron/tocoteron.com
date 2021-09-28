import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Link } from "@chakra-ui/react";

interface Props {
  text: string;
  link?: string;
}

const TextWithLinkHeading: React.FC<Props> = ({ text, link }) => {
  if (!link) {
    return <Heading>{text}</Heading>;
  }

  return (
    <Heading>
      <Link href={link} isExternal>
        {text}
        <ExternalLinkIcon />
      </Link>
    </Heading>
  );
};

TextWithLinkHeading.defaultProps = {
  link: undefined,
};

export default TextWithLinkHeading;
