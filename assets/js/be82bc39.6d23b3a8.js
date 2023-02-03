"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||h[g]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={toc_min_heading_level:2,toc_max_heading_level:2},i="Understanding Digressions",s={unversionedId:"tutorials/digressions",id:"tutorials/digressions",title:"Understanding Digressions",description:"In this tutorial, you see firsthand how digressions work.",source:"@site/docs/tutorials/digressions.md",sourceDirName:"tutorials",slug:"/tutorials/digressions",permalink:"/tutorials/digressions",draft:!1,tags:[],version:"current",frontMatter:{toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Making Reservation",permalink:"/tutorials/reservation"},next:{title:"Design Guides",permalink:"/category/design-guides"}},l={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Temporarily digressing away from node",id:"temporarily-digressing-away-from-node",level:2},{value:"Digressing from a node that is configured not to return to it",id:"digressing-from-a-node-that-is-configured-not-to-return-to-it",level:2},{value:"Digressing to a node that prevent returns",id:"digressing-to-a-node-that-prevent-returns",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understanding-digressions"},"Understanding Digressions"),(0,r.kt)("p",null,"In this tutorial, you see firsthand how digressions work."),(0,r.kt)("p",null,"By the time you finish the tutorial, you will understand how:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"digressions are designed to work,"),(0,r.kt)("li",{parentName:"ul"},"to control digression flow,"),(0,r.kt)("li",{parentName:"ul"},"to test digression settings for a dialog.")),(0,r.kt)("p",null,"The source code of the bot is available on github: ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.int.midvix.ai/projects/COM/repos/maxbot/browse/examples/digression-showcase"},"digression-showcase"),"."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Before you begin, complete the ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/quick-start"},"Quick Start")," tutorial."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.yaml")," file and put ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.int.midvix.ai/projects/COM/repos/maxbot/browse/examples/digression-showcase/bot.yaml"},"source code")," of the example into the file."),(0,r.kt)("p",null,"Change channel settings, for example, we use telegam channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"channels:\n  telegram:\n    api_token: 110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw\n")),(0,r.kt)("h2",{id:"temporarily-digressing-away-from-node"},"Temporarily digressing away from node"),(0,r.kt)("p",null,"Digressions allow users to break away from a dialog branch to temporarily change the topic before they return to the original dialog flow. In this step, you will start to book a restaurant reservation, then digress away to ask for the restaurant's hours. After providing the opening hours information, your assistant will return back to the restaurant booking dialog flow."),(0,r.kt)("p",null,"Run the bot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ maxbot run --bot bot.yaml\n\u2713 Started polling updater... Press 'Ctrl-C' to exit.\n")),(0,r.kt)("p",null,"Open your messenger and try to make a reservation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"Book me a restaurant"),". The bot responds with a prompt for the day to reserve, ",(0,r.kt)("em",{parentName:"li"},"When do you want to go?")),(0,r.kt)("li",{parentName:"ul"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"Tomorrow"),". The bot responds with a prompt for the time to reserve, ",(0,r.kt)("em",{parentName:"li"},"What time do you want to go?")),(0,r.kt)("li",{parentName:"ul"},"You do not know when the restaurant closes, so you ask, ",(0,r.kt)("inlineCode",{parentName:"li"},"What time do you close?")," The bot digresses away from the  restaurant booking node to process the ",(0,r.kt)("strong",{parentName:"li"},"restaurant opening hours")," node. It responds with, ",(0,r.kt)("em",{parentName:"li"},"The restaurant is open from 8:00 AM to 10:00 PM.")," The bot then returns to the restaurant booking node, and prompts you again for the reservation time."),(0,r.kt)("li",{parentName:"ul"},"Optional: To complete the dialog flow, type ",(0,r.kt)("inlineCode",{parentName:"li"},"at 8pm")," for the reservation time and ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," for the number of guests.")),(0,r.kt)("p",null,"Congratulations! You successfully digressed away from and returned to a dialog flow."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You digressed away from a node with slots. Similarly you can digress away from parent node which contains followup nodes. You can try it youself. Just type  ",(0,r.kt)("inlineCode",{parentName:"p"},"Do you have any job openings?")," to trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"job_opportunities")," node and then try to change the topic.")),(0,r.kt)("h2",{id:"digressing-from-a-node-that-is-configured-not-to-return-to-it"},"Digressing from a node that is configured not to return to it"),(0,r.kt)("p",null,"In this step, you will use the digression setting for the parent node to prevent users from returning after digressing away from it, and see how the setting change impacts the dialog flow."),(0,r.kt)("p",null,"In previous section, you saw that after you digressed away from the restaurant booking node to go to the restaurant opening hours node, your assistant went back to the restaurant booking node to continue with the reservation process. In this section, you will digress away from the ",(0,r.kt)("inlineCode",{parentName:"p"},"job_opportunities_for_chef")," node to ask about restaurant opening hours and see that your assistant does not return to where it left off. This happpens because the ",(0,r.kt)("inlineCode",{parentName:"p"},"job_opportunities_for_chef")," node has a ",(0,r.kt)("inlineCode",{parentName:"p"},"after_digression_followup")," setting set to ",(0,r.kt)("inlineCode",{parentName:"p"},"never_return"),"."),(0,r.kt)("p",null,"Let's look at the digression settings for the ",(0,r.kt)("inlineCode",{parentName:"p"},"job_opportunities_for_chef")," node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- condition: entities.job_role.chef\n  label: job_opportunities_for_chef\n  response: >-\n    We have a fabulous cooking staff.\n    How many years of experience do you have?\n# highlight-start\n  settings:\n      after_digression_followup: never_return\n# highlight-end\n  followup:\n    # ...\n")),(0,r.kt)("p",null,"Now, run the bot and open your messenger."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"I'm looking for a job.")," The bot responds by saying, ",(0,r.kt)("em",{parentName:"li"},"We are always looking for talented people to add to our team. What type of job are you interested in?")),(0,r.kt)("li",{parentName:"ul"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"chef"),". The bot triggers ",(0,r.kt)("inlineCode",{parentName:"li"},"job_opportunities_for_chef")," node asks you about your expirience: ",(0,r.kt)("em",{parentName:"li"},"We have a fabulous cooking staff. How many years of experience do you have?")),(0,r.kt)("li",{parentName:"ul"},"Change the topic by typing, ",(0,r.kt)("inlineCode",{parentName:"li"},"What time do you close?"),". The bot digresses away from the ",(0,r.kt)("inlineCode",{parentName:"li"},"job_opportunities_for_chef")," node to process the restaurant opening hours node. It responds with, ",(0,r.kt)("em",{parentName:"li"},"The restaurant is open from 8:00 AM to 10:00 PM.")," The bot then does not return to the ",(0,r.kt)("inlineCode",{parentName:"li"},"job_opportunities_for_chef")," node. So, if you still need a job, you should start the ",(0,r.kt)("inlineCode",{parentName:"li"},"job_opportunities")," topic again.")),(0,r.kt)("p",null,"You successfully prevented the bot from returning to a node after you digressing away from it."),(0,r.kt)("h2",{id:"digressing-to-a-node-that-prevent-returns"},"Digressing to a node that prevent returns"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," control command to prevent a dialog node from returning to the node that your bot digressed away from for the current node to be processed."),(0,r.kt)("p",null,"To demonstrate this configuration, you will change the digression setting for the restaurant hours node. In Step 2, you saw that after you digressed away from the restaurant booking node to go to the restaurant opening hours node, your assistant went back to the restaurant booking node to continue with the reservation process."),(0,r.kt)("p",null,"In this section, you will digress away from the restaurant booking dialog to ask bot to cancel the process and see that your assistant does not return to where it left off."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"intents.cancel")," node uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," control command to prevent returns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - condition: intents.cancel\n    response:\n      - text: Ok, cancelling the task.\n      - end: {}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To engage the restaurant booking dialog node, type, ",(0,r.kt)("inlineCode",{parentName:"li"},"Book me a restaurant"),". The bot responds with a prompt for the day to reserve, ",(0,r.kt)("em",{parentName:"li"},"When do you want to go?")),(0,r.kt)("li",{parentName:"ul"},"Instead of answering this question, ask the bot to exit a process. Type ",(0,r.kt)("em",{parentName:"li"},"I want to end now.")," The bot digresses away from the restaurant booking node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"intents.cancel")," node to answer your question. Your assistant responds with ",(0,r.kt)("em",{parentName:"li"},"Ok, cancelling the task."),".")),(0,r.kt)("p",null,"Unlike in the test above, this time the dialog does not pick up where it left off in the restaurant booking node. The bot does not return to the dialog that was in progress because you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," command to not return."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial you experienced how digressions work, and saw how you can impact the digressions behavior."))}d.isMDXComponent=!0}}]);