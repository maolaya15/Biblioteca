import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/service/ng-auth.service';
/**
 * Componente para pantala de verificacion de usuario
 */
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  /**
   * @ignore
   */
  constructor(public ngAuthService: NgAuthService) { }

  /**
   * Inicializa sin parametros de entrada
   */
  ngOnInit(): void {
  }

}
