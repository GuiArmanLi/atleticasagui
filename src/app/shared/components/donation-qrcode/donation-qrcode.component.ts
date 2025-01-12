import { Component } from "@angular/core";
import { SafeUrl } from "@angular/platform-browser";
import { environment } from "../../../../environments/environment.dev";
import { QRCodeComponent } from 'angularx-qrcode';


@Component({
  selector: 'donation-qrcode',
  templateUrl: './donation-qrcode.component.html',
  standalone: true,
  imports: [QRCodeComponent]
})
export class DonationQRCode {
  readonly qrcodeString = environment.PIX;

  myAngularxQrCode: string = "";
  qrCodeDownloadLink: SafeUrl = "";

  constructor() {
    this.myAngularxQrCode = this.qrcodeString;
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
