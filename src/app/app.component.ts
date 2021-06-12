import { Component } from '@angular/core';
import * as jQuery from 'jquery';
declare var animateText: any;
declare var scrollObj: any;
declare var audioObj : any;
declare var animatePage1: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'for-you';
  isLoading = true;

  ngOnInit(): void {
    setTimeout (() => {
      this.isLoading = false;
      audioObj.onload();
      scrollObj.onload();

      setTimeout (() => {
        animateText.onload();
        animatePage1.oninit();
        animatePage1.onload();
      }, 200);

   }, 5000);
  }
}
