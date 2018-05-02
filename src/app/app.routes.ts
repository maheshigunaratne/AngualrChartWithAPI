import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const appRoutes: Routes = [

    {path: 'home',component: HomeComponent},   
    { path: '', redirectTo: '/home', pathMatch: 'full' },
   
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
