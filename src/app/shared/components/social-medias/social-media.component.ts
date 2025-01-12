import { Component, Input, OnInit } from "@angular/core";
import { SocialMedia } from "../../models/member";

@Component({
  selector: 'social-media-component',
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  standalone: true
})
export class SocialMediaComponent implements OnInit {
  @Input("social-media")
  socialMedia!: SocialMedia;

  ngOnInit(): void {
    if (this.socialMedia == null) {
      this.socialMedia = {
        whatsapp: "https://wa.me/5511993006741",
        instagram: "https://www.instagram.com/atleticasagui_fatecferraz/",
        linkedin: "https://www.linkedin.com/"
      };
    }
  }
}
