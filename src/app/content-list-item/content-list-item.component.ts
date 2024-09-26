import {Component, Input} from '@angular/core';
import {GamingConsole} from "../GamingConsole";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})


export class ContentListItemComponent {
  @Input() gamingConsole!: GamingConsole;  // Input property to accept console data
}


