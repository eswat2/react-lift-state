(this["webpackJsonpreact-lift-state-up-and-down"]=this["webpackJsonpreact-lift-state-up-and-down"]||[]).push([[0],{1311:function(e,n,t){},1313:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t(1),l=t(0),i=t.n(l),c=t(15),o=t.n(c),u=t(16),f=t.n(u),s=t(6),m=t.n(s),d=t(2),p=t(17),b=t(10);t(1311);function g(){var e=Object(r.a)(["\n  margin-left: 20px;\n"]);return g=function(){return e},e}function v(){var e=Object(r.a)(["\n  color: #001f3f;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return v=function(){return e},e}function h(){var e=Object(r.a)(["\n  margin-left: 5px;\n  width: 50%;\n  padding: 5px;\n"]);return h=function(){return e},e}function x(){var e=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #ff4136;\n  border-radius: 4px;\n  padding: 10px;\n  margin-left: auto;\n"]);return x=function(){return e},e}var E=d.a.button(x()),j=d.a.input(h()),w=d.a.div(v()),O=d.a.span(g()),y=({query:e,handleQuery:n,className:t,label:a})=>i.a.createElement(w,{className:t},i.a.createElement(O,null,a),i.a.createElement(j,{type:"text",value:e,onChange:n}),i.a.createElement(E,{onClick:()=>{n({target:{value:""}})}},"Clear"));function k(){var e=Object(r.a)(["\n  margin-left: 24px;\n  font-size: 12px;\n"]);return k=function(){return e},e}function C(){var e=Object(r.a)(["\n  background-color: #ff851b;\n  margin-left: 10px;\n  margin-right: 8px;\n"]);return C=function(){return e},e}function N(){var e=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #0074d9;\n  border-radius: 4px;\n  padding: 4px;\n  padding-right: 10px;\n  padding-left: 10px;\n"]);return N=function(){return e},e}function S(){var e=Object(r.a)(["\n  color: #001f3f;\n"]);return S=function(){return e},e}function L(){var e=Object(r.a)(["\n  padding-inline-start: 20px;\n"]);return L=function(){return e},e}function q(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n"]);return q=function(){return e},e}var z=d.a.li(q()),R=d.a.ul(L()),A=d.a.span(S()),Q=d.a.button(N()),I=Object(d.a)(Q)(C()),J=Object(d.a)(A)(k()),_=({className:e,list:n})=>{var t=i.a.useState([]),r=Object(a.a)(t,2),l=r[0],c=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,{className:e},n.filter((e=>n=>!e.includes(n.id))(l)).map(e=>i.a.createElement(z,{key:e.id},i.a.createElement(A,null,e.name),i.a.createElement(Q,{type:"button",onClick:()=>{return n=e.id,void c(e=>[...e,n]);var n}},"Archive")))),i.a.createElement(J,null,l.length," item",1===l.length?"":"s"," ","archived..."),l.length>0&&i.a.createElement(I,{onClick:()=>c([])},"Reset Archived"))};function B(){var e=Object(r.a)(["\n  margin-top: 20px;\n  color: #001f3f;\n  font-size: 10px;\n  font-style: italic;\n"]);return B=function(){return e},e}var D=d.a.footer(B()),F=({className:e,list:n})=>{var t=i.a.useState(""),r=Object(a.a)(t,2),l=r[0],c=r[1],o=n.filter((e=>n=>!e||n.name.toLowerCase().includes(e.toLowerCase()))(l));return i.a.createElement("div",{className:e},i.a.createElement(y,{query:l,handleQuery:e=>{c(e.target.value)},label:"Search:"}),i.a.createElement("hr",null),i.a.createElement(_,{list:o}),i.a.createElement(D,null,"Archive in a List example - see"," ",i.a.createElement("a",{href:"https://www.robinwieruch.de/react-lift-state/",target:"_blank",rel:"noopener noreferrer"},"React Lift State")," ","for more detail..."))};function T(){var e=Object(r.a)(["\n  color: #001f3f;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return T=function(){return e},e}function G(){var e=Object(r.a)(["\n  margin-left: 20px;\n"]);return G=function(){return e},e}function H(){var e=Object(r.a)(["\n  margin-left: 5px;\n  width: 50%;\n  padding: 5px;\n"]);return H=function(){return e},e}function K(){var e=Object(r.a)(["\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #ff4136;\n  border-radius: 4px;\n  padding: 10px;\n  margin-left: auto;\n"]);return K=function(){return e},e}var M=d.a.button(K()),P=d.a.input(H()),U=d.a.span(G()),V=d.a.div(T()),W=({className:e,query:n,handleQuery:t,label:a})=>i.a.createElement(V,{className:e},i.a.createElement(U,null,a),i.a.createElement(P,{type:"text",value:n,onChange:t}),i.a.createElement(M,{onClick:()=>{t({target:{value:""}})}},"Clear"));function X(){var e=Object(r.a)(["\n  padding-inline-start: 20px;\n"]);return X=function(){return e},e}function Y(){var e=Object(r.a)(["\n  color: #001f3f;\n  display: flex;\n  flex-direction: row;\n  height: 23px;\n"]);return Y=function(){return e},e}var Z=d.a.li(Y()),$=d.a.ul(X()),ee=({className:e,list:n})=>i.a.createElement($,{className:e},n.map(e=>i.a.createElement(Z,{key:e.id},e.name)));function ne(){var e=Object(r.a)(["\n  margin-top: 20px;\n  color: #001f3f;\n  font-size: 10px;\n  font-style: italic;\n"]);return ne=function(){return e},e}var te=d.a.footer(ne()),ae=({className:e,list:n})=>{var t=i.a.useState(""),r=Object(a.a)(t,2),l=r[0],c=r[1],o=n.filter((e=>n=>!e||n.name.toLowerCase().includes(e.toLowerCase()))(l));return i.a.createElement("div",{className:e},i.a.createElement(W,{query:l,handleQuery:e=>{c(e.target.value)},label:"Search:"}),i.a.createElement("hr",null),i.a.createElement(ee,{list:o}),i.a.createElement(te,null,"Search in a List example - see"," ",i.a.createElement("a",{href:"https://www.robinwieruch.de/react-lift-state/",target:"_blank",rel:"noopener noreferrer"},"React Lift State")," ","for more detail..."))};function re(){var e=Object(r.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: regular;\n  font-style: italic;\n  color: #aaaaaa;\n"]);return re=function(){return e},e}function le(){var e=Object(r.a)(["\n  color: #001f3f;\n"]);return le=function(){return e},e}function ie(){var e=Object(r.a)(["\n  margin-left: 10px;\n"]);return ie=function(){return e},e}var ce=f()(),oe=Object(d.a)(p.a)(ie()),ue=d.a.h3(le()),fe=d.a.span(re()),se=e=>ce.unique(ce.integer,e,{min:0,max:400}).map(e=>({id:e,name:m.a.company.companyName()})),me=se(15);function de(){var e=i.a.useState(!1),n=Object(a.a)(e,2),t=n[0],r=n[1],l=i.a.useState(me),c=Object(a.a)(l,2),o=c[0],u=c[1],f=t?F:ae;return i.a.createElement("div",{className:"App"},i.a.createElement(ue,null,"React Lift State"," ",i.a.createElement(oe,{color:t?"#2ECC40":"#001f3f",icon:b.b,rotation:t?void 0:180,size:"lg",onClick:()=>{r(!t)},title:"Toggle Implementation"}),i.a.createElement(oe,{icon:b.a,onClick:()=>{var e=ce.integer({min:15,max:40}),n=se(e);u(n)},title:"Refresh Data"}),i.a.createElement(fe,null,o.length," items")),i.a.createElement(f,{list:o}))}var pe=document.getElementById("root");o.a.render(i.a.createElement(de,null),pe)},21:function(e,n,t){e.exports=t(1313)}},[[21,1,2]]]);
//# sourceMappingURL=main.ce74edda.chunk.js.map