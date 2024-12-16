import { Component, Input } from '@angular/core';
import { New } from '../../New';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-new-direct-column',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './new-direct-column.component.html',
  styleUrl: './new-direct-column.component.css'
})
export class NewDirectColumnComponent {

    redirectTo: string = ""  
  
    @Input () new !: New 
  
    // ao inciar a pagina seta o destinho
    ngOnInit(){
      this.redirectTo = "new/"+this.new.id
    }
}
