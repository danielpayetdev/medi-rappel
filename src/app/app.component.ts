import { Component } from '@angular/core';
import { IonApp, IonItem, IonList, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonList, IonItem, IonToggle],
})
export class AppComponent {
  currentDose = 1;

  onDosePrise() {
    this.currentDose += 1;
  }
}
