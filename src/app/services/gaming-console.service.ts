import {Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GamingConsole } from '../GamingConsole';
import { MockContent } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class GamingConsoleService {
  private gamingConsoles: GamingConsole[] = MockContent.gamingConsoleList;

  constructor() {}

  // Retrieve all gaming consoles
  getContent(): Observable<GamingConsole[]> {
    return of(this.gamingConsoles);
  }

  // Add a new gaming console
  addConsole(newConsole: GamingConsole): Observable<GamingConsole[]> {
    this.gamingConsoles.push(newConsole);
    return of(this.gamingConsoles);
  }

  // Update an existing gaming console
  updateConsole(updatedConsole: GamingConsole): Observable<GamingConsole[]> {
    const index = this.gamingConsoles.findIndex(console => console.id === updatedConsole.id);
    if (index !== -1) {
      this.gamingConsoles[index] = updatedConsole;
    }
    return of(this.gamingConsoles);
  }

  // Delete a gaming console by ID
  deleteConsole(consoleId: number): Observable<GamingConsole[]> {
    this.gamingConsoles = this.gamingConsoles.filter(console => console.id !== consoleId);
    return of(this.gamingConsoles);
  }

  // Retrieve a gaming console by ID
  // @ts-ignore
  getConsoleById(consoleId: number): Observable<GamingConsole | undefined> {
    const console = this.gamingConsoles.find(c => c.id === consoleId);
    if (console) {
      return of(console);

    }}


}
