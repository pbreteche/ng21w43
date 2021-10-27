import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactiveComponent } from './create-reactive.component';

describe('CreateReactiveComponent', () => {
  let component: CreateReactiveComponent;
  let fixture: ComponentFixture<CreateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
