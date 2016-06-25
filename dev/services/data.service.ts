/**
 * Created by Iulian on 25/06/16.
 */
import {Injectable} from 'angular2/core';

@Injectable()

export class DataService{
  private _data = ['Summer', 'Winter', 'Warm', 'Cold'];

  getRandomString(){
    let randomNumber = Math.floor(Math.random() * this._data.length);
    return this._data[randomNumber];
  }

  insert(value:string){
    this._data.push(value);
  }
}
