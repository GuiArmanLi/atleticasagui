import { Component } from "@angular/core";
import { MapComponent } from "./map/map.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { SocialMediaComponent } from "../social-medias/social-media.component";

@Component({
    selector: 'map-and-contacts',
    templateUrl: './map-and-contacts.html',
    styleUrl: './map-and-contacts.scss',
    standalone: true,
    imports: [MapComponent, ContactsComponent, SocialMediaComponent]
})
export class MapAndContactsComponent { }