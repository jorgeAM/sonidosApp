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

  reproducir(animal:Animal){
    //propia de html5
    let audio = new Audio();
    //url
    audio.src = animal.audio;
    //cargar
    audio.load();
    //iniciar sonido
    audio.play();
    //reproduciendo
    animal.reproduciendo = true;
    //funcion propia de javascript
   setTimeout(()=>animal.reproduciendo=false, animal.duracion*1000);
  }
}
