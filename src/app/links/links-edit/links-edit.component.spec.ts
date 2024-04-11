import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksEditComponent } from './links-edit.component';

describe('LinksEditComponent', () => {
  let component: LinksEditComponent;
  let fixture: ComponentFixture<LinksEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinksEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
