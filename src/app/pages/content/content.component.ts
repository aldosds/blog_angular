import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://cinepop.com.br/wp-content/uploads/2019/11/tony-stark.jpg"
  contentTitle:string = "MINHA NOTICIA"
  contentDescription: string = "Olá mundo!"

  constructor() { }

  ngOnInit(): void {
  }

}
