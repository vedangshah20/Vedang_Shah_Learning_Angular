import { Component, OnInit } from '@angular/core';
import { GamingConsoleService } from '../services/gaming-console.service';
import { GamingConsole } from '../GamingConsole';
import { NgClass, NgForOf } from '@angular/common';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    ContentListItemComponent,
    NgClass
  ],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  gamingConsoles: GamingConsole[] = [];

  // Inject the GamingConsoleService
  constructor(private gamingConsoleService: GamingConsoleService) {}

  ngOnInit(): void {
    // Fetch data and initialize gamingConsoles array
    this.gamingConsoleService.getContent().subscribe({
      next: (data: GamingConsole[]) => this.gamingConsoles = data,
      error: err => console.error("Error fetching Gaming Consoles", err),
      complete: () => console.log("Gaming console data fetch complete!")
    });
  }
}
