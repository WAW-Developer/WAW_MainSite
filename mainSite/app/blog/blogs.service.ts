import {Injectable, EventEmitter, NgZone} from 'angular2/core';


/// <reference path="../../lib/google/google.feed.api.d.ts" />

import {BlogTopic, BlogPost, Blogs} from './blogs';
//import {_BackBoneConfig, BackBoneConfig} from './backBoneconfig';


@Injectable()
export class BlogService {

    public topic: BlogTopic;
    protected posts: BlogPost[] = [];
    protected feeds: google.feeds.Feed;
    
    public _emitterTopicChangued: EventEmitter = new EventEmitter();
    public _emitterPostsLoaded: EventEmitter = new EventEmitter();
    
    
    
    /**
     * constructor
     */
    constructor(private _ngZone: NgZone) {
        
    }
    
    /**
     * setTopic
     */
    public setTopic(topic: BlogTopic) {
        this.topic = topic;
//        this.posts = [];
        
        this._emitterTopicChangued.emit(this.topic);  // Notify _emitterTopicChangued
//        this._emitterPostsLoaded.next(this.posts);  // Notify _emitterPostsLoaded  

    }
    
    /**
     * Load posts
     */
    public loadPosts() {
        
//        this.posts = Blogs.getPosts(this.topic, this.feeds);
        
        if ( this.topic == undefined ||
            this.topic == null ||
            this.topic.url_feed == undefined  || 
            this.topic.url_feed == null  || 
            this.topic.url_feed.length == 0) {
            return;
        }
        
        
//        if (this.feeds == undefined) {
//            this.feeds = new google.feeds.Feed(this.topic.url_feed);
//        }
        this.feeds = new google.feeds.Feed(this.topic.url_feed);

        this.feeds.setNumEntries(100);

        this.posts = [];

        var blogService = this;

        
        // StartOF _ngZone.runOutsideAngular
        this._ngZone.runOutsideAngular(() => {

            
            Blogs.loadPosts(this.topic, this.feeds, (result) => {
//                console.log('Outside Done 1!', result); // TODO REMOVE DEBUG LOG
                
                // reenter the Angular zone and display done
                this._ngZone.run(() => {
//                    console.log('Outside Done 2!', result); // TODO REMOVE DEBUG LOG
                    this.posts = [];
                    this.posts = Blogs.get_BlogPosts_From_GFeedEntries(result.feed.entries);
                    this._emitterPostsLoaded.emit(this.posts);  // Notify _emitterPostsLoaded 
                });

            });
            

        }); // EndOF _ngZone.runOutsideAngular


    }

    
    
    /**
     * getPosts
     */
    public getPosts(): Promise<BlogPost[]> {
        return Promise.resolve(this.posts);
    }

    
    
    
    
    
    /**
     * getPosts OLD
     */
    public getPosts(): Promise<BlogPost[]> {
        return Promise.resolve(this.posts);
    }
    
    /**
     * getPosts
     */
    public getPosts_OLD(): BlogPost {
        return this.posts;
    }
}




