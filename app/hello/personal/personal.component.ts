import { ActionSheetController, AlertController } from '@ionic/angular';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
 
  id: string;
  data;
  presentingElement: undefined;
  handlerMessage = '';
    roleMessage = '';
  display;

  constructor(private alertController : AlertController, private router : ActivatedRoute , private router1:Router,private userservice : UserService , private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
    this.userservice.getUser().subscribe(data=>{
      this.data=data}),
    this.id=this.router.snapshot.paramMap.get('id');

    this.presentingElement = document.querySelector('.ion-page');
     
  }

  deleteUser(id){
    
    this.userservice.deleteUser(id).subscribe(data => {
                  this.data.splice(id-1,1)
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
              this.data.splice(id-1,1)
            });
            this.display="Employee " + id + " deleted "
          }

          
        },
        {
          text: 'No',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.display="Employee " + id + " not deleted "
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
    
            
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
