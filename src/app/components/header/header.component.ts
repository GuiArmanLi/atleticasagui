import { Component } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";

@Component({
    "selector": 'header-component',
    "templateUrl": './header.component.html',
    "styleUrl": './header.component.scss',
    "standalone": true,
    "imports": [MenuComponent]
})
export class HeaderComponent { }