import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsDetailComponent } from './ms-detail.component';

describe('MsDetailComponent', () => {
  let component: MsDetailComponent;
  let fixture: ComponentFixture<MsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
