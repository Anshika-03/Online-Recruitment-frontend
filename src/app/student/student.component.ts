import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      student_id: ['', Validators.required],
      student_name: ['', Validators.required],
      student_mobile: ['', Validators.required],
      student_email: ['', [Validators.required, Validators.email]],
      student_address: ['', Validators.required],
      student_username: ['', Validators.required],
      student_password: ['', Validators.required],
      student_college_id: ['', Validators.required]
    });
  }

  addStudent() {
    if (this.studentForm.valid) {
      // Implement adding student logic here
      console.log('Student added:', this.studentForm.value);
    }
  }

  navigateBack() {

    console.log('Navigating back');
  }
}
