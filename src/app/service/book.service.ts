import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  /**
   * @ignore
   */
  constructor(private http:HttpClient) { }

  /**
   * Metodo que obtiene la lista de libros
   * @returns Observable con el listado de libros
   */
  public getAllBooks():Observable<Book[]>{
    const headers = new HttpHeaders({'uuid':'889898989'})
    const url: string = environment.API_POSTMAN_URL
    return this.http.get<Book[]>(url, {headers: headers})
  }

  /**
   * Metodo que consulta el libro segun su id
   * @param idBook id del libro a consultar
   * @returns Observable del libro con toda su informacion
   */

  getAllDetalle(idBook : string): Observable<Book> {
    const headers = new HttpHeaders({'uuid':'12312312'})
    const url : string = environment.API_POSTMAN_URL+`/${idBook}`
    return this.http.get<Book>(url, {headers: headers})
  }

  /**
   * Metodo que consume la peticion delete, para eliminar libro
   * @param idBook id del libro a eliminar
   *
   */

  deleteBook(idBook: string){
    const headers = new HttpHeaders ({'uuid' : '123123'})
    const url : string = environment.API_POSTMAN_URL + `/${idBook}` 
    return this.http.delete(url, {headers : headers})
  }

  /**
   * Metodo que permite editar un libro
   * @param idBook id del libra a editar
   * @param bodyBook json con la informacion a editar
   * @returns Observable<Book> para editar el libro
   */
  editBookId(idBook : String, bodyBook : Book): Observable<Book>{
    const headers = new HttpHeaders ({'uuid' : '313131313'})
    const url : string = environment.API_POSTMAN_URL + `/${idBook}`
    return this.http.put<Book>(url, bodyBook, {headers : headers})
  }

  /**
   * Metodo que permite agregar un libro al listado
   * @param bodyBook json con la informacion del libro a crear
   * @returns 
   */
  crearLibro(bodyBook: Book): Observable<Book>{
    const headers = new HttpHeaders ({'uuid' : '89898989'})
    const url :string = environment.API_POSTMAN_URL
    return this.http.post<Book>(url, bodyBook, {headers : headers})
  }

}
