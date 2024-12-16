import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsRocommendedComponent } from './card-news-rocommended.component';

describe('CardNewsRocommendedComponent', () => {
  let component: CardNewsRocommendedComponent;
  let fixture: ComponentFixture<CardNewsRocommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNewsRocommendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsRocommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
