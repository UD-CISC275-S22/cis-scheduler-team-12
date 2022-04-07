import { Course } from "./course";

type Season = "Spring" | "Summer" | "Fall" | "Winter";

export interface Semester {
    quarter: Season;
    id: number;
    year: number;
    courses: Course[];
}
