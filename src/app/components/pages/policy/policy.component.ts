import { Component, OnInit } from '@angular/core';
import { NewService } from '../../../services/new.service';
import { New } from '../../../New';
import { NewEmphasisComponent } from '../../new-emphasis/new-emphasis.component';
import { CommonModule } from '@angular/common';
import { NewEmphasisCategoryComponent } from '../../new-emphasis-category/new-emphasis-category.component';
import { NewDirectColumnComponent } from '../../new-direct-column/new-direct-column.component';
import { CardFourNewsComponent } from '../../card-four-news/card-four-news.component';

@Component({
  selector: 'app-policy',
  imports: [CommonModule, NewEmphasisCategoryComponent, NewDirectColumnComponent, CardFourNewsComponent],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent implements OnInit{

  titleNacional: string = "Nacional"
  titleEstadual: string = "Estadual"
  titleMunicipal: string = "Municipal"

  news: New[] = []
  treeMoreViews: New[] = []
  nacionalFoursLastNews: New[] = []
  estadualFoursLastNews: New[] = []
  municipalFoursLastNews: New[] = []
  newEmpassis !:  New
  newEmpassis2 !:  New

  constructor(private newService: NewService){}

  ngOnInit(): void {
    this.newService.getNews().subscribe( (dado) => {
       this.news = dado
       let aux = this.news.filter( dado => dado.category === "Política")
       this.news = aux
       console.log(this.news)
      this.newEmpassis = this.news[this.news.length-1]
      this.newEmpassis2 = this.news[this.news.length-2]
      this.treeMoreViews.push(this.news[this.news.length-3])
      this.treeMoreViews.push(this.news[this.news.length-4])
      this.treeMoreViews.push(this.news[this.news.length-5])
      let nacional = this.news.filter( dado => dado.subCategory === "Nacional")
      this.nacionalFoursLastNews.push(nacional[nacional.length-4])
      this.nacionalFoursLastNews.push(nacional[nacional.length-3])
      this.nacionalFoursLastNews.push(nacional[nacional.length-2])
      this.nacionalFoursLastNews.push(nacional[nacional.length-1])
      let estadual = this.news.filter( dado => dado.subCategory === "Estadual")
      this.estadualFoursLastNews.push(estadual[estadual.length-4])
      this.estadualFoursLastNews.push(estadual[estadual.length-3])
      this.estadualFoursLastNews.push(estadual[estadual.length-2])
      this.estadualFoursLastNews.push(estadual[estadual.length-1])
      let municipal = this.news.filter( dado => dado.subCategory === "Municipal")
      this.municipalFoursLastNews.push(municipal[municipal.length-4])
      this.municipalFoursLastNews.push(municipal[municipal.length-3])
      this.municipalFoursLastNews.push(municipal[municipal.length-2])
      this.municipalFoursLastNews.push(municipal[municipal.length-1])
      
    } )

    
    //this.newEmpassis2 = this.news[this.news.length-2]
  }

}
