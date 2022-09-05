import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedrivenfomrComponent } from './reactivedrivenfomr.component';

describe('ReactivedrivenfomrComponent', () => {
  let component: ReactivedrivenfomrComponent;
  let fixture: ComponentFixture<ReactivedrivenfomrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivedrivenfomrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivedrivenfomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
