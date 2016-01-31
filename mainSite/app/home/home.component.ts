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


import { Router, RouteParams, Location, ROUTER_DIRECTIVES} from 'angular2/router';



import {BackBoneService} from '../core/backBone.service'

import {BlogTopic} from '../blog/blogs'


@Component({

//    templateUrl: "res/templates/home/home_component.html",
//    directives: [NgIf]
})  
@View({
    templateUrl: "res/templates/home/home_component.html",
    styleUrls: ["res/templates/home/home_component.css"]
    directives: [NgIf, NgFor, ROUTER_DIRECTIVES]

})

export class WAW_Home__Component implements OnInit{


    public topic: BlogTopic;
    public selectedMainTopic: BlogTopic;
    public selectedTopic: BlogTopic;
//    private _BackBoneService: BackBoneService;
    
    
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _BackBoneService: BackBoneService,
        private _Location : Location
    ) {
        
//        this._BackBoneService = BackBoneService.getInstance();
        
        var param_TopicName = _routeParams.get("topicName");
        var param_SubTopicName = _routeParams.get("subTopicName");
        
        console.log("WAW_Home__Component._router", _router);    // TODO REMOVE DEBUG LOG
        console.log("WAW_Home__Component._routeParams", _routeParams);    // TODO REMOVE DEBUG LOG
        console.log("WAW_Home__Component._Location", _Location);    // TODO REMOVE DEBUG LOG
        console.log("WAW_Home__Component._Location", _Location.path());    // TODO REMOVE DEBUG LOG
        
        console.log("WAW_Home__Component.param_TopicName", param_TopicName);    // TODO REMOVE DEBUG LOG
        console.log("WAW_Home__Component.param_SubTopicName", param_SubTopicName);    // TODO REMOVE DEBUG LOG
        
        this._BackBoneService.getConfig().then(config => this.topic = config);

      
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterMainTopicSelected.subscribe((data) => {
            this.load_selectedTopic(true);

            
            //            this.load_mainTopics();
        });

          // Subscribe to _emitterTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
            this.load_selectedTopic();

            
            //            this.load_mainTopics();
        });
            
        if (param_TopicName != null && param_SubTopicName != null) {
            if ( (!this.topic) || (param_SubTopicName != this.topic.ID)) {

                this._BackBoneService.selectTopic(param_SubTopicName);

            }
        } else if (param_TopicName != null) {
            if ((!this.topic) || (param_TopicName != this.topic.ID)) {

                this._BackBoneService.selectMainTopic(param_TopicName);

            }
        } 
       

        

    }


  ngOnInit() {


      
      
      
      this.load_selectedTopic();
      
      
//      console.log(config);    // TODO REMOVE DEBUG LOG
//      console.log(this.topic);    // TODO REMOVE DEBUG LOG
//      console.log(this.routeParams);    // TODO REMOVE DEBUG LOG
      
      
  }
    
    
    
    
    
    protected load_selectedTopic(isMainTopic?: boolean = false) {
     
        this._BackBoneService.getCurrentTopic().then(topic => {
            this.selectedTopic = topic;
            
            if (isMainTopic) {
                this.selectedMainTopic = topic;
            }
            
            console.log("WAW_Home__Component.load_selectedTopic");    // TODO REMOVE DEBUG LOG
            console.log(this.selectedTopic);    // TODO REMOVE DEBUG LOG

        });

    }
    
    
    protected moreInfo() {
        
        window.open(this.selectedTopic.url_main, "_blank");
    }
    
    protected showBlog() {
        
        window.open(this.selectedTopic.url_blog, "_blank");
    }
    
        
}


