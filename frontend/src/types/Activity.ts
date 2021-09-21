import { Date, Period } from "./Time";

export default interface Activity {
  at: Date | Period;
  name: string;
  notes: string[];
}
