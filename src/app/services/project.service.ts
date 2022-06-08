import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getprojects(): Observable<Project[]>  {
    return this.http.get<Project[]>('/assets/projects.json')
  }
  // getproject(id:number): Observable<Project>{
  //   const ressponse = this.http.get<Project[]>('/assets/projects.json')
  //   return ressponse.
  // }
}
