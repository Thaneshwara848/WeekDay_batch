import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyservedemoComponent } from './myservedemo.component';

describe('MyservedemoComponent', () => {
  let component: MyservedemoComponent;
  let fixture: ComponentFixture<MyservedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyservedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyservedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
