import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DisplayComponent} from './_components/display/display.component';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {WalletComponent} from './_components/wallet/wallet.component';
import {ProductComponent, ProductDialogComponent} from './_components/product/product.component';
import {WalletVmComponent} from './_components/wallet-vm/wallet-vm.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { CommonDialogComponent } from './_components/common-dialog/common-dialog.component';
import {ErrorDialogComponent} from './_components/common-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    WalletComponent,
    ProductComponent,
    WalletVmComponent,
    CommonDialogComponent,
    ProductDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  entryComponents: [
    CommonDialogComponent,
    ProductDialogComponent,
    ErrorDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
