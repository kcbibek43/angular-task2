import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crousel';
  images = [
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
    "assets/img5.jpg",
    "assets/img6.jpg",
    "assets/img7.jpg"
  ]
  idx = 0;
  prev(){
    this.idx = this.idx+this.images.length;
    this.idx -=1;
    this.idx = this.idx % this.images.length;
  }

  next(){
    this.idx = this.idx+this.images.length;
    this.idx +=1;
    this.idx = this.idx % this.images.length;
  }
}
