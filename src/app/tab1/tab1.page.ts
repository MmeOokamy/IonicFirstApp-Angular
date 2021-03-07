import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  area = {notes:''};

  async ionViewWillEnter(){
      // ce component sert a afficher une alerte au lancement de la vue
      // affiche les coordonnée dans la console du navigateur
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current', coordinates);

  }


  // Methode declanché au click sur le btn de la tab1.page.html
 async myAlert(){
    // recupére les coordonnée et les affiche quand on click sur le btn
    const coordinates = await Geolocation.getCurrentPosition();
    alert('Latitude : '+coordinates.coords.latitude + ', Longitude : ' + coordinates.coords.longitude);
}

myTxt(){
  alert(this.area.notes);
}




}
