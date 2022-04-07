import { Course } from "./course";

export interface Semester {
    quarter: string;
    year: number;
    courses: Course[];
}
