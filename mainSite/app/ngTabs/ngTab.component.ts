/**
 * Provides Tabs facility for angular
 */

import {Component,View, Input, QueryList} from 'angular2/core';

import { NgTabs_Component } from './ngTabs.component';


/**
 * NgTab
 */
export interface NgTab {
    ID: string;
    isActive: boolean;

}

/**
 * NgTab_Base
 */
export class NgTab_Base implements NgTab {

    public ID: string = "";
    public isActive: boolean = false;


    constructor() {
        //..get the data
        
        
    }
}


/**
 * NgTab_Component
 */
@Component({

    selector: 'ngtab',
    inputs: [
        'ID:tabName'
//        'isActive: isActive'
    ],
    templateUrl: "res/templates/ngTabs/ngTab_component.html",
    host: {
        //        'class': 'panel-group'
    }
})
export class NgTab_Component {
//    @Input() ID:tabName;
    @Input() tabName:string; // stored value
//    @Input() isActive;
   
    ID: string;
//    isActive: boolean = false;
    isActive = this.isActive || false;
    
    
    constructor(tabs: NgTabs_Component){
    
        tabs.addTab(this);

    }

}



