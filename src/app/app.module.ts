import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

import { AuthenticationService, UserService, AlertService } from './_services';
import { AuthGuard } from './_guards';
import { CanvasComponent } from './canvas/canvas.component';
import { Interceptor } from './_core/interceptor';
import { TokenStorage } from './_core/token.storage';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [AuthGuard, AuthenticationService, UserService, AlertService, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    // Save the icons
    matIconRegistry.addSvgIcon('facebook',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/facebook.svg')
    );
    matIconRegistry.addSvgIcon('copy',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/copy.svg')
    );
    matIconRegistry.addSvgIcon('email',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/email.svg')
    );
    matIconRegistry.addSvgIcon('messenger',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/messenger.svg')
    );
    matIconRegistry.addSvgIcon('twitter',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/twitter.svg')
    );
    matIconRegistry.addSvgIcon('instagram',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/instagram.svg')
    );
  }
}


