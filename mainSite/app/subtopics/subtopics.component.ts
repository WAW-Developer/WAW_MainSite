
import {NgIf, NgFor} from 'angular2/common';
//import {Component, View, Directive} from 'angular2/core';

import {Component, View, bootstrap, NgFor, NgIf, Input, ElementRef, Renderer} from 'angular2/core';


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
templateUrl: "res/templates/subtopics/subtopics_component.html"

})
export class Subtopic_Component implements OnInit {
        
    public selectedTopic: BlogTopic;
    public  subtopics: Object[] = [];

    
    constructor(private _router: Router,
        private _BackBoneService: BackBoneService) {
        

        
        
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
    
    
    protected load_selectedTopic() {
//        this.subtopics = this._BackBoneService.getCurrentTopic().subtopics.slice(0);
        
//        console.log("Subtopic_Component.load_selectedTopic", this.subtopics);


        this._BackBoneService.getCurrentSubTopics().then(topics => {
//            this.selectedTopic = topic;
            
//            this.addSubtopics(topic.subtopics);
            
//             console.log(topic.subtopics);    // TODO REMOVE DEBUG LOG

            
            this.subtopics = topics;
            
//            if (this.selectedTopic.subtopics.length > 0) {
////                this.addSubtopics(topic.subtopics);
//                this.subtopics = topic.subtopics;
//            }
            
            
            
            console.log("Subtopic_Component.load_selectedTopic");    // TODO REMOVE DEBUG LOG
            console.log(this.selectedTopic);    // TODO REMOVE DEBUG LOG
            console.log(this.subtopics);    // TODO REMOVE DEBUG LOG

        });

    }
    
    /**
     * ngOnInit
     */
    ngOnInit() {

        
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterMainTopicSelected.subscribe((data) => {
//            this.selectedTopic = [];
//            this.selectedTopic = data;
//            this.subtopics = data.subtopics. slice(0);
//            this.subtopics = data.subtopics;
            console.log("Subtopic_Component{__emitterMainTopicSelected}", data);
            this.load_selectedTopic();
            //            this.load_mainTopics();
        });
        
        
        this.load_selectedTopic();
//        this._BackBoneService.getConfig().then(config => this.mainTopics = config.subtopics);


        //      console.log(config);    // TODO REMOVE DEBUG LOG
//        console.log(this.mainTopics);    // TODO REMOVE DEBUG LOG
    }
    
    
    protected selectTopic(topicName) {
        this._BackBoneService.selectTopic(topicName);
        
        
    }
    
}



