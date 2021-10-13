import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NewpostComponent } from './components/newpost/newpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PhotosComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
