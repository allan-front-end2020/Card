import { Component,  Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor(
    private snackBar: MatSnackBar
  ){}
  
  openSnackBar(message: string){
    this.snackBar.open(message)
  }
}




 




