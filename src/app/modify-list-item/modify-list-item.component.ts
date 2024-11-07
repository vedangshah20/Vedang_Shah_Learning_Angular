import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import {MockContent} from "../data/mock-content";
import {ActivatedRoute, Router} from "@angular/router";

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


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {

    // Initialize the form with empty fields
    this.modifyForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]],
      itemDescription: ['', [Validators.required, Validators.minLength(5)]],
      itemPrice: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });

    // Get the console ID from route parameters
    const consoleId = +this.route.snapshot.paramMap.get('id')!;

    // Find the console by its ID
    const console = MockContent.gamingConsoleList.find(console => console.id === consoleId);

    // If the console is found, populate the form with its data
    if (console) {
      this.modifyForm.patchValue({
        itemName: console.model,  // Assuming itemName corresponds to the model
        itemDescription: `${console.brand} ${console.model}`,  // Concatenating brand and model for description
        itemPrice: console.storageCapacity  // Assuming itemPrice corresponds to the storageCapacity
      });
    } else {
      // If console not found, redirect to a "not found" page or handle accordingly
      this.router.navigate(['/not-found']);
    }
  }


  onSubmit() {

  }

  navigateToHome() {

  }
}
