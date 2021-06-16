import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_KEY = 'e47424fb019549c8a2f3ab80192eafac';

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Hey, Whats up!!');
  }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

   getNews(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`); 
  }
}
