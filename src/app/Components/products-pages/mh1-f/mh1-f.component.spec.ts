import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MH1FComponent } from './mh1-f.component';

describe('MH1FComponent', () => {
  let component: MH1FComponent;
  let fixture: ComponentFixture<MH1FComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MH1FComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MH1FComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
