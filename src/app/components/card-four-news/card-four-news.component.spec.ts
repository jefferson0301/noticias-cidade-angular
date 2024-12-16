import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFourNewsComponent } from './card-four-news.component';

describe('CardFourNewsComponent', () => {
  let component: CardFourNewsComponent;
  let fixture: ComponentFixture<CardFourNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFourNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFourNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
