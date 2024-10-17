import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


import {provideRouter, Route} from "@angular/router";
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";
import {ContentListComponent} from "./app/content-list/content-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


const routes: Route[] = [
  { path: 'content-list-component', component: ContentListComponent  },// Default route
  { path: 'about', component: ContentListItemComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent }, // New route
  {path: 'page-not-found', component: PageNotFoundComponent },//added page not found
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
