import { Component } from "@angular/core";
import { SponsorsAndCollaborations } from "../../shared/components/sponsors-and-collaborations/sponsors-and-collaborations.component";

@Component({
  selector: 'donate-component',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss',
  standalone: true,
  imports: [SponsorsAndCollaborations]
})
export class DonateComponent { }
