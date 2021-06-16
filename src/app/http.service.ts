import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Hey, Whats up!!');
  }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
