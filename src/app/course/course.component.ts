import { Component, Input } from '@angular/core';
import { Course } from 'src/interfaces/course';
import { Module } from 'src/interfaces/module';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  isSidebarOpen = true;
  selectedTopic: Module|null=null;
  course: Course = {
    name: "Blockchain",
    id: "1",
    "description": "Course about blockchain",
    "status": "SUCCESSFUL"
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
