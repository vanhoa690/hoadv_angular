import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../types/Task';

@Component({
  selector: 'app-add-task',
  // standalone: true,
  // imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  text!: string;
  day!: string;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    if (!this.text) return alert('Please add a task');
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
