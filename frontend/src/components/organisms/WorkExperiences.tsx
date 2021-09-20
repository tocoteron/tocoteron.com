import React from "react";
import {
  Divider,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { CalendarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import WorkExperience from "../../types/WorkExperience";
import { Date, Period } from "../../types/Time";

interface Props {
  workExperiences: WorkExperience[];
}

function PeriodDisplay({ period }: { period: Period }): JSX.Element {
  const toStr = (date?: Date) =>
    date ? `${date.year}/${date.month}/${date.day}` : "";

  const since = toStr(period.since);
  const until = toStr(period.until);

  return (
    <HStack>
      <CalendarIcon />
      <Text>
        {since} ~ {until}
      </Text>
    </HStack>
  );
}

export default function WorkExperiences(props: Props): JSX.Element {
  const { workExperiences } = props;
  return (
    <Stack>
      {workExperiences.map((workExperience) => {
        if (typeof workExperience.company === "string") {
          return <Heading>{workExperience.company}</Heading>;
        }

        return (
          <Stack>
            <Heading>
              {workExperience.company.links.length > 0 ? (
                <Link href={workExperience.company.links[0]} isExternal>
                  {workExperience.company.text}
                  <ExternalLinkIcon />
                </Link>
              ) : (
                workExperience.company.text
              )}
            </Heading>
            <HStack>
              {workExperience.roles.map((role) => (
                <Tag variant="outline">{role}</Tag>
              ))}
              {workExperience.domains.map((domain) => (
                <Tag variant="subtle">{domain}</Tag>
              ))}
            </HStack>
            <PeriodDisplay period={workExperience.period} />
            {workExperience.notes
              ? workExperience.notes.map((note) => {
                  if (typeof note === "string") {
                    return <Text>{note}</Text>;
                  }

                  if (note.links.length > 0) {
                    return (
                      <Link href={note.links[0]}>
                        {note.text}
                        <ExternalLinkIcon />
                      </Link>
                    );
                  }

                  return <Text>{note.text}</Text>;
                })
              : undefined}
            <Divider />
          </Stack>
        );
      })}
    </Stack>
  );
}
