import { TextWithLinks } from "./Text";
import { Period } from "./Time";

type EmploymentStatus =
  | "Full-time employee"
  | "Part-time employee"
  | "Internship";

export default interface Career {
  company: TextWithLinks;
  employmentStatus: EmploymentStatus;
  period: Period;
  roles: string[];
  domains: string[];
  notes: TextWithLinks[];
}
