import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ApiService } from '../services/api.service';
import { LoaderComponent } from '../loader/loader.component';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public loaderComponent: LoaderComponent = new LoaderComponent();
  constructor(public photoService: PhotoService, public apiService: ApiService, public router: Router) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  clearStorage() {
    localStorage.clear();
    console.log(localStorage.length);
  }
  
  addPhotoToGallery() {
    this.photoService.addNewToGallery().then(() => {
      const photo = this.photoService.photos[this.photoService.photos.length-1];
      console.log(photo);
      this.getPhotoData(photo);
    });
  }

  getPhotoData(photo: UserPhoto) {
    this.loaderComponent.showLoading();
    this.apiService.getPhotoData(photo).then((res) => {
    const navigationExtras: NavigationExtras = { state: { photoData: res, photo: photo } };
    this.loaderComponent.dismissLoader()
    this.router.navigate(['receipt-view'], navigationExtras)
    }).catch((err) => {
      this.loaderComponent.dismissLoader();
    })
  }

  navigateToDetail(photo: UserPhoto) {
    const navigationExtras: NavigationExtras = { state: { photo: photo } };
    this.router.navigate(["detail"], navigationExtras)
  }
}
