import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Services/dataservice.service';

export interface Todo {
  id?: number;
  taskName: string;
  assignedDate?: string;
  dueDate: string;
  description: string;
  color?: string;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  addTaskForm: FormGroup;
  showUpdate: boolean;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { task?: Todo; update: boolean },
    private dialogRef: MatDialogRef<CreateTodoComponent>,
    private todoListDataService: DataserviceService
  ) {}

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      taskName: [''],
      dueDate: [''],
      description: ['']
    });

    // Determine if it's an update or create based on the presence of a task in data.
    this.showUpdate = !!this.data.task;

    if (this.data.task) {
      const task = this.data.task;
      this.addTaskForm.patchValue({
        taskName: task.taskName,
        dueDate: this.getDueDateFormat(task.dueDate),
        description: task.description
      });
    }
  }

  // Function to format the due date.
  getDueDateFormat(dueDate: string): string {
    const parts = dueDate.split('T');
    if (parts.length > 0) {
      return parts[0];
    }
    return '';
  }

  // Function to add or update a task.
  async addOrUpdateTask() {
    const task: Todo = {
      taskName: this.addTaskForm.controls['taskName'].value,
      dueDate: this.addTaskForm.controls['dueDate'].value,
      description: this.addTaskForm.controls['description'].value
    };

    if (this.data.task) {
      // Update an existing task.
      await this.todoListDataService.updateTask(this.data.task['_id'], task);
    } else {
      // Create a new task.
      await this.todoListDataService.createTask(task);
    }

    this.dialogRef.close({ task });
  }
}
