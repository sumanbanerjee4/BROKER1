import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PathErrorComponent } from './path-error/path-error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { OnebhkComponent } from 'src/app/onebhk/onebhk.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { SearchAdvertisementComponent } from './search-advertisement/search-advertisement.component';

import {HttpClient,HttpClientModule } from '@angular/common/http';
import { PannelComponent } from './pannel/pannel.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    HomeComponent,
    AboutPageComponent,
    ContactUsComponent,
    PathErrorComponent,
    LoginComponent,
    SignupComponent,
    OnebhkComponent,
    CreateAdvertisementComponent,
    AdvertisementDetailsComponent,
    AdvertisementListComponent,
    SearchAdvertisementComponent,
    PannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  HttpClientModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
