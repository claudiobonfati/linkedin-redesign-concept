_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{A0vL:function(e,t,i){e.exports={button:"SimpleButton_button__36rvv",noBorderTop:"SimpleButton_noBorderTop__2Un8Y"}},KoaD:function(e,t,i){e.exports={wrapper:"ProfileOverview_wrapper__2G9Ev",topInfoWrapper:"ProfileOverview_topInfoWrapper__1oH4G",name:"ProfileOverview_name__1VWxx",position:"ProfileOverview_position__1ywFG",fullImage:"ProfileOverview_fullImage__336_f",photoWrapper:"ProfileOverview_photoWrapper__2RKKB",info:"ProfileOverview_info__3tQ6t",proTag:"ProfileOverview_proTag__1-EKR",infoWrapper:"ProfileOverview_infoWrapper__2sRgC",value:"ProfileOverview_value__24irL",title:"ProfileOverview_title__2d_V1",fullWidth:"ProfileOverview_fullWidth__3jiWy",infoLeft:"ProfileOverview_infoLeft__1wxiQ",infoRight:"ProfileOverview_infoRight__6mDuR",footerAction:"ProfileOverview_footerAction__KO6bK",socialNetworks:"ProfileOverview_socialNetworks__1cCzX",item:"ProfileOverview_item__2Lspy"}},Uabf:function(e,t,i){"use strict";var a=i("nKUr"),r=i("o0o1"),n=i.n(r),o=i("HaE+"),c=(i("q1tI"),i("UYrT")),l=i("XWzK"),s=i("Q+mk"),d=i("YFqc"),p=i.n(d),j=i("A0vL"),f=i.n(j),m=function(e){return Object(a.jsx)(a.Fragment,{children:e.outside?Object(a.jsx)("a",{className:"".concat(f.a.button," ").concat(e.noBorderTop?f.a.noBorderTop:null),href:e.to,target:"_blank",rel:"noreferrer",children:e.text}):Object(a.jsx)(p.a,{to:e.to,as:e.as,scroll:!1,children:Object(a.jsx)("a",{title:e.text,className:"".concat(f.a.button," ").concat(e.noBorderTop?f.a.noBorderTop:null),children:e.text})})})};m.defaultProps={text:"Click here",to:"/",outside:!1,noBorderTop:!1};var b=m,u=i("jJ+3"),O=function(e){var t=Object(c.e)((function(e){return e.user.profile})),i=Object(c.d)((function(e){return e.user.setProfile}));Object(o.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=5;break}return e.next=3,Object(s.h)("claudiobonfati");case 3:a=e.sent,i(a);case 5:case"end":return e.stop()}}),e)})))();var r=Object(a.jsx)(u.a,{});return!t||t.error||t.loading||(r=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.a,{photo:t.data.photo,name:t.data.name,position:t.data.headline,connections:t.data.connections,views:653,actionMyProfile:e.simple,email:e.simple?null:t.data.email,twitter:e.simple?null:t.data.twitter,skype:e.simple?null:t.data.skype}),!e.simple&&Object(a.jsx)(b,{text:"Connect with me",to:"https://www.linkedin.com/in/claudiobonfati/",outside:!0,noBorderTop:!0})]})),Object(a.jsx)(a.Fragment,{children:r})};O.defaultProps={simple:!1};t.a=O},XWzK:function(e,t,i){"use strict";var a=i("nKUr"),r=(i("q1tI"),i("YFqc")),n=i.n(r),o=i("r7OR"),c=i("e6B8"),l=i.n(c),s=i("KoaD"),d=i.n(s),p=i("1cB3"),j=function(e){return Object(a.jsxs)("div",{className:d.a.wrapper,children:[Object(a.jsxs)("div",{className:"\n        ".concat(d.a.topInfoWrapper,"\n        ").concat(e.pro?d.a.fullImage:"","\n        ").concat(e.pro?d.a.proTag:"","\n      "),children:[Object(a.jsx)("div",{className:d.a.photoWrapper,children:Object(a.jsx)(o.a,{src:e.photo,alt:"Profile"})}),Object(a.jsxs)("div",{className:d.a.info,children:[Object(a.jsx)("div",{className:d.a.name,children:e.name}),Object(a.jsx)("div",{className:d.a.position,children:e.position})]})]}),Object(a.jsxs)("div",{className:d.a.infoWrapper,children:[Object(a.jsxs)("div",{className:"\n          ".concat(e.views?"":d.a.fullWidth," \n          ").concat(d.a.infoLeft,"\n        "),children:[Object(a.jsx)("div",{className:d.a.value,children:Object(p.a)(e.connections)}),Object(a.jsx)("span",{className:d.a.title,children:e.views?"Connections":"Followers"})]}),e.views&&Object(a.jsxs)("div",{className:d.a.infoRight,children:[Object(a.jsx)("div",{className:d.a.value,children:Object(p.a)(e.views)}),Object(a.jsx)("span",{className:d.a.title,children:"Views"})]})]}),e.actionMyProfile&&Object(a.jsx)(n.a,{href:"/me/details",scroll:!1,children:Object(a.jsx)("a",{className:d.a.footerAction,title:"View my profile",children:"View my profile"})}),!e.actionMyProfile&&Object(a.jsxs)("div",{className:d.a.socialNetworks,children:[e.email&&Object(a.jsxs)("a",{title:"Send email",href:"mailto:".concat(e.email),className:d.a.item,children:[Object(a.jsx)(l.a,{icon:"mail",size:"16",strokeWidth:"1",fill:"black"}),e.email]}),e.twitter&&Object(a.jsxs)("a",{title:"Open Twitter profile",href:"https://twitter.com",target:"_blank",rel:"noreferrer",className:d.a.item,children:[Object(a.jsx)(l.a,{icon:"twitter",size:"16",strokeWidth:"1",fill:"black"}),e.twitter]}),e.skype&&Object(a.jsxs)("a",{title:"Open Facebook profile",href:"https://facebook.com",target:"_blank",rel:"noreferrer",className:d.a.item,children:[Object(a.jsx)(l.a,{icon:"facebook",size:"16",strokeWidth:"1",fill:"black"}),e.skype]})]})]})};j.defaultProps={pro:!1,actionMyProfile:!1,views:null,email:null,twitter:null,skype:null},t.a=j},"YrN+":function(e,t,i){"use strict";var a=i("nKUr"),r=(i("q1tI"),i("wAqU")),n=i.n(r),o=function(e){return Object(a.jsx)("div",{className:n.a.wrapper,style:{backgroundImage:"url(".concat("/linkedin-redesign-app","/images/no-result-found.svg)")},children:Object(a.jsxs)("p",{className:"text-center",children:[e.title,e.subtitle&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),e.subtitle]})]})})};o.defaultProps={title:"Nothing found. =/"},t.a=o},qel7:function(e,t,i){"use strict";i.r(t);var a=i("nKUr"),r=i("q1tI"),n=i("ATyU"),o=i("xEQ+"),c=i.n(o),l=i("jJ+3"),s=i("zdLN"),d=i("Uabf"),p=i("HKcl"),j=i("YrN+"),f=i("Q+mk"),m=i("dZBf");t.default=function(){var e=Object(f.l)(0,-1,"1"),t=null;return!e||e.error||e.loading||(t=Object(a.jsx)(a.Fragment,{children:Array.isArray(e.data)&&e.data.length>0&&Object(a.jsx)(a.Fragment,{children:e.data.map((function(t,i){return Object(a.jsx)("div",{className:"".concat(i<e.data.length-1?"border-bottom-gray":"pb-0"," ").concat(0===i?"pb-3":" py-3"),children:Object(a.jsx)(p.a,{link:"/profile/".concat(t.username,"/details"),image:t.photo,imageSize:60,title:t.name,subtitle:t.headline,rightButtonText:"Message",rightButtonLink:"/messages/all",imageOnTop:!0})},t.id)}))})})),Object(r.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(a.jsx)(n.a.div,{className:"w-100",variants:m.a,initial:"initial",animate:"animate",exit:"exit",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("main",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-3 col-md-4 pt-4 d-none d-md-block",children:Object(a.jsx)("div",{className:"sticky-aside-content",children:Object(a.jsx)(c.a,{topOffset:-20,scrollElement:".stickyArea",children:Object(a.jsx)(d.a,{})})})}),Object(a.jsxs)("div",{className:"col-lg-9 col-md-8 py-4",children:[e&&!e.error&&e.loading&&Object(a.jsx)(l.a,{}),e&&e.error&&!e.loading&&Object(a.jsx)("div",{className:"mb-4",children:Object(a.jsx)(j.a,{title:"Yikes... It looks like our server is not responding.",subtitle:"Relax, breath, and try reloading the page."})}),t&&Object(a.jsx)(s.a,{title:"People",rightText:"1,808 connections",children:t})]})]})})})}},wAqU:function(e,t,i){e.exports={wrapper:"NothingFound_wrapper__35NxW"}},wf2f:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/me/contacts",function(){return i("qel7")}])}},[["wf2f",0,2,1,3,5,4,6,7]]]);