import { CreateTodoComponent, Todo } from './../../dialogs/create-todo/create-todo.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Services/dataservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  tasksArray: Todo[] = [];

  constructor(
    public dialog: MatDialog,
    private toDoListDataService: DataserviceService
  ) { }

  ngOnInit(): void {
    // Load the to-do list when the component is initialized.
    this.getToDoList();
  }

  // Function to fetch the to-do list from the service.
  async getToDoList() {
    const res = await this.toDoListDataService.getToDoList();
    if (res['data']['data']) {
      this.tasksArray = res['data']['data'];
    }
  }

  // Function to open the task dialog for creating or editing a task.
  openDialog(item?: Todo): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      height: '70%',
      width: '70%',
      data: {
        task: item,
        update: !!item
      }
    });

    // Subscribe to the dialog's afterClosed event to update the task list if necessary.
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getToDoList(); // Reload the task list when a task is added or updated.
      }
    });
  }

  // Function to remove a task.
  async removeTask(item: Todo) {
    const id = item['_id'];
    await this.toDoListDataService.deleteTask(id);
    this.getToDoList(); // Reload the task list after deleting a task.
  }
}
