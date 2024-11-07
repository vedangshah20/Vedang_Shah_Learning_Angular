import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    PageNotFoundComponent,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent {

  modifyForm: FormGroup;


  constructor(private fb: FormBuilder) {

    this.modifyForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]],
      itemDescription: ['', [Validators.required, Validators.minLength(5)]],
      itemPrice: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }


  onSubmit() {

  }

  navigateToHome() {

  }
}
