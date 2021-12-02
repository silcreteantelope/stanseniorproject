import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FanfileService } from "../pulldata.service";
import { ModalService } from '../_modal';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  data:any;

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
