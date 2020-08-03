import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterationPcCpComponent } from './interation-pc-cp.component';

describe('InterationPcCpComponent', () => {
  let component: InterationPcCpComponent;
  let fixture: ComponentFixture<InterationPcCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterationPcCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterationPcCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
