import { TextWithLinks } from "./Text";
import { Period } from "./Time";

type EmploymentStatus =
  | "full-time employee"
  | "part-time employee"
  | "internship";

export default interface Career {
  company: TextWithLinks;
  employmentStatus: EmploymentStatus;
  period: Period;
  roles: string[];
  domains: string[];
  notes: TextWithLinks[];
}
