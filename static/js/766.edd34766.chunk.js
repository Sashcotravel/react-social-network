"use strict";(self.webpackChunkmy_les=self.webpackChunkmy_les||[]).push([[766],{766:function(a,e,s){s.r(e),s.d(e,{default:function(){return M}});var i=s(1413),r=(s(2791),"Dialogs_dialogs__tzAmJ"),n="Dialogs_dialogsItem__iFsXs",o="Dialogs_messages__nmtNN",t="Dialog1_dialog__8kMDa",l="Dialog1_active__cQKY9",d=s(3504),c=s(184),g=function(a){return a.isActive?l:t},m=function(a){var e="/dialogs/"+a.id;return(0,c.jsx)("div",{className:t,children:(0,c.jsx)(d.OL,{to:e,className:g,children:a.name})})},u="Message_dialog__EISLA",_=function(a){return(0,c.jsx)("div",{className:u,children:a.message})},x=s(5705),h="FormDialog_formDialogError__e7pll",f="FormDialog_sendBut__oVZgp",j="FormDialog_formErrorArea__vHULb",v=s(132),D=v.Ry().shape({areaDialog:v.Z_().min(0,"Too Short!").max(100,"Too Long!").required("Too Short!")}),N=function(a){return(0,c.jsx)("div",{children:(0,c.jsx)(x.J9,{initialValues:{areaDialog:""},validationSchema:D,onSubmit:function(e,s){var i=s.setSubmitting;a.addNewMes(e.areaDialog),i(!1),e.areaDialog=""},children:function(a){var e=a.isSubmitting,s=a.errors;return(0,c.jsxs)(x.l0,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(x.gN,{as:"textarea",name:"areaDialog",placeholder:"Enter message here",className:"s.textarea + ".concat(s.areaDialog?j:"")}),(0,c.jsx)("p",{}),s.areaDialog&&(0,c.jsx)("div",{className:h,children:s.areaDialog})]}),(0,c.jsx)("p",{}),(0,c.jsx)("button",{className:f,type:"submit",disabled:e,children:"Send"})]})}})})},p=function(a){var e=a.messagesPage,s=e.dialogs.map((function(a){return(0,c.jsx)(m,{name:a.name,id:a.id},a.id)})),i=e.messages.map((function(a){return(0,c.jsx)(_,{message:a.message},a.id)}));return(0,c.jsxs)("div",{className:r,children:[(0,c.jsx)("div",{className:n,children:s}),(0,c.jsxs)("div",{className:o,children:[i,(0,c.jsx)(N,{addNewMes:function(e){a.addMesKey(e)}})]})]})},b=s(364),S=s(6871),y=s(1575);var M=(0,s(7781).qC)((0,b.$j)((function(a){return{messagesPage:a.messagesPage}}),{addMesKey:y.N.addMesKey}),(function(a){return function(e){var s=(0,S.TH)(),r=(0,S.s0)(),n=(0,S.UO)();return(0,c.jsx)(a,(0,i.Z)((0,i.Z)({},e),{},{router:{location:s,navigate:r,params:n}}))}}))(p)}}]);
//# sourceMappingURL=766.edd34766.chunk.js.map