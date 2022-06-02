import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {
  }
  getPeople():Observable<any> {
    return this.http.get(`${environment.apiUrl}/people`)
  }
}
