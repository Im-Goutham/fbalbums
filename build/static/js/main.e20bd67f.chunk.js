(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(40)},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),i=n(6),s=n(7),u=n(9),l=n(8),m=n(10),p=n(12),b=(n(34),n(5)),d=n(20),f=n(24),h=n(21),O=n.n(h),g={user:{},albums:[]},_=Object(b.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_USER":return Object.assign({},e,{user:t.payload});case"SAVE_USER_ALBUMS":return Object.assign({},e,{albums:t.payload});default:return e}}}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,E=(O.a,Object(b.e)(_,j(Object(b.a)(d.a)))),y=(Object(f.a)(E),n(42)),w=n(43),v=n(44),k=n(22),S=n.n(k),A=function(){return function(e){window.FB.api("/me","GET",{fields:"id,name,albums{id,description,cover_photo,photos.limit(10){album,backdated_time,backdated_time_granularity,can_backdate,images,link,icon,height,from,event,created_time,can_tag,can_delete,id,name,name_tags,page_story_id,picture,place,target,updated_time,webp_images,width,comments}}"},function(t){var n;console.log("response is ",JSON.stringify(t)),e((n=t,console.log("user albums are ",n),{type:"SAVE_USER_ALBUMS",payload:n}))})}},U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).responseFacebook=function(e){console.log("response from fb is ",JSON.stringify(e)),n.getAlbums()},n.getAlbums=function(){n.props.getUserAlbums()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{appId:"386989675183136",autoLoad:!1,scope:"public_profile,email,user_friends,user_photos",fields:"name,email,picture,albums",cssClass:"ui facebook button",callback:this.responseFacebook}))}}]),t}(a.Component),C=Object(p.b)(function(e){return{}},function(e){return{getUserAlbums:function(t){return e(A())}}})(U),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},"Page not found",o.a.createElement("button",{onClick:function(){return e.props.history.push("/")}},"Go to Home"))}}]),t}(a.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,null,o.a.createElement(v.a,{exact:!0,path:"/",component:C}),o.a.createElement(v.a,{component:B}))))}}]),t}(o.a.Component),N=(n(38),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:E},o.a.createElement(F,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.e20bd67f.chunk.js.map