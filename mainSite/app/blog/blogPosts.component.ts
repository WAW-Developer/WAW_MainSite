

import {NgIf, NgFor} from 'angular2/common';
//import {Component, View, Directive} from 'angular2/core';

import {Component, View, bootstrap, Input, ElementRef, Renderer, NgZone} from 'angular2/core';


import {RouterLink, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';




/// <reference path="../../lib/google/google.feed.api.d.ts" />


import {BlogTopic, BlogPost, Blogs, Pagination} from './blogs';
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
    directives: [NgFor, NgIf, ROUTER_DIRECTIVES ],
    templateUrl: "res/templates/blog/blogPosts_component.html",
    styleUrls: ["res/templates/blog/blogPosts_component.css"]

})
export class BlogPosts_Component implements OnInit {
    
    protected posts: BlogPost[] = [];
    
    protected topic: BlogTopic;
    
    
    protected pagination: Pagination;
    protected paginated_Posts: BlogPost[] = [];
    
    
    protected categoriesUnique: BlogCategory[] = [];
    protected categoriesSelected: BlogCategory[] = [];
    
    protected showFiltered: boolean = false;
    
    protected post_NumberNotFiltered: number = 0;
    protected post_NotFiltered: BlogPost[] = [];
    protected post_Filtered: BlogPost[] = [];
    
    
    /**
     * constructor
     */
    constructor(private _router: Router,
        private _ElementRef: ElementRef,
        private _BackBoneService: BackBoneService,
        private _BlogService: BlogService) {
        
        this.pagination = new Pagination();
//        this.pagination.set_totalItems(100);
        this.pagination.set_itemsForPage(5);
        
        // Subscribe to _emitterPostsLoaded
        this._BlogService._emitterPostsLoaded.subscribe((data) => {
//            console.log("BlogPosts_Component{_emitterPostsLoaded}", data);
//            this.posts = data;
            
            this.loadPosts();
        });
        
        // Subscribe to _emitterCategoriesLoaded
        this._BlogService._emitterCategoriesLoaded.subscribe((data) => {
            this.loadCategories();
        });
        
        // Subscribe to _emitterCategoriesUpdated
        this._BlogService._emitterCategoriesUpdated.subscribe((data) => {
//            console.log("BlogPosts_Component{_emitterPostsLoaded}", data);
//            this.posts = data;
            this.loadCategories();
        });
        
        
        // Subscribe to __emitterMainTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
//            console.log("BlogPosts_Component{__emitterTopicSelected}", data);
            this.load_Topic();

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
                 
                this.animation_LoadingShow();
                this.postsList_Reset();
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
            this.post_NotFiltered = this.posts;
            this.pagination.set_totalItems(this.posts.length);
            this.pagination.set_currentPage(1);
            
            this.paginated_Posts = this.pagination.get_CurrentItems(this.posts);
            
            this.animation_LoadingHide();
            
//            var currentItems = this.pagination.get_CurrentItems(this.posts);
            
//            console.log("BlogPosts_Component.loadPosts");    // TODO REMOVE DEBUG LOG
//            console.log(this.paginated_Posts);    // TODO REMOVE DEBUG LOG
        });
        
        
//        this.posts = this._BlogService.getPosts();
    
    
    }
    
    /**
     * click_FilterPosts
     */
    protected click_FilterPosts() {
        
        if (this.showFiltered) {
            this.filterPostsOff();
        }else{
            this.filterPosts();
        }
    }
    
    /**
     * categoriesSelected_Reset
     */
    protected categoriesSelected_Reset() {
        this.categoriesSelected.forEach(function(category, _i, _array){
            category.is_selected = false;
        });
        
        this.categoriesSelected = [];
        this.filterPostsOff();
        
    }
    
    /**
     * clickCategory
     */
    protected clickCategory(category: BlogCategory) {
        
        if (category.is_selected == undefined) {
            category.is_selected = true;
        } else {
            category.is_selected = !category.is_selected;
        }
        
        this._BlogService.updateCategory(category);
        
    }
    
    /**
     * filterPosts
     */
    protected filterPosts() {
        
        var _filteredPosts = [];
        
        this.categoriesSelected.forEach(function(category, _i_category, _array_category) {
            category.blogPosts.forEach(function(blogPost, _i_blogPosts, _array_blogPosts){
                _filteredPosts.push(blogPost);
            });
        });
        
        
        function _onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        
        _filteredPosts = _filteredPosts.filter(_onlyUnique);
        this.post_Filtered = _filteredPosts;
        if (this.post_NotFiltered.length == 0) {
            this.post_NotFiltered = this.posts;    
        }
        
        this.posts = this.post_Filtered;
        this.showFiltered = true;
        
        this.postsList_Page1();
        
        
//        this.post_Filtered = this.posts.reduce(function(n, post, _i, _array){
//            if (post.tasgs.indexOf()) {
//            }
//            return n;
//            },[]);

        
    }
    
    /**
     * filterPostsOff
     */
    protected filterPostsOff() {
        
        this.posts = this.post_NotFiltered;
        this.postsList_Page1();
        
        this.showFiltered = false;
//        this.loadPosts();
        
        
    }
    
    
    /**
     * loadCategories
     */
    protected loadCategories() {

        this.categoriesUnique = [];
        this._BlogService.getCategories().then(categories => {
            
            this.categoriesUnique = categories;
            
            this.categoriesSelected = this.categoriesUnique.reduce(function(n, category, _i, _array){
                if (category.is_selected) {
                    n.push(category);
                }
                return n;
                
            }, []);
   
            if (this.showFiltered) {
                if (this.categoriesSelected.length == 0) {
                    this.filterPostsOff();
                }else {
                    this.filterPosts();
                }
            }
            
        });
    
    }
    
    
    /**
     * postsList_Reset
     */
    protected postsList_Reset() {
        
        this.posts = [];
        this.paginated_Posts = [];
        this.pagination.set_totalItems(this.posts.length);
        this.pagination_GotoPage(1, false);
    }
    
    
    /**
     * postsList_Reset
     */
    protected postsList_Page1() {
        this.pagination.set_totalItems(this.posts.length);
        this.pagination.set_currentPage(1);
        
        this.paginated_Posts = this.pagination.get_CurrentItems(this.posts);
    }
    
    /**
     * pagination_GotoPage
     */
    protected pagination_GotoPage(pageNumber: number, scrollUP: boolean = true) {
        this.pagination.set_currentPage(pageNumber);
        this.paginated_Posts = this.pagination.get_CurrentItems(this.posts);
        
        if (scrollUP) {
            
            var body_scrollTop = jQuery('body').get(0).scrollTop;
            var element_scrollTop = jQuery(this._ElementRef.nativeElement.parentElement).offset().top;
            var offset = 250;
            var offsetMargin = -53;
            
            
            if (body_scrollTop > element_scrollTop + offset) {
                jQuery('html, body').animate({scrollTop: element_scrollTop + offsetMargin}, 633);
            }
//            window.scrollTo(0, this._ElementRef.nativeElement.parentElement.offsetTop - 53);
        }
        
        
//        
        console.log("BlogPosts_Component.pagination_GotoPage");    // TODO REMOVE DEBUG LOG
//        console.log(this._ElementRef);    // TODO REMOVE DEBUG LOG
        console.log(body_scrollTop);    // TODO REMOVE DEBUG LOG
        console.log(element_scrollTop);    // TODO REMOVE DEBUG LOG
    }
    
    /**
     * pagination_Previous
     */
    protected pagination_Previous() {
        if (this.pagination.currentPage > 1) {
            this.pagination_GotoPage(this.pagination.currentPage - 1);
        }
    }
    
    /**
     * pagination_Next
     */
    protected pagination_Next() {
        if (this.pagination.currentPage < this.pagination.pages.length) {
            this.pagination_GotoPage(this.pagination.currentPage + 1);
        }
    }
    
 
    /**
     * pagination_SetItemsForPage
     */
    protected pagination_SetItemsForPage(itemsForPage: number) {
        
        this.pagination.set_itemsForPage(itemsForPage);
        this.pagination.set_currentPage(1);
        this.paginated_Posts = this.pagination.get_CurrentItems(this.posts);
//        console.log("BlogPosts_Component.pagination_SetItemsForPage");    // TODO REMOVE DEBUG LOG
//        console.log(this.paginated_Posts);    // TODO REMOVE DEBUG LOG
//        console.log(itemsForPage);    // TODO REMOVE DEBUG LOG
    }
    
        
    /**
     * animation_LoadingShow
     */
    protected animation_LoadingShow() {
        
        var canvasParentLayer = jQuery(this._ElementRef.nativeElement).find("nav span.glyphicon.cogLoading");
        canvasParentLayer.fadeIn(900);

    }
    
    /**
     * animation_LoadingHide
     */
    protected animation_LoadingHide() {
        
        var canvasParentLayer = jQuery(this._ElementRef.nativeElement).find("nav span.glyphicon.cogLoading");
        canvasParentLayer.fadeOut(900);

    }
    
}



