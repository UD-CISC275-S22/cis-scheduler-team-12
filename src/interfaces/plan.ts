import { Semester } from "./semester";

export interface Plan {
    id: number;
    name: string;
    semesters: Semester[];
}
