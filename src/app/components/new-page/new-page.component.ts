import { Component, Input, input } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { NewService } from '../../services/new.service';
import { New } from '../../New';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-page',
  imports: [CommonModule],
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
  result !: New[]
  newValid: boolean = true

  constructor(private route: ActivatedRoute, private router: Router , private newService: NewService ) {}

  ngOnInit(){
    // this.newService.getNews().subscribe( (dado) => {
    //   this.news = dado
    // } )
    //ver linhas 39 a 46 corrigir erro
    //pegando a url do navegador
    this.selectId = this.route.snapshot.paramMap.get('id');
    // console.log(this.selectId)
    // this.result =  this.news.filter((dado) => dado.id === this.selectId )
    // console.log(this.result)
    // if(this.result.length === 0 ){
    //   this.new = this.newNull
    //   this.newValid = false 
    // } 
    //else{
      this.newService.getNew(this.selectId).subscribe( (dado2) => {
        this.new = dado2
      } )
      console.log(this.new)
    //}
  }

}
