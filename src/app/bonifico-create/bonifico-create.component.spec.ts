import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonificoCreateComponent } from './bonifico-create.component';

describe('BonificoCreateComponent', () => {
  let component: BonificoCreateComponent;
  let fixture: ComponentFixture<BonificoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonificoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonificoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
