import { Component, Input } from '@angular/core';
import { New } from '../../New';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-new',
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  redirectTo: string = ""  

  @Input () new !: New 

  // ao inciar a pagina seta o destinho
  ngOnInit(){
    this.redirectTo = "new/"+this.new.id
  }

  

}
