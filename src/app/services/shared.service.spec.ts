import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [SharedService]
    });
  });

  it('should ...', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));
});
