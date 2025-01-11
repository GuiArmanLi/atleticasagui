import { Injectable, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SliderLogic implements OnInit {
  sliderName!: string;
  slider!: HTMLElement | null;
  currentIndex = 0;
  images = [""];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slider = document.getElementById(this.sliderName);
      if (this.slider) {
        this.initSlider();
      }
    }
  }

  createSlide(imageUrl: string, className = ''): HTMLElement {
    const slide = document.createElement('div');
    slide.className = `slide ${className}`;
    slide.style.backgroundImage = `url(${imageUrl})`;
    return slide;
  }

  changeSlide(): void {
    if (!this.slider) return;

    const newSlide = this.createSlide(this.images[this.currentIndex], 'current');
    this.slider.appendChild(newSlide);

    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    const previousSlide = this.slider.querySelector('.slide.current.previous');
    if (previousSlide) {
      this.slider.removeChild(previousSlide);
    }

    const currentSlide = this.slider.querySelector('.slide.current');
    if (currentSlide) {
      currentSlide.classList.remove('current');
      currentSlide.classList.add('previous');
    }
  }

  initSlider(): void {
    if (!this.slider) return;

    const firstSlide = this.createSlide(this.images[this.currentIndex], 'current');
    firstSlide.style.transform = 'translateX(0)';
    this.slider.appendChild(firstSlide);
    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    setTimeout(() => {
      this.changeSlide();
      setInterval(() => this.changeSlide(), 5000);
    });
  }
}
