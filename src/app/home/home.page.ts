import { Component, OnInit } from '@angular/core';
import 'test-capacitor';
import { Plugins } from '@capacitor/core';
import DeviceInfo from '../interface/Battery';



const { testCapacitor } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
deviceInfo: DeviceInfo;

  constructor() {

  }

  ngOnInit(){
    this.getInfo();
    setInterval(()=>{
      this.getInfo();
    }, 60000)
  }

  async getInfo(){
    this.deviceInfo = await testCapacitor.getInfo();
    console.log(Date.toString(), this.deviceInfo)
  }

  ceil(x){
    return Math.ceil(x)
  }
}
