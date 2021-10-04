import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditSocialComponent } from './edit-social/edit-social.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EditBlogComponent,
    EditProfileComponent,
    EditSocialComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
