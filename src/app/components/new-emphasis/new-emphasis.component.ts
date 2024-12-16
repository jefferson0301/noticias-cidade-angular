import { Component, Input, OnInit } from '@angular/core';
import { New } from '../../New';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-emphasis',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './new-emphasis.component.html',
  styleUrl: './new-emphasis.component.css'
})
export class NewEmphasisComponent implements OnInit{

  redirectTo: string = ""  

  @Input () new !: New

  // ao inciar a pagina seta o destinho
  ngOnInit(){
    this.redirectTo = "new/"+this.new.id
  }

}
