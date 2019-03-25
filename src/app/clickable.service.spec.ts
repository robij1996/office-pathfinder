import { TestBed } from '@angular/core/testing';

import { ClickableService } from './clickable.service';

describe('ClickableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickableService = TestBed.get(ClickableService);
    expect(service).toBeTruthy();
  });
});
