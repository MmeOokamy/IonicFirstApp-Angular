import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private tts: TextToSpeech) {}

  txt = {parole: ''};

  speak(){
    this.tts.speak({
      text: this.txt.parole,
      locale: 'fr-FR',
      rate: 1
    })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }


}
