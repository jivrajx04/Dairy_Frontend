import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCollections } from './farmer-collections';

describe('FarmerCollections', () => {
  let component: FarmerCollections;
  let fixture: ComponentFixture<FarmerCollections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerCollections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerCollections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
