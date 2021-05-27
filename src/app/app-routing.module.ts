import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  { path: 'detalle/:id', component: DetalleComponent, canActivate: [AuthGuard]},
  { path: 'editar/:id', component: BookEditComponent, canActivate: [AuthGuard]},
  { path: 'crearLibro', component: CrearLibroComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
