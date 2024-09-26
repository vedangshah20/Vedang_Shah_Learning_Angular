import {Component, Input} from '@angular/core';
import {GamingConsole} from "../GamingConsole";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})


export class ContentListItemComponent {
  @Input() gamingConsole!: GamingConsole;  // Input property to accept console data
  @Input() isOdd!: boolean; // accept the gaming console data and the isOdd boolean,
                             // which indicates if the item is odd.

}



