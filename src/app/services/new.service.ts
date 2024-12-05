import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from '../New';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  private apiUrl = "http://localhost:3000/news"

  constructor(private http: HttpClient) { }

  addNew(new2: New){
    return this.http.post<New>(`${this.apiUrl}`, new2)
  }

  getNews(): Observable<New[]>{
    return this.http.get<New[]>(this.apiUrl)
  }

  getNew(id: string): Observable<New>{
    
    return this.http.get<New>(`${this.apiUrl}/${id}`)
  }

  updateNew(new4: New) : Observable<New> {
    return this.http.put<New>(`${this.apiUrl}/${new4.id}`, new4)
  }

  deleteNew(new3: New): Observable<New>{
    return this.http.delete<New>(`${this.apiUrl}/${new3.id}`)
  }


}
