import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGIFResponse, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'oYJzrgAtZVlHAMA43fWJJ2OBqOr4K8AN'
  private _historial: string[] = [];

  //TODO: Cambiar any por su tipo
  public resultados:Gif[] =[]

  get historial(){
    
    return [...this._historial];
  }

  constructor(private http:HttpClient ){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    //TODO: Mejorar este código
    if (JSON.parse(localStorage.getItem('ultimoResultado')!)) {
      this.buscarGifs(JSON.parse(localStorage.getItem('ultimoResultado')!))
    }

    //this.buscarGifs(JSON.parse(localStorage.getItem('ultimoResultado')!) || "")
    

  }

  buscarGifs(query: string){

    query = query.trim().toLocaleLowerCase()

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10)

      localStorage.setItem('historial', JSON.stringify(this._historial));
      localStorage.setItem('ultimoResultado', JSON.stringify(this._historial[0]));

    }


    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=oYJzrgAtZVlHAMA43fWJJ2OBqOr4K8AN&q=${query}&limit=10`)
      .subscribe((resp) =>{ //El subscribe se ejecuta cuando tengamos la resolución del get
        console.log(resp.data);
        this.resultados = resp.data
      }) 


  }

}
