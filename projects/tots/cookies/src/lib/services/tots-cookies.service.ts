import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotsCookiesService {

  static STORAGE_KEY_MAIN = 'tots_cookies';
  static STORAGE_KEY_COOKIE = 'tots_cookies_';

  constructor(
    protected storage: StorageMap
  ) { }

  has(): Observable<boolean> {
    return this.storage.has(TotsCookiesService.STORAGE_KEY_MAIN);
  }

  acceptAll(){
    this.acceptFunctional();
    this.acceptAnalytics();
    this.acceptAdvertising();
  }

  isAccept(key: string):Observable<boolean> {
    return this.storage.get<boolean>(TotsCookiesService.STORAGE_KEY_COOKIE + key, { type: 'boolean' })
    .pipe(map(res => res || false));
  }

  isAcceptFunctional(): Observable<boolean> {
    return this.isAccept('functional');
  }

  isAcceptAnalytics(): Observable<boolean> {
    return this.isAccept('analytics');
  }

  isAcceptAdvertising(): Observable<boolean> {
    return this.isAccept('advertising');
  }

  accept(key: string) {
    this.storage.set(TotsCookiesService.STORAGE_KEY_COOKIE + key, true, { type: 'boolean' }).subscribe();
    this.storage.set(TotsCookiesService.STORAGE_KEY_MAIN, true, { type: 'boolean' }).subscribe();
  }

  acceptFunctional() {
    this.accept('functional');
  }

  acceptAnalytics() {
    this.accept('analytics');
  }

  acceptAdvertising() {
    this.accept('advertising');
  }
}
