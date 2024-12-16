import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectColumnComponent } from './new-direct-column.component';

describe('NewDirectColumnComponent', () => {
  let component: NewDirectColumnComponent;
  let fixture: ComponentFixture<NewDirectColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDirectColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDirectColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
