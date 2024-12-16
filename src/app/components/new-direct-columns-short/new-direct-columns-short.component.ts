import { Component, Input } from '@angular/core';
import { New } from '../../New';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-new-direct-columns-short',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './new-direct-columns-short.component.html',
  styleUrl: './new-direct-columns-short.component.css'
})
export class NewDirectColumnsShortComponent {

   redirectTo: string = ""  
    
      @Input () new !: New 
    
      // ao inciar a pagina seta o destinho
      ngOnInit(){
        this.redirectTo = "new/"+this.new.id
      }
}
