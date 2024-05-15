import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollegeComponent } from './college.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CollegeComponent', () => {
  let component: CollegeComponent;
  let fixture: ComponentFixture<CollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollegeComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
