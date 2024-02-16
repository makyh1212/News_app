"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2116],{2116:(v,m,l)=>{l.r(m),l.d(m,{HomePageModule:()=>y});var u=l(6814),a=l(451),f=l(95),p=l(1147),e=l(9212),g=l(553),Z=l(9862);let h=(()=>{var t;class r{getNewsByLanguage(n){return this.httpClient.get(`${g.N.url_base}top-headlines?language=${n}&apiKey=${g.N.api_key}`)}constructor(n){this.httpClient=n}getTopHeadlines(){return this.httpClient.get(`${g.N.url_base}top-headlines?country=cz&apiKey=${g.N.api_key}`)}getArticleByCategory(n){return this.httpClient.get(`${g.N.url_base}top-headlines?country=cz&&category=${n}&apiKey=${g.N.api_key}`)}}return(t=r).\u0275fac=function(n){return new(n||t)(e.LFG(Z.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();function x(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"ion-row",15)(1,"ion-col",16),e._UZ(2,"img",17),e.qZA(),e.TgZ(3,"ion-col",18),e.NdJ("click",function(){const s=e.CHM(o).$implicit,c=e.oxw(2);return e.KtG(c.getDetails(s))}),e.TgZ(4,"ion-label")(5,"p",19),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"p",20),e._uU(11),e.qZA()()()()}if(2&t){const o=r.$implicit;e.xp6(6),e.Oqu(o.author),e.xp6(2),e.Oqu(e.lcZ(9,3,o.publishedAt)),e.xp6(3),e.Oqu(o.title)}}function T(t,r){if(1&t&&(e.TgZ(0,"ion-list"),e.YNc(1,x,12,5,"ion-row",14),e.qZA()),2&t){const o=e.oxw();e.xp6(),e.Q6J("ngForOf",o.filteredArticles)}}function H(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"ion-row",15)(1,"ion-col",16),e._UZ(2,"img",17),e.qZA(),e.TgZ(3,"ion-col",18),e.NdJ("click",function(){const s=e.CHM(o).$implicit,c=e.oxw(2);return e.KtG(c.getDetails(s))}),e.TgZ(4,"ion-label")(5,"p",19),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"p",20),e._uU(11),e.qZA()()()()}if(2&t){const o=r.$implicit;e.xp6(6),e.Oqu(o.author),e.xp6(2),e.Oqu(e.lcZ(9,3,o.publishedAt)),e.xp6(3),e.Oqu(o.title)}}function P(t,r){if(1&t&&(e.TgZ(0,"ion-list"),e.YNc(1,H,12,5,"ion-row",14),e.qZA()),2&t){const o=e.oxw();e.xp6(),e.Q6J("ngForOf",o.topHeadlines)}}const b=[{path:"",component:(()=>{var t;class r{debounce(n,i,s){let c;return(..._)=>{const d=this,C=s&&!c;clearTimeout(c),c=setTimeout(function(){c=null,s||n.apply(d,_)},i),C&&n.apply(d,_)}}filterArticles(n){const i=n.target.value.toLowerCase();this.isSearching=""!==i.trim(),this.filteredArticles=i&&""!==i.trim()?this.topHeadlines.filter(s=>s.title.toLowerCase().includes(i)):this.topHeadlines}switchLanguage(n){this.debounce(()=>{this.articleService.getNewsByLanguage(n).subscribe(i=>{this.topHeadlines=i.articles})},500,!1)()}constructor(n,i,s){this.articleService=n,this.router=i,this.newsService=s,this.filteredArticles=[],this.isSearching=!1,this.selectedCategory="health",this.topHeadlines=[],n.getTopHeadlines().subscribe(c=>{this.topHeadlines.push(...c.articles),console.log(this.topHeadlines)})}getDetails(n){this.router.navigate(["/details"],{queryParams:{author:n.author,content:n.content,description:n.description,publishedAt:n.publishedAt,source:n.source.name,title:n.title,url:n.url,urlToImage:n.urlToImage}})}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(h),e.Y36(p.F0),e.Y36(h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:23,vars:4,consts:[[3,"translucent"],["src","assets/icon/news.png",2,"max-height","25px","margin-right","10px"],["slot","end"],[3,"click"],["src","assets/icon/czech-republic.png","alt","CZ",2,"max-height","20px"],["src","assets/icon/united-kingdom.png","alt","EN",2,"max-height","20px"],["src","assets/icon/germany.png","alt","DE",2,"max-height","20px"],["src","assets/icon/japan.png","alt","JP",2,"max-height","20px"],["value","","placeholder","Vyhledat...",3,"ionChange"],[3,"fullscreen"],["collapse","condense"],["size","large"],[2,"margin-top","20px","margin-bottom","20px"],[4,"ngIf"],["style","background-color: rgb(35, 35, 35); border-radius: 16px; margin: 15px;",4,"ngFor","ngForOf"],[2,"background-color","rgb(35, 35, 35)","border-radius","16px","margin","15px"],["size","4"],["src","/assets/images/news_app.jpg",2,"width","300px","height","100px","object-fit","cover","border-radius","5px"],["size","8",3,"click"],[2,"font-size","small"],[2,"font-size","medium"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._UZ(3,"img",1),e.qZA(),e.TgZ(4,"ion-buttons",2)(5,"ion-button",3),e.NdJ("click",function(){return i.switchLanguage("cz")}),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"ion-button",3),e.NdJ("click",function(){return i.switchLanguage("en")}),e._UZ(8,"img",5),e.qZA(),e.TgZ(9,"ion-button",3),e.NdJ("click",function(){return i.switchLanguage("de")}),e._UZ(10,"img",6),e.qZA(),e.TgZ(11,"ion-button",3),e.NdJ("click",function(){return i.switchLanguage("jp")}),e._UZ(12,"img",7),e.qZA()()(),e.TgZ(13,"ion-toolbar")(14,"ion-searchbar",8),e.NdJ("ionChange",function(c){return i.filterArticles(c)}),e.qZA()()(),e.TgZ(15,"ion-content",9)(16,"ion-header",10)(17,"ion-toolbar")(18,"ion-title",11),e._uU(19,"Zpr\xe1vy"),e.qZA()()(),e._UZ(20,"ion-title",12),e.YNc(21,T,2,1,"ion-list",13)(22,P,2,1,"ion-list",13),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(15),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngIf",i.isSearching),e.xp6(),e.Q6J("ngIf",!i.isSearching))},dependencies:[u.sg,u.O5,a.YG,a.Sm,a.wI,a.W2,a.Gu,a.Q$,a.q_,a.Nd,a.VI,a.wd,a.sr,a.j9,u.uU],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()}];let w=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(b),p.Bz]}),r})(),y=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,f.u5,a.Pc,w]}),r})()}}]);