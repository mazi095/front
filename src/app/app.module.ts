import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import {MatCardModule} from '@angular/material';
import { WalletComponent } from './wallet/wallet.component';
import { ProductComponent } from './product/product.component';
import { WalletVmComponent } from './wallet-vm/wallet-vm.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    WalletComponent,
    ProductComponent,
    WalletVmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
