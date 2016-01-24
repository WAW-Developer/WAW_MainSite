

import {Component, Directive} from 'angular2/core';
import { Router} from 'angular2/router';




@Component({
    templateUrl: "res/templates/blog/blogRecentPosts_component.html",
    selector: 'blogRecentPosts_waw',
//    directives: [ROUTER_DIRECTIVES],
    host: {
//        'class': 'panel-group'
    }
})

export class BlogRecentPosts_Component {
        
    constructor(private _router: Router) {
        //..get the data
    }
}



