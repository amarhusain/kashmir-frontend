import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaftanDashboardComponent } from './kaftan-dashboard.component';

describe('KaftanDashboardComponent', () => {
  let component: KaftanDashboardComponent;
  let fixture: ComponentFixture<KaftanDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaftanDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaftanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
