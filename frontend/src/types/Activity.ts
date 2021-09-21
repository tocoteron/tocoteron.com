import { Period } from "./Time";

export default interface Activity {
  period: Period;
  name: string;
  notes: string[];
}
