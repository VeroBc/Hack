(this.webpackJsonphackaton=this.webpackJsonphackaton||[]).push([[0],{15:function(e,c,t){},64:function(e,c,t){},68:function(e,c,t){},88:function(e,c,t){},94:function(e,c,t){},95:function(e,c,t){"use strict";t.r(c);var s=t(1),a=(t(44),t(3)),r=t.n(a),n=t(23),i=t.n(n),o=t(51),l=(t(62),t(63),o.a.initializeApp({apiKey:"AIzaSyCh5-4oHnNyUlxv4n-QN0Oi37qIuj7j114",authDomain:"hackaton-squad2.firebaseapp.com",projectId:"hackaton-squad2",storageBucket:"hackaton-squad2.appspot.com",messagingSenderId:"214431440822",appId:"1:214431440822:web:89d6789b1a198233b26b17"})),d=l.firestore(),j=l.auth(),m=(t(64),t(56)),b=t(11),u=t(17),h=t(12),O=t(25),x=t(26),f=function(e){return d.collection("users").doc(e.uid).set(e).then((function(){console.log("Document successfully written!")})).catch((function(e){console.log("problemas al crear la coleccion de users",e)}))},p=r.a.createContext(),g=function(e){var c=e.children,t=Object(a.useState)(),r=Object(b.a)(t,2),n=r[0],i=r[1];return Object(a.useEffect)((function(){j.onAuthStateChanged((function(e){i(e)}))}),[]),Object(s.jsx)(p.Provider,{value:n,children:c})},v=(t(15),t(52)),N=(t(67),["imagenes/banner1.png","imagenes/banner2.jpeg","imagenes/banner3.png"]),y=function(){return Object(s.jsxs)("div",{className:"slide-container",children:[Object(s.jsxs)(v.Fade,{children:[Object(s.jsx)("div",{className:"each-fade",children:Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:N[0],alt:"marca",className:"banner1  "})})}),Object(s.jsx)("div",{className:"each-fade",children:Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:N[1],alt:"marca",className:"banner2"})})}),Object(s.jsx)("div",{className:"each-fade",children:Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:N[2],alt:"marca",className:"banner3"})})})]}),Object(s.jsx)("img",{src:"/imagenes/barra.png",alt:"marca",className:"container-bold"}),Object(s.jsx)("div",{className:"container-texto",children:Object(s.jsx)("h1",{className:"container-texto-proximos",children:" Pr\xf3ximos lanzamientos "})}),Object(s.jsxs)("div",{className:"container-productos",children:[Object(s.jsx)("img",{src:"/imagenes/producto1.png",alt:"marca",className:"producto-home"}),Object(s.jsx)("img",{src:"/imagenes/producto2.png",alt:"marca",className:"producto-home"}),Object(s.jsx)("img",{src:"/imagenes/producto3.png",alt:"marca",className:"producto-home"})]}),Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsx)("div",{className:"foto1 img-hover-zoom--quick-zoom",children:Object(s.jsx)("img",{src:"/imagenes/producto4.png",alt:"marca",className:"container-bold"})}),Object(s.jsx)("div",{className:"foto2 img-hover-zoom--zoom-n-pan-v",children:Object(s.jsx)("img",{src:"/imagenes/producto6.png",alt:"marca",className:"container-bold"})}),Object(s.jsx)("div",{className:"foto3 img-hover-zoom--zoom-n-rotate ",children:Object(s.jsx)("img",{src:"/imagenes/producto5.png",alt:"marca",className:"container-bold-foto3"})})]})]})},C=(t(68),t(53)),w=t.n(C),k=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{class:"grid-containerNosotros",children:[Object(s.jsx)("div",{class:"bannerNosotros",children:Object(s.jsx)("img",{src:"/imagenes/nosotros.jpg",alt:"marca",className:"bannermarca"})}),Object(s.jsx)("div",{class:"videonosotros",children:Object(s.jsx)(w.a,{url:"https://www.youtube.com/watch?v=r_Cny9XFzAY&ab_channel=BelcorpCorporativo",controls:!0,className:"react-player",playbackRate:2,width:"100%",height:"100%"})}),Object(s.jsx)("div",{className:"fontTitulo",children:"Nosotros"}),Object(s.jsx)("div",{className:"fontTexto",children:"Somos una corporaci\xf3n multinacional de belleza con m\xe1s de 50 a\xf1os de experiencia en la venta directa. Desde nuestra fundaci\xf3n, hemos acompa\xf1ado a millones de mujeres en el logro de su independencia econ\xf3mica a trav\xe9s de la venta de productos de nuestras tres marcas, \xc9sika, L\u2019Bel y Cyzone."}),Object(s.jsx)("div",{className:"fontTexto",children:"Con un prop\xf3sito que trasciende el resultado econ\xf3mico -Impulsamos belleza para lograr la realizaci\xf3n personal\u2013, inspiramos a cada persona a dar lo mejor de s\xed para que ella y su entorno logren lo extraordinario."}),Object(s.jsx)("div",{className:"fontTitulo",children:"Nuestros compromisos"}),Object(s.jsx)("div",{className:"fontTexto",children:"Compartimos el compromiso de contribuir a un desarrollo sostenible, construyendo relaciones s\xf3lidas y duraderas con nuestros grupos de inter\xe9s."})]}),Object(s.jsx)("div",{className:"cont-img-nosotros",children:Object(s.jsx)("img",{src:"/imagenes/nosotros.jpeg",alt:"marca",className:"img-nosotros"})}),Object(s.jsx)("div",{})]})},A=function(e){var c=!!e.seleccionar,t=parseInt(e.item.price-e.item.price*(e.item.discount/100));return console.log(e.inCart),Object(s.jsxs)("ul",{style:I.container,className:"unorderList",children:[Object(s.jsx)("div",{className:"name",style:I.name,children:e.item.name}),Object(s.jsx)("div",{className:"description",style:I.description,children:e.item.description}),Object(s.jsx)("div",{className:"brand",style:I.description,children:e.item.brand}),c&&Object(s.jsxs)("div",{className:"price",style:I.price,children:["S/. ",e.item.price]}),c&&Object(s.jsxs)("div",{className:"discount",style:I.price,children:["Oferta S/. ",t]}),!c&&Object(s.jsxs)("div",{className:"discount",style:I.price,children:["Precio S/. ",t]}),Object(s.jsx)("img",{src:e.item.imgUrl,className:"photoProduct",alt:"Camera"}),c&&!e.inCart&&Object(s.jsx)("button",{className:"cart",onClick:function(){return e.seleccionar(e.item)},children:"A\xf1adir al carrito"}),e.inCart&&Object(s.jsx)("button",{className:"cart",onClick:e.borrar,children:"Quitar del carrito"}),c&&Object(s.jsx)("button",{className:"buynow",children:"Comprar ahora"})]})},I={container:{flex:1,flexDirection:"row",justifyContent:"flex-start"},description:{display:"inline-block"},price:{display:"inline-block"}},q=function(e){var c=Object(a.useState)([]),t=Object(b.a)(c,2),r=t[0],n=t[1];Object(a.useEffect)((function(){return function(e,c){d.collection("products").where("brand","==",c).get().then((function(c){var t=[];c.forEach((function(e){return t.push(Object(O.a)({id:e.id},e.data()))})),e(t)})).catch((function(e){console.log("Error getting documents: ",e)}))}(n,e.brandType)}),[e.brandType]);var i=function(c){for(var t=0;t<e.orderList.length;t++)if(c.id===e.orderList[t].id)return!0};return Object(s.jsx)("div",{className:"Menu productsList",style:T.container,children:r.map((function(c,t){return Object(s.jsx)(A,{item:c,seleccionar:e.addItemToOrder,borrar:function(){return e.deleteItemFromOrder(c)},inCart:i(c)},"m"+t)}))})},T={container:{flex:1,flexDirection:"row",justifyContent:"flex-start",borderStyle:"groove"}},L=t(32),S=function(e){var c=Object(a.useState)("ESIKA"),t=Object(b.a)(c,2),r=t[0],n=t[1],i=function(e){document.querySelector("#brandd").scrollIntoView({behavior:"smooth"}),n(e)};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"container-bu",children:[Object(s.jsxs)("div",{style:{position:"relative"},children:[Object(s.jsx)("img",{src:"/imagenes/esika.png",alt:"marca",className:"marcaesika"}),Object(s.jsxs)(L.a,{className:"button1",variant:"light",size:"sm",children:[Object(s.jsx)("div",{onClick:function(){return i("ESIKA")},className:"link-marca",children:"Ver productos "})," "]})]}),Object(s.jsxs)("div",{style:{position:"relative"},children:[Object(s.jsx)("img",{src:"/imagenes/lbel.png",alt:"marca",className:"marcaesika"}),Object(s.jsx)(L.a,{className:"button1",variant:"light",size:"sm",children:Object(s.jsx)("div",{onClick:function(){return i("L'BEL")},className:"link-marca",children:"Ver productos "})})]}),Object(s.jsxs)("div",{style:{position:"relative"},children:[Object(s.jsx)("img",{src:"/imagenes/cyzone.png",alt:"marca",className:"marcaesika"}),Object(s.jsx)(L.a,{className:"button1",variant:"light",size:"sm",children:Object(s.jsx)("div",{onClick:function(){return i("CYZONE")},className:"link-marca",children:"Ver productos "})})]})]}),Object(s.jsx)("div",{id:"brandd",style:{height:50}}),Object(s.jsxs)("h3",{style:{marginLeft:"1.5%"},children:["  Marca: ",r]}),Object(s.jsx)(q,{brandType:r,addItemToOrder:e.addItemToOrder,deleteItemFromOrder:e.deleteItemFromOrder,user:e.user,orderList:e.orderList})]})},E=function(e){var c=Object(a.useState)([]),t=Object(b.a)(c,2),r=t[0],n=t[1];Object(a.useEffect)((function(){return c=n,t=e.categoryType,void d.collection("products").where("category","==",t).get().then((function(e){var t=[];e.forEach((function(e){return t.push(Object(O.a)({id:e.id},e.data()))})),c(t)})).catch((function(e){console.log("Error getting documents: ",e)}));var c,t}),[e.categoryType]);var i=function(c){for(var t=0;t<e.orderList.length;t++)if(c.id===e.orderList[t].id)return!0};return Object(s.jsx)("div",{className:"Menu productsList",style:F.container,children:r.map((function(c,t){return Object(s.jsx)(A,{item:c,seleccionar:e.addItemToOrder,borrar:function(){return e.deleteItemFromOrder(c)},inCart:i(c)},"m"+t)}))})},F={container:{flex:1,flexDirection:"row",justifyContent:"flex-start",borderStyle:"groove"}},B=(t(88),function(e){var c=Object(a.useState)("maquillaje"),t=Object(b.a)(c,2),r=t[0],n=t[1];return Object(s.jsx)("div",{children:Object(s.jsxs)("section",{children:[Object(s.jsx)("div",{className:"subheader",children:Object(s.jsxs)("div",{className:"filters",children:[Object(s.jsx)("a",{href:"#",className:"filtersA",onClick:function(){return n("maquillaje")},children:"Maquillaje"}),Object(s.jsx)("a",{href:"#",className:"filtersA",onClick:function(){return n("fragancias")},children:"Fragancias"}),Object(s.jsx)("a",{href:"#",className:"filtersA",onClick:function(){return n("accesorios cosm\xe9ticos")},children:"Accesorios cosm\xe9ticos"}),Object(s.jsx)("a",{href:"#",className:"filtersA",onClick:function(){return n("cuidado personal")},children:"Cuidado personal"}),Object(s.jsx)("a",{href:"#",className:"filtersA",onClick:function(){return n("tratamiento corporal")},children:"Tratamiento corporal"}),Object(s.jsx)("a",{href:"#",className:"filtersA",onClick:function(){return n("tratamiento facial")},children:"Tratamiento facial"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(E,{categoryType:r,addItemToOrder:e.addItemToOrder,deleteItemFromOrder:e.deleteItemFromOrder,user:e.user,orderList:e.orderList})})]})})}),P=function(){return Object(s.jsx)("h2",{children:"Promociones"})},z=t(36),M=t(55),D=function(){var e=Object(s.jsxs)(z.a,{id:"popover-basic",children:[Object(s.jsx)(z.a.Title,{as:"h3",children:"Mensaje enviado"}),Object(s.jsx)(z.a.Content,{children:"Gracias por contactarte con nostros. En breve, nos comunicaremos contigo"})]}),c=function(){return Object(s.jsx)(M.a,{trigger:"click",placement:"right",overlay:e,children:Object(s.jsx)(L.a,{variant:"success",children:"Enviar"})})};return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"/imagenes/bannercontacto.jpg",alt:"marca",className:"bannermarca"})}),Object(s.jsx)("div",{children:Object(s.jsx)("section",{className:"Material-contact-section section-padding section-dark",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-12 wow animated fadeInLeft","data-wow-delay":".2s",children:Object(s.jsx)("h1",{className:"section-title",children:"Nos gustar\xeda saber de ti"})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft","data-wow-delay":".2s",children:[Object(s.jsx)("p",{children:"\xa1Bienvenida Consultora! Nos reinventamos para ayudarte a potenciar tu negocio de manera m\xe1s f\xe1cil, r\xe1pida y segura con la ayuda de nuestras herramientas digitales. Sigue nuestra p\xe1gina o comunicate con nosotros, para enterarte de las novedades que tenemos para ti."}),Object(s.jsxs)("div",{className:"find-widget",children:["Company:  ",Object(s.jsx)("a",{href:"https://www.somosbelcorp.com/",children:"Belcorp"})]}),Object(s.jsxs)("div",{className:"find-widget",children:["Direcci\xf3n: ",Object(s.jsx)("a",{href:"https://www.google.com/search?q=ubicacion%20belcorp&rlz=1C1AVFC_enPE865PE865&oq=ubicacion+belrcorp&aqs=chrome.1.69i57j0i13i30j0i8i13i30.6303j1j4&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=ALeKk019tY_bNpbIVNLsXXePdMI_IEN_5g:1611783471249&rflfq=1&num=10&rldimm=17798119845327134407&lqi=ChF1YmljYWNpb24gYmVsY29ycCIDiAEBWhIKB2JlbGNvcnAiB2JlbGNvcnA&ved=2ahUKEwjCrIiqib3uAhWFHbkGHRKmBu4QvS4wAHoECAUQGg&rlst=f#rlfi=hd:;si:17798119845327134407,l,ChF1YmljYWNpb24gYmVsY29ycCIDiAEBWhIKB2JlbGNvcnAiB2JlbGNvcnA;mv:[[-11.933058299999999,-76.9341219],[-12.229834799999999,-77.10824219999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4",children:"Lima, Per\xfa"})]}),Object(s.jsxs)("div",{className:"find-widget",children:["Tel\xe9fono:  ",Object(s.jsx)("a",{href:"/",children:"(+51 1) 2113300"})]}),Object(s.jsxs)("div",{className:"find-widget",children:["Website:  ",Object(s.jsx)("a",{href:"https://www.somosbelcorp.com/",children:"www.somosbelcorp.com"})]})]}),Object(s.jsx)("div",{className:"col-md-6 wow animated fadeInRight","data-wow-delay":".2s",children:Object(s.jsxs)("form",{className:"shake",method:"post",id:"contactForm",name:"contact-form","data-toggle":"validator",children:[Object(s.jsxs)("div",{className:"form-group label-floating",children:[Object(s.jsx)("label",{className:"control-label",for:"name",children:"Nombre"}),Object(s.jsx)("input",{className:"form-control",id:"name",type:"text",name:"name",required:!0,"data-error":"Por favor ingresa tu nombre"}),Object(s.jsx)("div",{className:"help-block with-errors"})]}),Object(s.jsxs)("div",{className:"form-group label-floating",children:[Object(s.jsx)("label",{className:"control-label",for:"email",children:"Email"}),Object(s.jsx)("input",{className:"form-control",id:"email",type:"email",name:"email",required:!0,"data-error":"Please enter your Email"}),Object(s.jsx)("div",{className:"help-block with-errors"})]}),Object(s.jsxs)("div",{className:"form-group label-floating",children:[Object(s.jsx)("label",{className:"control-label",children:"Asunto"}),Object(s.jsx)("input",{className:"form-control",id:"msg_subject",type:"text",name:"subject",required:!0,"data-error":"Please enter your message subject"}),Object(s.jsx)("div",{className:"help-block with-errors"})]}),Object(s.jsxs)("div",{className:"form-group label-floating",children:[Object(s.jsx)("label",{for:"message",class:"control-label",children:"Mensaje"}),Object(s.jsx)("textarea",{className:"form-control",rows:"3",id:"message",name:"message",required:!0,"data-error":"Write your message"}),Object(s.jsx)("div",{className:"help-block with-errors"})]}),Object(s.jsx)("div",{className:"form-submit mt-5",children:Object(s.jsx)(c,{})})]})})]})]})})})]})},U=t(31),G=/^[A-Za-z]\w{6,20}$/,K=function(){var e=new x.a.auth.GoogleAuthProvider;return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"inputButton",onClick:function(){x.a.auth().signInWithPopup(e).then((function(){return j.currentUser})).then((function(e){return f({uid:e.uid,mail:e.email,name:e.displayName,photo:e.photoURL})})).then((function(){window.location="/"}))},children:"INGRESA CON GOOGLE"}),Object(s.jsx)("button",{className:"inputButton",children:"INGRESA CON FACEBOOK"}),Object(s.jsx)("button",{className:"inputButton",children:"INGRESA CON APPLE"})]})},Y=function(){var e=Object(a.useState)({email:"",password:""}),c=Object(b.a)(e,2),t=c[0],r=c[1],n=function(e){r((function(c){return Object(O.a)(Object(O.a)({},c),{},Object(U.a)({},e.target.name,e.target.value))}))};return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(t),console.log(t.email,t.password),function(e,c){var t=document.getElementById("errorMessage");c.match(G)?x.a.auth().createUserWithEmailAndPassword(e,c).then((function(e){return e.user})).then((function(e){return f({uid:e.uid,mail:e.email,name:e.email.match(/^([^@]*)@/)[1],photo:"../img/user-default.svg"})})).then((function(){window.location="/"})).catch((function(e){return t.innerHTML=e.message,t})):t.innerHTML="La contrase\xf1a debe tener al menos 6 caracteres, una letra y un n\xfamero"}(t.email,t.password)},action:"/",method:"POST",className:"signUpForm",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(K,{})}),Object(s.jsx)("p",{className:"motto",children:"O registrarse con:"}),Object(s.jsx)("input",{type:"text",name:"email",placeholder:"Correo electr\xf3nico",value:t.email,className:"inputButton",onChange:n,required:!0}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",value:t.password,onChange:n,className:"inputButton",required:!0}),Object(s.jsx)("div",{id:"errorMessage"})]}),Object(s.jsx)("button",{type:"submit",className:"signUpButton",children:"Reg\xedstrate"}),Object(s.jsxs)("p",{className:"motto",children:["\xbfTienes una cuenta?",Object(s.jsx)("a",{href:"/signin",className:"login",style:R.color,children:"Inicia sesi\xf3n"})]})]})})},R={color:{color:"#173083"}},V=function(){var e=Object(a.useState)({email:"",password:""}),c=Object(b.a)(e,2),t=c[0],r=c[1],n=function(e){r((function(c){return Object(O.a)(Object(O.a)({},c),{},Object(U.a)({},e.target.name,e.target.value))}))};return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(t),console.log(t.email,t.password),function(e,c){var t=document.getElementById("errorMessage");x.a.auth().signInWithEmailAndPassword(e,c).then((function(){window.location="/"})).catch((function(e){return t.innerHTML=e.message,t}))}(t.email,t.password)},action:"/",method:"POST",className:"signUpForm",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(K,{})}),Object(s.jsx)("p",{className:"motto",children:"O iniciar sesi\xf3n con:"}),Object(s.jsx)("input",{type:"text",name:"email",placeholder:"Correo electr\xf3nico",value:t.email,className:"inputButton",onChange:n,required:!0}),Object(s.jsx)("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",value:t.password,onChange:n,className:"inputButton",required:!0}),Object(s.jsx)("div",{id:"errorMessage"})]}),Object(s.jsx)("button",{type:"submit",className:"signUpButton",children:"Inicia sesi\xf3n"}),Object(s.jsxs)("p",{className:"motto",children:["\xbfNo tienes una cuenta?",Object(s.jsx)("a",{href:"/signup",className:"login",style:W.color,children:"Reg\xedstrate"})]})]})})},W={color:{color:"#173083"}},_=function(e){var c=e.orderList,t=Object(h.f)();return Object(s.jsxs)("div",{className:"orderKitchen",children:[Object(s.jsx)("div",{className:"listKitchen",children:c.map((function(c,t){return Object(s.jsx)(A,{item:c,inCart:!0,borrar:function(){return e.deleteItemFromOrder(c)}},"ik"+t)}))}),Object(s.jsxs)("div",{className:"totalPrice",children:[Object(s.jsx)("div",{className:"total",children:"Total pedido"}),Object(s.jsxs)("div",{className:"amount",children:["S/. ",e.orderList.reduce((function(e,c){return e+parseInt(c.price-c.price*(c.discount/100))}),0).toFixed(2)]}),Object(s.jsx)("button",{className:"buttonOrder",onClick:function(){t.push("/payment")},children:"Comprar ahora"})]})]})},H=function(e){return Object(s.jsx)("div",{className:"orderKitchen",children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container-formulary",children:[Object(s.jsxs)("div",{className:"first-form",children:[Object(s.jsx)("h4",{className:"mb-3",children:"Direccion de Env\xedo"}),Object(s.jsxs)("form",{className:"form-container",children:[Object(s.jsx)("label",{for:"nombre",children:"Nombre"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"nombre",name:"nombre",required:!0}),Object(s.jsx)("label",{for:"apellido",children:"Apellido"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"apellido",name:"apellido",required:!0}),Object(s.jsx)("label",{for:"correo",children:"Correo"}),Object(s.jsx)("input",{type:"email",className:"form-control",placeholder:"nombre@correo.com",name:"correo",required:!0}),Object(s.jsx)("label",{for:"direccion",children:"Direccion"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"",name:"direccion",required:!0}),Object(s.jsx)("label",{for:"pais",children:"Pais"}),Object(s.jsxs)("select",{name:"pais",id:"pais",className:"custom-select d-block w-100",children:[Object(s.jsx)("option",{value:"",children:"Seleccionar Departamento"}),Object(s.jsx)("option",{value:"mexico",children:"Lima"}),Object(s.jsx)("option",{value:"espa\xf1a",children:"Arequipa"}),Object(s.jsx)("option",{value:"colombia",children:"Cusco"})]}),Object(s.jsx)("label",{for:"estado",children:"Distrito"}),Object(s.jsx)("input",{type:"text",id:"distrito",className:"form-control",required:!0}),Object(s.jsx)("label",{for:"codigo-postal",children:"Codigo Postal"}),Object(s.jsx)("input",{type:"text",id:"codigo-postal",className:"form-control",required:!0}),Object(s.jsx)("label",{for:"numero-tarjeta",children:"Numero de tarjeta"}),Object(s.jsx)("input",{type:"text",id:"numero-tarjeta",className:"form-control",required:!0}),Object(s.jsx)("label",{for:"nombre-tarjeta",children:"Nombre en la tarjeta"}),Object(s.jsx)("input",{type:"text",id:"nombre-tarjeta",className:"form-control",required:!0}),Object(s.jsx)("small",{className:"text-muted",children:"Nombre completo como se muestra en la tarjeta"}),Object(s.jsx)("label",{for:"tarjeta-expiracion",children:"Expiraci\xf3n"}),Object(s.jsx)("input",{type:"text",id:"tarjeta-expiracion",className:"form-control",required:!0}),Object(s.jsx)("label",{for:"tarjeta-ccv",children:"CVV"}),Object(s.jsx)("input",{type:"text",id:"tarjeta-ccv",className:"form-control",required:!0}),Object(s.jsx)("input",{type:"submit",value:"Continuar al pago",className:"btn-submit"})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"mb-3 d-flex justify-content-between align-items-center",children:Object(s.jsx)("span",{className:"text-muted",children:"Tu Carrito"})}),Object(s.jsxs)("ul",{className:"list-group mb-3",children:[e.orderList.map((function(e,c){return Object(s.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(s.jsx)("h6",{className:"my-0",children:e.name}),Object(s.jsx)("small",{className:"text-muted",children:e.description}),Object(s.jsx)("span",{className:"text-muted",children:e.price})]},"ik"+c)})),Object(s.jsxs)("li",{className:"list-group-item d-flex justify-content-between bg-light",children:[Object(s.jsx)("span",{children:"Total (SOLES)"}),Object(s.jsx)("strong",{children:Object(s.jsxs)("div",{className:"amount",children:["S/. ",e.orderList.reduce((function(e,c){return e+parseInt(c.price-c.price*(c.discount/100))}),0).toFixed(2)]})})]})]}),Object(s.jsxs)("form",{action:"",className:"card p-2",children:[Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Cupon"}),Object(s.jsx)("button",{className:"btn btn-secondary",children:"Canjear"})]})]})]})})})},J=function(){var e=Object(a.useState)("maquillaje"),c=Object(b.a)(e,2),t=c[0],r=c[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"/imagenes/esikamarca.png",alt:"marca",className:"bannermarca"})}),Object(s.jsxs)("section",{href:"#nav-second",children:[Object(s.jsx)("div",{className:"subheader",children:Object(s.jsxs)("h1",{className:"filters",children:[Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("maquillaje")},className:"filtersA",children:"Maquillaje"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("fragancias")},className:"filtersA",children:"Fragancias"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("accesorios cosm\xe9ticos")},className:"filtersA",children:"Accesorios cosm\xe9ticos"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("cuidado personal")},className:"filtersA",children:"Cuidado personal"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("tratamiento corporal")},className:"filtersA",children:"Tratamiento corporal"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("tratamiento facial")},className:"filtersA",children:"Tratamiento facial"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(E,{categoryType:t})})]})]})},Q=function(){var e=Object(a.useState)("maquillaje"),c=Object(b.a)(e,2),t=c[0],r=c[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"/imagenes/lbelmarca.png",alt:"marca",className:"bannermarca"})}),Object(s.jsxs)("section",{href:"#nav-second",children:[Object(s.jsx)("div",{className:"subheader",children:Object(s.jsxs)("h1",{className:"filters",children:[Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("maquillaje")},className:"filtersA",children:"Maquillaje"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("fragancias")},className:"filtersA",children:"Fragancias"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("accesorios cosm\xe9ticos")},className:"filtersA",children:"Accesorios cosm\xe9ticos"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("cuidado personal")},className:"filtersA",children:"Cuidado personal"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("tratamiento corporal")},className:"filtersA",children:"Tratamiento corporal"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("tratamiento facial")},className:"filtersA",children:"Tratamiento facial"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(E,{categoryType:t})})]})]})},X=function(){var e=Object(a.useState)("maquillaje"),c=Object(b.a)(e,2),t=c[0],r=c[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"/imagenes/cyzonemarca.png",alt:"marca",className:"bannermarca"})}),Object(s.jsxs)("section",{href:"#nav-second",children:[Object(s.jsx)("div",{className:"subheader",children:Object(s.jsxs)("h1",{className:"filters",children:[Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("maquillaje")},className:"filtersA",children:"Maquillaje"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("fragancias")},className:"filtersA",children:"Fragancias"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("accesorios cosm\xe9ticos")},className:"filtersA",children:"Accesorios cosm\xe9ticos"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("cuidado personal")},className:"filtersA",children:"Cuidado personal"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("tratamiento corporal")},className:"filtersA",children:"Tratamiento corporal"}),Object(s.jsx)("a",{href:"#nav-second",onClick:function(){return r("tratamiento facial")},className:"filtersA",children:"Tratamiento facial"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(E,{categoryType:t})})]})]})},Z=t(24),$=t(27),ee=t(30),ce=(t(94),function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"footer-container",children:[Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("img",{src:"https://i.ibb.co/8gDCgXw/logo-ultimo.jpg",alt:"logo-ultimo",border:"0",className:"logo"})]}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"L\xb4bel"}),Object(s.jsx)("li",{children:"\xc9sika"}),Object(s.jsx)("li",{children:"Cyzone"})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Terminos y condiones"}),Object(s.jsx)("li",{children:"Condiciones de uso web"}),Object(s.jsx)("li",{children:"Quiz Capevedi"}),Object(s.jsx)("li",{children:"Cont\xe1ctanos"})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Pol\xedtica de privacidad y cookies"}),Object(s.jsx)("li",{children:"Codigo de etica Beautycorp"}),Object(s.jsx)("li",{children:"Pedidos y Devoluciones"}),Object(s.jsx)("li",{children:"B\xfasqueda Avanzada"})]})}),Object(s.jsx)("div",{className:"icon-container",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{href:"https://www.instagram.com/belcorpcorporativo/?hl=es-la",className:"router-icon",children:Object(s.jsx)(Z.a,{className:"router-icon",icon:$.b})}),Object(s.jsx)("a",{href:"https://www.facebook.com/BelcorpCorporativo/",className:"router-icon",children:Object(s.jsx)(Z.a,{className:"router-icon",icon:$.a})}),Object(s.jsx)("a",{href:"https://www.youtube.com/user/somosbelcorp",className:"router-icon",children:Object(s.jsx)(Z.a,{className:"router-icon",icon:$.c})})]})})]}),Object(s.jsx)("div",{className:"cont-img-tarj",children:Object(s.jsx)("img",{src:"https://i.ibb.co/hmQvjmc/tarjetas.jpg",alt:"tarjetas",border:"0",className:"img-tarjetas"})}),Object(s.jsx)("div",{className:"footer-div",children:Object(s.jsx)("footer",{children:Object(s.jsx)("h4",{className:"h4-footer",children:"\xa9 2020 Beautycorp Todos los derechos reservados"})})})]})}),te=function(){var e=Object(a.useState)(null),c=Object(b.a)(e,2),t=c[0],r=c[1],n=Object(a.useContext)(p),i=function(e){(function(){var e=x.a.auth().currentUser;return e?x.a.firestore().collection("users").doc(e.uid).get().then((function(e){return e.data()})).catch((function(e){return console.log("error while getting currentUser docRef",e)})):Promise.resolve(null)})().then((function(e){return r(e)}))},o=Object(a.useState)([]),l=Object(b.a)(o,2),d=l[0],O=l[1],f=function(e){O([].concat(Object(m.a)(d),[e]))},g=function(e){var c=d.filter((function(c){return c.id!==e.id}));O(c)};return Object(a.useEffect)((function(){return i()}),[n]),Object(s.jsx)(u.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{style:{display:"flex",position:"fixed",backgroundColor:"white",zIndex:5e3,top:0,left:0,right:0},children:[Object(s.jsx)("div",{style:{flex:.2,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("img",{src:"https://i.ibb.co/8gDCgXw/logo-ultimo.jpg",alt:"logo-ultimo",className:"logo",border:"0"})}),Object(s.jsxs)("div",{style:{flex:.8,display:"flex",alignItems:"center",justifyContent:"space-evenly"},children:[Object(s.jsx)(u.b,{className:"routes-nav",to:"/",children:"Home"}),Object(s.jsx)(u.b,{className:"routes-nav",to:"/nosotros",children:"Nosotros"}),Object(s.jsx)(u.b,{className:"routes-nav",to:"/nuestrasMarcas",children:"Nuestras Marcas"}),Object(s.jsx)(u.b,{className:"routes-nav",to:"/categorias",children:"Categor\xedas"}),Object(s.jsx)(u.b,{className:"routes-nav",to:"/promociones",children:"Promociones"}),Object(s.jsx)(u.b,{className:"routes-nav",to:"/contacto",children:"Contacto"}),Object(s.jsx)(u.b,{to:"/",className:"routes-nav",children:Object(s.jsx)(Z.a,{className:"icon",icon:ee.b})}),Object(s.jsx)(u.b,{className:"routes-nav",to:"/signin",children:Object(s.jsx)(Z.a,{className:"icon",icon:ee.e})}),Object(s.jsx)(u.b,{to:"/signin",className:"routes-nav",children:Object(s.jsx)(Z.a,{className:"icon",icon:ee.a})}),Object(s.jsxs)(u.b,{className:"routes-nav",to:"/cart",children:[Object(s.jsx)(Z.a,{className:"icon",icon:ee.c}),Object(s.jsx)("div",{className:"quantity",children:d.length})]}),Object(s.jsx)(Z.a,{className:"signOutIcon",onClick:function(){j.signOut().then((function(){window.location="/"}))},icon:ee.d}),t&&Object(s.jsx)("p",{children:t.name})]})]}),Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{path:"/nosotros",children:Object(s.jsx)(k,{})}),Object(s.jsx)(h.a,{path:"/nuestrasMarcas",children:Object(s.jsx)(S,{user:t,addItemToOrder:f,deleteItemFromOrder:g,orderList:d})}),Object(s.jsx)(h.a,{path:"/categorias",children:Object(s.jsx)(B,{user:t,addItemToOrder:f,deleteItemFromOrder:g,orderList:d})}),Object(s.jsx)(h.a,{path:"/promociones",children:Object(s.jsx)(P,{})}),Object(s.jsx)(h.a,{path:"/contacto",children:Object(s.jsx)(D,{})}),Object(s.jsx)(h.a,{path:"/signin",children:Object(s.jsx)(V,{})}),Object(s.jsx)(h.a,{path:"/signup",children:Object(s.jsx)(Y,{})}),Object(s.jsx)(h.a,{path:"/cart",children:Object(s.jsx)(_,{orderList:d,deleteItemFromOrder:g})}),Object(s.jsx)(h.a,{path:"/payment",children:Object(s.jsx)(H,{orderList:d})}),Object(s.jsx)(h.a,{path:"/esika",children:Object(s.jsx)(J,{})}),Object(s.jsx)(h.a,{path:"/lbel",children:Object(s.jsx)(Q,{})}),Object(s.jsx)(h.a,{path:"/cyzone",children:Object(s.jsx)(X,{})}),Object(s.jsxs)(h.a,{path:"/",children:[Object(s.jsx)(y,{}),Object(s.jsx)(B,{user:t,addItemToOrder:f,deleteItemFromOrder:g,orderList:d})]})]}),Object(s.jsx)(ce,{})]})})},se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,100)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,r=c.getLCP,n=c.getTTFB;t(e),s(e),a(e),r(e),n(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g,{children:Object(s.jsx)(te,{})})}),document.getElementById("root")),se()}},[[95,1,2]]]);
//# sourceMappingURL=main.6a9b900c.chunk.js.map