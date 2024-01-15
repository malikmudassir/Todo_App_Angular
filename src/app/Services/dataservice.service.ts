import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpservice: HttpServiceService) { }

  // Function to get the to-do list
  getToDoList() {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        this.httpservice.getToDoList().subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }

  // Function to create a new task
  createTask(body) {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        this.httpservice.createTask(body).subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }

  // Function to update an existing task
  updateTask(id, updatedData) {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        this.httpservice.updateTask(id, updatedData).subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }

  // Function to delete a task
  deleteTask(id) {
    return new Promise((resolve, reject) => {
      const response = { data: null, status: false, message: null };
      try {
        this.httpservice.deleteTask(id).subscribe(
          (data) => {
            response.data = data;
            response.message = 'success';
            response.status = true;
            resolve(response);
          },
          (err) => {
            response.message = err;
            resolve(response);
          }
        );
      } catch (error) {
        response.message = error;
        resolve(response);
      }
    });
  }
}
