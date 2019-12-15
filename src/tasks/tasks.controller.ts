import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TasksStatus } from './taks.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { stat } from 'fs';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.geTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void {
        return this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TasksStatus
    ): Task {
        return this.tasksService.updateTaskStatus(id, status);
    }


}
