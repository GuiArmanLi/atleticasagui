import { Component } from "@angular/core";
import { CompanyIdentitiesComponent } from "./company-identities/company-identities.component";

@Component({
  "selector": 'about-component',
  "templateUrl": './about.component.html',
  "styleUrl": './about.component.scss',
  "standalone": true,
  "imports": [CompanyIdentitiesComponent]
})
export class AboutComponent { }
