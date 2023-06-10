import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [
    { name: 'Course 1', description: 'Description of Course 1', id: "1", status:"SUCCESS" },
    { name: 'Course 2', description: 'Description of Course 2', id: "2" , status:"PROCESSING"},
    // Add more courses as needed
  ];

  searchQuery: string = '';

  get filteredCourses(): Course[] {
    return this.courses.filter(course => course.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }


}
