

import {Component, Directive} from 'angular2/core';
import { Router} from 'angular2/router';




@Component({
    templateUrl: "res/templates/subtopics/subtopics_component.html",
    selector: 'subtopics_waw',
//    directives: [ROUTER_DIRECTIVES],
    host: {
//        'class': 'panel-group'
    }
})

export class Subtopic_Component {
        
    constructor(private _router: Router) {
        //..get the data
    }
}



