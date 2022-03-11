import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{

  @Input()
  titulo: string ='titulo'

  @Input()
  subtitulo: string = 'subtitulo'

  @Input()
  conteudo1: string ='preco'

  @Input()
  conteudo2: string ='preco'

  @Input()
  conteudo3: string ='preco'

  @Input()
  bg:string =''



 





}
