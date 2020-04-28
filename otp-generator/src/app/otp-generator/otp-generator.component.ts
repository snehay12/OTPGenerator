import { Component, OnInit } from '@angular/core';
import { OtpServiceService } from '../otp-service.service';

@Component({
  selector: 'app-otp-generator',
  templateUrl: './otp-generator.component.html',
  styleUrls: ['./otp-generator.component.css']
})
export class OtpGeneratorComponent implements OnInit {
  otp: string;
  otpService : OtpServiceService;
  constructor() {
    this.otpService=new  OtpServiceService();
   }

  ngOnInit() {
  }

  onGenerateOTP()
  {
    this.otp=this.otpService.getOTP();
  }

 

}
