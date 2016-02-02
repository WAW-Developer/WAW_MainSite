/**
 * Provides Tabs facility for angular
 */

import {Component,View, Input, QueryList} from 'angular2/core';

import { NgTab_Component } from './ngTab.component';


/**
 *
 * NgTabs_Component
 * @see http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html 
 * @see http://juristr.com/blog/2015/08/link-angular2-di/
 * @see http://www.syntaxsuccess.com/angular-2-samples/#/demo/spreadsheet
 * @see http://blog.thoughtram.io/angular/2015/08/20/host-and-visibility-in-angular-2-dependency-injection.html
 * http://stackoverflow.com/questions/33909741/angular-2-how-to-access-directives-from-component
 */
@Component({

    selector: 'ngtabs',
//    directives: [ConsoleTab_Component],
    host: {
        //        'class': 'panel-group'
    }
})
@View({
        
//    templateUrl: "res/templates/console/consoleTab_component.html"
    template: ' <ng-content></ng-content> '

//    directives: [NgTab_Component]

})
export class NgTabs_Component {
    
//    protected tabs: QueryList<ConsoleTab>;
    
    public tabs: NgTab_Component[];
    public tab_Activated = {
        ID: "",
        tab: ConsoleTab = null
        
        };
    
    
    constructor() {

        this.tabs = [];
    }
    

    public activateTab(tabName) {
        
//        console.log("NgTabs_Component.activateTab");     // TODO REMOVE DEBUG LOG
//        console.log(this.tabs);     // TODO REMOVE DEBUG LOG
        
        for (var _i = 0; _i < this.tabs.length; _i++) {

            if (this.tabs[_i].ID == tabName) {
                
                this.selectTab(this.tabs[_i]);
                break;
            }

        }

    };


    public selectTab(tab: NgTab_Component) {

        _deactivateAllTabs(this.tabs);
        tab.isActive = true;

        function _deactivateAllTabs(tabs: NgTab_Component[]) {
            tabs.forEach((tab) => tab.isActive = false);
        }

    }
    // _deactivateAllTabs(){
    //   this.tabs.forEach((tab)=>tab.active = false);
    // }

    public addTab(tab: NgTab_Component) {
        if (this.tabs.length === 0) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    }
    
    

}
