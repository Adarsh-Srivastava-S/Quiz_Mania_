import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorSignupComponent } from './coordinator-signup.component';

describe('CoordinatorSignupComponent', () => {
  let component: CoordinatorSignupComponent;
  let fixture: ComponentFixture<CoordinatorSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
