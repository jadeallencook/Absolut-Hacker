import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-screen-presentation',
  templateUrl: './screen-presentation.component.html',
  styleUrls: ['./screen-presentation.component.scss'],
})
export class ScreenPresentationComponent implements OnInit {

  max: number = 8;
  password: string = '';
  answer: string = '1337';

  constructor() {
  }


  readwrite() {
    const available = 'rwx-'
    var string: string = '';
    for (var x = 0, max = 10; x < max; x++) {
      string += available[Math.round(Math.random() * (available.length - 1))];
    }
    return string;
  }

  log() {
    if (document.getElementById('logs').children.length === this.max) {
      document.querySelector('ul#logs li:first-child').remove();
    }
    const screen = document.getElementById('screen');
    var log = `
      <li ${screen.attributes[0].name}>
        <span ${screen.attributes[0].name}>${this.readwrite()}</span>
        TROJANHORSE#${this.number(100, 400)} - ${this.number(100, 400)} ${this.date()} ${this.time()}
      </li>
    `;
    if (document.getElementById('logs').children.length < this.max) {
      document.getElementById('logs').innerHTML += log;
    }
    if (Math.round(Math.random() - 0.25)) {
      screen.style.backgroundImage = 'url("/assets/static.gif")';
    } else {
      screen.style.backgroundImage = 'none';
    }
  }

  print() {
    setInterval(() => {
      this.log();
    }, Math.floor(this.number(200, 500)));
  }

  time() {
    var num1 = this.number(1, 24).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    var num2 = this.number(0, 59).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    return num1 + ':' + num2;
  }

  number(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  date() {
    let string: string = '';
    return string;
  }

  ngOnInit() {
    for (var x = 0; x < this.max; x++) {
      this.log();
    }
    $('.fas, .fab').mouseenter((event) => {
      if (this.password.length < 4) {
          this.password += event.target.getAttribute('data-num');
      } else {
        this.password = '';
      }
    })
    this.print();
  }

}
