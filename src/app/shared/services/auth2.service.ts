import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {AuthService} from './auth.service';

export interface AuthState {
  username: string;
  role: 'admin' | 'user';
}

@Injectable()
export class Auth2Service{

  public Login(username: string, password: string): boolean {

    console.log('ciao!!!');
    return false;
  }
}
