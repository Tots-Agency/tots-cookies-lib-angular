import { Component, OnInit } from '@angular/core';
import { TotsCookiesService } from 'projects/tots/cookies/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAcceptFunctional = false;
  isAcceptAnalytics = false;
  isAcceptAdvertising = false;

  constructor(
    protected cookiesService: TotsCookiesService
  ) {}

  ngOnInit(): void {
    this.cookiesService.isAcceptFunctional().subscribe(res => this.isAcceptFunctional = res);
    this.cookiesService.isAcceptAnalytics().subscribe(res => this.isAcceptAnalytics = res);
    this.cookiesService.isAcceptAdvertising().subscribe(res => this.isAcceptAdvertising = res);
  }
}
