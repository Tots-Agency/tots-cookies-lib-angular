import { NgModule } from '@angular/core';

/**Angular Material */
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


/** Components */
import { FixedBarCookiesComponent } from './components/fixed-bar-cookies/fixed-bar-cookies.component';


@NgModule({
  declarations: [
    
    /** Components */
    FixedBarCookiesComponent
  ],
  imports: [
    /** Angular Material */
    MatCardModule,
    MatSlideToggleModule
  ],
  exports: [
    /** Components */
    FixedBarCookiesComponent
  ]
})
export class TotsCookiesModule { }
