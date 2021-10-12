import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EditBlogComponent } from "./edit-blog/edit-blog.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { EditSocialComponent } from "./edit-social/edit-social.component";

const routes: Routes = [
    { path: 'editBlog', component: EditBlogComponent },
    { path: 'editProfile', component: EditProfileComponent },
    { path: 'editSocial', component: EditSocialComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }