(this["webpackJsonpreact-lift-state-up-and-down"]=this["webpackJsonpreact-lift-state-up-and-down"]||[]).push([[0],{1082:function(n,e,t){},1084:function(n,e,t){"use strict";t.r(e);var a=t(4),r=t(2),c=t(0),i=t.n(c),o=t(14),u=t.n(o),l=t(15),f=t.n(l),s=t(16),m=t.n(s),d=t(3),p=t(17),b=t(7);t(1082);function g(){var n=Object(r.a)(["\n  margin-left: 20px;\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  color: #001f3f;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return v=function(){return n},n}function h(){var n=Object(r.a)(["\n  margin-left: 5px;\n  width: 50%;\n  padding: 5px;\n"]);return h=function(){return n},n}function x(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #ff4136;\n  border-radius: 4px;\n  padding: 10px;\n  margin-left: auto;\n"]);return x=function(){return n},n}var E=d.a.button(x()),j=d.a.input(h()),w=d.a.div(v()),O=d.a.span(g()),y=function(n){var e=n.query,t=n.handleQuery,a=n.className,r=n.label;return i.a.createElement(w,{className:a},i.a.createElement(O,null,r),i.a.createElement(j,{type:"text",value:e,onChange:t}),i.a.createElement(E,{onClick:function(){t({target:{value:""}})}},"Clear"))},k=t(20);function C(){var n=Object(r.a)(["\n  margin-left: 24px;\n  font-size: 12px;\n"]);return C=function(){return n},n}function N(){var n=Object(r.a)(["\n  background-color: #ff851b;\n  margin-left: 10px;\n  margin-right: 8px;\n"]);return N=function(){return n},n}function S(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #0074d9;\n  border-radius: 4px;\n  padding: 4px;\n  padding-right: 10px;\n  padding-left: 10px;\n"]);return S=function(){return n},n}function L(){var n=Object(r.a)(["\n  color: #001f3f;\n"]);return L=function(){return n},n}function q(){var n=Object(r.a)(["\n  padding-inline-start: 20px;\n"]);return q=function(){return n},n}function z(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n"]);return z=function(){return n},n}var R=d.a.li(z()),A=d.a.ul(q()),Q=d.a.span(L()),I=d.a.button(S()),J=Object(d.a)(I)(N()),_=Object(d.a)(Q)(C()),B=function(n){var e=n.className,t=n.list,r=i.a.useState([]),c=Object(a.a)(r,2),o=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{className:e},t.filter(function(n){return function(e){return!n.includes(e.id)}}(o)).map((function(n){return i.a.createElement(R,{key:n.id},i.a.createElement(Q,null,n.name),i.a.createElement(I,{type:"button",onClick:function(){return e=n.id,void u((function(n){return[].concat(Object(k.a)(n),[e])}));var e}},"Archive"))}))),i.a.createElement(_,null,o.length," item",1===o.length?"":"s"," ","archived..."),o.length>0&&i.a.createElement(J,{onClick:function(){return u([])}},"Reset Archived"))};function D(){var n=Object(r.a)(["\n  margin-top: 20px;\n  color: #001f3f;\n  font-size: 10px;\n  font-style: italic;\n"]);return D=function(){return n},n}var F=d.a.footer(D()),T=function(n){var e=n.className,t=n.list,r=i.a.useState(""),c=Object(a.a)(r,2),o=c[0],u=c[1],l=t.filter(function(n){return function(e){return!n||e.name.toLowerCase().includes(n.toLowerCase())}}(o));return i.a.createElement("div",{className:e},i.a.createElement(y,{query:o,handleQuery:function(n){u(n.target.value)},label:"Search:"}),i.a.createElement("hr",null),i.a.createElement(B,{list:l}),i.a.createElement(F,null,"Archive in a List example - see"," ",i.a.createElement("a",{href:"https://www.robinwieruch.de/react-lift-state/",target:"_blank",rel:"noopener noreferrer"},"React Lift State")," ","for more detail..."))};function G(){var n=Object(r.a)(["\n  color: #001f3f;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return G=function(){return n},n}function H(){var n=Object(r.a)(["\n  margin-left: 20px;\n"]);return H=function(){return n},n}function K(){var n=Object(r.a)(["\n  margin-left: 5px;\n  width: 50%;\n  padding: 5px;\n"]);return K=function(){return n},n}function M(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #ff4136;\n  border-radius: 4px;\n  padding: 10px;\n  margin-left: auto;\n"]);return M=function(){return n},n}var P=d.a.button(M()),U=d.a.input(K()),V=d.a.span(H()),W=d.a.div(G()),X=function(n){var e=n.className,t=n.query,a=n.handleQuery,r=n.label;return i.a.createElement(W,{className:e},i.a.createElement(V,null,r),i.a.createElement(U,{type:"text",value:t,onChange:a}),i.a.createElement(P,{onClick:function(){a({target:{value:""}})}},"Clear"))};function Y(){var n=Object(r.a)(["\n  padding-inline-start: 20px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(r.a)(["\n  color: #001f3f;\n  display: flex;\n  flex-direction: row;\n  height: 23px;\n"]);return Z=function(){return n},n}var $=d.a.li(Z()),nn=d.a.ul(Y()),en=function(n){var e=n.className,t=n.list;return i.a.createElement(nn,{className:e},t.map((function(n){return i.a.createElement($,{key:n.id},n.name)})))};function tn(){var n=Object(r.a)(["\n  margin-top: 20px;\n  color: #001f3f;\n  font-size: 10px;\n  font-style: italic;\n"]);return tn=function(){return n},n}var an=d.a.footer(tn()),rn=function(n){var e=n.className,t=n.list,r=i.a.useState(""),c=Object(a.a)(r,2),o=c[0],u=c[1],l=t.filter(function(n){return function(e){return!n||e.name.toLowerCase().includes(n.toLowerCase())}}(o));return i.a.createElement("div",{className:e},i.a.createElement(X,{query:o,handleQuery:function(n){u(n.target.value)},label:"Search:"}),i.a.createElement("hr",null),i.a.createElement(en,{list:l}),i.a.createElement(an,null,"Search in a List example - see"," ",i.a.createElement("a",{href:"https://www.robinwieruch.de/react-lift-state/",target:"_blank",rel:"noopener noreferrer"},"React Lift State")," ","for more detail..."))};function cn(){var n=Object(r.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: regular;\n  font-style: italic;\n  color: #aaaaaa;\n"]);return cn=function(){return n},n}function on(){var n=Object(r.a)(["\n  color: #001f3f;\n"]);return on=function(){return n},n}function un(){var n=Object(r.a)(["\n  margin-left: 10px;\n"]);return un=function(){return n},n}var ln=15,fn=40,sn=f()(),mn=Object(d.a)(p.a)(un()),dn=d.a.h3(on()),pn=d.a.span(cn()),bn=function(n){return sn.unique(sn.integer,n,{min:0,max:400}).map((function(n){return{id:n,name:m.a.company.companyName()}}))},gn=bn(ln);var vn=document.getElementById("root");u.a.render(i.a.createElement((function(){var n=i.a.useState(!1),e=Object(a.a)(n,2),t=e[0],r=e[1],c=i.a.useState(gn),o=Object(a.a)(c,2),u=o[0],l=o[1],f=t?T:rn;return i.a.createElement("div",{className:"App"},i.a.createElement(dn,null,"React Lift State"," ",i.a.createElement(mn,{color:t?"#2ECC40":"#001f3f",icon:b.b,rotation:t?void 0:180,size:"lg",onClick:function(){r(!t)},title:"Toggle Implementation"}),i.a.createElement(mn,{icon:b.a,onClick:function(){var n=sn.integer({min:ln,max:fn}),e=bn(n);l(e)},title:"Refresh Data"}),i.a.createElement(pn,null,u.length," items")),i.a.createElement(f,{list:u}))}),null),vn)},23:function(n,e,t){n.exports=t(1084)}},[[23,1,2]]]);
//# sourceMappingURL=main.62ff6c0d.chunk.js.map