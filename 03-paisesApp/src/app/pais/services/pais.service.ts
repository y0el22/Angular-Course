import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v2'
  get getParams(){return new HttpParams().set('fields','flag,name,capital,population,alpha2Code')}

  constructor(private http:HttpClient) { }


  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params:this.getParams})
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}?fields=flag,name,capital,population,alpha2Code`;
    return this.http.get<Country[]>(url, {params:this.getParams})
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha?codes=${id}`;
    return this.http.get<Country>(url)
  }

  buscarRegion(region:String):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}?fields=flag,name,capital,population,alpha2Code`
    return this.http.get<Country[]>(url, {params:this.getParams})
  }
  




}
