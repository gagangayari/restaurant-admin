import { TestBed } from '@angular/core/testing';

import { OrdersServices } from './services.service';

describe('ServicesService', () => {
  let service: OrdersServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
