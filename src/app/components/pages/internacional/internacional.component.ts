import { Component, OnInit } from '@angular/core';
import { NewService } from '../../../services/new.service';
import { New } from '../../../New';
import { NewEmphasisComponent } from '../../new-emphasis/new-emphasis.component';
import { CommonModule } from '@angular/common';
import { NewEmphasisCategoryComponent } from '../../new-emphasis-category/new-emphasis-category.component';
import { NewDirectColumnComponent } from '../../new-direct-column/new-direct-column.component';
import { CardFourNewsComponent } from '../../card-four-news/card-four-news.component';

@Component({
  selector: 'app-internacional',
  imports: [CommonModule, NewEmphasisCategoryComponent, NewDirectColumnComponent, CardFourNewsComponent],
  templateUrl: './internacional.component.html',
  styleUrl: './internacional.component.css'
})
export class InternacionalComponent implements OnInit{

  titleAmerica: string = "America"
  titleEuropa: string = "Europa"
  titleOcidente: string = "Ocidente"

  news: New[] = []
  treeMoreViews: New[] = []
  americaFoursLastNews: New[] = []
  europaFoursLastNews: New[] = []
  ocidenteFoursLastNews: New[] = []
  newEmpassis !:  New
  newEmpassis2 !:  New

  constructor(private newService: NewService){}

  ngOnInit(): void {
    this.newService.getNews().subscribe( (dado) => {
      this.news = dado
      let aux = this.news.filter( dado => dado.category === "Internacional")
      this.news = aux
      this.newEmpassis = this.news[this.news.length-1]
      this.newEmpassis2 = this.news[this.news.length-2]
      this.treeMoreViews.push(this.news[this.news.length-3])
      this.treeMoreViews.push(this.news[this.news.length-4])
      this.treeMoreViews.push(this.news[this.news.length-5])
      let america = this.news.filter( dado => dado.subCategory === "America")
      this.americaFoursLastNews.push(america[america.length-4])
      this.americaFoursLastNews.push(america[america.length-3])
      this.americaFoursLastNews.push(america[america.length-2])
      this.americaFoursLastNews.push(america[america.length-1])
      let europa = this.news.filter( dado => dado.subCategory === "Europa")
      this.europaFoursLastNews.push(europa[europa.length-4])
      this.europaFoursLastNews.push(europa[europa.length-3])
      this.europaFoursLastNews.push(europa[europa.length-2])
      this.europaFoursLastNews.push(europa[europa.length-1])
      let ocidente = this.news.filter( dado => dado.subCategory === "Ocidente")
      this.ocidenteFoursLastNews.push(ocidente[ocidente.length-4])
      this.ocidenteFoursLastNews.push(ocidente[ocidente.length-3])
      this.ocidenteFoursLastNews.push(ocidente[ocidente.length-2])
      this.ocidenteFoursLastNews.push(ocidente[ocidente.length-1])
      
    } )

  }

}

