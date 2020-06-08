import ORTCalendar from './images/ORT-CE_Calendar-Desktop.png';
import ORTDigitalClosing from './images/ORT-Digital_Closing-Desktop.png';
import ORTHomepageDesktop from './images/ORT-Homepage-Desktop.png';
import ORTRONMap from './images/ORT-RON_Map-Desktop.png';
import ORTHomepageMobile from './images/ORT-Homepage-Mobile.png';
import ORTRONFullPage from './images/ORT-Ron-FullPage.png';
// import ORTStatePage from './images/ORT-StatePage-Desktop.png';
import ORTStatePageTablet from './images/ORT-StatePage-Tablet.png';
import Prototyping from './images/ezJacket-protyping.png';
import StarsLinkEZShare from './images/StarsLink-ezShare.png';
import RepPrototyping from './images/repPages-prototyping.png';
// import RepMobile from './images/repPages-Mobile.png';
// import EZJacketLanding from './images/ezJacket-Landing-Page.png';
// import EZJacketOrder from './images/ezJacket-Order.png';
// import EZJacketList from './images/ezJacket-List.png';
// import EZJacketOrderMobile from './images/ezJacket-Order-Mobile.png';
// import RepDesktop from './images/repPages-Desktop.png';
// import RepDesktopEndorsement from './images/repPages-Desktop-Endorsements.png';
import StarsLinkHomepage from './images/StarsLink-homepage.png';
import Intranet from './images/intranet.png';
import ORTCommercialLifecycle from './images/Commercial_Lifecycle-Base.png';
import ORTCommercialLifecycleFilter from './images/Commercial_Lifecycle-Filter.png';
import ORTCommercialLifecycleStage from './images/Commercial_Lifecycle-Stage.png';
import ORTCommercialLifecycleTwirl from './images/Commercial_Lifecycle-Twirl.png';
import InteractiveWeb from './images/Synergies-Highlight.png';
import InteractiveWebBase from './images/Synergies-Base.png';
import IdeaShuffle from './images/idea-shuffle-dots.png';
import IdeaShuffleText from './images/idea-shuffle-text.png';
import FixItTech from './images/fix-it-tech-grid.png';
import FixItTechHome from './images/fix-it-tech-homepage.png';




const Projects = [
  {
    "name": "Old Republic Title - Corporate Website",
    "url": "#/ort-website",
    "cardImage": ORTCalendar,
    "cardTitle": "Old Republic Title - Corporate Website",
    "techStack": "Razor, HTML, SASS, ASP.NET, CSS, C#, JavaScript, Angular, jQuery, and d3.js",
    "cardDescription": "Developed website features using SASS, CSS, HTML, jQuery, d3.js, and C# to deliver mobile responsive enhancements to support business needs.",
    "content": [
      {"key": "ORTCorpCalendar", "url": ORTCalendar, "format": "desktop"},
      {"key": "ORTUXDescCollab", "text": "The development of many of these features involved both development and UX work to define feature scope with stakeholders.", "format": "description"},
      {"key": "ORTCorpDigitalClosing", "url": ORTDigitalClosing, "format": "desktop"},
      {"key": "ORTCorpHomeDesktop", "url": ORTHomepageDesktop, "format": "desktop"},
      {"key": "ORTRonMap", "url": ORTRONMap, "format": "desktop"},
      {"key": "ORTCorpHomeMobile", "url": ORTHomepageMobile, "format": "mobile"},
      {"key": "ORTCorpResponsiveDesc", "text": "All features developed were responsive for mobile, tablet, desktop, and large format breakpoints", "format": "description"},
      {"key": "ORTCorpRonFullPage", "url": ORTRONFullPage, "format": "fullPage"},
      {"key": "ORTCorpStateTablet", "url": ORTStatePageTablet, "format": "tablet"},
    ]
  },
  {
    "name": "Old Republic Title - UX Design",
    "url": "#/ort-ux-design",
    "cardImage": Prototyping,
    "cardTitle": "Old Republic Title - UX Design",
    "techStack": "Adobe XD, Photoshop, Illustrator, Rapid Prototyping, User Stories",
    "cardDescription": "Designed mockups for new website features while working with key business stakeholders and engineered code to match mockups.",
    "content": [
      {"key": "ORTUXProto1", "url": Prototyping, "format": "desktop"},
      {"key": "ORTUXProtoDesc", "text": "Utilized rapid prototyping to quickly generate ideas to help refine project scope and requirements with stakeholders and developers", "format": "description"},
      {"key": "ORTUXProto2", "url": RepPrototyping, "format": "desktop"},
      {"key": "ORTUXCollabDesc", "text": "Worked with other developers to ensure designs worked within front end styling frameworks such as Bootstrap, Kendo, and Foundation.", "format": "description"},
      {"key": "ORTUXRonFullPage", "url": ORTRONFullPage, "format": "desktop"},
      {"key": "ORTUXRonMap", "url": ORTRONMap, "format": "desktop"},
      {"key": "ORTUXState", "url": ORTStatePageTablet, "format": "tablet"},
      // {"url": StarsLinkEZShare, "format": "desktop"},
      // {"url": RepMobile, "format": "mobile"},
      // {"url": EZJacketLanding, "format": "desktop"},
      // {"url": EZJacketOrder, "format": "desktop"},
      // {"url": EZJacketOrderMobile, "format": "mobile"},
      // {"url": EZJacketList, "format": "desktop"},
      // {"url": RepDesktop, "format": "desktop"},
      // {"url": RepDesktopEndorsement, "format": "desktop"},


    ]
  },
  {
    "name": "Old Republic Title - Ancillary Websites",
    "url": "#/ort-ancillary",
    "cardImage": StarsLinkEZShare,
    "cardTitle": "Old Republic Title - Ancillary Websites",
    "techStack": "HTML, CSS, JavaScript, jQuery, and classic ASP",
    "cardDescription": "Developed enhancements to the layout of other ancillary company websites using HTML, CSS, JavaScript, classic ASP, and Adobe XD.",
    "content": [
      {"key": "ORTAncEzShare", "url": StarsLinkEZShare, "format": "desktop"},
      {"key": "ORTAncStarsLink", "url": StarsLinkHomepage, "format": "desktop"},
      {"key": "ORTAncIntranet", "url": Intranet, "format": "desktop"},

    ]
  },
  {
    "name": "Old Republic Title - Commercial Lifecycle",
    "url": "#/ort-commercial-lifecycle",
    "cardImage": ORTCommercialLifecycle,
    "cardTitle": "Old Republic Title - Commercial Lifecycle",
    "techStack": "HTML, CSS, JavaScript, and d3.js",
    "cardDescription": "Designed and developed interactive features to translate out-dated static PDFs into user friendly interactive content using HTML, CSS, JavaScript, and d3.js.",
    "content": [
      {"key": "ORTCommBase", "url": ORTCommercialLifecycle, "format": "desktop"},
      {"key": "ORTCommFilter", "url": ORTCommercialLifecycleFilter, "format": "desktop"},
      {"key": "ORTCommStage", "url": ORTCommercialLifecycleStage, "format": "desktop"},
      {"key": "ORTCommTwirl", "url": ORTCommercialLifecycleTwirl, "format": "desktop"},

    ]
  },
  {
    "name": "Interactive Relational Web",
    "url": "#/interactive-web",
    "cardImage": InteractiveWeb,
    "cardTitle": "Personal Project - Interactive Relational Web",
    "techStack": "HTML, CSS, Google Apps Script, JavaScript, and d3.js",
    "cardDescription": "Created a personal project to experiment with styling and interactivity with a force directed graph using HTML, CSS, JavaScript and d3.js.",
    "content": [
      {"key": "InteractiveWebHighlight", "url": InteractiveWeb, "format": "desktop"},
      {"key": "InteractiveWebBase", "url": InteractiveWebBase, "format": "desktop"},

    ]
  },
  {
    "name": "Idea Shuffle",
    "url": "#/idea-shuffle",
    "cardImage": IdeaShuffle,
    "cardTitle": "Solo Project - Idea Shuffle",
    "techStack": "AWS Lambda, Alexa Skills Kit, Tone Analyzer API, D3.js, AngularJS, Node.JS, Express.js, MongoDB, HTML5, CSS3, AngularJS Material, and Javascript",
    "cardDescription": "Designed and developed a solo project at Prime Digital Academy for a brainstorming application which also could be interacted with from an Amazon Alexa. Tech utilized included AWS Lambda, Alexa Skills Kit, Tone Analyzer API, D3.js, AngularJS, Node.JS, Express.js, MongoDB, HTML5, CSS3, AngularJS Material, and Javascript",
    "content": [
      {"key": "IdeaShuffleDots", "url": IdeaShuffle, "format": "desktop"},
      {"key": "IdeaShuffleText", "url": IdeaShuffleText, "format": "desktop"},

    ]
  },
  {
    "name": "Fix-It Tech",
    "url": "#/fix-it-tech",
    "cardImage": FixItTech,
    "cardTitle": "Group Project - Fix-It Tech",
    "techStack": "Google Sign-in, Passport, PostgreSQL, Node.JS, Express.js, AngularJS, HTML5, CSS3, AngularJS Material, and JavaScript",
    "cardDescription": "Collaborated with three other development students while at Prime Digital Academy to create a full-stack web application to manage Fix-It Tech events and volunteer information. Tech utilized included Google Sign-in, Passport, PostgreSQL, Node.JS, Express.js, AngularJS, HTML5, CSS3, AngularJS Material, and JavaScript.",
    "content": [
      {"key": "FixItTechGrid", "url": FixItTech, "format": "desktop"},
      {"key": "FixItTechHome", "url": FixItTechHome, "format": "desktop"},

    ]
  },
];

export default Projects;
