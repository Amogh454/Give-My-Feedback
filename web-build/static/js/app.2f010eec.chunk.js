(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var r=n(6),o=n.n(r),a=n(7),i=n.n(a),c=n(8),l=n.n(c),u=n(9),s=n.n(u),f=n(3),m=n.n(f),p=n(0),d=n.n(p),h=n(1),y=n(38),g=n(56),v=n(363),b=n(20),C=n.n(b),k=n(22),x=n(5),w=n(34),E=n(101),R=n(235),B=n(116);n(318);n(317);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}B.initializeApp({apiKey:"AIzaSyBi-d07AtRUBQ99MwNO-KcL-ot2OimUSCE",authDomain:"complaint-forum-c4f89.firebaseapp.com",projectId:"complaint-forum-c4f89",storageBucket:"complaint-forum-c4f89.appspot.com",messagingSenderId:"12898952167",appId:"1:12898952167:web:1deecb50785301b5ef9342"});var j=function(e){l()(r,e);var t=S(r);function r(e){var n;return o()(this,r),(n=t.call(this,e)).initializeComps=function(){return C.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:B.firestore().collection("complaints").add({title:n.state.title,student:n.state.student,query:n.state.query});case 1:case"end":return e.stop()}}),null,null,null,Promise)},n.submitQuery=function(){return C.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:B.firestore().collection("complaints").doc(n.initializeComps()).get().then((function(e){e.data()&&(n.initializeComps(),"Complain submitted successfully!")})),n.setState({title:"",student:"",query:""});case 2:case"end":return e.stop()}}),null,null,null,Promise)},n.state={title:"",student:"",query:""},n}return i()(r,[{key:"render",value:function(){var e=this;return d.a.createElement(x.a,{style:I.container},d.a.createElement(R.a,{backgroundColor:"#E63946",centerComponent:{text:"My Feedback",style:{color:"black",fontSize:20,fontWeight:"bold"}}}),d.a.createElement(y.a,{style:I.me,source:n(319)}),d.a.createElement(k.a,null),d.a.createElement(E.b,{placeholder:"Breef Intro",onChangeText:function(t){e.setState({title:t})},value:this.state.title,style:I.title}),d.a.createElement(E.b,{placeholder:"Your Name",onChangeText:function(t){e.setState({student:t})},value:this.state.student,style:I.author}),d.a.createElement(E.b,{placeholder:"Tell some words about me like/dislike all...Help me change myself if I am wrong",onChangeText:function(t){e.setState({query:t})},value:this.state.query,style:I.storyText,multiline:!0}),d.a.createElement(w.a,{style:I.submitButton,onPress:this.submitQuery},d.a.createElement(k.a,{style:I.buttonText},"Submit")))}}]),r}(d.a.Component),I=h.a.create({container:{flex:1,backgroundColor:"#fff"},title:{height:40,borderWidth:2,margin:10,color:"black",padding:6},author:{height:40,borderWidth:2,margin:10,padding:6},storyText:{height:250,borderWidth:2,margin:10,padding:6},submitButton:{justifyContent:"center",alignSelf:"center",backgroundColor:"#1D3557",width:80,height:40,color:"black",marginBottom:20},buttonText:{textAlign:"center",color:"white",fontWeight:"bold"},me:{width:100,height:60,margin:10,justifyContent:"center",alignContent:"center",alignSelf:"center"}}),W=n(92);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var q={uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDKAsyA_C9hqv8KhnN-Uq3XPgOK368lGWcDpu3MT4Ms9FlYN3UTnkQBWuvnVJsf85eok&usqp=CAU"},A=function(e){l()(n,e);var t=T(n);function n(){return o()(this,n),t.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return d.a.createElement(W.a,{source:q,resizeMode:"cover",style:O.image},d.a.createElement(x.a,{style:O.container},d.a.createElement(k.a,{style:{fontSize:25,margin:20,justifyContent:"center",alignSelf:"center",alignContent:"center",alignItems:"center",color:"white"}},"Your FeedBack Has Been Submitted to Me Through Firestore. I Will Contact You Later."),d.a.createElement(k.a,{style:{justifyContent:"left",alignItems:"left",marginLeft:100,color:"white"}},"~Amogh P Kaushik")))}}]),n}(d.a.Component),O=h.a.create({container:{flex:1,backgroundImage:"me.jpg",alignItems:"center",justifyContent:"center"},image:{flex:1,justifyContent:"center"}}),z=n(237);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var N=function(e){l()(n,e);var t=P(n);function n(){return o()(this,n),t.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return d.a.createElement(z.a,null,d.a.createElement(M,null))}}]),n}(d.a.Component),K=Object(v.a)({"Write Complaint":j,"Read Complaint":A},{defaultNavigationOptions:function(e){var t=e.navigation;return{tabBarIcon:function(){var e=t.state.routeName;return console.log(e),"Write Complaint"===e?d.a.createElement(y.a,{source:n(337),style:{width:40,height:40}}):"Read Complaint"===e?d.a.createElement(y.a,{source:n(338),style:{width:40,height:40}}):void 0}}}}),M=Object(g.createAppContainer)(K);h.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},238:function(e,t,n){n(239),e.exports=n(339)},239:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},319:function(e,t,n){e.exports=n.p+"static/media/me.a20c93c6.jpg"},337:function(e,t,n){e.exports=n.p+"static/media/complaint.e537edd8.webp"},338:function(e,t,n){e.exports=n.p+"static/media/readC.55c43a13.png"}},[[238,1,2]]]);
//# sourceMappingURL=app.2f010eec.chunk.js.map