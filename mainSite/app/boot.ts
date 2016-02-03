import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent}     from './app.component';
import {WAWwebAppComponent}     from './WAWwebapp.component';

import {BackBoneService}     from './core/backBone.service';
import {BlogService}     from './blog/blogs.service';

//import {Header_Component} from './header/header.component';
//import {Subtopic_Component} from './subtopics/subtopics.component';
//import {BlogProperties_Component} from './blog/blogProperties.component';
//import {BlogPosts_Component} from './blog/blogPosts.component';
//import {BlogRecentPosts_Component} from './blog/blogRecentPosts.component';

//bootstrap(AppComponent, [ROUTER_PROVIDERS,BackBoneService]);
//bootstrap(Header_Component, [BackBoneService, ROUTER_PROVIDERS]);
//bootstrap(Subtopic_Component, [ROUTER_PROVIDERS, BackBoneService]);
//bootstrap(BlogProperties_Component, [ROUTER_PROVIDERS, BackBoneService]);
//bootstrap(BlogPosts_Component, [ROUTER_PROVIDERS, BackBoneService]);
//bootstrap(BlogRecentPosts_Component, [ROUTER_PROVIDERS, BackBoneService]);

// Init application
bootstrap(WAWwebAppComponent, [ROUTER_PROVIDERS,BackBoneService,BlogService]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/