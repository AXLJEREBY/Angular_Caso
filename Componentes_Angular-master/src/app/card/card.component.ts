import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image!: string;
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354'
    console.log('Llamando componente');
  }

}
