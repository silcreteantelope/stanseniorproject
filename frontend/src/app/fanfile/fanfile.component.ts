import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FanfileService } from "../fanfile.service";

@Component({
  selector: 'app-fanfile',
  templateUrl: './fanfile.component.html',
  styleUrls: ['./fanfile.component.css']
})
export class FanfileComponent implements OnInit {
  jsonArray =[
  	{
  	_id:"614927d687b07372c6681465",
	name:"Sam",
	email:"Samthegreat@gmail.com",
	sport:"Bear Wrestling",
	position:"Top",
	association:"Top",
	team:"Blue Devils",
	birth_year:2000,
	class_of:2019,
	}
  ]
  
  data:any;

  constructor(private fanfile: FanfileService) {
  }

    ngOnInit() {
        this.fanfile.getffile().subscribe(data => this.data = data);
	}   
}