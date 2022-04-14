import { Course } from "./course";

export interface Semester {
    quarter: string;
    id: number;
    year: string;
    courses: Course[];
}
