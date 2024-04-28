import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmSavingsComponent } from './ipm-savings.component';

describe('IpmSavingsComponent', () => {
  let component: IpmSavingsComponent;
  let fixture: ComponentFixture<IpmSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpmSavingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpmSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
