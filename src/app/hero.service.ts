import { Injectable } from '@angular/core';		// import injectable
import { Hero } from './hero';
import { Headers, Http } from '@angular/http';	
import 'rxjs/add/operator/toPromise';
//import { HEROES } from './mock-heroes';





@Injectable()				// apply injectable, tell angular metadata to inject dependencies in this service
export class HeroService{
	private heroesUrl = 'api/heroes';  // URL to web api

	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]>{		// stub
		//return Promise.resolve(HEROES);		when data was fetched from mock-heroes
		  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
	}		
	private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
}