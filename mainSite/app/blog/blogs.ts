

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
    iconImage: string;
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
    iconImage: string = "";
    is_active: boolean = false;
    
    subtopics: BlogTopic[] = [];
    
    constructor() {
    }
    
    
    
}


export interface blogCategory_ {
    
    name: string;
    domain: string;
    
}


export class BlogCategory implements blogCategory_ {
    
    public name: string = "";
    public domain  string = "";
    
    constructor(name: string, domain?: string) {
        
        this.name = name;
        
        if (domain != null) {
            this.domain = domain;
        }
        
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



/**
 * Blogs
 */
export class Blogs {
    
    /**
     * get_BlogPosts_From_GFeedEntries
     */
    public static get_BlogPosts_From_GFeedEntries(entries: Object[]): BlogPost[] {
        
        var blogPosts = [];
        
        for (var _i = 0; _i < entries.length; _i++) {
            blogPosts.push(Blogs.get_BlogPost_From_GFeedEntry(entries[_i]));
        }
        
        return blogPosts;

    }    
    
    /**
     * get_BlogPost_From_GFeedEntry
     */
    public static get_BlogPost_From_GFeedEntry(entry: Object): BlogPost  {

        var blogPost = new BlogPost();
        blogPost.ID = entry.link;
        blogPost.name = entry.title;
        blogPost.publishedDate = entry.publishedDate;
        blogPost.summary = entry.contentSnippet;
        blogPost.content = entry.content;
        blogPost.tasgs = entry.categories;
        blogPost.url_blog = entry.link
        
//        console.log("Blogs.get_BlogPost_From_GFeedEntry", blogPost); // TODO REMOVE DEBUG LOG
//        console.log(entry); // TODO REMOVE DEBUG LOG

        return blogPost;

    } 
    
    /**
    * get_BlogCategories_From_GFeedEntry
    */
    public static get_BlogCategories_From_BlogPost(blogPost: BlogPost, domain?: string): BlogCategory[] {

        var blogCategories = []; 

        for (var _i = 0; _i < blogPost.tasgs.length; _i++) {
            blogCategories.push(new BlogCategory(blogPost.tasgs[_i], blogPost.url_feed));
        }
        
        return blogCategories;
        
    }   
    
    
    /**
     * get_BlogCategories_From_GFeedEntry
     */
    public static get_BlogCategories_From_GFeedEntry(entry: Object, domain?: string): BlogCategory[] {
        
        var blogCategories = []; 

        for (var _i = 0; _i < entry.categories.length; _i++) {
            blogCategories.push(new BlogCategory(entry.categories[_i], domain));
        }
        
        return blogCategories;
        
    }
    
    /**
     * loadPosts
     */
    public static loadPosts(topic: BlogTopic, feeds: google.feeds.Feed, doneCallback: () => void) {
        
        feeds.load(function(result) {
                console.log("BlogService._loadPosts", result); // TODO REMOVE DEBUG LOG
                
                doneCallback(result);
        });
    }
 
    
    
    public static test(): void {
        
//        var feeds = new google.feeds.Feed("http://wabout-planet.blogspot.com.es/feeds/posts/default");
        
        
        
    }
    
}

