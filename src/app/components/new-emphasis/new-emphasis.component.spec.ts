import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmphasisComponent } from './new-emphasis.component';

describe('NewEmphasisComponent', () => {
  let component: NewEmphasisComponent;
  let fixture: ComponentFixture<NewEmphasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEmphasisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEmphasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
