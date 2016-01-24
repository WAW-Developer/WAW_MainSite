
/// <reference path="../../lib/waw_Util.d.ts" />

/// <reference path="../../lib/x3d_Tools/x3d_Tools.d.ts" />

import {NgIf, NgFor} from 'angular2/common';
import {Component, View, Directive} from 'angular2/core';
//import { RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';
import {RouterLink, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';


import {BlogTopic} from '../blog/blogs';

import {BackBoneService} from '../core/backBone.service'


@Component({
    selector: 'header_waw',
    host: {
//        'class': 'panel-group'
    }
})
@View({
directives: [NgFor, RouterLink, ROUTER_DIRECTIVES ],
templateUrl: "res/templates/header/header_component.html"

})
export class Header_Component implements OnInit {
    
    
    
    protected mainTopics: BlogTopic[];
    protected selectedTopic: any;

    constructor(private _BackBoneService: BackBoneService, private _router: Router) {
        //..get the data
        
        // Subscribe to _emitterTopicSelected
        _BackBoneService._emitterTopicSelected.subscribe((data) => {
          this.selectedTopic = data;
          console.log("Header_Component{_emitterTopicSelected}", data);
//            this.load_mainTopics();
        });
        
        
        
    }
    
    
    protected load_mainTopics() {
//        console.log("Header_Component.load_mainTopics");    // TODO REMOVE DEBUG LOG
//        this.mainTopics = [];

        this._BackBoneService.getConfig().then(config => {
        this.mainTopics = config.subtopics;
            });

    }
    
    ngOnInit() {

        this.load_mainTopics();
//        this._BackBoneService.getConfig().then(config => this.mainTopics = config.subtopics);


        //      console.log(config);    // TODO REMOVE DEBUG LOG
        console.log(this.mainTopics);    // TODO REMOVE DEBUG LOG
    }
    
    
    protected activateTopic(topicName: string) {
        console.log("activateTopic");    // TODO REMOVE DEBUG LOG

        this._BackBoneService.selectTopic(topicName);
    }


}

