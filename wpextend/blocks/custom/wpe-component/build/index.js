!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){var r=n(15),o=n(16),a=n(17),i=n(19);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},function(e){e.exports=JSON.parse('{"assets":{"css":[{"name":"main","type":"style","path":"./dist/index.css"}],"js":[{"name":"main","type":"bare","path":"./dist/index.js"}]},"components":[{"id":"page-list","name":"Page list","path":"page-list.twig","props":{"post":{"label":"Post","type":"relation","entity":"post"},"page":{"label":"Page","type":"relation","entity":"page"},"pages":{"label":"Pages","type":"relation","entity":"page","repeatable":true}}},{"id":"bootstrap-components-alert","name":"Bootstrap Alert","path":"bootstrap-components-alert.twig","props":{"content":{"label":"text","type":"richText"},"type":{"label":"Type","type":"select","options":["primary","secondary","success","danger","warning","info","light","dark"]}}},{"id":"bootstrap-components-badge","name":"Bootstrap Badge","path":"bootstrap-components-badge.twig","props_categories":[{"id":"settings","name":"Settings"}],"props":{"content":{"label":"Content","type":"text"},"type":{"label":"Type","type":"select","options":["primary","secondary","success","danger","warning","info","light","dark"],"category":"settings"},"rounded":{"label":"Rounded","type":"boolean","category":"settings"}}},{"id":"bootstrap-components-card","name":"Bootstrap Card","path":"bootstrap-components-card.twig","props":{"image":{"label":"Image","type":"image"},"title":{"label":"Title","type":"string"},"content":{"label":"Content","type":"text"}}},{"id":"bootstrap-components-jumbotron","name":"Bootstrap Jumbotron","path":"bootstrap-components-jumbotron.twig","props":{"title":{"label":"Title","type":"string"},"lead":{"label":"Lead","type":"text"},"content":{"label":"Content","type":"text"}}}]}')},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(20);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(4),o=n(21);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){!function(){e.exports=this.wp.serverSideRender}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}},function(e,t,n){var r=n(18);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),i=n(8),l=n(5),c=n(3),s=n(4),u=n.n(s),p=n(6),b=n.n(p),m=n(9),f=n.n(m),y=n(10),d=n.n(y),v=n(11),g=n.n(v),h=n(12),j=n.n(h),O=n(7),k=n.n(O),E=n(13),x=n.n(E),C=n(1),w=n(14);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var o=k()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j()(this,n)}}var S=function(e){g()(n,e);var t=R(n);function n(){return f()(this,n),t.apply(this,arguments)}return d()(n,[{key:"getAttribute",value:function(e){return this.props.attributes[e]}},{key:"setAttributes",value:function(e){this.props.setAttributes(e)}},{key:"returnStringOrNumber",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?parseInt(e,10):e}},{key:"fileSizeFormat",value:function(e){return e>1e6?Math.round(e/1e4)/100+" Mo":Math.round(e/1e3)+" Ko"}},{key:"addEltToRepeatable",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.updateAttributes(e,t,n.concat(""),r)}},{key:"removeEltRepeatable",value:function(e,t){console.log(e),console.log(t),this.updateAttributes(e,t,!1)}},{key:"updateAttributes",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=e[0],a=this.recursiveUpdateObjectFromObject(e,t,n,r);this.setAttributes(b()({},o,a[o]))}},{key:"recursiveUpdateObjectFromObject",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=e.shift();("object"!=u()(t)||Array.isArray(t)&&"string"==typeof a||!Array.isArray(t)&&"number"==typeof a)&&(t="string"==typeof a?{}:[]);for(var i=Array.isArray(t)?[]:{},l=0,c=Object.entries(t);l<c.length;l++){var s=o()(c[l],2),p=s[0],b=s[1];p==a?e.length>0?i[p]=this.recursiveUpdateObjectFromObject(e,b,n,r):n&&(i[p]=this.returnStringOrNumber(n,r)):i[p]=b}if(void 0===i[a]&&(e.length>0?i[a]=this.recursiveUpdateObjectFromObject(e,void 0,n,r):n&&(i[a]=this.returnStringOrNumber(n,r))),0==e.length&&!n)for(var m=0;m<i.length;m++)void 0===i[m]&&i.splice(m,1);return i}},{key:"renderControl",value:function(e,t,n){var r=this,i=[],l=!(void 0===e.repeatable||!e.repeatable),c=n;for(var s in t.forEach((function(e){"object"==u()(c)&&(c=c.hasOwnProperty(e)&&void 0!==c[e]?c[e]:"")})),l?"object"==u()(c)&&0!=c.length||(c=[""]):c=[c],c){s=this.returnStringOrNumber(s,!0);var p=e.label;if(l)p=p+" "+(s+1)+"/"+c.length;var b=this.props.clientId+"-"+t.join("-")+"-"+s;switch(e.type){case"string":i.push(this.renderTextControl(b,p,l?t.concat(s):t,n,c[s],!1,l));break;case"number":i.push(this.renderTextControl(b,p,l?t.concat(s):t,n,c[s],!0,l));break;case"text":i.push(this.renderTextareaControl(b,p,l?t.concat(s):t,n,c[s],l));break;case"richText":i.push(this.renderRichTextControl(b,p,l?t.concat(s):t,n,c[s],l));break;case"boolean":i.push(this.renderToggleControl(b,p,e.help,l?t.concat(s):t,n,c[s],l));break;case"select":i.push(this.renderSelectControl(b,p,e.options,l?t.concat(s):t,n,c[s],l));break;case"relation":i.push(this.renderRelationControl(b,p,e.entity,l?t.concat(s):t,n,c[s],l));break;case"image":case"file":case"gallery":i.push(this.renderFileControl(e.type,b,p,l?t.concat(s):t,n,c[s],l));break;case"object":"object"==u()(e.props)&&function(){for(var c=l?t.concat(s):t,u=[],m=0,f=Object.entries(e.props);m<f.length;m++){var y=o()(f[m],2),d=y[0],v=y[1];u.push(r.renderControl(v,c.concat(d),n))}l&&(p=Object(a.createElement)(a.Fragment,null,p,Object(a.createElement)(C.Button,{key:b+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return r.removeEltRepeatable(c,n)}},"Remove"))),i.push(Object(a.createElement)(C.Panel,{key:b+"-panelObject"},Object(a.createElement)(C.PanelBody,{key:b+"-panelBodyObject",title:p,initialOpen:!1},Object(a.createElement)("div",{key:b+"-panelBodyDivObject",className:"objectField components-base-control"},Object(a.createElement)("div",{key:b+"-panelBodySubDivObject",className:"objectField-content"},u)))))}()}}return l?(i.push(Object(a.createElement)(C.Button,{key:this.props.clientId+"-"+t.join("-")+"-repeatableAddElt",isSecondary:!0,isSmall:!0,onClick:function(){return r.addEltToRepeatable(t,n,c,!1)}},"Add")),i=Object(a.createElement)("div",{key:this.props.clientId+"-"+t.join("-")+"-repeatableContainer",className:"repeatableField components-base-control"},i)):i=Object(a.createElement)("div",{key:this.props.clientId+"-"+t.join("-")+"-basicContainer",className:"basicField"},i),i}},{key:"renderTextControl",value:function(e,t,n,r,o){var i=this,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(C.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)(C.TextControl,{key:e,label:t,type:l?"number":"text",value:o,onChange:function(e){return i.updateAttributes(n,r,e,l,c)}})}},{key:"renderTextareaControl",value:function(e,t,n,r,o){var i=this,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return l&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(C.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)(C.TextareaControl,{key:e,label:t,value:o,onChange:function(e){return i.updateAttributes(n,r,e,!1,l)}})}},{key:"renderRichTextControl",value:function(e,t,n,r,o){var i=this,c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(C.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return i.removeEltRepeatable(n,r)}},"Remove"))),Object(a.createElement)("div",{key:e+"-RichTextCmponentsBaseControl",className:"components-base-control"},Object(a.createElement)("div",{key:e+"-RichTextCmponentsBaseControlField",className:"components-base-control__field"},Object(a.createElement)("div",{key:e+"-RichTextContainer",className:"rich-text-container"},Object(a.createElement)("label",{className:"components-base-control__label",key:e+"-label"},t),Object(a.createElement)(l.RichText,{key:e,value:o,multiline:!0,onChange:function(e){return i.updateAttributes(n,r,e,!1,c)}}))))}},{key:"renderSelectControl",value:function(e,t,n,r,o,i){var l=this,c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(C.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return l.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(C.SelectControl,{key:e,label:t,value:i,options:n.map((function(e){return{label:e,value:e}})),onChange:function(e){return l.updateAttributes(r,o,e,!1,c)}})}},{key:"renderRelationControl",value:function(e,t,n,r,o,i){var l=this,c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(C.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return l.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(C.SelectControl,{key:e,label:t,value:i,options:this.props.relations[n].map((function(e){return{label:e.title.raw,value:e.id}})),onChange:function(e){return l.updateAttributes(r,o,e,!1,c)}})}},{key:"renderToggleControl",value:function(e,t,n,r,o,i){var l=this,c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return c&&(t=Object(a.createElement)(a.Fragment,null,t,Object(a.createElement)(C.Button,{key:e+"-repeatableRemoveElt",isLink:!0,className:"removeRepeatable",onClick:function(){return l.removeEltRepeatable(r,o)}},"Remove"))),Object(a.createElement)(C.ToggleControl,{key:e,label:t,help:!("object"!=u()(n)||!Array.isArray(n)||2!=n.length)&&(i?n[1]:n[0]),checked:i,onChange:function(e){return l.updateAttributes(r,o,e,!1,c)}})}},{key:"renderFileControl",value:function(e,t,n,r,o,i){var c=this,s=arguments.length>6&&void 0!==arguments[6]&&arguments[6],p=!1;if(i&&"object"==u()(i)){switch(e){case"image":p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{key:t+"-imagePreview",alt:"Edit image",title:"Edit image",className:"edit-image-preview",src:i.preview}));break;case"file":p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{key:t+"-filePreview",alt:"Edit file",title:"Edit file",className:"edit-file-preview",src:i.preview}),Object(a.createElement)("div",{key:t+"-fileDetails",className:"file-details"},i.name,Object(a.createElement)("br",null),i.mime,Object(a.createElement)("br",null),this.fileSizeFormat(i.size)));break;case"gallery":p=[],i.forEach((function(e){p.push(Object(a.createElement)("li",{key:t+"-galleryImageContainerLi"+e.id,className:"blocks-gallery-item"},Object(a.createElement)("img",{key:t+"-galleryImage_"+e.id,src:e.preview})))}));var m=i.length>5?5:i.length;p=Object(a.createElement)(a.Fragment,null,Object(a.createElement)("figure",{key:t+"-galleryImagefigure",className:"wp-block-gallery columns-"+m},Object(a.createElement)("ul",{key:t+"-galleryImageContainerUl",className:"blocks-gallery-grid"},p)))}p=Object(a.createElement)("div",{key:t+"-mediaPreviewContainer",className:"media-preview-container"},p,Object(a.createElement)(C.Button,{key:t+"-removeMedia",isSecondary:!0,isSmall:!0,className:"reset-button",onClick:function(){"gallery"==e&&i.length>1?c.setAttributes(b()({},r,i.slice(0,i.length-1))):s?c.removeEltRepeatable(r,o):c.setAttributes(b()({},r,void 0))}},"Remove"))}return Object(a.createElement)(l.MediaPlaceholder,{key:t,labels:{title:n},onSelect:function(t){var n=void 0;switch(e){case"image":n={id:t.id,preview:t.url};break;case"file":n={id:t.id,preview:t.icon,name:t.filename,mime:t.mime,size:t.filesizeInBytes};break;case"gallery":n=[],t.forEach((function(e){n.push({id:e.id,preview:e.url})}))}c.updateAttributes(r,o,n,!1,s)},multiple:"gallery"==e,addToGallery:"gallery"==e&&!!i,value:i,disableDropZone:!0},p)}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.isSelected,r=e.clientId;e.className;for(var i in c.components)if(c.components.hasOwnProperty(i)){var l=c.components[i];if(this.props.name=="custom/wpe-component-"+l.id){if(void 0===t.id_component&&this.setAttributes({id_component:l.id}),!n)return Object(a.createElement)(x.a,{key:r+"-serverSideRender",block:"custom/wpe-component-"+l.id,attributes:t});var s={default:{props:{}}};if(void 0!==l.props_categories)for(var u=0,p=Object.entries(l.props_categories);u<p.length;u++){var m=o()(p[u],2),f=(m[0],m[1]);s[f.id]={name:f.name,props:{}}}for(var y=0,d=Object.entries(l.props);y<d.length;y++){var v=o()(d[y],2),g=v[0],h=v[1];void 0!==h.category&&h.category in s?s[h.category].props[g]=h:s.default.props[g]=h}for(var j=0,O=Object.entries(s);j<O.length;j++){var k=o()(O[j],2),E=k[0];k[1];0==Object.keys(s[E].props).length&&delete s[E]}for(var w=[],R=0,S=Object.entries(s);R<S.length;R++){var A=o()(S[R],2),T=A[0],N=A[1];if(0!=N.props.length){for(var P=[],_=0,F=Object.entries(N.props);_<F.length;_++){var B=o()(F[_],2),I=B[0],L=B[1],M=this.getAttribute(I);P.push(this.renderControl(L,[I],b()({},I,M)))}"default"==T?w.push({name:T,title:"Default",content:P}):w.push({name:T,title:N.name,content:P})}}var D="";return D=w.length>1?Object(a.createElement)(a.Fragment,null,Object(a.createElement)(C.TabPanel,{key:r+"-tabPanel",className:"tab-panel-wpe-component",activeClass:"active-tab",tabs:w},(function(e){return e.content}))):w[0].content,Object(a.createElement)(a.Fragment,null,Object(a.createElement)(C.Placeholder,{key:r+"-placeholder",label:l.name,isColumnLayout:!0,className:"wpe-component_edit_placeholder"},D))}}}}]),n}(a.Component),A=Object(w.withSelect)((function(e,t){var n=e("core").getEntityRecords,r=[];for(var a in c.components)if(c.components.hasOwnProperty(a)){var i=c.components[a];if(t.name=="custom/wpe-component-"+i.id)for(var l=0,s=Object.entries(i.props);l<s.length;l++){var u=o()(s[l],2),p=(u[0],u[1]);"relation"==p.type&&null==r[p.entity]&&(r[p.entity]=n("postType",p.entity))}}return{relations:r}}))(S);c.components.forEach((function(e){for(var t={id_component:{type:"string"}},n=0,r=Object.entries(e.props);n<r.length;n++){var c=o()(r[n],2),s=c[0],u=c[1],p=u.type;switch(void 0!==u.repeatable&&u.repeatable&&(p="array"),p){case"string":case"text":case"richText":t[s]={type:"string"};break;case"boolean":t[s]={type:"boolean"};break;case"select":t[s]={type:"string"};break;case"relation":t[s]={type:"number"};break;case"array":t[s]={type:"array"};break;case"object":t[s]={type:"object"};break;case"number":t[s]={type:"number"};break;case"image":case"file":t[s]={type:"object"};break;case"gallery":t[s]={type:"array"}}}Object(i.registerBlockType)("custom/wpe-component-"+e.id,{title:e.name,attributes:t,description:e.description,edit:A,save:function(){return Object(a.createElement)(l.InnerBlocks.Content,null)}})}))}]);