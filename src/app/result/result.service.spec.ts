/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResultService } from './result.service';

describe('TagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultService]
    });
  });

  it('should ...', inject([ResultService], (service: ResultService) => {
    expect(service).toBeTruthy();
  }));
});