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


import { Router, RouteParams} from 'angular2/router';



import {BackBoneService} from '../core/backBone.service'

import {BlogTopic} from '../blog/blogs'


@Component({

//    templateUrl: "res/templates/home/home_component.html",
//    directives: [NgIf]
})  
@View({
    templateUrl: "res/templates/home/home_component.html",
    styleUrls: ["res/templates/home/home_component.css"]
    directives: [NgIf, NgFor]

})

export class WAW_Home__Component implements OnInit{


    public topic: BlogTopic;
    public selectedTopic: BlogTopic;
//    private _BackBoneService: BackBoneService;
    
    
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _BackBoneService: BackBoneService
    ) {
        
//        this._BackBoneService = BackBoneService.getInstance();

        console.log("WAW_Home__Component._routeParams", _routeParams);    // TODO REMOVE DEBUG LOG


    }

    
  protected doTest() {
        console.log("doTest");    // TODO REMOVE DEBUG LOG
        console.log(this.topic);    // TODO REMOVE DEBUG LOG
      
        this._BackBoneService.test_Message("A simple test message");
  }
   

  ngOnInit() {

      this._BackBoneService.getConfig().then(config => this.topic = config);


          // Subscribe to _emitterTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
            this.load_selectedTopic();
            this._router.navigate( ['Topic', { topicName: data.name }] );

            
            //            this.load_mainTopics();
        });
      
      
      
      this.load_selectedTopic();
      
      
      
//      console.log(config);    // TODO REMOVE DEBUG LOG
//      console.log(this.topic);    // TODO REMOVE DEBUG LOG
//      console.log(this.routeParams);    // TODO REMOVE DEBUG LOG
      
      
  }
    
    
    
    
    
    protected load_selectedTopic() {
     
        this._BackBoneService.getCurrentTopic().then(topic => {
            this.selectedTopic = topic;
            
            console.log("WAW_Home__Component.load_selectedTopic");    // TODO REMOVE DEBUG LOG
            console.log(this.selectedTopic);    // TODO REMOVE DEBUG LOG

        });

    }
    
    
    protected moreInfo() {
        
        window.open(this.selectedTopic.url_main, "_blank");
    }
    
        
}


