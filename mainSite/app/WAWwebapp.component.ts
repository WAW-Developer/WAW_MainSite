import {Component, ViewChild} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


import {Header_Component} from './header/header.component';
import {WAW_Home__Component} from './home/home.component';
import {Footer_Component} from './footer/footer.component';
import {WAW_Topics__Component} from './topics/topics.component';
import {Subtopic_Component} from './subtopics/subtopics.component';
import {BlogProperties_Component} from './blog/blogProperties.component';
import {BlogPosts_Component} from './blog/blogPosts.component';
import {BlogRecentPosts_Component} from './blog/blogRecentPosts.component';

import {BackBoneService} from './core/backBone.service'
import {BlogService} from './blog/blogs.service';



@Component({
  selector: 'wawWeb-app',
  templateUrl: "res/templates/app_template2.html",
  providers:  [BackBoneService, BlogService],
  directives: [ROUTER_DIRECTIVES,
    Header_Component, 
    WAW_Home__Component,
    Footer_Component, 
    Subtopic_Component, 
    BlogProperties_Component, 
    BlogPosts_Component, 
    BlogRecentPosts_Component]
})
    
@RouteConfig([

//  { // Crisis Center child route
//    path: '/crisis-center/...',
//    name: 'CrisisCenter',
//    component: CrisisCenterComponent,
//    useAsDefault: true
//  },
//
//  {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
//  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
//  {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]},
  
  {path: '/',   name: 'Root',  component: WAW_Home__Component, useAsDefault: true},
  {path: '/home',   name: 'Home',  component: WAW_Home__Component, useAsDefault: false},
  {path: '/topic/...',   name: 'Default',  component: WAW_Topics__Component, useAsDefault: false}
  {path: '/topic/:topicName',   name: 'Topic',  component: WAW_Topics__Component, useAsDefault: false}
  {path: '/topic/:topicName/:subTopicName',   name: 'SubTopic',  component: WAW_Topics__Component, useAsDefault: false}

])
    
export class WAWwebAppComponent implements OnInit, AfterViewInit { 

    
    @ViewChild(Header_Component)
    wawHeader: Header_Component;
    
    @ViewChild(WAW_Home__Component)
    wawHome: WAW_Home__Component;
    
    @ViewChild(Subtopic_Component)
    wawSubtopics: Subtopic_Component;
    

    /**
     * constructor
     */
    constructor(private _BackBoneService: BackBoneService,
        private _BlogService: BlogService) {
        

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
        // viewChild is set
        
        // Subscribe to _emitterMainTopicSelected
        this.wawHeader._emitterMainTopicSelected.subscribe((data) => {
            console.log("WAWwebAppComponent.wawHeader{_emitterMainTopicSelected}", data);   // TODO REMOVE DEBUG LOG
//            this._BackBoneService.selectMainTopic(data);
        });
        
        // Subscribe to _emitterTopicSelected
        this.wawSubtopics._emitterTopicSelected.subscribe((data) => {

            console.log("WAWwebAppComponent.wawHeader{_emitterMainTopicSelected}", data);   // TODO REMOVE DEBUG LOG
//            this._BackBoneService.selectMainTopic(data);
        });
        
        
    }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/