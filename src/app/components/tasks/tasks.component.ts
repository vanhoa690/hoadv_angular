import { Component } from '@angular/core';
import { Task } from '../../../types/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
