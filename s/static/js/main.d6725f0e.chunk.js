(this["webpackJsonpstore-display-react"]=this["webpackJsonpstore-display-react"]||[]).push([[0],{36:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(29),c=a.n(r),i=a(19),o=a(4),d=(a(36),a(15)),l=a(17),m=a(16),h=a(23);a(46);h.a.initializeApp({apiKey:"AIzaSyDnDNO35g67ZoVTpXAxKvyqkRku7MNVn7s",authDomain:"nearst-a1d49.firebaseapp.com",databaseURL:"https://nearst-a1d49.firebaseio.com",projectId:"nearst-a1d49",storageBucket:"nearst-a1d49.appspot.com",messagingSenderId:"462669832601",appId:"1:462669832601:web:b609ac145a36a3d29b7308",measurementId:"G-8ZX16C0P41"});var b=h.a,p=a.p+"static/media/logo.620f8956.svg",j=(a(38),a(2)),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var a=e.data(),s=a.storeName,n=a.bannerImage,r=a.address,c=a.userPhone,i=a.openingTiming,o=a.closingTiming;t.push({key:e.id,doc:e,storeName:s,bannerImage:n,address:r,userPhone:c,openingTiming:i,closingTiming:o})})),s.setState({merchants:t})},s.componentDidMount=function(){s.unsubscribe=s.ref.onSnapshot(s.onCollectionUpdate)},s.getMerchants=function(){return s.state.merchants.map((function(e){var t=e.storeName.replace(/\s/g,"");return console.log(t),Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)(i.b,{to:"/".concat(t),children:Object(j.jsx)("button",{style:{margin:"3px"},className:"btn btn-primary",children:e.storeName})})})},e.key)}))},s.render=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:Object(j.jsx)("img",{src:p,width:"100"})})}),Object(j.jsx)("div",{className:"row",children:s.getMerchants()})]})},s.ref=b.firestore().collection("merchant"),s.unsubscribe=null,s.state={merchants:[]},s}return a}(n.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))},x=a(31),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={storeName:"",bannerImage:"",address:"",userPhone:"",openingTiming:"",closingTiming:"",categories:"",key:""},e.componentDidMount=function(){b.firestore().collection("merchant").doc(e.props.id).get().then((function(t){t.exists?e.setState({storeName:t.data().storeName,bannerImage:t.data().bannerImage,address:t.data().address,userPhone:t.data().userPhone,openingTiming:t.data().openingTiming,closingTiming:t.data().closingTiming,categories:t.data().categories,key:t.id}):console.log("There was error in finding the document")})).catch((function(e){return console.log("There was some error in getting the document.")}))},e}return Object(x.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-4",children:Object(j.jsx)("img",{src:this.state.bannerImage,alt:"store image",width:"100%",height:"100%",style:{maxHeight:"300px"}})}),Object(j.jsxs)("div",{className:"col-lg-4",children:[Object(j.jsx)("h5",{className:"shop-title mt-3",style:{fontSize:"30px",fontWeight:"900",color:"#085076"},children:this.state.storeName}),Object(j.jsxs)("p",{className:" shop-subtitle",style:{color:"#085076"},children:[this.state.categories[0],", ",this.state.categories[1]," & more"]}),Object(j.jsx)("b",{children:"Address: "}),this.state.address,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Contact: "}),this.state.userPhone,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Store Timings: "})," Monday-Friday (",this.state.openingTiming," to ",this.state.closingTiming,")"]})]}),Object(j.jsx)("br",{})]})}}]),a}(n.a.Component),f=(a(44),a(27)),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var s;Object(d.a)(this,a),(s=t.call(this,e)).onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var a=e.data(),s=a.productImage,n=a.productName,r=a.productDetail,c=a.offerPrice,i=a.sellingPrice;t.push({key:e.id,doc:e,productImage:s,productName:n,productDetail:r,offerPrice:c,sellingPrice:i})})),s.setState({products:t})},s.componentDidMount=function(){s.unsubscribe=s.ref.onSnapshot(s.onCollectionUpdate)},s.getProducts=function(){return s.state.products.map((function(e){var t=e.sellingPrice/e.offerPrice*10,a=Math.trunc(t),n="";return n=window.screen.width<=699?"https://nearst.page.link/?link=https://nearstUser.com/openStore?route%3DstoreDetails%26id%3D".concat(s.state.id,"&apn=com.nearst&amv=2"):"https://play.google.com/store/apps/details?id=com.nearst",Object(j.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12",children:[Object(j.jsxs)("div",{className:"card sareecard",style:{minHeight:"415px"},children:[Object(j.jsx)("img",{src:e.productImage[0],className:"card-img-top embed-responsive-item ",alt:"saree"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"card-title d-flex justify-content-between",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("b",{children:[Object(j.jsx)(f.a,{icon:"rupee-sign"})," ",e.sellingPrice]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("strike",{children:[Object(j.jsx)(f.a,{icon:"rupee-sign"})," ",e.offerPrice]})}),Object(j.jsxs)("div",{style:{color:"red"},children:[a,"% off"]})]}),Object(j.jsx)("div",{className:"card-title",style:{color:" rgb(235, 92, 122)"},children:e.productName}),Object(j.jsx)("p",{className:"card-text",children:e.productDetail.substr(0,50)}),Object(j.jsx)("a",{href:n,target:"_blank",className:"btn",children:"View Product"})]})]}),Object(j.jsx)("br",{})]},e.key)}))},s.render=function(){return Object(j.jsxs)("div",{className:"container",style:{paddingLeft:"7%",paddingRight:"7%"},children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:Object(j.jsx)("img",{src:p,width:"100"})})}),Object(j.jsx)(O,{id:s.state.id})," ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"row",children:s.getProducts()})]})};var n="";return"NavrangNX"===s.props.match.params.storeName?n="0SA6w8WsXFwqeKbkrnQT":"MananFashion"===s.props.match.params.storeName?n="1DpFqPsCGcwDwsTD1s3u":"ZZFashionPvtLtd"===s.props.match.params.storeName?n="CH4eo0tCW88PZ50gIhOM":"AnandDeepFashion"===s.props.match.params.storeName?n="NjYjmkoXxyxheWGTkObG":"PoojaCreation"===s.props.match.params.storeName?n="WiP2YC2QpT3DKETDukzA":"SrinidhiSilks"===s.props.match.params.storeName?n="Z8hSLsade47vy1QHdhfH":"Mokshii"===s.props.match.params.storeName?n="hqWeQYxI51X0WUKCHAqm":"BandhanBoutique"===s.props.match.params.storeName&&(n="wRVtILQ9NIFcPEJO2Tl5"),s.ref=b.firestore().collection("products").where("merchantId","==",n).limit(28),s.unsubscribe=null,s.state={products:[],id:n},s}return a}(n.a.Component);c.a.render(Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(o.a,{exact:!0,path:"/:storeName",component:v})]})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.d6725f0e.chunk.js.map