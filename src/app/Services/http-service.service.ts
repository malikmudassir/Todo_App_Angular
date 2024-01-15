import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  // Import base URl
   url=environment.baseUrl

  constructor(private http: HttpClient) { }

  // Function to fetch the to-do list from the server
  getToDoList() {
    return this.http.get(`${this.url}`);
  }

  // Function to update an existing task by sending a patch request
  updateTask(id: number, updatedData: any) {
    return this.http.patch(`${this.url}/${id}`, updatedData);
  }

  // Function to delete a task by sending a delete request
  deleteTask(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // Function to create a new task by sending a post request
  createTask(body) {
    return this.http.post(`${this.url}`, body);
  }
}
