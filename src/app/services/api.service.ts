import { Injectable } from '@angular/core';
import { UserPhoto } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public async getPhotoData(photo: UserPhoto): Promise<any> {
    return fetch('http://164.90.152.124:8002/ocr-predict:data', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //the base64 photo data
        data: photo.data,
        fileName: photo.filepath
      })
    }).then((res) => {
      const resJson = res.json();
      return resJson.then((res) => {
        const data = res.data;
        return JSON.parse(data)
      })
    })
  }
}
