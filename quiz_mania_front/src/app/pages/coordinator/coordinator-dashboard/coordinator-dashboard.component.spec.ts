import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDashboardComponent } from './coordinator-dashboard.component';

describe('CoordinatorDashboardComponent', () => {
  let component: CoordinatorDashboardComponent;
  let fixture: ComponentFixture<CoordinatorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
