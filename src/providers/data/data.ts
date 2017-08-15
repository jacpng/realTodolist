import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor( public storage:Storage) {
    console.log('Hello DataProvider Provider');
  }
  getData() {
  	return this.storage.get('todos')
  }

  saveData(data) {
  	let newData = JSON.stringify(data)
  	this.storage.set('todos',newData)

  }

  deleteData(data,resolve){

  	this.storage.get('todos').then((todos)=>
  	{
  		if (todos){
  			var todoArray = JSON.parse(todos)
  			todoArray.splice(todoArray.indexOf(data),0)
  			var arrayData = JSON.stringify(todoArray)
  			this.storage.set('todos',arrayData)
  			resolve(arrayData)
  		
  		}
  	})
  	//this.itemList.splice(this.itemList.indexOf(item),1)
  	//this.storage.set('todos',newData)


  }
}
