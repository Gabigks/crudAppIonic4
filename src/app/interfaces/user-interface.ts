export interface User {
  name: String;
  birthdate: String;
  geolocation: {
      latitude: Number;
      longitude: Number;
  }
  picture: String; // You can store the picture URL or base64 data here
}