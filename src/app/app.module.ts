import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DisplayComponent} from './_components/display/display.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {WalletComponent} from './_components/wallet/wallet.component';
import {ProductComponent} from './_components/product/product.component';
import {WalletVmComponent} from './_components/wallet-vm/wallet-vm.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

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
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
