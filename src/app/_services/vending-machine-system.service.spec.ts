import { TestBed, inject } from '@angular/core/testing';

import { VendingMachineSystemService } from './vending-machine-system.service';

describe('VendingMachineSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendingMachineSystemService]
    });
  });

  it('should be created', inject([VendingMachineSystemService], (service: VendingMachineSystemService) => {
    expect(service).toBeTruthy();
  }));
});
