import { Component } from "@angular/core";
import { SponsorsAndCollaborations } from "../../shared/components/sponsors-and-collaborations/sponsors-and-collaborations.component";
import { DonationQRCode } from "../../shared/components/donation-qrcode/donation-qrcode.component";

@Component({
<<<<<<< HEAD
  selector: 'donate-component',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss',
  standalone: true,
  imports: [SponsorsAndCollaborations, DonationQRCode]
=======
  "selector": 'donate-component',
  "templateUrl": './donate.component.html',
  "styleUrl": './donate.component.scss',
  "standalone": true,
  "imports": []
>>>>>>> 2ecb24f (Passando todo conteudo da home para components)
})
export class DonateComponent { }
