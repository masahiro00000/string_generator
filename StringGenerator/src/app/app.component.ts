import { Component } from '@angular/core';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'StringGenerator';
  textIn: string = "";
  textOut: string = "";
  times: number;
  length: number;

  ngOnInit() {

  }

  ngDoCheck() {
    
  }

  generateString() {
    this.textOut = "";
    // console.log("times: " + this.times);
    if (this.times) {
      for (let i = 0; i < this.times; i++) {
        this.textOut += this.textIn;
      }
    }
    if (this.length) {
      if (this.times) {
        this.textOut = this.textOut.slice(0, this.length);
      } else {
        while (true) {
          this.textOut += this.textIn;
          if (this.textOut.length > this.length) {
            this.textOut = this.textOut.slice(0, this.length);
            break;
          }
        }
      }
    }
    // console.log("textOut: " + this.textOut);
  }

  inputString(str: string){
    if(str === "0-9"){
      this.textIn += "0123456789";
    } else if (str === "a-z"){
      this.textIn += "abcdefghijklmnopqrstuvwxyz";
    } else if (str === "A-Z"){
      this.textIn += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (str === "!-~"){
      this.textIn += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    } else if (str === "hiragana"){
      this.textIn += "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    } else if (str === "katakana"){
      this.textIn += "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    }
    this.generateString();
  }

  reset(){
    this.textIn = "";
    this.textOut = "";
    this.length = null;
    this.times = null;
  }
}
