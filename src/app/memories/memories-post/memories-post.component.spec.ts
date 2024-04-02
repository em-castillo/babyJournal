import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesPostComponent } from './memories-post.component';

describe('MemoriesPostComponent', () => {
  let component: MemoriesPostComponent;
  let fixture: ComponentFixture<MemoriesPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoriesPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoriesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
