import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAutoComponent } from './new-auto.component';

describe('NewAutoComponent', () => {
  let component: NewAutoComponent;
  let fixture: ComponentFixture<NewAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
