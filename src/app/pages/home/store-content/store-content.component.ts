import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SliderLogic } from "../../../shared/components/slider-logic/slider-logic";

@Component({
  selector: 'store-content-component',
  templateUrl: './store-content.component.html',
  styleUrl: './store-content.component.scss',
  standalone: true,
  imports: [RouterModule]
})
export class StoreContentComponent extends SliderLogic {
  override sliderName = "slider-store";

  //Fazer requisicao a API
  override images = [
    "https://cdn.iset.io/assets/34628/produtos/13/par-caneca-alca-coracao.jpg",
    "https://down-br.img.susercontent.com/file/036c59d68325e749f546690733c107fe"
  ];
}
