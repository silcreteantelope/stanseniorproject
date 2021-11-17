import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FanfileService } from "../fanfile.service";

@Component({
  selector: 'app-fanfile',
  templateUrl: './fanfile.component.html',
  styleUrls: ['./fanfile.component.css']
})
export class FanfileComponent implements OnInit {
  
  data:any;

  constructor(private fanfile: FanfileService) {
  }

    ngOnInit() {
        this.fanfile.getffile().subscribe(data => this.data = data);
	}   
}