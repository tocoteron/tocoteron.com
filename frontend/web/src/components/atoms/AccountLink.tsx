import React from "react";
import { Button } from "@chakra-ui/react";
import Account from "../../types/Account";

interface Props {
  account: Account;
}

const AccountLink: React.FC<Props> = ({ account: { name, link } }) => (
  <Button as="a" href={link} target="_blank" variant="outline">
    {name}
  </Button>
);

export default AccountLink;
