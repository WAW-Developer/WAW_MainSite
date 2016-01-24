import {BlogTopic} from '../blog/blogs';


class WAWweb_CONSTANTS {
    
    public static topics = {
        
        "Health": {
            "name": "Health",
            "subTopics": {
                "Physical_Layer" : "Physical_Layer",
                "Psychological_Layer" : "Psychological_Layer"
                }
            },
        
        "Justice": {
            "name": "Justice",
            "subTopics": {
                "HumanRights" : "HumanRights",
                "SocialGroups" : "SocialGroups",
                "Family" : "Family",
                "Community" : "Community",
                "Law" : "Law",
                "Society" : "Society",
                "Defense" : "Defense"
                }
            }
       
        
        
        }
    
    
}


var bTopic_WAW: BlogTopic = {
    "name" : "WAW",
    "description" : "What about World",
    "url_main" : "http://wabout-health.blogspot.com/p/blog-page_9.html",
    "url_blog" : "http://waboutworld.blogspot.com",
    "url_feed" : null,
    
    subtopics : []
    };


// Topic Health and subtopics -----------------------------------------------------------------------|\/|---
var bTopic_Health: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Health.name,
    "description" : "Health",
    "url_main" : "http://wabout-health.blogspot.com/p/blog-page_9.html",
    "url_blog" : "http://wabout-health.blogspot.com",
    "url_feed" : "http://wabout-health.blogspot.com/feeds/posts/default",
    
    subtopics : []
    };


var bTopic_Health_Physical: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Health.subTopics.Physical_Layer,
    "description" : "Physical layer",
    "url_main" : "http://wabout-health.blogspot.com.com/p/what-about-health-phisical.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };


var bTopic_Health_Psychological: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Health.subTopics.Psychological_Layer,
    "description" : "Psychological layer",
    "url_main" : "http://wabout-health.blogspot.com/p/what-about-helath-p.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

bTopic_Health.subtopics.push(bTopic_Health_Physical);
bTopic_Health.subtopics.push(bTopic_Health_Psychological);

bTopic_WAW.subtopics.push(bTopic_Health);
// --------------------------------------------------------------------------------------------------|/\|---


// Topic Justice and subtopics ----------------------------------------------------------------------|\/|---
var bTopic_Justice: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.name,
    "description" : "Justice",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-justice.html",
    "url_blog" : "http://wabout-health.blogspot.com",
    "url_feed" : "http://wabout-health.blogspot.com/feeds/posts/default",
    
    subtopics : []
    };

var bTopic_Justice_HumanRights: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.subTopics.HumanRights,
    "description" : "Human Rights",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-human-rights.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_SocialGroups: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.subTopics.SocialGroups,
    "description" : "Social Groups",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-social-groups.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Family: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.subTopics.Family,
    "description" : "Family",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-family.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Community: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.subTopics.Community,
    "description" : "Community",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-community.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Law: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.subTopics.Law,
    "description" : "Law",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-law.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Society: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.subTopics.Society,
    "description" : "Society",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-society.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Defense: BlogTopic = {
    "name" : WAWweb_CONSTANTS.topics.Justice.subTopics.Defense,
    "description" : "Defense",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-defense.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

bTopic_Justice.subtopics.push(bTopic_Justice_HumanRights);
bTopic_Justice.subtopics.push(bTopic_Justice_SocialGroups);
bTopic_Justice.subtopics.push(bTopic_Justice_Family);
bTopic_Justice.subtopics.push(bTopic_Justice_Community);
bTopic_Justice.subtopics.push(bTopic_Justice_Law);
bTopic_Justice.subtopics.push(bTopic_Justice_Society);
bTopic_Justice.subtopics.push(bTopic_Justice_Defense);

bTopic_WAW.subtopics.push(bTopic_Justice);

// --------------------------------------------------------------------------------------------------|/\|---


/**
 * _BackBoneConfig
 */
export var _BackBoneConfig = bTopic_WAW;

/**
 * BackBoneConfig
 */
export class BackBoneConfig {
    
    public topicStructure: BlogTopic;
    public currentTopic: BlogTopic;
    
    constructor(topicStructure: BlogTopic) {
        this.topicStructure = topicStructure;
        this.currentTopic = this.topicStructure;
    }
    
    public getTopicStructure(): BlogTopic {
        
        return this.topicStructure;
    }
}


