import { Component } from "@angular/core";
import { MapComponent } from "./map/map.component";
import { ContactsComponent } from "./contacts/contacts.component";

@Component({
  selector: 'map-and-contacts',
  templateUrl: './map-and-contacts.component.html',
  styleUrl: './map-and-contacts.component.scss',
  standalone: true,
  imports: [MapComponent, ContactsComponent]
})
export class MapAndContactsComponent { }
