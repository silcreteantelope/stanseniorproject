import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EditProfileService} from "../edit-profile.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  data:any;

  constructor(private profile: EditProfileService) {
  }

    ngOnInit() {
        this.profile.getffile().subscribe(data => this.data = data);
	}   
}