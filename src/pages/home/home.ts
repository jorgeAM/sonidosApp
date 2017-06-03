import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//imṕortamos data de animales
import { ANIMALES } from '../../data/data.animales';
//exportamos interface
import { Animal } from '../../interfaces/animal.interface';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	animales:Animal[] = [];

  constructor(public navCtrl: NavController) {
  	//crea clon de ANIMALEs
  	this.animales = ANIMALES.slice(0);
  }

}
