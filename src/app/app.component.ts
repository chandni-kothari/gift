import { Component } from '@angular/core';
import * as jQuery from 'jquery';
declare var animateText: any;
declare var scrollObj: any;
declare var audioObj : any;

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
      }, 200);

   }, 8000);
  }
}
