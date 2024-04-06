import { Candidate } from "./candidate";

export type File = {
    id: number;
    fileName: string;
    content: [];
    candidate: Candidate;
}