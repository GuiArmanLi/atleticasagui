import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'contacts-component',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  standalone: true,
  imports: [RouterModule]
})
export class ContactsComponent { }
