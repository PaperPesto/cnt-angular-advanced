import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';

export interface AuthState {
  username: string;
  role: 'admin' | 'user';
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private state$ = new BehaviorSubject<AuthState | null>(null);
  public isLogged$ = this.state$.pipe(map(s => !!s));
  public role$ = this.state$.pipe(map(s => s?.role));
  public isAdmin$ = this.state$.pipe(map(s => s?.role === 'admin'));


  public Login(username: string, password: string): boolean {

    if(password !== '1234') {
      this.state$.next(null);
      return false;
    }

    const isAdmin = username.toLowerCase() === 'admin';
    this.state$.next({
      username,
      role: isAdmin ? 'admin' : 'user'
    });
    return true;
  }

  public Logout() {
    this.state$.next(null);
  }
}
