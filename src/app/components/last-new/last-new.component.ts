import { Component, Input } from '@angular/core';
import { New } from '../../New';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-last-new',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './last-new.component.html',
  styleUrl: './last-new.component.css'
})
export class LastNewComponent {

  @Input () lastNew !: New

  redirectTo: string = ""  

  
  // ao inciar a pagina seta o destinho
  ngOnInit(){
    this.redirectTo = "new/"+this.lastNew.id
  }

}
