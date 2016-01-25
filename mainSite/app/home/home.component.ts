
import {Component}   from 'angular2/core';

import {Router, RouteParams} from 'angular2/router';
//import {RouteConfig, RouterOutlet} from 'angular2/router';

import {BackBoneService} from '../core/backBone.service'

import {BlogTopic} from '../blog/blogs'


@Component({

    templateUrl: "res/templates/home/home_component.html"
    
})  


export class WAW_Home__Component implements OnInit{


    public topic: BlogTopic;
//    private _BackBoneService: BackBoneService;
    
    
    constructor(
        private _router: Router,
        routeParams: RouteParams,
        private _BackBoneService: BackBoneService
    ) {
        
//        this._BackBoneService = BackBoneService.getInstance();



    }

    
  protected doTest() {
        console.log("doTest");    // TODO REMOVE DEBUG LOG
        console.log(this.topic);    // TODO REMOVE DEBUG LOG
      
        this._BackBoneService.test_Message("A simple test message");
  }
   

  ngOnInit() {

      this._BackBoneService.getConfig().then(config => this.topic = config);


          // Subscribe to _emitterTopicSelected
        this._BackBoneService.__emitterTopicSelected.subscribe((data) => {
//            this.selectedTopic = [];
//            this.selectedTopic = data;
//            this.subtopics = this.selectedTopic.subtopics;
            console.log("WAW_Home__Component{_emitterTopicSelected}", data);
//            this.load_selectedTopic();
            
            
            this._router.navigate( ['Topic', { topicName: data.name }] );

            
            //            this.load_mainTopics();
        });
      
      
//      console.log(config);    // TODO REMOVE DEBUG LOG
      console.log(this.topic);    // TODO REMOVE DEBUG LOG
      console.log(this.routeParams);    // TODO REMOVE DEBUG LOG
      
      
  }
    
        
}


