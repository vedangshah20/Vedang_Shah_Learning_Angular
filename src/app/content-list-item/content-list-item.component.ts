import {Component, Input} from '@angular/core';
import {GamingConsole} from "../GamingConsole";
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgOptimizedImage,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import {StorageUnitPipe} from "../storage-unit.pipe";
import {MouseHoverDirective} from "../directives/mouse-hover.directive";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    LowerCasePipe,
    TitleCasePipe,
    StorageUnitPipe,
    MouseHoverDirective
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})


export class ContentListItemComponent {
  @Input() gamingConsole!: GamingConsole;  // Input property to accept console data
  @Input() isOdd!: boolean; // accept the gaming console data and the isOdd boolean,
                             // which indicates if the item is odd.

  @Input() console!: GamingConsole | undefined;


}



