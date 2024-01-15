import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './Services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private data: DataserviceService) {
    
  }
  ownerId: number; 
  ngOnInit(): void {
    
  }
 
}
