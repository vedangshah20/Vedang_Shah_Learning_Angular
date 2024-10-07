import { TestBed } from '@angular/core/testing';

import { GamingConsoleService } from './gaming-console.service';

describe('GamingConsoleService', () => {
  let service: GamingConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamingConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
