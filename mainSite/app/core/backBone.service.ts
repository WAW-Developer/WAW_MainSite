import {Injectable, EventEmitter} from 'angular2/core';

import {BlogTopic} from '../blog/blogs';
import {_BackBoneConfig, BackBoneConfig} from './backBoneconfig';


@Injectable()
export class BackBoneService {

    protected config: BackBoneConfig;
    
    _emitter: EventEmitter = new EventEmitter();
    
    _emitterTopicSelected: EventEmitter = new EventEmitter();
    
    
    //    rxEmitter: any;
    
    constructor() {
        //        this.rxEmitter = this._emitter.toRx();
        
        this.config = new BackBoneConfig(_BackBoneConfig);
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
    
    
    protected deactivateTopics() {
        for (var _i=0; _i < this.config.topicStructure.subtopics.length; _i++) {
            this.config.topicStructure.subtopics[_i].is_active = false;
        }
    }
    
    /**
     * Select main topic
     */
    public selectTopic(topic) {
        
//        console.log("BackBoneService.selectTopic");    // TODO REMOVE DEBUG LOG
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG

        this.deactivateTopics();
        
        var found = false;
        
        for (var _i=0; _i < this.config.topicStructure.subtopics.length; _i++) {
            var subTopic = this.config.topicStructure.subtopics[_i];
            if (subTopic.name == topic) {
                this.config.currentTopic = subTopic;
                this.config.currentTopic.is_active = true;
                found = true;
                
//                this.rxEmitter.next(data);
                this._emitterTopicSelected.next(this.config.currentTopic);
                
                break;
                }
        }
        
        if (!found) {
            throw "Topic not found";
        }
        
//        console.log(this.config.currentTopic);    // TODO REMOVE DEBUG LOG
        
    }
    
}