import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MH1DComponent } from './mh1-d.component';

describe('MH1DComponent', () => {
  let component: MH1DComponent;
  let fixture: ComponentFixture<MH1DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MH1DComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MH1DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
