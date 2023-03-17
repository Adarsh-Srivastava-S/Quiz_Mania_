import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaqsComponent } from './add-faqs.component';

describe('AddFaqsComponent', () => {
  let component: AddFaqsComponent;
  let fixture: ComponentFixture<AddFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFaqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
