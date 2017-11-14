import { TestBed, inject } from '@angular/core/testing';

import { FaceAPIService } from './face-api.service';

describe('FaceAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceAPIService]
    });
  });

  it('should be created', inject([FaceAPIService], (service: FaceAPIService) => {
    expect(service).toBeTruthy();
  }));
});
