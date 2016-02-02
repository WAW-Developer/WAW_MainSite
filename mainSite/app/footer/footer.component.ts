
/// <reference path="../../lib/waw_Util.d.ts" />

/// <reference path="../../lib/x3d_Tools/x3d_Tools.d.ts" />

import {NgIf, NgFor} from 'angular2/common';
import {Component, View, Directive, EventEmitter, ElementRef} from 'angular2/core';

//import { RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';
import {RouterLink, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';


import {BackBoneService} from '../core/backBone.service'


@Component({
    selector: 'footer_waw',
//    providers: [BackBoneService],  // Delete this line
    host: {
//        'class': 'panel-group'
    }
})
@View({
directives: [NgFor, RouterLink, ROUTER_DIRECTIVES ],
templateUrl: "res/templates/footer/footer_component.html"

})
export class Footer_Component implements OnInit {
    

    constructor(
        private _BackBoneService: BackBoneService, 
        private _router: Router,
        private _ElementRef: ElementRef) {
        //..get the data
        
        
    }
    

    
    /**
     * ngOnInit
     */
    ngOnInit() {


        //      console.log(config);    // TODO REMOVE DEBUG LOG
//        console.log(this.mainTopics);    // TODO REMOVE DEBUG LOG
    }



}

