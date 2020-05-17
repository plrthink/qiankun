import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular9';

  ngOnInit() {
    // const $link: HTMLLinkElement = document.createElement('link');
    // $link.rel = 'stylesheet';
    // $link.type = 'text/css';
    // $link.href = '';
    // document.head.appendChild($link);
    // const $style: HTMLStyleElement = document.createElement('style');
    // $style.textContent = `
    //   body {
    //     background-color: red;
    //   }
    // `
    // document.head.appendChild($style);
  }
}
