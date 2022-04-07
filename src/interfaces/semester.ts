import { Course } from "./course";

export interface Semester {
    quarter: string;
    id: number;
    year: number;
    courses: Course[];
}
