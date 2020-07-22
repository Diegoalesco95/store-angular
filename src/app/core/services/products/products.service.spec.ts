import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

describe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    console.log(service);
  });

  describe('test from getAllProducts', () => {
    it('should return products', () => {
      //  Arrange
      const expectData = [
        {
          id: '1',
          title: 'Test title',
          price: 200,
          description: 'Test description',
          image: 'img/img.jpg',
        },
        {
          id: '2',
          title: 'Test title 2',
          price: 300,
          description: 'Test description 2',
          image: 'img/img2.jpg',
        },
      ];
      let dataError: Error;
      let dataResponse: Product[];

      // Act
      console.log(service);

      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
          console.log('[dataResponse]', dataResponse);
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(`${environment.url_api}`);
      req.flush(expectData);

      // Assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
