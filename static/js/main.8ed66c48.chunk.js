(this.webpackJsonpsayphoto=this.webpackJsonpsayphoto||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(14),a=n.n(s),i=(n(21),n(22),n(30)),o=n(16),d=n(8),j=n(31),l=n(5),u=n.n(l),h=n(6),b=n(0),x=function(){var e=Object(h.a)(u.a.mark((function e(t){var n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,r=Object(d.a)(n,2),c=r[1],e.next=4,fetch("".concat(c));case 4:if((s=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok");case 7:return e.abrupt("return",s.json());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.indexUser,n=e.setModal,r=e.modal,c=e.specificPageURL,s=Object(j.a)(["user",t,c],x),a=(s.isLoading,s.isError,s.data),i=(s.error,s.status);return Object(b.jsxs)(b.Fragment,{children:["error"===i&&Object(b.jsx)("div",{children:"Error Fetching Data"}),"Loading"===i&&Object(b.jsx)("div",{children:"Loading Data...."}),"success"===i&&Object(b.jsx)(b.Fragment,{children:a&&Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAUSURBVHgBY4CDUcD///8H7BTxAACZiAv1BTlS1AAAAABJRU5ErkJggg==",alt:"minimize",onClick:function(){return n(!r)},className:"smallIcon floatRight"}),Object(b.jsxs)("h3",{children:["Name: ",a.name]}),Object(b.jsx)("img",{src:a.image,alt:a.name}),Object(b.jsxs)("p",{children:["Origin: ",a.origin.name]})," ",Object(b.jsxs)("p",{children:["Status: ",a.status]}),Object(b.jsxs)("p",{children:["Gender: ",a.gender]})]},"{data.name}{Math.random()}")})]})},p=function(e,t,n){return Object(b.jsx)(O,{indexUser:e,className:n?"modal":"modal-close",setModal:t,modal:n})},m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABD0lEQVRYw+2XwQ2CMBSG1XjxqkcH6Sa4SifACWCK3nQS2EATLzBAb583E1MLbWmfMfE7w/9B4bXvrVZ/fgDWKDSGjgcADzoMGsV6efiRM3d83DlzTA/f02CZw9KwT4mvGAllpIoL39ISS8s2NH7HhRQu7MKe/koq14C3SFict4Waiz+xlNNU/IFhsWDg4Bc00/e+rpum8VetzSKwnuqmnnv7QAHUn+I33LIJbmxcgSInyhXorALtCkxWgXEFfVZB7woCSiz4I8PgCmxWgf2CoPgS9VkFfdJvGiEwSYUWIdBJW0WEQMlvdsW3a4EDp/iRKXDoF29bBBovgdaxePMr0L4LDCAiI5TAECgyxv4R4AkFkImYwc2fsgAAAABJRU5ErkJggg==",g=function(e){var t=e.dataPoint,n=e.dataIndex,c=Object(r.useState)(!1),s=Object(d.a)(c,2),a=s[0],i=s[1];return Object(b.jsxs)("div",{className:"card alignTogether",onClick:function(){return i(!a)},children:[Object(b.jsxs)("h3",{children:["Name: ",t.name]}),Object(b.jsx)("span",{children:a?p("https://rickandmortyapi.com/api/character/".concat(t.id),i,a):Object(b.jsx)("img",{src:m,onClick:function(){return i(!a)},className:"smallIcon floatRight",alt:"expand"})})]},n)},f=function(e){var t=e.characterList,n=(e.locationList,e.episodeList,t.data),r=t.status;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Rick And Morty"}),"error"===r&&Object(b.jsx)("div",{children:"Error Fetching Data"}),"Loading"===r&&Object(b.jsx)("div",{children:"Loading Data...."}),"success"===r&&Object(b.jsx)("div",{className:"card_section",children:n.results.map((function(e,t){return Object(b.jsx)(g,{dataPoint:e,dataIndex:t})}))})]})},A=function(e){var t=e.setNavBar,n=e.navBar;return Object(b.jsxs)("div",{children:["C"!==n&&Object(b.jsx)("button",{onClick:function(){return t("C")},children:"Characters"}),"E"!==n&&Object(b.jsx)("button",{onClick:function(){return t("E")},children:"Episodes"}),"L"!==n&&Object(b.jsx)("button",{onClick:function(){return t("L")},children:"Locations"})]})},v=function(e){e.characterList,e.locationList;var t=e.episodeList,n=t.data,r=t.status;return console.log({data:n}),Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("h2",{children:"Episodes"}),Object(b.jsxs)("div",{className:"card_section",children:["error"===r&&Object(b.jsx)("div",{children:"Error Fetching Data"}),"Loading"===r&&Object(b.jsx)("div",{children:"Loading Data...."}),"success"===r&&Object(b.jsx)(b.Fragment,{children:n.results.map((function(e,t){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("h3",{children:["Episode Name: ",e.name]}),Object(b.jsxs)("p",{children:["Episode Number: ",e.episode]}),Object(b.jsxs)("p",{children:["Aired: ",e.air_date]})]},t)}))})]})]})},L=(n(25),function(){var e=Object(h.a)(u.a.mark((function e(t){var n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,r=Object(d.a)(n,2),c=r[1],e.next=4,fetch("".concat(c));case 4:if((s=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok");case 7:return e.abrupt("return",s.json());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=function(e){var t=e.indexUser,n=Object(j.a)(["user",t],L),r=n.data,c=n.status;return Object(b.jsxs)(b.Fragment,{children:["error"===c&&Object(b.jsx)("div",{children:"Error Fetching Data"}),"Loading"===c&&Object(b.jsx)("div",{children:"Loading Data...."}),"success"===c&&Object(b.jsx)(b.Fragment,{children:r&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Name: ",r.name]}),Object(b.jsx)("img",{src:r.image,alt:r.name}),Object(b.jsxs)("p",{children:["Origin: ",r.origin.name]})," ",Object(b.jsxs)("p",{children:["Status: ",r.status]})]},"{data.name}{Math.random()}")})]})},w=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],a=e.residents;return console.log({check:a}),Object(b.jsxs)("div",{onClick:function(){return s(!c)},children:[c?Object(b.jsxs)("span",{children:[" Residents: ",e.residents.length," Residents "]}):Object(b.jsxs)("span",{children:[" ","Residents: ",e.residents.length," ",e.residents.length<10&&Object(b.jsxs)(b.Fragment,{children:[" ","Click for details"," ",Object(b.jsx)("img",{src:m,alt:"icon",className:"smallIcon"})]})]}),c&&e.residents.length<10&&e.residents.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)(k,{indexUser:e})},t)}))]})},C=function(e){e.characterList;var t=e.locationList,n=(e.episodeList,t.data),r=t.status;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Locations"}),Object(b.jsxs)("div",{className:"card_section",children:["error"===r&&Object(b.jsx)("div",{children:"Error Fetching Data"}),"Loading"===r&&Object(b.jsx)("div",{children:"Loading Data...."}),"success"===r&&Object(b.jsx)(b.Fragment,{children:n.results.map((function(e,t){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("h3",{children:["Location Name: ",e.name]},"location{dataIndex}"),Object(b.jsxs)("section",{children:[Object(b.jsxs)("p",{children:[" Type: ",e.type]},"type{dataIndex}"),Object(b.jsxs)("p",{children:[" ","Dimension: ",e.dimension]},"dimension{dataIndex}"),Object(b.jsxs)("p",{children:[" ","Created: ",e.created.slice(0,10)]},"creation{dataIndex}"),Object(b.jsx)("div",{children:Object(b.jsx)(w,{residents:e.residents})},"residents{dataIndex}")]})]},t)}))})]})]})},E=function(){var e=Object(h.a)(u.a.mark((function e(t,n,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),console.log(r),e.next=4,fetch("https://rickandmortyapi.com/api/character");case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/location");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/episode");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(r.useState)("C"),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(j.a)(["characterList"],E),a=Object(j.a)(["locations","id","pageURL"],N),i=Object(j.a)(["episodes","id","pageURL"],D);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(A,{setNavBar:c,navBar:n,className:"navBar"}),"C"===n&&Object(b.jsx)(f,{characterList:s,locationList:a,episodeList:i}),"L"===n&&Object(b.jsx)(C,{characterList:s,locationList:a,episodeList:i}),"E"===n&&Object(b.jsx)(v,{characterList:s,locationList:a,episodeList:i})]})},S=n(17),F=new i.a,y=function(){return Object(b.jsxs)(o.a,{client:F,children:[Object(b.jsx)(B,{}),Object(b.jsx)(S.ReactQueryDevtools,{initialIsOpen:!1,position:"bottom-right"})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),I()}},[[28,1,2]]]);
//# sourceMappingURL=main.8ed66c48.chunk.js.map