import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/**Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';


/** Components */
import { FixedBarCookiesComponent } from './components/fixed-bar-cookies/fixed-bar-cookies.component';


@NgModule({
  declarations: [
    
    /** Components */
    FixedBarCookiesComponent
  ],
  imports: [
    CommonModule,
    /** Angular Material */
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  exports: [
    /** Components */
    FixedBarCookiesComponent
  ]
})
export class TotsCookiesModule { }
