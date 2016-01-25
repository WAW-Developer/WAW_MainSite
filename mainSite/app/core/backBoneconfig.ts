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
    "ID" : "WAW",
    "name" : "WAW",
    "description" : "What about World",
    "summary" : "In a world full of new communications facilities every bit transmitted have more probability to be accessed or modified by a third person or machine. <br />" +
        "The objective of WAW is set a couple of information units to prevent undesired data access. This information units may be documents or papers for read and also open source code for provide library, API & interface facilities. <br />" +
        "All the information units of WAW project are free under GNU license.",
    "url_main" : "http://wabout-health.blogspot.com/p/blog-page_9.html",
    "url_blog" : "http://waboutworld.blogspot.com",
    "url_feed" : null,
    
    subtopics : []
    };


// Topic Health and subtopics -----------------------------------------------------------------------|\/|---
var bTopic_Health: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Health.name,
    "name" : "Health",
    "description" : "Health",
    "summary" : "Health is the first of the primary objectives or main themes... <br/>" +
        "The health theme is basic in the human knowledge. All medical discovers should be free for all humans. <br/>" +
        "Is the first step in the main themes list because of fundamental logical conditions. Since the problems that WAW will solve are all related to humans, then the first objective will be provide long and healthy lives to humans.</br>",
    "url_main" : "http://wabout-health.blogspot.com/p/blog-page_9.html",
    "url_blog" : "http://wabout-health.blogspot.com",
    "url_feed" : "http://wabout-health.blogspot.com/feeds/posts/default",
    
    subtopics : []
    };


var bTopic_Health_Physical: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Health.subTopics.Physical_Layer,
    "name" : "Physical layer",
    "description" : "Physical layer",
    "summary" : "The physical layer is the fisrt level in Health.",
    "url_main" : "http://wabout-health.blogspot.com.com/p/what-about-health-phisical.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };


var bTopic_Health_Psychological: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Health.subTopics.Psychological_Layer,
    "name" : "Psychological layer",
    "description" : "Psychological layer", 
    "summary" : "The psycological layer is the second level in Health.",
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
    "ID" : WAWweb_CONSTANTS.topics.Justice.name,
    "name" : "Justice",
    "description" : "Justice",
    "summary" : "The second main theme of WAW is Justice. Is the most abstract theme of all because of the Justice idea only affects to humans and it is because is only a human problem. <br/>" +
    "There exist a lot of documentation about this knowledge but the concept of Justice differs in every culture. Also the nations establish different rights and laws to manage this problem. Some communities believe in Justice derived from and held by the God. <br/>" +
    "Too much points of views for the same problem. The WAW perspective for the Justice theme is based on a simple scientific method. Since the freedom of a human is basic for mental health and the Quality of life is the general well-being of individuals and societies then... the Justice is defined by the procedures that each human may refer in order to maintain the security of the community and preserve the Quality of life.",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-justice.html",
    "url_blog" : "http://wabout-justice.blogspot.com",
    "url_feed" : "http://wabout-justice.blogspot.com/feeds/posts/default",
    
    subtopics : []
    };

var bTopic_Justice_HumanRights: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Justice.subTopics.HumanRights,
    "name" : "Human Rights",
    "description" : "Human Rights",
    "summary" : "The humanity has achieved an important step in order to maintain the world in peace. The core rules that secure human rights has been write… now is time to follow this simple rules.",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-human-rights.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_SocialGroups: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Justice.subTopics.SocialGroups,
    "name" : "Social Groups",
    "description" : "Social Groups",
    "summary" : "The interaction of humans groups or humans between humans has been a basic help for the evolution of human specie.",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-social-groups.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Family: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Justice.subTopics.Family,
    "name" : "Family",
    "description" : "Family",
    "summary" : "Human evolution has a long history but humans don’t live many years. Reproduction is basic for the specie. So babies and children have to be protected and educated. <br/>"+ 
        "Historically humans have been grouped into family units for facilitate this basic property of evolution.",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-family.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Community: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Justice.subTopics.Community,
    "name" : "Community",
    "description" : "Community",
    "summary": "The influence of the communities in Human evolution is derived from the necessity of territory control, knowledge and improve of the quality of live. <br />" +
        "Other of the concepts linked with community are the Social capital and socialization processes. A community is the next step in “social groups” behaviour. <br />",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-community.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Law: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Justice.subTopics.Law,
    "name" : "Law",
    "description" : "Law",
    "summary" : "Human intelligence has and huge spectre of topics and behaviours, each animal has a point of view (interests), an environment (influences) and an adaptation (evolution). <br />" +
        "The necessity of community and family protection and the increment of the quality of life leads to a establish a well defined a common system of rules that “organize” the relations between people. ",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-law.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Society: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Justice.subTopics.Society,
    "name" : "Society",
    "description" : "Society",
    "summary" : "The concept of Society is consequence of the evolution of human intelligence (shared knowledge) and the necessary next step in Social groups facility.",
    "url_main" : "http://wabout-justice.blogspot.com/p/what-about-society.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Justice_Defense: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Justice.subTopics.Defense,
    "name" : "Defense",
    "description" : "Defense",
    "summary" : "The defense is one of the most natural way species has success in “evolution game”.",
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
    public currentSubTopics: BlogTopic[];
    
    constructor(topicStructure: BlogTopic) {
        this.topicStructure = topicStructure;
        this.currentTopic = this.topicStructure;
        this.currentSubTopics = this.currentTopic.subtopics;
    }
    
    public getTopicStructure(): BlogTopic {
        
        return this.topicStructure;
    }
}


