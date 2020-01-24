import { Component, OnInit, OnDestroy } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
declare var YMK: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  selected = 'LipColor';
  constructor() {

  }

  ionViewWillEnter() {
    const windows: any = window;
    windows['ymkAsyncInit'] = (() => {
      YMK.open();
    });
    if (YMK.isLoaded) {
     // alert('loaded');
      YMK.open();
    }
  }

  ngOnInit() {
    /* const windows: any = window;
    windows['ymkAsyncInit'] = (() => {
      YMK.open();
    });
    if (YMK.isLoaded) {
     // alert('loaded');
      YMK.open();
    } */
  }

  ngOnDestroy() {
     YMK.close();
  }

  ionViewWillLeave() {
    YMK.close();
  }

  ionViewDidLeave() {
    YMK.close();
  }

  segmentChanged(event) {
    console.log('event', event.target.value);
    this.selected = event.target.value;
  }

}
