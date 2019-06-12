import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonificoDetailComponent } from './bonifico-detail.component';

describe('BonificoDetailComponent', () => {
  let component: BonificoDetailComponent;
  let fixture: ComponentFixture<BonificoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonificoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonificoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
