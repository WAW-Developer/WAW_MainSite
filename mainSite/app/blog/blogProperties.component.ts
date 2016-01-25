
import {NgIf, NgFor} from 'angular2/common';
import {Component,View, Directive, ViewChild, ViewChildren} from 'angular2/core';
import {
//  OnChanges, SimpleChange,
  OnInit,
  // DoCheck,  // not demonstrated
//  AfterContentInit,
//  AfterContentChecked,
  AfterViewInit
//  AfterViewChecked,
//  OnDestroy
} from 'angular2/core';


import { Router} from 'angular2/router';

import {NgTab, NgTab_Component} from '../ngTabs/ngTab.component';
import {NgTabs_Component} from '../ngTabs/ngTabs.component';

import {BlogTopic} from '../blog/blogs';

import {BackBoneService} from '../core/backBone.service'


@Component({
    selector: 'blogProperties_waw',
//    directives: [ROUTER_DIRECTIVES],
    host: {
//        'class': 'panel-group'
    }
})
@View({
    //    template: ` I see {{items.length}} items. `
    templateUrl: "res/templates/blog/blogProperties_component.html",
    directives: [NgIf, NgFor, NgTab_Component, NgTabs_Component]

})
export class BlogProperties_Component implements OnInit, AfterViewInit {
        
    @ViewChild(NgTabs_Component)
    tabsController: NgTabs_Component;
    

    
    constructor(private _router: Router,
        private _BackBoneService: BackBoneService) {
        //..get the data
    }
    
       
    protected activateTab(event, tabName) {

        console.log("activateTab");     // TODO REMOVE DEBUG LOG
    
        console.log(event);     // TODO REMOVE DEBUG LOG
        console.log(tabName);       // TODO REMOVE DEBUG LOG
    
//        console.log(this.tabsController);       // TODO REMOVE DEBUG LOG
    
    
        this.tabsController.activateTab(tabName);

    }
    
    /**
     * ngOnInit
     */
    ngOnInit() {

//        this._BackBoneService.getConfig().then(config => this.mainTopics = config.subtopics);

//        this.tabs = this.tabsController.tabs;

//        console.log("BlogProperties_Component.ngOnInit");    // TODO REMOVE DEBUG LOG
//        console.log(this.tabsController);    // TODO REMOVE DEBUG LOG

//        console.log(this.tabs);    // TODO REMOVE DEBUG LOG
    }
    
    
    /**
     * ngAfterViewInit
     */
    ngAfterViewInit() {
        
//        this.tabs = this.tabsController.tabs;

//        console.log("BlogProperties_Component.ngAfterViewInit");    // TODO REMOVE DEBUG LOG
//        console.log(this.tabs);    // TODO REMOVE DEBUG LOG
        
        }
}



