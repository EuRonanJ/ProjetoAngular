import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDogComponent } from './api-dog.component';

describe('ApiDogComponent', () => {
  let component: ApiDogComponent;
  let fixture: ComponentFixture<ApiDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
