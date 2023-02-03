import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { tap } from 'rxjs';
import { TotsCookiesService } from '../../services/tots-cookies.service';

@Component({
  selector: 'tots-fixed-bar-cookies',
  templateUrl: './fixed-bar-cookies.component.html',
  styleUrls: ['./fixed-bar-cookies.component.scss']
})
export class FixedBarCookiesComponent implements OnInit {

  isShowCustomizer = false;
  isLoading = true;
  isConfigured = false;

  checkFunctional = false;
  checkAnalytics = false;
  checkAdvertising = false;

  constructor(
    protected cookiesService: TotsCookiesService
  ) { }

  ngOnInit(): void {
    this.loadCookies();
  }

  onClickSave() {
    if(this.checkFunctional){
      this.cookiesService.acceptFunctional();
    } else {
      this.cookiesService.rejectFunctional();
    }
    
    if(this.checkAnalytics){
      this.cookiesService.acceptAnalytics();
    } else {
      this.cookiesService.rejectAnalytics();
    }

    if(this.checkAdvertising){
      this.cookiesService.acceptAdvertising();
    } else {
      this.cookiesService.rejectAdvertising();
    }

    this.isConfigured = true;
  }

  onChangeCheckFunctional(event: MatSlideToggleChange) {
    this.checkFunctional = event.checked;
  }

  onChangeCheckAnalytics(event: MatSlideToggleChange) {
    this.checkAnalytics = event.checked;
  }

  onChangeCheckAdvertising(event: MatSlideToggleChange) {
    this.checkAdvertising = event.checked;
  }

  onClickAcceptAll() {
    this.cookiesService.acceptAll();
    this.isConfigured = true;
  }

  onClickRejectAll() {
    this.cookiesService.rejectAll();
    this.isConfigured = true;
  }

  loadCookies() {
    this.cookiesService.has()
    .pipe(tap(res => this.isConfigured = res))
    .subscribe(res => this.isLoading = false);
  }
}
