import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FanfileService} from "../pulldata.service";
import { ModalService } from '../_modal';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  data:any=[
  	{name: "Sign in to Access Account"}
  ];

  constructor(private modalService: ModalService, private fanfile: FanfileService) {
  }

    ngOnInit() {
        this.fanfile.getffile().subscribe(data => this.data = data);
	}   
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
}