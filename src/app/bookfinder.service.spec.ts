import { TestBed } from '@angular/core/testing';

import { BookfinderService } from './bookfinder.service';

describe('BookfinderService', () => {
  let service: BookfinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookfinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
