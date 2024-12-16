import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { PainelAdmComponent } from '../painel-adm/painel-adm.component';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  imports: [ CommonModule, FormsModule, PainelAdmComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  //standalone: false,
})
export class LoginComponent {

  constructor( private toastr: ToastrService) {}

  flagContinue: boolean = false

  loginInput: string = ""
  password: string = ""
  loginRequired: boolean = true
  passwordRequired: boolean = true

  clearControls(){
    this.loginRequired  = true
    this.passwordRequired = true
  }

  

  onSubmit(){
    this.clearControls()
    if(this.loginInput === "" ) {
      this.loginRequired = false
      this.toastr.error("Preencha todos os campos", "Erro", {timeOut: 3000, progressBar: true})
      return
    }
    if(this.password === "" ) {
      this.passwordRequired = false
      this.toastr.error("Preencha todos os campos", "Erro", {timeOut: 3000, progressBar: true})
      return
    }
    if(this.password === "adm4321" && this.loginInput === "adm" ){
      this.flagContinue = true
      this.toastr.success("Login realizado com Sucesso", "Sucesso", {timeOut: 3000, progressBar: true})
    }
    else{
      this.toastr.error("Login ou senha inválidos", "Erro", {timeOut: 3000, progressBar: true})
    }
    
    //console.log(this.password, this.loginInput)
  }

  
}
