import { Injectable } from '@angular/core';

import { Geolocation, Position } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  async getCurrentPosition(): Promise<Position>{
    return await Geolocation.getCurrentPosition();
  }
}
