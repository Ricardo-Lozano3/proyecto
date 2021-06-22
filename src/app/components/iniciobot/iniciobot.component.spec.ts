import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciobotComponent } from './iniciobot.component';

describe('IniciobotComponent', () => {
  let component: IniciobotComponent;
  let fixture: ComponentFixture<IniciobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
