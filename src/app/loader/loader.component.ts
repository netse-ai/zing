import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit {

  loadingCtrl: LoadingController = new LoadingController()
  constructor() {}

  isLoading: boolean = false;

  ngOnInit() {}

  async showLoading(): Promise<void> {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });

    loading.present();
  }

  public dismissLoader() {
    if (!this.isLoading) {
      return;
    }
    this.loadingCtrl.dismiss();
    this.isLoading = false;
  }
}