import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Task } from "../../Task";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  uiSubscription: Subscription;

  constructor(private uiService: UiService) {
    this.uiSubscription =
      this.uiService
        .onToggle()
        .subscribe(value => this.showAddTask = value);
  }


  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTaskEventEmitter.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
