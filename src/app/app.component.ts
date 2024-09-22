import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GamingConsole} from "./GamingConsole";
import {JsonPipe, NgFor, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Gaming Console List';

  console1: GamingConsole = { Brand: 'Sony', model: 'PlayStation 5', releaseYear: 2020, storageCapacity: 825, hasVRSupport: true };
  console2: GamingConsole = { Brand: 'Microsoft', model: 'Xbox Series X', releaseYear: 2020, storageCapacity: 1000, hasVRSupport: true };
  console3: GamingConsole = { Brand: 'Nintendo', model: 'Switch', releaseYear: 2017, storageCapacity: 32, hasVRSupport: false };
  console4: GamingConsole = { Brand: 'Sony', model: 'PlayStation 4', releaseYear: 2013, storageCapacity: 500, hasVRSupport: true };
  console5: GamingConsole = { Brand: 'Microsoft', model: 'Xbox One', releaseYear: 2013, storageCapacity: 500, hasVRSupport: false };
  console6: GamingConsole = { Brand: 'Nintendo', model: 'Wii U', releaseYear: 2012, storageCapacity: 32, hasVRSupport: false };

}


