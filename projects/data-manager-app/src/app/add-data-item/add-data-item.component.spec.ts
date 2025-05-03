import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataItemComponent } from './add-data-item.component';

describe('AddDataItemComponent', () => {
  let component: AddDataItemComponent;
  let fixture: ComponentFixture<AddDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDataItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
