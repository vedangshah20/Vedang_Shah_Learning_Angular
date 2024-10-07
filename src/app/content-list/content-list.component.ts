import { Component } from '@angular/core';
import {GamingConsole} from "../GamingConsole";
import {NgClass, NgForOf} from "@angular/common";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    ContentListItemComponent,
    NgClass
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
