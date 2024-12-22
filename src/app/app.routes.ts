import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DonateComponent } from './pages/donate/donate.component';
import { GraffitiComponent } from './pages/graffiti/graffiti.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'graffiti', component: GraffitiComponent },
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },

    //Guardas e Resolvedores
    //As guardas continuam funcionando da mesma forma, mas podem ser aplicadas também aos componentes independentes.
    // path: 'admin',
    // loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    // canActivate: [AuthGuard]
];
