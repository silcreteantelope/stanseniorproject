import { Component, HostListener, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FanfileService } from "../fanfile.service";
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-fanfile',
  templateUrl: './fanfile.component.html',
  styleUrls: ['./fanfile.component.css']
})
export class FanfileComponent implements OnInit {
  
  data:any;
  sHeight: any;
  sWidth: any;
  bVidHeight: any;
  bVidWidth: any;
  sVidHeight: any;
  sVidWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.sHeight = window.innerHeight;
    this.sWidth = window.innerWidth;
    this.bVidWidth = this.sWidth/1.9;
    this.bVidHeight = (this.bVidWidth/16)*9; //16 by 9 ratio
    this.sVidWidth = this.sWidth/6;
    this.sVidHeight = (this.sVidWidth/16)*9;
  }

  constructor(private fanfile: FanfileService, private route: ActivatedRoute, private modalService: ModalService,) {
  	this.route.params.subscribe( params => console.log(params) );
    this.getScreenSize();
  }

    ngOnInit() {
    	let id = this.route.snapshot.params.id;
    	console.log(id);
        this.fanfile.getffile(id).subscribe(data => this.data = data);
	}   
    openModal(id: string) {
      this.modalService.open(id);
  }
    closeModal(id: string) {
      this.modalService.close(id);
  }
    
    
    
}