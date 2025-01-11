import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

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
