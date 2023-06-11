import { Component } from '@angular/core';
import { Module } from 'src/interfaces/module';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  isSidebarOpen = true;
  selectedTopic: Module|null=null;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
