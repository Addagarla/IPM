import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDrillComponent } from './pie-drill.component';

describe('PieDrillComponent', () => {
  let component: PieDrillComponent;
  let fixture: ComponentFixture<PieDrillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieDrillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
