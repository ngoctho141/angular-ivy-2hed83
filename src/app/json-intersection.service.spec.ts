import { TestBed } from '@angular/core/testing';

import { JsonIntersectionService } from './json-intersection.service';

describe('JsonIntersectionService', () => {
  let service: JsonIntersectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonIntersectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
