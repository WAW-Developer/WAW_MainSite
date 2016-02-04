import {NgIf, NgFor} from 'angular2/common';
import {Component,View, Directive, ViewChild, ViewChildren, ElementRef, NgZone} from 'angular2/core';
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

export class WAW_Topics__Component implements OnInit{


    private _topicLoading: boolean = false;
    
    public topic: BlogTopic;
    public selectedMainTopic: BlogTopic;
    public selectedTopic: BlogTopic;
//    private _BackBoneService: BackBoneService;
    
    private _aniationScroll: boolean = false;
    
    
    /**
     * constructor
     */
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _BackBoneService: BackBoneService,
        private _Location : Location,
        private _ElementRef: ElementRef,
        private _ngZone: NgZone
    ) {
        
//        this._BackBoneService = BackBoneService.getInstance();
        
        
        var param_TopicName = _routeParams.get("topicName");
        var param_SubTopicName = _routeParams.get("subTopicName");
        
//        console.log("WAW_Home__Component._router", _router);    // TODO REMOVE DEBUG LOG
//        console.log("WAW_Home__Component._routeParams", _routeParams);    // TODO REMOVE DEBUG LOG
//        console.log("WAW_Home__Component._Location", _Location);    // TODO REMOVE DEBUG LOG
        console.log("WAW_Topics__Component._Location", _Location.path());    // TODO REMOVE DEBUG LOG
//        
//        console.log("WAW_Home__Component.param_TopicName", param_TopicName);    // TODO REMOVE DEBUG LOG
//        console.log("WAW_Home__Component.param_SubTopicName", param_SubTopicName);    // TODO REMOVE DEBUG LOG
//        
        this._BackBoneService.getConfig().then(config => this.topic = config);

      
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterMainTopicSelected.subscribe((data) => {
            this.load_selectedTopic(true);
        });

          // Subscribe to _emitterTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
            this.load_selectedTopic();
        });
            
        
        if (param_TopicName != null && param_SubTopicName != null) {
            if ( (!this.topic) || (param_SubTopicName != this.topic.ID)) {

//                if ((this.selectedMainTopic == null) || 
//                    (this.selectedMainTopic.ID != param_TopicName)) {
////                    this._router.navigate( ['Topic', { topicName: param_TopicName }] );
//                    this._BackBoneService.selectMainTopic(param_TopicName);
//                } else {
//                    this._BackBoneService.selectTopic(param_SubTopicName);
//
//                }
                
                this._BackBoneService.selectTopic(param_SubTopicName);


            }
        } else if (param_TopicName != null) {
            if ((!this.topic) || (param_TopicName != this.topic.ID)) {

                this._BackBoneService.selectMainTopic(param_TopicName);

            }
        } else {
            
        }
       

        

    }


    /**
     * ngOnInit
     */
    ngOnInit() {

        this.load_selectedTopic();
      
      console.log("WAW_Topics__Component.ngOnInit", this.routeParams);    // TODO REMOVE DEBUG LOG

        //      console.log(config);    // TODO REMOVE DEBUG LOG
        //      console.log(this.topic);    // TODO REMOVE DEBUG LOG
        //      console.log(this.routeParams);    // TODO REMOVE DEBUG LOG

    }
    
    
    /**
     * load_selectedTopic
     */
    protected load_selectedTopic(isMainTopic?: boolean = false) {
     
        
//        if (this._topicLoading) {
//            return;
//        } else {
//            this._topicLoading = true;
//        }
        
        
        this._BackBoneService.getCurrentTopic().then(topic => {
            this.selectedTopic = topic;
            
            if (this._BackBoneService.inMainTopics(this.selectedTopic.ID)) {
                isMainTopic = true;
            }
            
            
            if (isMainTopic) {
                this.selectedMainTopic = topic;
//                console.log("WAW_Topics__Component.load_selectedTopic!!isMainTopic",this.selectedMainTopic);    // TODO REMOVE DEBUG LOG

            }
            
            
            if (!this._aniationScroll) {
                
                
                // StartOF _ngZone.runOutsideAngular
                this._ngZone.runOutsideAngular(() => {
                    
                   this._aniationScroll = true;
                
                    var body_scrollTop = jQuery('body').get(0).scrollTop;
                    var element_scrollTop = 15;
                    var offset = 200;
                    var offsetMargin = -13;
    
                    this._topicLoading = false;
    
                    if (body_scrollTop > element_scrollTop + offset) {
                        jQuery('html,body').stop().animate({ scrollTop: element_scrollTop + offsetMargin }, 611);
                    }
                    
                    // ('html,body').stop().delay(500).
                    
                    this._aniationScroll = false;
                    
                    
                }); // EndOF _ngZone.runOutsideAngular
           
            }
            

//            window.scrollTo(0, 0);
            
//            console.log("WAW_Topics__Component.load_selectedTopic");    // TODO REMOVE DEBUG LOG
//            console.log(this.selectedTopic);    // TODO REMOVE DEBUG LOG

        });

    }
    
    /**
     * moreInfo
     */
    protected moreInfo() {
        
        window.open(this.selectedTopic.url_main, "_blank");
    }

    /**
     * showBlog
     */
    protected showBlog() {
        
        window.open(this.selectedTopic.url_blog, "_blank");
    }
    
        
}


