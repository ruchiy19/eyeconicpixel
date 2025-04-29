import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitisgoingComponent } from './howitisgoing.component';

describe('HowitisgoingComponent', () => {
  let component: HowitisgoingComponent;
  let fixture: ComponentFixture<HowitisgoingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HowitisgoingComponent]
    });
    fixture = TestBed.createComponent(HowitisgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
