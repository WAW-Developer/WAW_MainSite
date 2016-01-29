

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

/**
 * BlogCategory
 */
export class BlogCategory implements blogCategory_ {
    
    public name: string = "";
    public domain:  string = "";
    
    public count: number = 0;
    public blogPosts: BlogPost[] = [];
    
    constructor(name: string, domain?: string) {
        
        this.name = name.toLowerCase();
        
        if (domain != null) {
            this.domain = domain;
        }
        
    }
    
}



/**
 * blogPost_
 */
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

/**
 * BlogPost
 */
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
 * Blog
 */
export class Blog {
    
    public ID: string = "";
    public name: string = "";
    public description: string = "";
    
    public blogTopic: BlogTopic;
    public blogPosts: BlogPost[] = [];
    public blogCategories: BlogCategory[] = [];
    
    constructor(blogTopic: BlogTopic){
        this.blogTopic = blogTopic;
    }
   
//    public loadPosts(blogService: BlogService) {
//        this.blogService.getPosts().then(posts => {
//            this.blogPosts = posts;
////            console.log("BlogPosts_Component.loadPosts");    // TODO REMOVE DEBUG LOG
////            console.log(this.posts);    // TODO REMOVE DEBUG LOG
//        });
//    }
    
    
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
 
    /**
     * getPosts
     */
    public static getPosts(topic: BlogTopic, feeds: google.feeds.Feed, _callbackFunction: any): Promise<BlogPost[]>{
        
        if ( feeds == undefined ) {
            feeds = new google.feeds.Feed(topic.url_feed);
        }
        
        feeds.setNumEntries(100);
        
//        var blogPosts = [];
//        var resultPromise = Promise.resolve(blogPosts);
        
        

        
        
        
        feeds.load(function(result){
            console.log("Blogs.getPosts", result); // TODO REMOVE DEBUG LOG
            
//            blogPosts = Blogs.get_BlogPosts_From_GFeedEntries(result.feed.entries);
            });  
        
        feeds.load(_callbackFunction);         
        
        
        
        
//        return resultPromise;
//        return Promise.resolve(blogPosts);
        
        return Blogs.get_BlogPosts_From_GFeedEntries(result.feed.entries);;

        
    }
    
    
    
    /**
     * loadCategories
     */
    public static loadCategories(topic: BlogTopic, blogPosts: BlogPost[], doneCallback: () => void) {

        var categoriesRaw = [];
        
        for (var _i = 0; _i < blogPosts.length; _i++) {
            categoriesRaw = categoriesRaw.concat(
                Blogs.get_BlogCategories_From_BlogPost( blogPosts[_i],topic.url_feed ));
        }
        
        // Order categories
        categoriesRaw.sort(function(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        
//        var numBoys = people.reduce(function(n, person) {
//            return n + (person.gender == 'boy');
//        }, 0);
        
//        homes.sort(function(a, b) {
//            return parseFloat(a.price) - parseFloat(b.price);
//        });
        

        
        /**
         * Find the number of occurrences a given value has in an array
         * http://stackoverflow.com/questions/17313268/find-the-number-of-occurrences-a-given-value-has-in-an-array
         * 
         */
        var _count = function(ary, classifier) {
            return ary.reduce(function(counter, item) {
                var p = (classifier || String)(item);
                counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
                return counter;
            }, {})
        };
        
        var countByName_Object = _count(categoriesRaw, function(item) { return item.name })
        
//        var countByName = countByName_Object.getOwnPropertyNames().sort();
        var countByName = Object.getOwnPropertyNames(countByName_Object).sort();
        
        // Prepare unique categories
        var blogCategoriesUnique: BlogCategory[] = [];
        
        countByName.forEach(function(_val, _index, _array) {
            var blogCategoryUnique = new BlogCategory(_val, topic.url_feed);
            blogCategoryUnique.count = countByName_Object[_val];
            blogCategoriesUnique.push(blogCategoryUnique);
        });
        
        doneCallback(blogCategoriesUnique); // Callback

    }

    
    public static detailForCategories(topic: BlogTopic, posts: BlogPost[], doneCallback: () => void){
        
        var categoriesRawObject = {};
        
        posts.forEach(function(_post, _i, _posts){
        
            _post.tasgs.forEach(function(_tag, __i, _tags){
                
                if (categoriesRawObject[_tag] == undefined) {
                    categoriesRawObject[_tag] = {
                        "posts" : [],
                        "count" : 0
                        };
                }
                categoriesRawObject[_tag].posts.push(_post);
                categoriesRawObject[_tag].count++;
            });
            
        });
        
        // Prepare unique categories
        var countByName = Object.getOwnPropertyNames(categoriesRawObject).sort();
        var blogCategoriesUnique: BlogCategory[] = [];
        
        countByName.forEach(function(_val, _index, _array) {
            var blogCategoryUnique = new BlogCategory(_val, topic.url_feed);
            blogCategoryUnique.count = categoriesRawObject[_val].posts.length;
            blogCategoryUnique.blogPosts = categoriesRawObject[_val].posts;
            blogCategoriesUnique.push(blogCategoryUnique);
        });
        
        console.log("Blogs.detailForCategories", blogCategoriesUnique); // TODO REMOVE DEBUG LOG
        doneCallback(blogCategoriesUnique); // Callback
    }
    
    
    public static test(): void {
        
//        var feeds = new google.feeds.Feed("http://wabout-planet.blogspot.com.es/feeds/posts/default");
        
        
        
    }
    
}


/**
 * BlogsManager
 */
export class BlogsManager {

    
    protected blogs: Blog[] = [];
    
    /**
     * constructor
     */
    constructor(){
    }
    
    /**
     * getBlog
     */
    public getBlog(topic: BlogTopic): Blog{
    
        var result = null;
        
        for (var _i=0; _i < this.blogs.length ; _i++) {
            if (this.blogs[_i].blogTopic.ID == topic.ID){
                result = this.blogs[_i];
                break;
            }
        }
        
        if (result == null) {
            result = new Blog(topic);
            this.blogs.push(result);
        }
        
        return result;
    }   
    
    public getBlog_ByName(topicName: string): Blog{
        
        var result = null;
        
        for (var _i=0; _i < this.blogs.length ; _i++) {
            if (this.blogs[_i].blogTopic.ID == topicName){
                result = this.blogs[_i];
                break;
            }
        }
        
//        
//        try {
//            this.blogTopics.forEach(function(_topic, _i, _topics) {
//                if (_topic.ID == topicName) {
//                    result = _topic;
//                    throw BreakException;
//                }
//
//            });
//        } catch (e) {
//            if (e !== BreakException) throw e;
//        }
        
        return result;
    }
    

    
    
}

