import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [RouterModule]
})
export class MenuComponent { }
