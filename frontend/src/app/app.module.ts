import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditSocialComponent } from './edit-social/edit-social.component';
import { NavComponent } from './nav/nav.component';
import { FanfileComponent } from './fanfile/fanfile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    EditBlogComponent,
    EditProfileComponent,
    EditSocialComponent,
    NavComponent,
    FanfileComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot([
	{path: '', component:
	MainComponent}
	]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
