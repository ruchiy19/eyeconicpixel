import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarListComponent } from './navbar-list.component';

describe('NavbarListComponent', () => {
  let component: NavbarListComponent;
  let fixture: ComponentFixture<NavbarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarListComponent]
    });
    fixture = TestBed.createComponent(NavbarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
