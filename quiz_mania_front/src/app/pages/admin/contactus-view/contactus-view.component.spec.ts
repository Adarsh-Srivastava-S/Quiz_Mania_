import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusViewComponent } from './contactus-view.component';

describe('ContactusViewComponent', () => {
  let component: ContactusViewComponent;
  let fixture: ComponentFixture<ContactusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
