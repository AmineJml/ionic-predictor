import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IonicRestService {
  constructor(private http: HttpClient) { }

  getAllArticles(){
    const response = this.http.get("https://api.genderize.io?name=rio");
    return response;
  }

}


