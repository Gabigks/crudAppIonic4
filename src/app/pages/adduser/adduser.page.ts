import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/providers/location.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  myForm: FormGroup;
  userPicture: any;
  long: any;
  lat: any;

  constructor(
    private geolocationProvider: LocationService,
    private formBuilder: FormBuilder,
    ) {
      this.myForm = this.formBuilder.group({
        name: ['', Validators.required],
        birthdate: ['', Validators.required]
      })
  }

  ngOnInit() {
    this.geolocationProvider.getCurrentPosition().then(position => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`);
    }).catch(error => {
      console.log('Error getting location ', error);
    });
  }

  handlePictureTaken(pictureData: String) {
    this.userPicture = pictureData;
  }

  async submitForm() {
    if (this.myForm.valid) {
      const user: User = {
        name: this.myForm.value.name,
        birthdate: this.myForm.value.birthdate,
        geolocation: {
          latitude: this.lat,
          longitude: this.long
        },
        picture: this.userPicture
      };
      console.log(user);
      
      const existingUsersJson = localStorage.getItem('users');
      const existingUsers: User[] = existingUsersJson ? JSON.parse(existingUsersJson) : [];

      existingUsers.push(user);

      localStorage.setItem('users', JSON.stringify(existingUsers));

      this.myForm.reset();
    }
  }

}
