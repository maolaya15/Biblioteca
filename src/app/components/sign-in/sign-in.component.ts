import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/service/ng-auth.service';

/**
 * Componente para pantalla de inicio de sesion
 */

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(
    public ngAuthService: NgAuthService
  ) { }
  /**
   * Inicia sin ningun parametros
   */
  ngOnInit(): void {
  }

}
