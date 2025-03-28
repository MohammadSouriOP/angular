import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeComponent } from './challange.component';

describe('ChallangeComponent', () => {
  let component: ChallangeComponent;
  let fixture: ComponentFixture<ChallangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
