import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GamingConsole } from '../GamingConsole';
import { MockContent } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class GamingConsoleService {
  private gamingConsoles: GamingConsole[] = MockContent.gamingConsoleList; // Local copy of gaming consoles for CRUD operations

  constructor() {}

  // Return an Observable of the gaming console list from MockContent
  getContent(): Observable<GamingConsole[]> {
    return of(this.gamingConsoles); // Return the observable of the gaming consoles array
  }

  // Create: Add a new gaming console
  addConsole(newConsole: GamingConsole): Observable<GamingConsole[]> {
    this.gamingConsoles.push(newConsole); // Add the new console to the array
    return of(this.gamingConsoles); // Return the updated array as observable
  }

  // Update an existing gaming console
  updateConsole(updatedConsole: GamingConsole): Observable<GamingConsole[]> {
    const index = this.gamingConsoles.findIndex(console => console.id === updatedConsole.id);
    if (index !== -1) {
      this.gamingConsoles[index] = updatedConsole; // Update the console in the array
    }
    return of(this.gamingConsoles); // Return the updated array as observable
  }

  // Delete: Remove a gaming console by ID
  deleteConsole(consoleId: number): Observable<GamingConsole[]> {
    this.gamingConsoles = this.gamingConsoles.filter(console => console.id !== consoleId); // Filter out the console by ID
    return of(this.gamingConsoles); // Return the updated array as observable
  }

  // Read: Get a gaming console by ID
  getConsoleById(consoleId: number): Observable<GamingConsole | undefined> {
    const console = this.gamingConsoles.find(item => item.id === consoleId); // Find the console by ID
    return of(console); // Return the found console or undefined
  }
}
