import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeTeamComponent } from './creative-team.component';

describe('CreativeTeamComponent', () => {
  let component: CreativeTeamComponent;
  let fixture: ComponentFixture<CreativeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
