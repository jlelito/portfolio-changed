(this["webpackJsonpportfolio-final"]=this["webpackJsonpportfolio-final"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"landing":{"firstName":"Josh","lastName":"Lelito","phoneNumber":"484","bio":"Currently I am working on building and testing Decentralized applications on the Ethereum blockchain.","email":"joshualelito@gmail.com","linkedin":"https://www.linkedin.com/in/joshua-lelito/","github":"https://github.com/jlelito"},"experience":[{"position":"Information Technology Intern","organization":"SAS","aboutWork":"Automated the decommissioning process for virtual hosting environments using Python and PowerShell","fromDate":"May 2019","toDate":"August 2019"},{"position":"Business Analyst","organization":"Haggard Law Information System","aboutWork":"Completed the SDLC for building an information system for a law firm in Greenville, NC","fromDate":"January 2019","toDate":"May 2019"}],"education":[{"university":"East Carolina University","degree":"Management Information Systems","gpa":"3.9 / 4.0 GPA","fromDate":"August 2016","toDate":"May 2020"}],"skills":{"blockchain":["Solidity","Truffle","Ganache"],"webdev":["HTML","CSS","Javascript","PHP","React.js"],"program":["Python","SQL","C#"]},"interests":{"paragraphOne":"Apart from being a web developer, I enjoy researching about blockchain technology and the different use-cases behind it","paragraphTwo":"I\'m also very interested in researching investment opportunities in stocks, commodities, cryptocurrencies, and Forex","paragraphThree":"In my free time I like to run and workout, game, and spend time with friends on campus"},"projects":[{"projectName":"Event Organization","projectDetail":"Create and buy tickets for events using a decentralized application on the Ropsten Test Network","link":"https://github.com/jlelito/events-dapp","image":"event"},{"projectName":"Social Network","projectDetail":"Create posts and tip post authors for their content on the Ropsten Test Network","link":"https://github.com/jlelito/social-network","image":"social-network"}]}')},,,function(e,a,t){e.exports=t.p+"static/media/front-end-web-development.75533b37.jpg"},function(e,a,t){e.exports=t.p+"static/media/program.fde2e1c9.jpg"},,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/loan.2506ae71.jpg"},,function(e,a,t){e.exports=t.p+"static/media/me.92402475.png"},function(e,a,t){e.exports=t.p+"static/media/blockchainImg.0b084059.png"},function(e,a,t){e.exports=t(36)},,,,,function(e,a,t){},,,,,,function(e,a,t){var n={"./event.jpg":33,"./front-end-web-development.jpg":11,"./loan.jpg":17,"./program.jpg":12,"./social-network.jpg":34};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=32},function(e,a,t){e.exports=t.p+"static/media/event.53b0fa1c.jpg"},function(e,a,t){e.exports=t.p+"static/media/social-network.b6b8c6de.jpg"},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),s=t.n(c),i=(t(26),t(2)),l=t(3),o=t(5),m=t(4),d=t(6),u=t(19),p=t.n(u),g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-info fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:"profilePic"}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")))))}}]),a}(n.Component),h=t(7),b=t(14),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).landingData=e.landingData,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-info"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{className:"text-danger",href:"joshualelito@gmail.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin,target:"_blank"},r.a.createElement(h.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.github,target:"_blank"},r.a.createElement(h.a,{icon:b.a})))))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).experience=e.experience,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),v=t(9),N=(t(16),function(e){return r.a.createElement("div",{className:"card text-center shadow"},r.a.createElement("div",{className:"overflow"},r.a.createElement("img",{src:e.imgsrc,alt:"Image 1",className:"card-img-top"})),r.a.createElement("div",{className:"card-body text-dark"},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text text-secondary"},e.cardtext)))}),j=t(20),k=t.n(j),x=t(11),w=t.n(x),O=t(12),y=t.n(O),D=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).skills=e.skills,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},r.a.createElement(N,{title:"Web Development",imgsrc:w.a,cardtext:this.skills.webdev.map((function(e,a){return r.a.createElement("li",null,e,r.a.createElement(h.a,{icon:v.a,color:"green"}))}))}),r.a.createElement(N,{title:"Blockchain",imgsrc:k.a,cardtext:this.skills.blockchain.map((function(e,a){return r.a.createElement("li",null,e,r.a.createElement(h.a,{icon:v.a,color:"green"}))}))}),r.a.createElement(N,{title:"Programming",imgsrc:y.a,cardtext:this.skills.program.map((function(e,a){return r.a.createElement("li",null,e,r.a.createElement(h.a,{icon:v.a,color:"green"}))}))}))))}}]),a}(n.Component),C=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).education=e.education,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),S=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).interests=e.interests,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-3"},this.interests.paragraphTwo),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphThree)))}}]),a}(n.Component),I=function(e){return r.a.createElement("div",{className:"card text-center shadow"},r.a.createElement("div",{className:"overflow"},r.a.createElement("img",{src:e.imgsrc,alt:"Image 1",className:"card-img-top"})),r.a.createElement("div",{className:"card-body text-dark"},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text text-secondary"},e.cardtext),r.a.createElement("a",{href:e.link,target:"_blank",className:"btn btn-outline-success mb-0"},"Github")))},T=(t(17),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).projects=e.projects,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Current Projects"),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},r.a.createElement("div",{className:"row"},this.projects.map((function(e,a){return r.a.createElement(I,{imgsrc:t(32)("./".concat(e.image,".jpg")),title:e.projectName,cardtext:e.projectDetail,link:e.link})}))))))}}]),a}(n.Component)),P=t(8),A=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={landingData:P.landing,experience:P.experience,education:P.education,skills:P.skills,interests:P.interests,projects:P.projects},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(f,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(T,{projects:this.state.projects}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(C,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(D,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(S,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(35);s.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[21,1,2]]]);
//# sourceMappingURL=main.db939a8a.chunk.js.map