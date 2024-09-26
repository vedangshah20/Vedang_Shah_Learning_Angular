import { Component } from '@angular/core';
import {GamingConsole} from "../GamingConsole";
import {NgForOf} from "@angular/common";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  // List of gaming consoles
  gamingConsoleList: GamingConsole[] = [
    { id: 1, Brand: 'Sony', model: 'PlayStation 5', releaseYear: 2020, storageCapacity: 825, hasVRSupport: true },
    { id: 2, Brand: 'Microsoft', model: 'Xbox Series X', releaseYear: 2020, storageCapacity: 1000, hasVRSupport: true },
    { id: 3, Brand: 'Nintendo', model: 'Switch', releaseYear: 2017, storageCapacity: 32, hasVRSupport: false },
    { id: 4, Brand: 'Sony', model: 'PlayStation 4', releaseYear: 2013, storageCapacity: 500, hasVRSupport: true },
    { id: 5, Brand: 'Microsoft', model: 'Xbox One', releaseYear: 2013, storageCapacity: 500, hasVRSupport: false }
  ];
}
