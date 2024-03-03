import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPhoto } from '../services/photo.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  photo: UserPhoto;
  constructor(public router: Router, private location : Location) { 
    const state = this.router.getCurrentNavigation()?.extras.state as any
    this.photo = state.photo;
    console.log(this.photo)
  }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back()
  }
}
