import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotaResponse } from '../model/nota-response';
import { Nota } from '../model/nota';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
    baseUrl = environment.baseURL;

    constructor(private http: HttpClient) { }

    getNotas(): Observable<NotaResponse<Nota[]>>{ 
        return this.http.get<NotaResponse<Nota[]>>(`${this.baseUrl}/`);
    }

    getNotaById(id:number): Observable<NotaResponse<Nota>>{ 
        return this.http.get<NotaResponse<Nota>>(`${this.baseUrl}/${id}`);
    }

    addNota(nota:Nota): Observable<NotaResponse<any>>{ 
        return this.http.post<NotaResponse<any>>(`${this.baseUrl}/`, nota);
    }

    updateNota(nota:Nota, id:number): Observable<NotaResponse<any>>{ 
        return this.http.put<NotaResponse<any>>(`${this.baseUrl}/${id}`, nota);
    }

    deleteNota(id:number): Observable<NotaResponse<any>>{ 
        return this.http.delete<NotaResponse<any>>(`${this.baseUrl}/${id}`);
    }
}
