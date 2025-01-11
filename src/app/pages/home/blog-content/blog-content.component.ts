import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SliderLogic } from "../../../shared/components/slider-logic/slider-logic";

@Component({
  selector: "blog-content-component",
  templateUrl: "./blog-content.component.html",
  styleUrls: ["./blog-content.component.scss"], // Fixed
  standalone: true,
  imports: [RouterModule],
})
export class BlogContentComponent extends SliderLogic {
  override sliderName = "slider-blog"; // Match the DOM ID of the slider
  override images = [
    "https://static.todamateria.com.br/upload/ed/it/editorialjornal-cke.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX22_ZdKs0JYvqD71xM-uMleXhQKNBGa83qhdtwFRD84r-3D_mm47R_3tL0tRC3JiQvg&usqp=CAU",
  ];
}
