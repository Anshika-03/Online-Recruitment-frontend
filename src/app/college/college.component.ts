import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';
import { College } from '../college.model';  // Ensure you have a College model

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {
  collegeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private collegeService: CollegeService
  ) {
    this.createForm();
  }

  createForm() {
    this.collegeForm = this.fb.group({
      college_id: ['', Validators.required],
      college_name: ['', [Validators.required, Validators.minLength(3)]],
      college_description: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
      college_address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.collegeForm.valid) {

    }
  }

  redirectToJobsList() {
    this.router.navigate(['/job-list']);
  }
  navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
