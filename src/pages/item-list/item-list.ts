import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { AddnewListPage } from '../addnew-list/addnew-list';
import { ItemDetailPage } from '../item-detail/item-detail'
import { ModalController } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data'
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ItemListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

	itemList =[{"title":"Learn Ionic","description":"Learn Ionic slide 123 week 3", "completed":true},
	{"title":"Do freecodecamp","description":"do until frontend module", "completed":false},
	{"title":"Do WOD","description":"wod of the day to provide solution", "completed":true}]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
  	public dataService: DataProvider, public alertCtrl: AlertController) {
  	this.dataService.getData().then((todos)=>
  	{
  		if (todos){

  		this.itemList = JSON.parse(todos);

  		}
  	}
 )

  ionViewDidLoad() ;{
    console.log('ionViewDidLoad ItemListPage');
  }
  buttonTapped();{

    let modal = this.modalCtrl.create(AddnewListPage);
    modal.onDidDismiss(data =>{
      console.log(data);
      this.itemList.push(data)
      this.dataService.saveData(this.itemList)


    });
   modal.present();
  }
  detailTapped(item);{
    this.navCtrl.push(ItemDetailPage,{item:item});
  }
  done(item);{
    item.completed=true

  }

  delete(item);{
    let confirm = this.alertCtrl.create({
      title: 'Delete item?',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'nope',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'delete it',
          handler: () => {
            console.log('Agree clicked');
            
          }
        }
      ]
    });
    confirm.present();
  }
    // var index = this.itemList.indexOf(item);
    // this.itemList.splice(index,1)

  }

}
