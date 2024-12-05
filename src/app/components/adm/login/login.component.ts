import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { PainelAdmComponent } from '../painel-adm/painel-adm.component';

@Component({
  selector: 'app-login',
  imports: [ CommonModule, FormsModule, PainelAdmComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  //standalone: false,
})
export class LoginComponent {

  flagContinue: boolean = false

  loginInput: string = ""
  password: string = ""

  onSubmit(){
    if(this.password === "adm4321" && this.loginInput === "adm" ){
      this.flagContinue = true
    }
    
    console.log(this.password, this.loginInput)
  }
}
