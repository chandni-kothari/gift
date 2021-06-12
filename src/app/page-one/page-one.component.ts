import { Component, OnInit } from '@angular/core';
declare var animatePage1: any;

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    animatePage1.oninit();
    animatePage1.onload();
  }
}
