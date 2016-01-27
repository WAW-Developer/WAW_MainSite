
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
            this.loadPosts();
        });
        
        
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
//            console.log("BlogPosts_Component{__emitterTopicSelected}", data);
            this.load_Topic();

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
    protected load_Topic() {
        
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
    protected loadPosts() {

        this.posts = [];
        this._BlogService.getPosts().then(posts => {
            this.posts = posts;
            this.loadTags();
//            console.log("BlogPosts_Component.loadPosts");    // TODO REMOVE DEBUG LOG
//            console.log(this.posts);    // TODO REMOVE DEBUG LOG
        });
    
    }
    
    
    
    /**
     * loadTags
     */
    protected loadTags() {
        
        
        this.categoriesRaw = [];
        
        for (var _i = 0; _i < this.posts.length; _i++) {
            this.categoriesRaw = this.categoriesRaw.concat(Blogs.get_BlogCategories_From_BlogPost(this.posts[_i],this.topic.url_feed));
        }
        
        
        
        /**
         * Find the number of occurrences a given value has in an array
         * http://stackoverflow.com/questions/17313268/find-the-number-of-occurrences-a-given-value-has-in-an-array
         * 
         */
        var _count = function(ary, classifier) {
            return ary.reduce(function(counter, item) {
                var p = (classifier || String)(item);
                counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
                return counter;
            }, {})
        };
        
        
        // Order categories
        this.categoriesRaw.sort(function(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        
//        var numBoys = people.reduce(function(n, person) {
//            return n + (person.gender == 'boy');
//        }, 0);
        
//        homes.sort(function(a, b) {
//            return parseFloat(a.price) - parseFloat(b.price);
//        });
        

        
        var countByName = _count(this.categoriesRaw, function(item) { return item.name })
        
        countByName_Object = Object();
        
        var countByName_Object = Object.getOwnPropertyNames(countByName).sort();

        
        // Prepare unique categories
        this.categoriesUnique = [];
        
        countByName_Object.forEach(function(_val, _index, _array) {
            var blogCategoryUnique = new BlogCategory(_val, this.topic.url_feed);
            blogCategoryUnique.count = countByName[_val];
            this.categoriesUnique.push(blogCategoryUnique);
        }, this);
        
        
        
//        console.log("BlogProperties_Component.loadTags", this.categoriesRaw);    // TODO REMOVE DEBUG LOG
//        console.log("BlogProperties_Component.loadTags", this.categoriesUnique);    // TODO REMOVE DEBUG LOG
        
//        console.log("BlogProperties_Component.loadTags", countByName);    // TODO REMOVE DEBUG LOG
//        console.log("BlogProperties_Component.loadTags", countByName_Object);    // TODO REMOVE DEBUG LOG
//        console.log("BlogProperties_Component.loadTags", this.categoriesUnique);    // TODO REMOVE DEBUG LOG


    }
    
}



