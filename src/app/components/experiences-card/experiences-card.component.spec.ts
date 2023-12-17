import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesCardComponent } from './experiences-card.component';

describe('ExperiencesCardComponent', () => {
  let component: ExperiencesCardComponent;
  let fixture: ComponentFixture<ExperiencesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperiencesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
