import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FolderPage } from './folder/folder.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private modalCtrl: ModalController
  ) {}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: FolderPage
    });

    modal.present();
  }
}
