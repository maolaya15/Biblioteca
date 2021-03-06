import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

/**
 * Interface del usuario
 */
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para la autenticacion del usuario
 */
export class NgAuthService {
  userState: any;
  /**
   * @ignore
   */
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  /**
   * Metodo para el inicio de sesion, evalua si se encuantra registrado
   * @param {string} email email del usuario
   * @param {string} password contrasena usuario
   * 
   */
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  /**
   * Metodo para el Registro email
   * @param {string} email email del usuario
   * @param {string} password contrasena usuario
   * 
   */
  
  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  /**
   * Metodo para que envia la verificacion al usuario
   */
  SendVerificationMail() {
      return this.afAuth.currentUser.then(u =>  u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verification']);
      })
  }
  /**
   * Metodo que permite recuperar contrase??a
   * @param {string} passwordResetEmail para reestablecer
   * 
   */
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  /**
   * Metodo que evalua si el usuario se encuentra logueado
   * @returns {boolean} true si el usuario se encuentra logeado 
   */
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    return (user !== null && user?.emailVerified !== false) ? true : false;
  }
  /**
   * Metodo par la autenticacion con google
   */

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Metodo para autenticar el usuario segun su firebase
   * @param {AuthProvider}  provider
   * 
   */

  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }
  /**
   * Crear usuario
   * @param {User} user
   */
  SetUserData(user: firebase.User | null) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userState, {
      merge: true
    })
  }

  /**
   *Finalizar sesion 
   */
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
}
