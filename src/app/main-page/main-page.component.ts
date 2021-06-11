import { Component, OnInit } from '@angular/core';
declare var animateText: any;
declare var scrollObj: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    animateText.onload();
    scrollObj.onload();
  }
}
