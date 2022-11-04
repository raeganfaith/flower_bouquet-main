import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myScriptElement: HTMLScriptElement;
  constructor () {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = '......';
    document.body.appendChild(this.myScriptElement);
  }
  title = 'flower-bouquet';
}
