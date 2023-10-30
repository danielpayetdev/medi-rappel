import { Component, inject } from '@angular/core';
import { IonApp, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonToggle } from '@ionic/angular/standalone';
import { RappelService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonContent, IonList, IonItem, IonToggle, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonListHeader, IonLabel],
})
export class AppComponent {
  rappelService = inject(RappelService);

  onDoseIzalgiPrise(dose: number, state: CustomEvent) {
    if (state.detail.checked) {
      this.rappelService.izalgiDose = dose;
    } else {
      this.rappelService.izalgiDose = dose - 1;
    }
    this.rappelService.save();
  }

  onDoseArixtraPrise(state: CustomEvent) {
    if (state.detail.checked) {
      this.rappelService.arixtraDose = 1;
    } else {
      this.rappelService.arixtraDose = 0;
    }
    this.rappelService.save();
  }
}
