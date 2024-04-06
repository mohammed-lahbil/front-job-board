import { Candidate } from "./candidate";
import { Job } from "./job";

export type JobApplication = {
    id: number;
    candidate: Candidate;
    job: Job;
    date: Date;
}