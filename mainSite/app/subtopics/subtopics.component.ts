
import {NgIf, NgFor} from 'angular2/common';
//import {Component, View, Directive} from 'angular2/core';

import {Component, View, bootstrap, NgFor, NgIf, Input, ElementRef, Renderer, EventEmitter} from 'angular2/core';


//import { Router} from 'angular2/router';
import {RouterLink, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';


import {BlogTopic} from '../blog/blogs';

import {BackBoneService} from '../core/backBone.service'


@Component({
    selector: 'subtopics_waw',
//    providers: [BackBoneService], 
    host: {
//        'class': 'panel-group'
    }
})
@View({
directives: [NgFor, RouterLink, ROUTER_DIRECTIVES ],
templateUrl: "res/templates/subtopics/subtopics_component.html",
styleUrls: ["res/templates/subtopics/subtopics_component.css"]

})
export class Subtopic_Component implements OnInit {
    
    public selectedMainTopic: BlogTopic;
    public selectedTopic: BlogTopic;
    public  subtopics: Object[] = [];

    
    public _emitterTopicSelected: EventEmitter = new EventEmitter();

    
    
    constructor(private _router: Router,
        private _BackBoneService: BackBoneService) {
        

        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterMainTopicSelected.subscribe((data) => {
            this.selectedMainTopic = data;
            this.selectedTopic = data;
//            this.subtopics = data.subtopics. slice(0);
//            this.subtopics = data.subtopics;
            console.log("Subtopic_Component{__emitterMainTopicSelected}", data);
//            this.load_subTopics();
            //            this.load_mainTopics();
        });
        
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterSubTopicsChanged.subscribe((data) => {
//            this.selectedTopic = [];
//            this.selectedTopic = data;
//            this.subtopics = data.subtopics. slice(0);
            this.subtopics = [];
            this.subtopics = data;
            console.log("Subtopic_Component{__emitterSubTopicsChanged}", data);
//            this.load_subTopics();
            //            this.load_mainTopics();
        });
        
    }
    
    
    protected addSubtopics(subtopics: BlogTopic[]) {
        this.subtopics = this.subtopics.slice(subtopics.length-1);
        for (var _i = 0; _i < subtopics.length; _i++) {
            this.addSubtopic(subtopics[_i]);
        }
        
    }    
    protected addSubtopic(subtopic: BlogTopic) {
        this.subtopics.push(subtopic);
    }
    
    
    protected load_subTopics() {

        

            this._BackBoneService.getBackBoneConfig().then(config => {
    
//                this.subtopics = [];
                this.subtopics = config.currentSubTopics;
       
       
                console.log("Subtopic_Component.load_subTopics");    // TODO REMOVE DEBUG LOG
                console.log(this.selectedTopic);    // TODO REMOVE DEBUG LOG
                console.log(this.subtopics);    // TODO REMOVE DEBUG LOG
    
            });     

        


    }
    
    /**
     * ngOnInit
     */
    ngOnInit() {

        this.load_subTopics();

    }
    
    
    protected selectTopic(topicName) {
        
        
//        this._BackBoneService.selectTopic(topicName);
        this._emitterTopicSelected.emit(topicName) ;

        if (this.selectedMainTopic != null) {
            this._router.navigate( ['SubTopic', { topicName: this.selectedMainTopic.ID, subTopicName:  topicName}] );

        } else {
             this._router.navigate( ['Topic', { topicName: topicName }] );
        }
        
        
    }
    
}



