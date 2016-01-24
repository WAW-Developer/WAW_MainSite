

import {Component, Directive} from 'angular2/core';
import { Router} from 'angular2/router';




@Component({
    templateUrl: "res/templates/blog/blogPosts_component.html",
    selector: 'blogPosts_waw',
//    directives: [ROUTER_DIRECTIVES],
    host: {
//        'class': 'panel-group'
    }
})

export class BlogPosts_Component {
        
    constructor(private _router: Router) {
        //..get the data
    }
}



