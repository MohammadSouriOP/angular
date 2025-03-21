import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystyleComponent } from './mystyle.component';

describe('MystyleComponent', () => {
  let component: MystyleComponent;
  let fixture: ComponentFixture<MystyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MystyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MystyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
