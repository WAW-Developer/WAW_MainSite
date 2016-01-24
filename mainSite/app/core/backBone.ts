import {Injectable, EventEmitter} from 'angular2/core';



@Injectable()
export class WAWService {
        
    _emitter: EventEmitter = new EventEmitter();
    rxEmitter: any;
    
    constructor() {
        this.rxEmitter = this._emitter.toRx();
    }
    
    
    doSomething(data) {
        this.rxEmitter.next(data);
    }
}