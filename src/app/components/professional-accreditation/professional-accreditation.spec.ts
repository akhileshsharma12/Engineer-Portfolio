import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAccreditation } from './professional-accreditation';

describe('ProfessionalAccreditation', () => {
  let component: ProfessionalAccreditation;
  let fixture: ComponentFixture<ProfessionalAccreditation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalAccreditation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalAccreditation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
