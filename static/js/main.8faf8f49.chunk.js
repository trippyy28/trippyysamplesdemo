(this["webpackJsonpableton-templets"]=this["webpackJsonpableton-templets"]||[]).push([[0],{61:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(20),a=n.n(r),s=(n(61),n(49),n(9)),o=n(11),l=n(12),d=n(27),j=n.n(d),u=n(15),b=n(56),p=n(21),x=[{genre:"House",price:"10",id:"1",title:"Deep-House Vibes",img:"https://previews.123rf.com/images/fredep/fredep1702/fredep170200013/71867562-set-of-8-bit-game-style-pixel-art-icon-.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Bla Bla Bla House"},{genre:"Future-Bass",price:"10",id:"2",title:"Trippy Future Bass",img:"https://i.pinimg.com/564x/2e/2b/24/2e2b242b623144dbb9d8dc4b061bb38f.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2015-09-25_-_Old_Video_Game_Music_1_-_David_Fesliyan.mp3",moreInfo:"The Best Sample Pack Ever!"},{genre:"House",price:"10",id:"3",title:"Groove House",img:"https://image.shutterstock.com/image-vector/set-coin-monster-head-sword-260nw-1781244794.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen/2020-10-27_-_Ethereal_-_www.FesliyanStudios.com_Steve_Oxen.mp3",moreInfo:"Amazing Sample Pack"},{genre:"Minimal",price:"10",id:"4",title:"Space Groove",img:"https://cdna.artstation.com/p/assets/images/images/000/613/868/large/hendry-roesly-chr8bit.jpg?1428583453",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-09-29_-_Silly_Feet_-_FesliyanStudios.com_-_David_Renda.mp3",moreInfo:"Amazingggg wow"},{genre:"Minimal",price:"10",id:"5",title:"8bit Minimal",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQro2PZt3E9Ayfdn_Itm1PPvCeRpPUMTgbg&usqp=CAU",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen/2021-03-17_-_JPOP_-_www.FesliyanStudios.com_Steve_Oxen.mp3",moreInfo:"omggg woww thee besttt"},{genre:"Techno",price:"10",id:"5",title:"Dark Techno",img:"https://fsb.zobj.net/crop.php?r=nhzGX9MFl_pKS7NoNaoVoMPf-Kt6PnITdg0IDzV5WXkPp6qhC2rYi2JfDOx1fo1ePTA-sWBlQbBjBnkDu6tUsHpORmYOMz5VgNn0ExB2mQzV-ahFCh7pkBkv5TFPsET9Dm-oUXW0wZ6gKSOXYyT31Bf_Mc1YUbrm7S9mKOLX3Rn7dd-Ze2JdOcvwZqg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2020-03-22_-_A_Bit_Of_Hope_-_David_Fesliyan/2020-03-22_-_A_Bit_Of_Hope_-_David_Fesliyan.mp3",moreInfo:"dfsdfsdfsddfsdfsd"},{genre:"Techno",price:"10",id:"6",title:"8bit Techno",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H_4rRdbTpZt4HoxOI1FHdt7NqtF-0S_zpw&usqp=CAU",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda/2020-04-24_-_Arcade_Kid_-_FesliyanStudios.com_-_David_Renda.mp3",moreInfo:"dsfsdfsdfsf wow wow wow"}],h=[{genre:"House",price:"10",id:"1",title:"Deep-House Vibes",img:"https://i2.wp.com/pfcbwp.com/wp-content/uploads/2019/06/Ableton-Live-104.png?resize=640%2C400&ssl=1",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Bla Bla Bla House"},{genre:"Future-Bass",price:"10",id:"2",title:"Trippy Future Bass",img:"https://i2.wp.com/pfcbwp.com/wp-content/uploads/2019/06/Ableton-Live-104.png?resize=640%2C400&ssl=1",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2015-09-25_-_Old_Video_Game_Music_1_-_David_Fesliyan.mp3",moreInfo:"The Best Sample Pack Ever!"}],m=n(2),f=c.a.createContext();function O(){return Object(i.useContext)(f)}function g(e){var t=e.children,n=Object(i.useState)([]),c=Object(s.a)(n,2),r=c[0],a=c[1],o=x,l=h,d=r.reduce((function(e,t){return e+t.price*t.qty}),0),j={cartItems:r,products:o,onAdd:function(e){var t=r.find((function(t){return t.id===e.id}));a(t?r.map((function(n){return n.id===e.id?Object(p.a)(Object(p.a)({},t),{},{qty:t.qty+1}):n})):[].concat(Object(b.a)(r),[Object(p.a)(Object(p.a)({},e),{},{qty:1})]))},onRemove:function(e){var t=r.find((function(t){return t.id===e.id}));1===t.qty?a(r.filter((function(t){return t.id!==e.id}))):a(r.map((function(n){return n.id===e.id?Object(p.a)(Object(p.a)({},t),{},{qty:t.qty-1}):n})))},itemsPrice:d,totalPrice:d,templets:l};return Object(m.jsx)(f.Provider,{value:j,children:t})}var A=c.a.createContext();function v(){return Object(i.useContext)(A)}function w(e){var t=e.children,n=Object(i.useState)([]),c=Object(s.a)(n,2),r=c[0],a=c[1],o=Object(i.useState)(""),l=Object(s.a)(o,2),d=l[0],j=l[1],u=Object(i.useRef)(),b={audioUrl:r,togglePlayPause:function(e){a(e);var t=d;j(!t),t?u.current.pause():u.current.play()},isPlaying:d,audioPlayer:u,setIsPlaying:j};return Object(m.jsx)(A.Provider,{value:b,children:t})}var y,P,B,k,C,D,S,R,H,M,N=n(23),E=l.a.div(y||(y=Object(o.a)(["\n  border: 2px solid black;\n  padding: 10px;\n"]))),F=l.a.div(P||(P=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: 1px solid;\n  margin: 2px;\n"]))),I=l.a.div(B||(B=Object(o.a)(["\n  background-color: #576ca8;\n  padding: 4px;\n"]))),L=l.a.div(k||(k=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"]))),U="All",T=function(){var e=O().products,t=O().onAdd,n=v().togglePlayPause,c=v().audioUrl,r=v().isPlaying,a=Object(i.useState)(U),o=Object(s.a)(a,2),l=o[0],d=o[1],b=j.a.uniq(j.a.map(e,"genre"));return b.unshift(U),Object(m.jsxs)(E,{children:[Object(m.jsx)(I,{children:Object(m.jsx)("select",{onChange:function(e){return d(e.target.value)},onBlur:function(e){return d(e.target.value)},children:b.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))})}),Object(m.jsx)(L,{children:e.filter((function(e){var t=e.genre;return l===U||t===l})).map((function(e){return Object(m.jsxs)(F,{title:e.title,id:e.id,price:e.price,genre:e.genre,img:e.img,audioUrl:e.audioUrl,children:[Object(m.jsx)("div",{children:e.title}),Object(m.jsxs)("div",{children:[e.price,"$"]}),Object(m.jsx)("img",{width:100,height:100,src:e.img,alt:"1"}),Object(m.jsx)("button",{onClick:function(){return n(e.audioUrl)},children:c===e.audioUrl&&r?Object(m.jsx)(N.a,{}):Object(m.jsx)(N.b,{})}),Object(m.jsx)("button",{onClick:function(){return t(e)},width:20,children:"Add To Cart"}),Object(m.jsx)("button",{children:Object(m.jsx)(u.b,{to:"/details",children:"More Info"})})]})}))})]})},G=l.a.div(C||(C=Object(o.a)(["\n  border: 2px solid black;\n  padding: 10px;\n"]))),Q=l.a.div(D||(D=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: 1px solid;\n  margin: 2px;\n"]))),q=l.a.div(S||(S=Object(o.a)(["\n  background-color: #576ca8;\n  padding: 4px;\n"]))),Y=l.a.div(R||(R=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"]))),z="All",W=function(){var e=O().templets,t=O().onAdd,n=v().playAudio,c=Object(i.useState)(z),r=Object(s.a)(c,2),a=r[0],o=r[1],l=j.a.uniq(j.a.map(e,"genre"));return l.unshift(z),Object(m.jsxs)(G,{children:[Object(m.jsx)(q,{children:Object(m.jsx)("select",{onChange:function(e){return o(e.target.value)},onBlur:function(e){return o(e.target.value)},children:l.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))})}),Object(m.jsx)(Y,{children:e.filter((function(e){var t=e.genre;return a===z||t===a})).map((function(e){return Object(m.jsxs)(Q,{isExpensive:e.price>15,title:e.title,id:e.id,price:e.price,genre:e.genre,img:e.img,audioUrl:e.audioUrl,children:[Object(m.jsx)("div",{children:e.title}),Object(m.jsxs)("div",{children:[e.price,"$"]}),Object(m.jsx)("img",{width:100,height:100,src:e.img,alt:"1"}),Object(m.jsx)("button",{onClick:function(){return n(e.audioUrl)},children:"Play"}),Object(m.jsx)("button",{onClick:function(){return t(e)},width:20,children:"Add To Cart"}),Object(m.jsx)("button",{children:Object(m.jsx)(u.b,{to:"/details",children:"More Info"})})]})}))})]})},_=n(10),V=n(22),X=n.n(V),J=n(25),K=n(86),Z=n(84),$=n(89),ee=l.a.div(H||(H=Object(o.a)(["\n  border: 2px solid black;\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  background-color: white;\n  text-align: center;\n"]))),te=l.a.div(M||(M=Object(o.a)(["\n  border: 1px solid ",";\n  margin: 4px;\n  margin-left: 2px;\n  margin-right: 2px;\n  text-align: center;\n"])),(function(e){return e.isExpensive?"blue":"black"})),ne=function(){var e=O().cartItems,t=O().onRemove,n=O().totalPrice;return Object(m.jsxs)(ee,{children:[Object(m.jsx)("h2",{children:"Cart Items"}),Object(m.jsxs)("h3",{children:["Your Total Price is :",n,"$"]}),Object(m.jsx)("div",{children:0===e.length&&Object(m.jsx)("div",{children:"Cart is Empty"})}),e.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(te,{children:[Object(m.jsx)("div",{children:e.title}),Object(m.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(m.jsxs)("div",{children:[e.price,"$"]}),Object(m.jsx)("div",{children:e.qty}),Object(m.jsx)("button",{onClick:function(){return t(e)},children:"Remove"})]})},e.id)})),Object(m.jsx)(u.b,{to:"/checkout",children:Object(m.jsx)("button",{type:"button",className:"nes-btn is-primary",children:"Check Out"})})]})},ie=n(53),ce=(n(74),ie.a.initializeApp({apiKey:"AIzaSyD7fjE2toONwUbnZ5UP9Mtv4op7Ci_RQlY",authDomain:"trippyysamples.firebaseapp.com",projectId:"trippyysamples",storageBucket:"trippyysamples.appspot.com",messagingSenderId:"212952911971",appId:"1:212952911971:web:b393b72ac34790fe702856",measurementId:"G-30YNMPN9QS"})),re=ce.auth(),ae=c.a.createContext();function se(){return Object(i.useContext)(ae)}function oe(e){var t=e.children,n=Object(i.useState)(""),c=Object(s.a)(n,2),r=c[0],a=c[1],o=Object(i.useState)(!0),l=Object(s.a)(o,2),d=l[0],j=l[1];Object(i.useEffect)((function(){return re.onAuthStateChanged((function(e){return a(e)}),j(!1))}),[]);var u={currentUser:r,login:function(e,t){return re.signInWithEmailAndPassword(e,t)},signup:function(e,t){return re.createUserWithEmailAndPassword(e,t)},logout:function(){return re.signOut()}};return Object(m.jsx)(ae.Provider,{value:u,children:!d&&t})}var le,de,je,ue,be,pe,xe=l.a.div(le||(le=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto 0 auto;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    margin: 10px;\n  }\n"]))),he=l.a.div(de||(de=Object(o.a)(["\n  flex: 1;\n  text-align: right;\n  margin-right: 20px;\n  background-color: black;\n"]))),me=(l.a.div(je||(je=Object(o.a)(["\n  text-align: left;\n  margin-left: 10px;\n  margin-top: 10px;\n"]))),l.a.div(ue||(ue=Object(o.a)(['\n  font-family: "Comic Sans MS";\n  font-size: 0.875em;\n  font-weight: 400;\n  background-color: black;\n  text-align: center;\n  display: flex;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n'])))),fe=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=se().currentUser,a=se().logout,o=O().cartItems,l=Object(_.f)();function d(){return(d=Object(J.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,a();case 4:l.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(m.jsxs)(me,{children:[Object(m.jsxs)(xe,{children:[Object(m.jsx)(u.b,{to:"/about",children:Object(m.jsx)("img",{src:"data:image/png;base64,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"})}),Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{src:"data:image/png;base64,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",className:"samplePacksLogo"})}),Object(m.jsx)(u.b,{to:"/templets",children:Object(m.jsx)("img",{src:"data:image/png;base64,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",className:"templets-logo"})})]}),Object(m.jsx)(he,{children:Object(m.jsx)(K.a,{placement:"bottom",trigger:["click"],overlay:Object(m.jsx)(Z.a,{id:"button-tooltip-2",children:Object(m.jsx)(ne,{})}),children:function(e){var t=Object.assign({},e);return Object(m.jsxs)("h3",Object(p.a)(Object(p.a)({className:"rightSection"},t),{},{children:["Basket (",o.length,")"]}))}})}),n&&Object(m.jsx)($.a,{variant:"danger",children:n}),r?Object(m.jsx)("h3",{className:"rightSection login",onClick:function(){return d.apply(this,arguments)},children:"Logout"}):Object(m.jsx)(u.b,{to:"/login",children:Object(m.jsx)("h3",{className:"rightSection login",children:"Login"})})]})},Oe=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Wow"})})},ge=n(88),Ae=n(87),ve=n(85),we=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=se().login,c=Object(i.useState)(""),r=Object(s.a)(c,2),a=r[0],o=r[1],l=Object(i.useState)(!1),d=Object(s.a)(l,2),j=d[0],b=d[1],p=Object(_.f)();function x(){return(x=Object(J.a)(X.a.mark((function i(c){return X.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return c.preventDefault(),i.prev=1,o(""),b(!0),i.next=6,n(e.current.value,t.current.value);case 6:p.push("/"),i.next=12;break;case 9:i.prev=9,i.t0=i.catch(1),o("Failed to Log in");case 12:b(!1);case 13:case"end":return i.stop()}}),i,null,[[1,9]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ge.a,{children:Object(m.jsxs)(ge.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),a&&Object(m.jsx)($.a,{variant:"danger",children:a}),Object(m.jsxs)(Ae.a,{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(m.jsxs)(Ae.a.Group,{id:"email",children:[Object(m.jsx)(Ae.a.Label,{children:"Email"}),Object(m.jsx)(Ae.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(Ae.a.Group,{id:"password",children:[Object(m.jsx)(Ae.a.Label,{children:"Password"}),Object(m.jsx)(Ae.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsx)(ve.a,{className:"w-100",type:"submit",disabled:j,children:"Log In"})]})]})}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(m.jsx)(u.b,{to:"/signup",children:"Sign Up"})]})]})},ye=function(){var e=se().currentUser;return Object(m.jsxs)("div",{children:[e?Object(m.jsxs)("p",{children:["Hello! ",e.email]}):null,Object(m.jsx)("iframe",{src:"https://youtube.com/embed/WTuC8vg3m_w?start=0&autoplay=0&modestbranding=1&autohide=1&showinfo=0&controls=0&mute-1",frameBorder:"0",height:"500%",width:"50%"})]})},Pe=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)(),c=se().signup,r=Object(i.useState)(""),a=Object(s.a)(r,2),o=a[0],l=a[1],d=Object(i.useState)(!1),j=Object(s.a)(d,2),u=j[0],b=j[1];function p(){return(p=Object(J.a)(X.a.mark((function i(r){return X.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r.preventDefault(),t.current.value===n.current.value){i.next=3;break}return i.abrupt("return",l("Passwords do not match"));case 3:return i.prev=3,l(""),b(!0),i.next=8,c(e.current.value,t.current.value);case 8:i.next=13;break;case 10:i.prev=10,i.t0=i.catch(3),l("Failed to create an account");case 13:b(!1);case 14:case"end":return i.stop()}}),i,null,[[3,10]])})))).apply(this,arguments)}return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ge.a,{children:Object(m.jsxs)(ge.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),o&&Object(m.jsx)($.a,{variant:"danger",children:o}),Object(m.jsxs)(Ae.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(m.jsxs)(Ae.a.Group,{id:"email",children:[Object(m.jsx)(Ae.a.Label,{children:"Email"}),Object(m.jsx)(Ae.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(Ae.a.Group,{id:"password",children:[Object(m.jsx)(Ae.a.Label,{children:"Password"}),Object(m.jsx)(Ae.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsxs)(Ae.a.Group,{id:"password-confirm",children:[Object(m.jsx)(Ae.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(Ae.a.Control,{type:"password",ref:n,required:!0})]}),Object(m.jsx)(ve.a,{className:"w-100",type:"submit",disabled:u,children:"Sign-Up"})]})]})})})},Be=n(55),ke=n.n(Be),Ce=function(){var e=O().totalPrice,t=100*{totalPrice:e};return Object(m.jsx)("div",{children:Object(m.jsx)(ke.a,{label:"Pay Now",name:"Trippy-Samples",description:"your total price is ".concat(e,"$"),amount:t,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51Ix736F5wkqL3aAj6HSUEKf3kXrsKWkGaLnX9khwv6QCZdM66QyqYTTBf9vLKGL4O21JyuCk7qaMN6p8AZJ7KYw100h9LKzy6v"})})},De=l.a.div(be||(be=Object(o.a)(["\n  border: 2px solid black;\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  background-color: white;\n  text-align: center;\n"]))),Se=l.a.div(pe||(pe=Object(o.a)(["\n  border: 1px solid ",";\n  margin: 4px;\n  margin-left: 2px;\n  margin-right: 2px;\n  text-align: center;\n"])),(function(e){return e.isExpensive?"blue":"black"})),Re=function(e){var t=O().cartItems,n=O().onRemove,i=O().totalPrice;return Object(m.jsxs)(De,{children:[Object(m.jsxs)("h2",{children:["Your Price is:",i,"$"]}),Object(m.jsx)("div",{children:0===t.length&&Object(m.jsx)("div",{children:"Cart is Empty"})}),t.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(Se,{children:[Object(m.jsx)("div",{children:e.title}),Object(m.jsx)("img",{src:e.img,width:100,height:100,alt:e.id}),Object(m.jsxs)("div",{children:[e.price,"$"]}),Object(m.jsx)("div",{children:e.qty}),Object(m.jsx)("button",{onClick:function(){return n(e)},children:"Remove"})]})},e.id)})),Object(m.jsx)(Ce,{price:i})]})},He=n(36),Me=(n(78),function(){var e,t,n=Object(i.useState)(0),c=Object(s.a)(n,2),r=c[0],a=c[1],o=v().audioPlayer,l=v().isPlaying,d=v().setIsPlaying,j=v().audioUrl;Object(i.useEffect)((function(){var e=Math.floor(o.current.duration);a(e)}),[null===o||void 0===o||null===(e=o.current)||void 0===e?void 0:e.loadedmetadata,null===o||void 0===o||null===(t=o.current)||void 0===t?void 0:t.readyState]);return Object(m.jsxs)("div",{className:"audioPlayer",children:[Object(m.jsx)("audio",{ref:o,src:j,preload:"metadata"}),Object(m.jsxs)("button",{className:"fowardBackward",children:["30",Object(m.jsx)(He.a,{})]}),Object(m.jsx)("button",{onClick:function(){var e=l;d(!e),e?o.current.pause():o.current.play()},className:"playPause",children:l?Object(m.jsx)(N.a,{}):Object(m.jsx)(N.b,{className:"play"})}),Object(m.jsxs)("button",{className:"fowardBackward",children:["30",Object(m.jsx)(He.b,{})]}),Object(m.jsx)("div",{className:"currentTime",children:"0:00"}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"range",className:"progressBar"})}),Object(m.jsx)("div",{className:"duration",children:r&&!isNaN(r)&&function(e){var t=Math.floor(e/60),n=t<10?"0".concat(t):"".concat(t),i=Math.floor(e%60),c=i<10?"0".concat(i):"".concat(i);return"".concat(n,":").concat(c)}(r)})]})});var Ne=function(){return Object(m.jsx)(oe,{children:Object(m.jsx)(g,{children:Object(m.jsxs)(w,{children:[Object(m.jsx)(u.a,{basename:"/trippyysamplesdemo",children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(fe,{}),Object(m.jsxs)(_.c,{children:[Object(m.jsx)(_.a,{exact:!0,path:"/",children:Object(m.jsx)(T,{})}),Object(m.jsx)(_.a,{exact:!0,path:"/about",children:Object(m.jsx)(ye,{})}),Object(m.jsx)(_.a,{exact:!0,path:"/templets",children:Object(m.jsx)(W,{})}),Object(m.jsx)(_.a,{exact:!0,path:"/details",children:Object(m.jsx)(Oe,{})}),Object(m.jsx)(_.a,{exact:!0,path:"/login",children:Object(m.jsx)(we,{})}),Object(m.jsx)(_.a,{exact:!0,path:"/checkout",children:Object(m.jsx)(Re,{})}),Object(m.jsx)(_.a,{exact:!0,path:"/basket",children:Object(m.jsx)(ne,{})}),Object(m.jsx)(_.a,{exact:!0,path:"/signup",children:Object(m.jsx)(Pe,{})})]})]})}),Object(m.jsx)(Me,{})]})})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Ne,{})}),document.getElementById("root")),Ee()}},[[79,1,2]]]);
//# sourceMappingURL=main.8faf8f49.chunk.js.map