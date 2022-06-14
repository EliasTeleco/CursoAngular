import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/peliculas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiUrl: string = 'http://www.omdbapi.com/?apikey=718ac924&t=';

  constructor(private  http: HttpClient) { }

  buscarPelicula( termino: string ): Observable <Movie> {

    const url=`${ this.apiUrl }${ termino }`;
        return this.http.get<Movie>(url); 
          
  }

  getPeliculaPorID( id: string ): Observable <Movie> {

    const url=`${ this.apiUrl }${ id }`;
        return this.http.get<Movie>(url); 
          
  }
}