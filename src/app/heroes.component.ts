import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']	
})

export class HeroesComponent implements OnInit	{
  title = 'Make My Trip';
  selectedHero: Hero;
  heroes : Hero[];
  
  onSelect(hero: Hero): void {
 	 this.selectedHero = hero;
}	
 
  constructor(private heroService: HeroService,
  						private router:Router){}
	
	getHeroes(): void{
		//this.heroes = this.HeroService.getHeroes();
		this.heroService.getHeroes().then(heroes=>this.heroes = heroes); 
	}
	ngOnInit(): void {
	this.getHeroes();
}
gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}

