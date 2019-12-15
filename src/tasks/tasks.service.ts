import { Injectable, Body } from '@nestjs/common';
import { Task, TasksStatus } from './taks.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    geTaskById(id: string): Task {
        return this.tasks.find(task => task.id = id);
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

    deleteTaskById(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTaskStatus(id: string, status: TasksStatus): Task {
        const task = this.geTaskById(id);
        task.status = status;
        return task;
    }
}
