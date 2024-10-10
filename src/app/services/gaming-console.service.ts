import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GamingConsole } from '../GamingConsole';
import { MockContent } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class GamingConsoleService {
  constructor() {}

  // Return an Observable of the gamingConsoleList from MockContent
  getContent(): Observable<GamingConsole[]> {
    return of(MockContent.gamingConsoleList);
  }
}
