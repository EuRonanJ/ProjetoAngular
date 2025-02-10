import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaApiComponent } from './consulta-api.component';

describe('ConsultaApiComponent', () => {
  let component: ConsultaApiComponent;
  let fixture: ComponentFixture<ConsultaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
