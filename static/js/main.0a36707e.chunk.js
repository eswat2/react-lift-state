(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1081:function(n,e,t){},1083:function(n,e,t){"use strict";t.r(e);var a=t(4),r=t(2),c=t(0),i=t.n(c),o=t(6),u=t.n(o),l=t(15),f=t.n(l),s=t(16),m=t.n(s),d=t(3),p=t(17),g=t(8);t(1081);function b(){var n=Object(r.a)(["\n  margin-left: 20px;\n"]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  color: #001f3f;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return v=function(){return n},n}function h(){var n=Object(r.a)(["\n  margin-left: 5px;\n  width: 50%;\n  padding: 5px;\n"]);return h=function(){return n},n}function x(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #ff4136;\n  border-radius: 4px;\n  padding: 10px;\n  margin-left: auto;\n"]);return x=function(){return n},n}var E=d.a.button(x()),w=d.a.input(h()),j=d.a.div(v()),O=d.a.span(b()),y=function(n){var e=n.query,t=n.handleQuery,a=n.className,r=n.children;return i.a.createElement(j,{className:a},i.a.createElement(O,null,r),i.a.createElement(w,{type:"text",value:e,onChange:t}),i.a.createElement(E,{onClick:function(){t({target:{value:""}})}},"Clear"))},k=t(20);function C(){var n=Object(r.a)(["\n  margin-left: 24px;\n  font-size: 12px;\n"]);return C=function(){return n},n}function N(){var n=Object(r.a)(["\n  background-color: #ff851b;\n  margin-left: 10px;\n  margin-right: 8px;\n"]);return N=function(){return n},n}function S(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #0074d9;\n  border-radius: 4px;\n  padding: 4px;\n  padding-right: 10px;\n  padding-left: 10px;\n"]);return S=function(){return n},n}function L(){var n=Object(r.a)(["\n  color: #aaaaaa;\n"]);return L=function(){return n},n}function q(){var n=Object(r.a)(["\n  padding-inline-start: 20px;\n"]);return q=function(){return n},n}function z(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n"]);return z=function(){return n},n}var R=d.a.li(z()),A=d.a.ul(q()),Q=d.a.span(L()),D=d.a.button(S()),I=Object(d.a)(D)(N()),J=Object(d.a)(Q)(C()),_=function(n){var e=n.className,t=n.list,r=i.a.useState([]),c=Object(a.a)(r,2),o=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{className:e},t.filter(function(n){return function(e){return!n.includes(e.id)}}(o)).map(function(n){return i.a.createElement(R,{key:n.id},i.a.createElement(Q,null,n.name),i.a.createElement(D,{type:"button",onClick:function(){return e=n.id,void u(function(n){return[].concat(Object(k.a)(n),[e])});var e}},"Archive"))})),i.a.createElement(J,null,o.length," item",1===o.length?"":"s"," ","archived..."),o.length>0&&i.a.createElement(I,{onClick:function(){return u([])}},"Reset Archived"))};function B(){var n=Object(r.a)(["\n  margin-top: 20px;\n  color: #001f3f;\n  font-size: 10px;\n  font-style: italic;\n"]);return B=function(){return n},n}var F=d.a.footer(B()),T=function(n){var e=n.className,t=n.list,r=i.a.useState(""),c=Object(a.a)(r,2),o=c[0],u=c[1],l=t.filter(function(n){return function(e){return!n||e.name.toLowerCase().includes(n.toLowerCase())}}(o));return i.a.createElement("div",{className:e},i.a.createElement(y,{query:o,handleQuery:function(n){u(n.target.value)}},"Search:"),i.a.createElement("hr",null),i.a.createElement(_,{list:l}),i.a.createElement(F,null,"Archive in a List example - see"," ",i.a.createElement("a",{href:"https://www.robinwieruch.de/react-lift-state/",target:"_blank",rel:"noopener noreferrer"},"React Lift State")," ","for more detail..."))};function U(){var n=Object(r.a)(["\n  color: #001f3f;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return U=function(){return n},n}function G(){var n=Object(r.a)(["\n  margin-left: 20px;\n"]);return G=function(){return n},n}function H(){var n=Object(r.a)(["\n  margin-left: 5px;\n  width: 50%;\n  padding: 5px;\n"]);return H=function(){return n},n}function K(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #ff4136;\n  border-radius: 4px;\n  padding: 10px;\n  margin-left: auto;\n"]);return K=function(){return n},n}var M=d.a.button(K()),P=d.a.input(H()),V=d.a.span(G()),W=d.a.div(U()),X=function(n){var e=n.className,t=n.query,a=n.handleQuery,r=n.children;return i.a.createElement(W,{className:e},i.a.createElement(V,null,r),i.a.createElement(P,{type:"text",value:t,onChange:a}),i.a.createElement(M,{onClick:function(){a({target:{value:""}})}},"Clear"))};function Y(){var n=Object(r.a)(["\n  padding-inline-start: 20px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(r.a)(["\n  color: #aaaaaa;\n  display: flex;\n  flex-direction: row;\n  height: 23px;\n"]);return Z=function(){return n},n}var $=d.a.li(Z()),nn=d.a.ul(Y()),en=function(n){var e=n.className,t=n.list;return i.a.createElement(nn,{className:e},t.map(function(n){return i.a.createElement($,{key:n.id},n.name)}))};function tn(){var n=Object(r.a)(["\n  margin-top: 20px;\n  color: #001f3f;\n  font-size: 10px;\n  font-style: italic;\n"]);return tn=function(){return n},n}var an=d.a.footer(tn()),rn=function(n){var e=n.className,t=n.list,r=i.a.useState(""),c=Object(a.a)(r,2),o=c[0],u=c[1],l=t.filter(function(n){return function(e){return!n||e.name.toLowerCase().includes(n.toLowerCase())}}(o));return i.a.createElement("div",{className:e},i.a.createElement(X,{query:o,handleQuery:function(n){u(n.target.value)}},"Search:"),i.a.createElement("hr",null),i.a.createElement(en,{list:l}),i.a.createElement(an,null,"Search in a List example - see"," ",i.a.createElement("a",{href:"https://www.robinwieruch.de/react-lift-state/",target:"_blank",rel:"noopener noreferrer"},"React Lift State")," ","for more detail..."))};function cn(){var n=Object(r.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: regular;\n  font-style: italic;\n  color: #aaaaaa;\n"]);return cn=function(){return n},n}function on(){var n=Object(r.a)(["\n  margin-left: 10px;\n"]);return on=function(){return n},n}var un=f()(),ln=Object(d.a)(p.a)(on()),fn=d.a.span(cn()),sn=function(n){return un.unique(un.integer,n,{min:0,max:100}).map(function(n){return{id:n,name:m.a.company.companyName()}})},mn=sn(15);var dn=document.getElementById("root");u.a.render(i.a.createElement(function(){var n=i.a.useState(!1),e=Object(a.a)(n,2),t=e[0],r=e[1],c=i.a.useState(mn),o=Object(a.a)(c,2),u=o[0],l=o[1],f=t?T:rn;return i.a.createElement("div",{className:"App"},i.a.createElement("h3",null,"React Lift State Up & Down"," ",i.a.createElement(ln,{color:t?"#2ECC40":"#111111",icon:g.b,rotation:t?0:180,size:"lg",onClick:function(){r(!t)},title:"Toggle Implementation"}),i.a.createElement(ln,{icon:g.a,onClick:function(){var n=un.integer({min:20,max:40}),e=sn(n);l(e)},title:"Refresh Data"}),i.a.createElement(fn,null,u.length," items")),i.a.createElement(f,{list:u}))},null),dn)},22:function(n,e,t){n.exports=t(1083)}},[[22,1,2]]]);
//# sourceMappingURL=main.0a36707e.chunk.js.map