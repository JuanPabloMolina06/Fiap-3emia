import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaValorPage } from './tela-valor.page';

describe('TelaValorPage', () => {
  let component: TelaValorPage;
  let fixture: ComponentFixture<TelaValorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaValorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
