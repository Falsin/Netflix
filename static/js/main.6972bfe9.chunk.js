(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{45:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var i,r=t(5),o=t.n(r),c=t(35),a=t.n(c),s=(t(45),t(26)),l=t(8),d=t(13),j=t(12),u=t(29),b=t.n(u),p=t(3);function h(){return Object(p.jsx)(g,{children:function(n){for(var e=[],t=0;t<n.length;t+=4)e.push(Object(p.jsx)("li",{children:Object(p.jsx)("ul",{children:n.slice(t,t+4).map((function(n){return Object(p.jsx)("li",{children:n},b()())}))})},b()()));return e}(["FAQ","Investor Relations","Privacy","Speed Test","Help Center","Jobs","Cookie Preferences","Legal Notices","Account","Ways to Watch","Corporate Information","Only on Netflix","Media Center","Terms of Use","Contact Us"]).map((function(n){return n}))})}var m,g=j.a.ul(i||(i=Object(d.a)(["\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 4vmin;\n\n  & > li {\n    min-width: 160px;\n\n    ul li {\n      margin-top: 2vmin;\n    }\n  }\n\n  & * {\n    list-style: none;\n  }\n"])));function x(){return Object(p.jsxs)(w,{children:[Object(p.jsxs)("p",{children:["Questions? Call ",Object(p.jsx)("a",{href:"tel:8-800-100-9668",children:"8-800-100-9668"})]}),Object(p.jsx)(h,{})]})}var f,O,v,w=j.a.footer(m||(m=Object(d.a)(["\n  color: white;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 8vmin;\n  margin-left: auto;\n  margin-right: auto;\n  border-top: 8px solid #222222;\n  margin-bottom: 6vmin;\n\n  a {\n    text-decoration: none;\n    color: white;\n  }\n"]))),L=t(11),y=t(39),k=(Object(y.a)({apiKey:"AIzaSyAs4soSZK1zPYHn_PCoe4diGOYISfQIEL4",authDomain:"netflix-a5529.firebaseapp.com",projectId:"netflix-a5529",storageBucket:"netflix-a5529.appspot.com",messagingSenderId:"470632172734",appId:"1:470632172734:web:f6f0f59b492981550ba2ef"}),t(16));function C(){var n=Object(r.useState)(!1),e=Object(L.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)({userName:null,userPicElem:null}),c=Object(L.a)(o,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){var n=Object(k.c)().onAuthStateChanged((function(n){s(n?{userName:Object(k.c)().currentUser.displayName,userPicElem:Object(k.c)().currentUser.photoURL||"/images/profile_placeholder.png"}:{userName:null,userPicElem:null})}));return function(){return n()}}),[a.userName,a.userPicElem]),Object(p.jsxs)(E,{onClick:function(){return i(!t)},children:[Object(p.jsx)(P,{image:a.userPicElem}),Object(p.jsx)("div",{id:"user-name",children:a.userName}),t?Object(p.jsx)(N,{onClick:function(){return Object(k.f)(Object(k.c)())},children:"Log out"}):null]})}var S,z,N=j.a.div(f||(f=Object(d.a)(["\n  position: absolute;\n  top: 100%;\n  cursor: pointer;\n"]))),P=j.a.div(O||(O=Object(d.a)(["\n  background-image: ",";\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-right: 2vmin;\n"])),(function(n){return"url("+n.image+")"})),E=j.a.div(v||(v=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  color: white;\n"])));function B(){var n=Object(r.useState)(!1),e=Object(L.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)((function(){var n=Object(k.c)().onAuthStateChanged((function(n){i(!!n)}));return function(){return n()}}),[t]),Object(p.jsxs)(T,{children:[Object(p.jsx)(s.b,{to:"/",children:Object(p.jsx)("svg",{viewBox:"0 0 111 30",children:Object(p.jsx)("g",{children:Object(p.jsx)("path",{d:"M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"})})})}),t?Object(p.jsx)(C,{}):Object(p.jsx)(M,{to:"/registPage",children:"Log in"})]})}var I,M=Object(j.a)(s.b)(S||(S=Object(d.a)(["\n  background: #e50914;\n  text-decoration: none;\n  color: white;\n  padding: 1vmin 2vmin;\n"]))),T=j.a.header(z||(z=Object(d.a)(["\n  z-index: 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 3vmin 4vmin;\n  position: absolute; //\n  width: 100%;        //\n  top: 0;             //\n  \n  svg {\n    fill: #e50914;\n    width: 100px;\n  }\n\n  & > div {\n    margin-left: auto;\n  }\n\n  a {\n    display: block;\n    height: 100%;\n  }\n"]))),Z=t.p+"static/media/backgroundForCover.71c50adc.jpg";function A(n){return Object(p.jsxs)(U,{children:[Object(p.jsx)("h2",{children:"Unlimited movies, TV shows, and more."}),Object(p.jsx)("h3",{children:"Watch anywhere. Cancel anytime."}),Object(p.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."})]})}var F,W,U=j.a.section(I||(I=Object(d.a)(["\n  color: white;           //\n  padding-top: 20vmin;\n  padding-bottom: 4vmin;\n  background-image: url(",');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  z-index: 1;\n  padding-left: 6vmin;     //\n  padding-right: 6vmin;    //\n\n  &::before {\n    content: "";\n    background: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: block;\n    position: absolute;\n    z-index: -1;\n  }\n\n  & * {\n    margin-bottom: 4vmin;\n    text-align: center; \n  }\n\n  h2 {\n    font-size: 8vmin;\n  }\n\n  h3 {\n    font-size: 4vmin;\n  }\n'])),Z),V=j.a.section(F||(F=Object(d.a)(["\n  border-top: 8px solid #222222;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  color: white;\n  margin-bottom: 6vmin;\n  padding-left: 20vmin;\n  padding-right: 20vmin;\n  padding-top: 2vmin;\n\n  & > .textContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    h2 {\n      font-size: 8vmin;\n    }\n  }\n\n  .animationContainer {\n    position: relative;\n\n    & > img {\n      position: relative;\n      width: 100%;\n      height: auto;\n    }\n\n    video {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      height: 54%;\n      width: 73%;\n      top: 47.6%;\n      left: 49.6%;\n      z-index: -1;\n    }\n  }\n\n  & > * {\n    margin-right: 2vmin;\n    margin-left: 2vmin;\n    width: 45%;\n    flex-grow: 1;\n    min-width: 200px;\n  }\n\n  @media screen and (max-width: 1000px) {\n    padding-left: 5vmin;\n    padding-right: 5vmin;\n  }\n"]))),D=t.p+"static/media/laptopForWatchBlock.8e6539e8.png",J=t.p+"static/media/video-for-watchBlock.b27bb59e.m4v";function Q(n){return Object(p.jsxs)(R,{children:[Object(p.jsxs)("div",{className:"textContainer",children:[Object(p.jsx)("h2",{children:"Watch everywhere."}),Object(p.jsx)("p",{children:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."})]}),Object(p.jsxs)("div",{className:"animationContainer",children:[Object(p.jsx)("img",{src:D}),Object(p.jsx)("div",{children:Object(p.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(p.jsx)("source",{src:J,type:"video/mp4"})})})]})]})}var R=Object(j.a)(V)(W||(W=Object(d.a)(["\n  .animationContainer {\n    video {\n      top: 34%;\n      width: 63%;\n      height: 47%;\n    }\n  }\n"]))),G=t.p+"static/media/laptopBackground.0049bc70.png",H=t.p+"static/media/video-for-enjoyBlock.053994fc.m4v";function K(n){return Object(p.jsxs)(V,{children:[Object(p.jsxs)("div",{className:"textContainer",children:[Object(p.jsx)("h2",{children:"Enjoy on your TV."}),Object(p.jsx)("p",{children:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."})]}),Object(p.jsxs)("div",{className:"animationContainer",children:[Object(p.jsx)("img",{src:G}),Object(p.jsx)("div",{children:Object(p.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(p.jsx)("source",{src:H,type:"video/mp4"})})})]})]})}var Y,_=t.p+"static/media/smartphone-for-downloadBlock.063578d5.jpg",X=t.p+"static/media/posterForDownloadBlock.347f4ee3.png",q=t.p+"static/media/download-icon.1ce72c89.gif";function $(){return Object(p.jsxs)(nn,{children:[Object(p.jsxs)("div",{className:"textContainer",children:[Object(p.jsx)("h2",{children:"Download your shows to watch offline."}),Object(p.jsx)("p",{children:"Save your favorites easily and always have something to watch."})]}),Object(p.jsxs)("div",{className:"animationContainer",children:[Object(p.jsx)("img",{src:_}),Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:X}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Stranger Things"}),Object(p.jsx)("p",{children:"Downloading..."})]})]})]})]})}var nn=Object(j.a)(V)(Y||(Y=Object(d.a)(['\n  .animationContainer {\n    display: flex;\n    justify-content: center;\n\n    & > div {\n      display: flex;\n      align-items: center;\n      border-radius: 10px;\n      top: 70%;\n      position: absolute;\n      min-width: 70%;\n      padding-top: 2vmin;\n      padding-bottom: 2vmin;\n      border: solid rgb(64, 64, 64) 2px;\n      background: black;\n\n      img {\n        height: 8vmin;\n        margin-left: 2vmin;\n      }\n\n      div {\n        margin-left: 2vmin;\n\n        h4 {\n          font-size: 2.5vmin;\n        }\n\n        p {\n          font-size: 2vmin;\n          color: #0071eb; \n        }\n      }\n\n      &::after {\n        content: "";\n        background-image: url(',");\n        height: 6vmin;\n        width: 6vmin;\n        display: block;\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n        margin-left: auto;\n        border-radius: 50%;\n        right: 2vmin;\n      }\n    }\n  }\n"])),q);function en(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(A,{}),Object(p.jsx)(K,{}),Object(p.jsx)($,{}),Object(p.jsx)(Q,{})]})}function tn(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(B,{}),Object(p.jsx)(en,{}),Object(p.jsx)(x,{})]})}var rn,on=t(0),cn=t.n(on),an=t(2),sn=t(1),ln=t(32);function dn(n){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(B,{}),Object(p.jsx)(jn,{}),Object(p.jsx)(x,{})]})}function jn(){var n=Object(r.useState)({login:null,password:null}),e=Object(L.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(""),c=Object(L.a)(o,2),a=c[0],s=c[1];function l(n,e){i(Object(ln.a)(Object(ln.a)({},t),{},Object(sn.a)({},n,e)))}return Object(p.jsx)(un,{err:a,color:"red",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("h1",{children:"Sign in"}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("input",{type:"text",onChange:function(n){return l("login",n.target.value)}}),Object(p.jsx)("input",{type:"password",onChange:function(n){return l("password",n.target.value)}}),Object(p.jsx)("button",{type:"button",onClick:function(){return function(n,e){return bn.apply(this,arguments)}(t,s)},children:"Sign in"})]}),Object(p.jsx)("button",{onClick:function(){return pn(k.b)},children:"Login with Google"}),Object(p.jsx)("button",{onClick:function(){return pn(k.a)},children:"Login with Facebook"})]})})}var un=j.a.div(rn||(rn=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  margin-top: 14vmin;\n  margin-bottom: 6vmin;\n\n  form {\n    button {\n      background: white;\n      width: 45%;\n      cursor: pointer;\n    }\n\n    input, button {\n      margin-bottom: 4vmin;\n      padding: 2vmin;\n      border-radius: 2px;\n      border: none;\n      outline: none;\n    }\n\n    & > button:last-of-type {\n      margin-left: 10%;\n    }\n\n    fieldset {\n      padding-top: 20px;\n      display: flex;\n      flex-direction: column;\n      position: relative;\n      border: none;\n\n      button {\n        background: red;\n        width: 100%;\n      }\n\n      &::before {\n        content: '","';\n        color: ",";\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    }\n  }\n"])),(function(n){return n.err}),(function(n){return n.err?n.color:"green"}));function bn(){return(bn=Object(an.a)(cn.a.mark((function n(e,t){return cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(k.d)(Object(k.c)(),e.login,e.password).catch((function(){return t("Wrong login or password!")}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function pn(n){return hn.apply(this,arguments)}function hn(){return(hn=Object(an.a)(cn.a.mark((function n(e){var t;return cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new e,n.next=3,Object(k.e)(Object(k.c)(),t).catch((function(){return null}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function mn(){return Object(p.jsx)(s.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",element:Object(p.jsx)(tn,{})}),Object(p.jsx)(l.a,{path:"/registPage",element:Object(p.jsx)(dn,{})})]})})}a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(mn,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.6972bfe9.chunk.js.map