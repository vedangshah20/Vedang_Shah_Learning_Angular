import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';

// Define the routes with lazy loading
const routes: Route[] = [
  { path: 'content-list-component',
    loadComponent: () => import('./app/content-list/content-list.component').then(m => m.ContentListComponent) },
  { path: 'modify-list-item',
    loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent) },
  { path: 'modify-list-item/:id',
    loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent) },
  { path: 'page-not-found',
    loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
