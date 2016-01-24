

/// <reference path="../../lib/google/google.feed.api.d.ts" />



export interface blogTopic_ {
    name: string;
    description: string;
    url_main: string;
    url_blog: string;
    url_feed: string;
    is_active: boolean;
    subtopics: blogTopic_[];

}


export class BlogTopic implements blogTopic_ {
    name: string = "";
    description: string = "";
    url_main: string = null;
    url_blog: string = null;
    url_feed: string = null;
    is_active: boolean = false;
    
    subtopics: BlogTopic[] = [];
    
    constructor() {
    }
    
    
    
}



export class Blogs {
    
    public static test(): void {
        
        var feeds = new google.feeds.Feed("http://wabout-planet.blogspot.com.es/feeds/posts/default");
        
        
        
    }
    
}


/// <reference path="../../lib/google/google.feed.api.d.ts" />



export interface blogTopic_ {
    name: string;
    description: string;
    url_main: string;
    url_blog: string;
    url_feed: string;

}


export class BlogTopic implements blogTopic_ {
    name: string = "";
    description: string = "";
    url_main: string = null;
    url_blog: string = null;
    url_feed: string = null;
    
    subtopics: BlogTopic[] = [];
    
    constructor() {
    }
    
    
    
}



export class Blogs {
    
    public static test(): void {
        
        var feeds = new google.feeds.Feed("http://wabout-planet.blogspot.com.es/feeds/posts/default");
        
        
        
    }
    
}