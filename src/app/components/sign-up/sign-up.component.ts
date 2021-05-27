import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/service/ng-auth.service';
/**
 * Componente para pantalla de registro de usuario
 */
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(public ngAuthService: NgAuthService) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
