import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Skills } from "../models/skills";

@Injectable({
    providedIn: "root"
})
export class SkillsService {
    skiURL = 'http://localhost:8080/skills/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Skills[]>{
        return this.httpClient.get<Skills[]>(this.skiURL + 'lista');
    }

    public detail(id: number): Observable<Skills>{
        return this.httpClient.get<Skills>(this.skiURL + `detail/${id}`);
    }

    public save(skills: Skills): Observable<any>{
        return this.httpClient.post<any>(this.skiURL + 'create', skills);
    }

    public update(id: number, skills: Skills): Observable<any>{
        return this.httpClient.put<any>(this.skiURL + `update/${id}`, skills);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.skiURL + `delete/${id}`);
    }

}