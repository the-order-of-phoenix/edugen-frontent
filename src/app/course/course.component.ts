import { Component } from '@angular/core';
import { Topic } from 'src/interfaces/topic';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  isSidebarOpen = true;
  selectedTopic: Topic|null=null;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
