import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {

  private OTP: string;
  constructor() { }

  public getOTP()
  {
    this.OTP=this.generatorOtp();
    return this.OTP;
  }
  generatorOtp()
  {
    // All possible characters of my OTP 
    let str: string = "0123456789"; 
    let n = str.length; 
  
    // String to hold my OTP 
    let OTP : string=""; 
  
    for (var i = 1; i <= 6; i++) 
      OTP+=str.charAt(Math.abs((Math.random()*10)%n));

    return OTP;
} 
  
}
