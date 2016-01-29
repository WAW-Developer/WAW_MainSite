
import {NgIf, NgFor} from 'angular2/common';

import {Component, View, Directive, ViewChild, ViewChildren, ElementRef, Renderer, NgZone} from 'angular2/core';


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


import { Router} from 'angular2/router';

import {NgTab, NgTab_Component} from '../ngTabs/ngTab.component';
import {NgTabs_Component} from '../ngTabs/ngTabs.component';

import {BlogTopic, BlogCategory, Blogs} from './blogs';
import {BlogService} from './blogs.service';

import {BackBoneService} from '../core/backBone.service'


@Component({
    selector: 'blogProperties_waw',
//    directives: [ROUTER_DIRECTIVES],
    host: {
//        'class': 'panel-group'
    }
})
@View({
    //    template: ` I see {{items.length}} items. `
    templateUrl: "res/templates/blog/blogProperties_component.html",
    directives: [NgIf, NgFor, NgTab_Component, NgTabs_Component]

})
export class BlogProperties_Component implements OnInit, AfterViewInit {
        
    
    protected posts: BlogPost[] = [];
    
    protected topic: BlogTopic;
    
    protected categoriesRaw: BlogCategory[];
    protected categoriesUnique: BlogCategory[];
    
    
        
    @ViewChild(NgTabs_Component)
    tabsController: NgTabs_Component;
    

    
    constructor(private _router: Router,
        private _BackBoneService: BackBoneService,
        private _BlogService: BlogService) {
        //..get the data
        
        
        // Subscribe to _emitterPostsLoaded
        this._BlogService._emitterPostsLoaded.subscribe((data) => {
//            console.log("BlogPosts_Component{_emitterPostsLoaded}", data);
//            this.posts = data;
            this.getPosts();
        });
        
        // Subscribe to _emitterCategoriesLoaded
        this._BlogService._emitterCategoriesLoaded.subscribe((data) => {
//            console.log("BlogPosts_Component{_emitterPostsLoaded}", data);
//            this.posts = data;
            this.getCategories();
        });
        
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
//            console.log("BlogPosts_Component{__emitterTopicSelected}", data);
            this.get_Topic();

        }
            
        
        
    }
    
       
    protected activateTab(event, tabName) {

//        console.log("activateTab");     // TODO REMOVE DEBUG LOG
//    
        this.tabsController.activateTab(tabName);

    }
    
    /**
     * ngOnInit
     */
    ngOnInit() {

//        this._BackBoneService.getConfig().then(config => this.mainTopics = config.subtopics);

//        this.tabs = this.tabsController.tabs;

//        console.log(this.tabs);    // TODO REMOVE DEBUG LOG
    }
    
    
    /**
     * ngAfterViewInit
     */
    ngAfterViewInit() {
        
//        this.tabs = this.tabsController.tabs;

//        console.log("BlogProperties_Component.ngAfterViewInit");    // TODO REMOVE DEBUG LOG
//        console.log(this.tabs);    // TODO REMOVE DEBUG LOG
        
        }
    
    /**
     * load_Topic
     */
    protected get_Topic() {
        
        this._BackBoneService.getCurrentTopic().then(topic => {

             if (topic.url_feed != null) {
                this.topic = topic;
//                this._BlogService.setTopic(topic);
//                this._BlogService.loadPosts();
            } 
     
//            console.log("BlogPosts_Component.load_selectedTopic");    // TODO REMOVE DEBUG LOG
//            console.log(this.topic);    // TODO REMOVE DEBUG LOG

        });
        
        
    }
    
    
    /**
     * loadPosts
     */
    protected getPosts() {

        this.posts = [];
        this._BlogService.getPosts().then(posts => {
            this.posts = posts;
            
//            this.loadTags();
            this._BlogService.loadCategories();
            
//            console.log("BlogPosts_Component.loadPosts");    // TODO REMOVE DEBUG LOG
//            console.log(this.posts);    // TODO REMOVE DEBUG LOG
        });
    
    }
    
    
    /**
     * loadPosts
     */
    protected getCategories() {

        this.categoriesUnique = [];
        this._BlogService.getCategories().then(categories => {
            this.categoriesUnique = categories;
            
//            console.log("BlogPosts_Component.loadPosts");    // TODO REMOVE DEBUG LOG
//            console.log(this.posts);    // TODO REMOVE DEBUG LOG
        });
    
    }
    

    
}



