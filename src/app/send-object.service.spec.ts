import { TestBed } from '@angular/core/testing';

import { SendObjectService } from './send-object.service';

describe('SendObjectService', () => {
  let service: SendObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
