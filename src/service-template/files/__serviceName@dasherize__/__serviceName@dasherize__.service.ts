import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { classify } from '@angular-devkit/core/src/utils/strings';
import { url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

const RESOURSE_URL = <%= url %>;

@Injectable({
  providedIn: 'root'
})
export class <%= classify(serviceName)%>Service {
  constructor(private httpClient:HttpClien){
  }

  findAll(): Observable<<%= classify(serviceName)%>[]>{
    return this.httpClient.get<<%= classify(serviceName)%>[]>(RESOURSE_URL);
  }

 <% if (findOne) { %>
    findOne(id: string): Observable<<%= classify(serviceName)%>>{
      return this.httpClient.get<<%= classify(serviceName)%>>('${RESOURSE_URL}/${id}');
    }
    <% }%>

}

export interface <%= classify(serviceName)%> {
  prop: strings;
}
