!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){var r=n(16),o=n(17),a=n(18),i=n(20);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e){e.exports=JSON.parse('{"components":[{"id":"my-first-component","name":"My first component","description":"","path":"my-first-component/render.twig","props":{"title":{"label":"Title","type":"string"},"content":{"label":"Content","type":"richText"}}}],"gridConfig":{}}')},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(21);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(3),o=n(22);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.serverSideRender}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),i=n(12),c=n(6),l=n(4),s=n(3),u=n.n(s),p=n(5),b=n.n(p),m=n(8),f=n.n(m),v=n(9),d=n.n(v),y=n(10),h=n.n(y),g=n(11),O=n.n(g),j=n(7),k=n.n(j),E=n(13),C=n.n(E),R=n(14),x=n(15),w=n(1);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var _=function(e){h()(n,e);var t=P(n);function n(e){var r;return f()(this,n),(r=t.apply(this,arguments)).parentProps=e.props,r.currentMargin=S({},r.parentProps.attributes.margin),r}return d()(n,[{key:"getMargin",value:function(e){return"object"==u()(this.currentMargin)&&this.currentMargin.hasOwnProperty(e)?this.currentMargin[e]:null}},{key:"setMargin",value:function(e,t){void 0===this.currentMargin&&(this.currentMargin={}),this.currentMargin=Object.assign(this.currentMargin,b()({},e,t)),console.log(this.parentProps.setAttributes({margin:this.currentMargin}))}},{key:"render",value:function(){var e=this;return Object(a.createElement)(w.PanelBody,{title:"Padding/Margin",initialOpen:!1},Object(a.createElement)(w.RangeControl,{label:"Padding Top",value:this.getMargin("pt"),onChange:function(t){return e.setMargin("pt",t)},min:0,max:5}),Object(a.createElement)(w.RangeControl,{label:"Padding Bottom",value:this.getMargin("pb"),onChange:function(t){return e.setMargin("pb",t)},min:0,max:5}),Object(a.createElement)(w.RangeControl,{label:"Margin Top",value:this.getMargin("mt"),onChange:function(t){return e.setMargin("mt",t)},min:0,max:5}),Object(a.createElement)(w.RangeControl,{label:"Margin Bottom",value:this.getMargin("mb"),onChange:function(t){return e.setMargin("mb",t)},min:0,max:5}))}}]),n}(a.Component);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var A=function(e){h()(n,e);var t=T(n);function n(){return f()(this,n),t.apply(this,arguments)}return d()(n,[{key:"getAttribute",value:function(e){return this.props.attributes[e]}},{key:"setAttributes",value:function(e){this.props.setAttributes(e)}},{key:"returnStringOrNumber",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?parseInt(e,10):e}},{key:"fileSizeFormat",value:function(e){return e>1e6?Math.round(e/1e4)/100+" Mo":Math.round(e/1e3)+" Ko"}},{key:"addEltToRepeatable",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.updateAttributes(e,t,n.concat(""),r)}},{key:"removeEltRepeatable",value:function(e,t){this.updateAttributes(e,t,!1)}},{key:"updateAttributes",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=e[0],a=this.recursiveUpdateObjectFromObject(e,t,n,r);this.setAttributes(b()({},o,a[o]))}},{key:"recursiveUpdateObjectFromObject",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=e.shift();("object"!=u()(t)||Array.isArray(t)&&"string"==typeof a||!Array.isArray(t)&&"number"==typeof a)&&(t="string"==typeof a?{}:[]);for(var i=Array.isArray(t)?[]:{},c=0,l=Object.entries(t);c<l.length;c++){var s=o()(l[c],2),p=s[0],b=s[1];p==a?e.length>0?i[p]=this.recursiveUpdateObjectFromObject(e,b,n,r):n&&(i[p]=this.returnStringOrNumber(n,r)):i[p]=b}if(void 0===i[a]&&(e.length>0?i[a]=this.recursiveUpdateObjectFromObject(e,void 0,n,r):n&&(i[a]=this.returnStringOrNumber(n,r))),0==e.length&&!n)for(var m=0;m<i.length;m++)void 0===i[m]&&i.splice(m,1);return i}},{key:"renderControl",value:function(e,t,n){var r=this,i=[],c=!(void 0===e.repeatable||!e.repeatable),l=n;for(var s in t.forEach((function(e){"object"==u()(l)&&(l=l.hasOwnProperty(e)&&void 0!==l[e]?l[e]:"")})),c?"object"==u()(l)&&0!=l.length||(l=[""]):l=[l],l){s=this.returnStringOrNumber(s,!0);var p=e.label;if(c)p=p+" "+(s+1)+"/"+l.length;var b=this.props.clientId+"-"+t.join("-")+"-"+s;switch(e.type){case"string":i.push(this.renderTextControl(b,p,c?t.concat(s):t,n,l[s],!1,c));break;case"number":i.push(this.renderTextControl(b,p,c?t.concat(s):t,n,l[s],!0,c));break;case"text":i.push(this.renderTextareaControl(b,p,c?t.concat(s):t,n,l[s],c));break;case"richText":i.push(this.renderRichTextControl(b,p,c?t.concat(s):t,n,l[s],c));break;case"boolean":i.push(this.renderToggleControl(b,p,e.help,c?t.concat(s):t,n,l[s],c));break;case"select":i.push(this.renderSelectControl(b,p,e.options,c?t.concat(s):t,n,l[s],c));break;case"radio":i.push(this.renderRadioControl(b,p,e.options,c?t.concat(s):t,n,l[s],c));break;case"link":i.push(this.renderLinkControl(b,p,c?t.concat(s):t,n,l[s],c));break;case"relation":i.push(this.renderRelationControl(b,p,e.entity,c?t.concat(s):t,n,l[s],c));break;case"image":case"file":case"gallery":i.push(this.renderFileControl(e.type,b,p,c?t.concat(s):t,n,l[s],c));break;case"object":"object"==u()(e.props)&&function(){for(var l=c?t.concat(s):t,u=[],m=0,f=Object.entries(e.props);m<f.length;m++){var v=o()(f[m],2),d=v[0],y=v[1];u.push(r.renderControl(y,l.concat(d),n))}c&&(p=Object(a.createElement)(a.Fragment,null,p,Object(a.createElement)(w.Button,{key:b+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return r.removeEltRepeatable(l,n)}},"Remove"))),i.push(Object(a.createElement)(w.Panel,{key:b+"-panelObject"},Object(a.createElement)(w.PanelBody,{key:b+"-panelBodyObject",title:p,initialOpen:!1},Object(a.createElement)("div",{key:b+"-panelBodyDivObject",className:"objectField components-base-control"},Object(a.createElement)("div",{key:b+"-panelBodySubDivObject",className:"objectField-content"},u)))))}()}}return c?(i.push(Object(a.createElement)(w.Button,{key:this.props.clientId+"-"+t.join("-")+"-repeatableAddElt",isSecondary:!0,isSmall:!0,onClick:function(){return r.addEltToRepeatable(t,n,l,!1)}},"Add")),i=Object(a.createElement)("div",{key:this.props.clientId+"-"+t.join("-")+"-repeatableContainer",className:"repeatableField components-base-control"},i)):i=Object(a.createElement)("div",{key:this.props.clientId+"-"+t.join("-")+"-basicContainer",className:"basicField"},i),i}},{key:"renderTextControl",value:function(e,t,n,r,o){var i=this,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5],l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)(w.TextControl,{key:e,label:t,type:c?"number":"text",value:o,onChange:function(e){return i.updateAttributes(n,r,e,c)}})}},{key:"renderTextareaControl",value:function(e,t,n,r,o){var i=this,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)(w.TextareaControl,{key:e,label:t,value:o,onChange:function(e){return i.updateAttributes(n,r,e,!1)}})}},{key:"renderRichTextControl",value:function(e,t,n,r,o){var i=this,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)("div",{key:e+"-RichTextComponentsBaseControl",className:"components-base-control"},Object(a.createElement)("div",{key:e+"-RichTextComponentsBaseControlField",className:"components-base-control__field"},Object(a.createElement)("div",{key:e+"-RichTextContainer",className:"rich-text-container"},Object(a.createElement)("div",{className:"components-base-control__label",key:e+"-label"},t),Object(a.createElement)(c.RichText,{key:e,value:o,multiline:!0,onChange:function(e){return i.updateAttributes(n,r,e,!1)}}))))}},{key:"renderLinkControl",value:function(e,t,n,r,o){var i=this,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(n,r)}},"Remove")));var s=o.text,u=o.url,p=o.opensInNewTab;return Object(a.createElement)("div",{key:e+"-LinkControlComponentsBaseControl",className:"components-base-control"},Object(a.createElement)("div",{key:e+"-LinkControlComponentsBaseControlField",className:"components-base-control__field"},Object(a.createElement)("div",{key:e+"-LinkControlContainer",className:"link-control-container"},Object(a.createElement)("div",{className:"components-base-control__label",key:e+"-label"},t),Object(a.createElement)(w.TextControl,{key:e+"-text",label:"Text",type:"text",value:s,onChange:function(e){return i.updateAttributes(n.concat("text"),r,e,!1)}}),Object(a.createElement)(c.__experimentalLinkControl,{key:e+"-LinkControl",className:"wp-block-navigation-link__inline-link-input",value:{url:u,opensInNewTab:p},onChange:function(e){var t=e.url,o=e.opensInNewTab;i.updateAttributes(n,r,{text:s,url:t,opensInNewTab:o},!1)}}))))}},{key:"renderSelectControl",value:function(e,t,n,r,o,i){var c=this,l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return c.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(w.SelectControl,{key:e,label:t,value:i,options:[{label:"Choose...",value:""}].concat(n.map((function(e){return{label:e.label,value:e.value}}))),onChange:function(e){return c.updateAttributes(r,o,e,!1)}})}},{key:"renderRadioControl",value:function(e,t,n,r,o,i){var c=this,l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return c.removeEltRepeatable(r,o)}},"Remove")));var s=Object(x.withState)({option:i})((function(i){var l=i.option,s=i.setState;return Object(a.createElement)(w.RadioControl,{key:e,label:t,selected:l,options:n.map((function(e){return{label:e.label,value:e.value}})),onChange:function(e){s({newValue:e}),c.updateAttributes(r,o,e,!1)}})}));return Object(a.createElement)("div",{key:e+"-RadioControlComponentsBaseControl",className:"components-base-control"},Object(a.createElement)("div",{key:e+"-RadioControlComponentsBaseControlField",className:"components-base-control__field"},Object(a.createElement)("div",{key:e+"-RadioControlContainer",className:"radio-control-container"},Object(a.createElement)(s,null))))}},{key:"renderRelationControl",value:function(e,t,n,r,o,i){var c=this,l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return c.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(w.SelectControl,{key:e,label:t,value:i,options:this.props.relations[n].map((function(e){return{label:e.title.raw,value:e.id}})),onChange:function(e){return c.updateAttributes(r,o,e,!1)}})}},{key:"renderToggleControl",value:function(e,t,n,r,o,i){var c=this,l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(w.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return c.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(w.ToggleControl,{key:e,label:t,help:!("object"!=u()(n)||!Array.isArray(n)||2!=n.length)&&(i?n[1]:n[0]),checked:i,onChange:function(e){return c.updateAttributes(r,o,e,!1)}})}},{key:"renderFileControl",value:function(e,t,n,r,o,i){var l=this,s=arguments.length>6&&void 0!==arguments[6]&&arguments[6],p=!1;if(i&&"object"==u()(i)){switch(e){case"image":p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{key:t+"-imagePreview",alt:"Edit image",title:"Edit image",className:"edit-image-preview",src:i.preview}));break;case"file":p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{key:t+"-filePreview",alt:"Edit file",title:"Edit file",className:"edit-file-preview",src:i.preview}),Object(a.createElement)("div",{key:t+"-fileDetails",className:"file-details"},i.name,Object(a.createElement)("br",null),i.mime,Object(a.createElement)("br",null),this.fileSizeFormat(i.size)));break;case"gallery":p=[],i.forEach((function(e){p.push(Object(a.createElement)("li",{key:t+"-galleryImageContainerLi"+e.id,className:"blocks-gallery-item"},Object(a.createElement)("img",{key:t+"-galleryImage_"+e.id,src:e.preview})))}));var m=i.length>5?5:i.length;p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("figure",{key:t+"-galleryImagefigure",className:"wp-block-gallery columns-"+m},Object(a.createElement)("ul",{key:t+"-galleryImageContainerUl",className:"blocks-gallery-grid"},p)))}p=Object(a.createElement)("div",{key:t+"-mediaPreviewContainer",className:"media-preview-container"},p,Object(a.createElement)(w.Button,{key:t+"-removeMedia",isSecondary:!0,isSmall:!0,className:"reset-button",onClick:function(){"gallery"==e&&i.length>1?l.setAttributes(b()({},r,i.slice(0,i.length-1))):s?l.removeEltRepeatable(r,o):l.setAttributes(b()({},r,void 0))}},"Remove"))}return Object(a.createElement)(c.MediaPlaceholder,{key:t,labels:{title:n},onSelect:function(t){var n=void 0;switch(e){case"image":n={id:t.id,preview:t.url};break;case"file":n={id:t.id,preview:t.icon,name:t.filename,mime:t.mime,size:t.filesizeInBytes};break;case"gallery":n=[],t.forEach((function(e){n.push({id:e.id,preview:e.url})}))}l.updateAttributes(r,o,n,!1)},multiple:"gallery"==e,addToGallery:"gallery"==e&&!!i,value:i,disableDropZone:!0},p)}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.isSelected,r=e.clientId;for(var i in l.components)if(l.components.hasOwnProperty(i)){var s=l.components[i];if(this.props.name=="custom/wpe-component-"+s.id){if(void 0===t.id_component&&this.setAttributes({id_component:s.id}),!n||!parseInt(global_localized.current_user_can_edit_posts))return Object(a.createElement)(C.a,{key:r+"-serverSideRender",block:"custom/wpe-component-"+s.id,attributes:Object.assign(t,{editor:!0})});var u={default:{props:{}}};if(void 0!==s.props_categories)for(var p=0,m=Object.entries(s.props_categories);p<m.length;p++){var f=o()(m[p],2),v=(f[0],f[1]);u[v.id]={name:v.name,props:{}}}for(var d=0,y=Object.entries(s.props);d<y.length;d++){var h=o()(y[d],2),g=h[0],O=h[1];void 0!==O.category&&O.category in u?u[O.category].props[g]=O:u.default.props[g]=O}for(var j=0,k=Object.entries(u);j<k.length;j++){var E=o()(k[j],2),R=E[0];E[1];0==Object.keys(u[R].props).length&&delete u[R]}for(var x=[],N=0,S=Object.entries(u);N<S.length;N++){var P=o()(S[N],2),T=P[0],A=P[1];if(0!=A.props.length){for(var M=[],F=0,B=Object.entries(A.props);F<B.length;F++){var I=o()(B[F],2),L=I[0],D=I[1],z=this.getAttribute(L);M.push(this.renderControl(D,[L],b()({},L,z)))}"default"==T?x.push({name:T,title:"Default",content:M}):x.push({name:T,title:A.name,content:M})}}var U="";return U=x.length>1?Object(a.createElement)(a.Fragment,null,Object(a.createElement)(w.TabPanel,{key:r+"-tabPanel",className:"tab-panel-wpe-component",activeClass:"active-tab",tabs:x},(function(e){return e.content}))):x[0].content,Object(a.createElement)(a.Fragment,null,Object(a.createElement)(c.InspectorControls,null,Object(a.createElement)(_,{props:this.props})),Object(a.createElement)(w.Placeholder,{key:r+"-placeholder",label:s.name,isColumnLayout:!0,className:"wpe-component_edit_placeholder"},U))}}}}]),n}(a.Component),M=Object(R.withSelect)((function(e,t){var n=e("core").getEntityRecords,r=[];for(var a in l.components)if(l.components.hasOwnProperty(a)){var i=l.components[a];if(t.name=="custom/wpe-component-"+i.id)for(var c=0,s=Object.entries(i.props);c<s.length;c++){var u=o()(s[c],2),p=(u[0],u[1]);"relation"==p.type&&null==r[p.entity]&&(r[p.entity]=n("postType",p.entity))}}return{relations:r}}))(A);l.components.forEach((function(e){for(var t=void 0!==e.standalone&&e.standalone?null:["custom/wpe-container","custom/wpe-column"],n={id_component:{type:"string"},margin:{type:"object"}},r=0,l=Object.entries(e.props);r<l.length;r++){var s=o()(l[r],2),u=s[0],p=s[1];switch(void 0!==p.repeatable&&p.repeatable?"array":p.type){case"string":case"text":case"richText":n[u]={type:"string"};break;case"boolean":n[u]={type:"boolean"};break;case"select":case"radio":n[u]={type:"string"};break;case"relation":n[u]={type:"number"};break;case"array":n[u]={type:"array"};break;case"object":case"link":n[u]={type:"object"};break;case"number":n[u]={type:"number"};break;case"image":case"file":n[u]={type:"object"};break;case"gallery":n[u]={type:"array"}}}Object(i.registerBlockType)("custom/wpe-component-"+e.id,{title:e.name,category:"formatting",parent:t,attributes:n,description:e.description,edit:M,save:function(){return Object(a.createElement)(c.InnerBlocks.Content,null)}})}))}]);