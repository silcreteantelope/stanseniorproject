import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FanfileService} from "../pulldata.service";
import { ModalService } from '../_modal';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
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