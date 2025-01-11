import { Component } from "@angular/core";
import { SliderComponent } from "./slider/slider.component";
import { HomeParallaxComponent } from "./home-parallax/home-parallax.component";
import { StoreContentComponent } from "./store-content/store-content.component";
import { BlogContentComponent } from "./blog-content/blog-content.component";
import { InfoMapWithContacts } from "./info-map-with-contacts/info-map-with-contacts.component";

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
    InfoMapWithContacts
  ],
})
export class HomeComponent { }
