import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
    <header-component></header-component>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
  `
})
export class AppComponent {
  title = 'atletica-sagui';
}
