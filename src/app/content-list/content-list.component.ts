import { Component } from '@angular/core';
import {GamingConsole} from "../GamingConsole";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  displayedColumns: string[] = [' Brand', 'model', 'releaseYear', 'storageCapacity', 'hasVRSupport'];

  // List of gaming consoles
  gamingConsoleList: GamingConsole[] = [
    { Brand: 'Sony', model: 'PlayStation 5', releaseYear: 2020, storageCapacity: 825, hasVRSupport: true },
    { Brand: 'Microsoft', model: 'Xbox Series X', releaseYear: 2020, storageCapacity: 1000, hasVRSupport: true },
    { Brand: 'Nintendo', model: 'Switch', releaseYear: 2017, storageCapacity: 32, hasVRSupport: false },
    { Brand: 'Sony', model: 'PlayStation 4', releaseYear: 2013, storageCapacity: 500, hasVRSupport: true },
    { Brand: 'Microsoft', model: 'Xbox One', releaseYear: 2013, storageCapacity: 500, hasVRSupport: false }
  ];

}
