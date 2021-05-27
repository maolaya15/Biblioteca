import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/service/ng-auth.service';

/**
 * Componente para recuperacion de contraseña
 */
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  /**
   * @ignore
   */
  constructor(public ngAuthService: NgAuthService) { }

  /**
   * Inicializa sin parametros
   */
  ngOnInit(): void {
  }

}
