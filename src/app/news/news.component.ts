import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles1: any;
  news: any;

  constructor(private httServices: HttpService) { }

  ngOnInit(): void {
    this.httServices.getNews().subscribe((data) => {
      console.log(data);
      this.articles1 = data;
      this.news = data
    });
  }

}

/*
this.httServices.getnews().subscribe(data => {
      this.news = data
      console.log(this.news)
    })
  }
*/