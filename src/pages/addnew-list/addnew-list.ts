import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the AddnewListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnew-list',
  templateUrl: 'addnew-list.html',
})
export class AddnewListPage {
	title;
	description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ViewCtrl:ViewController) {
  }
buttonTapped(){
	this.ViewCtrl.dismiss()
}

saveItem(){
let newItem = {"title":this.title, "description":this.description,completed:false}
	this.ViewCtrl.dismiss(newItem)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewListPage');
  }

}
