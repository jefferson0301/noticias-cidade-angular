import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmphasisCategoryComponent } from './new-emphasis-category.component';

describe('NewEmphasisCategoryComponent', () => {
  let component: NewEmphasisCategoryComponent;
  let fixture: ComponentFixture<NewEmphasisCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEmphasisCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEmphasisCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
