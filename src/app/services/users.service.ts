import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../user';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  url = 'http://localhost:25277/api/User';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '?_sort=id&_order=desc');
  }
}
