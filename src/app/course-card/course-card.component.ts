import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/interfaces/course';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course!: Course;
  constructor(private router: Router, private toaster: ToastrService) {}

  openCourse(course: Course) {
    if(course.status == "PROCESSING"){
      this.toaster.warning("Course is still processing please wait for some time", "PROCESSING");
    } else {
      this.router.navigate(['/course', course.id]);
    }
  }

  getStatusClass(status:string): string{
    if(status == 'SUCCESS'){
      return "status-border-success"
    }
    else if(status == 'PROCESSING'){
      return "status-border-processing"
    }
    return ""
  }
}
