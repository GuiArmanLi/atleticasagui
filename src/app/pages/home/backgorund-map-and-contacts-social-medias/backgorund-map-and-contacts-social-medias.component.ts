import { Component } from "@angular/core";
import { MapAndContactsComponent } from "../../../components/map-and-contacts/map-and-contacts.component";
import { SocialMediaComponent } from "../../../components/social-medias/social-media.component";

@Component({
  selector: 'backgorund-map-and-contacts-social-medias',
  templateUrl: './backgorund-map-and-contacts-social-medias.component.html',
  styleUrl: './backgorund-map-and-contacts-social-medias.component.scss',
  standalone: true,
  imports: [MapAndContactsComponent, SocialMediaComponent],
})
export class BackgorundMapAndContactsSocialMedias { }
