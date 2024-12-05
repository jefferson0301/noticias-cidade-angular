import { Component, OnInit } from '@angular/core';
import { NewService } from '../../../services/new.service';
import { New } from '../../../New';
import { AdmNewComponent } from '../adm-new/adm-new.component';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-painel-adm',
  imports: [AdmNewComponent, FormsModule, CommonModule],
  templateUrl: './painel-adm.component.html',
  styleUrl: './painel-adm.component.css'
})
export class PainelAdmComponent implements OnInit {

  //input formulario de adição de notícia
  id: string = ""
  title: string = ""
  description: string = ""
  url: string = ""
  category: string = ""
  //new !: New

  news: Array<New> = []

  constructor(private newService: NewService) {}

  ngOnInit(): void {
    this.newService.getNews().subscribe((dado) => {
      this.news = dado
      console.log(this.news)
    })
  }

  clearInputs(){
    this.title =  ""
    this.description = ""
    this.url = ""
    this.category = ""
  }

  onSubmit(){
    if(this.title === "" || this.description === "" || this.url === ""){
      alert("Preencha todos com campos")
      return 
    }

    let new2 = {
      title: this.title,
      description: this.description,
      url: this.url,
      category: this.category
    }

    

    this.addNew(new2)

    console.log(new2)

    this.clearInputs()
  }

  addNew(new2: New): void{
    this.newService.addNew(new2).subscribe((dado: New) =>{
      this.news.push(dado)
    })
  }

  updateNew(new4: New): void{
    new4.title = this.title
    new4.url = this.url
    new4.category = this.category
    new4.description = this.description
    console.log(new4)
    this.newService.updateNew(new4).subscribe()
    this.clearInputs()
  }

  deleteNew(new3: New): void{
    this.newService.deleteNew(new3).subscribe((dado: New) =>{
      this.news = this.news.filter(  (n) => n.id !== new3.id )
    } )
    console.log("Noticia deletada")
  }

  
}
