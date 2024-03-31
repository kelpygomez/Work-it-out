import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutineMakerPage } from './routine-maker.page';

describe('RoutineMakerPage', () => {
  let component: RoutineMakerPage;
  let fixture: ComponentFixture<RoutineMakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoutineMakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
