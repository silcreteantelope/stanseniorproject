import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FanfileService } from "../fanfile.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fanfile',
  templateUrl: './fanfile.component.html',
  styleUrls: ['./fanfile.component.css']
})
export class FanfileComponent implements OnInit {
  
  data:any;

  constructor(private fanfile: FanfileService, private route: ActivatedRoute) {
  	this.route.params.subscribe( params => console.log(params) );
  }

    ngOnInit() {
    	let id = this.route.snapshot.params.id;
    	console.log(id);
        this.fanfile.getffile(id).subscribe(data => this.data = data);
	}   
}