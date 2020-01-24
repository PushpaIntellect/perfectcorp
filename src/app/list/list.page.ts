import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  selectedImage: any;
  selectedImage1: any;
  constructor( private toastController: ToastController) {

  }

  ngOnInit() {
  }

  selectItem (imageLink, type) {
    console.log('type', type);
   // document.getElementById("selectedImage").src = imageLink;
    if (type === 'top') {
    this.selectedImage = imageLink;
   } else {
    this.selectedImage1 = imageLink;
   }
    console.log('this.selectedImage', this.selectedImage);
    console.log('this.selectedImage1', this.selectedImage1);
  }
  onResizeStart(event) {
      console.log('onResizeStart', event);
  }
  onResizing(event) {
    console.log('onResizing', event);
  }
}
