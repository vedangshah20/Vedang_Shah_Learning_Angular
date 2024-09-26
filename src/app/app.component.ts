import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GamingConsole} from "./GamingConsole";
import {JsonPipe, NgFor, NgSwitch, NgSwitchCase} from "@angular/common";
import {ContentListComponent} from "./content-list/content-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor, NgSwitch, NgSwitchCase, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Gaming Console List';

  // Added 'id' property to each gaming console
  console1: GamingConsole = { id: 1, Brand: 'Sony', model: 'PlayStation 5', releaseYear: 2020, storageCapacity: 825, hasVRSupport: true };
  console2: GamingConsole = { id: 2, Brand: 'Microsoft', model: 'Xbox Series X', releaseYear: 2020, storageCapacity: 1000, hasVRSupport: true };
  console3: GamingConsole = { id: 3, Brand: 'Nintendo', model: 'Switch', releaseYear: 2017, storageCapacity: 32, hasVRSupport: false };
  console4: GamingConsole = { id: 4, Brand: 'Sony', model: 'PlayStation 4', releaseYear: 2013, storageCapacity: 500, hasVRSupport: true };
  console5: GamingConsole = { id: 5, Brand: 'Microsoft', model: 'Xbox One', releaseYear: 2013, storageCapacity: 500, hasVRSupport: false };
  console6: GamingConsole = { id: 6, Brand: 'Nintendo', model: 'Wii U', releaseYear: 2012, storageCapacity: 32, hasVRSupport: false };
}


