import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsNowComponent } from './contact-us-now.component';

describe('ContactUsNowComponent', () => {
  let component: ContactUsNowComponent;
  let fixture: ComponentFixture<ContactUsNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
