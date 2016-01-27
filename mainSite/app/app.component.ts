import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

//import {DialogService} from './dialog.service';

import {WAW_Home__Component} from './home/home.component';

import {BackBoneService}     from './core/backBone.service';
import {BlogService}     from './blog/blogs.service';

@Component({
  selector: 'wawWeb-app',
  templateUrl: "res/templates/app_template.html",
  providers:  [BackBoneService, BlogService],
  directives: [ROUTER_DIRECTIVES]
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
  

  {path: '/home',   name: 'Home',  component: WAW_Home__Component, useAsDefault: true},
  {path: '/topic/...',   name: 'Default',  component: WAW_Home__Component, useAsDefault: false}
  {path: '/topic/:topicName',   name: 'Topic',  component: WAW_Home__Component, useAsDefault: false}

])
    
export class AppComponent { 




}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/