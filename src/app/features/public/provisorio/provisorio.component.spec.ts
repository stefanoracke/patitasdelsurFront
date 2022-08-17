import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisorioComponent } from './provisorio.component';

describe('ProvisorioComponent', () => {
  let component: ProvisorioComponent;
  let fixture: ComponentFixture<ProvisorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvisorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvisorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
