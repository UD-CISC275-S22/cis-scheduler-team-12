export interface Course {
    id: number;
    code: string;
    title: string;
    credits: number;
    prereqs: string[];
    completed: boolean;
    required: boolean;
}
