import { Component, OnInit } from '@angular/core';
import { NewService } from '../../../services/new.service';
import { New } from '../../../New';
//import { AdmNewComponent } from '../adm-new/adm-new.component';
import {FormsModule} from '@angular/forms'
import { CommonModule, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-painel-adm',
  imports: [ FormsModule, CommonModule],
  templateUrl: './painel-adm.component.html',
  styleUrl: './painel-adm.component.css'
})
export class PainelAdmComponent implements OnInit {

  //arrays fixos de sub categorias
  sportsSubCategorys: string [] = ["Brasileirão", "Libertadores", "Internacional"]
  policySubCategorys: string [] = ["Nacional", "Estadual","Municipal"]
  internacionalSubCategorys: string [] = ["America", "Europa", "Ocidente"]

  //input formulario de adição de notícia
  id: string = ""
  title: string = ""
  description: string = ""
  url: string = ""
  category: string = ""
  subCategory: string = ""
  titleRequired: boolean = true
  titleLength: boolean = true
  descriptionRequired: boolean = true
  descriptionLength: boolean = true 
  urlRequired: boolean = true
  urlLength: boolean = true
  categoryRequired: boolean = true
  showFormAddNew: boolean = false
  //pesquisa noticias
  searchNews: Array<New> = [] // array variavel para pesquisar
  titleSearch: string = "" //titulo a ser pesquisado
  haveNews: boolean = true

  news: Array<New> = [] //array fixo das noticias

  constructor(private newService: NewService, private toastr: ToastrService) {}

  search(){
    this.searchNews = this.news.filter( (data) => data.title.includes(this.titleSearch) )
    if(this.searchNews.length === 0){
      this.haveNews = false
    }
    else{
      this.haveNews = true
    }
  }

  showFormAddNews(){
    this.showFormAddNew = !this.showFormAddNew
  }

  ngOnInit(): void {
    this.newService.getNews().subscribe((dado) => {
      this.news = dado
      this.searchNews = dado
      console.log(this.news)
    })
  }

  clearInputs(){
    this.title =  ""
    this.description = ""
    this.url = ""
    this.category = ""
    this.titleRequired = true
    this.titleLength = true
    this.descriptionRequired = true
    this.descriptionLength = true 
    this.urlRequired = true
    this.urlLength = true
    this.categoryRequired = true

  }

  clearControlsErrors(){
    this.titleRequired = true
    this.titleLength = true
    this.descriptionRequired = true
    this.descriptionLength = true 
    this.urlRequired = true
    this.urlLength = true
    this.categoryRequired = true
  }

  onSubmit(){
    //verifica as regras de negocio 
    // 1 todos os campos são obrigatórios
    this.clearControlsErrors()
    if(this.title === "" || this.description === "" || this.url === "" || this.title.length < 5 || this.description.length < 20 || this.url.length < 10){
      //alert("Preencha todos com campos")
      this.toastr.error("Preencha todos os campos", "Erro", {timeOut: 3000, progressBar: true})
      if(this.title === ""){
        this.titleRequired = false
      }
      if(this.category === ""){
        this.categoryRequired = false
      }
      if(this.url === ""){
        this.urlRequired = false
      }
      if(this.description === ""){
        this.descriptionRequired = false
      }
      //verificando tamanhos
      if(this.title.length < 5){
        this.titleLength = false
      }
      if(this.description.length < 20){
        this.descriptionLength = false
      }
      if(this.url.length < 10){
        this.urlLength = false
      }

      return 
    }

    let new2 = {
      title: this.title,
      description: this.description,
      url: this.url,
      category: this.category,
      subCategory: this.subCategory
    }

    

    this.addNew(new2)

    console.log(new2)

    this.clearInputs()
  }

  addNew(new2: New): void{
    this.newService.addNew(new2).subscribe((dado: New) =>{
      this.news.push(dado)
      this.searchNews = this.news
    })
    this.toastr.success("Noticia adiciona com Sucesso", "Adicionada", {timeOut: 3000, progressBar: true})
  }

  updateNew(new4: New): void{
    new4.title = this.title
    new4.url = this.url
    new4.category = this.category
    new4.description = this.description
    console.log(new4)
    this.newService.updateNew(new4).subscribe()
    this.clearInputs()
    this.toastr.success("Noticia atualizada com Sucesso", "Atualizada", {timeOut: 3000, progressBar: true})
  }

  deleteNew(new3: New): void{
    this.newService.deleteNew(new3).subscribe((dado: New) =>{
      this.news = this.news.filter(  (n) => n.id !== new3.id )
      this.searchNews = this.news
    } )
    this.toastr.success("Noticia deletada com Sucesso", "Deletada", {timeOut: 3000, progressBar: true})
  }

  
}
