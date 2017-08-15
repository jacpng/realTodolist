import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
itemDetail={}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.itemDetail=navParams.get('item');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

}
