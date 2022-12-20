

import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InjectDecorator } from '@angular/core';
import { Injectable } from '@angular/core';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
// import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { HttpClient } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
const { Share } = Plugins;
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';








@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private googlePlus: GooglePlus,private socialsharing: SocialSharing,private vibration: Vibration,private router :Router, public http:HttpClientModule,private https:HttpClient) {}

//     onClick()
//     {
//       this.router.navigate(['/hello']);
//     }

//     onClickLogin(){
//       this.router.navigate(['login']);
//     }

//     haptic(){

//       this.vibration.vibrate(600);

//     }

//     haptic1(){
//       this.vibration.vibrate([600,50,600]);
//           }

// //     setRingtone() {
// //       // Preload the audio track
// // //       this.nativeAudio.preloadSimple('click', 'src/assets/audio/bell.mp3');
// //     }

// //     play(){
// // //     this.setRingtone();
// // //      this.nativeAudio.play('click');
// //     }

//     socialShare(){
//       let ids = ['rohitkundnani6@gmail.com','abc@gmail.com']
//       let text="hello"
//       // this.socialsharing.shareViaEmail('Hii Rohit , blahh....', 'Social Sharing', ids).then(() => {
//       //   // Success!
//       // }).catch(() => {
//       //   // Error!
//       // });
//       debugger
//       this.socialsharing.share("","","","").then((res) => {
//         debugger
//         alert("res")
//       }).catch((e) => {
//         console.log(e + "error")
//       });
//     }

//     async basicShare(){
//       await Share.share({
//         title: "hello",
//         text : "text",
//         url : "https://kotakcherry.com/"
//       });
//     }

//     navigate(){
//       console.log("hii")
//       this.router.navigate(['/share']);
//     }

login(){
  this.googlePlus.login({})
  .then(res => console.log(res))
  .catch(err => console.error(err));
}




}
