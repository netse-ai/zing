import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiptViewPage } from './receipt-view.page';

describe('ReceiptViewPage', () => {
  let component: ReceiptViewPage;
  let fixture: ComponentFixture<ReceiptViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceiptViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
