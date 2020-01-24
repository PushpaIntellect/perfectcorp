import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    /* {
      title: 'List',
      url: '/list',
      icon: 'list'
    } */
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private camera: Camera,
    private androidPermissions: AndroidPermissions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#eee');
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then((result) => {
        console.log('Has permission?', result.hasPermission);
        if (result.hasPermission == false) {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
        }
      // tslint:disable-next-line:no-unused-expression
      }), ((err) => {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
      });

     /*  this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then((result:any) =>{
        console.log('request permission', result);
      }) */
      // tslint:disable-next-line:max-line-length
    });
  }

  openlink(link) {
      this.navCtrl.navigateRoot(link);
  }
}
