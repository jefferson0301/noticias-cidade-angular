import { Component, Input } from '@angular/core';
import { New } from '../../New';
import { NewDirectColumnsShortComponent } from '../new-direct-columns-short/new-direct-columns-short.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-four-news',
  imports: [NewDirectColumnsShortComponent, CommonModule],
  templateUrl: './card-four-news.component.html',
  styleUrl: './card-four-news.component.css'
})
export class CardFourNewsComponent {

  @Input () title: string = ""
  @Input () news : New[] = []

}
