import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { NgAuthService } from './ng-auth.service';

describe('NgAuthService', () => {
  let service: NgAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AngularFirestore]
    });
    service = TestBed.inject(NgAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
