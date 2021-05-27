import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Componente que permite editar un libro
 */
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  
  idBook : string = ""
  book : Book | undefined 
  editTitulo: string = ""
  
  /**
   *@ignore
   */
  constructor(public readonly bookService: BookService,
    public detalleComponent: DetalleComponent, private routerActive: ActivatedRoute, ) { }

  /**
   * Inicializa con el valor del id del libro seleccionado
   */
  ngOnInit(): void {
    console.log('ingresa ngOnInit')
    this.idBook = this.routerActive.snapshot.params['id'];
    console.log(this.idBook) 
    this.getDetalles();
    console.log('EL titulo es en oninit'+this.book?.titulo)
    
  }
  /**
   * Metodo que obtiene de nuevo detalles del libro para editarlo
   */
  getDetalles(): void {
    console.log('ingresa getDetalles')
    console.log(this.idBook)
    this.bookService.getAllDetalle(this.idBook).pipe(take(1)).subscribe((resp: any)=>{      
    this.book = resp.resultado;
    })
  }

  editBook(): void{
      console.log(this.book)    
      //this.bookService.editBookId(this.idBook, this.book).pipe(take(1)).subscribe()    
  }

}
