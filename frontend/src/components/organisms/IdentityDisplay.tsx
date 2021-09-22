import { Stack, Wrap } from "@chakra-ui/react";
import React from "react";
import Account from "../../types/Account";
import IdentityCard from "../molecules/IdentityCard";
import AccountLink from "../atoms/AccountLink";

interface Props {
  iconLink: string;
  name: string;
  phrase: string;
  accounts: Account[];
}

const IdentityDisplay: React.FC<Props> = ({
  iconLink,
  name,
  phrase,
  accounts,
}) => (
  <Stack py={8}>
    <IdentityCard iconLink={iconLink} name={name} phrase={phrase} />
    <Wrap>
      {accounts.map((account) => (
        <AccountLink account={account} />
      ))}
    </Wrap>
  </Stack>
);

export default IdentityDisplay;
