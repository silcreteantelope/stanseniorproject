import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FanfileService} from "../pulldata.service";

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
	data:any;

	constructor(private fanfile: FanfileService) {}

    ngOnInit() {
    	this.fanfile.getffile().subscribe(data => this.data = data);
	}   
}