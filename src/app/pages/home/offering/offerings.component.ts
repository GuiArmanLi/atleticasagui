import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'offerings-component',
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.scss',
  standalone: true,
  imports: [RouterModule]
})
export class OfferingsComponent { }
