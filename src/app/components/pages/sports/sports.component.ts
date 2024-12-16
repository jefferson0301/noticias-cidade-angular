import { Component, OnInit } from '@angular/core';
import { NewService } from '../../../services/new.service';
import { New } from '../../../New';
import { NewEmphasisComponent } from '../../new-emphasis/new-emphasis.component';
import { CommonModule } from '@angular/common';
//import { NewComponent } from '../../new/new.component';
import { NewEmphasisCategoryComponent } from '../../new-emphasis-category/new-emphasis-category.component';
import { NewDirectColumnComponent } from '../../new-direct-column/new-direct-column.component';
import { CardFourNewsComponent } from '../../card-four-news/card-four-news.component';

//import { NewDirectColumnsShortComponent } from '../../new-direct-columns-short/new-direct-columns-short.component';

@Component({
  selector: 'app-sports',
  imports: [ CommonModule, NewEmphasisCategoryComponent, NewDirectColumnComponent, CardFourNewsComponent],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent implements OnInit{

  titleBrasileirao: string = "Brasileirão"
  titleInternacional: string = "Internacional"
  titleLibertadores: string = "Libertadores"

  news: New[] = []
  treeMoreViews: New[] = []
  brasileiraoFoursLastNews: New[] = []
  libertadoresFoursLastNews: New[] = []
  internacionalFoursLastNews: New[] = []
  newEmpassis !:  New
  newEmpassis2 !:  New

  constructor(private newService: NewService){}

  ngOnInit(): void {
    this.newService.getNews().subscribe( (dado) => {
       this.news = dado
       let aux = this.news.filter( dado => dado.category === "Esporte")
       this.news = aux
       console.log(this.news)
      this.newEmpassis = this.news[this.news.length-1]
      this.newEmpassis2 = this.news[this.news.length-2]
      this.treeMoreViews.push(this.news[this.news.length-3])
      this.treeMoreViews.push(this.news[this.news.length-4])
      this.treeMoreViews.push(this.news[this.news.length-5])
      let brasileirao = this.news.filter( dado => dado.subCategory === "Brasileirão")
      this.brasileiraoFoursLastNews.push(brasileirao[brasileirao.length-4])
      this.brasileiraoFoursLastNews.push(brasileirao[brasileirao.length-3])
      this.brasileiraoFoursLastNews.push(brasileirao[brasileirao.length-2])
      this.brasileiraoFoursLastNews.push(brasileirao[brasileirao.length-1])
      let libertadores = this.news.filter( dado => dado.subCategory === "Libertadores")
      this.libertadoresFoursLastNews.push(libertadores[libertadores.length-4])
      this.libertadoresFoursLastNews.push(libertadores[libertadores.length-3])
      this.libertadoresFoursLastNews.push(libertadores[libertadores.length-2])
      this.libertadoresFoursLastNews.push(libertadores[libertadores.length-1])
      let intenacional = this.news.filter( dado => dado.subCategory === "Internacional")
      this.internacionalFoursLastNews.push(intenacional[intenacional.length-4])
      this.internacionalFoursLastNews.push(intenacional[intenacional.length-3])
      this.internacionalFoursLastNews.push(intenacional[intenacional.length-2])
      this.internacionalFoursLastNews.push(intenacional[intenacional.length-1])
    } )

    
    //this.newEmpassis2 = this.news[this.news.length-2]
  }

}
