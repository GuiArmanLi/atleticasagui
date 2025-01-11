import { Component } from "@angular/core";
import { MapAndContactsComponent } from "../../../shared/components/map-and-contacts/map-and-contacts.component";
import { SocialMediaComponent } from "../../../shared/components/social-medias/social-media.component";

@Component({
  selector: 'info-map-with-contacts',
  templateUrl: './info-map-with-contacts.component.html',
  styleUrl: './info-map-with-contacts.component.scss',
  standalone: true,
  imports: [MapAndContactsComponent, SocialMediaComponent],
})
export class InfoMapWithContacts  { }
