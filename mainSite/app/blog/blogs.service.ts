import {Injectable, EventEmitter, NgZone} from 'angular2/core';


/// <reference path="../../lib/google/google.feed.api.d.ts" />

import {BlogTopic, BlogPost, BlogCategory, Blog, Blogs, BlogsManager} from './blogs';
//import {_BackBoneConfig, BackBoneConfig} from './backBoneconfig';


@Injectable()
export class BlogService {

    public topic: BlogTopic = null;
    protected posts: BlogPost[] = [];
    protected categories: BlogCategory[] = [];
    protected feeds: google.feeds.Feed = null;
    
    
    protected blogsManager: BlogsManager;
    protected currentBlog: Blog;
    
    public _emitterTopicChangued: EventEmitter = new EventEmitter();
    public _emitterPostsLoaded: EventEmitter = new EventEmitter();
    public _emitterCategoriesLoaded: EventEmitter = new EventEmitter();
    
    
    
    /**
     * constructor
     */
    constructor(private _ngZone: NgZone) {
        
        
        this.blogsManager = new BlogsManager();
        this.currentBlog = null;
        
    }
    
    /**
     * setTopic
     */
    public setTopic(topic: BlogTopic) {
        
        this.currentBlog = this.blogsManager.getBlog(topic);
        this.topic = this.currentBlog.blogTopic;
//        this.posts = [];
        
        
        
        this._emitterTopicChangued.emit(this.currentBlog.blogTopic);  // Notify _emitterTopicChangued
//        this._emitterPostsLoaded.next(this.posts);  // Notify _emitterPostsLoaded  

    }
    
    /**
     * Load posts
     */
    public loadPosts() {
        
//        this.posts = Blogs.getPosts(this.topic, this.feeds);
        
        if (this.topic == null ||
            this.topic.url_feed == null  || 
            this.topic.url_feed.length == 0) {
            return;
        }
        
        
        if (this.currentBlog.feeds == undefined) {
            this.currentBlog.feeds = new google.feeds.Feed(this.topic.url_feed);
            
        }
        this.feeds = this.currentBlog.feeds;
        

        if (this.currentBlog.blogPosts.length > 1) {
            this.posts = this.currentBlog.blogPosts;
            this._emitterPostsLoaded.emit(this.posts);  // Notify _emitterPostsLoaded
             
            return;
        }


        var blogService = this;
//        this.posts = [];
        
        // StartOF _ngZone.runOutsideAngular
        this._ngZone.runOutsideAngular(() => {
            
//            this.feeds = new google.feeds.Feed(this.topic.url_feed);
            this.feeds.setNumEntries(100);
            
            Blogs.loadPosts(this.topic, this.feeds, (result) => {
//                console.log('Outside Done 1!', result); // TODO REMOVE DEBUG LOG
                this.currentBlog.blogPosts = Blogs.get_BlogPosts_From_GFeedEntries(result.feed.entries);
                this.posts = this.currentBlog.blogPosts;
                
//                this.posts = Blogs.get_BlogPosts_From_GFeedEntries(result.feed.entries);
                
                // reenter the Angular zone and display done
                this._ngZone.run(() => {
//                    console.log('Outside Done 2!', result); // TODO REMOVE DEBUG LOG
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
     * getPosts_OLD
     */
    public getPosts_OLD(): BlogPost {
        return this.posts;
    }
    
    /**
     * loadCategories
     */
    public loadCategories() {
        
        
        if (this.currentBlog.blogCategories.length > 1) {
            this.categories = this.currentBlog.blogCategories;
            this._emitterCategoriesLoaded.emit(this.categories);  // Notify _emitterCategoriesLoaded
             
            return;
        }
        
        
        // StartOF _ngZone.runOutsideAngular
        this._ngZone.runOutsideAngular(() => {

            
//            Blogs.loadCategories(this.topic, this.posts, (result) => {
////                console.log('Outside Done 1!', result); // TODO REMOVE DEBUG LOG
//                this.currentBlog.blogCategories = result;
//                this.categories = this.currentBlog.blogCategories;
//                
//                // reenter the Angular zone and display done
//                this._ngZone.run(() => {
////                    console.log('Outside Done 2!', result); // TODO REMOVE DEBUG LOG
//                    this._emitterCategoriesLoaded.emit(this.categories);  // Notify _emitterCategoriesLoaded 
//                });
//
//            });
            
            
            Blogs.detailForCategories(this.topic, this.posts, (result) => {
//                console.log('Outside Done 1!', result); // TODO REMOVE DEBUG LOG
                this.currentBlog.blogCategories = result;
                this.categories = this.currentBlog.blogCategories;
                
                // reenter the Angular zone and display done
                this._ngZone.run(() => {
//                    console.log('Outside Done 2!', result); // TODO REMOVE DEBUG LOG
                    this._emitterCategoriesLoaded.emit(this.categories);  // Notify _emitterCategoriesLoaded 
                });

                
            });
            
        }); // EndOF _ngZone.runOutsideAngular
        
    }
    
    
    /**
     * getPosts
     */
    public getCategories(): Promise<BlogCategory[]> {
        return Promise.resolve(this.categories);
    }
}




