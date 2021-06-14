import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApplicationModalComponent } from './delete-application-modal.component';

describe('DeleteApplicationModalComponent', () => {
  let component: DeleteApplicationModalComponent;
  let fixture: ComponentFixture<DeleteApplicationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteApplicationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteApplicationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
