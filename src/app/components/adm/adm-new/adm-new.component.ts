import { Component, EventEmitter, Input, Output } from '@angular/core';
import { New } from '../../../New';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adm-new',
  imports: [CommonModule],
  templateUrl: './adm-new.component.html',
  styleUrl: './adm-new.component.css'
})
export class AdmNewComponent {

  
  @Output () onDeleteNew = new EventEmitter<New>()
  @Output () onUpdateNew = new EventEmitter<New>()
  @Input () new !: New

  textAlt: string = ""
  
  ngOnInit(){
    this.textAlt  = `Imagem do ${this.new.title}`

  }

  onDelete(new3: New){
    this.onDeleteNew.emit(new3)
  }

  onUpdate(new4: New){
    this.onUpdateNew.emit(new4)
  }
 
}
