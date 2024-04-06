export type Job = {
    id: number;
    title: string;
    description: string;
    location: string;
    requiredExperience: string;
    proposedSalary: string;
    remotePolicy: 'on_site' | 'hybrid' | 'full_remote';
}