import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  images: { src: string; active?: boolean }[] = [
    {
      src: 'https://picsum.photos/200',
    },
    {
      src: 'https://picsum.photos/200',
    },
    {
      src: 'https://picsum.photos/200',
    },
    {
      src: 'https://picsum.photos/200',
    },
    {
      src: 'https://picsum.photos/200',
    },
  ];
  onSwiper(e: any) {
    console.log(e);
    this.images[e.activeIndex].active = true;
  }
  onSlideChange(w: any) {
    if (w.swipeDirection == 'next') {
      for (let i = 0; i <= w.activeIndex; i++) {
        this.images[i].active = true;
      }
    } else if (w.swipeDirection == 'prev') {
      for (let i = w.activeIndex; i < this.images.length; i++) {
        this.images[i].active = false;
      }
    }
  }

  garr(length: number) {
    return new Array(length);
  }
}
