import { Component, Input, input } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { NewService } from '../../services/new.service';
import { New } from '../../New';
import { CommonModule } from '@angular/common';
//  import { NewComponent } from '../new/new.component';
import { CardNewsRocommendedComponent } from '../card-news-rocommended/card-news-rocommended.component';

@Component({
  selector: 'app-new-page',
  imports: [CommonModule, CardNewsRocommendedComponent],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent {

  
  newNull : New = {
    id: "",
    title: "",
    description: "",
    url: "",
    category: ""
  }
  selectId : any  
  new !: New
  news: New[] = []
  recommendedForYouNews: New[] = []
  showRecommendedForYouNews: boolean = false
  result !: New[]
  newValid: boolean = true

  constructor(private route: ActivatedRoute, private router: Router , private newService: NewService ) {}

  

  ngOnInit(){
    
    this.selectId = this.route.snapshot.paramMap.get('id');

    
      this.newService.getNew(this.selectId).subscribe( (data) => {
        this.new = data

        this.newService.getNews().subscribe((dado) => {
          this.news = dado
          let aux = this.news.filter((data) => data.subCategory === this.new.subCategory)
          this.news = aux
          console.log(this.news)
          let aux2 = this.news.filter((data) => data.id !== this.selectId)
          this.recommendedForYouNews = aux2
          console.log(this.recommendedForYouNews)
          if( 3 <= this.recommendedForYouNews.length){
             // add 3 noticias que serão exibidas como noticias recomendadas para você
            let aux3 = []
            aux3.push(this.recommendedForYouNews[this.recommendedForYouNews.length-1])
            aux3.push(this.recommendedForYouNews[this.recommendedForYouNews.length-2])
            //aux3.push(this.recommendedForYouNews[this.recommendedForYouNews.length-3])
            this.recommendedForYouNews = aux3
            this.showRecommendedForYouNews = true
          }
         
        })
      } )
      
      
      
  }

}
