import { Component } from "@angular/core";
import { DonateComponent } from "./donate/donate.component";
import { CopyrightComponent } from "./copyright/copyright.component";

@Component({
    selector: 'footer-component',
    template: `
        <footer>
            <donate-component></donate-component>
            <copyright-component></copyright-component>
        </footer>
    `,
    standalone: true,
    imports: [DonateComponent, CopyrightComponent]
})
export class FooterComponent { }
