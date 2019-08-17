import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private http: HttpClient
  ) { }

  public getRestaurants(){
    return this.http.get('https://developers.zomato.com/api/v2.1/search?count=10',{
      headers: this.commonHeaders()
    });
  }

  private commonHeaders(){
    return new HttpHeaders({
      "user-key": "0ae21ce1faa9294dfcbcbfd36b2b3bc4"
    });
  }
}
