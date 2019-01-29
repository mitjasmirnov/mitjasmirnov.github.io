(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(142),c=n(150),d=n(152),l=n(153),u=n(154),p=s.default.h1.withConfig({displayName:"sc-404__MainTitle",componentId:"sc-13o641j-0"})(["line-height:1.5;text-align:center;font-size:3rem;"]),m=s.default.div.withConfig({displayName:"sc-404__Icon",componentId:"sc-13o641j-1"})(["width:150px;margin:0 auto;"]),f=s.default.p.withConfig({displayName:"sc-404__Text",componentId:"sc-13o641j-2"})(["text-align:center;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(c.a,{location:this.props.location,noCover:!0},o.a.createElement(u.a,{title:"Page Not Found"}),o.a.createElement(d.a,{heroImg:"/images/404.jpeg",title:"404"}),o.a.createElement(l.a,null,o.a.createElement(p,null,"404 Page Not Found"),o.a.createElement(m,null,o.a.createElement("img",{src:"/images/ufo-and-cow.svg",alt:"ufo and cow"})),o.a.createElement(f,null,"Looks like you've followed a broken link or entered a URL that doesn't exist on this site.")))},t}(o.a.Component);t.default=h},143:function(e,t){e.exports={siteTitle:"Francisco Santos",siteDescription:"Create your online curriculum in just a few minutes with this starter",authorName:"Francisco Santos",twitterUsername:"_franciscodf",githubUsername:"santosfrancisco",authorAvatar:"/images/avatar.jpeg",authorDescription:"Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />\n    In 2012 I started working as a support technician and I approached the developers.\n    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />\n    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>",skills:[{name:"HTML",level:70},{name:"CSS",level:60},{name:"Javascript",level:50},{name:"NodeJs",level:40},{name:"React",level:60},{name:"Git",level:70}],jobs:[{company:"Lendico",begin:{month:"apr",year:"2018"},duration:null,occupation:"Frontend developer",description:"I integrate the Frontend team responsible for developing and maintaining the online lending platform."},{company:"Anapro",begin:{month:"dec",year:"2016"},duration:"1 yr e 5 mos",occupation:"Fullstack developer",description:"Development and maintenance, corrective and preventive, of web applications for the real estate market."},{company:"Anapro",begin:{month:"set",year:"2012"},duration:"4 yrs e 3 mos",occupation:"Support Technician",description:"Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."}],social:{twitter:"https://twitter.com/_franciscodf",linkedin:"https://www.linkedin.com/in/santos-francisco",github:"https://github.com/santosfrancisco",email:"yoshi.df@gmail.com"},siteUrl:"https://santosfrancisco.github.io/gatsbystarter-cv",pathPrefix:"/mitjasmirnov",siteCover:"/images/cover.jpeg",googleAnalyticsId:"UA-131359385-1",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",headerLinks:[{label:"Francisco Santos",url:"/"}]}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(141),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var d=n(145),l=n.n(d);n.d(t,"PageRenderer",function(){return l.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},146:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(54),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},147:function(e,t,n){},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Francisco Santos",description:"Create your online curriculum in just a few minutes with this starter",author:"Francisco Santos"}}}}},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(143),c=n.n(s),d=n(7),l=n.n(d),u=n(144),p=n(142),m=n(151),f=p.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"dsp75d-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303B;"]),h=p.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"dsp75d-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#25303B;"]),g=p.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"dsp75d-2"})(["display:flex;flex-direction:row;"]),w=Object(p.default)(u.Link).withConfig({displayName:"header__HeaderLink",componentId:"dsp75d-3"})(["position:relative;text-decoration:none;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),y=Object(p.default)(function(e){var t=e.className;return r.a.createElement("a",{className:t,href:"https://github.com/"+c.a.githubUsername,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(m.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"dsp75d-4"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),v=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=c.a.headerLinks;return r.a.createElement(f,null,r.a.createElement(h,null,r.a.createElement(g,null,e.map(function(e,t){return r.a.createElement(w,{to:e.url,key:"header-link-"+t},e.label)})),r.a.createElement(y,null)))},t}(r.a.Component),b=(n(147),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{headerLinks:c.a.headerLinks}),r.a.createElement("div",null,t))});b.propTypes={children:o.a.node.isRequired};var x=b;n.d(t,"a",function(){return x})},152:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(144),c=n(143),d=n.n(c),l=n(142),u=l.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"uqwd53-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=l.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"uqwd53-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),m=l.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"uqwd53-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.className;return o.a.createElement(u,{className:n},o.a.createElement(p,null,o.a.createElement(m,null,t)))},t}(o.a.Component),h=Object(l.default)(f).withConfig({displayName:"hero",componentId:"uqwd53-3"})([""," height:70vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(s.withPrefix)(d.a.siteCover))+");"});n.d(t,"a",function(){return h})},153:function(e,t,n){"use strict";var a=n(142).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-10vqfep-0"})(["position:relative;border-radius:3px;width:80%;max-width:960px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);n.d(t,"a",function(){return a})},154:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(155),d=n.n(c),l=n(144);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(l.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var p=u,m="1025518380";n.d(t,"a",function(){return p})}}]);
//# sourceMappingURL=component---src-pages-404-js-0b3ba5e71a56533e2d0c.js.map