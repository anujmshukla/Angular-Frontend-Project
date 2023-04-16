import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowUSComponent } from './know-us.component';

describe('KnowUSComponent', () => {
  let component: KnowUSComponent;
  let fixture: ComponentFixture<KnowUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
