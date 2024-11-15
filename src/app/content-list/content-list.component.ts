import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import { GamingConsole } from '../GamingConsole';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { GamingConsoleService } from '../services/gaming-console.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    ContentListItemComponent,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  gamingConsoleList: GamingConsole[] = [];
  selectedConsole?: GamingConsole;

  constructor(
    private gamingConsoleService: GamingConsoleService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.gamingConsoleService.getContent().subscribe({
      next: (data: GamingConsole[]) => this.gamingConsoleList = data,
      error: err => console.error("Error fetching Gaming Consoles", err),
      complete: () => console.log("Gaming console data fetch complete!")
    });
  }

  selectConsole(console: GamingConsole): void {
    this.selectedConsole = console;
  }

  editItem(console: GamingConsole) {
    this.router.navigate(['/modify-list-item', console.id]);
  }

  deleteItem(id: number) {
    this.gamingConsoleService.deleteConsole(id);
    this.gamingConsoleList = this.gamingConsoleList.filter(console => console.id !== id);
  }
}
