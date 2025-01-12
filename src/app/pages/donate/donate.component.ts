import { Component } from "@angular/core";
import { SponsorsAndCollaborations } from "../../shared/components/sponsors-and-collaborations/sponsors-and-collaborations.component";
import { DonationQRCode } from "../../shared/components/donation-qrcode/donation-qrcode.component";

@Component({
  selector: 'donate-component',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss',
  standalone: true,
  imports: [SponsorsAndCollaborations, DonationQRCode]
})
export class DonateComponent { }
