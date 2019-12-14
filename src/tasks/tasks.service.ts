import { Injectable } from '@nestjs/common';
import { Task } from './taks.mode';

@Injectable()
export class TasksService {
    private tasks: Task[]= [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
