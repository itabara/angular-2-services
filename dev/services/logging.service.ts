import {Injectable} from "angular2/core";

@Injectable()

export class LoggingService{
    private _lastMessage='';

  log(message:string){
    console.log('Current message: ' + message + ', Last Message: ' + this._lastMessage);
    this._lastMessage = message;
  }
}
