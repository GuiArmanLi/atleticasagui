import { Component } from "@angular/core";
import { CompanyIdentitiesComponent } from "./company-identities/company-identities.component";
import { MembersComponent } from "./members/members.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { HistoryAndCuriositiesComponent } from "./history-and-curiosities/history-and-curiosities.component";
import { HowToParticipateComponent } from "./how-to-participate/how-to-participate.component";

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
  imports: [CompanyIdentitiesComponent, MembersComponent, PresentationComponent, HistoryAndCuriositiesComponent, HowToParticipateComponent]
})
export class AboutComponent { }
