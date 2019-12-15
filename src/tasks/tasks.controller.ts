import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './taks.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[]{
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(
        @Body('tittle') tittle: string,
        @Body('description') description: string,
    ): Task{
        return this.tasksService.createTask(tittle, description);
    }
}
