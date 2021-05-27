import { Component } from '@angular/core';

/**
 * AppComponent Renderiza la aplicacion 
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /**
   * variable para el titulo de la aplicacion
   */
  title = 'angular-firebase-authentication';
}
