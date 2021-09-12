import { TextWithLinks } from "./Text";
import { Period } from "./Time";

type EmploymentStatus =
  | "full-time employee"
  | "part-time employee"
  | "internship";

type Company = string | TextWithLinks;
type Note = string | TextWithLinks;

export default interface WorkExperience {
  company: Company;
  employmentStatus: EmploymentStatus;
  period: Period;
  roles: string[];
  domains: string[];
  notes?: Note[];
}
