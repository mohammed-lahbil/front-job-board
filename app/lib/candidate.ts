import { File } from "./file";

export type Candidate = {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    linkedin: string;
    email: string;
    resume: File;
}