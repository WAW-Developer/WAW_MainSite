import {Injectable, EventEmitter, NgZone} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import {BlogTopic} from '../blog/blogs';
import {_BackBoneConfig, BackBoneConfig} from './backBoneconfig';


@Injectable()
export class BackBoneService {

    
    public config$: Observable<BackBoneConfig>;
    private _configObserver: any;
    
    static instance:BackBoneService;
    static isCreating:Boolean = false;
 
    
    public static _config: BackBoneConfig;
    protected config: BackBoneConfig;
    
    public static _emitter: EventEmitter = new EventEmitter();
    
    public static _emitterTopicSelected: EventEmitter = new EventEmitter();
    public __emitterTopicSelected: EventEmitter = BackBoneService._emitterTopicSelected;
    
    public static _emitterMainTopicSelected: EventEmitter = new EventEmitter();
    public __emitterMainTopicSelected: EventEmitter = BackBoneService._emitterMainTopicSelected;
    
    public __emitterSubTopicsChanged: EventEmitter = new EventEmitter();
    
    
    //    rxEmitter: any;
    
    /**
     * constructor
     */
    constructor(
        private _ngZone: NgZone
        ) {
        //        this.rxEmitter = this._emitter.toRx();
        
//        if (!BackBoneService.isCreating) {
//            throw new Error("You can't call new in Singleton instances! Call SingletonService.getInstance() instead.");
//        }
        
        if (!BackBoneService._config ) {
            console.log("BackBoneService.config not initialized!!!");    // TODO REMOVE DEBUG LOG
            BackBoneService._config = new BackBoneConfig(_BackBoneConfig);
            }
        
        this.config = BackBoneService._config;
        
        
        // Create Observable Stream to output our data
//        this.config$ = new Observable(observer =>
//            this._configObserver = observer).share();

        this.config$ = new Observable(observer => {
            this._configObserver = observer;
        }).share();
        
        
        
    }

    /**
     * getInstance
     */
    public static getInstance(): BackBoneService {
        if (BackBoneService.instance == null) {
            BackBoneService.isCreating = true;
            BackBoneService.instance = new BackBoneService();
            BackBoneService.isCreating = false;
        }
 
        return BackBoneService.instance;
    }
    
    
    /**
     * getBackBoneConfig
     */
    getBackBoneConfig(): Promise<BackBoneConfig>  {
//        return this.config;
        return Promise.resolve(this.config);
    }

    
    /**
     * getConfig
     */
    getConfig(): Promise<BlogTopic>  {
        return Promise.resolve(_BackBoneConfig);
    }

   
    
    /**
     * deactivateSubTopics
     */
    protected deactivateSubTopics() {
      
        for (var _i=0; _i < this.config.currentSubTopics.length; _i++) {
            this.config.currentSubTopics[_i].is_active = false;
        }
    }
    
    /**
     * deactivateMainTopics
     */
    protected deactivateMainTopics() {
        for (var _i=0; _i < this.config.topicStructure.subtopics.length; _i++) {
            this.config.topicStructure.subtopics[_i].is_active = false;
        }
    }
    
    
    
    
    
    /**
     * selectTopic
     */
    public selectTopic(topicID: string) {
        
//        console.log("BackBoneService.selectTopic");    // TODO REMOVE DEBUG LOG
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG

        
        this.deactivateSubTopics();

        
        var found = false;
        

        for (var _i = 0; _i < this.config.currentSubTopics.length; _i++) {
            var subTopic = this.config.currentSubTopics[_i];
            if (subTopic.ID == topicID) {
                this.config.currentSubTopics[_i].is_active = true;
                this.config.currentTopic = this.config.currentSubTopics[_i];
                
                if (subTopic.subtopics.length > 1) {
                    this.config.currentSubTopics = this.config.currentSubTopics[_i].subtopics
                    // Subtopics changued
                    this.__emitterSubTopicsChanged.emit(subTopic.subtopics);
                }
                
                found = true;
                
                // Topic selected
//                this.__emitterTopicSelected.next(this.config.currentTopic);
                this.__emitterTopicSelected.emit(this.config.currentTopic) ;

                break;
            }
        }
        
        if (!found) {
            throw "Topic not found";
        }
        
    }
    
    
    
    /**
     * Select main topic
     */
    public selectMainTopic(topicID) {
        
//        console.log("BackBoneService.selectMainTopic");    // TODO REMOVE DEBUG LOG
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG
//        console.log(this.config.topicStructure);    // TODO REMOVE DEBUG LOG

        this.deactivateSubTopics();
        this.deactivateMainTopics();
        
        
        var found = false;
        
        for (var _i=0; _i < this.config.topicStructure.subtopics.length; _i++) {
            var subTopic = this.config.topicStructure.subtopics[_i];
            if (subTopic.ID == topicID) {
                found = true;
                
                this.config.topicStructure.subtopics[_i].is_active = true;
                this.config.currentTopic = subTopic;
                this.config.currentMainTopic subTopic;
                
                
                
                if (subTopic.subtopics.length > 1) {
                    this.config.currentSubTopics = subTopic.subtopics
                    // Subtopics changued
                    this.__emitterSubTopicsChanged.emit(this.config.currentSubTopics);
                }
                
                
                
//                this.rxEmitter.next(data);
                // Push the new list of todos into the Observable stream
//                this._configObserver.next(this.config);
                this.__emitterMainTopicSelected.emit(this.config.currentTopic);
//                this.__emitterTopicSelected.next(this.config.currentTopic);
//                this.__emitterMainTopicSelected.emit(this.config.currentTopic);
                this.__emitterTopicSelected.emit(this.config.currentTopic);

                
                break;
                }
        }
        
        if (!found) {
            throw "Main Topic not found";
        }
        
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG
        
    }
    
    
    /**
     * selectRootTopic
     */
    public selectRootTopic() {
        
        this.deactivateSubTopics();
        this.deactivateMainTopics();
        
        
        this.config.currentTopic = this.config.topicStructure;
        this.config.currentMainTopic = this.config.topicStructure;
        this.config.currentSubTopics = this.config.topicStructure.subtopics;
        
        // __emitterSubTopicsChanged
        this.__emitterSubTopicsChanged.emit(this.config.currentSubTopics);
        
        // __emitterMainTopicSelected        
        this.__emitterMainTopicSelected.emit(this.config.currentTopic);
        // __emitterTopicSelected
        this.__emitterTopicSelected.emit(this.config.currentTopic);
        
    }
    
    
    
    /**
     * inRootTopic
     */
    public inRootTopic(): boolean {
        
        var result = false;
        
        if (this.config.topicStructure.ID == this.config.currentTopic.ID) {
            result = true;
        }
        
        console.log("BackBoneService.inRootTopic", result);    // TODO REMOVE DEBUG LOG

        return result;
    }
    
    
    /**
     * inMainTopics
     */
    public inMainTopics(topicID): boolean {
        var result = false;
        
        var mainTopics = this.config.topicStructure.subtopics;

        for(var _i; _i < mainTopics.length; _i++){
            if (mainTopics[_i].ID == topicID) {
                result = true;
                break;
            } 
        }
        
        console.log("BackBoneService.inMainTopics", result);    // TODO REMOVE DEBUG LOG

        return result;
    }
    
    /**
     * getCurrentTopic
     * 
     * Returns current BlogTopic
     */
    public getCurrentTopic(): Promise<BlogTopic>  {
//        return this.config.currentTopic;
        return Promise.resolve(this.config.currentTopic);

        
    }
    
    /**
     * getCurrentSubTopics
     * 
     * Returns current subtopics
     */
    public getCurrentSubTopics(): Promise<BlogTopic[]> {
        return Promise.resolve(this.config.currentSubTopics);

        
    }
    
    
    /**
     * 
     */
    public scrollToY(
        element_scrollTop: number,
        offset: number,
        offsetMargin: number,
        timeAnimation: number
        ){
        
//        console.log("BackBoneService.scrollToY");    // TODO REMOVE DEBUG LOG

//            this._animationScroll = true;
                
                // StartOF _ngZone.runOutsideAngular
                this._ngZone.runOutsideAngular(() => {
                    
//                    var body_scrollTop = jQuery('body').get(0).scrollTop;
                    var body_scrollTop = window.pageYOffset;
                    
//                    var element_scrollTop = 15;
//                    var offset = 200;
//                    var offsetMargin = -13;
                    
                    this._topicLoading = false;
                    
                    if (body_scrollTop > element_scrollTop + offset) {
                        jQuery('html,body').stop().animate({scrollTop: element_scrollTop + offsetMargin}, timeAnimation);
                    }
                    
//                    this._animationScroll = false;
                    
                }); // EndOF _ngZone.runOutsideAngular
        
    }
    
}