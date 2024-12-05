import { Component, OnInit } from '@angular/core';
import { New } from '../../New';
import { NewService } from '../../services/new.service';
import { NewComponent } from '../new/new.component';
import { LastNewComponent } from '../last-new/last-new.component';

@Component({
  selector: 'app-news',
  imports: [NewComponent, LastNewComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  news: New[] = []
  newsStatic: New[] = [] // esse array de noticias é usado para quando filtrar ser usado como array base
  // para não perder o array após ser filtrado
  lastNews: New[] = [] //esse array terá as ultimas 3 noticias

  filtro: string = ""
  showFilter: boolean = false
  bodyFilter: string = "Mostrar"

  swapShowFilter(){
    this.showFilter = !this.showFilter
    if(this.showFilter === true) this.bodyFilter = "Ocultar"

    else this.bodyFilter = "Mostrar"
  }

  setPolicy(){
    this.news = this.newsStatic.filter( numero =>  numero.category === "Política" )
  }

  setSport(){
    this.news = this.newsStatic.filter( numero =>  numero.category === "Esporte" )
  }

  setInternational(){
    this.news = this.newsStatic.filter( numero =>  numero.category === "Internacional" )
  }

  constructor(private newService: NewService){}

  addLastNews(news: New[]){
    this.lastNews.push(news[news.length-1])
    this.lastNews.push(news[news.length-2])
    this.lastNews.push(news[news.length-3])
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
    })
  }
}
