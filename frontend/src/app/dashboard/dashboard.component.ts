import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FanfileService} from "../pulldata.service";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any=[
  	{name: "Sign in to Access Account"}
  ];

  constructor(private fanfile: FanfileService) {
  }

    ngOnInit() {
        this.fanfile.getffile().subscribe(data => this.data = data);
	}   
}