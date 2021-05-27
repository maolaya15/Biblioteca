import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';
import Swal from 'sweetalert2';
import { DashboardComponent } from '../dashboard/dashboard.component';
/**
 * Componente para la creacion de un libro
 */
@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
  /**
   * Parametros de la interface Book
   */
  book : Book ={
    titulo: "",
    autor: "",
    tema: "",
    imagen: "",
    isbn: 0,
    descripcion :"",
    resumen : "",
    serie : "",
    edicion : ""
  } 
  /**
   *  @ignore
   */
  constructor(public readonly bookService: BookService,
    public dashboardComponent: DashboardComponent, private router: Router, ) { }
  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * Metodo que subscribe la informacion del libro nuevo
   * @returns void
   */
  public crear():void{
    Swal.fire({
      title: '¿Está seguro de crear el libro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.bookService.crearLibro(this.book).subscribe(newBook => console.log(newBook))    
        Swal.fire('Libro guardado!', '', 'success')
        console.log('crear libro'+ this.book)
        this.router.navigate(['/dashboard'])
      } else if (result.isDenied) {
        Swal.fire('No se ha agregado el libro', '', 'info')
      }
    })    
    
  }

  /**
   * Metodo que regresa a la ventana del componente DashboardComponent
   * @returns void
   */
  public regresar():void{
    this.router.navigate(['/dashboard'])
  }

}
