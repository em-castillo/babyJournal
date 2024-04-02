import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsListComponent } from './ms-list.component';

describe('MsListComponent', () => {
  let component: MsListComponent;
  let fixture: ComponentFixture<MsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
