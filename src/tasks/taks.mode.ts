export interface Task {
    id: string;
    tittle: string;
    description: string;
    status: TasksStatus;
}

export enum TasksStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}