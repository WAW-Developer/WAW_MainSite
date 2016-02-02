
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
export class BlogProperties_Component implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {
        
    
    protected posts: BlogPost[] = [];
    
    protected topic: BlogTopic;
    
    protected categoriesRaw: BlogCategory[] = [];
    protected categoriesUnique: BlogCategory[] = [];
    
    protected _categoriesPieChart: any;
    protected _painting = false;
        
    @ViewChild(NgTabs_Component)
    tabsController: NgTabs_Component;
    

    
    constructor(private _router: Router,
        private _BackBoneService: BackBoneService,
        private _BlogService: BlogService,
        private _ElementRef : ElementRef,
        private _ngZone: NgZone
        ) {
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

        };
       
        
    }
    
    

    
    /**
     * ngOnInit
     */
    ngOnInit() {

    }
    
    
    /**
     * ngAfterViewInit
     */
    ngAfterViewInit() {

        // Subscribe to _emitterTabChangued
        this.tabsController._emitterTabChangued.subscribe((data) => {
//            console.log("BlogPosts_Component.tabsController{_emitterTabChangued}", data);
            
            if (data == "Categories") {
                 this.paintChart();
            }

        }
        
    }
    
    /**
     * ngAfterViewInit
     */
    ngAfterViewChecked() {

    }
    
    /**
     * ngOnChanges
     */
    ngOnChanges() {
        
        
        if (!this._painting) {
            this.paintChart();
        }
        
        
    }
    
    
    /**
     * activateTab
     */
    protected activateTab(event, tabName) {

        //        console.log("activateTab");     // TODO REMOVE DEBUG LOG
        this.tabsController.activateTab(tabName);
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
     * getCategories
     */
    protected getCategories() {

        this.categoriesUnique = [];
        this._BlogService.getCategories().then(categories => {
            this.categoriesUnique = categories;
            
            this.activateTab(null, "Categories");
       
//            setTimeout(this.paintChart(), 3000);
//            this.paintChart();
//            console.log("BlogPosts_Component.loadPosts");    // TODO REMOVE DEBUG LOG
//            console.log(this.posts);    // TODO REMOVE DEBUG LOG
        });
    
    }
    
    
    /**
     * orderCategories
     */
    protected orderCategories(orderType: string) {
        
        
        switch(orderType) {
            
            case "name":
            this.categoriesUnique.sort(function(a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            break;
                
            case "count":
            this.categoriesUnique.sort(function(a, b) {
                if (a.count > b.count) return -1;
                if (a.count < b.count) return 1;
                return 0;
            });
            break;
                
            default:
            break;
        }
        

    }
    
    
    /**
     * paintChart
     */
    protected paintChart() {
//        console.log("BlogPosts_Component.paintChart");    // TODO REMOVE DEBUG LOG
//        console.log(this._ElementRef);    // TODO REMOVE DEBUG LOG


        
        // StartOF _ngZone.runOutsideAngular
        this._ngZone.runOutsideAngular(() => {


            // Get the context of the canvas element we want to select
            var canvasParentLayer = jQuery(this._ElementRef.nativeElement).find("div.panel.panel-default.Chart");
            var canvasLayer = jQuery(this._ElementRef.nativeElement).find("div.panel.panel-default.Chart canvas");
            var ctx = canvasLayer.get(0).getContext("2d");
    
    
            canvasLayer.get(0).width = canvasParentLayer.get(0).offsetWidth - 30;
            canvasLayer.get(0).Height = canvasParentLayer.get(0).offsetHeight - 30;
    //        canvasLayer.get(0).width = canvasParentLayer.get(0).clientWidth;
    //        canvasLayer.get(0).height = canvasParentLayer.get(0).clientHeight;
            
    
            
    //        if (canvasLayer.get(0).width < 250) {
    //            canvasLayer.get(0).width = 250;
    //        }
    //        
    //        if (canvasLayer.get(0).height < 250) {
    //            canvasLayer.get(0).height = 250;
    //        }
            
            this._painting = true;
            
            console.log(canvasParentLayer);    // TODO REMOVE DEBUG LOG
    //        console.log(canvasLayer);    // TODO REMOVE DEBUG LOG
    //        console.log(ctx);    // TODO REMOVE DEBUG LOG
            
            
            
            // For a pie chart
            
            this.orderCategories("count");
            
            var charColors = [
                    { 
                        color:  "#F7464A", 
                        highlight: "#FF5A5E" 
                    },  
                    { 
                        color:  "#CDDC39", 
                        highlight: "#E6EE9C" 
                    },
                    { 
                        color:  "#00897B", 
                        highlight: "#4DB6AC" 
                    },
                    { 
                        color:  "#46BFBD", 
                        highlight: "#5AD3D1" 
                    },
                    { 
                        color:  "#FDB45C", 
                        highlight: "#FFC870" 
                    },
                    { 
                        color:  "#4D5360", 
                        highlight: "#616774" 
                    }
                
                ];
            
            
            var catInFire = 5;
            var chartData = [];
            var currentCategoriesCount = 0;
            
            for (var _i= 0; _i < catInFire ; _i++) {
                
                var charItemtData = {
                    value: this.categoriesUnique[_i].count,
                    color: charColors[_i].color,
                    highlight: charColors[_i].highlight,
                    label: this.categoriesUnique[_i].name
                    };
                
                chartData.push(charItemtData);
                currentCategoriesCount++;
            }
            
            chartData.push({
                value: this.categoriesUnique.length - currentCategoriesCount,
                color: charColors[catInFire].color,
                highlight: charColors[catInFire].highlight,
                label: "Others"
            });
            
            
    //        var chartData = [
    //            {
    //                value: 300,
    //                color: "#F7464A",
    //                highlight: "#FF5A5E",
    //                label: "Red"
    //            },
    //            {
    //                value: 50,
    //                color: "#46BFBD",
    //                highlight: "#5AD3D1",
    //                label: "Green"
    //            },
    //            {
    //                value: 100,
    //                color: "#FDB45C",
    //                highlight: "#FFC870",
    //                label: "Yellow"
    //            }
    //        ];
            
    
            var chartOptions = {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke: true,
    
                //String - The colour of each segment stroke
                segmentStrokeColor: "#fff",
    
                //Number - The width of each segment stroke
                segmentStrokeWidth: 2,
    
                //Number - The percentage of the chart that we cut out of the middle
                percentageInnerCutout: 50, // This is 0 for Pie charts
    
                //Number - Amount of animation steps
                animationSteps: 100,
    
                //String - Animation easing effect
                animationEasing: "easeOutBounce",
    
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,
    
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false,
    
                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    
            };
            
            
            // Update Chart
            if (this._categoriesPieChart != null) {
                this._categoriesPieChart.destroy();
            }
            
            
                
            
            this._categoriesPieChart = new Chart(ctx).Pie(chartData,chartOptions);
            
    //        var categoriesPieChart = new Chart(ctx).Pie(chartData,chartOptions);
                
                
                
            // reenter the Angular zone and display done
            this._ngZone.run(() => {
                this._painting = false;
//                    this._emitterPostsLoaded.emit(this.posts);  // Notify _emitterPostsLoaded 
            });
            
            
        }); // EndOF _ngZone.runOutsideAngular

        
    }

    
}



