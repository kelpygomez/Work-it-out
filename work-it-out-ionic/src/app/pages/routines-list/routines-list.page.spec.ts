import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutinesListPage } from './routines-list.page';

describe('RoutinesListPage', () => {
  let component: RoutinesListPage;
  let fixture: ComponentFixture<RoutinesListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoutinesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
