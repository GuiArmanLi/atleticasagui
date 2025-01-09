import { Component } from "@angular/core";
import { TecnologiesComponent } from "./tecnologies/tecnologies.component";

@Component({
  selector: "how-to-participate-component",
  templateUrl: "./how-to-participate.component.html",
  styleUrl: "./how-to-participate.component.scss",
  standalone: true,
  imports: [TecnologiesComponent]
})
export class HowToParticipateComponent {
}
