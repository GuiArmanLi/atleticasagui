import { Component } from "@angular/core";
import { SliderComponent } from "./slider/slider.component";
import { StoreCarouselComponent } from "./store-carousel/store-carousel.component";
import { BlogCarouselComponent } from "./blog-carousel/blog-carousel.component";
import { HomeParallaxComponent } from "./home-parallax/home-parallax.component";
import { OfferingsComponent } from "./offering/offerings.component";

@Component({
  "selector": 'home-component',
  "templateUrl": './home.component.html',
  "styleUrl": './home.component.scss',
  "standalone": true,
  "imports": [SliderComponent, StoreCarouselComponent, BlogCarouselComponent, HomeParallaxComponent, OfferingsComponent],
})
export class HomeComponent { }
