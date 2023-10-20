import { Component } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter(x => x.id !== task.id));
  }

  setReminder(task: Task): void {
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService
      .addTask(task)
      .subscribe((task: Task) => this.tasks.push(task));
  }
}
