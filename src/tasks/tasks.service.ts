import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './taks.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
    private tasks: Task[]= [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { tittle, description } = createTaskDto;

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
