import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSrvComponent } from './msg-srv.component';

describe('MsgSrvComponent', () => {
  let component: MsgSrvComponent;
  let fixture: ComponentFixture<MsgSrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgSrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
