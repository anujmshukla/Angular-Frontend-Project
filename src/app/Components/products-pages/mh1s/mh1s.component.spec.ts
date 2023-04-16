import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MH1sComponent } from './mh1s.component';

describe('MH1sComponent', () => {
  let component: MH1sComponent;
  let fixture: ComponentFixture<MH1sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MH1sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MH1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
