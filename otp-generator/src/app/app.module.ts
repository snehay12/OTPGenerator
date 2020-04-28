import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpGeneratorComponent } from './otp-generator/otp-generator.component';
import { OtpServiceService } from './otp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    OtpGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OtpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
