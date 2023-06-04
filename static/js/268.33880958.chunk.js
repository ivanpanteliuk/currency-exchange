"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{3268:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,o,a,i,s,c,l,d,u,p=t(9439),f=t(1686),x=t(168),m=t(4169),h=t(6088),g=(h.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 400px;\n  padding: 50px;\n  margin-bottom: 20px;\n  background: rgb(217, 176, 94);\n  background: linear-gradient(\n    90deg,\n    rgba(217, 176, 94, 1) 0%,\n    rgba(71, 43, 1, 1) 100%\n  );\n  box-shadow: 0 0 5px rgba(255, 125, 0, 0.6) inset,\n    0 0 10px 2px rgba(255, 175, 0, 0.5) inset,\n    0 0 15px 4px rgba(255, 225, 0, 0.4) inset, 5px 5px 5px rgba(0, 0, 0, 0.2);\n"]))),h.Z.input(o||(o=(0,x.Z)(["\n  background-color: #292929;\n  color: #fff;\n  border: none;\n  padding: 8px 12px;\n  font-size: 16px;\n  border-radius: 4px;\n  margin-bottom: 15px;\n"]))),h.Z.button(a||(a=(0,x.Z)(["\n  background-color: #292929;\n  color: #fff;\n  border: none;\n  padding: 8px 12px;\n  font-size: 16px;\n  border-radius: 4px;\n  argin-bottom: 15px;\n  margin-top: 15px;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #ebd747;\n  }\n"])))),b=(h.Z.label(i||(i=(0,x.Z)(["\n  margin-bottom: 10px;\n"]))),(0,h.Z)(g)(s||(s=(0,x.Z)(["\n  display: block;\n  background-color: #97efe9;\n  width: 100%;\n  color: black;\n  &:hover {\n    background-color: #2bded2;\n  }\n"])))),v=(0,h.Z)(m.X6)(c||(c=(0,x.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 400;\n  font-size: 1.5rem;\n  line-height: 1.334;\n  letter-spacing: 0em;\n  text-align: center;\n  margin-top: 40px;\n"]))),Z=t(5274),j=t(2483),y=t(5048),w=t(1634),k=t(9782),C=t(184),z=function(){var n=(0,y.I0)(),e=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e}();return(0,C.jsx)(k.Z,{margin:"normal",fullWidth:!0,id:e,type:"text",label:"Find contacts by name",onChange:function(e){return n((0,w.T)(e.currentTarget.value.trim()))}})},A=t(4708),N=t(4554),T=t(890),F=h.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 250px;\n"]))),L=h.Z.h1(d||(d=(0,x.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  color: red;\n"]))),S=h.Z.p(u||(u=(0,x.Z)(["\n  font-size: 18px;\n  color: red;\n  margin-top: 16px;\n"])));function E(n){var e=n.message;return(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:"Oops, something went wrong..."}),(0,C.jsxs)(S,{children:["Error: ",e]}),(0,C.jsx)(S,{children:'Press "ESC" button or reload page, please'})]})}f.Notify.init({width:"450px",position:"right-top",distance:"20px",timeout:2e3,clickToClose:!0,fontSize:"20px",cssAnimationStyle:"zoom",showOnlyTheLastOne:!0});var P,W,_,D,q,O=function(){var n=(0,Z.wY)().data,e=(0,Z.Tn)(),t=(0,p.Z)(e,2),r=t[0],o=t[1];return o.error?(0,C.jsx)(E,{message:o.error.status}):(0,C.jsxs)(C.Fragment,{children:[o.isLoading&&(0,C.jsx)(j.Z,{}),(0,C.jsxs)("div",{children:[(0,C.jsx)(A.ZP,{}),(0,C.jsxs)(N.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,C.jsx)(T.Z,{component:"h1",variant:"h5",children:"Add Contact"}),(0,C.jsxs)(N.Z,{component:"form",onSubmit:function(e){e.preventDefault();var t=e.target,o=t.elements.name.value,a=t.elements.number.value;return null!==n&&void 0!==n&&n.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?f.Notify.failure('"'.concat(o,'" is already in contacts.')):null!==n&&void 0!==n&&n.some((function(n){return n.number===a}))?f.Notify.failure('"'.concat(a,'" is already in contacts.')):(r({name:o,number:a}).then((function(n){return f.Notify.success('Contact "'.concat(n.data.name,'" added to phonebook '))})).catch((function(n){return console.log(n)})),void t.reset())},noValidate:!0,sx:{mt:1},children:[(0,C.jsx)(k.Z,{margin:"normal",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off",fullWidth:!0,id:"name",label:"Contact name",autoFocus:!0}),(0,C.jsx)(k.Z,{margin:"normal",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off",fullWidth:!0,label:"Phone number",id:"number"}),(0,C.jsx)(b,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]}),(null===n||void 0===n?void 0:n.length)>1&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v,{children:"Filter contacts"}),(0,C.jsx)(z,{})]})]})]})},R=h.Z.ul(P||(P=(0,x.Z)(["\n  padding: 30px;\n  width: 445px;\n"]))),Y=h.Z.li(W||(W=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),H=h.Z.button(_||(_=(0,x.Z)(["\n  color: #fff;\n  border: none;\n  padding: 8px 12px;\n  font-size: 16px;\n  border-radius: 4px;\n  background-color: #292929;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #cf2e2e;\n  }\n"]))),I=function(n){var e=n.contacts,t=(0,Z.Nt)(),r=(0,p.Z)(t,2),o=r[0],a=r[1];return a.isError?(0,C.jsx)(E,{message:a.error.status}):(0,C.jsx)(R,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,C.jsxs)(Y,{children:[(0,C.jsxs)("p",{children:[t,": ",r]}),(0,C.jsx)(H,{type:"button",onClick:function(){!function(n){o(n).then((function(n){var e=n.data;return f.Notify.success('Contact "'.concat(e.name,'" deleted successfully'))})).catch((function(n){return console.log(n)}))}(e)},children:"Delete"})]},e)}))})},U=t(6351),V=(0,t(8789).ZP)(m.X6)(D||(D=(0,x.Z)(["\n  margin-top: 64px;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 400;\n  font-size: 1.5rem;\n  line-height: 1.334;\n  letter-spacing: 0em;\n  text-align: center;\n  width: 445px;\n"]))),X=function(){var n=(0,Z.wY)(),e=n.isLoading,t=n.isError,r=n.error,o=n.data,a=(0,y.v9)(U.AD),i=null===o||void 0===o?void 0:o.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase())}));return t&&f.Notify.failure("".concat(null===r||void 0===r?void 0:r.status,"! ").concat(null===r||void 0===r?void 0:r.error)),(0,C.jsxs)(C.Fragment,{children:[e&&(0,C.jsx)(j.Z,{}),(0,C.jsxs)("div",{children:[(0,C.jsx)(V,{children:"Contacts"}),null!==o&&void 0!==o&&o.length?null!==i&&void 0!==i&&i.length?(0,C.jsx)(I,{contacts:i}):(0,C.jsx)(V,{children:"There is no matches for this search query"}):(0,C.jsx)(V,{children:"There is no stored contacts yet "})]})]})},B=(0,h.Z)(m.W2)(q||(q=(0,x.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),J=t(2791);function M(){var n=(0,Z.wY)().refetch;return(0,J.useEffect)((function(){n()}),[n]),(0,C.jsxs)(B,{children:[(0,C.jsx)(O,{}),(0,C.jsx)(X,{})]})}}}]);
//# sourceMappingURL=268.33880958.chunk.js.map