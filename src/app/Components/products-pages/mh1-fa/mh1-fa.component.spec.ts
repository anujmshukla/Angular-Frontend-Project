import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MH1FAComponent } from './mh1-fa.component';

describe('MH1FAComponent', () => {
  let component: MH1FAComponent;
  let fixture: ComponentFixture<MH1FAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MH1FAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MH1FAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
