import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpGeneratorComponent } from './otp-generator.component';

describe('OtpGeneratorComponent', () => {
  let component: OtpGeneratorComponent;
  let fixture: ComponentFixture<OtpGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
