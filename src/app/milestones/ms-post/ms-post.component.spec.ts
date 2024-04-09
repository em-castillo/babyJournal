import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsPostComponent } from './ms-post.component';

describe('MsPostComponent', () => {
  let component: MsPostComponent;
  let fixture: ComponentFixture<MsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
