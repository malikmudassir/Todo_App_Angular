
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatTableModule} from '@angular/material/table';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {FullCalendarModule} from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import daygridPlugin from '@fullcalendar/daygrid';
import { MatSelectModule } from '@angular/material/select';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CreateTodoComponent } from './dialogs/create-todo/create-todo.component';
import { MatDialogModule } from '@angular/material/dialog';

FullCalendarModule.registerPlugins([
  interactionPlugin,
  daygridPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CreateTodoComponent,
  

  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    DragDropModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgxMaterialTimepickerModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule

   
  ],
   
  providers: [
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
