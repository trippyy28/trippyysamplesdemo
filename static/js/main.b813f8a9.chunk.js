(this["webpackJsonpableton-templets"]=this["webpackJsonpableton-templets"]||[]).push([[0],{27:function(e,t,r){e.exports={audioPlayer:"styles_audioPlayer__2uiC3",fowardBackward:"styles_fowardBackward__2Nl-h",playPause:"styles_playPause__3clm1",play:"styles_play__38WIX",currentTime:"styles_currentTime__2n0Xb",duration:"styles_duration__3aJwZ",divProgressBar:"styles_divProgressBar__3Pt8u",progressBar:"styles_progressBar__3WAyJ"}},60:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(23),i=r.n(c),s=(r(60),r(47),r(8)),o=r(13),l=r(14),u=r(41),d=r.n(u),b=r(9),j=r(54),p=r(10),m=r.n(p),h=r(15),x=r(19),O=[{genre:"House",price:"1",id:"1",title:"Deep-House Vibes",img:"https://github.com/trippyy28/trippyysamplesdemo/blob/master/src/imgs/DeepHouseVibes.png?raw=true",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Deep-House Vibes is a ..."},{genre:"Future-Bass",price:"1",id:"2",title:"Trippy Future Bass",img:"https://github.com/trippyy28/trippyysamplesdemo/blob/master/src/imgs/TrippyFutureBass.png?raw=true",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2015-09-25_-_Old_Video_Game_Music_1_-_David_Fesliyan.mp3",moreInfo:"Trippy Future Bass is a..."},{genre:"House",price:"1",id:"3",title:"Groove House",img:"https://github.com/trippyy28/trippyysamplesdemo/blob/master/src/imgs/8BITTECHNO2.png?raw=true",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen.mp3",moreInfo:"Groove House is a..."},{genre:"Minimal",price:"1",id:"4",title:"Space Groove",img:"https://github.com/trippyy28/trippyysamplesdemo/blob/master/src/imgs/SpaceGroove29.png?raw=true",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-09-29_-_Silly_Feet_-_FesliyanStudios.com_-_David_Renda.mp3",moreInfo:"Space Groove is a..."},{genre:"Minimal",price:"1",id:"5",title:"8bit Minimal",img:"https://github.com/trippyy28/trippyysamplesdemo/blob/master/src/imgs/8bit%20minimal2.png?raw=true",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen.mp3",moreInfo:"8bit Minimal is a..."},{genre:"Techno",price:"1",id:"6",title:"8bit Techno",img:"https://github.com/trippyy28/trippyysamplesdemo/blob/master/src/imgs/8bit%20techno22.png?raw=truehttps://github.chttps://github.com/trippyy28/trippyysamplesdemo/blob/master/src/imgs/8bit%20techno22.png?raw=trueom/trippyy28/trippyysamplesdemo/blob/master/src/imgs/8bit%20techno.png?raw=true",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda.mp3",moreInfo:"8bit Techno is a.."}],f=Object(n.createContext)(null),g=window.firebase.initializeApp({apiKey:"AIzaSyD7fjE2toONwUbnZ5UP9Mtv4op7Ci_RQlY",authDomain:"trippyysamples.firebaseapp.com",projectId:"trippyysamples",storageBucket:"trippyysamples.appspot.com",messagingSenderId:"212952911971",appId:"1:212952911971:web:b393b72ac34790fe702856",measurementId:"G-30YNMPN9QS"}),v=window.firebase.firestore.FieldValue;function y(e){return w.apply(this,arguments)}function w(){return(w=Object(x.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.firestore().collection("user").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return e.data().length>0})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=r(3),P=a.a.createContext();function S(){return Object(n.useContext)(P)}function N(e){var t=e.children,r=Object(n.useState)([]),a=Object(s.a)(r,2),c=a[0],i=a[1],o=(Object(n.useContext)(f).user,Object(n.useState)([])),l=Object(s.a)(o,2),u=l[0],d=l[1],b=O;Object(n.useEffect)((function(){try{(function(){var e=Object(x.a)(m.a.mark((function e(){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("users").doc().collection("products").get();case 3:r=e.sent,d(r.docs.map((function(e){return Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){console.error("error")}}),[]);var p=c.reduce((function(e,t){return e+t.price*t.qty}),0),v={cartItems:c,onAdd:function(e){var t=c.find((function(t){return t.id===e.id}));i(t?c.map((function(r){return r.id===e.id?Object(h.a)({},t):r})):[].concat(Object(j.a)(c),[Object(h.a)(Object(h.a)({},e),{},{qty:1})]))},onRemove:function(e){var t=c.find((function(t){return t.id===e.id}));1===t.qty?i(c.filter((function(t){return t.id!==e.id}))):i(c.map((function(r){return r.id===e.id?Object(h.a)(Object(h.a)({},t),{},{qty:t.qty-1}):r})))},itemsPrice:p,totalPrice:p,setCartItems:i,productsData:b,userProducts:u};return Object(_.jsx)(P.Provider,{value:v,children:t})}var k=Object(b.g)((function(e){var t=S().productsData,r=e.match.params.id;return Object(_.jsx)("div",{children:Object(_.jsx)("h1",{children:t.find((function(e){return e.id===r})).moreInfo})})})),C=r(18),I=a.a.createContext();function U(){return Object(n.useContext)(I)}function A(e){var t,r,a=e.children,c=Object(n.useState)(null),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(n.useState)(0),d=Object(s.a)(u,2),b=d[0],j=d[1],p=Object(n.useState)(!1),h=Object(s.a)(p,2),O=h[0],f=h[1],g=Object(n.useState)(0),v=Object(s.a)(g,2),y=v[0],w=v[1],P=Object(n.useRef)(),S=Object(n.useRef)(),N=Object(n.useRef)();function k(){return(k=Object(x.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:return r=O,e.next=5,f(!r);case 5:r?(P.current.pause(),cancelAnimationFrame(N.current)):(P.current.play(),N.current=requestAnimationFrame(C));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=Math.floor(P.current.duration);j(e),S.current.max=e}),[null===P||void 0===P||null===(t=P.current)||void 0===t?void 0:t.loadedmetadata,null===P||void 0===P||null===(r=P.current)||void 0===r?void 0:r.readyState]);var C=function e(){S.current.value=P.current.currentTime,U(),N.current=requestAnimationFrame(e)},U=function(){S.current.style.setProperty("--seek-before-width","".concat(S.current.value/b*100,"%")),w(S.current.value)},A={audioUrl:o,togglePlayPauseAndAddAudio:function(e){return k.apply(this,arguments)},isPlaying:O,audioPlayer:P,setIsPlaying:f,duration:b,currentTime:y,progressBar:S,changeRange:function(){P.current.currentTime=S.current.value,U()},whilePlaying:C};return Object(_.jsx)(I.Provider,{value:A,children:a})}var E,F,T,B,D,R,H,M,z,q,J=r(25),G=l.a.div(E||(E=Object(o.a)(["\n  border: 1px solid black;\n  border-radius: 25px;\n  padding: 10px;\n"]))),L=l.a.div(F||(F=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  font-family: highgate, sans-serif;\n  font-weight: bolder;\n  font-style: italic;\n  align-items: center;\n  flex-direction: column;\n  border: 1px solid;\n  border-radius: 25px;\n  box-shadow: 5px 5px lightblue;\n  margin: 2px;\n  transition: 1s;\n  &:hover {\n    box-shadow: 5px 5px gray;\n  }\n"]))),V=l.a.div(T||(T=Object(o.a)(['\n  background-color: rgb(238, 246, 241);\n  border-radius: 25px;\n  padding: 4px;\n  font-family: "Press Start 2P", cursive;\n  font-size: 13px;\n  display: flex;\n  justify-content: space-around;\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n  }\n']))),W=l.a.div(B||(B=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  margin-top: 20px;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"]))),Y=l.a.button(D||(D=Object(o.a)(["\n  background-color: rgb(29, 221, 255);\n  color: black;\n  font-size: 15px;\n  font-family: marvin, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid black;\n  border-radius: 3px;\n  transition: 0.5s;\n  &:hover,\n  &:focus {\n    background-color: white;\n  }\n"]))),$="All",K=function(){var e=S().productsData,t=S().onAdd,r=U().togglePlayPauseAndAddAudio,a=U().audioUrl,c=U().isPlaying,i=Object(n.useState)($),o=Object(s.a)(i,2),l=o[0],u=o[1],j=d.a.uniq(d.a.map(e,"genre"));return j.unshift($),Object(_.jsxs)(G,{children:[Object(_.jsx)(V,{children:j.map((function(e){return Object(_.jsx)(Y,{onClick:function(e){return u(e.target.value)},value:e,children:e})}))}),Object(_.jsx)(W,{children:e.filter((function(e){var t=e.genre;return l===$||t===l})).map((function(e){return Object(_.jsxs)(L,{title:e.title,id:e.id,price:e.price,genre:e.genre,img:e.img,audioUrl:e.audioUrl,children:[Object(_.jsx)("img",{width:150,height:150,src:e.img,alt:"1"}),Object(_.jsxs)("div",{className:"product-price",children:[e.price,"$"]}),Object(_.jsx)("button",{className:"button-play",onClick:function(){return r(e.audioUrl)},children:a===e.audioUrl&&c?Object(_.jsx)(J.a,{}):Object(_.jsx)(J.b,{})}),Object(_.jsx)("button",{className:"button-add",onClick:function(){return t(e)},width:20,children:"Add To Cart"}),Object(_.jsx)(b.a,{exact:!0,path:"/details",children:Object(_.jsx)(k,{})}),Object(_.jsx)("button",{className:"button-info",children:Object(_.jsx)(C.b,{to:"/details/".concat(e.id),children:"More Info"})})]})}))})]})},Q=r(81),X=r(80),Z=r(79),ee=l.a.div(R||(R=Object(o.a)(['\n  border: 2px solid black;\n  border-radius: 25px;\n  font-family: nelson-engraved, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  background-color: white;\n  text-align: center;\n  font-family: "Courier New", Courier, monospace;\n']))),te=l.a.div(H||(H=Object(o.a)(["\n  border: 1px solid ",";\n  border-radius: 25px;\n  margin: 4px;\n  margin-left: 2px;\n  margin-right: 2px;\n  text-align: center;\n"])),(function(e){return e.isExpensive?"blue":"black"})),re=function(){var e=S().cartItems,t=S().onRemove,r=S().totalPrice;Object(n.useContext)(f).user;return Object(_.jsxs)(ee,{children:[Object(_.jsx)("h3",{children:"Cart Items"}),Object(_.jsxs)("h4",{children:["Your Total Price is :",r,"$"]}),Object(_.jsx)("div",{children:0===e.length&&Object(_.jsx)("div",{children:"Cart is Empty"})}),e.map((function(e){return Object(_.jsx)("div",{children:Object(_.jsxs)(te,{children:[Object(_.jsx)("div",{children:e.title}),Object(_.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(_.jsxs)("div",{children:[e.price,"$"]}),Object(_.jsx)("button",{className:"button-remove",onClick:function(){return t(e)},children:"Remove"})]})},e.id)})),Object(_.jsx)(C.b,{to:"/checkout",children:Object(_.jsx)("button",{style:{color:"black"},children:"Check Out"})})]})},ne=Object(n.createContext)(null),ae=r(45),ce=(r(49),l.a.div(M||(M=Object(o.a)(["\n  font-family: marvin, sans-serif;\n  background-color: #b8f1f6;\n  font-weight: 400;\n  font-style: normal;\n  height: 90px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n  }\n"])))),ie=l.a.div(z||(z=Object(o.a)(["\n  font-size: 25px;\n"]))),se=l.a.div(q||(q=Object(o.a)(["\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n"]))),oe=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),r=t[0],a=(t[1],Object(n.useState)(!0)),c=Object(s.a)(a,2),i=(c[0],c[1],Object(n.useState)([])),o=Object(s.a)(i,2),l=(o[0],o[1],S().cartItems),u=Object(n.useContext)(ne).firebase,d=Object(n.useContext)(f).user;return Object(_.jsxs)(ce,{children:[r&&Object(_.jsx)(Q.a,{variant:"danger",children:r}),Object(_.jsx)(ie,{children:d?Object(_.jsxs)("h4",{children:["Hello! ",d.displayName]}):Object(_.jsx)("h4",{children:"Welcome"})}),d?Object(_.jsxs)(se,{children:[Object(_.jsx)(C.b,{onClick:function(){return u.auth().signOut()},children:"Logout"}),Object(_.jsx)(X.a,{placement:"bottom",trigger:["click"],overlay:Object(_.jsx)(Z.a,{id:"button-tooltip-2",children:Object(_.jsx)(re,{})}),children:function(e){var t=Object.assign({},e);return Object(_.jsxs)("h2",Object(h.a)(Object(h.a)({},t),{},{className:"basket",children:[Object(_.jsx)(ae.a,{children:" "}),Object(_.jsxs)("span",{className:"size-of-carts",children:["(",l.length,")"]})]}))}})]}):Object(_.jsxs)(se,{children:[Object(_.jsx)(C.b,{to:"/login",children:"Login"}),Object(_.jsx)(X.a,{placement:"bottom",trigger:["click"],overlay:Object(_.jsx)(Z.a,{id:"button-tooltip-2",children:Object(_.jsx)(re,{})}),children:function(e){var t=Object.assign({},e);return Object(_.jsxs)("h2",Object(h.a)(Object(h.a)({},t),{},{className:"basket",children:[Object(_.jsx)(ae.a,{children:" "}),Object(_.jsxs)("span",{className:"size-of-carts",children:["(",l.length,")"]})]}))}})]})]})},le=function(){var e=Object(n.useContext)(ne).firebase,t=Object(n.useState)(""),r=Object(s.a)(t,2),a=r[0],c=r[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),l=o[0],u=o[1],d=Object(n.useState)(""),j=Object(s.a)(d,2),p=j[0],h=j[1],O=Object(b.f)(),f=""===l||""===a,g=function(){var t=Object(x.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,e.auth().signInWithEmailAndPassword(a,l);case 4:O.push("/"),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(1),c(""),u(""),h(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"",children:Object(_.jsx)("div",{className:"",children:Object(_.jsxs)("div",{className:"",children:[p&&Object(_.jsx)("p",{className:"",children:p}),Object(_.jsxs)("form",{method:"POST",onSubmit:g,children:[Object(_.jsx)("input",{value:a,onChange:function(e){var t=e.target;return c(t.value)},"aria-label":"Enter your email address",className:"text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2",type:"text",placeholder:"Email address"}),Object(_.jsx)("input",{value:l,onChange:function(e){var t=e.target;return u(t.value)},"aria-label":"Enter your password",className:"text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2",type:"password",placeholder:"Password"}),Object(_.jsx)("button",{disabled:f,type:"submit",className:"",children:"Log In"})]})]})})}),Object(_.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(_.jsx)(C.b,{to:"/signup",children:"Sign Up"})]})]})},ue=function(){var e=S().userProducts;return console.log(e,"hi"),Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"dsadasd"}),e.map((function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:e.price}),Object(_.jsx)("h1",{children:e.genre})]})}))]})},de=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Hello "}),Object(_.jsx)("iframe",{src:"https://youtube.com/embed/WTuC8vg3m_w?start=0&autoplay=0&modestbranding=1&autohide=1&showinfo=0&controls=0&mute-1",frameBorder:"0",height:"500%",width:"50%"})]})},be=function(){var e=Object(n.useContext)(ne).firebase,t=Object(n.useState)(""),r=Object(s.a)(t,2),a=r[0],c=r[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),l=o[0],u=o[1],d=Object(n.useState)(""),j=Object(s.a)(d,2),p=j[0],h=j[1],O=Object(n.useState)(""),f=Object(s.a)(O,2),g=f[0],v=f[1],w=Object(b.f)(),P=""===p||""===l,S=function(){var t=Object(x.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,y(a);case 3:if(t.sent.length){t.next=21;break}return t.prev=5,t.next=8,e.auth().createUserWithEmailAndPassword(l,p);case 8:return n=t.sent,t.next=11,n.user.updateProfile({displayName:a});case 11:return t.next=13,e.firestore().collection("users").add({userId:n.user.uid,username:a.toLowerCase(),emailAddress:l.toLowerCase(),dateCreated:Date.now()});case 13:w.push("/"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),v(t.t0.message);case 19:t.next=25;break;case 21:c(""),u(""),h(""),v("That username is already taken, please try another!");case 25:case"end":return t.stop()}}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"",children:Object(_.jsx)("div",{className:"",children:Object(_.jsxs)("div",{className:"",children:[g&&Object(_.jsx)("p",{className:"",children:g}),Object(_.jsxs)("form",{method:"POST",onSubmit:S,children:[Object(_.jsx)("input",{value:a,onChange:function(e){var t=e.target;return c(t.value.toLowerCase())},"aria-label":"Enter your username",className:"",type:"text",placeholder:"Username"}),Object(_.jsx)("input",{value:l,onChange:function(e){var t=e.target;return u(t.value)},"aria-label":"Enter your email address",className:"text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2",type:"text",placeholder:"Email address"}),Object(_.jsx)("input",{value:p,onChange:function(e){var t=e.target;return h(t.value)},"aria-label":"Enter your password",className:"text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2",type:"password",placeholder:"Password"}),Object(_.jsx)("button",{disabled:P,type:"submit",className:"",children:"Sign UP"})]})]})})})})};var je,pe,me=function(e){var t=e.cartItems,r=Object(n.useState)(!1),a=Object(s.a)(r,2),c=a[0],i=a[1],o=Object(n.useState)(null),l=Object(s.a)(o,2),u=l[0],d=l[1],b=S().totalPrice,j=(S().setCartItems,Object(n.useRef)()),p=[];return p.push([t]),Object(n.useEffect)((function(){window.paypal.Buttons({createOrder:function(e,t){return t.order.create({purchase_units:[{description:p.item,amount:{currency_code:"USD",value:b}}]})},onApprove:function(){var e=Object(x.a)(m.a.mark((function e(t,r){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.order.capture();case 2:n=e.sent,i(!0),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),onError:function(e){d(e),console.error(e)}}).render(j.current)}),[p.item,p.price,b]),c?Object(_.jsxs)("div",{children:["Congrats, you just bought",p.map((function(e){return Object(_.jsxs)("div",{className:"after-buy",children:[Object(_.jsx)("div",{children:e.title}),Object(_.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(_.jsx)("div",{children:"Link"}),Object(_.jsx)("a",{href:e.audioUrl,children:"download"})]},e.id)}))]}):Object(_.jsxs)("div",{children:[u&&Object(_.jsxs)("div",{children:["Uh oh, an error occurred! ",u.message]}),Object(_.jsx)("div",{ref:j})]})},he=l.a.div(je||(je=Object(o.a)(["\n  /* border: 2px solid black; */\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  background-color: white;\n  text-align: center;\n"]))),xe=l.a.div(pe||(pe=Object(o.a)(["\n  border: 1px solid;\n  margin: 0 auto 10px auto;\n  width: 50%;\n  text-align: center;\n"]))),Oe=function(e){var t=S().cartItems,r=S().onRemove,n=S().totalPrice;return Object(_.jsxs)(he,{children:[Object(_.jsxs)("h2",{children:["Your Price is:",n,"$"]}),Object(_.jsx)("div",{children:0===t.length&&Object(_.jsx)("div",{children:"Cart is Empty"})}),t.map((function(e){return Object(_.jsx)("div",{children:Object(_.jsxs)(xe,{children:[Object(_.jsx)("div",{children:e.title}),Object(_.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(_.jsxs)("div",{children:[e.price,"$"]}),Object(_.jsx)("button",{className:"button-remove",onClick:function(){return r(e)},children:"Remove"})]})},e.id)})),Object(_.jsx)("div",{className:"paypal",children:Object(_.jsx)(me,{cartItems:t})})]})},fe=r(27),ge=r.n(fe),ve=function(){var e=U().audioPlayer,t=U().audioUrl,r=U().isPlaying,n=U().setIsPlaying,a=U().duration,c=U().currentTime,i=U().progressBar,s=U().changeRange;var o=function(e){var t=Math.floor(e/60),r=t<10?"0".concat(t):"".concat(t),n=Math.floor(e%60),a=n<10?"0".concat(n):"".concat(n);return"".concat(r,":").concat(a)};return Object(_.jsxs)("div",{className:ge.a.audioPlayer,children:[Object(_.jsx)("audio",{ref:e,src:t,preload:"metadata"}),Object(_.jsx)("button",{onClick:function(){var t=r;n(!t),t?e.current.pause():e.current.play()},className:ge.a.playPause,children:r?Object(_.jsx)(J.a,{}):Object(_.jsx)(J.b,{className:ge.a.play})}),Object(_.jsx)("div",{className:ge.a.divProgressBar,children:o(c)}),Object(_.jsx)("div",{children:Object(_.jsx)("input",{type:"range",className:ge.a.progressBar,defaultValue:"0",ref:i,onChange:s})}),Object(_.jsx)("div",{className:ge.a.duration,children:!r&&t?"00:00":!isNaN(a)&&o(a)})]})},ye=function(){return Object(_.jsx)("div",{className:"footer",children:Object(_.jsx)("footer",{children:Object(_.jsx)("h3",{children:"\xa9 made by Yaniv Hershkowitz"})})})};var we=function(){var e=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useContext)(ne).firebase;return Object(n.useEffect)((function(){var e=c.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),a(e)):(localStorage.removeItem("authUser"),a(null))}));return function(){return e()}}),[c]),{user:r}}().user;return Object(_.jsx)(f.Provider,{value:{user:e},children:Object(_.jsx)(N,{children:Object(_.jsxs)(A,{children:[Object(_.jsx)(C.a,{basename:"/trippyysamplesdemo",children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(oe,{}),Object(_.jsxs)(b.c,{children:[Object(_.jsx)(b.a,{exact:!0,path:"/",children:Object(_.jsx)(K,{})}),Object(_.jsx)(b.a,{exact:!0,path:"/about",children:Object(_.jsx)(de,{})}),Object(_.jsx)(b.a,{exact:!0,path:"/login",children:Object(_.jsx)(le,{})}),Object(_.jsx)(b.a,{exact:!0,path:"/checkout",children:Object(_.jsx)(Oe,{})}),Object(_.jsx)(b.a,{exact:!0,path:"/basket",children:Object(_.jsx)(re,{})}),Object(_.jsx)(b.a,{exact:!0,path:"/signup",children:Object(_.jsx)(be,{})}),Object(_.jsx)(b.a,{path:"/details/:id",children:Object(_.jsx)(k,{})}),Object(_.jsx)(b.a,{path:"/user",children:Object(_.jsx)(ue,{})})]})]})}),Object(_.jsx)(ve,{}),Object(_.jsx)(ye,{})]})})})};i.a.render(Object(_.jsx)(ne.Provider,{value:{firebase:g,FieldValue:v},children:Object(_.jsx)(we,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b813f8a9.chunk.js.map