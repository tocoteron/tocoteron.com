import { TextWithLinks } from "./Text";
import { Date, Period } from "./Time";

type Note = string | TextWithLinks;

export default interface Activity {
  at: Date | Period;
  name: string;
  notes?: Note[];
}
