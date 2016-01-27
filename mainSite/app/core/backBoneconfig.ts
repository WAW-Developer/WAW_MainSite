import {BlogTopic} from '../blog/blogs';


class WAWweb_CONSTANTS {

    public static topics = {

        "Health": {
            "name": "Health",
            "subTopics": {
                "Physical_Layer": "Physical_Layer",
                "Psychological_Layer": "Psychological_Layer"
            }
        },

        "Justice": {
            "name": "Justice",
            "subTopics": {
                "HumanRights": "HumanRights",
                "SocialGroups": "SocialGroups",
                "Family": "Family",
                "Community": "Community",
                "Law": "Law",
                "Society": "Society",
                "Defense": "Defense"
            }
        },

        "Planet": {
            "name": "Planet",
            "subTopics": {
                "PlanetFomation": "PlanetFomation",
                "CurrentHome": "CurrentHome",
                "Water": "Water",
                "MoleculesOfLife": "MoleculesOfLife",
                "Cell": "Cell",
                "Bacteria": "Bacteria",
                "Plants": "Plants",
                "Animals": "Animals"
            }
        },
        
        "Information": {
            "name": "Information",
            "subTopics": {
                "Language": "Language",
                "Messages": "Messages",
                "Communication": "Communication",
                "Education": "Education",
                "Knowledge": "Knowledge"
            }
        },
        
        "Energy": {
            "name": "Energy",
            "subTopics": {
                "Acquire": "Acquire",
                "Storage": "Storage",
                "Use": "Use"
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
    "iconImage" : "Caduceus.png",
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
    "iconImage" : "heart27.png",
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
    "iconImage" : "brain2.png", 
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
    "iconImage" : "Scales_of_justice.png", 
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
    "iconImage" : "tall12.png", 
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
    "iconImage" : "group58.png", 
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
    "iconImage" : "family4.png", 
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
    "iconImage" : "people5.png", 
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
    "iconImage" : "law.png",
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
    "iconImage" : "group44.png",
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
    "iconImage" : "shield54.png",
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


// Topic Planet and subtopics ----------------------------------------------------------------------|\/|---
var bTopic_Planet: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.name,
    "name" : "Planet",
    "description" : "Planet",
    "iconImage" : "the25.png",
    "summary" : "\"Our\" planet Earth has been there a long time ago before the living creatures of the Nature appear on it.<br/>" +
        "Of course our planet formation and also our star (the Sun) and galaxy ( Milky Way ) are all objects of the Nature itself and no matter if we don't really understand it. <br />" + 
        "Is necessary to preserve and protect our house, the planet and all the known nature processes and creatures. If we fail there are a lot of possibilities to affect the Nature in a way that we really don't understand and could suppose a lot of problems including the extinguishing of some of the nature processes or creatures.",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-world.html",
    "url_blog" : "http://wabout-planet.blogspot.com",
    "url_feed" : "http://wabout-planet.blogspot.com/feeds/posts/default",
    
    subtopics : []
    };

var bTopic_Planet_PlanetFomation: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.PlanetFomation,
    "name" : "Planet Fomation",
    "description" : "Planet Fomation",
    "iconImage" : "universe.png",
    "summary" : "Since planet Earth has been “always” there for a human... is huge to imagine the way a small set of pieces of universe could create a planet full of live like Earth. <br />" + 
         "Each human culture has it's own version about this concept, of course planets are so big that no one could hide the reality... ",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-planet-formation.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Planet_CurrentHome: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.CurrentHome,
    "name" : "Current Home",
    "description" : "Current Home",
    "iconImage" : "planet2.png",
    "summary" : "After millions of years of planet evolution our house is full of live.",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };


var bTopic_Planet_Water: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.Water,
    "name" : "Water",
    "description" : "Water",
    "iconImage" : "small32.png",
    "summary" : "Water is a molecule that is vital for almost all known forms of life.",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-water.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Planet_MoleculesOfLife: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.MoleculesOfLife,
    "name" : "Molecules of Life",
    "description" : "Molecules of Life",
    "iconImage" : "molecule.png",
    "summary" : "A human is a great Nature creature than contains millions of living units denominated Cells. Inside a Cell occurs a lot of events that include specific chemical transformations. <br />" + 
        "These biochemical reactions provide Cell with usable energy and molecules needed to form its structure and coordinate its activities.",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-molecules-of-life.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };


var bTopic_Planet_Cell: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.Cell,
    "name" : "Cell",
    "description" : "Cell",
    "iconImage" : "nuclear5.png",
    "summary" : "The cell (from Latin cella, meaning \"small room\") is the basic structural, functional, and biological unit of all known living organisms. Cells are the smallest unit of life that can replicate independently,<br />" + 
        "and are often called the \"building blocks of life\". The study of cells is called cell biology.",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-cell.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Planet_Bacteria: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.Bacteria,
    "name" : "Bacteria",
    "description" : "Bacteria",
    "iconImage" : "bacteria1.png",
    "summary" : "The ancestors of modern bacteria were unicellular microorganisms that were the first forms of life to appear on Earth, about 4 billion years ago. For about 3 billion years, all organisms were microscopic, and bacteria and archaea were the dominant forms of life. ",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-bacteria.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Planet_Plants: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.Plants,
    "name" : "Plants",
    "description" : "Plants",
    "iconImage" : "tree101.png",
    "summary" : "One of the big groups of live creatures are identified as Plants. These nature creatures have evolved with particular properties such as being multicellular, possessing cellulose, and having the ability to carry out photosynthesis.<br />" + 
        "All the planet Earth are full of these kind of live, there exists in water (Algae) also in land (land plants) and the special group of Fungus (wherever they are).",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-plants.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Planet_Animals: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Planet.subTopics.Animals,
    "name" : "Animals",
    "description" : "Animals",
    "iconImage" : "monkey3.png",
    "summary" : "Animals are multicellular, eukaryotic organism. All animals creatures are motile and their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. <br />" + 
        "They are heterotrophic organism so cannot fix carbon and uses organic carbon for obtain energy and growth.",
    "url_main" : "http://wabout-planet.blogspot.com/p/what-about-cell.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

bTopic_Planet.subtopics.push(bTopic_Planet_PlanetFomation);
bTopic_Planet.subtopics.push(bTopic_Planet_CurrentHome);
bTopic_Planet.subtopics.push(bTopic_Planet_Water);
bTopic_Planet.subtopics.push(bTopic_Planet_MoleculesOfLife);
bTopic_Planet.subtopics.push(bTopic_Planet_Cell);
bTopic_Planet.subtopics.push(bTopic_Planet_Bacteria);
bTopic_Planet.subtopics.push(bTopic_Planet_Plants);
bTopic_Planet.subtopics.push(bTopic_Planet_Animals);

bTopic_WAW.subtopics.push(bTopic_Planet);

// --------------------------------------------------------------------------------------------------|/\|---


// Topic Information and subtopics ----------------------------------------------------------------------|\/|---
var bTopic_Information: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Information.name,
    "name" : "Information",
    "description" : "Information",
    "iconImage" : "by.png",
    "summary" : "At its most fundamental, information is any propagation of cause and effect within a system. <br />" +
        "After years of human evolution the information achieved, shared and saved is really an unfinished document that describes our global and common knowledge about us and our experiences. The improvements of human systems into advanced societies and connected civilizations are constructed over a Natural mechanisms and patterns evolved at the same time than the knowledge. <br />" +
        "The natural way to synchronize and control systems is to establish a mechanism or any type of pattern that influences the formation or transformation of other patterns. In this sense, there is no need for a conscious mind to perceive, much less appreciate, the pattern. (An example could be a DNA message)",
    "url_main" : "http://wabout-information.blogspot.com/p/what-about-information.html",
    "url_blog" : "http://wabout-information.blogspot.com",
    "url_feed" : "http://wabout-information.blogspot.com/feeds/posts/default",
    
    subtopics : []
    };

var bTopic_Information_Language: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Information.subTopics.Language,
    "name" : "Language",
    "description" : "Language",
    "iconImage" : "google1.png",
    "summary" : "Language is a basic tool for enable information process. Is for this reason that the definition of language is so complicated… ",
    "url_main" : "http://wabout-information.blogspot.com/p/what-about-language.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Information_Messages: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Information.subTopics.Messages,
    "name" : "Messages",
    "description" : "Messages",
    "iconImage" : "edit26.png",
    "summary" : "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. <br />" + 
        "A message may be delivered by various means, including courier, telegraphy, and electronic bus.",
    "url_main" : "http://wabout-information.blogspot.com/p/what-about-messages.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Information_Communication: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Information.subTopics.Communication,
    "name" : "Communication",
    "description" : "Communication",
    "iconImage" : "speech71.png",
    "summary" : "Communication (from Latin commūnicāre, meaning \"to share\") is the activity of conveying information through the exchange of ideas, feelings, intentions, attitudes, expectations, perceptions or commands, as by speech, <br />" + 
        "non-verbal gestures, writings, behavior and possibly by other means such as electromagnetic, chemical or physical phenomena and smell. It is the meaningful exchange of information between two or more participants (machines, organisms or their parts).",
    "url_main" : "http://wabout-information.blogspot.com/p/what-about-communication.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Information_Education: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Information.subTopics.Education,
    "name" : "Education",
    "description" : "Education",
    "iconImage" : "graduation.png",
    "summary" : "Education in its general sense is a form of learning in which the knowledge, skills, and habits of a group of people are transferred from one generation to the next through teaching, training, or research. <br />" + 
        "Education frequently takes place under the guidance of others, but may also be autodidactic. Any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. Education is commonly divided into stages such as preschool, primary school, secondary school and then college, university or apprenticeship.",
    "url_main" : "http://wabout-information.blogspot.com/p/what-about-communication.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Information_Knowledge: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Information.subTopics.Knowledge,
    "name" : "Knowledge",
    "description" : "Knowledge",
    "iconImage" : "robot3.png",
    "summary" : "Knowledge is a familiarity, awareness or understanding of someone or something, such as facts, information, descriptions, or skills, which is acquired through experience or education by perceiving, discovering, or learning. Knowledge can refer to a theoretical or practical understanding of a subject. <br />" + 
        "It can be implicit (as with practical skill or expertise) or explicit (as with the theoretical understanding of a subject); it can be more or less formal or systematic. In philosophy, the study of knowledge is called epistemology; the philosopher Plato famously defined knowledge as \"justified true belief\", though \"well-justified true belief\" is more complete as it accounts for the Gettier problems. <br />" + 
        "However, several definitions of knowledge and theories to explain it exist.",
    "url_main" : "http://wabout-information.blogspot.com/p/what-about-knowledge.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };


bTopic_Information.subtopics.push(bTopic_Information_Language);
bTopic_Information.subtopics.push(bTopic_Information_Messages);
bTopic_Information.subtopics.push(bTopic_Information_Communication);
bTopic_Information.subtopics.push(bTopic_Information_Education);
bTopic_Information.subtopics.push(bTopic_Information_Knowledge);

bTopic_WAW.subtopics.push(bTopic_Information);
// --------------------------------------------------------------------------------------------------|/\|---


// Topic Energy and subtopics ----------------------------------------------------------------------|\/|---
var bTopic_Energy: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Energy.name,
    "name" : "Energy",
    "description" : "Energy",
    "iconImage" : "eco7.png",
    "summary" : "In physics, energy is a property of objects, transferable among them via fundamental interactions, which can be converted in form but not created or destroyed. <br />" +
        "Physics it is the general analysis of nature, conducted in order to understand how the universe behaves <br />" +
        "After this two phrases there is no much information about energy. Seems something magic… but is the basis of the most used physics equations nowadays. The first law of thermodynamics is the part of the good news… the bad news are that make this transformation from one form of energy to another is not as easy as make a magic trick.",
    "url_blog" : "http://wabout-energy.blogspot.com/",
    "url_feed" : "http://wabout-energy.blogspot.com/feeds/posts/default",
    
    subtopics : []
    };

var bTopic_Energy_Acquire: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Energy.subTopics.Acquire,
    "name" : "Acquire",
    "description" : "Acquire",
    "iconImage" : "danger3.png",
    "summary" : "The total energy of a system can be subdivided and classified in various ways. For example, classical mechanics distinguishes between kinetic energy, which is determined by an object's movement through space, and potential energy, which is a function of the position of an object within a field. <br />" + 
        "It may also be convenient to distinguish gravitational energy, electric energy, thermal energy, several types of nuclear energy (which utilize potentials from the nuclear force and the weak force), electric energy (from the electric field), and magnetic energy (from the magnetic field), among others.<br />" + 
        "Many of these classifications overlap; for instance, thermal energy usually consists partly of kinetic and partly of potential energy. Some types of energy are a varying mix of both potential and kinetic energy. ",
    "url_main" : "http://wabout-energy.blogspot.com/p/what.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Energy_Storage: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Energy.subTopics.Storage,
    "name" : "Storage",
    "description" : "Storage",
    "iconImage" : "battery53.png",
    "summary" : "Energy storage is accomplished by devices or physical media that store energy to perform useful processes at a later time. A device that stores energy is sometimes called an accumulator.",
    "url_main" : "http://wabout-energy.blogspot.com/p/what-about-store-energy.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };

var bTopic_Energy_Use: BlogTopic = {
    "ID" : WAWweb_CONSTANTS.topics.Energy.subTopics.Use,
    "name" : "Use",
    "description" : "Use",
    "iconImage" : "triangular42.png",
    "summary" : "Efficient energy use, sometimes simply called energy efficiency, is the goal to reduce the amount of energy required to provide products and services. For example, insulating a home allows a building to use less heating and cooling energy to achieve and maintain a comfortable temperature. <br />" + 
        "Installing fluorescent lights or natural skylights reduces the amount of energy required to attain the same level of illumination compared with using traditional incandescent light bulbs. Compact fluorescent lights use one-third the energy of incandescent lights and may last from 6 to 10 times longer. <br />" + 
        "Improvements in energy efficiency are generally achieved by adopting a more efficient technology or production processes  or by application of commonly accepted methods to reduce energy losses.",
    "url_main" : "http://wabout-energy.blogspot.com/p/what-about-use-energy.html",
    "url_blog" : null,
    "url_feed" : null,
    
    subtopics : []
    };


bTopic_Energy.subtopics.push(bTopic_Energy_Acquire);
bTopic_Energy.subtopics.push(bTopic_Energy_Storage);
bTopic_Energy.subtopics.push(bTopic_Energy_Use);

bTopic_WAW.subtopics.push(bTopic_Energy);
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


