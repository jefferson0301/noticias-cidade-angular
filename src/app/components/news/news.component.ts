import { Component, OnInit, Output } from '@angular/core';
import { New } from '../../New';
import { NewService } from '../../services/new.service';
import { NewComponent } from '../new/new.component';
import { LastNewComponent } from '../last-new/last-new.component';
import { EventEmitter } from 'node:stream';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewEmphasisComponent } from '../new-emphasis/new-emphasis.component';

@Component({
  selector: 'app-news',
  imports: [NewComponent, LastNewComponent, CommonModule, FormsModule, NewEmphasisComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  newsEmphasis !: New 
  news: New[] = []
  newsStatic: New[] = [] // esse array de noticias é usado para quando filtrar ser usado como array base
  // para não perder o array após ser filtrado
  lastNews: New[] = [] //esse array terá as ultimas 3 noticias
  sportNews: New[] = [] //esse array terá as 3 ultimas noticias de esportes
  policyNews: New[] = []//esse array terá as 3 ultimas noticias de política
  internacionalNews: New[] = [] //esse array terá as 3 ultimas noticias internacionais

  filtro: string = ""
  showFilter: boolean = false
  bodyFilter: string = "lupa-rigth.png"
  search = ""

  // @Output () changeFilterByPolicy = new EventEmitter <any> ()
  // @Output () changeFilterSport = new EventEmitter <any> ()
  // @Output () changeFilterByInternacional = new EventEmitter <any> ()
   

  swapShowFilter(){
    this.showFilter = !this.showFilter
    if(this.showFilter === true) this.bodyFilter = "lupa.png"

    else this.bodyFilter = "lupa-rigth.png"
  }

  searchByTitle(){
    this.news = this.newsStatic.filter( numero =>  numero.title.includes(this.search) )
  }

  setPolicy(){
    //this.news = this.newsStatic.filter( numero =>  numero.category === "Política" )
    let aux = this.newsStatic.filter( numero =>  numero.category === "Política" )
    this.policyNews.push(aux[aux.length-1])
    this.policyNews.push(aux[aux.length-2])
    this.policyNews.push(aux[aux.length-3])
  }

  setSport(){
    //this.news = this.newsStatic.filter( numero =>  numero.category === "Esporte" )
    let aux = this.newsStatic.filter( numero =>  numero.category === "Esporte" )
    this.sportNews.push(aux[aux.length-1])
    this.sportNews.push(aux[aux.length-2])
    this.sportNews.push(aux[aux.length-3])
  }

  setInternational(){
    //this.news = this.newsStatic.filter( numero =>  numero.category === "Internacional" )
    let aux = this.newsStatic.filter( numero =>  numero.category === "Internacional" )
    this.internacionalNews.push(aux[aux.length-1])
    this.internacionalNews.push(aux[aux.length-2])
    this.internacionalNews.push(aux[aux.length-3])
  }

  constructor(private newService: NewService){}

  addLastNews(news: New[]){
    this.lastNews.push(news[news.length-1])
    this.lastNews.push(news[news.length-2])
    this.lastNews.push(news[news.length-3])
  }

  addNewsMoreViews(){
    
  }

  getNewEmphasy(){
    this.newsEmphasis = this.news[this.news.length-1]
  }

  //quando iniciar a página ele vai listar todas as notícias similar ao useEffect((), []) do react
  //para fazer isso tem que importar o OnInit  e dar um implements no componente que terá essa ação
  ngOnInit() : void{
    this.newService.getNews().subscribe((dado) => {
      this.news = dado
      this.newsStatic = dado
      console.log(this.news)
      this.addLastNews(this.news)
      console.log(this.lastNews)
      this.getNewEmphasy()
      this.setSport()
      this.setInternational()
      this.setPolicy()
    })
    
  }
}
