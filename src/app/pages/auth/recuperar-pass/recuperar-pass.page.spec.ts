import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPassPage } from './recuperar-pass.page';

describe('RecuperarPassPage', () => {
  let component: RecuperarPassPage;
  let fixture: ComponentFixture<RecuperarPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
