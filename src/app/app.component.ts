import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quete12Angular';
  imgOfTheDay : any | undefined;
  constructor(nasa : NasaService){
nasa.getImageOfTheDay().subscribe({
  next : (donne) => {this.imgOfTheDay = donne; console.log(this.imgOfTheDay)},
  error : () => { console.log('erreur dans la requete')},
  complete : () => {console.log('requête terminée')}
})
  }
}
