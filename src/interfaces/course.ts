export interface Course {
    code: string;
    title: string;
    credits: number;
    prereqs: string[];
    completed: boolean;
    required: boolean;
}
