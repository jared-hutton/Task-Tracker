import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task?: Task;
  @Output() onDeleteClickEventEmitter: EventEmitter<Task> = new EventEmitter();
  @Output() onReminderToggleEventEmitter: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDeleteClick(task?: Task): void {
    this.onDeleteClickEventEmitter.emit(task);
  }

  onReminderToggle(task?: Task): void {
    if (this.task != null) {
      this.task.reminder = !this.task.reminder;
    }
    this.onReminderToggleEventEmitter.emit(task);
  }
}
