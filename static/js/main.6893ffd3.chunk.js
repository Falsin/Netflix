(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{43:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var c,r,i,a=t(4),o=t.n(a),s=t(33),u=t.n(s),j=(t(43),t(26)),l=t(8),b=t(19),d=t(11),p=t(17),O=t(34),f=(Object(O.a)({apiKey:"AIzaSyAs4soSZK1zPYHn_PCoe4diGOYISfQIEL4",authDomain:"netflix-a5529.firebaseapp.com",projectId:"netflix-a5529",storageBucket:"netflix-a5529.appspot.com",messagingSenderId:"470632172734",appId:"1:470632172734:web:f6f0f59b492981550ba2ef"}),t(14)),h=t(7);function L(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)({userName:null,userPicElem:null}),i=Object(d.a)(r,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){var e=Object(f.c)().onAuthStateChanged((function(e){s(e?{userName:Object(f.c)().currentUser.displayName,userPicElem:Object(f.c)().currentUser.photoURL||"/images/profile_placeholder.png"}:{userName:null,userPicElem:null})}));return function(){return e()}}),[o.userName,o.userPicElem]),Object(h.jsxs)(k,{onClick:function(){return c(!t)},children:[Object(h.jsx)(v,{image:o.userPicElem}),Object(h.jsx)("div",{id:"user-name",children:o.userName}),t?Object(h.jsx)(m,{onClick:function(){Object(f.f)(Object(f.c)())},children:"Log out"}):null]})}var x,g,m=p.a.div(c||(c=Object(b.a)(["\n  position: absolute;\n  top: 100%;\n  cursor: pointer;\n  /* display: block;\n  background: #e50914; */\n"]))),v=p.a.div(r||(r=Object(b.a)(["\n  background-image: ",";\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n"])),(function(e){return"url("+e.image+")"})),k=p.a.div(i||(i=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n"])));function w(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){var e=Object(f.c)().onAuthStateChanged((function(e){c(!!e)}));return function(){return e()}}),[t]),Object(h.jsxs)(y,{children:[Object(h.jsx)(j.b,{to:"/",children:Object(h.jsx)("svg",{viewBox:"0 0 111 30",children:Object(h.jsx)("g",{children:Object(h.jsx)("path",{d:"M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"})})})}),t?Object(h.jsx)(L,{}):Object(h.jsx)(C,{to:"/registPage",children:"Log in"})]})}var C=Object(p.a)(j.b)(x||(x=Object(b.a)(["\n  background: #e50914;\n  text-decoration: none;\n  color: white;\n  padding: 1vmin 2vmin;\n"]))),y=p.a.header(g||(g=Object(b.a)(["\n  //max-height: 7vmin;\n  display: flex;\n  justify-content: space-between;\n  padding: 3vmin 4vmin;\n  \n  svg {\n    fill: #e50914;\n    width: 100px;\n  }\n\n  & > div {\n    margin-left: auto;\n  }\n\n  a {\n    display: block;\n    height: 100%;\n  }\n\n/*   a:last-of-type {\n    background: #e50914;\n    text-decoration: none;\n    color: white;\n    padding: 1vmin 2vmin;\n  } */\n"])));function S(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(w,{})})}var E,P=t(0),M=t.n(P),Z=t(2),I=t(1),N=t(31);function A(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(z,{}),Object(h.jsx)("footer",{})]})}function z(){var e=Object(a.useState)({login:null,password:null}),n=Object(d.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],s=i[1];function u(e,n){c(Object(N.a)(Object(N.a)({},t),{},Object(I.a)({},e,n)))}return Object(h.jsx)(B,{err:o,color:"red",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("h1",{children:"Sign in"}),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return u("login",e.target.value)}}),Object(h.jsx)("input",{type:"password",onChange:function(e){return u("password",e.target.value)}}),Object(h.jsx)("button",{type:"button",onClick:function(){return function(e,n){return F.apply(this,arguments)}(t,s)},children:"Sign in"})]}),Object(h.jsx)("button",{onClick:function(){return U(f.b)},children:"Login with Google"}),Object(h.jsx)("button",{onClick:function(){return U(f.a)},children:"Login with Facebook"})]})})}var B=p.a.div(E||(E=Object(b.a)(["\n  \n  fieldset {\n    padding-top: 20px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    border: none;\n\n    &::before {\n      content: '","';\n      color: ",";\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n    }\n  }\n"])),(function(e){return e.err}),(function(e){return e.err?e.color:"green"}));function F(){return(F=Object(Z.a)(M.a.mark((function e(n,t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(Object(f.c)(),n.login,n.password).catch((function(){return t("Wrong login or password!")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return G.apply(this,arguments)}function G(){return(G=Object(Z.a)(M.a.mark((function e(n){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new n,e.next=3,Object(f.e)(Object(f.c)(),t).catch((function(){return null}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return Object(h.jsx)(j.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",element:Object(h.jsx)(S,{})}),Object(h.jsx)(l.a,{path:"/registPage",element:Object(h.jsx)(A,{})})]})})}u.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.6893ffd3.chunk.js.map