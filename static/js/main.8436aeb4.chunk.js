(this["webpackJsonpableton-templets"]=this["webpackJsonpableton-templets"]||[]).push([[0],{54:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var i,r,c,s,a=n(0),o=n.n(a),l=n(13),d=n.n(l),b=n(49),j=n(15),m=n(27),p=(n(54),n(41),n(10)),u=n(11),h=n(34),g=n.n(h),f=n(14),x=n(1),O=u.a.div(i||(i=Object(p.a)(["\n  border: 2px solid black;\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n"]))),_=u.a.div(r||(r=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border: 1px solid;\n  margin: 2px;\n"]))),v=u.a.div(c||(c=Object(p.a)(["\n  background-color: #fc814a;\n  padding: 4px;\n"]))),y=u.a.div(s||(s=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  @media (max-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"]))),w="All",P=function(e){var t=e.onAdd,n=e.products,i=(e.onRemove,Object(a.useState)(w)),r=Object(m.a)(i,2),c=r[0],s=r[1],o=g.a.uniq(g.a.map(n,"genre"));return o.unshift(w),Object(x.jsxs)(O,{children:[Object(x.jsx)(v,{children:Object(x.jsx)("select",{onChange:function(e){return s(e.target.value)},onBlur:function(e){return s(e.target.value)},children:o.map((function(e){return Object(x.jsx)("option",{value:e,children:e})}))})}),Object(x.jsx)(y,{children:n.filter((function(e){var t=e.genre;return c===w||t===c})).map((function(e){return Object(x.jsxs)(_,{isExpensive:e.price>15,title:e.title,id:e.id,price:e.price,genre:e.genre,img:e.img,audioUrl:e.audioUrl,children:[Object(x.jsx)("div",{children:e.title}),Object(x.jsxs)("div",{children:[e.price,"$"]}),Object(x.jsx)("img",{width:100,height:100,src:e.img,alt:"1"}),Object(x.jsx)("audio",{src:e.audioUrl,controls:"Play"}),Object(x.jsx)("button",{onClick:function(){return t(e)},children:"Add To Cart"}),Object(x.jsx)("button",{children:Object(x.jsx)(f.b,{to:"/details",children:"More Info"})})]})}))})]})},k=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Templets"})})},F=n(5),R=n(75),T=n(74);n.p;var D,I,A,S,U,q=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:["Your Price is:",e.totalPrice,"$"]}),Object(x.jsx)("button",{children:"CheckOut!"})]})},B=u.a.div(D||(D=Object(p.a)(["\n  border: 2px solid black;\n  padding: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  background-color: white;\n"]))),C=u.a.div(I||(I=Object(p.a)(["\n  border: 1px solid ",";\n  margin: 4px;\n  margin-left: 2px;\n  margin-right: 2px;\n"])),(function(e){return e.isExpensive?"blue":"black"})),N=function(e){var t=e.cartItems,n=(e.onAdd,e.product,e.onRemove),i=t.reduce((function(e,t){return e+t.price*t.qty}),0);return Object(x.jsxs)(B,{children:[Object(x.jsx)("h2",{children:"Cart Items"}),Object(x.jsxs)("h3",{children:["Your Total Price is :",i,"$"]}),Object(x.jsx)("div",{children:0===t.length&&Object(x.jsx)("div",{children:"Cart is Empty"})}),t.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)(C,{children:[Object(x.jsx)("div",{children:e.title}),Object(x.jsx)("img",{src:e.img,width:100,height:100}),Object(x.jsxs)("div",{children:[e.price,"$"]}),Object(x.jsx)("div",{children:e.qty}),Object(x.jsx)("button",{onClick:function(){return n(e)},children:"Remove"})]})},e.id)})),Object(x.jsx)(F.a,{exact:!0,path:"/checkout",children:Object(x.jsx)(q,{totalPrice:i})}),Object(x.jsx)(f.b,{to:"/checkout",children:Object(x.jsx)("button",{type:"button",className:"nes-btn is-primary",children:"Check Out"})})]})},H=u.a.div(A||(A=Object(p.a)(["\n  flex: 1;\n"]))),z=u.a.div(S||(S=Object(p.a)(["\n  flex: 1;\n  text-align: right;\n"]))),M=u.a.div(U||(U=Object(p.a)(['\nfont-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;\nfont-size: 0.875em;\nfont-weight: 400;\nbackground-color: #222222;\ncolor: #bbbbbb;\ntext-align: center;\ndisplay: flex;\n']))),E=function(e){var t=e.cartItems,n=e.products,i=e.onAdd,r=e.onRemove;return Object(x.jsxs)(M,{children:[Object(x.jsx)(H,{}),Object(x.jsxs)(H,{children:[Object(x.jsx)(f.b,{to:"/",children:Object(x.jsx)("button",{type:"button",className:"nes-btn is-primary buttona",children:"Home"})}),Object(x.jsx)(f.b,{to:"/gallery",children:Object(x.jsx)("button",{type:"button",className:"nes-btn is-primary buttonb",children:"Sample Packs"})}),Object(x.jsx)(f.b,{to:"/templets",children:Object(x.jsx)("button",{type:"button",className:"nes-btn is-primary buttonb",children:"Templets"})})]}),Object(x.jsx)(z,{children:Object(x.jsx)(R.a,{placement:"bottom",trigger:["click"],overlay:Object(x.jsx)(T.a,{id:"button-tooltip-2",children:Object(x.jsx)(N,{cartItems:t,products:n,onAdd:i,onRemove:r})}),children:function(e){var n=Object.assign({},e);return Object(x.jsxs)("button",Object(j.a)(Object(j.a)({type:"button"},n),{},{className:"nes-btn is-primary buttonb",children:["Basket (",t.length,")"]}))}})})]})},V=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Wow"})})},Y=[{genre:"House",price:"10",id:"1",title:"Deep-House Vibes",img:"https://previews.123rf.com/images/fredep/fredep1702/fredep170200013/71867562-set-of-8-bit-game-style-pixel-art-icon-.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Bla Bla Bla House"},{genre:"Future-Bass",price:"10",id:"2",title:"Trippy Future Bass",img:"https://i.pinimg.com/564x/2e/2b/24/2e2b242b623144dbb9d8dc4b061bb38f.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"The Best Sample Pack Ever!"},{genre:"House",price:"10",id:"3",title:"Groove House",img:"https://image.shutterstock.com/image-vector/set-coin-monster-head-sword-260nw-1781244794.jpg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Amazing Sample Pack"},{genre:"Minimal",price:"10",id:"4",title:"Space Groove",img:"https://cdna.artstation.com/p/assets/images/images/000/613/868/large/hendry-roesly-chr8bit.jpg?1428583453",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"Amazingggg wow"},{genre:"Minimal",price:"10",id:"5",title:"8bit Minimal",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQro2PZt3E9Ayfdn_Itm1PPvCeRpPUMTgbg&usqp=CAU",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"omggg woww thee besttt"},{genre:"Techno",price:"16",id:"5",title:"Dark Techno",img:"https://fsb.zobj.net/crop.php?r=nhzGX9MFl_pKS7NoNaoVoMPf-Kt6PnITdg0IDzV5WXkPp6qhC2rYi2JfDOx1fo1ePTA-sWBlQbBjBnkDu6tUsHpORmYOMz5VgNn0ExB2mQzV-ahFCh7pkBkv5TFPsET9Dm-oUXW0wZ6gKSOXYyT31Bf_Mc1YUbrm7S9mKOLX3Rn7dd-Ze2JdOcvwZqg",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"dfsdfsdfsddfsdfsd"},{genre:"Techno",price:"16",id:"6",title:"8bit Techno",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H_4rRdbTpZt4HoxOI1FHdt7NqtF-0S_zpw&usqp=CAU",audioUrl:"https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Retro_Platforming_-_David_Fesliyan/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3",moreInfo:"dsfsdfsdfsf wow wow wow"}],G=n(38),L=n.n(G),X=n(46),Z=n(23),J=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Sign Up"}),Object(x.jsx)(Z.c,{initialValues:{email:"",password:""},onSubmit:function(){var e=Object(X.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("localhost:3000/login",{method:"POST",body:{email:t.email,password:t.password}});case 2:(n=e.sent).isLoggedIn?(localStorage.set("authToken",n.jwtToken),window.location.reload()):console.log("Login failed");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(x.jsxs)(Z.b,{children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)(Z.a,{id:"email",name:"email",placeholder:"jane@acme.com",type:"email"}),Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)(Z.a,{id:"password",name:"password",type:"password",placeholder:"please insert your password"}),Object(x.jsx)("button",{type:"submit",children:"Submit"})]})})]})};var K=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],i=t[1],r=Y,c=function(e){var t=n.find((function(t){return t.id===e.id}));i(t?n.map((function(n){return n.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty+1}):n})):[].concat(Object(b.a)(n),[Object(j.a)(Object(j.a)({},e),{},{qty:1})]))},s=function(e){var t=n.find((function(t){return t.id===e.id}));1===t.qty?i(n.filter((function(t){return t.id!==e.id}))):i(n.map((function(n){return n.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty-1}):n})))};return Object(x.jsx)(f.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(E,{cartItems:n,products:r,onAdd:c,onRemove:s}),Object(x.jsxs)(F.c,{children:[Object(x.jsx)(F.a,{exact:!0,path:"/gallery",children:Object(x.jsx)(P,{products:r,onAdd:c})}),Object(x.jsx)(F.a,{exact:!0,path:"/",children:Object(x.jsx)("h1",{className:"text",children:"Trippyy Samples"})}),Object(x.jsx)(F.a,{exact:!0,path:"/templets",children:Object(x.jsx)(k,{})}),Object(x.jsx)(F.a,{exact:!0,path:"/details",children:Object(x.jsx)(V,{})}),Object(x.jsx)(F.a,{exact:!0,path:"/login",children:Object(x.jsx)(J,{})}),Object(x.jsx)(F.a,{exact:!0,path:"/basket",children:Object(x.jsx)(N,{cartItems:n,products:r,onAdd:c,onRemove:s})})]})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};d.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(K,{})}),document.getElementById("root")),W()}},[[68,1,2]]]);
//# sourceMappingURL=main.8436aeb4.chunk.js.map