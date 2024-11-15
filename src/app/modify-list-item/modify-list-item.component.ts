import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { GamingConsole } from '../GamingConsole';
import { GamingConsoleService } from '../services/gaming-console.service';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {

  modifyForm: FormGroup;
  console!: GamingConsole;

  constructor(private gamingConsoleService: GamingConsoleService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.modifyForm = this.fb.group({
      id: [null],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      releaseYear: ['', Validators.required],
      storageCapacity: ['', Validators.required],
      hasVRSupport: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gamingConsoleService.getConsoleById(+id).subscribe(console => {
        if (console) {
          this.console = console;
          this.modifyForm.patchValue(console);
        }
      });
    }
  }

  onSubmit(): void {
    const console: GamingConsole = this.modifyForm.value;
    if (console.id) {
      this.gamingConsoleService.updateConsole(console).subscribe(() => {
        this.router.navigate(['/consoles']);
        this.modifyForm.reset();
      });
    } else {
      console.id = this.gamingConsoleService.generateNewId();
      this.gamingConsoleService.addConsole(console).subscribe(() => {
        this.router.navigate(['/consoles']);
        this.modifyForm.reset();
      });
    }
  }

}
