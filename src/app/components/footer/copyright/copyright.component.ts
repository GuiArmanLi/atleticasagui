import { Component } from "@angular/core";

@Component({
    selector: 'copyright-component',
    template: `
        <aside class="copyright">
            <p>Copyright 2024 © Todos os direitos reservados</p>
        </aside>
    `,
    styleUrl: './copyright.component.scss',
    standalone: true
})
export class CopyrightComponent { }