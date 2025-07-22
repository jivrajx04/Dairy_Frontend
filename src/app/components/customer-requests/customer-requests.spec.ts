import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequests } from './customer-requests';

describe('CustomerRequests', () => {
  let component: CustomerRequests;
  let fixture: ComponentFixture<CustomerRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
