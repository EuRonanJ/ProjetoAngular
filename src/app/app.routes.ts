import { Routes } from '@angular/router';
import { ApiDogComponent } from './api-dog/api-dog.component';
import { ApiCatComponent } from './api-cat/api-cat.component';
import { HomeComponent } from './home/home.component';  


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },  
    { path: 'pagina-cachorro', component: ApiDogComponent },
    { path: 'pagina-gato', component: ApiCatComponent },
];
