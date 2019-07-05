
import { AboutPageComponent } from "./about-page/about-page.component";
import { HomeComponent } from "./home/home.component";
// import { RegistrationFormComponent } from "./registration-form/registration-form.component";
// import { LoginComponent } from "./login/login.component";
// import { SignupComponent } from "./signup/signup.component";
// import { PathErrorComponent } from "./path-error/path-error.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { OnebhkComponent } from "src/app/onebhk/onebhk.component";
import { AdvertisementListComponent } from "./advertisement-list/advertisement-list.component";
import { CreateAdvertisementComponent } from "./create-advertisement/create-advertisement.component";
import { SearchAdvertisementComponent } from "./search-advertisement/search-advertisement.component";
import { PannelComponent } from "./pannel/pannel.component";
import { AdvertisementDetailsComponent } from "./advertisement-details/advertisement-details.component";



const routes: Routes = [ 
    {path: 'about', component:AboutPageComponent},
    {path: 'home', component:HomeComponent},
    {path: 'onebhk',component:OnebhkComponent},
    {path:'contact',component:ContactUsComponent},
    ,
    {path:'advertisement', component:PannelComponent,

        children: [
      {
      path:  'addlist',component:  AdvertisementListComponent,

           children:[{path:'adddetails',component:AdvertisementDetailsComponent}]
      },
     
        {
        path:  'add',component:   CreateAdvertisementComponent
        },
       
          {
          path:  'findbyarea', component:  SearchAdvertisementComponent
          }]},
    {path:'', redirectTo:'./home', pathMatch:'full'},
    // {path:'regform', component:RegistrationFormComponent},
     {path:'login', component:LoginComponent},
    // {path:'signup', component:SignupComponent},
    // {path:'patherror',component:PathErrorComponent},
    //{ path: '', redirectTo: 'advertisement', pathMatch: 'full' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


