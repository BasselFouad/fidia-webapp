import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointHeaderComponent } from './joint-header.component';

describe('JointHeaderComponent', () => {
  let component: JointHeaderComponent;
  let fixture: ComponentFixture<JointHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
