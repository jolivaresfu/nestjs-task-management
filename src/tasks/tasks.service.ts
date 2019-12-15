import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './taks.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class TasksService {
    private tasks: Task[]= [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(tittle: string, description: string): Task {
        const task: Task = {
            id: uuid(),
            tittle,
            description,
            status: TasksStatus.OPEN,
        }
        
        this.tasks.push(task);
        return task;
    }
}
