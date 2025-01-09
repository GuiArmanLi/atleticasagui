import { Component } from "@angular/core";
import { SliderComponent } from "./slider/slider.component";
import { HomeParallaxComponent } from "./home-parallax/home-parallax.component";
import { OfferingsComponent } from "./offering/offerings.component";
import { HomeEffectTextComponent } from "./home-effect-text/home-effect-text.component";
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
    HomeEffectTextComponent,
    StoreContentComponent,
    BlogContentComponent,
    HomeParallaxComponent,
    OfferingsComponent,
    BackgorundMapAndContactsSocialMedias
  ],
})
export class HomeComponent { }
