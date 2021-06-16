import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  brews: any;

  constructor(private httServices: HttpService) { }

  ngOnInit(): void {
    //this.httServices.myMethod();

    this.httServices.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews)
    })

/*
    this.httpService.makeRequest()
    .subscribe(
      result => {
        // Handle result
        console.log(result)
      },
      error => {
        this.errors = error;
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
    */

  }

}
