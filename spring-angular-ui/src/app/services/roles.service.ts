import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

const API_URL = 'http://localhost:8080/api/roles';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) {}

    getAllRoles(): Observable<Role[]> {
      return this.http.get<Role[]>(API_URL);
    }

}
