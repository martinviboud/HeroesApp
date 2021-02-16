import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute ) { }
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
     this.termino = params.termino;
     this.heroes = this.heroesService.buscarHeroes( params.termino );
     console.log(this.heroes);
  });
}}
