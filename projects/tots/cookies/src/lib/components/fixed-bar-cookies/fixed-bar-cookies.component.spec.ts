import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBarCookiesComponent } from './fixed-bar-cookies.component';

describe('FixedBarCookiesComponent', () => {
  let component: FixedBarCookiesComponent;
  let fixture: ComponentFixture<FixedBarCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedBarCookiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedBarCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
