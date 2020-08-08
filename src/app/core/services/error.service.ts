import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class ErrorService {

  private errorSubject = new BehaviorSubject<string>(null);
  error$ = this.errorSubject.asObservable();

  getError(errorMessage: string): void {
    this.errorSubject.next(errorMessage);
  }

  clearError(): void {
    this.errorSubject.next(null);
  }

}
