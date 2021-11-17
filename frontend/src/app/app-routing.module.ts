import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EditBlogComponent } from "./edit-blog/edit-blog.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { EditSocialComponent } from "./edit-social/edit-social.component";
import { FanfileComponent } from "./fanfile/fanfile.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainComponent } from "./main/main.component";
import { RegisterComponent } from "./register/register.component";
import { VideoComponent } from "./video/video.component";

const routes: Routes = [
    { path: 'editBlog', component: EditBlogComponent },
    { path: 'editProfile', component: EditProfileComponent },
    { path: 'editSocial', component: EditSocialComponent },
    { path: 'video', component: VideoComponent },
    { path: 'login' , component: LoginComponent},
    { path: 'dashboard' , component: DashboardComponent},
    { path: 'fanfile/:id' , component: FanfileComponent},
    { path: 'main' , component: MainComponent},
    { path: 'register' , component: RegisterComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }