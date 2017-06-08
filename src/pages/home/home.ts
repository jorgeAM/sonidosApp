import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//imṕortamos data de animales
import { ANIMALES } from '../../data/data.animales';
//exportamos interface
import { Animal } from '../../interfaces/animal.interface';
//api de itemReorder
import { Refresher, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	animales:Animal[] = [];
  //propia de html5
  audio = new Audio();
  audioTiempo:any;
  ordenando:boolean = false;

  constructor(public navCtrl: NavController) {
  	//crea clon de ANIMALEs
  	this.animales = ANIMALES.slice(0);
  }

  reproducir(animal:Animal){
    this.pausar_audio(animal);
    if(animal.reproduciendo){
      animal.reproduciendo = false;
      //salir de la funcion reproducir
      return;
    }
    //url
    this.audio.src = animal.audio;
    //cargar
    this.audio.load();
    //iniciar sonido
    this.audio.play();
    //reproduciendo
    animal.reproduciendo = true;
    //funcion propia de javascript
    this.audioTiempo = setTimeout(()=>animal.reproduciendo=false, animal.duracion*1000);
  }

  private pausar_audio(aninalSel:Animal){
    clearTimeout(this.audioTiempo);
    //pausar cancion
    this.audio.pause();
    //para que se ponga al inicio de la cancion
    this.audio.currentTime = 0;
    for(let animal of this.animales){
      if(animal.nombre != aninalSel.nombre)
        animal.reproduciendo = false;
    }
  }

  borrar_animal(i:number){
    this.animales.splice(i,1);
  }

  doRefresh(refresher:Refresher) {
    setTimeout(() => {
      this.animales = ANIMALES.slice(0);
      refresher.complete();
    }, 2000);
  }

  reorderItems(indexes){
    this.animales = reorderArray(this.animales, indexes);
  }

  ordenar(){
    if (this.ordenando){
      this.ordenando = false;
    }
    else{
      this.ordenando = true;
    }
  }

}
