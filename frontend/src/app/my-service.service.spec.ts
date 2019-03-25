/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetIdAndTypeService } from './my-service.service';

describe('Service: MyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetIdAndTypeService]
    });
  });

  it('should ...', inject([GetIdAndTypeService], (service: GetIdAndTypeService) => {
    expect(service).toBeTruthy();
  }));
});
