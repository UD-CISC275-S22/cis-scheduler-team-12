import { Semester } from "./semester";

export interface Plan {
    name: string;
    semesters: Semester[];
}
