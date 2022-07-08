import { TestBed } from '@angular/core/testing';
import { OneProductService } from './one-product.service';




describe('OneProductService', () => {
  let service: OneProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
