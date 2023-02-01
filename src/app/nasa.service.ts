import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaService {


  constructor(public http : HttpClient) { }



  getImageOfTheDay(){

    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  }
}
