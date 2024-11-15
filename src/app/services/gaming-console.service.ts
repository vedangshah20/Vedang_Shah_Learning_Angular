import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GamingConsole } from '../GamingConsole';
import { MockContent } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class GamingConsoleService {
  private gamingConsoles: GamingConsole[] = MockContent.gamingConsoleList;

  constructor() {}

  getContent(): Observable<GamingConsole[]> {
    return of(this.gamingConsoles);
  }

  getConsoleById(consoleId: number): Observable<GamingConsole | undefined> {
    const console = this.gamingConsoles.find(c => c.id === consoleId);
    return of(console);
  }

  addConsole(newConsole: GamingConsole): Observable<GamingConsole[]> {
    this.gamingConsoles.push(newConsole);
    return of(this.gamingConsoles);
  }

  updateConsole(updatedConsole: GamingConsole): Observable<GamingConsole | undefined> {
    const index = this.gamingConsoles.findIndex(console => console.id === updatedConsole.id);
    if (index > -1) {
      this.gamingConsoles[index] = updatedConsole;
      return of(updatedConsole);
    }
    return of(undefined);
  }

  deleteConsole(consoleId: number): void {
    this.gamingConsoles = this.gamingConsoles.filter(console => console.id !== consoleId);
  }

  generateNewId(): number {
    return this.gamingConsoles.length > 0 ? Math.max
    (...this.gamingConsoles.map(console => console.id)) + 1 : 1;
  }
}
