(this["webpackJsonpableton-templets"]=this["webpackJsonpableton-templets"]||[]).push([[0],{25:function(e,t,n){e.exports={audioPlayer:"styles_audioPlayer__2v5zV",fowardBackward:"styles_fowardBackward__29iwj",playPause:"styles_playPause__2O87C",play:"styles_play__jeghE",currentTime:"styles_currentTime__3JGNp",duration:"styles_duration__15KTO",divProgressBar:"styles_divProgressBar__cbOdN",progressBar:"styles_progressBar__2bsXI"}},61:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(21),a=n.n(c),s=(n(61),n(48),n(8)),o=n(10),d=n(11),l=n(27),u=n.n(l),j=n(1),b=n(14),p=n(55),h=n(22),x=[{genre:"House",price:"1",id:"1",title:"Deep-House Vibes",img:"https://previews.123rf.com/images/fredep/fredep1702/fredep170200013/71867562-set-of-8-bit-game-style-pixel-art-icon-.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Bla Bla Bla House"},{genre:"Future-Bass",price:"1",id:"2",title:"Trippy Future Bass",img:"https://i.pinimg.com/564x/2e/2b/24/2e2b242b623144dbb9d8dc4b061bb38f.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2015-09-25_-_Old_Video_Game_Music_1_-_David_Fesliyan.mp3",moreInfo:"The Best Sample Pack Ever!"},{genre:"House",price:"1",id:"3",title:"Groove House",img:"https://image.shutterstock.com/image-vector/set-coin-monster-head-sword-260nw-1781244794.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen.mp3",moreInfo:"Amazing Sample Pack"},{genre:"Minimal",price:"1",id:"4",title:"Space Groove",img:"https://cdna.artstation.com/p/assets/images/images/000/613/868/large/hendry-roesly-chr8bit.jpg?1428583453",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-09-29_-_Silly_Feet_-_FesliyanStudios.com_-_David_Renda.mp3",moreInfo:"Amazingggg wow"},{genre:"Minimal",price:"1",id:"5",title:"8bit Minimal",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQro2PZt3E9Ayfdn_Itm1PPvCeRpPUMTgbg&usqp=CAU",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen.mp3",moreInfo:"omggg woww thee besttt"},{genre:"Techno",price:"1",id:"6",title:"8bit Techno",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H_4rRdbTpZt4HoxOI1FHdt7NqtF-0S_zpw&usqp=CAU",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda.mp3",moreInfo:"dsfsdfsdfsf wow wow wow"}],m=[{genre:"House",price:"10",id:"1",title:"Deep-House Vibes",img:"https://i2.wp.com/pfcbwp.com/wp-content/uploads/2019/06/Ableton-Live-104.png?resize=640%2C400&ssl=1",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Bla Bla Bla House"},{genre:"Future-Bass",price:"10",id:"2",title:"Trippy Future Bass",img:"https://i2.wp.com/pfcbwp.com/wp-content/uploads/2019/06/Ableton-Live-104.png?resize=640%2C400&ssl=1",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2015-09-25_-_Old_Video_Game_Music_1_-_David_Fesliyan.mp3",moreInfo:"The Best Sample Pack Ever!"}],O=i.a.createContext();function f(){return Object(r.useContext)(O)}function g(e){var t=e.children,n=Object(r.useState)([]),i=Object(s.a)(n,2),c=i[0],a=i[1],o=x,d=m,l=c.reduce((function(e,t){return e+t.price*t.qty}),0),u={cartItems:c,products:o,onAdd:function(e){var t=c.find((function(t){return t.id===e.id}));a(t?c.map((function(n){return n.id===e.id?Object(h.a)(Object(h.a)({},t),{},{qty:t.qty+1}):n})):[].concat(Object(p.a)(c),[Object(h.a)(Object(h.a)({},e),{},{qty:1})]))},onRemove:function(e){var t=c.find((function(t){return t.id===e.id}));1===t.qty?a(c.filter((function(t){return t.id!==e.id}))):a(c.map((function(n){return n.id===e.id?Object(h.a)(Object(h.a)({},t),{},{qty:t.qty-1}):n})))},itemsPrice:l,totalPrice:l,templets:d,setCartItems:a};return Object(j.jsx)(O.Provider,{value:u,children:t})}var A=n(15),v=n.n(A),w=n(20),y=i.a.createContext();function P(){return Object(r.useContext)(y)}function B(e){var t,n,i=e.children,c=Object(r.useState)(null),a=Object(s.a)(c,2),o=a[0],d=a[1],l=Object(r.useState)(0),u=Object(s.a)(l,2),b=u[0],p=u[1],h=Object(r.useState)(!1),x=Object(s.a)(h,2),m=x[0],O=x[1],f=Object(r.useState)(0),g=Object(s.a)(f,2),A=g[0],P=g[1],B=Object(r.useRef)(),C=Object(r.useRef)(),k=Object(r.useRef)();function D(){return(D=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return n=m,e.next=5,O(!n);case 5:n?(B.current.pause(),cancelAnimationFrame(k.current)):(B.current.play(),k.current=requestAnimationFrame(R));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){var e=Math.floor(B.current.duration);p(e),C.current.max=e}),[null===B||void 0===B||null===(t=B.current)||void 0===t?void 0:t.loadedmetadata,null===B||void 0===B||null===(n=B.current)||void 0===n?void 0:n.readyState]);var R=function e(){C.current.value=B.current.currentTime,S(),k.current=requestAnimationFrame(e)},S=function(){C.current.style.setProperty("--seek-before-width","".concat(C.current.value/b*100,"%")),P(C.current.value)},N={audioUrl:o,togglePlayPauseAndAddAudio:function(e){return D.apply(this,arguments)},isPlaying:m,audioPlayer:B,setIsPlaying:O,duration:b,currentTime:A,progressBar:C,changeRange:function(){B.current.currentTime=C.current.value,S()},whilePlaying:R};return Object(j.jsx)(y.Provider,{value:N,children:i})}var C,k,D,R,S,N,H,I,E,M,F=n(23),U=d.a.div(C||(C=Object(o.a)(["\n  border: 2px solid black;\n  padding: 10px;\n"]))),L=d.a.div(k||(k=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: 1px solid;\n  margin: 2px;\n"]))),G=d.a.div(D||(D=Object(o.a)(['\n  background-color: #576ca8;\n  padding: 4px;\n  font-family: "Courier New", Courier, monospace;\n  font-size: 20px;\n']))),T=d.a.div(R||(R=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"]))),Q="All",_=function(){var e=f().products,t=f().onAdd,n=P().togglePlayPauseAndAddAudio,i=(P().audioPlayer,P().audioUrl),c=P().isPlaying,a=Object(r.useState)(Q),o=Object(s.a)(a,2),d=o[0],l=o[1],p=u.a.uniq(u.a.map(e,"genre"));return p.unshift(Q),Object(j.jsxs)(U,{children:[Object(j.jsx)(G,{children:Object(j.jsx)("select",{className:"select",onChange:function(e){return l(e.target.value)},onBlur:function(e){return l(e.target.value)},children:p.map((function(e){return Object(j.jsx)("option",{value:e,children:e})}))})}),Object(j.jsx)(T,{children:e.filter((function(e){var t=e.genre;return d===Q||t===d})).map((function(e){return Object(j.jsxs)(L,{title:e.title,id:e.id,price:e.price,genre:e.genre,img:e.img,audioUrl:e.audioUrl,children:[Object(j.jsx)("div",{children:e.title}),Object(j.jsxs)("div",{children:[e.price,"$"]}),Object(j.jsx)("img",{width:100,height:100,src:e.img,alt:"1"}),Object(j.jsx)("button",{onClick:function(){return n(e.audioUrl)},children:i===e.audioUrl&&c?Object(j.jsx)(F.a,{}):Object(j.jsx)(F.b,{})}),Object(j.jsx)("button",{onClick:function(){return t(e)},width:20,children:"Add To Cart"}),Object(j.jsx)("button",{children:Object(j.jsx)(b.b,{to:"/details/".concat(e.id),children:"More Info"})})]})}))})]})},q=d.a.div(S||(S=Object(o.a)(["\n  border: 2px solid black;\n  padding: 10px;\n"]))),z=d.a.div(N||(N=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: 1px solid;\n  margin: 2px;\n"]))),Y=d.a.div(H||(H=Object(o.a)(["\n  background-color: #576ca8;\n  padding: 4px;\n"]))),V=d.a.div(I||(I=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"]))),W="All",J=function(){var e=f().templets,t=f().onAdd,n=P().playAudio,i=Object(r.useState)(W),c=Object(s.a)(i,2),a=c[0],o=c[1],d=u.a.uniq(u.a.map(e,"genre"));return d.unshift(W),Object(j.jsxs)(q,{children:[Object(j.jsx)(Y,{children:Object(j.jsx)("select",{onChange:function(e){return o(e.target.value)},onBlur:function(e){return o(e.target.value)},children:d.map((function(e){return Object(j.jsx)("option",{value:e,children:e})}))})}),Object(j.jsx)(V,{children:e.filter((function(e){var t=e.genre;return a===W||t===a})).map((function(e){return Object(j.jsxs)(z,{isExpensive:e.price>15,title:e.title,id:e.id,price:e.price,genre:e.genre,img:e.img,audioUrl:e.audioUrl,children:[Object(j.jsx)("div",{children:e.title}),Object(j.jsxs)("div",{children:[e.price,"$"]}),Object(j.jsx)("img",{width:100,height:100,src:e.img,alt:"1"}),Object(j.jsx)("button",{onClick:function(){return n(e.audioUrl)},children:"Play"}),Object(j.jsx)("button",{onClick:function(){return t(e)},width:20,children:"Add To Cart"}),Object(j.jsx)("button",{children:Object(j.jsx)(b.b,{to:"/details",children:"More Info"})})]})}))})]})},X=n(9),K=n(86),Z=n(84),$=n(89),ee=d.a.div(E||(E=Object(o.a)(["\n  border: 2px solid black;\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  background-color: white;\n  text-align: center;\n"]))),te=d.a.div(M||(M=Object(o.a)(["\n  border: 1px solid ",";\n  margin: 4px;\n  margin-left: 2px;\n  margin-right: 2px;\n  text-align: center;\n"])),(function(e){return e.isExpensive?"blue":"black"})),ne=function(){var e=f().cartItems,t=f().onRemove,n=f().totalPrice;return Object(j.jsxs)(ee,{children:[Object(j.jsx)("h2",{children:"Cart Items"}),Object(j.jsxs)("h3",{children:["Your Total Price is :",n,"$"]}),Object(j.jsx)("div",{children:0===e.length&&Object(j.jsx)("div",{children:"Cart is Empty"})}),e.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)(te,{children:[Object(j.jsx)("div",{children:e.title}),Object(j.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(j.jsxs)("div",{children:[e.price,"$"]}),Object(j.jsx)("div",{children:e.qty}),Object(j.jsx)("button",{onClick:function(){return t(e)},children:"Remove"})]})},e.id)})),Object(j.jsx)(b.b,{to:"/checkout",children:Object(j.jsx)("button",{type:"button",className:"nes-btn is-primary",children:"Check Out"})})]})},re=n(52),ie=(n(74),re.a.initializeApp({apiKey:"AIzaSyD7fjE2toONwUbnZ5UP9Mtv4op7Ci_RQlY",authDomain:"trippyysamples.firebaseapp.com",projectId:"trippyysamples",storageBucket:"trippyysamples.appspot.com",messagingSenderId:"212952911971",appId:"1:212952911971:web:b393b72ac34790fe702856",measurementId:"G-30YNMPN9QS"})),ce=ie.auth(),ae=i.a.createContext();function se(){return Object(r.useContext)(ae)}function oe(e){var t=e.children,n=Object(r.useState)(""),i=Object(s.a)(n,2),c=i[0],a=i[1],o=Object(r.useState)(!0),d=Object(s.a)(o,2),l=d[0],u=d[1];Object(r.useEffect)((function(){return ce.onAuthStateChanged((function(e){return a(e)}),u(!1))}),[]);var b={currentUser:c,login:function(e,t){return ce.signInWithEmailAndPassword(e,t)},signup:function(e,t){return ce.createUserWithEmailAndPassword(e,t)},logout:function(){return ce.signOut()}};return Object(j.jsx)(ae.Provider,{value:b,children:!l&&t})}var de,le,ue,je,be=d.a.div(de||(de=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    margin: 10px;\n  }\n"]))),pe=d.a.div(le||(le=Object(o.a)(["\n  flex: 1;\n  text-align: right;\n  margin-right: 20px;\n  background-color: black;\n"]))),he=(d.a.div(ue||(ue=Object(o.a)(["\n  text-align: left;\n  margin-top: 10px;\n"]))),d.a.div(je||(je=Object(o.a)(['\n  font-family: "Comic Sans MS";\n  font-size: 0.875em;\n  font-weight: 400;\n  background-color: black;\n  text-align: center;\n  display: flex;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n'])))),xe=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=se().currentUser,a=se().logout,o=f().cartItems,d=Object(X.f)();function l(){return(l=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,a();case 4:d.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(j.jsxs)(he,{children:[Object(j.jsxs)(be,{children:[Object(j.jsx)(b.b,{to:"/about",children:Object(j.jsx)("img",{src:"data:image/png;base64,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"})}),Object(j.jsx)(b.b,{to:"/",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"samplePacksLogo"})}),Object(j.jsx)(b.b,{to:"/templets",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"templets-logo"})})]}),Object(j.jsx)(pe,{children:Object(j.jsx)(K.a,{placement:"bottom",trigger:["click"],overlay:Object(j.jsx)(Z.a,{id:"button-tooltip-2",children:Object(j.jsx)(ne,{})}),children:function(e){var t=Object.assign({},e);return Object(j.jsxs)("h3",Object(h.a)(Object(h.a)({className:"rightSection"},t),{},{children:["Basket (",o.length,")"]}))}})}),n&&Object(j.jsx)($.a,{variant:"danger",children:n}),c?Object(j.jsx)("h3",{className:"rightSection login",onClick:function(){return l.apply(this,arguments)},children:"Logout"}):Object(j.jsx)(b.b,{to:"/login",children:Object(j.jsx)("h3",{className:"rightSection login",children:"Login"})})]})},me=n(88),Oe=n(87),fe=n(85),ge=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=se().login,i=Object(r.useState)(""),c=Object(s.a)(i,2),a=c[0],o=c[1],d=Object(r.useState)(!1),l=Object(s.a)(d,2),u=l[0],p=l[1],h=Object(X.f)();function x(){return(x=Object(w.a)(v.a.mark((function r(i){return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i.preventDefault(),r.prev=1,o(""),p(!0),r.next=6,n(e.current.value,t.current.value);case 6:h.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),o("Failed to Log in");case 12:p(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(me.a,{children:Object(j.jsxs)(me.a.Body,{children:[Object(j.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),a&&Object(j.jsx)($.a,{variant:"danger",children:a}),Object(j.jsxs)(Oe.a,{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(j.jsxs)(Oe.a.Group,{id:"email",children:[Object(j.jsx)(Oe.a.Label,{children:"Email"}),Object(j.jsx)(Oe.a.Control,{type:"email",ref:e,required:!0})]}),Object(j.jsxs)(Oe.a.Group,{id:"password",children:[Object(j.jsx)(Oe.a.Label,{children:"Password"}),Object(j.jsx)(Oe.a.Control,{type:"password",ref:t,required:!0})]}),Object(j.jsx)(fe.a,{className:"w-100",type:"submit",disabled:u,children:"Log In"})]})]})}),Object(j.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(j.jsx)(b.b,{to:"/signup",children:"Sign Up"})]})]})},Ae=function(){var e=se().currentUser;return Object(j.jsxs)("div",{children:[e?Object(j.jsxs)("p",{children:["Hello! ",e.email]}):null,Object(j.jsx)("iframe",{src:"https://youtube.com/embed/WTuC8vg3m_w?start=0&autoplay=0&modestbranding=1&autohide=1&showinfo=0&controls=0&mute-1",frameBorder:"0",height:"500%",width:"50%"})]})},ve=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),i=se().signup,c=Object(r.useState)(""),a=Object(s.a)(c,2),o=a[0],d=a[1],l=Object(r.useState)(!1),u=Object(s.a)(l,2),b=u[0],p=u[1];function h(){return(h=Object(w.a)(v.a.mark((function r(c){return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c.preventDefault(),t.current.value===n.current.value){r.next=3;break}return r.abrupt("return",d("Passwords do not match"));case 3:return r.prev=3,d(""),p(!0),r.next=8,i(e.current.value,t.current.value);case 8:r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),d("Failed to create an account");case 13:p(!1);case 14:case"end":return r.stop()}}),r,null,[[3,10]])})))).apply(this,arguments)}return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(me.a,{children:Object(j.jsxs)(me.a.Body,{children:[Object(j.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),o&&Object(j.jsx)($.a,{variant:"danger",children:o}),Object(j.jsxs)(Oe.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(j.jsxs)(Oe.a.Group,{id:"email",children:[Object(j.jsx)(Oe.a.Label,{children:"Email"}),Object(j.jsx)(Oe.a.Control,{type:"email",ref:e,required:!0})]}),Object(j.jsxs)(Oe.a.Group,{id:"password",children:[Object(j.jsx)(Oe.a.Label,{children:"Password"}),Object(j.jsx)(Oe.a.Control,{type:"password",ref:t,required:!0})]}),Object(j.jsxs)(Oe.a.Group,{id:"password-confirm",children:[Object(j.jsx)(Oe.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(Oe.a.Control,{type:"password",ref:n,required:!0})]}),Object(j.jsx)(fe.a,{className:"w-100",type:"submit",disabled:b,children:"Sign-Up"})]})]})})})};n(54);var we,ye,Pe=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(null),a=Object(s.a)(c,2),o=a[0],d=a[1],l=f().totalPrice,u=f().cartItems,b=(f().setCartItems,Object(r.useRef)());return Object(r.useEffect)((function(){window.paypal.Buttons({createOrder:function(e,t){return t.order.create({purchase_units:[{description:u.item,amount:{currency_code:"USD",value:l}}]})},onApprove:function(){var e=Object(w.a)(v.a.mark((function e(t,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.order.capture();case 2:r=e.sent,i(!0),console.log(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onError:function(e){d(e),console.error(e)}}).render(b.current)}),[u.title,u.price]),n?Object(j.jsxs)("div",{children:["Congrats, you just bought",u.map((function(e){return Object(j.jsxs)("div",{className:"after-buy",children:[Object(j.jsx)("div",{children:e.title}),Object(j.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(j.jsx)("div",{children:"Link"}),Object(j.jsx)("a",{href:e.audioUrl,children:"download"})]},e.id)}))]}):Object(j.jsxs)("div",{children:[o&&Object(j.jsxs)("div",{children:["Uh oh, an error occurred! ",o.message]}),Object(j.jsx)("div",{ref:b})]})},Be=d.a.div(we||(we=Object(o.a)(["\n  /* border: 2px solid black; */\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  background-color: white;\n  text-align: center;\n"]))),Ce=d.a.div(ye||(ye=Object(o.a)(["\n  border: 1px solid;\n  margin: 0 auto 10px auto;\n  width: 50%;\n  text-align: center;\n"]))),ke=function(e){var t=f().cartItems,n=f().onRemove,r=f().totalPrice;return Object(j.jsxs)(Be,{children:[Object(j.jsxs)("h2",{children:["Your Price is:",r,"$"]}),Object(j.jsx)("div",{children:0===t.length&&Object(j.jsx)("div",{children:"Cart is Empty"})}),t.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)(Ce,{children:[Object(j.jsx)("div",{children:e.title}),Object(j.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(j.jsxs)("div",{children:[e.price,"$"]}),Object(j.jsx)("div",{children:e.qty}),Object(j.jsx)("button",{onClick:function(){return n(e)},children:"Remove"})]})},e.id)})),Object(j.jsx)("div",{className:"paypal",children:Object(j.jsx)(Pe,{})})]})},De=n(25),Re=n.n(De),Se=function(){var e=P().audioPlayer,t=P().audioUrl,n=P().isPlaying,r=P().setIsPlaying,i=P().duration,c=P().currentTime,a=P().progressBar,s=P().changeRange;var o=function(e){var t=Math.floor(e/60),n=t<10?"0".concat(t):"".concat(t),r=Math.floor(e%60),i=r<10?"0".concat(r):"".concat(r);return"".concat(n,":").concat(i)};return Object(j.jsxs)("div",{className:Re.a.audioPlayer,children:[Object(j.jsx)("audio",{ref:e,src:t,preload:"metadata"}),Object(j.jsx)("button",{onClick:function(){var t=n;r(!t),t?e.current.pause():e.current.play()},className:Re.a.playPause,children:n?Object(j.jsx)(F.a,{}):Object(j.jsx)(F.b,{className:Re.a.play})}),Object(j.jsx)("div",{className:Re.a.divProgressBar,children:o(c)}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"range",className:Re.a.progressBar,defaultValue:"0",ref:a,onChange:s})}),Object(j.jsx)("div",{className:Re.a.duration,children:!n&&t?"00:00":!isNaN(i)&&o(i)})]})},Ne=function(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"\xa9 made by Yaniv Hershkowitz"})})})};var He=function(){return Object(j.jsx)(oe,{children:Object(j.jsx)(g,{children:Object(j.jsxs)(B,{children:[Object(j.jsx)(b.a,{basename:"/trippyysamplesdemo",children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(xe,{}),Object(j.jsxs)(X.c,{children:[Object(j.jsx)(X.a,{exact:!0,path:"/",children:Object(j.jsx)(_,{})}),Object(j.jsx)(X.a,{exact:!0,path:"/about",children:Object(j.jsx)(Ae,{})}),Object(j.jsx)(X.a,{exact:!0,path:"/templets",children:Object(j.jsx)(J,{})}),Object(j.jsx)(X.a,{exact:!0,path:"/login",children:Object(j.jsx)(ge,{})}),Object(j.jsx)(X.a,{exact:!0,path:"/checkout",children:Object(j.jsx)(ke,{})}),Object(j.jsx)(X.a,{exact:!0,path:"/basket",children:Object(j.jsx)(ne,{})}),Object(j.jsx)(X.a,{exact:!0,path:"/signup",children:Object(j.jsx)(ve,{})})]})]})}),Object(j.jsx)(Se,{}),Object(j.jsx)(Ne,{})]})})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(He,{})}),document.getElementById("root")),Ie()}},[[78,1,2]]]);
//# sourceMappingURL=main.1f41f455.chunk.js.map