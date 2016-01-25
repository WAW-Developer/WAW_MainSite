import {Injectable, EventEmitter} from 'angular2/core';

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
    public __emitterMainTopicSelected: EventEmitter = BackBoneService._emitterTopicSelected;    
    
    
    //    rxEmitter: any;
    
    constructor() {
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
    
    
    getBackBoneConfig(): BackBoneConfig  {
//        return this.config;
        return Promise.resolve(this.config);
    }

    getConfig()  {
        return Promise.resolve(_BackBoneConfig);
    }

    doSomething(data) {
        //        this.rxEmitter.next(data);
    }
    
    
    public test_Message(data) {
        console.log("test_Message");    // TODO REMOVE DEBUG LOG
        console.log(data);    // TODO REMOVE DEBUG LOG
        console.log(this.config);    // TODO REMOVE DEBUG LOG


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
    
    
    public selectTopic(topicID) {
        
//        console.log("BackBoneService.selectTopic");    // TODO REMOVE DEBUG LOG
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG

        this.deactivateSubTopics();
        
        var found = false;

        for (var _i = 0; _i < this.config.currentSubTopics.length; _i++) {
            var subTopic = this.config.currentSubTopics[_i];
            if (subTopic.ID == topicID) {
                this.config.currentTopic = subTopic;
                this.config.currentTopic.is_active = true;
                
                if (subTopic.subtopics.length > 1) {
                    this.config.currentSubTopics = subTopic.subtopics
                }
                
                found = true;
                
                // Topic selected
                this.__emitterTopicSelected.next(this.config.currentTopic);

                break;
            }
        }       
        
    }
    
    
    
    /**
     * Select main topic
     */
    public selectMainTopic(topicID) {
        
//        console.log("BackBoneService.selectTopic");    // TODO REMOVE DEBUG LOG
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG

        this.deactivateSubTopics();
        this.deactivateMainTopics();
        
        
        var found = false;
        
        for (var _i=0; _i < this.config.topicStructure.subtopics.length; _i++) {
            var subTopic = this.config.topicStructure.subtopics[_i];
            if (subTopic.ID == topicID) {
                this.config.currentTopic = subTopic;
                this.config.currentTopic.is_active = true;
                
                if (subTopic.subtopics.length > 1) {
                    this.config.currentSubTopics = subTopic.subtopics
                }
                
                found = true;
                
//                this.rxEmitter.next(data);
                // Push the new list of todos into the Observable stream
//                this._configObserver.next(this.config);
                this.__emitterMainTopicSelected.next(this.config.currentTopic);
                
                break;
                }
        }
        
        if (!found) {
            throw "Main Topic not found";
        }
        
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG
        
    }
    
    /**
     * getCurrentTopic
     * 
     * Returns current BlogTopic
     */
    public getCurrentTopic(): BlogTopic  {
//        return this.config.currentTopic;
        return Promise.resolve(this.config.currentTopic);

        
    }
    
    /**
     * getCurrentSubTopics
     * 
     * Returns current subtopics
     */
    public getCurrentSubTopics(): BlogTopic[]  {
        return Promise.resolve(this.config.currentSubTopics);

        
    }
    
}