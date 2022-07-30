import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Experiencia } from "../models/experiencia";

@Injectable({
    providedIn: "root"
})
export class ExperienciaService {
    private apiServerUrl = 'https://ejzback.herokuapp.com';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Experiencia[]>{
        return this.httpClient.get<Experiencia[]>(this.apiServerUrl + 'lista');
    }

    public detail(id: number): Observable<Experiencia>{
        return this.httpClient.get<Experiencia>(this.apiServerUrl + `detail/${id}`);
    }

    public save(experiencia: Experiencia): Observable<any>{
        return this.httpClient.post<any>(this.apiServerUrl + 'create', experiencia);
    }

    public update(id: number, experiencia: Experiencia): Observable<any>{
        return this.httpClient.put<any>(this.apiServerUrl + `update/${id}`, experiencia);
    }

    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.apiServerUrl + `delete/${id}`);
    }
}