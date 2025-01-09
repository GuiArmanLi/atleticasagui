import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  styles: '',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
    <header-component></header-component>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer-component></footer-component>
  `
})
export class AppComponent {

}
