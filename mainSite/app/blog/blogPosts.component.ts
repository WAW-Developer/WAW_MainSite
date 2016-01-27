

import {NgIf, NgFor} from 'angular2/common';
//import {Component, View, Directive} from 'angular2/core';

import {Component, View, bootstrap, ElementRef, Renderer, NgZone} from 'angular2/core';


import {RouterLink, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';




/// <reference path="../../lib/google/google.feed.api.d.ts" />


import {BlogTopic, BlogPost, Blogs} from './blogs';
import {BlogService} from './blogs.service';

import {BackBoneService} from '../core/backBone.service'




@Component({
    selector: 'blogPosts_waw',
//    directives: [ROUTER_DIRECTIVES],
    host: {
//        'class': 'panel-group'
    }
})
@View({
    directives: [NgFor, ROUTER_DIRECTIVES ],
    templateUrl: "res/templates/blog/blogPosts_component.html"

})
export class BlogPosts_Component implements OnInit {
    
    protected posts: BlogPost[] = [];
    
    protected topic: BlogTopic;
    
    /**
     * constructor
     */
    constructor(private _router: Router,
        private _BackBoneService: BackBoneService,
        private _BlogService: BlogService) {
        

        
        // Subscribe to _emitterPostsLoaded
        this._BlogService._emitterPostsLoaded.subscribe((data) => {
//            console.log("BlogPosts_Component{_emitterPostsLoaded}", data);
//            this.posts = data;
            this.loadPosts();
        });
        
        
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
//            console.log("BlogPosts_Component{__emitterTopicSelected}", data);
            this.load_Topic();
           
//            if (data.url_feed != null) {
//                this.topic = data;
//                this._BlogService.setTopic(data);
//                this._BlogService.loadPosts();
//            }
            

        }
        
        
    }
    
    

    
    
    protected loadPosts__OLD() {
        
        if (this.topic.url_feed.length == 0) {
            return;
        }
        
        
        var feeds = new google.feeds.Feed(this.topic.url_feed);
        feeds.setNumEntries(100);
        
        var blogPosts = this;
        
        feeds.load(function(result){
//            console.log("BlogPosts_Component.loadPosts", result); // TODO REMOVE DEBUG LOG
            blogPosts.setPostsFrom_GFeeds(result.feed.entries);

            });  
        
    }
    
    
    protected setPostsFrom_GFeeds(feeds: Object[]) {
        
        this.posts = [];
        
        for(var _i = 0; _i < feeds.length; _i++) {
           
            this.posts.push(Blogs.get_BlogPost_From_GFeedEntry(feeds[_i]));
            
        }
        

        
    }
    
    
    
    
    protected test() {
        
        var feeds = new google.feeds.Feed("http://wabout-planet.blogspot.com/feeds/posts/default");
        feeds.setNumEntries(100);
        
        var blogPosts = this;
        
        feeds.load(function(result){
//            console.log("BlogPosts_Component.test", result); // TODO REMOVE DEBUG LOG

            var entry = result.feed.entries[3];
            
            var blogPost = new BlogPost();
            blogPost.ID = entry.link;
            blogPost.name = entry.title;
            blogPost.summary = entry.contentSnippet;
            blogPost.content = entry.content;
            blogPost.publishedDate = entry.publishedDate;
            blogPost.tasgs = entry.categories;
            blogPost.url_blog = entry.link
            ;
            
            
            
            });
        
        

    }
    
    
    
    /**
     * ngOnInit
     */
    ngOnInit() {

        
//        this._BlogService.setTopic(this.topic);

//        
//        // Subscribe to _emitterPostsLoaded
//        this._BlogService._emitterPostsLoaded.subscribe((data) => {
//            console.log("BlogPosts_Component{_emitterPostsLoaded}", data);
////            this.posts = data;
//            this.loadPosts();
//        });
//        
//        
//        // Subscribe to __emitterMainTopicSelected
//        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
//            console.log("BlogPosts_Component{__emitterTopicSelected}", data);
//            this.load_Topic();
//           
////            if (data.url_feed != null) {
////                this.topic = data;
////                this._BlogService.setTopic(data);
////                this._BlogService.loadPosts();
////            }
//            
//
//        }
//        
//        // Subscribe to __emitterMainTopicSelected
//        this._BackBoneService.__emitterMainTopicSelected.subscribe((data) => {
//            console.log("BlogPosts_Component{__emitterMainTopicSelected}", data);
//            this.load_Topic();
//        
////            if (data.url_feed != null) {
////                this.topic = data;
////                this._BlogService.setTopic(data);
////                this._BlogService.loadPosts();
////            }
//            
//
//        }
        
        
        this.load_Topic();
//        this.loadPosts();


    }
    
    
    /**
     * load_Topic
     */
    protected load_Topic() {
        
        this._BackBoneService.getCurrentTopic().then(topic => {

             if (topic.url_feed != null) {
                this.topic = topic;
                this._BlogService.setTopic(topic);
                this._BlogService.loadPosts();
            }
     
//            console.log("BlogPosts_Component.load_selectedTopic");    // TODO REMOVE DEBUG LOG
//            console.log(this.topic);    // TODO REMOVE DEBUG LOG

        });
        
        
    }
    
    /**
     * loadPosts
     */
    protected loadPosts() {
    
    
//        if (this.topic.url_feed == undefined  || 
//            this.topic.url_feed == null  || 
//            this.topic.url_feed.length == 0) {
//            return;
//        }
//        
       
        this.posts = [];
        this._BlogService.getPosts().then(posts => {
            this.posts = posts;
//            console.log("BlogPosts_Component.loadPosts");    // TODO REMOVE DEBUG LOG
//            console.log(this.posts);    // TODO REMOVE DEBUG LOG
        });
        
        
//        this.posts = this._BlogService.getPosts();
    
    
    }
    
    
    
}



