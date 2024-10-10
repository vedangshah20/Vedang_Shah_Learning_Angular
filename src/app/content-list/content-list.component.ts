import { Component, OnInit } from '@angular/core';
import { GamingConsole } from '../GamingConsole';
import { NgForOf } from '@angular/common';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { GamingConsoleService } from '../services/gaming-console.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  gamingConsoleList: GamingConsole[] = [];
  selectedConsole?: GamingConsole; // Property to hold the selected console

  constructor(private gamingConsoleService: GamingConsoleService) {
    // This constructor is primarily used for dependency injection
  }

  ngOnInit(): void {
    this.gamingConsoleService.getContent().subscribe({
      next: (data: GamingConsole[]) => this.gamingConsoleList = data,
      error: err => console.error("Error fetching Gaming Consoles", err),
      complete: () => console.log("Gaming console data fetch complete!")
    });
  }

  selectConsole(console: GamingConsole): void {
    this.selectedConsole = console; // Method to set the selected console
  }
}
