import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AccountService } from './account-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private accountService = inject(AccountService);
  private platformId = inject(PLATFORM_ID); 

  init(): Observable<null> {
    if (isPlatformBrowser(this.platformId)) {
      const userString = localStorage.getItem("user");

      if (userString) {
        const user = JSON.parse(userString);
        this.accountService.currentUser.set(user);
      }
    } else {
      console.log('SSR: omitiendo acceso a localStorage');
    }

    return of(null);
  }
}
