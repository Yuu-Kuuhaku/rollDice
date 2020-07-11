import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface Tile {
  pipe: string;
  display: string;
  cols: number;
  rows: number;
  text: string;
  text2: string;
}

@Component({
  selector: 'app-criar-entrar-sala',
  templateUrl: './criar-entrar-sala.component.html',
  styleUrls: ['./criar-entrar-sala.component.css']
})
export class CriarEntrarSalaComponent implements OnInit {

  collection;
  formFiltrar = this.fb.group({
    name: [''],
    isPassword: [false],
    senha: [''],
  });


  constructor( private fb: FormBuilder) { }

  tiles: Tile[] = [
    {text: 'name', text2: '', display: '' , cols: 3, rows: 1,  pipe: 'uppercase'},
    {text: 'icon', text2: '', display: '' , cols: 1, rows: 2, pipe: 'uppercase'},
    {text: 'icon', text2: '', display: '' , cols: 1, rows: 2, pipe: 'uppercase'},
    {text: 'adm', text2: 'name', display: '' , cols: 3, rows: 1,  pipe: 'fullDateTime'},

  ];


  ngOnInit() {
    this.collection = [
      { name: 'teste', isPassword: true, adm: { name: 'well'}},
      { name: 'teste', isPassword: true, adm: { name: 'well'}},
      { name: 'teste', isPassword: true, adm: { name: 'well'}}
    ];
  }

  onFilter(){
    console.log(this.formFiltrar);
  }

}
