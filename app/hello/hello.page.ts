
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
// import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async } from 'rxjs';

import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {
  data;
  handlerMessage = '';
    roleMessage = '';
    presentingElement = undefined;
    private myToast:any;
  constructor(private vibration: Vibration , public toast: ToastController, private actionSheetCtrl: ActionSheetController , private userservice : UserService , private router:Router , private alertController: AlertController) { }

  ngOnInit() {
    // fetch('./assets/input/input.json').then(res => res.json())
    //   .then(json => {
    //     this.data = json;
    //   })

    this.userservice.getUser().subscribe(data=>{
      this.data=data
    }),

    this.presentingElement = document.querySelector('.ion-page');


      }

      haptic(){
        this.vibration.vibrate(100);

      }



  onClick(id){
    this.router.navigate(['/hello',id]);

  }

  async presentToast() {

    this.myToast = this.toast.create({
      message: 'Ionic Auto Hide Toast on Bottom',
      duration: 4000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.myToast = this.toast.dismiss();
  }

  deleteUser(id){

    this.userservice.deleteUser(id).subscribe(data => {
                  this.data.splice(id-1,1)
                });
    this.router.navigate(['/hello'])
    this.myToast = this.toast.create({
      message: 'Employee '+ id + ' deleted',
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
                });





              }




  async presentAlert(id) {
    const alert = await this.alertController.create({
      header: 'Are You Sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: () => {
            console.log(id)
            this.userservice.deleteUser(id).subscribe(data => {
              this.data.splice(id-1,1),
              this.router.navigate(['/hello'])
            });




          },
        },
        {
          text: 'No',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;

    this.myToast = this.toast.create({
      message: 'Employee '+ id + ' deleted',
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });

  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  }



}








