import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletVmComponent } from './wallet-vm.component';

describe('WalletVmComponent', () => {
  let component: WalletVmComponent;
  let fixture: ComponentFixture<WalletVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
