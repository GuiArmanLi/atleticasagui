import { Component } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [MenuComponent, RouterModule]
})
export class HeaderComponent { }
