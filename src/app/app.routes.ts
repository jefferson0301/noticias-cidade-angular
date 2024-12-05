import {ApplicationConfig} from "@angular/core";
import { provideRouter, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/adm/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NewPageComponent } from './components/new-page/new-page.component';


export const routes: Routes = [
        
        {path: 'new/:id', component: NewPageComponent },
        { path: '', component: NewsComponent },
        { path: 'adm', component: LoginComponent },
        { path: '**', component: NotFoundPageComponent },
        
];

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes)],
};