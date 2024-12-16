import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectColumnsShortComponent } from './new-direct-columns-short.component';

describe('NewDirectColumnsShortComponent', () => {
  let component: NewDirectColumnsShortComponent;
  let fixture: ComponentFixture<NewDirectColumnsShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDirectColumnsShortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDirectColumnsShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
