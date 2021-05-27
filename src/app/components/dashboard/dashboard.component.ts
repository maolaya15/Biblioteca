import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';
import { NgAuthService } from 'src/app/service/ng-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * Lista de libros
   */
  public listBook: Book[] = []
  /**
   * @ignore
   */
  constructor(public ngAuthService: NgAuthService, public readonly bookService: BookService,
    private router: Router) { }

  /**
   * Al loguearse carga la lista de libros 
   */
  ngOnInit(): void {
    this.getBooks();
    console.log('lista en'+this.listBook)
  }
  
  /**
   * Metodo que consume el servicio Bookservice y trae los libros
   */
  public getBooks(): void {
    this.bookService.getAllBooks().pipe(take(1)).subscribe((resp: any)=>{      
      this.listBook = resp.resultado;
      console.log(this.listBook)
    })
  }

  /**
   * Metodo que navega a la ventana del componente DetalleComponent
   */
  public verDetalle(idBook: string): void{
    console.log(idBook)
    this.router.navigate(['/detalle',idBook])
  }

  /**
   * Metodo que navega a la ventana del componente CrearLibroComponent
   * @returns {void}
   */
  public crearLibro():void{
    this.router.navigate(['/crearLibro'])
  }


}
