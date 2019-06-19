import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GitUserSearchService {

  constructor(private _http: HttpClient) { }

  getUser(users: any): Observable<any> {
    let getUserURL = `https://api.github.com/search/users?q=${users}`;
    return this._http.get(getUserURL);

  }

  getRepoDetails(user: any): Observable<any> {
    let getRepoDetailURL = `https://api.github.com/users/${user}/repos`;
    return this._http.get(getRepoDetailURL);
  }
}
