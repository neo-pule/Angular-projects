import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http :HttpClient) { }
  getPeople()
  {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
}
