import { Component } from "@angular/core";
import { SliderComponent } from "./slider/slider.component";
import { HomeParallaxComponent } from "./home-parallax/home-parallax.component";
import { BackgorundMapAndContactsSocialMedias } from "./backgorund-map-and-contacts-social-medias/backgorund-map-and-contacts-social-medias.component";
import { StoreContentComponent } from "./store-content/store-content.component";
import { BlogContentComponent } from "./blog-content/blog-content.component";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    SliderComponent,
    StoreContentComponent,
    BlogContentComponent,
    HomeParallaxComponent,
    BackgorundMapAndContactsSocialMedias
  ],
})
export class HomeComponent { }
