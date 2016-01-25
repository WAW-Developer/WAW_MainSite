

/// <reference path="../../lib/google/google.feed.api.d.ts" />



export interface blogTopic_ {
    ID: string;
    name: string;
    description: string;
    summary: string;
    author: string;
    url_main: string;
    url_blog: string;
    url_feed: string;
    is_active: boolean;
    subtopics: blogTopic_[];

}


export class BlogTopic implements blogTopic_ {
    ID: string = "";
    name: string = "";
    description: string = "";
    summary: string = "";
    author: string = "";
    url_main: string = null;
    url_blog: string = null;
    url_feed: string = null;
    is_active: boolean = false;
    
    subtopics: BlogTopic[] = [];
    
    constructor() {
    }
    
    
    
}



export interface blogPost_ {
    ID: string;
    name: string;
    description: string;
    publishedDate: string;
    summary: string;
    content: string;
    url_blog: string;
    url_feed: string;
    tasgs: string[];
    is_active: boolean;
}


export class BlogPost implements blogPost_ {
    ID: string = "";
    name: string = "";
    description: string = "";
    publishedDate: string = "";
    summary: string = "";
    content: string = "";
    url_blog: string = "";
    url_feed: string= "";
    tasgs: string[] = [];
    is_active: boolean = false;
    
    constructor() {
    }
    
}




export class Blogs {
    
    
    public static get_BlogPost_From_GFeedEntry(entry: Object): BlogPost  {

        var blogPost = new BlogPost();
        blogPost.ID = entry.link;
        blogPost.name = entry.title;
        blogPost.publishedDate = entry.publishedDate;
        blogPost.summary = entry.contentSnippet;
        blogPost.content = entry.content;
        blogPost.tasgs = entry.categories;
        blogPost.url_blog = entry.link
        
        console.log("Blogs.get_BlogPost_From_GFeedEntry", blogPost); // TODO REMOVE DEBUG LOG
        console.log(entry); // TODO REMOVE DEBUG LOG

        return blogPost;

    } 
    
    
    public static test(): void {
        
//        var feeds = new google.feeds.Feed("http://wabout-planet.blogspot.com.es/feeds/posts/default");
        
        
        
    }
    
}

