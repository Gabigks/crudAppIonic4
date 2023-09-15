import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera, CameraResultType, ImageOptions, Photo  } from '@capacitor/camera';

@Component({
  selector: 'app-form-camera',
  templateUrl: './form-camera.component.html',
  styleUrls: ['./form-camera.component.scss'],
})
export class FormCameraComponent  implements OnInit {

  @Output() pictureTaken: EventEmitter<Photo> = new EventEmitter<Photo>();

  pictureData: Photo | undefined;

  constructor() { }

  ngOnInit() {}

  async onTakePicture() {
    this.pictureData = await this.takePicture();
    this.pictureTaken.emit(this.pictureData);
  }  

  async takePicture(): Promise<Photo>{
    const options: ImageOptions = {
      quality: 100,
      resultType: CameraResultType.DataUrl,
    };

    return await Camera.getPhoto(options);
  }

}
