import { Component } from '@angular/core';
import * as jQuery from 'jquery';

declare var audioObj : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'for-you';

  ngOnInit(): void {
    audioObj.onload();
  }
}
