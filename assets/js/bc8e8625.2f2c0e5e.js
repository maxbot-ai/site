"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||s;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:i,a[1]=r;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const s={},a="Dialog Tree",r={unversionedId:"design-guides/dialog-tree",id:"design-guides/dialog-tree",title:"Dialog Tree",description:"Overview",source:"@site/docs/design-guides/dialog-tree.md",sourceDirName:"design-guides",slug:"/design-guides/dialog-tree",permalink:"/design-guides/dialog-tree",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Design Guides",permalink:"/category/design-guides"},next:{title:"Slot Filling",permalink:"/design-guides/slot-filling"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Root Nodes",id:"root-nodes",level:2},{value:"Followup Nodes",id:"followup-nodes",level:2},{value:"Ask follow up questions",id:"ask-follow-up-questions",level:3},{value:"Chaining conditions",id:"chaining-conditions",level:3},{value:"<code>jump_to</code> another Node",id:"jump_to",level:2},{value:"Chaining responses",id:"chaining-responses",level:3},{value:"Chaining conditions",id:"chaining-conditions-1",level:3},{value:"Ask follow up questions",id:"jump-to-listen",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dialog-tree"},"Dialog Tree"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The dialog tree defines what your assistant says in response to customers. A tree is composed of multiple nodes. Each node contains, at a minimum, a condition and a response."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Condition")," specifies the information that must be present in the user input for this node to be used in the conversation. The information is typically a specific intent. It might also be an entity or a state variable value and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Response")," is the utterance that bot uses to respond to the user. The response can also be a list of commands to show an image or a list of options, or trigger programmatic actions.")),(0,i.kt)("p",null,"The dialog tree that you create is processed by your bot from the first node in the tree to the last. As it travels down the tree, if your bot finds a node with a condition that is met, it triggers node's response. You can think of the node as having an if/then construction: if this condition is true, then return this response."),(0,i.kt)("p",null,"Various tree traversal schemas implement various aspects of conversational logic, such as changing the topic of conversation, follow-up questions, etc."),(0,i.kt)("h2",{id:"root-nodes"},"Root Nodes"),(0,i.kt)("p",null,"While single node answers single user question, you should create multiple nodes to answer multiple questions. These nodes are processed by the bot sequentially from the first to the last. As soon as the  bot finds a condition that is met, it triggers response. This completes the processing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.greetings\n    response: Good day to you!\n  - condition: intents.about_you\n    response: My name is MaxBot.\n  - condition: intents.ending\n    response: OK. See you later.\n")),(0,i.kt)("p",null,"Communication can be like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 hello\n\ud83e\udd16 Good day to you!\n\ud83e\uddd1 describe yourself\n\ud83e\udd16 My name is MaxBot.\n\ud83e\uddd1 bye\n\ud83e\udd16 OK. See you later.\n")),(0,i.kt)("p",null,"If the bot could not find a suitable node, then it cannot answer the question, ignores user input and proceeds to wait for the next one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 hello\n\ud83e\udd16 Good day to you!\n\ud83e\uddd1 how are you\n\ud83e\uddd1 what you can do?\n\ud83e\uddd1 bye\n\ud83e\udd16 OK. See you later.\n")),(0,i.kt)("p",null,'Typically, the last node in the list contains an "anything else" condition that is always met, such as ',(0,i.kt)("inlineCode",{parentName:"p"},"true"),'. This allows the bot to respond to absolutely all user input (for example, saying "didn\'t understand you"). Here is an example of such dialog.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.greetings\n    response: Good day to you!\n  - condition: intents.ending\n    response: OK. See you later.\n  # using the condition that is always met\n  - condition: true\n    response: Sorry I don't understand.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 hello\n\ud83e\udd16 Good day to you!\n\ud83e\uddd1 how are you\n\ud83e\udd16 Sorry I don't understand.\n\ud83e\uddd1 what you can do?\n\ud83e\udd16 Sorry I don't understand.\n\ud83e\uddd1 bye\n\ud83e\udd16 OK. See you later.\n")),(0,i.kt)("p",null,"It is important to order the nodes correctly, as they are bypassed in the exact order in which they appear in the tree. Even if the condition is met for several nodes, the response will only triggered for the first one. The following dialog contains two nodes that handle the same user intent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.greetings\n    response: Good day to you!\n  # this node will never triggered\n  - condition: intents.greetings\n    response: Glad to see you!\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 hello\n\ud83e\udd16 Good day to you!\n\ud83e\uddd1 hello again\n\ud83e\udd16 Good day to you!\n")),(0,i.kt)("p",null,'The user will never see the response "Glad to see you!".'),(0,i.kt)("h2",{id:"followup-nodes"},"Followup Nodes"),(0,i.kt)("h3",{id:"ask-follow-up-questions"},"Ask follow up questions"),(0,i.kt)("p",null,"Suppose the user asked a question to the bot, and the bot determined that a certain node should answer. It often happens that the bot cannot immediately answer the question, as it needs additional information from the user. You need to add followup nodes to ask followup questions to the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.menu\n    label: menu\n    response:\n      - text: Which menu do you want to see?\n      # instructs bot to wait for user input\n      - listen: {}\n    followup:\n      - condition: entities.menu.standard\n        response: To see our menu, go to the ...\n      - condition: entities.menu.vegetarian\n        response: To see our vegetarian menu, go to the ...\n      - condition: entities.menu.cake\n        response: To see our cake shop menu, go to the ...\n")),(0,i.kt)("p",null,"You must give a unique label to the parent node so that the bot can persistently store the dialog state associated with that node."),(0,i.kt)("p",null,"The parent node's response ends with the ",(0,i.kt)("inlineCode",{parentName:"p"},"listen")," control command. This command instructs the bot to wait for the user to provide new input that the response elicits. The dialog will not progress until the user provides more input. ",(0,i.kt)("inlineCode",{parentName:"p"},"listen")," is the default command, so you don't have to specify it explicitly. We have done this for clarity."),(0,i.kt)("p",null,"The dialog may looks like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 I want to see a menu\n\ud83e\udd16 Which menu do you want to see?\n\ud83e\uddd1 Cake shop\n\ud83e\udd16 To see our cake shop menu, go to the ...\n")),(0,i.kt)("p",null,"If none of the followup nodes conditions are met, then the bot was unable to extract the additional information it needed from the user's input.\nPerhaps the user wants to talk about something else. In this case, the further actions of the bot are determined by the ",(0,i.kt)("a",{parentName:"p",href:"/design-guides/digressions"},"digression")," mechanism."),(0,i.kt)("h3",{id:"chaining-conditions"},"Chaining conditions"),(0,i.kt)("p",null,"The parent node may determine that all the necessary information is already contained in the user input. In this case followup question is not required, and you should immediatly chain the parent node's condition with the conditions of followup nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.menu and entities.menu\n    label: menu\n    response:\n      - text: Always happy to meet your needs!\n      # process followup nodes without waiting for user input\n      - followup: {}\n    followup:\n      - condition: entities.menu.standard\n        response: To see our menu, go to the ...\n      - condition: entities.menu.vegetarian\n        response: To see our vegetarian menu, go to the ...\n      - condition: entities.menu.cake\n        response: To see our cake shop menu, go to the ...\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"followup")," command is not set by default, so you must specify it explicitly."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"followup")," control command instructs the bot to skip waiting for user input and go directly to the followup nodes instead. The bot processes followup nodes, selects a suitable one for which the condition is met and sends the final response to the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 do you serve desserts?\n\ud83e\udd16 Always happy to meet your needs!\n\ud83e\udd16 To see our cake shop menu, go to the ...\n")),(0,i.kt)("p",null,"You must ensure that one of the followup conditions is met in order to respond to the user. Otherwise, an error will occur, further processing of the nodes will be interrupted and the bot will return to its initial state."),(0,i.kt)("p",null,"In the example, no error will occur, since the parent condition checks ",(0,i.kt)("inlineCode",{parentName:"p"},"entities.menu"),", which will necessarily take one of three values. An error is possible if a new value is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"entities.menu"),", but a followup node is not added to process it."),(0,i.kt)("h2",{id:"jump_to"},(0,i.kt)("inlineCode",{parentName:"h2"},"jump_to")," another Node"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"jump_to")," control command instructs the bot to jump from one node directly to another (target) node. This command takes two arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node")," - the unique label of the target node,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transition")," - specifies how the target node is processed, the options are described below.")),(0,i.kt)("h3",{id:"chaining-responses"},"Chaining responses"),(0,i.kt)("p",null,"The bot does not evaluate the condition of the target node and immediately triggers response. Response targeting is useful for chaining responses of several nodes together. If the target node has another ",(0,i.kt)("inlineCode",{parentName:"p"},"jump_to")," command, that command is run immediately, too."),(0,i.kt)("p",null,"Let's illustrate how the ",(0,i.kt)("inlineCode",{parentName:"p"},"jump_to")," command with the ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," transition works with an order cancellation scenario."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.cancel_order\n    label: ask_order_number\n    response: What is the order number?\n    followup:\n      - condition: entities.order_number\n        response: OK. The order is canceled.\n      - condition: true\n        response:\n          - text: I need the order number to cancel the order for you.\n          - jump_to: {node: ask_order_number, transition: response}\n")),(0,i.kt)("p",null,"After a followup question from the bot, the user does not provide the order number. Then the bot jumps to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ask_order_number")," node and immediately triggers node's response, which causes the bot to ask the followup question again. The bot will keep asking for the order number until it receives it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 I want to cancel my order.\n\ud83e\udd16 What is the order number?\n\ud83e\uddd1 I didn't remember\n\ud83e\udd16 I need the order number to cancel the order for you.\n\ud83e\udd16 What is the order number?\n\ud83e\uddd1 I don't know\n\ud83e\udd16 I need the order number to cancel the order for you.\n\ud83e\udd16 What is the order number?\n\ud83e\uddd1 AB12345\n\ud83e\udd16 OK. The order is canceled.\n")),(0,i.kt)("p",null,"In the example, the last node in the list contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," condition. This ensures that one of the followup nodes triggers during processing. This is not always convenient, since the bot cannot digress and the user loses the opportunity to change the dialog topic. The ",(0,i.kt)("a",{parentName:"p",href:"/design-guides/digressions"},"Digressions")," section will show how to both be able to digress to change the topic and re-question the user when he gives inappropriate/irrelevant answers."),(0,i.kt)("h3",{id:"chaining-conditions-1"},"Chaining conditions"),(0,i.kt)("p",null,"The bot checks first whether the condition of the targeted node evaluates to true."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the condition evaluates to true, the bot processes the target node immediately."),(0,i.kt)("li",{parentName:"ul"},"If the condition does not evaluate to true, the bot moves to the next sibling node of the target node to evaluate its condition, and repeats this process until it finds a node with a condition that evaluates to true."),(0,i.kt)("li",{parentName:"ul"},"If the bot processes all the siblings and none of the conditions evaluate to true, the bot returns to its initial state.")),(0,i.kt)("p",null,"Condition targeting is useful for chaining the conditions of several nodes. Chaining conditions helps to structure larger dialog trees. For example, let's combine two trees from the restaurant menu examples above into a bigger one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.menu and entities.menu\n    response:\n      - text: Always happy to meet your needs!\n      - jump_to: {node: menu_start, transition: condition}\n  - condition: intents.menu\n    label: menu\n    response: Which menu do you want to see?\n    followup:\n      - label: menu_start\n        condition: entities.menu.standard\n        response: To see our menu, go to the ...\n      - condition: entities.menu.vegetarian\n        response: To see our vegetarian menu, go to the ...\n      - condition: entities.menu.cake\n        response: To see our cake shop menu, go to the ...\n")),(0,i.kt)("p",null,"The bot processes the same followup nodes in two ways. In the first case, as the bot requires additional information it asks followup question and processes followup nodes after receiving an answer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 I want to see a menu\n\ud83e\udd16 Which menu do you want to see?\n\ud83e\uddd1 Cake shop\n\ud83e\udd16 To see our cake shop menu, go to the ...\n")),(0,i.kt)("p",null,"In the second case all the necessary information is already contained in the user input, so the bot immediately chains conditions of the same followup nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 do you serve desserts?\n\ud83e\udd16 Always happy to meet your needs!\n\ud83e\udd16 To see our cake shop menu, go to the ...\n")),(0,i.kt)("p",null,"Notice how irrelevant user input is processed differently by the same followup nodes in these two cases."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's okay when you're waiting for a answer and you get user input that can't be processed by followup nodes. Probably the user suddenly change the topic while answering to follow-up question and the bot uses digression to determine it."),(0,i.kt)("li",{parentName:"ul"},"But when you immediately chain conditions the digression is pointless, since the current user input exactly sets the topic. So if none of the chained conditions address the user input, an error will occur, further processing will be interrupted and the bot will return to its initial state.")),(0,i.kt)("p",null,"Avoid using ",(0,i.kt)("inlineCode",{parentName:"p"},"condition")," when adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"jump_to")," command that goes to the node above the current node in the dialog tree. Such transitions can lead to infinite loops. In this case, processing will be interrupted and the bot will return to its initial state."),(0,i.kt)("h3",{id:"jump-to-listen"},"Ask follow up questions"),(0,i.kt)("p",null,"The bot waits for new input from the user, and then begins to process it from the node that you jump to. This option is useful if the source node asks a question, and you want to jump to a separate node to process the user's answer to the question."),(0,i.kt)("p",null,"In the example, the bot can recognize the user's phone number and place a request for a callback."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dialog:\n  - condition: intents.back_call\n    label: back_call\n    response: Enter your phone number so we can call you back.\n    followup:\n      - label: back_call_start\n        condition: entities.phone_number\n        response: We will call you back soon!\n      - condition: true\n        response:\n          - text: Enter a phone number, for example 958-234-3456.\n          - jump_to: {node: back_call, transition: listen}\n  - condition: intents.cancel_order\n    response:\n      - text: |-\n          You can cancel your order by calling 888-123-4567.\n          Or leave your number and we will call you back.\n      - jump_to: {node: back_call_start, transition: listen}\n")),(0,i.kt)("p",null,"The user can directly ask to call back"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 please, call me back\n\ud83e\udd16 Enter your phone number so we can call you back.\n\ud83e\uddd1 958-543-8765\n\ud83e\udd16 We will call you back soon!\n")),(0,i.kt)("p",null,"or as one of the ways to cancel the order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83e\uddd1 I want to cancel my order\n\ud83e\udd16 You can cancel your order by calling 888-123-4567.\n   Or leave your number and we will call you back.\n\ud83e\uddd1 958-543-8765\n\ud83e\udd16 We will call you back soon!\n")))}p.isMDXComponent=!0}}]);