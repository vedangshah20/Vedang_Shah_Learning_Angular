import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { GamingConsole } from "./GamingConsole";
import {NgFor, NgIf, NgOptimizedImage} from "@angular/common";
import { ContentListComponent } from "./content-list/content-list.component";
import { ContentListItemComponent } from "./content-list-item/content-list-item.component";
import { GamingConsoleService } from './services/gaming-console.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, ContentListComponent, ContentListItemComponent, NgIf, RouterLink, NgOptimizedImage, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gaming Console List';

  selectedConsole?: GamingConsole; // Selected console for display
  gamingConsoleList: GamingConsole[] = []; // List of gaming consoles
  selectedConsoleId = 2; // Choose the ID you want to display

  constructor(private gamingConsoleService: GamingConsoleService) {}

  ngOnInit(): void {
    this.gamingConsoleService.getConsoleById(this.selectedConsoleId).subscribe(console => {
      this.selectedConsole = console;
    });


    this.gamingConsoleService.getContent().subscribe(consoles => {
      this.gamingConsoleList = consoles;
    });
  }
}
