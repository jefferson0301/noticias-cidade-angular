import {ApplicationConfig} from "@angular/core";
import { provideRouter, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/adm/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NewPageComponent } from './components/new-page/new-page.component';
import { InternacionalComponent } from "./components/pages/internacional/internacional.component";
import { PolicyComponent } from "./components/pages/policy/policy.component";
import { SportsComponent } from "./components/pages/sports/sports.component";
import { title } from "process";


export const routes: Routes = [

        // {path: 'internacional/new/:id/new/:id/new/:id', component: NewPageComponent, data:{ title: "Noticia" } },
        // {path: 'politica/new/:id/new/:id/new/:id', component: NewPageComponent, data:{ title: "Noticia" } },
        // {path: 'esportes/new/:id/new/:id/new/:id', component: NewPageComponent , data:{ title: "Noticia" } },
        {path: 'internacional/new/:id/new/:id', component: NewPageComponent, data:{ title: "Noticia" } },
        {path: 'politica/new/:id/new/:id', component: NewPageComponent, data:{ title: "Noticia" } },
        {path: 'esportes/new/:id/new/:id', component: NewPageComponent , data:{ title: "Noticia" } },
        {path: 'new/:id/new/:id', component: NewPageComponent , data:{ title: "Noticia" } },
        {path: 'internacional/new/:id', component: NewPageComponent , data:{ title: "Noticia" }},
        {path: 'esportes/new/:id', component: NewPageComponent , data:{ title: "Noticia" }},
        {path: 'politica/new/:id', component: NewPageComponent , data:{ title: "Noticia" } },
        { path: 'internacional', component: InternacionalComponent },
        { path: 'politica', component: PolicyComponent },
        { path: 'esportes', component: SportsComponent },
        {path: 'new/:id', component: NewPageComponent, data:{ title: 'Noticia' } },
        { path: '', component: NewsComponent },
        { path: 'adm', component: LoginComponent },
        { path: '**', component: NotFoundPageComponent },
        
];

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes)],
};