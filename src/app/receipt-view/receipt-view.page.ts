import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-receipt-view',
  templateUrl: './receipt-view.page.html',
  styleUrls: ['./receipt-view.page.scss'],
})
export class ReceiptViewPage implements OnInit {

  photoData: any;
  prediction: any;
  message: any;
  photo: UserPhoto;
  constructor(public router: Router) { 
    const state = this.router.getCurrentNavigation()?.extras.state as any;
    this.photoData = state.photoData;
    console.log(this.photoData)
    this.message = this.photoData.message
    this.prediction = this.photoData.result[0].prediction;
    console.log(this.prediction);
    this.photo = state.photo;
    console.log(this.photo);
  }

  ngOnInit() {
  }

}
