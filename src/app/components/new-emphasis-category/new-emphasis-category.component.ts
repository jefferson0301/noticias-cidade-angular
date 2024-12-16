import { Component, Input, OnInit } from '@angular/core';
import { New } from '../../New';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-emphasis-category',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './new-emphasis-category.component.html',
  styleUrl: './new-emphasis-category.component.css'
})
export class NewEmphasisCategoryComponent implements OnInit {
  
    redirectTo: string = ""  
  
    @Input () new !: New
  
    // ao inciar a pagina seta o destinho
    ngOnInit(){
      this.redirectTo = "new/"+this.new.id
    }
}
