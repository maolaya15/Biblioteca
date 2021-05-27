import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';
import { NgAuthService } from 'src/app/service/ng-auth.service';
import Swal from 'sweetalert2';

/**
 * Componente para obtener la informacion de 
 * determinado libro
 */
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  idBook: any ="";
  public book: Book | undefined

  /**
   * @ignore 
   */
  constructor(public ngAuthService: NgAuthService, public readonly bookService: BookService,
  public dashboardComponent: DashboardComponent, private routerActive: ActivatedRoute, private router: Router,) { }
    
  /**
   * Inicia con el parámetro del id del libro
   * @returns void
   */
  ngOnInit(): void {
    console.log('ingresa ngOnInit')
    this.idBook = this.routerActive.snapshot.params['id'];
    console.log(this.idBook)
    this.getDetalles();
  }

  /**
   * Metodo que subscribe la informacion del libro 
   * a consultar
   * @returns void
   */
  getDetalles(): void {
    console.log('ingresa getDetalles')
    console.log(this.idBook)
    this.bookService.getAllDetalle(this.idBook).pipe(take(1)).subscribe((resp: any)=>{      
    this.book = resp.resultado;
    console.log(this.book)
    })
  }
  /**
   * Metodo que consume el servicio para eliminar el libro segun su id
   * @returns void
   */
  delBook():void{
    const swalAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalAlert.fire({
      title: '¿Esta seguro?',
      text: "Desea eliminar el libro",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminarlo',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Ingresa al delBook')    
        this.bookService.deleteBook(this.idBook).subscribe()    
        console.log('Se elimina el libro con id'+this.idBook)
        swalAlert.fire(          
          'Eliminado!',
          'El libro ha sido eliminado',
          'success'
        )
        this.router.navigate(['/dashboard'])
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalAlert.fire(
          'Cancelado',
          'No se ha eliminado el libro',
          'error'
        )
      }
    })    
  }

  /**
   * Metodo que navega a la ventana del componente BookEditComponent
   * @returns void
   */
  public editBook(): void{
    console.log('Ingresa al editBook de detalle')
    console.log(this.idBook)   
    const enviarLibroParaEdit = this.book
    console.log('si se envia el libro')
    console.log(enviarLibroParaEdit)
    this.router.navigate(['/editar',this.idBook])
  }

  /**
   * Metodo que regresa a la ventana del componente DashboardComponent
   * @returns void
   */
  public regresar():void{
    this.router.navigate(['/dashboard'])
  }

}
