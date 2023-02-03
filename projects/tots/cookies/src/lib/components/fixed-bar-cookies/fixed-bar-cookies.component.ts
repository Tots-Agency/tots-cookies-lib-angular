import { Component, OnInit } from '@angular/core';
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

  constructor(
    protected cookiesService: TotsCookiesService
  ) { }

  ngOnInit(): void {
    this.loadCookies();
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
