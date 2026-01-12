(function(){'use strict';var n,aa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
var ea=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),fa;
if(typeof Object.setPrototypeOf=="function")fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=fa;
function v(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Da=b.prototype}
function ma(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:ma(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function pa(a){return qa(a,a)}
function qa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa=typeof Object.assign=="function"?Object.assign:function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||sa});
function ta(){this.B=!1;this.o=null;this.i=void 0;this.h=1;this.u=this.H=0;this.K=this.j=null}
function ua(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
ta.prototype.G=function(a){this.i=a};
function va(a,b){a.j={exception:b,Yd:!0};a.h=a.H||a.u}
ta.prototype.return=function(a){this.j={return:a};this.h=this.u};
ta.prototype.yield=function(a,b){this.h=b;return{value:a}};
ta.prototype.v=function(a){this.h=a};
function wa(a,b,c){a.H=b;c!=void 0&&(a.u=c)}
function xa(a,b){a.h=b;a.H=0}
function ya(a){a.H=0;var b=a.j.exception;a.j=null;return b}
function za(a){a.K=[a.j];a.H=0;a.u=0}
function Aa(a,b){var c=a.K.splice(0)[0];(c=a.j=a.j||c)?c.Yd?a.h=a.H||a.u:c.v!=void 0&&a.u<c.v?(a.h=c.v,a.j=null):a.h=a.u:a.h=b}
function Ba(a){this.h=new ta;this.i=a}
function Ca(a,b){ua(a.h);var c=a.h.o;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.o=null,va(a.h,g),Ea(a)}a.h.o=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Yd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){ua(a.h);a.h.o?b=Da(a,a.h.o.next,b,a.h.G):(a.h.G(b),b=Ea(a));return b};
this.throw=function(b){ua(a.h);a.h.o?b=Da(a,a.h.o["throw"],b,a.h.G):(va(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ha(new Fa(new Ba(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ea});
u("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return Ia(ma(this))}});
return a});
function Ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
u("Promise",function(a){function b(g){this.Z=0;this.ib=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.V),reject:g(this.j)}};
b.prototype.V=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ba(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.K(g):this.o(g)}};
b.prototype.K=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.H(2,g)};
b.prototype.o=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.Z!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.Z);this.Z=g;this.ib=h;this.Z===2&&this.aa();this.B()};
b.prototype.aa=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.ib)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ib;return k(g)};
b.prototype.B=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.ba=function(g){var h=this.i();g.Bc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(x){try{l(r(x))}catch(z){m(z)}}:t}
var l,m,p=new b(function(r,t){l=r;m=t});
this.Bc(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Bc=function(g,h){function k(){switch(l.Z){case 1:g(l.ib);break;case 2:h(l.ib);break;default:throw Error("Unexpected state: "+l.Z);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).Bc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(z){r[x]=z;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Bc(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||la});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;v(b,Error);b.prototype.name="SuppressedError";return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ra(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return Ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ra(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
u("Math.imul",function(a){return a?a:function(b,c){b=Number(b);c=Number(c);var d=b&65535,e=c&65535;return d*e+((b>>>16&65535)*e+d*(c>>>16&65535)<<16>>>0)|0}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a,b){var c=G("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function G(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Na(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Pa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a){return a}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.Da=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function bb(a){var b=C.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function cb(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function db(a){var b=a.url;a=a.Kj;this.i=b;this.o=a;this.j=(new Date).getTime()-17040672E5;this.h={};for(var c=/[?&]([^&=]+)=([^&]*)/g;a=c.exec(b);)this.h[a[1]]=a[2]}
function eb(a){a=a.o;if(!a)return"";var b=cb("uap",a.platform)+cb("uapv",a.platformVersion)+cb("uafv",a.uaFullVersion)+cb("uaa",a.architecture)+cb("uam",a.model)+cb("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function fb(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function gb(a){function b(f){a.error=a.nb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.nb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.nb?Promise.reject(a.error):Promise.resolve();
if(a.nb)throw a.error;}
var d,e=0;c()}
;function ib(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ib);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ab(ib,Error);ib.prototype.name="CustomError";var jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var kb=globalThis.trustedTypes,lb;function mb(){var a=null;if(!kb)return a;try{var b=function(c){return c};
a=kb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function nb(){lb===void 0&&(lb=mb());return lb}
;function ob(a){this.h=a}
ob.prototype.toString=function(){return this.h+""};
function pb(a){var b=nb();a=b?b.createScriptURL(a):a;return new ob(a)}
function qb(a){if(a instanceof ob)return a.h;throw Error("");}
;var rb=pa([""]),sb=qa(["\x00"],["\\0"]),tb=qa(["\n"],["\\n"]),ub=qa(["\x00"],["\\u0000"]);function vb(a){return a.toString().indexOf("`")===-1}
vb(function(a){return a(rb)})||vb(function(a){return a(sb)})||vb(function(a){return a(tb)})||vb(function(a){return a(ub)});function wb(a){this.h=a}
wb.prototype.toString=function(){return this.h};
var xb=new wb("about:invalid#zClosurez");function yb(a){this.If=a}
function zb(a){return new yb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ab=[zb("data"),zb("http"),zb("https"),zb("mailto"),zb("ftp"),new yb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Bb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Cb(a){if(a instanceof wb)if(a instanceof wb)a=a.h;else throw Error("");else a=Bb.test(a)?a:void 0;return a}
;function Db(a,b){b=Cb(b);b!==void 0&&(a.href=b)}
;function Eb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h+""};function Gb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h+""};
function Ib(a){var b=nb();a=b?b.createScript(a):a;return new Hb(a)}
function Jb(a){if(a instanceof Hb)return a.h;throw Error("");}
;function Kb(a){var b=Gb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Lb(a,b){a.src=qb(b);Kb(a)}
;function Nb(){this.h=Ob[0].toLowerCase()}
Nb.prototype.toString=function(){return this.h};function Pb(a){var b="true".toString(),c=[new Nb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Nb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Qb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Rb(a,b){if(b instanceof ob)a.href=qb(b).toString(),a.rel="stylesheet";else{if(Qb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Cb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Sb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Tb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ub=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Vb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Wb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Tb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Xb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Yb(a,b){b=Sb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Zb(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function $b(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function ac(a,b){return a>b?1:a<b?-1:0}
;function bc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function cc(a){var b=G("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=dc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ec[c])c=ec[c];else{c=String(c);if(!ec[c]){var f=/function\s+([^\(]+)/m.exec(c);ec[c]=f?f[1]:"[Anonymous]"}c=ec[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function dc(a,b){b||(b={});b[fc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[fc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=dc(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[fc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=dc(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function fc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ec={};function hc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function ic(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(a){return a?decodeURI(a):a}
function lc(a){return kc(a.match(jc)[3]||null)}
function mc(a){return kc(a.match(jc)[5]||null)}
function nc(a){var b=a.match(jc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function oc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function pc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?hc(e):"")}}}
function qc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)qc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function rc(a){var b=[],c;for(c in a)qc(c,a[c],b);return b.join("&")}
function sc(a,b){b=rc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function tc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var uc=/#|$/,vc=/[?&]($|#)/;function wc(a,b){for(var c=a.search(uc),d=0,e,f=[];(e=tc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(vc,"$1")}
;function xc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function I(a,b,c){c=c===void 0?Error():c;var d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,this.constructor.prototype)}
v(I,Error);function yc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function zc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?zc.apply(null,d):yc(d)}}
;function J(){this.I=this.I;this.H=this.H}
J.prototype.I=!1;J.prototype.dispose=function(){this.I||(this.I=!0,this.X())};
J.prototype[Symbol.dispose]=function(){this.dispose()};
function Ac(a,b){a.addOnDisposeCallback(Ya(yc,b))}
J.prototype.addOnDisposeCallback=function(a,b){this.I?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
J.prototype.X=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Bc(){var a=Cc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:xc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Dc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Dc(f))}))})}
function Dc(a){J.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Qb=this.vm.p;this.j=this.kc.bind(this);this.addOnDisposeCallback(function(){return void Ec(b)})}
v(Dc,J);Dc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.Ia&&{c:a.Ia},a.Zc&&{s:a.Zc},a.Ed!==void 0&&{p:a.Ed}))};
Dc.prototype.kc=function(a){this.vm.e(a)};
Dc.prototype.Cc=function(a,b){return this.vm.c(a,b,!1)};
function Ec(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
Dc.prototype.sc=function(){return this.vm.l()};function Fc(a){var b,c,d={Ia:a.c,ld:a.e,Rf:(b=a.mc)!=null?b:!1,Sf:(c=a.me)!=null?c:!1};a.co&&(d.zc={Od:a.co.c,Pe:a.co.a,zg:a.co.s});return d}
function Gc(a){return function(){var b;return B(function(c){if(c.h==1)return c.yield(a(),2);b=c.i;return c.return({f:function(){return b.Pb.promise},
c:function(d){if(d>150)var e=!1;else try{b.cache=new Hc(d,b.logger),e=!0}catch(f){Ic(b,new I(22,"GBJ:init",f)),e=!1}return e},
m:function(d){return b.gb(Fc(d))},
mws:function(d){return b.Oc(Fc(d))}})})}}
function Jc(a,b){var c=Cc();c=c===void 0?"bevasrsg":c;b={s:function(f){var g;return a.snapshot(Object.assign({},f.c&&{Ia:f.c},f.s&&{Zc:f.s},{Gj:(g=f.p)!=null?g:!0}))},
e:function(f){var g;return void((g=a.kc)==null?void 0:g.call(a,f))},
c:function(f,g){return a.Cc(f,g)},
p:a.Qb,l:function(){return a.sc()},
wpc:b?Gc(b):void 0};var d=window===window.top?window:xc()?window:window.top,e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(c=y(e.nqfbel),d=c.next();!d.done;d=c.next())d=d.value,d(b);e.nqfbel=void 0}else e={},e=(e.bevasrs=b,e.nqfbel=void 0,e),d[c]=e}
;function Kc(a){var b=b===void 0?53:b;var c=[];Lc(a,Mc,6).forEach(function(d){Nc(d,2)<=b&&c.push(Nc(d,1))});
return c}
function Oc(a){var b=b===void 0?53:b;var c=[];Lc(a,Mc,6).forEach(function(d){Nc(d,2)>b&&c.push(Nc(d,1))});
return c}
;function Pc(a){a.then(function(){},function(){})}
function Qc(){J.apply(this,arguments);this.i=1}
v(Qc,J);Qc.prototype.share=function(){if(this.I)throw Error("E:AD");this.i++;return this};
Qc.prototype.dispose=function(){--this.i||J.prototype.dispose.call(this)};function Rc(a){return{fieldType:2,fieldName:a}}
function Sc(a){return{fieldType:3,fieldName:a}}
;function Tc(a){this.h=a;a.hd("/client_streamz/bg/frs",Sc("mk"))}
Tc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Uc(a){this.h=a;a.hd("/client_streamz/bg/wrl",Sc("mn"),Rc("ac"),Rc("sc"),Sc("rk"),Sc("mk"))}
Uc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Vc(a){this.h=a;a.Ab("/client_streamz/bg/ec",Sc("en"),Sc("mk"))}
Vc.prototype.la=function(a,b){this.h.xb("/client_streamz/bg/ec",a,b)};
function Wc(a){this.h=a;a.hd("/client_streamz/bg/el",Sc("en"),Sc("mk"))}
Wc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Xc(a){this.h=a;a.Ab("/client_streamz/bg/cec",Rc("ec"),Sc("mk"))}
Xc.prototype.la=function(a,b){this.h.xb("/client_streamz/bg/cec",a,b)};
function Yc(a){this.h=a;a.Ab("/client_streamz/bg/po/csc",Rc("cs"),Sc("mk"))}
Yc.prototype.la=function(a,b){this.h.xb("/client_streamz/bg/po/csc",a,b)};
function Zc(a){this.h=a;a.Ab("/client_streamz/bg/po/ctav",Sc("av"),Sc("mk"))}
Zc.prototype.la=function(a,b){this.h.xb("/client_streamz/bg/po/ctav",a,b)};
function $c(a){this.h=a;a.Ab("/client_streamz/bg/po/cwsc",Sc("su"),Sc("mk"))}
$c.prototype.la=function(a,b){this.h.xb("/client_streamz/bg/po/cwsc",a,b)};var ad,bd=typeof String.prototype.isWellFormed==="function",cd=typeof TextEncoder!=="undefined";
function dd(a){var b=!1;b=b===void 0?!1:b;if(cd){if(b&&(bd?!a.isWellFormed():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))throw Error("Found an unpaired surrogate");a=(ad||(ad=new TextEncoder)).encode(a)}else{for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var f=a.charCodeAt(e);if(f<128)d[c++]=f;else{if(f<2048)d[c++]=f>>6|192;else{if(f>=55296&&f<=57343){if(f<=56319&&e<a.length){var g=a.charCodeAt(++e);if(g>=56320&&g<=57343){f=(f-55296)*1024+g-56320+
65536;d[c++]=f>>18|240;d[c++]=f>>12&63|128;d[c++]=f>>6&63|128;d[c++]=f&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");f=65533}d[c++]=f>>12|224;d[c++]=f>>6&63|128}d[c++]=f&63|128}}a=c===d.length?d:d.subarray(0,c)}return a}
;function ed(a){D.setTimeout(function(){throw a;},0)}
;function fd(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var gd=Ma(610401301,!1),hd=Ma(748402147,!0),id=Ma(824656860,Ma(1,!0));function jd(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var kd,ld=D.navigator;kd=ld?ld.userAgentData||null:null;function md(a){if(!gd||!kd)return!1;for(var b=0;b<kd.brands.length;b++){var c=kd.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function K(a){return jd().indexOf(a)!=-1}
;function nd(){return gd?!!kd&&kd.brands.length>0:!1}
function od(){return nd()?!1:K("Opera")}
function pd(){return K("Firefox")||K("FxiOS")}
function qd(){return nd()?md("Chromium"):(K("Chrome")||K("CriOS"))&&!(nd()?0:K("Edge"))||K("Silk")}
;function rd(){return gd?!!kd&&!!kd.platform:!1}
function sd(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function td(a){td[" "](a);return a}
td[" "]=function(){};var ud=od(),vd=nd()?!1:K("Trident")||K("MSIE"),wd=K("Edge"),xd=K("Gecko")&&!(jd().toLowerCase().indexOf("webkit")!=-1&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),yd=jd().toLowerCase().indexOf("webkit")!=-1&&!K("Edge");yd&&K("Mobile");rd()||K("Macintosh");rd()||K("Windows");(rd()?kd.platform==="Linux":K("Linux"))||rd()||K("CrOS");var zd=rd()?kd.platform==="Android":K("Android");sd();K("iPad");K("iPod");sd()||K("iPad")||K("iPod");jd().toLowerCase().indexOf("kaios");pd();var Ad=sd()||K("iPod"),Bd=K("iPad");!K("Android")||qd()||pd()||od()||K("Silk");qd();var Cd=K("Safari")&&!(qd()||(nd()?0:K("Coast"))||od()||(nd()?0:K("Edge"))||(nd()?md("Microsoft Edge"):K("Edg/"))||(nd()?md("Opera"):K("OPR"))||pd()||K("Silk")||K("Android"))&&!(sd()||K("iPad")||K("iPod"));var Dd={},Ed=null;function Fd(a,b){Oa(a);b===void 0&&(b=0);Gd();b=Dd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Hd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Id(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Id(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Ed[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Gd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Gd(){if(!Ed){Ed={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Dd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Ed[f]===void 0&&(Ed[f]=e)}}}}
;var Jd=typeof Uint8Array!=="undefined",Kd=!vd&&typeof btoa==="function",Ld=/[-_.]/g,Md={"-":"+",_:"/",".":"="};function Nd(a){return Md[a]||""}
var Od={};function Pd(a,b){Rd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
function Sd(){return Td||(Td=new Pd(null,Od))}
function Ud(a){return new Uint8Array(Vd(a)||0)}
Pd.prototype.sizeBytes=function(){var a=Vd(this);return a?a.length:0};
function Vd(a){Rd(Od);var b=a.h;if(!(b==null||Jd&&b!=null&&b instanceof Uint8Array))if(typeof b==="string")if(Kd){b=Ld.test(b)?b.replace(Ld,Nd):b;b=atob(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;d++)c[d]=b.charCodeAt(d);b=c}else b=Hd(b);else Na(b),b=null;return b==null?b:a.h=b}
var Td;function Rd(a){if(a!==Od)throw Error("illegal external caller");}
;var Wd=void 0;function Xd(a){a=Error(a);bc(a,"warning");return a}
function Yd(a,b){if(a!=null){var c;var d=(c=Wd)!=null?c:Wd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),bc(a,"incident"),ed(a))}}
;function Zd(){return typeof BigInt==="function"}
;var $d=typeof Symbol==="function"&&typeof Symbol()==="symbol";function ae(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var be=ae("jas",void 0,!0),ce=ae(void 0,"1oa"),de=ae(void 0,Symbol()),ee=ae(void 0,"0ub"),fe=ae(void 0,"0ubs"),ge=ae(void 0,"0ubsb"),he=ae(void 0,"0actk"),ie=ae("m_m","pj",!0),je=ae(void 0,"vps"),ke=ae();Math.max.apply(Math,A(Object.values({Li:1,Ki:2,Ji:4,Pi:8,Ri:16,Ni:32,Vg:64,Hi:128,ah:256,Qi:512,bh:1024,Ii:2048,Oi:4096,Mi:8192})));var le={Gf:{value:0,configurable:!0,writable:!0,enumerable:!1}},me=Object.defineProperties,L=$d?be:"Gf",ne,oe=[];pe(oe,7);ne=Object.freeze(oe);function qe(a,b){$d||L in a||me(a,le);a[L]|=b}
function pe(a,b){$d||L in a||me(a,le);a[L]=b}
;var re={};function se(a,b){return b===void 0?a.h!==te&&!!(2&(a.D[L]|0)):!!(2&b)&&a.h!==te}
var te={};function ue(a,b){if(a!=null)if(typeof a==="string")a=a?new Pd(a,Od):Sd();else if(a.constructor!==Pd)if(Jd&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pd(new Uint8Array(a),Od):Sd();else{if(!b)throw Error();a=void 0}return a}
var ve=Object.freeze({});function we(a,b,c){var d=b&128?0:-1,e=a.length,f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;var g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(var h in a)!isNaN(h)&&c(+h,a[h])}}
var xe={};function ye(a){a.hj=!0;return a}
;var ze=ye(function(a){return typeof a==="number"}),Ae=ye(function(a){return typeof a==="string"}),Be=ye(function(a){return typeof a==="boolean"});
function Ce(){var a=De;return ye(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Ee=ye(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"}),Fe=ye(function(a){return!!a&&(typeof a==="object"||typeof a==="function")});var Ge=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function He(a){var b=a;if(Ae(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ze(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Ge?BigInt(a):a=Be(a)?a?"1":"0":Ae(a)?a.trim()||"0":String(a)}
var Ne=ye(function(a){return Ge?a>=Ie&&a<=Je:a[0]==="-"?Ke(a,Le):Ke(a,Me)}),Le=Number.MIN_SAFE_INTEGER.toString(),Ie=Ge?BigInt(Number.MIN_SAFE_INTEGER):void 0,Me=Number.MAX_SAFE_INTEGER.toString(),Je=Ge?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Ke(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var Oe=0,Pe=0,Qe;function Re(a){var b=a>>>0;Oe=b;Pe=(a-b)/4294967296>>>0}
function Se(a){if(a<0){Re(0-a);var b=y(Te(Oe,Pe));a=b.next().value;b=b.next().value;Oe=a>>>0;Pe=b>>>0}else Re(a)}
function Ue(a,b){var c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Ve(a,b)}
function Ve(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Zd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+We(c)+We(a));return c}
function We(a){a=String(a);return"0000000".slice(a.length)+a}
function Xe(){var a=Oe,b=Pe;b&2147483648?Zd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(Te(a,b)),a=b.next().value,b=b.next().value,a="-"+Ve(a,b)):a=Ve(a,b);return a}
function Ye(a){if(a.length<16)Se(Number(a));else if(Zd())a=BigInt(a),Oe=Number(a&BigInt(4294967295))>>>0,Pe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Pe=Oe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Pe*=1E6,Oe=Oe*1E6+d,Oe>=4294967296&&(Pe+=Math.trunc(Oe/4294967296),Pe>>>=0,Oe>>>=0);b&&(b=y(Te(Oe,Pe)),a=b.next().value,b=b.next().value,Oe=a,Pe=b)}}
function Te(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Ze(a){return Array.prototype.slice.call(a)}
;var $e=typeof BigInt==="function"?BigInt.asIntN:void 0,af=typeof BigInt==="function"?BigInt.asUintN:void 0,bf=Number.isSafeInteger,cf=Number.isFinite,df=Math.trunc;function ef(a){return a.displayName||a.name||"unknown type name"}
function ff(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var gf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function hf(a){switch(typeof a){case "bigint":return!0;case "number":return cf(a);case "string":return gf.test(a);default:return!1}}
function jf(a){if(typeof a!=="number")throw Xd("int32");if(!cf(a))throw Xd("int32");return a|0}
function kf(a){return a==null?a:jf(a)}
function lf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return cf(a)?a|0:void 0}
function mf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return cf(a)?a>>>0:void 0}
function nf(a){var b=void 0;b!=null||(b=id?1024:0);if(!hf(a))throw Xd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return of(a);case "bigint":return String($e(64,a));default:return pf(a)}case 1024:switch(c){case "string":return qf(a);case "bigint":return He($e(64,a));default:return rf(a)}case 0:switch(c){case "string":return of(a);case "bigint":return He($e(64,a));default:return sf(a)}default:return Eb(b,"Unknown format requested type for int64")}}
function tf(a){return a==null?a:nf(a)}
function uf(a){a.indexOf(".");var b=a.length;if(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")return a;Ye(a);return Xe()}
function sf(a){hf(a);a=df(a);if(!bf(a)){Se(a);var b=Oe,c=Pe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Ue(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function pf(a){hf(a);a=df(a);bf(a)?a=String(a):(Se(a),a=Xe());return a}
function of(a){hf(a);var b=df(Number(a));if(bf(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return uf(a)}
function qf(a){var b=df(Number(a));if(bf(b))return He(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Zd()?He($e(64,BigInt(a))):He(uf(a))}
function rf(a){return bf(a)?He(sf(a)):He(pf(a))}
function vf(a){if(a==null)return a;if(typeof a==="bigint")return Ne(a)?a=Number(a):(a=$e(64,a),a=Ne(a)?Number(a):String(a)),a;if(hf(a))return typeof a==="number"?sf(a):of(a)}
function wf(a){var b=typeof a;if(a==null)return a;if(b==="bigint")return He($e(64,a));if(hf(a))return b==="string"?qf(a):rf(a)}
function xf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String($e(64,a));if(hf(a)){if(b==="string")return of(a);if(b==="number")return sf(a)}}
function yf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(af(64,a));if(hf(a)){if(b==="string")return hf(a),b=df(Number(a)),bf(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),a[0]==="-"?b=!1:(b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615"),b||(Ye(a),a=Ve(Oe,Pe))),a;if(b==="number")return hf(a),a=df(a),a>=0&&bf(a)||(Se(a),a=Ue(Oe,Pe)),a}}
function zf(a){if(typeof a!=="string")throw Error();return a}
function Af(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Bf(a){return a==null||typeof a==="string"?a:void 0}
function Cf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ef(b)+" but got "+(a&&ef(a.constructor)));}
function Df(a,b,c){if(a!=null&&a[ie]===re)return a;if(Array.isArray(a)){var d=a[L]|0;c=d|c&32|c&2;c!==d&&pe(a,c);return new b(a)}}
;var Ef={};function Ff(a){return a}
;function Gf(a){var b=$a(de);return b?a[b]:void 0}
var Hf={yj:!0};function If(a,b){b<100||Yd(fe,1)}
;function Jf(a,b,c,d){var e=d!==void 0;d=!!d;var f=$a(de),g;!e&&$d&&f&&(g=a[f])&&g.tf(If);f=[];var h=a.length;g=4294967295;var k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var p=h&&a[h-1];p!=null&&typeof p==="object"&&p.constructor===Object?(h--,g=h):p=void 0;if(l&&!(b&128)&&!e){k=!0;var r;g=((r=Kf)!=null?r:Ff)(g-m,m,a,p,void 0)+m}}b=void 0;for(r=0;r<h;r++){var t=a[r];if(t!=null&&(t=c(t,d))!=null)if(l&&r>=g){var x=r-m,z=void 0;((z=b)!=null?z:b={})[x]=t}else f[r]=t}if(p)for(var w in p)h=p[w],h!=
null&&(h=c(h,d))!=null&&(r=+w,t=void 0,l&&!Number.isNaN(r)&&(t=r+m)<g?f[t]=h:(r=void 0,((r=b)!=null?r:b={})[w]=h));b&&(k?f.push(b):f[g]=b);e&&$a(de)&&Gf(a);return f}
function Lf(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Ne(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[L]|0;return a.length===0&&b&1?void 0:Jf(a,b,Lf)}if(a!=null&&a[ie]===re)return Mf(a);if(a instanceof Pd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(Kd){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=Fd(b);a=a.h=b}return a}return}return a}
var Kf;function Nf(a,b){if(b){Kf=b==null||b===Ff||b[je]!==Ef?Ff:b;try{return Mf(a)}finally{Kf=void 0}}return Mf(a)}
function Mf(a){a=a.D;return Jf(a,a[L]|0,Lf)}
;var Of,Pf;function Qf(a){switch(typeof a){case "boolean":return Of||(Of=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Pf||(Pf=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function M(a,b,c){return Rf(a,b,c,2048)}
function Rf(a,b,c,d){d=d===void 0?0:d;if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[L]|0;if(hd&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Sf();if(e&256)throw Error("farr");if(e&64)return(e|d)!==e&&pe(a,e|d),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1,h=c[g];if(h!=null&&typeof h==="object"&&h.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var k in h)f=
+k,f<g&&(c[f+b]=h[k],delete h[k]);e=e&-16760833|(g&1023)<<14;break a}}if(b){k=Math.max(b,f-(e&128?0:-1));if(k>1024)throw Error("spvt");e=e&-16760833|(k&1023)<<14}}}pe(a,e|64|d);return a}
function Sf(){if(hd)throw Error("carr");Yd(he,5)}
;function Tf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[L]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Uf(a,c,!1,b&&!(c&16)):(qe(a,34),c&4&&Object.freeze(a)));return a}if(a!=null&&a[ie]===re)return b=a.D,c=b[L]|0,se(a,c)?a:Vf(a,b,c)?Wf(a,b):Uf(b,c);if(a instanceof Pd)return a}
function Wf(a,b,c){a=new a.constructor(b);c&&(a.h=te);a.i=te;return a}
function Uf(a,b,c,d){d!=null||(d=!!(34&b));a=Jf(a,b,Tf,d);d=32;c&&(d|=2);b=b&16769217|d;pe(a,b);return a}
function Xf(a){var b=a.D,c=b[L]|0;return se(a,c)?Vf(a,b,c)?Wf(a,b,!0):new a.constructor(Uf(b,c,!1)):a}
function Yf(a){if(a.h!==te)return!1;var b=a.D;b=Uf(b,b[L]|0);qe(b,2048);a.D=b;a.h=void 0;a.i=void 0;return!0}
function Zf(a){if(!Yf(a)&&se(a,a.D[L]|0))throw Error();}
function $f(a,b){b===void 0&&(b=a[L]|0);b&32&&!(b&4096)&&pe(a,b|4096)}
function Vf(a,b,c){return c&2?!0:c&32&&!(c&4096)?(pe(b,c|2),a.h=te,!0):!1}
;var ag=He(0),bg={};function cg(a,b,c,d,e){Object.isExtensible(a);b=dg(a.D,b,c,e);if(b!==null||d&&a.i!==te)return b}
function dg(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function eg(a,b,c,d){Zf(a);var e=a.D;fg(e,e[L]|0,b,c,d);return a}
function fg(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[L]|0)>>14&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function gg(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function hg(a){return ue(a,!0)}
function ig(a){a=cg(a,1,void 0,void 0,hg);return a==null?Sd():a}
function jg(a,b,c){Zf(a);var d=a.D,e=d[L]|0;if(b==null)return fg(d,e,3),a;if(!Array.isArray(b))throw Xd();var f=b===ne?7:b[L]|0,g=f,h=gg(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ze(b),g=0,f=kg(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:id?1024:0;f|=h;for(var l=0;l<b.length;l++){var m=b[l],p=c(m,h);Object.is(m,p)||(k&&(b=Ze(b),g=0,f=kg(f,e),k=!1),b[l]=p)}f!==g&&(k&&(b=Ze(b),f=kg(f,e)),pe(b,f));fg(d,e,3,b);return a}
function lg(a,b,c,d){Zf(a);var e=a.D;fg(e,e[L]|0,b,c===""?void 0:c,d);return a}
function mg(a,b,c,d){Zf(a);a=a.D;var e=a[L]|0;if(d==null){var f=ng(a);if(og(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=ng(a);var g=og(f,a,e,c);g!==b&&(g&&(e=fg(a,e,g)),f.set(c,b))}fg(a,e,b,d)}
function ng(a){if($d){var b;return(b=a[ce])!=null?b:a[ce]=new Map}if(ce in a)return a[ce];b=new Map;Object.defineProperty(a,ce,{value:b});return b}
function og(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];dg(b,g)!=null&&(e!==0&&(c=fg(b,c,e)),e=g)}a.set(d,e);return e}
function pg(a,b,c,d,e){var f=!1;d=dg(a,d,e,function(g){var h=Df(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!se(d)&&$f(a,b),d}
function qg(a,b,c,d){var e=a.D,f=e[L]|0;b=pg(e,f,b,c,d);if(b==null)return b;f=e[L]|0;if(!se(a,f)){var g=Xf(b);g!==b&&(Yf(a)&&(e=a.D,f=e[L]|0),b=g,f=fg(e,f,c,b,d),$f(e,f))}return b}
function Lc(a,b,c){var d=void 0===ve?2:4;var e=a.D,f=e,g=e[L]|0,h=se(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Yf(a)&&(f=a.D,g=f[L]|0);a=dg(f,c);h=Array.isArray(a)?a:ne;var l=h===ne?7:h[L]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var p=h,r=g,t=!!(2&m);t&&(r|=2);for(var x=!t,z=!0,w=0,H=0;w<p.length;w++){var F=Df(p[w],b,r);if(F instanceof b){if(!t){var V=se(F);x&&(x=!V);z&&(z=V)}p[H++]=F}}H<w&&(p.length=H);m|=4;m=z?m&-4097:m|4096;m=x?m|8:m&-9}m!==l&&(pe(h,m),2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&
(e===1||(e!==4?0:2&m||!(16&m)&&32&g)))){gg(m)&&(h=Ze(h),m=kg(m,g),g=fg(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)p=b[l],m=Xf(p),p!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;pe(h,m)}b=h;k=h=m;e===1||(e!==4?0:2&h||!(16&h)&&32&g)?gg(h)||(h|=!b.length||a&&!(4096&h)||32&g&&!(4096&h||16&h)?2:256,h!==k&&pe(b,h),Object.freeze(b)):(e===2&&gg(h)&&(b=Ze(b),k=0,h=kg(h,g),g=fg(f,g,c,b)),gg(h)||(d||(h|=16),h!==k&&pe(b,h)));2&h||!(4096&h||16&h)||$f(f,g);return b}
function rg(a,b){a!=null?Cf(a,b):a=void 0;return a}
function sg(a,b,c,d,e){d=rg(d,b);eg(a,c,d,e);d&&!se(d)&&$f(a.D);return a}
function tg(a,b,c,d){Zf(a);var e=a.D,f=e[L]|0;if(d==null)return fg(e,f,c),a;if(!Array.isArray(d))throw Xd();for(var g=d===ne?7:d[L]|0,h=g,k=gg(g),l=k||Object.isFrozen(d),m=!0,p=!0,r=0;r<d.length;r++){var t=d[r];Cf(t,b);k||(t=se(t),m&&(m=!t),p&&(p=t))}k||(g=m?13:5,g=p?g&-4097:g|4096);l&&g===h||(d=Ze(d),h=0,g=kg(g,f));g!==h&&pe(d,g);f=fg(e,f,c,d);2&g||!(4096&g||16&g)||$f(e,f);return a}
function kg(a,b){return a=(2&b?a|2:a&-3)&-273}
function Nc(a,b,c){c=c===void 0?0:c;a=lf(cg(a,b));return a!=null?a:c}
function ug(a,b){var c=c===void 0?0:c;a=mf(cg(a,b));return a!=null?a:c}
function vg(a,b,c){c=c===void 0?ag:c;a=id?cg(a,b,void 0,void 0,wf):wf(cg(a,b));return a!=null?a:c}
function wg(a,b,c,d){c=c===void 0?"":c;var e;return(e=Bf(cg(a,b,d)))!=null?e:c}
function xg(a){var b=b===void 0?0:b;a=cg(a,1);a=a==null?a:cf(a)?a|0:void 0;return a!=null?a:b}
function yg(a,b,c){return eg(a,b,Af(c))}
function zg(a,b,c){if(c!=null){if(!cf(c))throw Xd("enum");c|=0}return eg(a,b,c)}
;function Ag(a,b){this.i=a>>>0;this.h=b>>>0}
function Bg(a){if(!a)return Cg||(Cg=new Ag(0,0));if(!/^\d+$/.test(a))return null;Ye(a);return new Ag(Oe,Pe)}
var Cg;function Dg(a,b){this.i=a>>>0;this.h=b>>>0}
function Eg(a){if(!a)return Fg||(Fg=new Dg(0,0));if(!/^-?\d+$/.test(a))return null;Ye(a);return new Dg(Oe,Pe)}
var Fg;function Gg(){this.h=[]}
Gg.prototype.length=function(){return this.h.length};
Gg.prototype.end=function(){var a=this.h;this.h=[];return a};
function Hg(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Ig(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
Gg.prototype.writeUint8=function(a){this.h.push(a>>>0&255)};
function Jg(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
Gg.prototype.writeInt8=function(a){this.h.push(a>>>0&255)};function Kg(){this.j=[];this.i=0;this.h=new Gg}
function Lg(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Mg(a,b){Ig(a.h,b*8+2);b=a.h.end();Lg(a,b);b.push(a.i);return b}
function Ng(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function Og(a,b,c){if(c!=null){switch(typeof c){case "string":Bg(c)}Ig(a.h,b*8+1);switch(typeof c){case "number":a=a.h;Re(c);Jg(a,Oe);Jg(a,Pe);break;case "bigint":c=BigInt.asUintN(64,c);c=new Ag(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));a=a.h;b=c.h;Jg(a,c.i);Jg(a,b);break;default:c=Bg(c),a=a.h,b=c.h,Jg(a,c.i),Jg(a,b)}}}
function Pg(a,b,c){Ig(a.h,b*8+2);Ig(a.h,c.length);Lg(a,a.h.end());Lg(a,c)}
;function Qg(){function a(){throw Error();}
Object.setPrototypeOf(a,a.prototype);return a}
var Rg=Qg(),Sg=Qg(),Tg=Qg(),Ug=Qg(),Vg=Qg(),Wg=Qg(),Xg=Qg();function N(a,b,c){this.D=M(a,b,c)}
N.prototype.toJSON=function(){return Nf(this)};
N.prototype.serialize=function(a){return JSON.stringify(Nf(this,a))};
function Yg(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");qe(b,32);return new a(b)}
N.prototype.clone=function(){var a=this.D,b=a[L]|0;return Vf(this,a,b)?Wf(this,a,!0):new this.constructor(Uf(a,b,!1))};
N.prototype[ie]=re;N.prototype.toString=function(){return this.D.toString()};function Zg(a,b){this.ed=a;a=$a(Rg);this.h=!!a&&b===a||!1}
function $g(a){var b=b===void 0?Rg:b;return new Zg(a,b)}
function ah(a,b,c,d,e){b=bh(b,d);b!=null&&(c=Mg(a,c),e(b,a),Ng(a,c))}
var ch=$g(ah),dh=$g(ah),eh=Symbol(),fh=Symbol(),gh,hh;
function ih(a){var b=jh,c=kh,d=a[eh];if(d)return d;d={};d.Ui=a;d.be=Qf(a[0]);var e=a[1],f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Hf=!0,gh!=null||(gh=e),hh!=null||(hh=a[f+1]),e=a[f+=2]));for(var g={};e&&lh(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);var k=void 0;if(e instanceof Zg)var l=e;else l=ch,f--;e=void 0;if((e=l)==null?0:e.h){e=a[++f];k=a;var m=f;typeof e==="function"&&(e=e(),k[m]=e);k=
e}e=a[++f];m=h+1;typeof e==="number"&&e<0&&(m-=e,e=a[++f]);for(;h<m;h++){var p=g[h];k?c(d,h,l,k,p):b(d,h,l,p)}}return a[eh]=d}
function lh(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function bh(a,b){if(a instanceof N)return a.D;if(Array.isArray(a))return Rf(a,b[0],b[1])}
;function jh(a,b,c){a[b]=c.ed}
function kh(a,b,c,d){var e,f,g=c.ed;a[b]=function(h,k,l){return g(h,k,l,f||(f=ih(d).be),e||(e=mh(d)))}}
function mh(a){var b=a[fh];if(!b){var c=ih(a);b=function(d,e){return nh(d,e,c)};
a[fh]=b}return b}
function nh(a,b,c){we(a,a[L]|0,function(d,e){if(e!=null){var f=oh(c,d);f?f(b,e,d):d<500||Yd(ge,3)}});
(a=Gf(a))&&a.tf(function(d,e,f){Lg(b,b.h.end());for(d=0;d<f.length;d++)Lg(b,Vd(f[d])||new Uint8Array(0))})}
function oh(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof Zg?c:[dh,c]:[c,void 0];var d=c[0].ed;if(c=c[1]){var e=mh(c),f=ih(c).be;c=a.Hf?hh(f,e):function(g,h,k){return d(g,h,k,f,e)}}else c=d;
return a[b]=c}}
;function ph(a,b,c){if(Array.isArray(b)){var d=b[L]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){var g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);a=d|1;c&&(a=(a|4)&-1537);a!==d&&pe(b,a);c&&a&2&&Object.freeze(b);return b}}
function qh(a,b,c){b=b==null||typeof b==="number"?b:b==="NaN"||b==="Infinity"||b==="-Infinity"?Number(b):void 0;b!=null&&(Ig(a.h,c*8+1),a=a.h,c=Qe||(Qe=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Oe=c.getUint32(0,!0),Pe=c.getUint32(4,!0),Jg(a,Oe),Jg(a,Pe))}
function rh(a,b,c){b=xf(b);if(b!=null){switch(typeof b){case "string":Eg(b)}if(b!=null)switch(Ig(a.h,c*8),typeof b){case "number":a=a.h;Se(b);Hg(a,Oe,Pe);break;case "bigint":c=BigInt.asUintN(64,b);c=new Dg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));Hg(a.h,c.i,c.h);break;default:c=Eg(b),Hg(a.h,c.i,c.h)}}}
function sh(a,b,c){b=lf(b);if(b!=null&&b!=null)if(Ig(a.h,c*8),a=a.h,c=b,c>=0)Ig(a,c);else{for(b=0;b<9;b++)a.h.push(c&127|128),c>>=7;a.h.push(1)}}
function th(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Ig(a.h,c*8),a.h.h.push(b?1:0))}
function uh(a,b,c){b=Bf(b);b!=null&&Pg(a,c,dd(b))}
function vh(a,b,c,d,e){b=bh(b,d);b!=null&&(c=Mg(a,c),e(b,a),Ng(a,c))}
var wh=new Zg(qh,Xg),xh=new Zg(qh,Xg),yh=new Zg(rh,Vg),zh=new Zg(rh,Vg),Ah=new Zg(sh,Ug),Bh=new Zg(sh,Ug),Ch;Ch=new Zg(function(a,b,c){Og(a,c,yf(b))},Wg);
var Dh;Dh=new Zg(function(a,b,c){b=ph(yf,b,!1);if(b!=null)for(var d=0;d<b.length;d++)Og(a,c,b[d])},Wg);
var Eh=new Zg(th,Sg),Fh=new Zg(th,Sg),Gh=new Zg(uh,Tg),Hh;Hh=new Zg(function(a,b,c){b=ph(Bf,b,!0);if(b!=null)for(var d=0;d<b.length;d++){var e=a,f=c,g=b[d];g!=null&&Pg(e,f,dd(g))}},Tg);
var Ih=new Zg(uh,Tg),Jh,Kh=void 0;Kh=Kh===void 0?Rg:Kh;Jh=new Zg(function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)vh(a,b[f],c,d,e);a=b[L]|0;a&1||pe(b,a|1)}},Kh);
var Lh=$g(vh);function Mh(){var a=Nh;this.ctor=Oh;this.isRepeated=0;this.h=qg;this.defaultValue=void 0;this.i=a.Pf!=null?xe:void 0}
Mh.prototype.register=function(){td(this)};function Ph(a){return function(b){return Yg(a,b)}}
;function Qh(a){this.D=M(a)}
v(Qh,N);function Rh(a,b){return jg(a,b,jf)}
;function Sh(a){this.D=M(a)}
v(Sh,N);var Th=[1,2,3];var Uh=[0,Th,Ih,Bh,Fh];var Vh=[0,Jh,[0,wh,yh]];function Wh(a){this.D=M(a)}
v(Wh,N);var Xh=[1,2,3];var Yh=[0,Xh,zh,xh,Lh,Vh];function Zh(a){this.D=M(a)}
v(Zh,N);var $h=[0,Jh,Uh,Yh];var ai=[0,Gh];function bi(a){this.D=M(a)}
v(bi,N);var ci=[0,Gh,-1,Eh];var di=[0,Gh,-1,Ah,Eh];function ei(a){this.D=M(a)}
v(ei,N);var fi=[1,2,3];var gi=[0,fi,Lh,ci,Lh,di,Lh,ai];function hi(a){this.D=M(a)}
v(hi,N);hi.prototype.j=function(a){return function(){var b=new Kg;nh(this.D,b,ih(a));Lg(b,b.h.end());for(var c=new Uint8Array(b.i),d=b.j,e=d.length,f=0,g=0;g<e;g++){var h=d[g];c.set(h,f);f+=h.length}b.j=[c];return c}}([0,
Gh,gi,Hh,Jh,$h,Ch,Dh]);function ii(a){this.D=M(a)}
v(ii,N);function ji(a){var b=new hi;b=yg(b,1,a.i);var c=ki(a);b=jg(b,c,zf);c=[];for(var d=[],e=y(a.h.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var g=a.o,h=a.od(f)||[],k=[],l=0;l<h.length;l++){var m=h[l],p=m&&m.h;m=new Wh;switch(g){case 3:p=Number(p);Number.isFinite(p)&&mg(m,1,Xh,tf(p));break;case 2:p=Number(p);if(p!=null&&typeof p!=="number")throw Error("Value of float/double field must be a number, found "+typeof p+": "+p);mg(m,2,Xh,p)}k.push(m)}g=
k;for(h=0;h<g.length;h++){k=g[h];l=new Zh;k=sg(l,Wh,2,k);l=[];m=li(a);for(p=0;p<m.length;p++){var r=m[p],t=f[p],x=new Sh;switch(r){case 3:mg(x,1,Th,Af(String(t)));break;case 2:r=Number(t);Number.isFinite(r)&&mg(x,2,Th,kf(r));break;case 1:mg(x,3,Th,ff(t==="true"))}l.push(x)}tg(k,Sh,1,l);c.push(k)}}tg(b,Zh,4,c);return b}
;function mi(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function ni(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,t=0;t<64;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;t<80;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],z=e[2],w=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var F=w^x&(z^w);var V=1518500249}else F=x^z^w,V=1859775393;else t<60?(F=x&z|w&(x|z),V=2400959708):(F=x^z^w,V=3395469782);F=((p<<5|p>>>27)&4294967295)+F+H+V+r[t]&4294967295;H=w;w=z;z=(x<<30|x>>>2)&4294967295;x=p;p=F}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+w&4294967295;e[4]=e[4]+H&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var t=[],x=0,z=p.length;x<z;++x)t.push(p.charCodeAt(x));p=t}r||(r=p.length);t=0;if(l==0)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=p[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,m+=64}
function d(){var p=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var x=24;x>=0;x-=8)p[r++]=e[t]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ze:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function oi(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,pi(mi(d),a,c||null)].join(" "):null}
function pi(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Tb(d,function(h){e.push(h)}),qi(e.join(" "));
var f=[],g=[];Tb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Tb(d,function(h){e.push(h)});
a=qi(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function qi(a){var b=ni();b.update(a);return b.Ze().toLowerCase()}
;function ri(a){this.h=a||{cookie:""}}
n=ri.prototype;n.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Nc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.sameSite;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Nc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=jb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Nc:0,path:b,domain:c});return d};
n.ec=function(){return si(this).keys};
n.bb=function(){return si(this).values};
n.clear=function(){for(var a=si(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function si(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=jb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ti=new ri(typeof document=="undefined"?null:document);function ui(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new ri(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function vi(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new ri(document)).get(b));return a?oi(a,c,d):null}
function wi(a){var b=mi(D==null?void 0:D.location.href),c=[];if(ui()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new ri(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?oi(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=vi("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=vi("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function xi(){}
xi.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
xi.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function yi(a){this.D=M(a)}
v(yi,N);function zi(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
zi.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
zi.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
zi.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
zi.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Ai(a){this.D=M(a)}
v(Ai,N);function Bi(a){this.D=M(a)}
v(Bi,N);function Ci(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
n=Ci.prototype;n.clone=function(){return new Ci(this.x,this.y)};
n.equals=function(a){return a instanceof Ci&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
n.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Di(a,b){this.width=a;this.height=b}
n=Di.prototype;n.clone=function(){return new Di(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Ei(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Fi(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Gi(a){var b=Hi,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ii(a){for(var b in a)return!1;return!0}
function Ji(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ki(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Li(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Mi(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ni(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ni(a[c]);return b}
var Oi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pi(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Oi.length;f++)c=Oi[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Qi(a,b){this.h=a===Ri&&b||""}
Qi.prototype.toString=function(){return this.h};
var Ri={};new Qi(Ri,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Si(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Ti(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Ui(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Vi(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Wi(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Xi(a){this.D=M(a)}
v(Xi,N);Xi.prototype.Gc=function(){return xg(this)};function Yi(a){this.D=M(a)}
v(Yi,N);function Zi(a){this.D=M(a)}
v(Zi,N);function $i(a){tg(aj,Yi,1,a)}
var bj=Ph(Zi);function cj(a){this.D=M(a)}
v(cj,N);var dj=["platform","platformVersion","architecture","model","uaFullVersion"],aj=new Zi,ej=null;function fj(a,b){b=b===void 0?dj:b;if(!ej){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));$i((a.brands||[]).map(function(e){var f=new Yi;f=yg(f,1,e.brand);return yg(f,2,e.version)}));
typeof a.mobile==="boolean"&&eg(aj,2,ff(a.mobile));ej=a.getHighEntropyValues(b)}var d=new Set(b);return ej.then(function(e){var f=aj.clone();d.has("platform")&&yg(f,3,e.platform);d.has("platformVersion")&&yg(f,4,e.platformVersion);d.has("architecture")&&yg(f,5,e.architecture);d.has("model")&&yg(f,6,e.model);d.has("uaFullVersion")&&yg(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return aj.serialize()})}
;function gj(a){this.D=M(a)}
v(gj,N);function hj(a){return zg(a,1,1)}
;function ij(a){this.D=M(a,4)}
v(ij,N);function jj(a){this.D=M(a,36)}
v(jj,N);function kj(a){this.D=M(a,19)}
v(kj,N);kj.prototype.qc=function(a){return zg(this,2,a)};function lj(a,b){this.Sa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new kj;Number.isInteger(a)&&this.h.qc(a);b||(this.locale=document.documentElement.getAttribute("lang"));mj(this,new gj)}
lj.prototype.qc=function(a){this.h.qc(a);return this};
function mj(a,b){sg(a.h,gj,1,b);xg(b)||hj(b);a.Sa||(b=nj(a),wg(b,5)||yg(b,5,a.locale));a.j&&(b=nj(a),qg(b,Zi,9)||sg(b,Zi,9,a.j))}
function oj(a,b){a.i=b}
function pj(a){var b=b===void 0?dj:b;var c=a.Sa?void 0:window;c?fj(c,b).then(function(d){a.j=bj(d!=null?d:"[]");d=nj(a);sg(d,Zi,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function nj(a){var b=qg(a.h,gj,1);b||(b=new gj,mj(a,b));a=b;b=qg(a,cj,11);b||(b=new cj,sg(a,cj,11,b));return b}
function qj(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Sa){var h=nj(a);var k=new Xi;k=zg(k,1,a.i);k=eg(k,2,ff(a.isFinal));d=eg(k,3,kf(d>0?d:void 0));d=eg(d,4,kf(f>0?f:void 0));d=eg(d,5,kf(g>0?g:void 0));f=d.D;g=f[L]|0;d=se(d,g)?d:Vf(d,f,g)?Wf(d,f):new d.constructor(Uf(f,g,!0));sg(h,Xi,10,d)}a=a.h.clone();h=Date.now().toString();a=eg(a,4,tf(h));b=b.slice();b=tg(a,jj,3,b);e&&(a=new Ai,e=eg(a,13,kf(e)),a=new Bi,e=sg(a,Ai,2,e),a=new ij,
e=sg(a,Bi,1,e),e=zg(e,2,9),sg(b,ij,18,e));c&&eg(b,14,tf(c));return b}
;var rj=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function sj(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.H=c||0;this.B=d||2}
sj.prototype.i=0;sj.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
sj.prototype.getValue=function(){return this.j};
function tj(a){a.h=Math.min(a.u,a.h*a.B);a.j=Math.min(a.u,a.h+(a.H?Math.round(a.H*(Math.random()-.5)*2*a.h):0));a.i++}
;function Nh(a){this.D=M(a,8)}
v(Nh,N);var uj=Ph(Nh);function Oh(a){this.D=M(a)}
v(Oh,N);var vj;vj=new Mh;function wj(a){J.call(this);var b=this;this.componentId="";this.h=[];this.Wa="";this.pageId=null;this.lb=this.oa=-1;this.G=this.experimentIds=null;this.B=this.o=0;this.V=null;this.ba=this.ha=0;this.Ub=1;this.timeoutMillis=0;this.Aa=!1;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.j=new lj(a.logSource,a.Sa);this.network=a.network||null;this.tb=a.tb||null;this.bufferSize=1E3;this.K=a.Gg||null;this.sessionIndex=a.sessionIndex||null;this.ac=a.ac||!1;this.logger=null;this.withCredentials=!a.kd;this.Sa=a.Sa||!1;this.aa=!this.Sa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Va=typeof URLSearchParams!=="undefined"&&!!(new URL(xj())).searchParams&&!!(new URL(xj())).searchParams.set;var c=hj(new gj);mj(this.j,c);this.u=new sj(1E4,3E5,.1);a=yj(this,a.Ld);
this.i=new zi(this.u.getValue(),a);this.Ha=new zi(6E5,a);this.ac||this.Ha.start();this.Sa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){zj(b);var d;(d=b.V)==null||d.flush()}}),document.addEventListener("pagehide",function(){zj(b);
var d;(d=b.V)==null||d.flush()}))}
v(wj,J);function yj(a,b){return a.Va?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
wj.prototype.X=function(){zj(this);this.i.stop();this.Ha.stop();J.prototype.X.call(this)};
function Aj(a){a.K||(a.K=xj());try{return(new URL(a.K)).toString()}catch(b){return(new URL(a.K,window.location.origin)).toString()}}
function Bj(a,b,c){a.V&&a.V.la(b,c)}
wj.prototype.log=function(a){Bj(this,2,1);if(this.Va){a=a.clone();var b=this.Ub++;a=eg(a,21,tf(b));this.componentId&&yg(a,26,this.componentId);b=a;var c=cg(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String($e(64,c)):hf(c)?e==="string"?of(c):d?pf(c):sf(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",eg(b,1,tf(d)));(id?vf(cg(b,15,void 0,void 0,wf)):vf(cg(b,15)))==null&&eg(b,15,tf((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),
sg(b,yi,16,d));Bj(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,Bj(this,3,b));this.h.push(a);this.ac||this.i.enabled||this.i.start()}};
wj.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.Aa&&this.aa)this.j.i=3,Cj(this);else{var d=Date.now();if(this.lb>d&&this.oa<d)b&&b("throttled");else{this.network&&(typeof this.network.Gc==="function"?oj(this.j,this.network.Gc()):this.j.i=0);var e=this.h.length,f=qj(this.j,this.h,this.o,this.B,this.tb,this.ha,this.ba),g=this.Fb();if(g&&this.Wa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=Dj(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var x=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=uj(x)}catch(H){}if(t){r=Number(vg(t,1,He("-1")));r>0&&(c.oa=Date.now(),c.lb=c.oa+r);r=$a(de);var z;$d&&r&&((z=t.D[r])==null?void 0:z[175237375])!=null&&Yd(ee,3);a:{var w=w===void 0?!1:w;if($a(ke)&&$a(de)&&void 0===ke){z=t.D;r=z[de];if(!r)break a;if(r=r.zj)try{r(z,175237375,Hf);break a}catch(H){ed(H)}}w&&(w=t.D,(z=$a(de))&&
z in w&&(w=w[z])&&delete w[175237375])}w=vj.ctor?vj.h(t,vj.ctor,175237375,vj.i):vj.h(t,175237375,null,vj.i);if(w=w===null?void 0:w)w=Nc(w,1,-1),w!==-1&&(c.u=new sj(w<1?1:w,3E5,.1),c.i.setInterval(c.u.getValue()))}}a&&a();c.B=0},m=function(r,t){var x=Lc(f,jj,3);
var z=Number(vg(f,14));tj(c.u);c.i.setInterval(c.u.getValue());r===401&&g&&(c.Wa=g);z&&(c.o+=z);t===void 0&&(t=c.isRetryable(r));t&&(c.h=x.concat(c.h),c.ac||c.i.enabled||c.i.start());Bj(c,7,1);b&&b("net-send-failed",r);++c.B},p=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){Bj(c,5,e);k.Wc["Content-Encoding"]="gzip";k.Wc["Content-Type"]="application/binary";k.body=r;k.Re=2;p()},function(){Bj(c,6,e);
p()}):p()}}}};
function Dj(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(Aj(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,Re:1,Wc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function zj(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Cj(a){Ej(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.aa=!1);return d})}
function Ej(a,b){if(a.h.length!==0){var c=new URL(Aj(a));c.searchParams.delete("format");var d=a.Fb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=qj(a.j,e,a.o,a.B,a.tb,a.ha,a.ba);if(!b(c.toString(),f)){++a.B;break}a.o=0;a.B=0;a.ha=0;a.ba=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
wj.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function xj(){return"https://play.google.com/log?format=json&hasfast=true"}
;function Fj(){this.Ke=typeof AbortController!=="undefined"}
Fj.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,p,r,t;return B(function(x){switch(x.h){case 1:return f=(e=d.Ke?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,wa(x,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Wc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),x.yield(fetch(a.url,g),5);case 5:h=x.i;if(h.status!==200){(k=c)==null||k(h.status);x.v(3);break}if((l=b)==null){x.v(7);break}return x.yield(h.text(),8);case 8:l(x.i);case 7:case 3:za(x);clearTimeout(f);Aa(x,0);break;case 2:m=ya(x);switch((p=m)==null?void 0:p.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}x.v(3)}})};
Fj.prototype.Gc=function(){return 4};function Gj(a,b){b=b===void 0?"0":b;J.call(this);this.logSource=a;this.sessionIndex=b;this.ab="https://play.google.com/log?format=json&hasfast=true";this.buildLabel=null;this.j=!1;this.network=null;this.componentId="";this.h=this.tb=null;this.i=!1;this.pageId=null;this.bufferSize=void 0}
v(Gj,J);function Hj(a,b){a.buildLabel=b;return a}
function Ij(a,b){a.network=b;return a}
function Jj(a,b){a.h=b}
function Kj(a){a.i=!0;return a}
Gj.prototype.kd=function(){this.o=!0;return this};
function Lj(a){a.network||(a.network=new Fj);var b=new wj({logSource:a.logSource,Fb:a.Fb?a.Fb:wi,sessionIndex:a.sessionIndex,Gg:a.ab,Sa:a.j,ac:!1,kd:a.o,Ld:a.Ld,network:a.network});Ac(a,b);if(a.buildLabel){var c=a.buildLabel,d=nj(b.j);yg(d,7,c)}b.G=new xi;a.componentId&&(b.componentId=a.componentId);a.tb&&(b.tb=a.tb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new yi),c=b.experimentIds,d=d.serialize(),yg(c,4,d)):b.experimentIds&&eg(b.experimentIds,4));a.i&&(b.Aa=
b.aa);pj(b.j);a.bufferSize&&(b.bufferSize=a.bufferSize);a.network.qc&&a.network.qc(a.logSource);a.network.tg&&a.network.tg(b);return b}
;function Mj(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;J.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Gj(a,"0"),a.componentId=b,Ac(this,a),c!==""&&(a.ab=c),d&&(a.j=!0),e&&Hj(a,e),g&&Ij(a,g),b=Lj(a));this.h=b}
v(Mj,J);Mj.prototype.flush=function(a){var b=a||[];if(b.length){a=new ii;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=ji(e);c.push(f);e.clear()}tg(a,hi,1,c);b=this.h;if(a instanceof jj)b.log(a);else try{var g=new jj,h=a.serialize();var k=yg(g,8,h);b.log(k)}catch(l){Bj(b,4,1)}this.h.flush()}};function Nj(a){this.h=a}
;function Oj(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function li(a){return a.fields.map(function(b){return b.fieldType})}
function ki(a){return a.fields.map(function(b){return b.fieldName})}
n=Oj.prototype;n.Le=function(a){var b=C.apply(1,arguments),c=this.od(b);c?c.push(new Nj(a)):this.qe(a,b)};
n.qe=function(a){var b=this.Kd(C.apply(1,arguments));this.h.set(b,[new Nj(a)])};
n.od=function(){var a=this.Kd(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
n.wf=function(){var a=this.od(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
n.clear=function(){this.h.clear()};
n.Kd=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function Pj(a,b){Oj.call(this,a,3,b)}
v(Pj,Oj);Pj.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.wf(b);d&&(c=d.h);this.qe(c+a,b)};function Qj(a,b){Oj.call(this,a,2,b)}
v(Qj,Oj);Qj.prototype.record=function(a){this.Le(a,C.apply(1,arguments))};function Rj(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Rj.prototype.stopPropagation=function(){this.j=!0};
Rj.prototype.preventDefault=function(){this.defaultPrevented=!0};function Sj(a,b){Rj.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(Sj,Rj);
Sj.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Sj.Da.preventDefault.call(this)};
Sj.prototype.stopPropagation=function(){Sj.Da.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Sj.prototype.preventDefault=function(){Sj.Da.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tj="closure_listenable_"+(Math.random()*1E6|0);var Uj=0;function Vj(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++Uj;this.oc=this.Ac=!1}
function Wj(a){a.oc=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function Xj(a){this.src=a;this.listeners={};this.h=0}
Xj.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Yj(a,b,d,e);g>-1?(b=a[g],c||(b.Ac=!1)):(b=new Vj(b,this.src,f,!!d,e),b.Ac=c,a.push(b));return b};
Xj.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Yj(e,b,c,d);return b>-1?(Wj(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Zj(a,b){var c=b.type;c in a.listeners&&Yb(a.listeners[c],b)&&(Wj(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Yj(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.oc&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1}
;var ak="closure_lm_"+(Math.random()*1E6|0),bk={},ck=0;function dk(a,b,c,d,e){if(d&&d.once)ek(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)dk(a,b[f],c,d,e);else c=fk(c),a&&a[Tj]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):gk(a,b,c,!1,d,e)}
function gk(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=hk(a);h||(a[ak]=h=new Xj(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ik();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)rj||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jk(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ck++}}
function ik(){function a(c){return b.call(a.src,a.listener,c)}
var b=kk;return a}
function ek(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ek(a,b[f],c,d,e);else c=fk(c),a&&a[Tj]?lk(a,b,c,Pa(d)?!!d.capture:!!d,e):gk(a,b,c,!0,d,e)}
function mk(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)mk(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=fk(c),a&&a[Tj])?a.i.remove(String(b),c,d,e):a&&(a=hk(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Yj(b,c,d,e)),(c=a>-1?b[a]:null)&&nk(c))}
function nk(a){if(typeof a!=="number"&&a&&!a.oc){var b=a.src;if(b&&b[Tj])Zj(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jk(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ck--;(c=hk(b))?(Zj(c,a),c.h==0&&(c.src=null,b[ak]=null)):Wj(a)}}}
function jk(a){return a in bk?bk[a]:bk[a]="on"+a}
function kk(a,b){if(a.oc)a=!0;else{b=new Sj(b,this);var c=a.listener,d=a.handler||a.src;a.Ac&&nk(a);a=c.call(d,b)}return a}
function hk(a){a=a[ak];return a instanceof Xj?a:null}
var ok="__closure_events_fn_"+(Math.random()*1E9>>>0);function fk(a){if(typeof a==="function")return a;a[ok]||(a[ok]=function(b){return a.handleEvent(b)});
return a[ok]}
;function pk(){J.call(this);this.i=new Xj(this);this.Aa=this;this.ba=null}
ab(pk,J);pk.prototype[Tj]=!0;n=pk.prototype;n.addEventListener=function(a,b,c,d){dk(this,a,b,c,d)};
n.removeEventListener=function(a,b,c,d){mk(this,a,b,c,d)};
function qk(a,b){var c=a.ba;if(c){var d=[];for(var e=1;c;c=c.ba)d.push(c),++e}a=a.Aa;c=b.type||b;typeof b==="string"?b=new Rj(b,a):b instanceof Rj?b.target=b.target||a:(e=b,b=new Rj(c,a),Pi(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=rk(g,c,!0,b)&&e}b.j||(g=b.h=a,e=rk(g,c,!0,b)&&e,b.j||(e=rk(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=rk(g,c,!1,b)&&e}
n.X=function(){pk.Da.X.call(this);this.removeAllListeners();this.ba=null};
n.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function lk(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
n.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Wj(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function rk(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.oc&&g.capture==c){var h=g.listener,k=g.handler||g.src;g.Ac&&Zj(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var sk=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function tk(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
tk.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function uk(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function vk(){this.i=this.h=null}
vk.prototype.add=function(a,b){var c=wk.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
vk.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var wk=new tk(function(){return new xk},function(a){return a.reset()});
function xk(){this.next=this.scope=this.h=null}
xk.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
xk.prototype.reset=function(){this.next=this.scope=this.h=null};var yk,zk=!1,Ak=new vk;function Bk(a,b){yk||Ck();zk||(yk(),zk=!0);Ak.add(a,b)}
function Ck(){var a=Promise.resolve(void 0);yk=function(){a.then(Dk)}}
function Dk(){for(var a;a=Ak.remove();){try{a.h.call(a.scope)}catch(b){ed(b)}uk(wk,a)}zk=!1}
;function Ek(){}
function Fk(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Gk(a){this.Z=0;this.ib=void 0;this.Cb=this.Ya=this.parent_=null;this.Hc=this.md=!1;if(a!=Ek)try{var b=this;a.call(void 0,function(c){Hk(b,2,c)},function(c){Hk(b,3,c)})}catch(c){Hk(this,3,c)}}
function Ik(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Ik.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Jk=new tk(function(){return new Ik},function(a){a.reset()});
function Kk(a,b,c){var d=Jk.get();d.i=a;d.h=b;d.context=c;return d}
function Lk(a){return new Gk(function(b,c){c(a)})}
Gk.prototype.then=function(a,b,c){return Mk(this,sk(typeof a==="function"?a:null),sk(typeof b==="function"?b:null),c)};
Gk.prototype.$goog_Thenable=!0;function Nk(a,b,c,d){Ok(a,Kk(b||Ek,c||null,d))}
n=Gk.prototype;n.finally=function(a){var b=this;a=sk(a);return new Gk(function(c,d){Nk(b,function(e){a();c(e)},function(e){a();
d(e)})})};
n.cd=function(a,b){return Mk(this,null,sk(a),b)};
n.catch=Gk.prototype.cd;n.cancel=function(a){if(this.Z==0){var b=new Pk(a);Bk(function(){Qk(this,b)},this)}};
function Qk(a,b){if(a.Z==0)if(a.parent_){var c=a.parent_;if(c.Ya){for(var d=0,e=null,f=null,g=c.Ya;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.Z==0&&d==1?Qk(c,b):(f?(d=f,d.next==c.Cb&&(c.Cb=d),d.next=d.next.next):Rk(c),Sk(c,e,3,b)))}a.parent_=null}else Hk(a,3,b)}
function Ok(a,b){a.Ya||a.Z!=2&&a.Z!=3||Tk(a);a.Cb?a.Cb.next=b:a.Ya=b;a.Cb=b}
function Mk(a,b,c,d){var e=Kk(null,null,null);e.child=new Gk(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Pk?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Ok(a,e);return e.child}
n.Eg=function(a){this.Z=0;Hk(this,2,a)};
n.Fg=function(a){this.Z=0;Hk(this,3,a)};
function Hk(a,b,c){if(a.Z==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.Z=1;a:{var d=c,e=a.Eg,f=a.Fg;if(d instanceof Gk){Nk(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if(typeof k==="function"){Uk(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ib=c,a.Z=b,a.parent_=null,Tk(a),b!=3||c instanceof Pk||Vk(a,c))}}
function Uk(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Tk(a){a.md||(a.md=!0,Bk(a.lf,a))}
function Rk(a){var b=null;a.Ya&&(b=a.Ya,a.Ya=b.next,b.next=null);a.Ya||(a.Cb=null);return b}
n.lf=function(){for(var a;a=Rk(this);)Sk(this,a,this.Z,this.ib);this.md=!1};
function Sk(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.Hc;a=a.parent_)a.Hc=!1;if(b.child)b.child.parent_=null,Wk(b,c,d);else try{b.j?b.i.call(b.context):Wk(b,c,d)}catch(e){Xk.call(null,e)}uk(Jk,b)}
function Wk(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Vk(a,b){a.Hc=!0;Bk(function(){a.Hc&&Xk.call(null,b)})}
var Xk=ed;function Pk(a){ib.call(this,a)}
ab(Pk,ib);Pk.prototype.name="cancel";function Yk(a,b){pk.call(this);this.j=a||1;this.h=b||D;this.o=Xa(this.Bg,this);this.u=Za()}
ab(Yk,pk);n=Yk.prototype;n.enabled=!1;n.Ga=null;n.setInterval=function(a){this.j=a;this.Ga&&this.enabled?(this.stop(),this.start()):this.Ga&&this.stop()};
n.Bg=function(){if(this.enabled){var a=Za()-this.u;a>0&&a<this.j*.8?this.Ga=this.h.setTimeout(this.o,this.j-a):(this.Ga&&(this.h.clearTimeout(this.Ga),this.Ga=null),qk(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
n.start=function(){this.enabled=!0;this.Ga||(this.Ga=this.h.setTimeout(this.o,this.j),this.u=Za())};
n.stop=function(){this.enabled=!1;this.Ga&&(this.h.clearTimeout(this.Ga),this.Ga=null)};
n.X=function(){Yk.Da.X.call(this);this.stop();delete this.h};function Zk(a){J.call(this);this.G=a;this.o=0;this.j=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Yk(this.flushInterval);this.h.listen("tick",this.bd,!1,this);Ac(this,this.h)}
v(Zk,J);n=Zk.prototype;n.sendIsolatedPayload=function(a){this.u=a;this.j=1};
function $k(a){a.h.enabled||a.h.start();a.o++;a.o>=a.j&&a.bd()}
n.bd=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);al(a);this.o=0;this.h.enabled&&this.h.stop()};
n.Ab=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Pj(a,b))};
n.hd=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Qj(a,b))};
function bl(a,b){return a.B.has(b)?void 0:a.i.get(b)}
n.xb=function(a){this.Je(a,1,C.apply(1,arguments))};
n.Je=function(a,b){var c=C.apply(2,arguments),d=bl(this,a);d&&d instanceof Pj&&(d.j(b,c),$k(this))};
n.record=function(a,b){var c=C.apply(2,arguments),d=bl(this,a);d&&d instanceof Qj&&(d.record(b,c),$k(this))};
function al(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function cl(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function dl(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;function el(a,b,c){c=c===void 0?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c;this.name="RpcError";Object.setPrototypeOf(this,this.constructor.prototype)}
v(el,Error);el.prototype.toString=function(){var a="RpcError("+(dl(this.code)||String(this.code))+")";this.message&&(a+=": "+this.message);return a};function fl(){}
fl.prototype.serialize=function(a){var b=[];gl(this,a,b);return b.join("")};
function gl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),gl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),hl(d,c),c.push(":"),gl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":hl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var il={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},jl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function hl(a,b){b.push('"',a.replace(jl,function(c){var d=il[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),il[c]=d);return d}),'"')}
;function kl(){pk.call(this);this.headers=new Map;this.h=!1;this.P=null;this.o=this.aa="";this.j=this.V=this.B=this.K=!1;this.G=0;this.u=null;this.oa="";this.ha=!1}
ab(kl,pk);var ll=/^https?$/i,ml=["POST","PUT"],nl=[];function ol(a,b,c,d,e,f,g){var h=new kl;nl.push(h);b&&h.listen("complete",b);lk(h,"ready",h.Ve);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
n=kl.prototype;n.Ve=function(){this.dispose();Yb(nl,this)};
n.send=function(a,b,c,d){if(this.P)throw Error("[goog.net.XhrIo] Object is active with another request="+this.aa+"; newUri="+a);b=b?b.toUpperCase():"GET";this.aa=a;this.o="";this.K=!1;this.h=!0;this.P=new XMLHttpRequest;this.P.onreadystatechange=sk(Xa(this.de,this));try{this.getStatus(),this.V=!0,this.P.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();pl(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Sb(ml,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.P.setRequestHeader(d,c);this.oa&&(this.P.responseType=this.oa);"withCredentials"in this.P&&this.P.withCredentials!==this.ha&&(this.P.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.Dg.bind(this),this.G)),
this.getStatus(),this.B=!0,this.P.send(a),this.B=!1}catch(g){this.getStatus(),pl(this,g)}};
n.Dg=function(){typeof La!="undefined"&&this.P&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),qk(this,"timeout"),this.abort(8))};
function pl(a,b){a.h=!1;a.P&&(a.j=!0,a.P.abort(),a.j=!1);a.o=b;ql(a);rl(a)}
function ql(a){a.K||(a.K=!0,qk(a,"complete"),qk(a,"error"))}
n.abort=function(){this.P&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.P.abort(),this.j=!1,qk(this,"complete"),qk(this,"abort"),rl(this))};
n.X=function(){this.P&&(this.h&&(this.h=!1,this.j=!0,this.P.abort(),this.j=!1),rl(this,!0));kl.Da.X.call(this)};
n.de=function(){this.I||(this.V||this.B||this.j?sl(this):this.Uf())};
n.Uf=function(){sl(this)};
function sl(a){if(a.h&&typeof La!="undefined")if(a.B&&(a.P?a.P.readyState:0)==4)setTimeout(a.de.bind(a),0);else if(qk(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(tl(a))qk(a,"complete"),qk(a,"success");else{try{var b=(a.P?a.P.readyState:0)>2?a.P.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";ql(a)}}finally{rl(a)}}}
function rl(a,b){if(a.P){a.u&&(clearTimeout(a.u),a.u=null);var c=a.P;a.P=null;b||qk(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
n.isActive=function(){return!!this.P};
n.isComplete=function(){return(this.P?this.P.readyState:0)==4};
function tl(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.aa).match(jc)[1]||null,!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!ll.test(a?a.toLowerCase():"");c=b}return c}
n.getStatus=function(){try{return(this.P?this.P.readyState:0)>2?this.P.status:-1}catch(a){return-1}};
n.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function ul(){}
ul.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
ol(a.url,function(d){d=d.target;if(tl(d)){try{var e=d.P?d.P.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Wc,a.timeoutMillis,a.withCredentials)};
ul.prototype.Gc=function(){return 1};function vl(a,b){this.logger=a;this.event=b;this.startTime=wl()}
vl.prototype.done=function(){this.logger.pb(this.event,wl()-this.startTime)};
function xl(){Qc.apply(this,arguments)}
v(xl,Qc);function yl(a,b,c){var d=wl();b=b();a.pb(c,wl()-d);return b}
function zl(){xl.apply(this,arguments)}
v(zl,xl);n=zl.prototype;n.jc=function(){};
n.Ka=function(){};
n.pb=function(){};
n.xa=function(){};
n.Ua=function(){};
n.Mc=function(){};
n.Kc=function(){};
n.Lc=function(){};
function Al(a){xl.call(this);var b=this;this.logger=a;this.addOnDisposeCallback(function(){return void b.logger.dispose()})}
v(Al,xl);n=Al.prototype;n.update=function(a){this.logger.dispose();this.logger=a};
n.Ka=function(a){this.logger.Ka(a)};
n.pb=function(a,b){this.logger.pb(a,b)};
n.xa=function(a){this.logger.xa(a)};
n.Ua=function(){this.logger.Ua()};
n.Mc=function(a){this.logger.Mc(a)};
n.Kc=function(a){this.logger.Kc(a)};
n.Lc=function(a){this.logger.Lc(a)};
n.jc=function(a){this.logger.jc(a)};
function Bl(a,b,c,d){a=Kj(Ij(Hj(new Gj(1828,"0"),a),new ul)).kd();b.length&&Jj(a,Rh(new Qh,b));d!==void 0&&(a.ab=d);var e=new Mj(1828,"","",!1,"",Lj(a));Ac(e,a);var f=new Zk({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.bd()}finally{e.dispose()}})});
f.j=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Cl(a,b){J.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(Cl,J);function Dl(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-wl());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=wl(),a.timer=void 0}},b)}}
function El(a,b){xl.call(this);this.metrics=a;this.ra=b}
v(El,xl);n=El.prototype;n.jc=function(a){this.metrics.xg.record(a,this.ra)};
n.Ka=function(a){this.metrics.eventCount.la(a,this.ra)};
n.pb=function(a,b){this.metrics.kf.record(b,a,this.ra)};
n.xa=function(a){this.metrics.errorCount.la(a,this.ra)};
n.Mc=function(a){this.metrics.Jg.la(a,this.ra)};
n.Kc=function(a){this.metrics.Se.la(a,this.ra)};
n.Lc=function(a){this.metrics.Ig.la(a,this.ra)};
function Fl(a,b){b=b===void 0?[]:b;var c={ra:a.ra||"_",nd:a.nd||[],sd:a.sd|0,ab:a.ab,Qc:a.Qc||function(){},
Sb:a.Sb||function(f,g){return Bl(f,g,c.Qc,c.ab)}},d=c.Sb("53",c.nd.concat(b));
El.call(this,{xg:new Tc(d),errorCount:new Xc(d),eventCount:new Vc(d),kf:new Wc(d),Lj:new Uc(d),Jg:new Yc(d),Se:new Zc(d),Ig:new $c(d)},c.ra);var e=this;this.options=c;this.service=d;this.j=!a.Sb;this.h=new Cl(function(){return void e.service.bd()},c.sd);
this.addOnDisposeCallback(function(){e.h.dispose();e.j&&e.service.dispose()});
b.slice().sort(ac)}
v(Fl,El);Fl.prototype.Ua=function(){Dl(this.h)};
function wl(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Gl(a){this.D=M(a)}
v(Gl,N);function Hl(a){this.D=M(a)}
v(Hl,N);function Il(a){this.D=M(a,0,"bfkj")}
v(Il,N);var Jl=function(a){return ye(function(b){return b instanceof a&&!se(b)})}(Il);
Il.Pf="bfkj";function Mc(a){this.D=M(a)}
v(Mc,N);function Kl(a){this.D=M(a)}
v(Kl,N);var Ll=Ph(Kl);function Ml(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Nl(a,b){if(a.disable)return new zl;b=b?Kc(b):[];a={ra:a.ra,nd:a.nf,sd:a.Qf,ab:a.ab,Qc:a.Qc,Sb:a.Sb};b=b===void 0?[]:b;return new Fl(a,b)}
function Ol(a){function b(x,z,w,H){Promise.resolve().then(function(){k.done();h.Ua();h.dispose();g.resolve({Ne:x,wg:z,Yf:w,Te:H})})}
function c(x,z,w,H){if(!d.logger.I){var F="k";z?F="h":w&&(F="u");F!=="k"?H!==0&&(d.logger.Ka(F),d.logger.pb(F,x)):d.j<=0?(d.logger.Ka(F),d.logger.pb(F,x),d.j=Math.floor(Math.random()*200)):d.j--}}
J.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.h=new Kl;if("challenge"in a&&Jl(a.challenge)){var e=wg(a.challenge,4,void 0,xe);var f=wg(a.challenge,5,void 0,xe);wg(a.challenge,7,void 0,xe)&&(this.h=Ll(wg(a.challenge,7,void 0,xe)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var x,z,w;return B(function(H){if(H.h==1)return H.yield(d.i,2);x=H.i;z=x.wg;(w=z)==null||w();H.h=0})});
this.logger=Nl(a.Mb||{},this.h);Ac(this,this.logger);var g=new Ml;this.i=g.promise;this.logger.Ka("t");var h=this.logger.share(),k=new vl(h,"t");if(!D[f])throw this.logger.xa(25),Error("EGOU");if(!D[f].a)throw this.logger.xa(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],p=Kc(this.h),r=0;r<p.length;r++)f.push(p[r]),m.push(1);var t=Oc(this.h);for(p=0;p<t.length;p++)f.push(t[p]),m.push(2);this.o=y(l(e,b,!0,a.Ae,c,[f,m],wg(this.h,5),!1)).next().value;this.Qb=g.promise.then(function(){})}catch(x){throw this.logger.xa(28),
x;
}}
v(Ol,J);n=Ol.prototype;n.snapshot=function(a){if(this.I)throw Error("Already disposed");this.logger.Ka("n");var b=this.logger.share();return this.i.then(function(c){var d=c.Ne;return new Promise(function(e){var f=new vl(b,"n");d(function(g){f.done();b.jc(g.length);b.Ua();b.dispose();e(g)},[a.Ia,
a.Zc,a.Ee,a.Ed])})})};
n.se=function(a){var b=this;if(this.I)throw Error("Already disposed");this.logger.Ka("n");var c=yl(this.logger,function(){return b.o([a.Ia,a.Zc,a.Ee,a.Ed])},"n");
this.logger.jc(c.length);this.logger.Ua();return c};
n.kc=function(a){this.i.then(function(b){var c;(c=b.Yf)==null||c(a)})};
n.Cc=function(a,b){return this.i.then(function(c){var d;return(d=c.Te)==null?void 0:d(a,b,!1)})};
n.sc=function(){return this.logger.share()};function Pl(a){if(!a)return null;a=Bf(cg(a,4,void 0,bg));return a===null||a===void 0?null:pb(a)}
;function Ql(){this.promises={};this.h=null}
function Rl(){Ql.instance||(Ql.instance=new Ql);return Ql.instance}
function Sl(a,b){return Tl(a,qg(b,Gl,1,xe),qg(b,Hl,2,xe),wg(b,3,void 0,xe))}
function Tl(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Ul(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Ul(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Ul(a,b){return b?Vl(b):a?Wl(a):Promise.resolve()}
function Vl(a){return new Promise(function(b,c){var d=Ti("SCRIPT"),e=Pl(a);Lb(d,e);d.onload=function(){Vi(d);b()};
d.onerror=function(){Vi(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Wl(a){return new Promise(function(b){var c=Ti("SCRIPT");if(a){var d=Bf(cg(a,6,void 0,bg));d=d===null||d===void 0?null:Ib(d)}else d=null;c.textContent=Jb(d);Kb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Vi(c);b()})}
;function Xl(a){this.D=M(a)}
v(Xl,N);function Yl(a,b){return lg(a,1,Af(b))}
function Zl(a,b){return lg(a,2,Af(b))}
;function $l(a){J.call(this);var b=this;this.options=a;this.B=new Ml;this.Qb=this.B.promise;this.u=new Ml;this.K=1;this.j=new Ml;this.o=[];this.isPaused=!1;this.Rc=a.Rc||function(){};
this.logger=new Al(Nl(a.Mb||{}));am(this,a.Oa,a.Af,a.Aj,a.Cj,Object.assign({},bm,a.Tb||{}));this.addOnDisposeCallback(function(){return void cm(b)})}
v($l,J);n=$l.prototype;n.snapshot=function(a){var b=this;return B(function(c){switch(c.h){case 1:if(b.I)throw Error("Already disposed");if(b.i||b.G){c.v(2);break}return c.yield(b.u.promise,2);case 2:if(!b.i){c.v(4);break}return c.yield(b.i.snapshot(a),5);case 5:return c.return(c.i);case 4:throw b.G;}})};
n.pause=function(){this.I||this.isPaused||(this.isPaused=!0,this.h&&this.h.pause())};
n.resume=function(){!this.I&&this.isPaused&&(this.isPaused=!1,this.h&&this.h.resume())};
n.checkForRefresh=function(){var a=this;return B(function(b){if(a.I)throw Error("Already disposed");var c;if(c=a.h)c=a.h,c.isExpired()?(dm(c),c.Xc(0),c=!0):c=!1,c=!c;return c?b.v(0):b.yield(a.j.promise,0)})};
function em(a){var b;return B(function(c){if(a.I)throw Error("Already disposed");(b=a.h)==null||fm(b);return c.yield(a.j.promise,0)})}
function cm(a){a.G=Error("Cancelled by dispose");a.u.resolve();Pc(a.B.promise);a.B.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(function(){var c;return B(function(d){(c=a.i)==null||c.dispose();a.i=void 0;d.h=0})});
a.o=[];var b;(b=a.h)==null||fm(b);Pc(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
n.kc=function(a){var b,c;(b=this.i)==null||(c=b.kc)==null||c.call(b,a)};
n.Cc=function(a,b){var c,d,e;return(e=(c=this.i)==null?void 0:(d=c.Cc)==null?void 0:d.call(c,a,b))!=null?e:Promise.resolve()};
function gm(a,b){var c=a.Rc;a.Rc=function(){c();b()}}
function hm(a,b){a.I||(a.i=b,a.logger.update(b.sc()),a.u.resolve(),a.B.resolve(void 0),a.Rc())}
n.handleError=function(a){if(!this.I){this.G=a;this.u.resolve();var b,c;(c=(b=this.options).Pc)==null||c.call(b,a)}};
function im(a,b){b&&(Promise.all(a.o).then(function(){return void b.dispose()}),a.o=[])}
function jm(a,b){a.K=b;var c,d;(d=(c=a.options).tj)==null||d.call(c,b)}
function km(a){a.I||(a.j.resolve(),a.j=new Ml)}
function am(a,b,c,d,e,f){d=d===void 0?Rl():d;e=e===void 0?Promise.resolve(void 0):e;var g,h,k,l,m,p,r,t,x,z,w,H;B(function(F){switch(F.h){case 1:return F.yield(0,3);case 3:h=null;if(!g){F.v(6);break}jm(a,7);wa(F,7);return F.yield(lm(g.snapshot({}),f.Ye,function(){return Promise.resolve("E:CTO")}),9);
case 9:h=F.i;xa(F,6);break;case 7:ya(F),h="E:UCE";case 6:k=void 0,l=g?f.ff:f.gf,m=new sj(l,f.hf,f.jf,f.ef),p=1;case 10:if(!(p<=f.maxAttempts)){F.v(12);break}if(p===1){F.v(13);break}jm(a,0);a.h=new mm(m.getValue(),f.dd,f.xe);return F.yield(a.h.promise,14);case 14:r=F.i,a.h=void 0,r===1?(p=1,m.reset()):tj(m);case 13:wa(F,15);t=void 0;if(c){t=c;F.v(17);break}jm(a,5);x=d.h;return F.yield(lm(nm(b,x,h),f.rf,function(){return Promise.reject(Error("RGF:Fetch timed out"))}),18);
case 18:t=F.i;case 17:return jm(a,3),F.yield(lm(Sl(d,t),f.Kf,function(){return Promise.reject(Error("DTZ:Script timed out"))}),19);
case 19:return jm(a,8),F.yield(e,20);case 20:return z=new Ol({challenge:t,Mb:a.options.Mb,Ae:a.options.Ae}),F.yield(lm(z.Qb,f.vg,function(){return Promise.reject(Error("QEG:Setup timed out"))}),21);
case 21:k=z;F.v(12);break;case 15:w=ya(F),a.handleError(w),km(a);case 11:p++;F.v(10);break;case 12:if(a.I){F.v(5);break}k&&(c=void 0,im(a,g),g=k,hm(a,k),km(a));jm(a,2);a.h=new mm(f.ke,f.dd,f.xe);a.isPaused&&a.h.pause();return F.yield(a.h.promise,22);case 22:a.h=void 0;if(a.I){F.v(5);break}F.v(3);break;case 5:(H=g)==null||H.dispose(),F.h=0}})}
n.sc=function(){return this.logger.share()};
var bm={ke:432E5,dd:3E5,xe:10,Ye:1E4,rf:3E4,Kf:3E4,vg:6E4,gf:1E3,ff:6E4,hf:6E5,jf:.25,ef:2,maxAttempts:10};function lm(a,b,c){var d,e=new Promise(function(f){d=setTimeout(f,b)});
return Promise.race([a.finally(function(){return void clearTimeout(d)}),
e.then(c)])}
function mm(a,b,c){var d=this;this.endTimeMs=0;this.h=null;this.isPaused=!1;this.tick=function(){if(!d.isPaused){var e=d.endTimeMs-Date.now();e<=d.i?(d.h=null,d.Xc(0)):d.h=setTimeout(d.tick,Math.min(e,d.dd))}};
this.dd=b;this.i=c;this.promise=new Promise(function(e){d.Xc=e});
om(this,a)}
function om(a,b){a.endTimeMs=Date.now()+b;a.tick()}
mm.prototype.pause=function(){this.isPaused||(this.isPaused=!0,dm(this))};
mm.prototype.resume=function(){this.isPaused&&(this.isPaused=!1,this.tick())};
function fm(a){dm(a);a.endTimeMs=0;a.isPaused=!1;a.Xc(1)}
function dm(a){a.h&&(clearTimeout(a.h),a.h=null)}
mm.prototype.isExpired=function(){return Date.now()>this.endTimeMs};function pm(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
var qm,rm=(qm=Math.imul)!=null?qm:function(a,b){return a*b|0};
function sm(a,b,c,d){b=b===void 0?0:b;c=c===void 0?a.length:c;var e=0;for(d&&(e=sm(d));b<c;b++)d=typeof a==="string"?a.charCodeAt(b):a[b],e=rm(31,e)+d|0;return e}
function tm(a,b){return[sm(a,0,a.length>>1,b),sm(a,a.length>>1)]}
var um=[196,200,224,18];function wm(a){var b=y(tm(a,um));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)}
function xm(a,b){var c=tm(b);a=new Uint32Array(a.buffer);b=a[0];var d=y(c);c=d.next().value;d=d.next().value;for(var e=1;e<a.length;e+=2){for(var f=b,g=e,h=c,k=d,l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[e]^=f[0];e+1<a.length&&(a[e+1]^=f[1])}}
function ym(a,b,c,d,e){var f=(4-(um.length+c.length)%4)%4,g=new Uint8Array(4+f+um.length+4+c.length),h=new DataView(g.buffer),k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(um,k);k+=um.length;h.setUint32(k,e);g.set(c,k+4);xm(g,d);return a.ma(b,function(l){return void globalThis.sessionStorage.removeItem(l)})?pm(b,Fd(g))?"s":"t":"i"}
function zm(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];try{var d=Hd(c);xm(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<um.length;c++)if(d[b++]!==um[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function Am(a,b,c){c=c===void 0?[]:c;this.maxItems=a;this.h=b===void 0?0:b;this.i=c}
function Bm(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new Am(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Am(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new Am(a)):new Am(a,c,b)}
Am.prototype.serialize=function(){return String(this.h)+","+this.i.join()};
Am.prototype.ma=function(a,b){var c=void 0;if(this.i[this.h]!==a){var d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=pm("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a};
function Hc(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=Bm(a))}
function Cm(a,b,c,d,e){var f=a.index?yl(a.logger,function(){return ym(a.index,wm(b),c,d,e)},"W"):"u";
a.logger.Lc(f)}
function Dm(a,b,c){var d=y(a.index?yl(a.logger,function(){return zm(wm(b),c)},"R"):["u"]),e=d.next().value;
d=d.next().value;a.logger.Kc(e);return d}
;var Em={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Fm(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Gm(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=Hm(a,h),d+=Hm(a,h+4),e+=Hm(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Em.toString(e)}
function Gm(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Hm(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Im(a){J.call(this);this.logger=a;this.j=new Ml}
v(Im,J);function Jm(a,b){var c=setTimeout(function(){a.j.resolve()},b);
a.addOnDisposeCallback(function(){return void clearTimeout(c)})}
Im.prototype.Oc=function(a,b){var c=this.gb(a);b==null||b(c);return yl(this.logger,function(){return Fd(c,2)},this.i)};
function Km(a,b,c,d){return yl(a.logger,function(){return c?a.Oc(b,d):a.gb(b,d)},a.h)}
function Lm(a,b,c,d){Im.call(this,a);this.o=b;this.B=c;this.h="m";this.i="x";this.u=0;Jm(this,d)}
v(Lm,Im);Lm.prototype.gb=function(a,b){var c=this;this.logger.Ka(this.h);++this.u>=this.B&&this.j.resolve();var d=a();a=yl(this.logger,function(){return c.o(d)},"C");
if(a===void 0)throw new I(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new I(18,"ODM:Invalid");b==null||b(a);return a};
function Mm(a,b,c){Im.call(this,a);this.o=b;this.h="f";this.i="z";Jm(this,c)}
v(Mm,Im);Mm.prototype.gb=function(){return this.o};
function Nm(a,b,c){Im.call(this,a);this.o=b;this.h="w";this.i="z";Jm(this,c)}
v(Nm,Im);Nm.prototype.gb=function(){var a=this;return yl(this.logger,function(){return Hd(a.o)},"d")};
Nm.prototype.Oc=function(){return this.o};
function Om(a,b){Im.call(this,a);this.error=b;this.h="e";this.i="y"}
v(Om,Im);function Pm(a,b){var c=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);b=c.length+1;c=Qm(c);var d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
Om.prototype.gb=function(){if(this.o)return this.o;this.o=Pm(this,function(a){return"_"+Fm(a)});
return Pm(this,function(a){return a})};
function Rm(a,b,c){Im.call(this,a);this.o=b;this.clientState=c;this.h="S";this.i="q"}
v(Rm,Im);Rm.prototype.gb=function(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([this.o&255,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);for(var d=b=b.length;d<c.length;++d)c[d]^=c[d%b];this.logger.Mc(this.clientState);return a};
function Qm(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):fd(a)}
;var Sm={sf:3E4,yg:2E4};function Tm(a){J.call(this);var b=this;this.Pb=new Ml;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Oa=a.Oa;this.Tb=Object.assign({},Sm,a.Tb||{});this.logger=a.vm.sc();var c;this.onError=(c=a.onError)!=null?c:function(){};
this.Jd=a.Jd||!1;if(Um(a)){var d=this.vm;this.o=function(){return em(d).catch(function(g){g=Ic(b,new I(b.h?20:32,"TRG:Disposed",g));b.i=g;var h;(h=b.h)==null||h.dispose();b.h=void 0;b.Pb.reject(g)})};
gm(d,function(){return void Vm(b)});
d.K===2&&Vm(this)}else this.o=a.sj,Vm(this);var e=this.logger.share();e.Ka("o");var f=new vl(e,"o");this.Pb.promise.then(function(){f.done();e.Ua();e.dispose()},function(){return void e.dispose()});
this.addOnDisposeCallback(function(){b.h?(b.h.dispose(),b.h=void 0):b.i?b.logger.Ua():(b.i=Ic(b,new I(32,"TNP:Disposed")),b.logger.Ua(),b.Pb.reject(b.i))});
Ac(this,this.logger)}
v(Tm,J);function Wm(a,b){if(!(b instanceof I))if(b instanceof el){var c=Error(b.toString());c.stack=b.stack;b=new I(11,"EBH:Error",c)}else b=new I(12,"BSO:Unknown",b);return Ic(a,b)}
function Vm(a){var b,c,d,e,f,g,h,k,l,m,p,r,t,x,z;return B(function(w){switch(w.h){case 1:b=void 0;a.j++;c=new Ml;a.vm instanceof $l&&a.vm.o.push(c.promise);if(!a.Jd){w.v(2);break}d=new Ml;setTimeout(function(){return void d.resolve()});
return w.yield(d.promise,2);case 2:return e=a.logger.share(),wa(w,4,5),a.state=5,f={},g=[],w.yield(lm(a.vm.snapshot({Ia:f,Ee:g}),a.Tb.yg,function(){return Promise.reject(new I(15,"MDA:Timeout"))}),7);
case 7:h=w.i;if(a.I)throw new I(a.h?20:32,"MDA:Disposed");k=g[0];a.state=6;return w.yield(lm(Xm(a.Oa,h),a.Tb.sf,function(){return Promise.reject(new I(10,"BWB:Timeout"))}),8);
case 8:l=w.i;if(a.I)throw new I(a.h?20:32,"BWB:Disposed");a.state=7;b=yl(e,function(){var F=Ym(a,l,c,k);F.j.promise.then(function(){return void a.o()});
return F},"i");
case 5:za(w);e.dispose();Aa(w,6);break;case 4:m=ya(w);(p=b)==null||p.dispose();if(!a.i){r=Wm(a,m);c.resolve();var H;if(H=a.vm instanceof $l&&a.j<2)a:if(m instanceof I)H=m.code!==32&&m.code!==20&&m.code!==10;else{if(m instanceof el)switch(m.code){case 2:case 13:case 14:case 4:break;default:H=!1;break a}H=!0}if(H)return t=(1+Math.random()*.25)*(a.h?6E4:1E3),x=setTimeout(function(){return void a.o()},t),a.addOnDisposeCallback(function(){return void clearTimeout(x)}),w.return();
a.i=r}e.xa(a.h?13:14);a.Pb.reject(a.i);return w.return();case 6:a.state=8,a.j=0,(z=a.h)==null||z.dispose(),a.h=b,a.Pb.resolve(),w.h=0}})}
function Ym(a,b,c,d){var e=ug(b,2)*1E3;if(e<=0)throw new I(31,"TTM:Invalid");if(wg(b,4))return new Nm(a.logger,wg(b,4),e);if(!ug(b,3))return new Mm(a.logger,Ud(ig(b)),e);if(!d)throw new I(4,"PMD:Undefined");d=d(Ud(ig(b)));if(typeof d!=="function")throw new I(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new Lm(a.logger,d,ug(b,3),e);a.addOnDisposeCallback(function(){return void c.resolve()});
return a}
Tm.prototype.gb=function(a){return Zm(this,Object.assign({},a),!1)};
Tm.prototype.Oc=function(a){return Zm(this,Object.assign({},a),!0)};
function Ic(a,b){a.logger.xa(b.code);a.onError(b);return b}
function $m(a,b){b=b instanceof I?b:new I(5,"TVD:error",b);return Ic(a,b)}
function Zm(a,b,c){try{if(a.I)throw new I(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;var d,e;return(e=(d=an(a,b,c))!=null?d:bn(a,b,c))!=null?e:cn(a,b,c)}catch(f){if(!b.Sf)throw $m(a,f);return dn(a,c,f)}}
function an(a,b,c){var d;return(d=a.h)==null?void 0:Km(d,function(){return en(a,b)},c,function(e){var f;
if(a.h instanceof Lm&&((f=b.zc)==null?0:f.zg))try{var g;(g=a.cache)==null||Cm(g,en(a,b),e,b.zc.Od,a.u-120)}catch(h){Ic(a,new I(24,"ELX:write",h))}})}
function bn(a,b,c){var d;if((d=b.zc)!=null&&d.Pe)try{var e,f=(e=a.cache)==null?void 0:Dm(e,en(a,b),b.zc.Od);return f?c?yl(a.logger,function(){return Fd(f,2)},"a"):f:void 0}catch(g){Ic(a,new I(23,"RXO:read",g))}}
function cn(a,b,c){var d={stack:[],error:void 0,nb:!1};try{if(!b.Rf)throw new I(29,"SDF:notready");return Km(fb(d,new Rm(a.logger,0,a.state)),function(){return en(a,b)},c)}catch(e){d.error=e,d.nb=!0}finally{gb(d)}}
function dn(a,b,c){var d={stack:[],error:void 0,nb:!1};try{var e=$m(a,c);return Km(fb(d,new Om(a.logger,e)),function(){return[]},b)}catch(f){d.error=f,d.nb=!0}finally{gb(d)}}
function en(a,b){return b.ld?b.ld:b.Ia?yl(a.logger,function(){return b.ld=Qm(b.Ia)},"c"):[]}
var Um=function(a){return ye(function(b){if(!Fe(b))return!1;for(var c=y(Object.entries(a)),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;if(!(d in b)){if(e.ij===!0)continue;return!1}if(!e(b[d]))return!1}return!0})}({vm:function(a){return ye(function(b){return b instanceof a})}($l)},"");function fn(){if(!gn){gn=new Zk(new hn);var a=O("client_streamz_web_flush_count",-1);a!==-1&&(gn.j=a)}this.h=a=gn;a.Ab("/client_streamz/youtube/aba/gac",Rc("type"),Rc("sequence"))}
fn.prototype.la=function(a,b){this.h.xb("/client_streamz/youtube/aba/gac",a,b)};var jn=window;function kn(a){var b=ln;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function mn(){var a=[];kn(function(b){a.push(b)});
return a}
;var ln={Kg:"allow-forms",Lg:"allow-modals",Mg:"allow-orientation-lock",Ng:"allow-pointer-lock",Og:"allow-popups",Pg:"allow-popups-to-escape-sandbox",Qg:"allow-presentation",Rg:"allow-same-origin",Sg:"allow-scripts",Tg:"allow-top-navigation",Ug:"allow-top-navigation-by-user-activation"},nn=Fk(function(){return mn()});
function on(){var a=pn(),b={};Tb(nn(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function pn(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function qn(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var rn=(new Date).getTime();function sn(a){this.D=M(a)}
v(sn,N);var tn=Ph(sn);function un(a){pk.call(this);var b=this;this.B=this.j=0;this.Fa=a!=null?a:{sa:function(e,f){return setTimeout(e,f)},
ta:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(vn(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||wn(this)}
v(un,pk);function xn(){var a=yn;un.instance||(un.instance=new un(a));return un.instance}
un.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Fa.ta(this.B);delete un.instance};
un.prototype.wa=function(){return this.h};
function wn(a){a.B=a.Fa.sa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.v(3):c.yield(vn(a),3):c.yield(vn(a),3);wn(a);c.h=0})},3E4)}
function vn(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.Fa.sa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.u=void 0;a.j&&(a.Fa.ta(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?qk(a,"networkstatus-online"):qk(a,"networkstatus-offline"));c(g);Aa(h,0);break;case 2:ya(h),g=!1,h.v(3)}})})}
;function zn(){this.data=[];this.h=-1}
zn.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
zn.prototype.get=function(a){return!!this.data[a]};
function An(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Bn(){this.blockSize=-1}
;function Cn(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
ab(Cn,Bn);Cn.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Dn(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Cn.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Dn(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Dn(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Dn(this,e);f=0;break}}this.i=f;this.o+=b}};
Cn.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Dn(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function En(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Fn(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Gn(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:En(a).match(/\S+/g)||[],b=Sb(a,b)>=0);return b}
function Hn(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Gn(a,"inverted-hdpi")&&Fn(a,Array.prototype.filter.call(a.classList?a.classList:En(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function In(){}
In.prototype.next=function(){return Jn};
var Jn={done:!0,value:void 0};In.prototype.zb=function(){return this};function Kn(a){if(a instanceof Ln||a instanceof Mn||a instanceof Nn)return a;if(typeof a.next=="function")return new Ln(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Ln(function(){return a[Symbol.iterator]()});
if(typeof a.zb=="function")return new Ln(function(){return a.zb()});
throw Error("Not an iterator or iterable.");}
function Ln(a){this.h=a}
Ln.prototype.zb=function(){return new Mn(this.h())};
Ln.prototype[Symbol.iterator]=function(){return new Nn(this.h())};
Ln.prototype.i=function(){return new Nn(this.h())};
function Mn(a){this.h=a}
v(Mn,In);Mn.prototype.next=function(){return this.h.next()};
Mn.prototype[Symbol.iterator]=function(){return new Nn(this.h)};
Mn.prototype.i=function(){return new Nn(this.h)};
function Nn(a){Ln.call(this,function(){return a});
this.j=a}
v(Nn,Ln);Nn.prototype.next=function(){return this.j.next()};function On(a){J.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
ab(On,J);n=On.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
n.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.wc(a)}return!1};
n.wc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Yb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.yb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],Pn(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.I;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.wc(c)}}return f!=0}return!1};
function Pn(a,b,c){Bk(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.wc,this),delete this.i[a])}else this.h.length=0,this.i={}};
n.X=function(){On.Da.X.call(this);this.clear();this.j.length=0};function Qn(a){this.h=a}
Qn.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new fl).serialize(b))};
Qn.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qn.prototype.remove=function(a){this.h.remove(a)};function Rn(a){this.h=a}
ab(Rn,Qn);function Sn(a){this.data=a}
function Tn(a){return a===void 0||a instanceof Sn?a:new Sn(a)}
Rn.prototype.set=function(a,b){Rn.Da.set.call(this,a,Tn(b))};
Rn.prototype.i=function(a){a=Rn.Da.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rn.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Un(a){this.h=a}
ab(Un,Rn);Un.prototype.set=function(a,b,c){if(b=Tn(b)){if(c){if(c<Za()){Un.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Un.Da.set.call(this,a,b)};
Un.prototype.i=function(a){var b=Un.Da.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Un.prototype.remove.call(this,a);else return b}};function Vn(){}
;function Wn(){}
ab(Wn,Vn);Wn.prototype[Symbol.iterator]=function(){return Kn(this.zb(!0)).i()};
Wn.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xn(a){this.h=a;this.i=null}
ab(Xn,Wn);n=Xn.prototype;n.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
n.set=function(a,b){Yn(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){Yn(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){Yn(this);this.h.removeItem(a)};
n.zb=function(a){Yn(this);var b=0,c=this.h,d=new In;d.next=function(){if(b>=c.length)return Jn;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){Yn(this);this.h.clear()};
n.key=function(a){Yn(this);return this.h.key(a)};
function Yn(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||ed(Error("Storage mechanism: Storage unavailable"))}
;function Zn(){var a=null;try{a=D.localStorage||null}catch(b){}Xn.call(this,a)}
ab(Zn,Xn);function $n(a,b){this.i=a;this.h=b+"::"}
ab($n,Wn);$n.prototype.set=function(a,b){this.i.set(this.h+a,b)};
$n.prototype.get=function(a){return this.i.get(this.h+a)};
$n.prototype.remove=function(a){this.i.remove(this.h+a)};
$n.prototype.zb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new In;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function ao(a){if(a.bb&&typeof a.bb=="function")return a.bb();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(Oa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Fi(a)}
function bo(a){if(a.ec&&typeof a.ec=="function")return a.ec();if(!a.bb||typeof a.bb!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(Oa(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function co(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(Oa(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=bo(a),e=ao(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function eo(a){this.i=this.B=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof eo?(this.o=a.o,fo(this,a.j),this.B=a.B,this.i=a.i,go(this,a.G),this.h=a.h,ho(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(jc))?(this.o=!1,fo(this,b[1]||"",!0),this.B=io(b[2]||""),this.i=io(b[3]||"",!0),go(this,b[4]),this.h=io(b[5]||"",!0),ho(this,b[6]||"",!0),this.u=io(b[7]||"")):(this.o=!1,this.H=new jo(null,this.o))}
eo.prototype.toString=function(){var a=[],b=this.j;b&&a.push(ko(b,lo,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.B)&&a.push(ko(b,lo,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(ko(c,c.charAt(0)=="/"?mo:no,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",ko(c,oo));return a.join("")};
eo.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?fo(b,a.j):c=!!a.B;c?b.B=a.B:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)go(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?ho(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
eo.prototype.clone=function(){return new eo(this)};
function fo(a,b,c){a.j=c?io(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function go(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function ho(a,b,c){b instanceof jo?(a.H=b,po(a.H,a.o)):(c||(b=ko(b,qo)),a.H=new jo(b,a.o))}
function io(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ko(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,ro),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function ro(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var lo=/[#\/\?@]/g,no=/[#\?:]/g,mo=/[#\?]/g,qo=/[#\?@]/g,oo=/#/g;function jo(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function so(a){a.h||(a.h=new Map,a.i=0,a.j&&pc(a.j,function(b,c){a.add(hc(b),c)}))}
n=jo.prototype;n.add=function(a,b){so(this);this.j=null;a=to(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
n.remove=function(a){so(this);a=to(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
n.clear=function(){this.h=this.j=null;this.i=0};
function uo(a,b){so(a);b=to(a,b);return a.h.has(b)}
n.forEach=function(a,b){so(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
n.ec=function(){so(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
n.bb=function(a){so(this);var b=[];if(typeof a==="string")uo(this,a)&&(b=b.concat(this.h.get(to(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
n.set=function(a,b){so(this);this.j=null;a=to(this,a);uo(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
n.get=function(a,b){if(!a)return b;a=this.bb(a);return a.length>0?String(a[0]):b};
n.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.bb(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
n.clone=function(){var a=new jo;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function to(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function po(a,b){b&&!a.o&&(so(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(to(this,e),Zb(c)),this.i=this.i+c.length))},a));
a.o=b}
n.extend=function(a){for(var b=0;b<arguments.length;b++)co(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},vo=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Dd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var wo={Bb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},xo={Bb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){return[].concat.apply([],a)}};
P.ug=function(){vo?(P.wb=Uint8Array,P.Ma=Uint16Array,P.Ie=Int32Array,P.assign(P,wo)):(P.wb=Array,P.Ma=Array,P.Ie=Array,P.assign(P,xo))};
P.ug();var yo=!0;try{new Uint8Array(1)}catch(a){yo=!1}
function zo(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new P.wb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Ao={};Ao=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Bo={},Co,Do=[],Eo=0;Eo<256;Eo++){Co=Eo;for(var Fo=0;Fo<8;Fo++)Co=Co&1?3988292384^Co>>>1:Co>>>1;Do[Eo]=Co}Bo=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Do[(a^b[d])&255];return a^-1};var Go={};Go={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ho(a){for(var b=a.length;--b>=0;)a[b]=0}
var Io=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Jo=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ko=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Lo=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Mo=Array(576);Ho(Mo);var No=Array(60);Ho(No);var Oo=Array(512);Ho(Oo);var Po=Array(256);Ho(Po);var Qo=Array(29);Ho(Qo);var Ro=Array(30);Ho(Ro);function So(a,b,c,d,e){this.te=a;this.qf=b;this.pf=c;this.bf=d;this.Of=e;this.Vd=a&&a.length}
var To,Uo,Vo;function Wo(a,b){this.Rd=a;this.Lb=0;this.jb=b}
function Xo(a,b){a.da[a.pending++]=b&255;a.da[a.pending++]=b>>>8&255}
function Yo(a,b,c){a.ia>16-c?(a.qa|=b<<a.ia&65535,Xo(a,a.qa),a.qa=b>>16-a.ia,a.ia+=c-16):(a.qa|=b<<a.ia&65535,a.ia+=c)}
function Zo(a,b,c){Yo(a,c[b*2],c[b*2+1])}
function $o(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function ap(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=$o(d[e]++,e))}
function bp(a){var b;for(b=0;b<286;b++)a.va[b*2]=0;for(b=0;b<30;b++)a.mb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.va[512]=1;a.Ta=a.Rb=0;a.Ba=a.matches=0}
function cp(a){a.ia>8?Xo(a,a.qa):a.ia>0&&(a.da[a.pending++]=a.qa);a.qa=0;a.ia=0}
function dp(a,b,c){cp(a);Xo(a,c);Xo(a,~c);P.Bb(a.da,a.window,b,c,a.pending);a.pending+=c}
function ep(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function fp(a,b,c){for(var d=a.ea[c],e=c<<1;e<=a.Ra;){e<a.Ra&&ep(b,a.ea[e+1],a.ea[e],a.depth)&&e++;if(ep(b,d,a.ea[e],a.depth))break;a.ea[c]=a.ea[e];c=e;e<<=1}a.ea[c]=d}
function gp(a,b,c){var d=0;if(a.Ba!==0){do{var e=a.da[a.Zb+d*2]<<8|a.da[a.Zb+d*2+1];var f=a.da[a.rd+d];d++;if(e===0)Zo(a,f,b);else{var g=Po[f];Zo(a,g+256+1,b);var h=Io[g];h!==0&&(f-=Qo[g],Yo(a,f,h));e--;g=e<256?Oo[e]:Oo[256+(e>>>7)];Zo(a,g,c);h=Jo[g];h!==0&&(e-=Ro[g],Yo(a,e,h))}}while(d<a.Ba)}Zo(a,256,b)}
function hp(a,b){var c=b.Rd,d=b.jb.te,e=b.jb.Vd,f=b.jb.bf,g,h=-1;a.Ra=0;a.Hb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ea[++a.Ra]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ra<2;){var k=a.ea[++a.Ra]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ta--;e&&(a.Rb-=d[k*2+1])}b.Lb=h;for(g=a.Ra>>1;g>=1;g--)fp(a,c,g);k=f;do g=a.ea[1],a.ea[1]=a.ea[a.Ra--],fp(a,c,1),d=a.ea[1],a.ea[--a.Hb]=g,a.ea[--a.Hb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ea[1]=k++,fp(a,c,1);while(a.Ra>=
2);a.ea[--a.Hb]=a.ea[1];g=b.Rd;k=b.Lb;d=b.jb.te;e=b.jb.Vd;f=b.jb.qf;var l=b.jb.pf,m=b.jb.Of,p,r=0;for(p=0;p<=15;p++)a.Na[p]=0;g[a.ea[a.Hb]*2+1]=0;for(b=a.Hb+1;b<573;b++){var t=a.ea[b];p=g[g[t*2+1]*2+1]+1;p>m&&(p=m,r++);g[t*2+1]=p;if(!(t>k)){a.Na[p]++;var x=0;t>=l&&(x=f[t-l]);var z=g[t*2];a.Ta+=z*(p+x);e&&(a.Rb+=z*(d[t*2+1]+x))}}if(r!==0){do{for(p=m-1;a.Na[p]===0;)p--;a.Na[p]--;a.Na[p+1]+=2;a.Na[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(t=a.Na[p];t!==0;)d=a.ea[--b],d>k||(g[d*2+1]!==p&&(a.Ta+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),t--)}ap(c,h,a.Na)}
function ip(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function jp(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Zo(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Zo(a,l,a.ja),g--),Zo(a,16,a.ja),Yo(a,g-3,2)):g<=10?(Zo(a,17,a.ja),Yo(a,g-3,3)):(Zo(a,18,a.ja),Yo(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function kp(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.va[c*2]!==0)return 0;if(a.va[18]!==0||a.va[20]!==0||a.va[26]!==0)return 1;for(c=32;c<256;c++)if(a.va[c*2]!==0)return 1;return 0}
var lp=!1;function mp(a,b,c){a.da[a.Zb+a.Ba*2]=b>>>8&255;a.da[a.Zb+a.Ba*2+1]=b&255;a.da[a.rd+a.Ba]=c&255;a.Ba++;b===0?a.va[c*2]++:(a.matches++,b--,a.va[(Po[c]+256+1)*2]++,a.mb[(b<256?Oo[b]:Oo[256+(b>>>7)])*2]++);return a.Ba===a.hc-1}
;function np(a,b){a.msg=Go[b];return b}
function op(a){for(var b=a.length;--b>=0;)a[b]=0}
function pp(a){var b=a.state,c=b.pending;c>a.T&&(c=a.T);c!==0&&(P.Bb(a.output,b.da,b.lc,c,a.Nb),a.Nb+=c,b.lc+=c,a.Fd+=c,a.T-=c,b.pending-=c,b.pending===0&&(b.lc=0))}
function qp(a,b){var c=a.ya>=0?a.ya:-1,d=a.A-a.ya,e=0;if(a.level>0){a.R.jd===2&&(a.R.jd=kp(a));hp(a,a.Jc);hp(a,a.Ec);ip(a,a.va,a.Jc.Lb);ip(a,a.mb,a.Ec.Lb);hp(a,a.Nd);for(e=18;e>=3&&a.ja[Lo[e]*2+1]===0;e--);a.Ta+=3*(e+1)+5+5+4;var f=a.Ta+3+7>>>3;var g=a.Rb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Yo(a,b?1:0,3),dp(a,c,d);else if(a.strategy===4||g===f)Yo(a,2+(b?1:0),3),gp(a,Mo,No);else{Yo(a,4+(b?1:0),3);c=a.Jc.Lb+1;d=a.Ec.Lb+1;e+=1;Yo(a,c-257,5);Yo(a,d-1,5);Yo(a,e-4,4);for(f=0;f<e;f++)Yo(a,
a.ja[Lo[f]*2+1],3);jp(a,a.va,c-1);jp(a,a.mb,d-1);gp(a,a.va,a.mb)}bp(a);b&&cp(a);a.ya=a.A;pp(a.R)}
function R(a,b){a.da[a.pending++]=b}
function rp(a,b){a.da[a.pending++]=b>>>8&255;a.da[a.pending++]=b&255}
function sp(a,b){var c=a.Zd,d=a.A,e=a.za,f=a.ce,g=a.A>a.na-262?a.A-(a.na-262):0,h=a.window,k=a.kb,l=a.La,m=a.A+258,p=h[d+e-1],r=h[d+e];a.za>=a.Ud&&(c>>=2);f>a.F&&(f=a.F);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Kb=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.F?e:a.F}
function tp(a){var b=a.na,c;do{var d=a.Ge-a.F-a.A;if(a.A>=b+(b-262)){P.Bb(a.window,a.window,b,b,0);a.Kb-=b;a.A-=b;a.ya-=b;var e=c=a.Ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.La[--e],a.La[e]=f>=b?f-b:0;while(--c);d+=b}if(a.R.pa===0)break;e=a.R;c=a.window;f=a.A+a.F;var g=e.pa;g>d&&(g=d);g===0?c=0:(e.pa-=g,P.Bb(c,e.input,e.sb,g,f),e.state.wrap===1?e.M=Ao(e.M,c,g,f):e.state.wrap===2&&(e.M=Bo(e.M,c,g,f)),e.sb+=g,e.ub+=g,c=g);a.F+=c;if(a.F+a.ma>=3)for(d=a.A-a.ma,a.S=a.window[d],
a.S=(a.S<<a.Qa^a.window[d+1])&a.Pa;a.ma&&!(a.S=(a.S<<a.Qa^a.window[d+3-1])&a.Pa,a.La[d&a.kb]=a.head[a.S],a.head[a.S]=d,d++,a.ma--,a.F+a.ma<3););}while(a.F<262&&a.R.pa!==0)}
function up(a,b){for(var c;;){if(a.F<262){tp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.S=(a.S<<a.Qa^a.window[a.A+3-1])&a.Pa,c=a.La[a.A&a.kb]=a.head[a.S],a.head[a.S]=a.A);c!==0&&a.A-c<=a.na-262&&(a.U=sp(a,c));if(a.U>=3)if(c=mp(a,a.A-a.Kb,a.U-3),a.F-=a.U,a.U<=a.td&&a.F>=3){a.U--;do a.A++,a.S=(a.S<<a.Qa^a.window[a.A+3-1])&a.Pa,a.La[a.A&a.kb]=a.head[a.S],a.head[a.S]=a.A;while(--a.U!==0);a.A++}else a.A+=a.U,a.U=0,a.S=a.window[a.A],a.S=(a.S<<a.Qa^a.window[a.A+1])&a.Pa;else c=mp(a,0,
a.window[a.A]),a.F--,a.A++;if(c&&(qp(a,!1),a.R.T===0))return 1}a.ma=a.A<2?a.A:2;return b===4?(qp(a,!0),a.R.T===0?3:4):a.Ba&&(qp(a,!1),a.R.T===0)?1:2}
function vp(a,b){for(var c,d;;){if(a.F<262){tp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.S=(a.S<<a.Qa^a.window[a.A+3-1])&a.Pa,c=a.La[a.A&a.kb]=a.head[a.S],a.head[a.S]=a.A);a.za=a.U;a.ge=a.Kb;a.U=2;c!==0&&a.za<a.td&&a.A-c<=a.na-262&&(a.U=sp(a,c),a.U<=5&&(a.strategy===1||a.U===3&&a.A-a.Kb>4096)&&(a.U=2));if(a.za>=3&&a.U<=a.za){d=a.A+a.F-3;c=mp(a,a.A-1-a.ge,a.za-3);a.F-=a.za-1;a.za-=2;do++a.A<=d&&(a.S=(a.S<<a.Qa^a.window[a.A+3-1])&a.Pa,a.La[a.A&a.kb]=a.head[a.S],a.head[a.S]=a.A);
while(--a.za!==0);a.qb=0;a.U=2;a.A++;if(c&&(qp(a,!1),a.R.T===0))return 1}else if(a.qb){if((c=mp(a,0,a.window[a.A-1]))&&qp(a,!1),a.A++,a.F--,a.R.T===0)return 1}else a.qb=1,a.A++,a.F--}a.qb&&(mp(a,0,a.window[a.A-1]),a.qb=0);a.ma=a.A<2?a.A:2;return b===4?(qp(a,!0),a.R.T===0?3:4):a.Ba&&(qp(a,!1),a.R.T===0)?1:2}
function wp(a,b){for(var c,d,e,f=a.window;;){if(a.F<=258){tp(a);if(a.F<=258&&b===0)return 1;if(a.F===0)break}a.U=0;if(a.F>=3&&a.A>0&&(d=a.A-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.A+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.U=258-(e-d);a.U>a.F&&(a.U=a.F)}a.U>=3?(c=mp(a,1,a.U-3),a.F-=a.U,a.A+=a.U,a.U=0):(c=mp(a,0,a.window[a.A]),a.F--,a.A++);if(c&&(qp(a,!1),a.R.T===0))return 1}a.ma=0;return b===4?(qp(a,!0),a.R.T===0?3:4):
a.Ba&&(qp(a,!1),a.R.T===0)?1:2}
function xp(a,b){for(var c;;){if(a.F===0&&(tp(a),a.F===0)){if(b===0)return 1;break}a.U=0;c=mp(a,0,a.window[a.A]);a.F--;a.A++;if(c&&(qp(a,!1),a.R.T===0))return 1}a.ma=0;return b===4?(qp(a,!0),a.R.T===0?3:4):a.Ba&&(qp(a,!1),a.R.T===0)?1:2}
function yp(a,b,c,d,e){this.yf=a;this.Nf=b;this.Tf=c;this.Mf=d;this.uf=e}
var zp;zp=[new yp(0,0,0,0,function(a,b){var c=65535;for(c>a.Ca-5&&(c=a.Ca-5);;){if(a.F<=1){tp(a);if(a.F===0&&b===0)return 1;if(a.F===0)break}a.A+=a.F;a.F=0;var d=a.ya+c;if(a.A===0||a.A>=d)if(a.F=a.A-d,a.A=d,qp(a,!1),a.R.T===0)return 1;if(a.A-a.ya>=a.na-262&&(qp(a,!1),a.R.T===0))return 1}a.ma=0;if(b===4)return qp(a,!0),a.R.T===0?3:4;a.A>a.ya&&qp(a,!1);return 1}),
new yp(4,4,8,4,up),new yp(4,5,16,8,up),new yp(4,6,32,32,up),new yp(4,4,16,16,vp),new yp(8,16,32,32,vp),new yp(8,16,128,128,vp),new yp(8,32,128,256,vp),new yp(32,128,258,1024,vp),new yp(32,258,258,4096,vp)];
function Ap(){this.R=null;this.status=0;this.da=null;this.wrap=this.pending=this.lc=this.Ca=0;this.J=null;this.Ea=0;this.method=8;this.Jb=-1;this.kb=this.Id=this.na=0;this.window=null;this.Ge=0;this.head=this.La=null;this.ce=this.Ud=this.strategy=this.level=this.td=this.Zd=this.za=this.F=this.Kb=this.A=this.qb=this.ge=this.U=this.ya=this.Qa=this.Pa=this.pd=this.Ic=this.S=0;this.va=new P.Ma(1146);this.mb=new P.Ma(122);this.ja=new P.Ma(78);op(this.va);op(this.mb);op(this.ja);this.Nd=this.Ec=this.Jc=
null;this.Na=new P.Ma(16);this.ea=new P.Ma(573);op(this.ea);this.Hb=this.Ra=0;this.depth=new P.Ma(573);op(this.depth);this.ia=this.qa=this.ma=this.matches=this.Rb=this.Ta=this.Zb=this.Ba=this.hc=this.rd=0}
function Bp(a,b){if(!a||!a.state||b>5||b<0)return a?np(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.pa!==0||c.status===666&&b!==4)return np(a,a.T===0?-5:-2);c.R=a;var d=c.Jb;c.Jb=b;if(c.status===42)if(c.wrap===2)a.M=0,R(c,31),R(c,139),R(c,8),c.J?(R(c,(c.J.text?1:0)+(c.J.cb?2:0)+(c.J.extra?4:0)+(c.J.name?8:0)+(c.J.comment?16:0)),R(c,c.J.time&255),R(c,c.J.time>>8&255),R(c,c.J.time>>16&255),R(c,c.J.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.J.os&255),c.J.extra&&c.J.extra.length&&
(R(c,c.J.extra.length&255),R(c,c.J.extra.length>>8&255)),c.J.cb&&(a.M=Bo(a.M,c.da,c.pending,0)),c.Ea=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Id-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.A!==0&&(e|=32);c.status=113;rp(c,e+(31-e%31));c.A!==0&&(rp(c,a.M>>>16),rp(c,a.M&65535));a.M=1}if(c.status===69)if(c.J.extra){for(e=c.pending;c.Ea<(c.J.extra.length&65535)&&(c.pending!==c.Ca||
(c.J.cb&&c.pending>e&&(a.M=Bo(a.M,c.da,c.pending-e,e)),pp(a),e=c.pending,c.pending!==c.Ca));)R(c,c.J.extra[c.Ea]&255),c.Ea++;c.J.cb&&c.pending>e&&(a.M=Bo(a.M,c.da,c.pending-e,e));c.Ea===c.J.extra.length&&(c.Ea=0,c.status=73)}else c.status=73;if(c.status===73)if(c.J.name){e=c.pending;do{if(c.pending===c.Ca&&(c.J.cb&&c.pending>e&&(a.M=Bo(a.M,c.da,c.pending-e,e)),pp(a),e=c.pending,c.pending===c.Ca)){var f=1;break}f=c.Ea<c.J.name.length?c.J.name.charCodeAt(c.Ea++)&255:0;R(c,f)}while(f!==0);c.J.cb&&c.pending>
e&&(a.M=Bo(a.M,c.da,c.pending-e,e));f===0&&(c.Ea=0,c.status=91)}else c.status=91;if(c.status===91)if(c.J.comment){e=c.pending;do{if(c.pending===c.Ca&&(c.J.cb&&c.pending>e&&(a.M=Bo(a.M,c.da,c.pending-e,e)),pp(a),e=c.pending,c.pending===c.Ca)){f=1;break}f=c.Ea<c.J.comment.length?c.J.comment.charCodeAt(c.Ea++)&255:0;R(c,f)}while(f!==0);c.J.cb&&c.pending>e&&(a.M=Bo(a.M,c.da,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.J.cb?(c.pending+2>c.Ca&&pp(a),c.pending+2<=c.Ca&&(R(c,
a.M&255),R(c,a.M>>8&255),a.M=0,c.status=113)):c.status=113);if(c.pending!==0){if(pp(a),a.T===0)return c.Jb=-1,0}else if(a.pa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return np(a,-5);if(c.status===666&&a.pa!==0)return np(a,-5);if(a.pa!==0||c.F!==0||b!==0&&c.status!==666){d=c.strategy===2?xp(c,b):c.strategy===3?wp(c,b):zp[c.level].uf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.T===0&&(c.Jb=-1),0;if(d===2&&(b===1?(Yo(c,2,3),Zo(c,256,Mo),c.ia===16?(Xo(c,c.qa),c.qa=0,c.ia=0):c.ia>=
8&&(c.da[c.pending++]=c.qa&255,c.qa>>=8,c.ia-=8)):b!==5&&(Yo(c,0,3),dp(c,0,0),b===3&&(op(c.head),c.F===0&&(c.A=0,c.ya=0,c.ma=0))),pp(a),a.T===0))return c.Jb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.M&255),R(c,a.M>>8&255),R(c,a.M>>16&255),R(c,a.M>>24&255),R(c,a.ub&255),R(c,a.ub>>8&255),R(c,a.ub>>16&255),R(c,a.ub>>24&255)):(rp(c,a.M>>>16),rp(c,a.M&65535));pp(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Cp={};Cp=function(){this.input=null;this.ub=this.pa=this.sb=0;this.output=null;this.Fd=this.T=this.Nb=0;this.msg="";this.state=null;this.jd=2;this.M=0};var Dp=Object.prototype.toString;
function Ep(a){if(!(this instanceof Ep))return new Ep(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.R=new Cp;this.R.T=0;var b=this.R;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=np(b,-2);else{e===8&&(e=9);var k=new Ap;b.state=k;k.R=b;k.wrap=h;k.J=null;k.Id=e;k.na=1<<k.Id;k.kb=k.na-1;k.pd=f+7;k.Ic=1<<k.pd;k.Pa=k.Ic-1;k.Qa=~~((k.pd+3-1)/3);k.window=new P.wb(k.na*2);k.head=new P.Ma(k.Ic);k.La=new P.Ma(k.na);k.hc=1<<f+6;k.Ca=k.hc*4;k.da=new P.wb(k.Ca);k.Zb=1*k.hc;k.rd=3*k.hc;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ub=b.Fd=0;b.jd=2;c=b.state;c.pending=0;c.lc=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.M=c.wrap===2?
0:1;c.Jb=0;if(!lp){d=Array(16);for(f=g=0;f<28;f++)for(Qo[f]=g,e=0;e<1<<Io[f];e++)Po[g++]=f;Po[g-1]=f;for(f=g=0;f<16;f++)for(Ro[f]=g,e=0;e<1<<Jo[f];e++)Oo[g++]=f;for(g>>=7;f<30;f++)for(Ro[f]=g<<7,e=0;e<1<<Jo[f]-7;e++)Oo[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Mo[e*2+1]=8,e++,d[8]++;for(;e<=255;)Mo[e*2+1]=9,e++,d[9]++;for(;e<=279;)Mo[e*2+1]=7,e++,d[7]++;for(;e<=287;)Mo[e*2+1]=8,e++,d[8]++;ap(Mo,287,d);for(e=0;e<30;e++)No[e*2+1]=5,No[e*2]=$o(e,5);To=new So(Mo,Io,257,286,15);Uo=new So(No,
Jo,0,30,15);Vo=new So([],Ko,0,19,7);lp=!0}c.Jc=new Wo(c.va,To);c.Ec=new Wo(c.mb,Uo);c.Nd=new Wo(c.ja,Vo);c.qa=0;c.ia=0;bp(c);c=0}else c=np(b,-2);c===0&&(b=b.state,b.Ge=2*b.na,op(b.head),b.td=zp[b.level].Nf,b.Ud=zp[b.level].yf,b.ce=zp[b.level].Tf,b.Zd=zp[b.level].Mf,b.A=0,b.ya=0,b.F=0,b.ma=0,b.U=b.za=2,b.qb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(Go[b]);a.header&&(b=this.R)&&b.state&&b.state.wrap===2&&(b.state.J=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=zo(a.dictionary):
Dp.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.R;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.F)b=-2;else{b===1&&(a.M=Ao(a.M,f,g,0));l.wrap=0;g>=l.na&&(b===0&&(op(l.head),l.A=0,l.ya=0,l.ma=0),c=new P.wb(l.na),P.Bb(c,f,g-l.na,l.na,0),f=c,g=l.na);c=a.pa;d=a.sb;e=a.input;a.pa=g;a.sb=0;a.input=f;for(tp(l);l.F>=3;){f=l.A;g=l.F-2;do l.S=(l.S<<l.Qa^l.window[f+3-1])&l.Pa,l.La[f&l.kb]=l.head[l.S],l.head[l.S]=f,f++;while(--g);
l.A=f;l.F=2;tp(l)}l.A+=l.F;l.ya=l.A;l.ma=l.F;l.F=0;l.U=l.za=2;l.qb=0;a.sb=d;a.input=e;a.pa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Go[b]);this.Si=!0}}
Ep.prototype.push=function(a,b){var c=this.R,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=zo(a):Dp.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.sb=0;c.pa=c.input.length;do{c.T===0&&(c.output=new P.wb(d),c.Nb=0,c.T=d);a=Bp(c,e);if(a!==1&&a!==0)return Fp(this,a),this.ended=!0,!1;if(c.T===0||c.pa===0&&(e===4||e===2))if(this.options.to==="string"){var f=P.Dd(c.output,c.Nb);b=f;f=f.length;if(f<65537&&(b.subarray&&yo||!b.subarray))b=
String.fromCharCode.apply(null,P.Dd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Dd(c.output,c.Nb),this.chunks.push(b)}while((c.pa>0||c.T===0)&&a!==1);if(e===4)return(c=this.R)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=np(c,-2):(c.state=null,a=d===113?np(c,-3):0)):a=-2,Fp(this,a),this.ended=!0,a===0;e===2&&(Fp(this,0),c.T=0);return!0};
function Fp(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):P.Sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.R.msg}
function Gp(a,b){b=b||{};b.gzip=!0;b=new Ep(b);b.push(a,!0);if(b.err)throw b.msg||Go[b.err];return b.result}
;function Hp(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Ib(a):null:null}
function Ip(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?pb(a):null:null}
;function Jp(a){return pb(a===null?"null":a===void 0?"undefined":a)}
;function Kp(a){this.name=a}
;var Lp=new Kp("rawColdConfigGroup");var Mp=new Kp("rawHotConfigGroup");function Np(a){this.D=M(a)}
v(Np,N);function Op(a){this.D=M(a)}
v(Op,N);Op.prototype.setTrackingParams=function(a){return eg(this,1,ue(a,!1))};var Pp=new Kp("continuationCommand");var Qp=new Kp("webCommandMetadata");var Rp=new Kp("signalServiceEndpoint");var Sp={Zg:"EMBEDDED_PLAYER_MODE_UNKNOWN",Wg:"EMBEDDED_PLAYER_MODE_DEFAULT",Yg:"EMBEDDED_PLAYER_MODE_PFP",Xg:"EMBEDDED_PLAYER_MODE_PFL"};var Tp=new Kp("feedbackEndpoint");var De={ti:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",si:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",xi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
zi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",yi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Ei:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Vh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
ri:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
wi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",Yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND",Bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_AUTO_ZOOM",
Nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_CONTROL",Oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_TREATMENT",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DISABLE_PLAYER_OPEN_ON_FULLSCREEN",Lh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_RECONNECT_WITH_RETRY",hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SINGLE_COLUMN_GRID_TRIGGERED",Kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_CONNECTION_TIMEOUT",Jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_GHOST_LOADING_ELIGIBLE",ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_STREAMED_GET_WATCH_SUPPORTED"};var Up=new Kp("shareEndpoint"),Vp=new Kp("shareEntityEndpoint"),Wp=new Kp("shareEntityServiceEndpoint"),Xp=new Kp("webPlayerShareEntityServiceEndpoint");var Yp=new Kp("playlistEditEndpoint");var Zp=new Kp("modifyChannelNotificationPreferenceEndpoint");var $p=new Kp("undoFeedbackEndpoint");var aq=new Kp("unsubscribeEndpoint");var bq=new Kp("subscribeEndpoint");function cq(){var a=dq;G("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function eq(a){E("yt.ads.biscotti.lastId_",a)}
;function fq(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var gq=D.window,hq,iq,jq=(gq==null?void 0:(hq=gq.yt)==null?void 0:hq.config_)||(gq==null?void 0:(iq=gq.ytcfg)==null?void 0:iq.data_)||{};E("yt.config_",jq);function kq(){fq(jq,arguments)}
function S(a,b){return a in jq?jq[a]:b}
function lq(a){var b=jq.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var mq=[];function nq(a){mq.forEach(function(b){return b(a)})}
function oq(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pq(b)}}:a}
function pq(a){var b=G("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),kq("ERRORS",b));nq(a)}
function qq(a,b,c,d,e){var f=G("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),kq("ERRORS",f))}
;var rq=/^[\w.]*$/,sq={q:!0,search_query:!0};function tq(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=uq(f[0]||""),h=uq(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?$b(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],p=String(tq);l.args=[{key:m,value:f[1],query:a,method:vq===p?"unchanged":p}];sq.hasOwnProperty(m)||qq(l)}}return c}
var vq=String(tq);function wq(a){var b=[];Ei(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Tb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function xq(a){a.charAt(0)==="?"&&(a=a.substring(1));return tq(a,"&")}
function yq(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),xq(a.length>1?a[1]:a[0])):{}}
function zq(a,b){return Aq(a,b||{},!0)}
function Aq(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=xq(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return sc(a,e)+d}
function Bq(a){if(!b)var b=window.location.href;var c=a.match(jc)[1]||null,d=lc(a);c&&d?(a=a.match(jc),b=b.match(jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?lc(b)===d&&(Number(b.match(jc)[4]||null)||null)===(Number(a.match(jc)[4]||null)||null):!0;return a}
function uq(a){return a&&a.match(rq)?a:hc(a)}
;function Cq(a){var b=Dq;a=a===void 0?G("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=rn;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Qa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();try{var g=jn.history.length}catch(Qa){g=0}e.u_his=g;var h;e.u_h=(h=jn.screen)==null?void 0:h.height;var k;e.u_w=(k=jn.screen)==null?void 0:k.width;var l;e.u_ah=(l=jn.screen)==null?void 0:l.availHeight;var m;e.u_aw=(m=jn.screen)==null?
void 0:m.availWidth;var p;e.u_cd=(p=jn.screen)==null?void 0:p.colorDepth}catch(Qa){}var r;g=b.h;try{var t=g.screenX;var x=g.screenY}catch(Qa){}try{var z=g.outerWidth;var w=g.outerHeight}catch(Qa){}try{var H=g.innerWidth;var F=g.innerHeight}catch(Qa){}try{var V=g.screenLeft;var na=g.screenTop}catch(Qa){}try{H=g.innerWidth,F=g.innerHeight}catch(Qa){}try{var ka=g.screen.availWidth;var Qd=g.screen.availTop}catch(Qa){}t=[V,na,t,x,ka,Qd,z,w,H,F];try{var Mb=(b.h.top||window).document,hb=Mb.compatMode=="CSS1Compat"?
Mb.documentElement:Mb.body;var Ra=(new Di(hb.clientWidth,hb.clientHeight)).round()}catch(Qa){Ra=new Di(-12245933,-12245933)}Mb=Ra;Ra={};var Ga=Ga===void 0?D:Ga;hb=new zn;"SVGElement"in Ga&&"createElementNS"in Ga.document&&hb.set(0);x=on();x["allow-top-navigation-by-user-activation"]&&hb.set(1);x["allow-popups-to-escape-sandbox"]&&hb.set(2);Ga.crypto&&Ga.crypto.subtle&&hb.set(3);"TextDecoder"in Ga&&"TextEncoder"in Ga&&hb.set(4);Ga=An(hb);Ra.bc=Ga;Ra.bih=Mb.height;Ra.biw=Mb.width;Ra.brdim=t.join();
b=b.i;b=b.prerendering?3:(r={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?r:0;r=(Ra.vis=b,Ra.wgl=!!jn.WebGLRenderingContext,Ra);c=d.call(c,e,r);c.ca_type="image";a&&(c.bid=a);return c}
var Dq=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return wq(Cq(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var Eq="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function Fq(){if(!Eq)return null;var a=Eq();return"open"in a?a:null}
function Gq(a){switch(Hq(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function Hq(a){return a&&"status"in a?a.status:-1}
;function Iq(a,b){typeof a==="function"&&(a=oq(a));return window.setTimeout(a,b)}
;var Jq="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(A(Jq),["client_dev_set_cookie"]);function T(a){a=Kq(a);return typeof a==="string"&&a==="false"?!1:!!a}
function O(a,b){a=Kq(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Lq(){var a=Kq("html5_web_po_experiment_ids");return Array.isArray(a)?Vb(a,function(b){return Number(b||0)}):[Number(a||0)]}
function Mq(a){a=Kq(a);return a!==void 0?String(a):""}
function Kq(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Nq(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Oq={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Pq="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(Jq)),Qq=!1;function Rq(a,b,c,d,e,f,g,h,k){function l(){(m&&"readyState"in m?m.readyState:0)===4&&b&&oq(b)(m)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var m=Fq();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;T("debug_forward_web_query_parameters")&&(a=Sq(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Tq(a,e))for(var p in e)m.setRequestHeader(p,e[p]),"content-type"===p.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
k&&"onprogress"in m&&(m.onprogress=function(){k(m.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{m.setAttributionReporting(a)}catch(r){qq(r)}}m.send(d);return m}
function Tq(a,b){b=b===void 0?{}:b;var c=Bq(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Oq){var g=S(Oq[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(lc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=lc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=mc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!lc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!lc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&lc(a)||(b["X-YouTube-Ad-Signals"]=wq(Cq()));return b}
function Uq(a,b){b.method="POST";b.postParams||(b.postParams={});return Vq(a,b)}
function Vq(a,b){var c=b.format||"JSON";a=Wq(a,b);var d=Xq(a,b),e=!1,f=Yq(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Gq(k),m=null,p=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||p||r)m=Zq(a,c,k,b.convertToSafeHtml);l&&(l=$q(c,k,m));m=m||{};p=b.context||D;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Iq(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Wq(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=zq(a,b);return a}
function Xq(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||lc(a)&&!b.withCredentials&&lc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=xq(e),Pi(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):rc(e));f=e||f&&!Ii(f);!Qq&&f&&b.method!=="POST"&&(Qq=!0,pq(Error("AJAX request with postData should use POST")));return e}
function Zq(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,qq(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ar(a):null)e={},Tb(a.getElementsByTagName("*"),function(g){e[g.tagName]=br(g)})}d&&cr(e);
return e}
function cr(a){if(Pa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=nb();c=d?d.createHTML(c):c;a[b]=new Fb(c)}else cr(a[b])}}
function $q(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function ar(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function br(a){var b="";Tb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Sq(a){var b=window.location.search,c=lc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Bq(a)&&(c=document.location.hostname);var d=mc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=xq(b),f={};Tb(Pq,function(g){e[g]&&(f[g]=e[g])});
return Aq(a,f||{},!1)}
var Yq=Rq;var dr=[{ud:function(a){return"Cannot read property '"+a.key+"'"},
Sc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ud:function(a){return"Cannot call '"+a.key+"'"},
Sc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ud:function(a){return a.key+" is not defined"},
Sc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var gr={fb:[],Za:[{callback:er,weight:500},{callback:fr,weight:500}]};function er(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function fr(a){if(!a.stack)return!0;var b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function hr(){this.Za=[];this.fb=[]}
var ir;function jr(){if(!ir){var a=ir=new hr;a.fb.length=0;a.Za.length=0;kr(a,gr)}return ir}
function kr(a,b){b.fb&&a.fb.push.apply(a.fb,b.fb);b.Za&&a.Za.push.apply(a.Za,b.Za)}
;var lr=new On;function mr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=nr(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=nr(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=nr(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function nr(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function or(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=pr(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=mr(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?pr(f+".ve",g,h,k):0;d+=f;d+=pr(e,a[e],b,c);if(d>500)break}}else c[b]=qr(a),d+=c[b].length;else c[b]=qr(a),d+=c[b].length;return d}
function pr(a,b,c,d){c+="."+a;a=qr(b);d[c]=a;return c.length+a.length}
function qr(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function rr(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function sr(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function tr(){this.ue=!0}
function ur(a){var b={},c=[];"USER_SESSION_ID"in jq&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=wi(c))b.Authorization=c,c=a=a==null?void 0:a.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in jq||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in jq&&(b["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return b}
;var vr={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function wr(a,b,c,d,e){ti.set(""+a,b,{Nc:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function xr(a){return ti.get(""+a,void 0)}
function yr(a,b,c){ti.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function zr(){if(!ti.isEnabled())return!1;if(ti.h.cookie)return!0;ti.set("TESTCOOKIESENABLED","1",{Nc:60});if(ti.get("TESTCOOKIESENABLED")!=="1")return!1;ti.remove("TESTCOOKIESENABLED");return!0}
;var Ar=G("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",Ar);function Br(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=xr(this.h);a&&this.parse(a)}
var Cr;function Dr(){Cr||(Cr=new Br);return Cr}
n=Br.prototype;n.get=function(a,b){Er(a);Fr(a);a=Ar[a]!==void 0?Ar[a].toString():null;return a!=null?a:b?b:""};
n.set=function(a,b){Er(a);Fr(a);if(b==null)throw Error("ExpectedNotNull");Ar[a]=b.toString()};
function Gr(a){return!!((Hr("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
n.remove=function(a){Er(a);Fr(a);delete Ar[a]};
n.clear=function(){for(var a in Ar)delete Ar[a]};
function Fr(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Er(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Hr(a){a=Ar[a]!==void 0?Ar[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
n.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ar[d]=c.toString())}};var Ir={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Jr={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Kr(){var a=D.navigator;return a?a.connection:void 0}
function Lr(){var a=Kr();if(a){var b=Ir[a.type||"unknown"]||"CONN_UNKNOWN";a=Ir[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Mr(){var a=Kr();if(a!=null&&a.effectiveType)return Jr.hasOwnProperty(a.effectiveType)?Jr[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(U,Error);function Nr(){try{return Or(),!0}catch(a){return!1}}
function Or(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function Pr(){}
function Qr(a,b){return yn.Xa(a,0,b)}
Pr.prototype.sa=function(a,b){return this.Xa(a,1,b)};
function Rr(a,b){yn.Xa(a,2,b)}
Pr.prototype.Vb=function(a){var b=G("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Sr=O("web_emulated_idle_callback_delay",300),Tr=1E3/60-3,Ur=[8,5,4,3,2,1,0];
function Vr(a){a=a===void 0?{}:a;J.call(this);this.i=[];this.j={};this.ba=this.h=0;this.aa=this.u=!1;this.K=[];this.V=this.ha=!1;for(var b=y(Ur),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.gd=a.timeout||1;this.G=Tr;this.B=0;this.Aa=this.Vf.bind(this);this.Ub=this.Cg.bind(this);this.Va=this.Me.bind(this);this.Wa=this.zf.bind(this);this.lb=this.dg.bind(this);this.Ha=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.oa=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.Aa)}
v(Vr,J);n=Vr.prototype;n.Vb=function(a){var b=Za();Wr(this,a);a=Za()-b;this.u||(this.G-=a)};
n.Xa=function(a,b,c){++this.ba;if(b===10)return this.Vb(a),this.ba;var d=this.ba;this.j[d]=a;this.u&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.aa||this.u||(this.h!==0&&Xr(this)!==this.B&&this.stop(),this.start()));return d};
n.ta=function(a){delete this.j[a]};
function Yr(a){a.K.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
n.isHidden=function(){return!!document.hidden||!1};
function Zr(a){return!a.isHidden()&&a.oa}
function Xr(a){if(a.i[8].length){if(a.V)return 4;if(Zr(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Zr(a)?3:2:1;return 0}
n.xa=function(a){var b=G("yt.logging.errors.log");b&&b(a)};
function Wr(a,b){try{b()}catch(c){a.xa(c)}}
function $r(a){for(var b=y(Ur),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
n.zf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;as(this,b);this.ha=!1};
n.Cg=function(){as(this)};
n.Me=function(){bs(this)};
n.dg=function(a){this.V=!0;var b=Xr(this);b===4&&b!==this.B&&(this.stop(),this.start());as(this,void 0,a);this.V=!1};
n.Vf=function(){this.isHidden()||bs(this);this.h&&(this.stop(),this.start())};
function bs(a){a.stop();a.u=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Wr(a,e)}cs(a);a.u=!1;$r(a)&&a.start();b=Za()-b;a.G-=b}
function cs(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function as(a,b,c){a.V&&a.B===4&&a.h||a.stop();a.u=!0;b=Za()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.xa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Wr(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Wr(a,c)}while(c&&Za()<b)}a.u=!1;cs(a);a.G=Tr;$r(a)&&a.start()}
n.start=function(){this.aa=!1;if(this.h===0)switch(this.B=Xr(this),this.B){case 1:var a=this.Wa;this.h=this.Ha?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Sr);break;case 2:this.h=window.setTimeout(this.Ub,this.gd);break;case 3:this.h=window.requestAnimationFrame(this.lb);break;case 4:this.h=window.setTimeout(this.Va,0)}};
n.pause=function(){this.stop();this.aa=!0};
n.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Ha?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
n.X=function(){Yr(this);this.stop();this.oa&&document.removeEventListener("visibilitychange",this.Aa);J.prototype.X.call(this)};var ds=G("yt.scheduler.instance.timerIdMap_")||{},es=O("kevlar_tuner_scheduler_soft_state_timer_ms",800),gs=0,hs=0;function is(){var a=G("ytglobal.schedulerInstanceInstance_");if(!a||a.I)a=new Vr(S("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function js(){ks();var a=G("ytglobal.schedulerInstanceInstance_");a&&(yc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function ks(){Yr(is());for(var a in ds)ds.hasOwnProperty(a)&&delete ds[Number(a)]}
function ls(a,b,c){if(!c)return c=c===void 0,-is().Xa(a,b,c);var d=window.setTimeout(function(){var e=is().Xa(a,b);ds[d]=e},c);
return d}
function ms(a){is().Vb(a)}
function ns(a){var b=is();if(a<0)b.ta(-a);else{var c=ds[a];c?(b.ta(c),delete ds[a]):window.clearTimeout(a)}}
function ps(){qs()}
function qs(){window.clearTimeout(gs);is().start()}
function rs(){is().pause();window.clearTimeout(gs);gs=window.setTimeout(ps,es)}
function ss(){window.clearTimeout(hs);hs=window.setTimeout(function(){ts(0)},es)}
function ts(a){ss();var b=is();b.o=a;b.start()}
function us(a){ss();var b=is();b.o>a&&(b.o=a,b.start())}
function vs(){window.clearTimeout(hs);var a=is();a.o=0;a.start()}
;function ws(){Pr.apply(this,arguments)}
v(ws,Pr);function xs(){ws.instance||(ws.instance=new ws);return ws.instance}
ws.prototype.Xa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=G("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Iq(a,c||0)};
ws.prototype.ta=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=G("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ws.prototype.start=function(){var a=G("yt.scheduler.instance.start");a&&a()};
ws.prototype.pause=function(){var a=G("yt.scheduler.instance.pause");a&&a()};
var yn=xs();
G("yt.scheduler.initialized")||(E("yt.scheduler.instance.dispose",js),E("yt.scheduler.instance.addJob",ls),E("yt.scheduler.instance.addImmediateJob",ms),E("yt.scheduler.instance.cancelJob",ns),E("yt.scheduler.instance.cancelAllJobs",ks),E("yt.scheduler.instance.start",qs),E("yt.scheduler.instance.pause",rs),E("yt.scheduler.instance.setPriorityThreshold",ts),E("yt.scheduler.instance.enablePriorityThreshold",us),E("yt.scheduler.instance.clearPriorityThreshold",vs),E("yt.scheduler.initialized",!0));function ys(a){var b=new Zn;this.h=(a=b.isAvailable()?a?new $n(b,a):b:null)?new Un(a):null;this.i=document.domain||window.location.hostname}
ys.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new fl).serialize(b))}catch(f){return}else e=escape(b);wr(a,e,c,this.i)};
ys.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=xr(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ys.prototype.remove=function(a){this.h&&this.h.remove(a);yr(a,"/",this.i)};var zs=function(){var a;return function(){a||(a=new ys("ytidb"));return a}}();
function As(){var a;return(a=zs())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Bs=[],Cs,Ds=!1;function Es(){var a={};for(Cs=new Fs(a.handleError===void 0?Gs:a.handleError,a.logEvent===void 0?Hs:a.logEvent);Bs.length>0;)switch(a=Bs.shift(),a.type){case "ERROR":Cs.xa(a.payload);break;case "EVENT":Cs.logEvent(a.eventType,a.payload)}}
function Is(a){Ds||(Cs?Cs.xa(a):(Bs.push({type:"ERROR",payload:a}),Bs.length>10&&Bs.shift()))}
function Js(a,b){Ds||(Cs?Cs.logEvent(a,b):(Bs.push({type:"EVENT",eventType:a,payload:b}),Bs.length>10&&Bs.shift()))}
;function Ks(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Ls(a){return a.substr(0,a.indexOf(":"))||a}
;var Ms=Ad||Bd;function Ns(a){var b=jd();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Os={},Ps=(Os.AUTH_INVALID="No user identifier specified.",Os.EXPLICIT_ABORT="Transaction was explicitly aborted.",Os.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Os.MISSING_INDEX="Index not created.",Os.MISSING_OBJECT_STORES="Object stores not created.",Os.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Os.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Os.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Os.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Os.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Os.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Os.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Os),Qs={},Rs=(Qs.AUTH_INVALID="ERROR",Qs.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Qs.EXPLICIT_ABORT="IGNORED",Qs.IDB_NOT_SUPPORTED="ERROR",Qs.MISSING_INDEX=
"WARNING",Qs.MISSING_OBJECT_STORES="ERROR",Qs.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Qs.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Qs.QUOTA_EXCEEDED="WARNING",Qs.QUOTA_MAYBE_EXCEEDED="WARNING",Qs.UNKNOWN_ABORT="WARNING",Qs.INCOMPATIBLE_DB_VERSION="WARNING",Qs),Ss={},Ts=(Ss.AUTH_INVALID=!1,Ss.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ss.EXPLICIT_ABORT=!1,Ss.IDB_NOT_SUPPORTED=!1,Ss.MISSING_INDEX=!1,Ss.MISSING_OBJECT_STORES=!1,Ss.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ss.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ss.QUOTA_EXCEEDED=!1,Ss.QUOTA_MAYBE_EXCEEDED=!0,Ss.UNKNOWN_ABORT=!0,Ss.INCOMPATIBLE_DB_VERSION=!1,Ss);function Us(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Ps[a]:c;d=d===void 0?Rs[a]:d;e=e===void 0?Ts[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Us.prototype)}
v(Us,U);function Vs(a,b){Us.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ps.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Vs.prototype)}
v(Vs,Us);function Ws(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ws.prototype)}
v(Ws,Error);var Xs=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ys(a,b,c,d){b=Ls(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Us)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Us("QUOTA_EXCEEDED",a);if(Cd&&e.name==="UnknownError")return new Us("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ws)return new Us("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Xs.some(function(f){return e.message.includes(f)}))return new Us("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Us("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ee:e.name})];e.level="WARNING";return e}
function Zs(a,b,c){var d=As();return new Us("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function $s(a){if(!a)throw Error();throw a;}
function at(a){return a}
function bt(a){this.h=a}
function ct(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
ct.all=function(a){return new ct(new bt(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ib:0};f.Ib<a.length;f={Ib:f.Ib},++f.Ib)ct.resolve(a[f.Ib]).then(function(g){return function(h){d[g.Ib]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
ct.resolve=function(a){return new ct(new bt(function(b,c){a instanceof ct?a.then(b,c):b(a)}))};
ct.reject=function(a){return new ct(new bt(function(b,c){c(a)}))};
ct.prototype.then=function(a,b){var c=this,d=a!=null?a:at,e=b!=null?b:$s;return new ct(new bt(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){dt(c,c,d,f,g)}),c.i.push(function(){et(c,c,e,f,g)})):c.state.status==="FULFILLED"?dt(c,c,d,f,g):c.state.status==="REJECTED"&&et(c,c,e,f,g)}))};
ct.prototype.catch=function(a){return this.then(void 0,a)};
function dt(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof ct?ft(a,b,f,d,e):d(f)}catch(g){e(g)}}
function et(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof ct?ft(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ft(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof ct?ft(a,b,f,d,e):d(f)},function(f){e(f)})}
;function gt(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ht(a){return new Promise(function(b,c){gt(a,b,c)})}
function jt(a){return new ct(new bt(function(b,c){gt(a,b,c)}))}
;function kt(a,b){return new ct(new bt(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var lt=window,W=lt.ytcsi&&lt.ytcsi.now?lt.ytcsi.now:lt.performance&&lt.performance.timing&&lt.performance.now&&lt.performance.timing.navigationStart?function(){return lt.performance.timing.navigationStart+lt.performance.now()}:function(){return(new Date).getTime()};function mt(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
function nt(){return T("idb_immediate_commit")}
n=mt.prototype;n.add=function(a,b,c){return ot(this,[a],{mode:"readwrite",ka:!0,commit:nt()},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return ot(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return ot(this,[a],{mode:"readonly",ka:!0,commit:nt()},function(c){return c.objectStore(a).count(b)})};
function pt(a,b,c){a=a.h.createObjectStore(b,c);return new qt(a)}
n.delete=function(a,b){return ot(this,[a],{mode:"readwrite",ka:!0,commit:nt()&&!(b instanceof IDBKeyRange)},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return ot(this,[a],{mode:"readonly",ka:!0,commit:nt()},function(c){return c.objectStore(a).get(b)})};
function rt(a,b,c){return ot(a,[b],{mode:"readwrite",ka:!0,commit:nt()},function(d){d=d.objectStore(b);return jt(d.h.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ot(a,b,c,d){var e,f,g,h,k,l,m,p,r,t,x,z;return B(function(w){switch(w.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){w.v(4);break}g++;k=Math.round(W());wa(w,5);l=a.h.transaction(b,e.mode);H=w.yield;var F=!!e.commit;var V=new st(l);F=tt(V,d,F);return H.call(w,F,7);case 7:return m=w.i,p=Math.round(W()),ut(a,k,p,g,void 0,b.join(),e),w.return(m);case 5:r=ya(w);t=Math.round(W());
x=Ys(r,a.h.name,b.join(),a.h.version);if((z=x instanceof Us&&!x.h)||g>=f)ut(a,k,t,g,x,b.join(),e),h=x;w.v(2);break;case 4:return w.return(Promise.reject(h))}})}
function ut(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Us&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Js("QUOTA_EXCEEDED",{dbName:Ls(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Us&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Js("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),vt(a,!1,d,f,b,g.tag),Is(e)):vt(a,!0,d,f,b,g.tag)}
function vt(a,b,c,d,e,f){Js("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function qt(a){this.h=a}
n=qt.prototype;n.add=function(a,b){return jt(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return jt(this.h.clear()).then(function(){})};
function wt(a,b,c){a.h.createIndex(b,c,{unique:!1})}
n.count=function(a){return jt(this.h.count(a))};
function xt(a,b){return zt(a,{query:b},function(c){return c.delete().then(function(){return At(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?xt(this,a):jt(this.h.delete(a))};
n.get=function(a){return jt(this.h.get(a))};
n.index=function(a){try{return new Bt(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Ws(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function zt(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ct(a).then(function(d){return kt(d,c)})}
function st(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Us;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function tt(a,b,c){var d=new Promise(function(e,f){try{var g=b(a);c&&a.commit();g.then(function(h){e(h)}).catch(f)}catch(h){f(h),a.abort()}});
return Promise.all([d,a.done]).then(function(e){return y(e).next().value})}
st.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Us("EXPLICIT_ABORT");};
st.prototype.commit=function(){if(!this.aborted){var a,b;(b=(a=this.h).commit)==null||b.call(a)}};
st.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new qt(a),this.i.set(a,b));return b};
function Bt(a){this.h=a}
n=Bt.prototype;n.count=function(a){return jt(this.h.count(a))};
n.delete=function(a){return Dt(this,{query:a},function(b){return b.delete().then(function(){return At(b)})})};
n.get=function(a){return jt(this.h.get(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function Dt(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Ct(a).then(function(d){return kt(d,c)})}
function Et(a,b){this.request=a;this.cursor=b}
function Ct(a){return jt(a).then(function(b){return b?new Et(a,b):null})}
function At(a){a.cursor.continue(void 0);return Ct(a.request)}
Et.prototype.delete=function(){return jt(this.cursor.delete()).then(function(){})};
Et.prototype.getValue=function(){return this.cursor.value};
Et.prototype.update=function(a){return jt(this.cursor.update(a))};function Ft(a,b,c){return new Promise(function(d,e){function f(){r||(r=new mt(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Qe,k=c.blocking,l=c.Ag,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Js("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Ls(a)});var x=f(),z=new st(g.transaction);
m&&m(x,function(w){return t.oldVersion<w&&t.newVersion>=w},z);
z.done.catch(function(w){e(w)})}catch(w){e(w)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Js("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ls(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Gt(a,b,c){c=c===void 0?{}:c;return Ft(a,b,c)}
function Ht(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Qe)&&c.addEventListener("blocked",function(){e()}),g.yield(ht(c),4);
if(g.h!=2)return xa(g,0);f=ya(g);throw Ys(f,a,"",-1);})}
;function It(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
It.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Gt(a,b,c)};
It.prototype.delete=function(a){a=a===void 0?{}:a;return Ht(this.name,a)};
function Jt(a,b){return new Us("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Kt(a,b){if(!b)throw Zs("openWithToken",Ls(a.name));return a.open()}
It.prototype.open=function(){function a(){var f,g,h,k,l,m,p,r,t,x;return B(function(z){switch(z.h){case 1:return g=(f=Error().stack)!=null?f:"",wa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var w=h=z.i,H=c.options,F=[],V=y(Object.keys(H.Ob)),na=V.next();!na.done;na=V.next()){na=na.value;var ka=H.Ob[na],Qd=ka.eg===void 0?Number.MAX_VALUE:ka.eg;!(w.h.version>=ka.Wb)||w.h.version>=Qd||w.h.objectStoreNames.contains(na)||F.push(na)}k=F;if(k.length===0){z.v(5);break}l=Object.keys(c.options.Ob);
m=h.objectStoreNames();if(c.u<O("ytidb_reopen_db_retries",0))return c.u++,h.close(),Is(new Us("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());if(!(c.o<O("ytidb_remake_db_retries",1))){z.v(6);break}c.o++;return z.yield(c.delete(),7);case 7:return Is(new Us("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());case 6:throw new Vs(m,l);case 5:return z.return(h);case 2:p=ya(z);
if(p instanceof DOMException?p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){z.v(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,Jt(c,t);return z.return(r);case 8:throw b(),p instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ys(p,c.name,"",(x=c.options.version)!=null?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Jt(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ag:b,upgrade:this.options.upgrade};return this.h=d=a()};var Lt=new It("YtIdbMeta",{Ob:{databases:{Wb:1}},upgrade:function(a,b){b(1)&&pt(a,"databases",{keyPath:"actualName"})}});
function Mt(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Kt(Lt,b),2);c=d.i;return d.return(ot(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return jt(f.h.put(a,void 0)).then(function(){})})}))})}
function Nt(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(Kt(Lt,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ot(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(Kt(Lt,b),2)):e.h!=3?(d=e.i,e.yield(ot(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return zt(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return At(g)})}),3)):e.return(c)})}
function Pt(a){return Ot(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Qt(a,b,c){return Ot(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Rt(a){var b,c;return B(function(d){if(d.h==1)return b=Or("YtIdbMeta hasAnyMeta other"),d.yield(Ot(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var St,Tt=new function(){}(new function(){});
function Ut(){var a,b,c;return B(function(d){switch(d.h){case 1:a=As();if((b=a)==null?0:b.hasSucceededOnce)return d.return(!0);var e;if(e=Ms)e=/WebKit\/([0-9]+)/.exec(jd()),e=!!(e&&parseInt(e[1],10)>=600);e&&(e=/WebKit\/([0-9]+)/.exec(jd()),e=!(e&&parseInt(e[1],10)>=602));if(!(e=e||wd)){try{e=self;var f=!!(e.indexedDB&&e.IDBIndex&&e.IDBKeyRange&&e.IDBObjectStore)}catch(g){f=!1}e=!f}if(e||!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);wa(d,2);c={actualName:"yt-idb-test-do-not-use",
publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return d.yield(Mt(c,Tt),4);case 4:return d.yield(Nt("yt-idb-test-do-not-use",Tt),5);case 5:return d.return(!0);case 2:return ya(d),d.return(!1)}})}
function Vt(){if(St!==void 0)return St;Ds=!0;return St=Ut().then(function(a){Ds=!1;var b;if((b=zs())!=null&&b.h){var c;b={hasSucceededOnce:((c=As())==null?void 0:c.hasSucceededOnce)||a};var d;(d=zs())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Wt(){return G("ytglobal.idbToken_")||void 0}
function Xt(){var a=Wt();return a?Promise.resolve(a):Vt().then(function(b){b?(E("ytglobal.idbToken_",Tt),b=Tt):b=void 0;return b})}
;var Yt=0;function Zt(a,b){Yt||(Yt=yn.sa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Xt(),2);case 2:c=h.i;if(!c)return h.return();d=!0;wa(h,3);return h.yield(Qt(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Ht(f.actualName),7);case 7:return h.yield(Nt(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),Is(g),d=!1;case 4:yn.ta(Yt),Yt=0,d&&Zt(a,b),h.h=0}})}))}
function $t(){var a;return B(function(b){return b.h==1?b.yield(Xt(),2):(a=b.i)?b.return(Rt(a)):b.return(!1)})}
new Ml;function au(a){if(!Nr())throw a=new Us("AUTH_INVALID",{dbName:a}),Is(a),a;var b=Or();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function bu(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Xt(),2);case 2:g=m.i;if(!g)throw h=Zs("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Is(h),h;Ks(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:au(a);wa(m,3);return m.yield(Mt(k,g),5);case 5:return m.yield(Gt(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=ya(m),wa(m,7),m.yield(Nt(k.actualName,
g),9);case 9:xa(m,8);break;case 7:ya(m);case 8:throw l;}})}
function cu(a,b,c){c=c===void 0?{}:c;return bu(a,b,!1,c)}
function du(a,b,c){c=c===void 0?{}:c;return bu(a,b,!0,c)}
function eu(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Xt(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Ks(a);d=au(a);return e.yield(Ht(d.actualName,b),3)}return e.yield(Nt(d.actualName,c),0)})}
function fu(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(Ht(d.actualName,b),2):e.yield(Nt(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function gu(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Xt(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Ks("LogsDatabaseV2");return d.yield(Pt(b),3)}c=d.i;return d.yield(fu(c,a,b),0)})}
function hu(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Xt(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Ks(a);return d.yield(Ht(a,b),3)}return d.yield(Nt(a,c),0)})}
;function iu(a,b){It.call(this,a,b);this.options=b;Ks(a)}
v(iu,It);function ju(a,b){var c;return function(){c||(c=new iu(a,b));return c}}
iu.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?du:cu)(a,b,Object.assign({},c))};
iu.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?hu:eu)(this.name,a)};
function ku(a,b){return ju(a,b)}
;var lu={},mu=ku("ytGcfConfig",{Ob:(lu.coldConfigStore={Wb:1},lu.hotConfigStore={Wb:1},lu),shared:!1,upgrade:function(a,b){b(1)&&(wt(pt(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),wt(pt(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function nu(a){return Kt(mu(),a)}
function ou(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(nu(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(rt(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function pu(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(nu(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(rt(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function qu(a){var b,c;return B(function(d){return d.h==1?d.yield(nu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ot(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return Dt(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function ru(a){var b,c;return B(function(d){return d.h==1?d.yield(nu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ot(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return Dt(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function su(){J.call(this);this.i=[];this.h=[];var a=G("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(su,J);su.prototype.X=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;J.prototype.X.call(this)};function tu(){this.h=0;this.i=new su}
function uu(){var a;return(a=G("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function vu(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.v(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Wt();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(ru(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(ou(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function wu(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.v(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Wt())?c?h.v(4):h.yield(qu(d),5):h.v(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(pu(c,b,g,d),0)})}
function xu(){if(!tu.instance){var a=new tu;tu.instance=a}a=tu.instance;var b=W()-a.h;if(!(a.h!==0&&b<O("send_config_hash_timer"))){b=G("yt.gcf.config.coldConfigData");var c=G("yt.gcf.config.hotHashData"),d=G("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
tu.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function yu(){return"INNERTUBE_API_KEY"in jq&&"INNERTUBE_API_VERSION"in jq}
function zu(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),Bf:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),fj:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Df:S("INNERTUBE_CONTEXT_HL"),Cf:S("INNERTUBE_CONTEXT_GL"),Ef:S("INNERTUBE_HOST_OVERRIDE")||"",Ff:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),gj:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Au(a){var b={client:{hl:a.Df,gl:a.Cf,clientName:a.Xd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Bf}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Nq();c.length>0&&(b.request={internalExperimentFlags:c});c=a.Xd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=sr()}(d=G("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Lr())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Mr())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=xu())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(xq(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function Bu(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+G("gapi.auth.getToken")().Ti:(tr.instance||(tr.instance=new tr),a=ur(),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Cu=typeof TextEncoder!=="undefined"?new TextEncoder:null,Du=Cu?function(a){return Cu.encode(a)}:function(a){a=fd(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};var Eu={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Fu={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Gu(a,b){this.version=a;this.args=b}
Gu.prototype.serialize=function(){return{version:this.version,args:this.args}};function Hu(a,b){this.topic=a;this.h=b}
Hu.prototype.toString=function(){return this.topic};var Iu=G("ytPubsub2Pubsub2Instance")||new On;On.prototype.subscribe=On.prototype.subscribe;On.prototype.unsubscribeByKey=On.prototype.wc;On.prototype.publish=On.prototype.yb;On.prototype.clear=On.prototype.clear;E("ytPubsub2Pubsub2Instance",Iu);var Ju=G("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",Ju);var Ku=G("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",Ku);var Lu=G("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",Lu);
E("ytPubsub2Pubsub2SkipSubKey",null);function Mu(a,b){var c=Nu();c&&c.publish.call(c,a.toString(),a,b)}
function Ou(a){var b=Pu,c=Nu();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=G("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Ju[d])try{if(f&&b instanceof Hu&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Be){var l=new h;h.Be=l.version}var m=h.Be}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Zb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){pq(p)}},Lu[b.toString()]?G("yt.scheduler.instance")?yn.sa(g):Iq(g,0):g())});
Ju[d]=!0;Ku[b.toString()]||(Ku[b.toString()]=[]);Ku[b.toString()].push(d);return d}
function Qu(){var a=Ru,b=Ou(function(c){a.apply(void 0,arguments);Su(b)});
return b}
function Su(a){var b=Nu();b&&(typeof a==="number"&&(a=[a]),Tb(a,function(c){b.unsubscribeByKey(c);delete Ju[c]}))}
function Nu(){return G("ytPubsub2Pubsub2Instance")}
;function Tu(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Mu("meta_logging_csi_event",{timerName:a,Jj:b})}
;var Uu=void 0,Vu=void 0;function Wu(){Vu||(Vu=Ip(S("WORKER_SERIALIZATION_URL")));return Vu||void 0}
function Xu(){var a=Wu();Uu||a===void 0||(Uu=new Worker(qb(a),void 0));return Uu}
;var Yu=O("max_body_size_to_compress",5E5),Zu=O("min_body_size_to_compress",500),$u=!0,av=0,bv=0,cv=O("compression_performance_threshold_lr",250),dv=O("slow_compressions_before_abandon_count",4),ev=!1,fv=new Map,gv=1;function hv(){if(typeof Worker==="function"&&Wu()&&!ev){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=fv.get(c.key);d&&(iv(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),fv.delete(c.key))}},b=Xu();
b&&(b.addEventListener("message",a),b.onerror=function(){fv.clear()},ev=!0)}}
function jv(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if($u)try{var g=kv(b);if(g!=null&&(g>Yu||g<Zu))d(a,c);else{if(T("gzip_gel_with_worker")){ev||hv();var h=Xu();if(h&&!e){fv.set(gv,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:gv});gv++;return}}var k=Gp(Du(b));iv(k,f,a,c,d)}}catch(l){qq(l),d(a,c)}else d(a,c)}
function iv(a,b,c,d,e){var f=W();b.ticks.gelc=f;bv++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=cv&&(av++,$u=!1);lv(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function mv(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?G("yt.logging.gzipForFetch",!1):!0;if($u&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=kv(g);if(h!=null&&(h>Yu||h<Zu))return a;c=b?{level:1}:void 0;f=Gp(Du(g),c);var k=W();e.ticks.gelc=k;if(b){bv++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=cv)if(av++,T("abandon_compression_after_N_slow_zips_lr")){b=av/bv;var l=dv/O("compression_disable_point");bv>0&&bv%O("compression_disable_point")===0&&b>=l&&($u=!1)}else $u=!1;lv(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return qq(m),a}}else return a}
function kv(a){try{return(new Blob(a.split(""))).size}catch(b){return qq(b),null}}
function lv(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Tu("gel_compression",a,{sampleRate:.1})}
;function nv(a){a=Object.assign({},a);delete a.Authorization;var b=wi();if(b){var c=new Cn;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Fd(c.digest(),3)}return a}
;var ov;function pv(){ov||(ov=new ys("yt.innertube"));return ov}
function qv(a,b,c,d){if(d)return null;d=pv().get("nextId",!0)||1;var e=pv().get("requests",!0)||{};e[d]={method:a,request:b,authState:nv(c),requestTime:Math.round(W())};pv().set("nextId",d+1,86400,!0);pv().set("requests",e,86400,!0);return d}
function rv(a){var b=pv().get("requests",!0)||{};delete b[a];pv().set("requests",b,86400,!0)}
function sv(a){var b=pv().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=nv(Bu(!1));Li(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),tv(a,d.method,e,{}));delete b[c]}}pv().set("requests",b,86400,!0)}}
;function uv(a){this.yc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Gb=function(){};
this.now=Date.now;this.cc=!1;var b;this.we=(b=a.we)!=null?b:100;var c;this.pe=(c=a.pe)!=null?c:1;var d;this.ne=(d=a.ne)!=null?d:2592E6;var e;this.he=(e=a.he)!=null?e:12E4;var f;this.oe=(f=a.oe)!=null?f:5E3;var g;this.W=(g=a.W)!=null?g:void 0;this.Fc=!!a.Fc;var h;this.Dc=(h=a.Dc)!=null?h:.1;var k;this.Uc=(k=a.Uc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.Gb&&(this.Gb=a.Gb);a.cc&&(this.cc=a.cc);a.yc&&(this.yc=a.yc);this.Y=a.Y;this.Fa=a.Fa;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Ad=a.Ad;this.xd=a.xd;vv(this)&&(!this.Y||this.Y("networkless_logging"))&&wv(this)}
function wv(a){vv(a)&&!a.cc&&(a.h=!0,a.Fc&&Math.random()<=a.Dc&&a.ga.Ue(a.W),xv(a),a.fa.wa()&&a.vc(),a.fa.listen(a.Ad,a.vc.bind(a)),a.fa.listen(a.xd,a.Pd.bind(a)))}
n=uv.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(vv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.W).then(function(e){d.id=e;c.fa.wa()&&yv(c,d)}).catch(function(e){yv(c,d);
zv(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(vv(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.wa()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.W).catch(function(l){zv(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.W).catch(function(g){d.sendFn(a,b,e.skipRetry);
zv(d,g)})}else this.sendFn(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(vv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.Eb(d.id,c.W):e=!0;c.fa.rb&&c.Y&&c.Y("vss_network_hint")&&c.fa.rb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.W).then(function(g){d.id=g;e&&c.ga.Eb(d.id,c.W)}).catch(function(g){zv(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.vc=function(){var a=this;if(!vv(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Fa.sa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.Td("NEW",a.W),2);if(c.h!=3)return b=c.i,b?c.yield(yv(a,b),3):(a.Pd(),c.return());a.i&&(a.i=0,a.vc());c.h=0})},this.we))};
n.Pd=function(){this.Fa.ta(this.i);this.i=0};
function yv(a,b){var c;return B(function(d){switch(d.h){case 1:if(!vv(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.v(2);break}return d.yield(a.ga.Lf(b.id,a.W),3);case 3:(c=d.i)||a.Gb(Error("The request cannot be found in the database."));case 2:if(Av(a,b,a.ne)){d.v(4);break}a.Gb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.v(5);break}return d.yield(a.ga.Eb(b.id,a.W),5);case 5:return d.return();case 4:b.skipRetry||(b=Bv(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||b.id===void 0){d.v(8);break}return d.yield(a.ga.Eb(b.id,a.W),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Bv(a,b){if(!vv(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=Cv(f);(h=Dv(f))&&a.Y&&a.Y("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Uc)){m.v(2);break}if(!a.fa.Yc){m.v(3);break}return m.yield(a.fa.Yc(),3);case 3:if(a.fa.wa()){m.v(2);break}c(e,f);if(!a.Y||!a.Y("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.v(6);
break}return m.yield(a.ga.Bd(b.id,a.W,!1),6);case 6:return m.return();case 2:if(a.Y&&a.Y("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Uc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.v(8);break}return b.sendCount<a.pe?m.yield(a.ga.Bd(b.id,a.W,!0,h?!1:void 0),12):m.yield(a.ga.Eb(b.id,a.W),8);case 12:a.Fa.sa(function(){a.fa.wa()&&a.vc()},a.oe);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.v(2):h.yield(a.ga.Eb(b.id,a.W),2);a.fa.rb&&a.Y&&a.Y("vss_network_hint")&&a.fa.rb(!0);d(e,f);h.h=0})};
return b}
function Av(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function xv(a){if(!vv(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.Td("QUEUED",a.W).then(function(b){b&&!Av(a,b,a.he)?a.Fa.sa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.v(2):c.yield(a.ga.Bd(b.id,a.W),2);xv(a);c.h=0})}):a.fa.wa()&&a.vc()})}
function zv(a,b){a.He&&!a.fa.wa()?a.He(b):a.handleError(b)}
function vv(a){return!!a.W||a.yc}
function Cv(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Dv(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Iv;
function Jv(){if(Iv)return Iv();var a={};Iv=ku("LogsDatabaseV2",{Ob:(a.LogsRequestsStore={Wb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&pt(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),wt(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Iv()}
;function Kv(a){return Kt(Jv(),a)}
function Lv(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Kv(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(rt(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Mv(c);return g.return(f)})}
function Nv(a,b){var c,d,e,f,g,h,k,l,m;return B(function(p){if(p.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},p.yield(Kv(b),2);if(p.h!=3)return d=p.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m=a==="NEW"?"readwrite":"readonly",T("use_readonly_for_get_most_recent_by_status_killswitch")&&(m="readwrite"),p.yield(ot(d,["LogsRequestsStore"],{mode:m,ka:!0},
function(r){return Dt(r.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(t){t.getValue()&&(l=t.getValue(),a==="NEW"&&(l.status="QUEUED",t.update(l)))})}),3);
c.ticks.tc=W();Mv(c);return p.return(l)})}
function Ov(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Kv(b),2);c=d.i;return d.return(ot(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",jt(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Pv(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(Kv(b),2);e=f.i;return f.return(ot(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),jt(h.h.put(k,void 0)).then(function(){return k})):ct.resolve(void 0)})}))})}
function Qv(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Kv(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Rv(a){var b,c;return B(function(d){if(d.h==1)return d.yield(Kv(a),2);b=d.i;c=W()-2592E6;return d.yield(ot(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return zt(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return At(f)})})}),0)})}
function Sv(){B(function(a){return a.yield(gu(),0)})}
function Mv(a){T("nwl_csi_killswitch")||Tu("networkless_performance",a,{sampleRate:1})}
;var Tv={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationPlayablesMetrics:533,liveCreationStreamWebrtcStats:288,liveCreationWebrtcError:526,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,
visualElementShown:72,visualElementHidden:73,visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,
spacecastSummaryRequested:88,spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,
vrCopresencePartyStats:153,vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,
buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,
buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,
transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,
outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,
ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,
watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,
deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,
ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,
watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,
tvhtml5UnexpectedRestart:319,tvhtml5DeviceStorageStats:535,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,
appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,
webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,
parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,
prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,
sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,
parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,
biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,
youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,
crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,
embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527,watchZoomStateChange:528,metadataEditorEvent:529,kidsPrismaDeeplinksEvent:530,creationOrchestrationEvent:531,coordinatedSamplingTriggered:532,dnaRecapScreenshotEvent:534,
mdxLocalNetworkPermissionRequestEvent:536,mdxLocalNetworkPermissionResponseEvent:537,sessionReplayEvent:538,sessionReplayStatusEvent:539,loggingReliabilityProbe:540};var Uv={},Vv=ku("ServiceWorkerLogsDatabase",{Ob:(Uv.SWHealthLog={Wb:1},Uv),shared:!0,upgrade:function(a,b){b(1)&&wt(pt(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Wv(a){return Kt(Vv(),a)}
function Xv(a){var b,c;B(function(d){if(d.h==1)return d.yield(Wv(a),2);b=d.i;c=W()-2592E6;return d.yield(ot(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return zt(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return At(f)})})}),0)})}
function Yv(a){var b;return B(function(c){if(c.h==1)return c.yield(Wv(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Zv={},$v=0;function aw(a){var b=b===void 0?{}:b;var c=new Image,d=""+$v++;Zv[d]=c;c.onload=c.onerror=function(){delete Zv[d]};
b.Bj&&(c.referrerPolicy="no-referrer");c.src=a}
;var bw;function cw(){bw||(bw=new ys("yt.offline"));return bw}
function dw(a){if(T("offline_error_handling")){var b=cw().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);cw().set("errors",b,2592E3,!0)}}
;function ew(){this.h=new Map;this.i=!1}
function fw(){if(!ew.instance){var a=G("yt.networkRequestMonitor.instance")||new ew;E("yt.networkRequestMonitor.instance",a);ew.instance=a}return ew.instance}
ew.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
ew.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
ew.prototype.removeParams=function(a){return a.split("?")[0]};
ew.prototype.removeParams=ew.prototype.removeParams;ew.prototype.isEndpointCFR=ew.prototype.isEndpointCFR;ew.prototype.requestComplete=ew.prototype.requestComplete;ew.getInstance=fw;function gw(){pk.call(this);var a=this;this.j=!1;this.h=xn();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=cw().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;pq(d)}cw().set("errors",{},2592E3,!0)}}})}
v(gw,pk);function hw(){if(!gw.instance){var a=G("yt.networkStatusManager.instance")||new gw;E("yt.networkStatusManager.instance",a);gw.instance=a}return gw.instance}
n=gw.prototype;n.wa=function(){return this.h.wa()};
n.rb=function(a){this.h.h=a};
n.xf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.cf=function(){this.j=!0};
n.listen=function(a,b){return this.h.listen(a,b)};
n.Yc=function(a){return vn(this.h,a)};
gw.prototype.sendNetworkCheckRequest=gw.prototype.Yc;gw.prototype.listen=gw.prototype.listen;gw.prototype.enableErrorFlushing=gw.prototype.cf;gw.prototype.getWindowStatus=gw.prototype.xf;gw.prototype.networkStatusHint=gw.prototype.rb;gw.prototype.isNetworkAvailable=gw.prototype.wa;gw.getInstance=hw;function iw(a){a=a===void 0?{}:a;pk.call(this);var b=this;this.h=this.u=0;this.j=hw();var c=G("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){jw(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){jw(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){qk(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){qk(b,"publicytnetworkstatus-offline")})))}
v(iw,pk);iw.prototype.wa=function(){var a=G("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
iw.prototype.rb=function(a){var b=G("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
iw.prototype.Yc=function(a){var b=this,c;return B(function(d){c=G("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&fw().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.rb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function jw(a,b){a.rateLimit?a.h?(yn.ta(a.u),a.u=yn.sa(function(){a.o!==b&&(qk(a,b),a.o=b,a.h=W())},a.rateLimit-(W()-a.h))):(qk(a,b),a.o=b,a.h=W()):qk(a,b)}
;var kw;function lw(){var a=uv.call;kw||(kw=new iw({mj:!0,bj:!0}));a.call(uv,this,{ga:{Ue:Rv,Eb:Qv,Td:Nv,Lf:Ov,Bd:Pv,set:Lv},fa:kw,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);qq(b,void 0,void 0,void 0,!0)}else pq(b)},
Gb:qq,sendFn:mw,now:W,He:dw,Fa:xs(),Ad:"publicytnetworkstatus-online",xd:"publicytnetworkstatus-offline",Fc:!0,Dc:.1,Uc:O("potential_esf_error_limit",10),Y:T,cc:!(Nr()&&nw())});this.j=new Ml;T("networkless_immediately_drop_all_requests")&&Sv();hu("LogsDatabaseV2")}
v(lw,uv);function ow(){var a=G("yt.networklessRequestController.instance");a||(a=new lw,E("yt.networklessRequestController.instance",a),T("networkless_logging")&&Xt().then(function(b){a.W=b;wv(a);a.j.resolve();a.Fc&&Math.random()<=a.Dc&&a.W&&Xv(a.W);T("networkless_immediately_drop_sw_health_store")&&pw(a)}));
return a}
lw.prototype.writeThenSend=function(a,b){b||(b={});b=qw(a,b);Nr()||(this.h=!1);uv.prototype.writeThenSend.call(this,a,b)};
lw.prototype.sendThenWrite=function(a,b,c){b||(b={});b=qw(a,b);Nr()||(this.h=!1);uv.prototype.sendThenWrite.call(this,a,b,c)};
lw.prototype.sendAndWrite=function(a,b){b||(b={});b=qw(a,b);Nr()||(this.h=!1);uv.prototype.sendAndWrite.call(this,a,b)};
lw.prototype.awaitInitialization=function(){return this.j.promise};
function pw(a){var b;B(function(c){if(!a.W)throw b=Zs("clearSWHealthLogsDb"),b;return c.return(Yv(a.W).catch(function(d){a.handleError(d)}))})}
function mw(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;if(T("use_request_time_ms_header"))b.headers&&Bq(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Rq(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||h)Rq(a,void 0,
"GET","",void 0,void 0,g,h);else{b:{try{c:{var k=new db({url:a});if(k.h.dsh==="1")var l=null;else{var m=k.h.ae;if(m==="1"){var p=k.h.adurl;if(p)try{l={version:3,af:decodeURIComponent(p),Oe:bb(k.i,"act=1","ri=1",eb(k))};break c}catch(na){}}l=m==="2"?{version:4,af:bb(k.i,"dct=1","suid="+k.j,"ri=1"),Oe:bb(k.i,"act=1","ri=1","suid="+k.j)}:null}}if(l){var r=mc(a),t;if(!(t=!r||!r.endsWith("/aclk"))){var x=a.search(uc),z=tc(a,0,"ri",x);if(z<0)var w=null;else{var H=a.indexOf("&",z);if(H<0||H>x)H=x;w=hc(a.slice(z+
3,H!==-1?H:0))}t=w!=="1"}var F=!t;break b}}catch(na){}F=!1}if(F){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var V=!0;break b}}catch(na){}V=!1}c=V?!0:!1}else c=!1;c||aw(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),jv(a,b.postBody,b,Vq,d)):jv(a,JSON.stringify(b.postParams),b,Uq,d):Vq(a,b)}
function qw(a,b){T("use_event_time_ms_header")&&Bq(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function nw(){return lc(document.location.toString())!=="www.youtube-nocookie.com"}
;var rw=!1,sw=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:rw};E("ytNetworklessLoggingInitializationOptions",sw);function tw(){var a;B(function(b){if(b.h==1)return b.yield(Xt(),2);a=b.i;if(!a||!Nr()&&!T("nwl_init_require_datasync_id_killswitch")||!nw())return b.v(0);rw=!0;sw.isNwlInitialized=rw;return b.yield(ow().awaitInitialization(),0)})}
;function uw(a){var b=this;this.config_=null;a?this.config_=a:yu()&&(this.config_=zu());Qr(function(){sv(b)},5E3)}
uw.prototype.isReady=function(){!this.config_&&yu()&&(this.config_=zu());return!!this.config_};
function tv(a,b,c,d){function e(p){p=p===void 0?!1:p;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(p||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=qv(b,c,l,k)),r)){var t=g.onSuccess,x=g.onFetchSuccess;g.onSuccess=function(H,F){rv(r);t(H,F)};
c.onFetchSuccess=function(H,F){rv(r);x(H,F)}}try{if(p&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?ow().writeThenSend(m,g):ow().sendAndWrite(m,g);
else if(d.compress){var z=!d.networklessOptions.writeThenSend;if(g.postBody){var w=g.postBody;typeof w!=="string"&&(w=JSON.stringify(g.postBody));jv(m,w,g,Vq,z)}else jv(m,JSON.stringify(g.postParams),g,Uq,z)}else Uq(m,g)}catch(H){if(H.name==="InvalidAccessError")r&&(rv(r),r=0),qq(Error("An extension is blocking network request."));else throw H;}r&&Qr(function(){sv(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&qq(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);pq(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onProgress:function(p){if(d.onProgress)d.onProgress(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Ef)&&(h=f);var k=a.config_.Ff||!1,l=Bu(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=zq(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(G("ytNetworklessLoggingInitializationOptions")?sw.isNwlInitialized:rw)?Vt().then(function(p){e(p)}):e(!1)}
;var vw=0,ww=yd?"webkit":xd?"moz":vd?"ms":ud?"o":"";E("ytDomDomGetNextId",G("ytDomDomGetNextId")||function(){return++vw});var xw={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function yw(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in xw||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function zw(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
yw.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
yw.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
yw.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Hi=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Hi);var Aw=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Aw);
function Bw(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Gi(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&Li(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Cw(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Bw(a,b,c,d);if(e)return e;e=++Aw.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new yw(h);if(!Wi(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new yw(h);
h.currentTarget=a;return c.call(a,h)};
g=oq(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Dw()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Hi[e]=[a,b,c,g,d];return e}
function Ew(a){a&&(typeof a=="string"&&(a=[a]),Tb(a,function(b){if(b in Hi){var c=Hi[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Dw()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Hi[b]}}))}
var Dw=Fk(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Fw(a){this.G=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.V=Cw(window,"mousemove",Xa(this.aa,this));a=Xa(this.K,this);typeof a==="function"&&(a=oq(a));this.ba=window.setInterval(a,25)}
ab(Fw,J);Fw.prototype.aa=function(a){a.h===void 0&&zw(a);var b=a.h;a.i===void 0&&zw(a);this.h=new Ci(b,a.i)};
Fw.prototype.K=function(){if(this.h){var a=W();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
Fw.prototype.X=function(){window.clearInterval(this.ba);Ew(this.V)};var Gw={};function Hw(a){var b=a===void 0?{}:a;a=b.ag===void 0?!1:b.ag;b=b.df===void 0?!0:b.df;if(G("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&Iw();Jw(a,b);new Fw(function(){Kw("mouse",100)})}}
function Jw(a,b){var c=window;a=a===void 0?!1:a;b=b===void 0?!0:b;Cw(c.document,"keydown",Iw);Cw(c.document,"keyup",Iw);Cw(c.document,"mousedown",Iw);Cw(c.document,"mouseup",Iw);a?Cw(c,"touchmove",function(){Kw("touchmove",200)},{passive:!0}):(Cw(c,"resize",function(){Kw("resize",200)}),b&&Cw(c,"scroll",function(){Kw("scroll",200)}));
Cw(c.document,"touchstart",Iw,{passive:!0});Cw(c.document,"touchend",Iw,{passive:!0})}
function Kw(a,b){Gw[a]||(Gw[a]=!0,yn.sa(function(){Iw();Gw[a]=!1},b))}
function Iw(){G("_lact",window)==null&&Hw();var a=Date.now();E("_lact",a,window);G("_fact",window)==-1&&E("_fact",a,window);(a=G("ytglobal.ytUtilActivityCallback_"))&&a()}
function Lw(){var a=G("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Mw=D.ytPubsubPubsubInstance||new On,Nw=D.ytPubsubPubsubSubscribedKeys||{},Ow=D.ytPubsubPubsubTopicToKeys||{},Pw=D.ytPubsubPubsubIsSynchronous||{};function Qw(a,b){var c=Rw();if(c&&b){var d=c.subscribe(a,function(){function e(){Nw[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Pw[a]?e():Iq(e,0)}catch(g){pq(g)}},void 0);
Nw[d]=!0;Ow[a]||(Ow[a]=[]);Ow[a].push(d);return d}return 0}
function Sw(a){var b=Rw();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Tb(a,function(c){b.unsubscribeByKey(c);delete Nw[c]}))}
function Tw(a,b){var c=Rw();c&&c.publish.apply(c,arguments)}
function Uw(a){var b=Rw();if(b)if(b.clear(a),a)Vw(a);else for(var c in Ow)Vw(c)}
function Rw(){return D.ytPubsubPubsubInstance}
function Vw(a){Ow[a]&&(a=Ow[a],Tb(a,function(b){Nw[b]&&delete Nw[b]}),a.length=0)}
On.prototype.subscribe=On.prototype.subscribe;On.prototype.unsubscribeByKey=On.prototype.wc;On.prototype.publish=On.prototype.yb;On.prototype.clear=On.prototype.clear;E("ytPubsubPubsubInstance",Mw);E("ytPubsubPubsubTopicToKeys",Ow);E("ytPubsubPubsubIsSynchronous",Pw);E("ytPubsubPubsubSubscribedKeys",Nw);var Ww=Symbol("injectionDeps");function Xw(a){this.name=a}
Xw.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Yw(a){this.key=a}
function Zw(){this.i=new Map;this.j=new Map;this.h=new Map}
function $w(a,b){a.i.set(b.nc,b);var c=a.j.get(b.nc);if(c)try{c.Xc(a.resolve(b.nc))}catch(d){c.xj(d)}}
Zw.prototype.resolve=function(a){return a instanceof Yw?ax(this,a.key,[],!0):ax(this,a,[])};
function ax(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.ze!==void 0)var e=d.ze;else if(d.Hg)e=d[Ww]?bx(a,d[Ww],c):[],e=d.Hg.apply(d,A(e));else if(d.Gd){e=d.Gd;var f=e[Ww]?bx(a,e[Ww],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Fj||a.h.set(b,e);return e}
function bx(a,b,c){return b?b.map(function(d){return d instanceof Yw?ax(a,d.key,c,!0):ax(a,d,c)}):[]}
;var cx;function dx(){cx||(cx=new Zw);return cx}
;var ex=window;function fx(){var a,b;return"h5vcc"in ex&&((a=ex.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=ex.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in ex&&ex.performance.mark&&ex.performance.measure?2:0}
function gx(a){var b=fx();switch(b){case 1:ex.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:ex.performance.mark(a+"-start");break;case 0:break;default:Eb(b,"unknown trace type")}}
function hx(a){var b=fx();switch(b){case 1:ex.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";ex.performance.mark(c);ex.performance.measure(a,b,c);break;case 0:break;default:Eb(b,"unknown trace type")}}
;var ix=T("web_enable_lifecycle_monitoring")&&fx()!==0,jx=T("web_enable_lifecycle_monitoring");function kx(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function lx(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?xs():d;this.j=c;this.scheduler=d;this.i=new Ml;this.h=a;for(a={ob:0};a.ob<this.h.length;a={Tc:void 0,ob:a.ob},a.ob++)a.Tc=this.h[a.ob],c=function(e){return function(){e.Tc.qd();b.h[e.ob].Vc=!0;b.h.every(function(f){return f.Vc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Tc),d=this.scheduler.Xa(c,d),this.h[a.ob]=Object.assign({},a.Tc,{qd:c,
jobId:d})}
function mx(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Vc||(a.scheduler.ta(c.jobId),a.scheduler.Xa(c.qd,10))}
lx.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Vc||this.scheduler.ta(b.jobId),b.Vc=!0;this.i.resolve()};
lx.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function nx(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};ix&&gx(this.state)}
n=nx.prototype;n.install=function(a){this.plugins.push(a);return this};
n.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
n.transition=function(a,b){var c=this;ix&&hx(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(mx(this.j),this.j=void 0);ox(this,a,b);this.state=a;ix&&gx(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(px(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function px(a,b){var c=b.filter(function(e){return qx(a,e)===10}),d=b.filter(function(e){return qx(a,e)!==10});
return a.B.Ej?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.hg.apply(a,[c].concat(A(e))),2);a.re.apply(a,[d].concat(A(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.ig.apply(a,[c].concat(A(e)));a.re.apply(a,[d].concat(A(e)))}}
n.ig=function(a){for(var b=C.apply(1,arguments),c=xs(),d=y(a),e=d.next(),f={};!e.done;f={fc:void 0},e=d.next())f.fc=e.value,c.Vb(function(g){return function(){rx(g.fc.name);sx(function(){return g.fc.callback.apply(g.fc,A(b))});
tx(g.fc.name)}}(f))};
n.hg=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=xs(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.v(0);f.eb=e.value;f.xc=void 0;g=function(k){return function(){rx(k.eb.name);var l=sx(function(){return k.eb.callback.apply(k.eb,A(b))});
Ee(l)?k.xc=T("web_lifecycle_error_handling_killswitch")?l.then(function(){tx(k.eb.name)}):l.then(function(){tx(k.eb.name)},function(m){kx(m);
tx(k.eb.name)}):tx(k.eb.name)}}(f);
c.Vb(g);return f.xc?h.yield(f.xc,3):h.v(3)}f={eb:void 0,xc:void 0};e=d.next();return h.v(2)})};
n.re=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{qd:function(){rx(e.name);sx(function(){return e.callback.apply(e,A(b))});
tx(e.name)},
priority:qx(c,e)}});
d.length&&(this.j=new lx(d))};
function qx(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function rx(a){ix&&a&&gx(a)}
function tx(a){ix&&a&&hx(a)}
function ox(a,b,c){jx&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(nx.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function sx(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){kx(b)}}
;function ux(a){nx.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var vx;v(ux,nx);ux.prototype.i=function(a,b){var c=this;this.h=Qr(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
ux.prototype.u=function(a,b){this.h&&(yn.ta(this.h),this.h=null);a(b==null?void 0:b.event)};
function wx(){vx||(vx=new ux);return vx}
;var xx=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return xx});function yx(){this.store={};this.h={}}
yx.prototype.storePayload=function(a,b){a=zx(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
yx.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ax(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
yx.prototype.extractMatchingEntries=function(a){a=Ax(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
yx.prototype.getSequenceCount=function(a){a=Ax(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ax(a,b){var c=zx(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&zx(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Bx(b.auth,g[0])){var h=b.isJspb;Bx(h===void 0?"undefined":h?"true":"false",g[1])&&Bx(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Bx(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Bx(a,b){return a===void 0||a==="undefined"?!0:a===b}
yx.prototype.getSequenceCount=yx.prototype.getSequenceCount;yx.prototype.extractMatchingEntries=yx.prototype.extractMatchingEntries;yx.prototype.smartExtractMatchingEntries=yx.prototype.smartExtractMatchingEntries;yx.prototype.storePayload=yx.prototype.storePayload;function zx(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Cx(a,b){if(a)return a[b.name]}
;var Dx=new Xw("FinchConfigManagerService");var Ex=O("initial_gel_batch_timeout",2E3),Fx=O("gel_queue_timeout_max_ms",6E4),Gx=O("gel_min_batch_size",5),Hx=void 0;function Ix(){this.o=this.h=this.i=0;this.j=!1}
var Jx=new Ix,Kx=new Ix,Lx=new Ix,Mx=new Ix,Nx,Ox=!0,Px=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Px);var Qx={};function Rx(){var a=G("yt.logging.ims");a||(a=new yx,E("yt.logging.ims",a));return a}
function Sx(a,b){if(a.endpoint==="log_event"){Tx(a);var c=Ux(a),d=Vx(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=Tv[d||""];var f,g,h,k=dx().resolve(new Yw(tu))==null?void 0:(f=uu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Wx(e.tier);if(k===400){Xx(a,b);return}}Qx[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Rx().storePayload(c,a.payload);Yx(b,c,d==="gelDebuggingEvent")}}
function Yx(a,b,c){function d(){Zx({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(Hx=new a);a=O("tvhtml5_logging_max_batch_ads_fork")||O("tvhtml5_logging_max_batch")||O("web_logging_max_batch")||100;var f=W(),g=$x(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Rx().getSequenceCount(b));c>=1E3?d():c>=a?Nx||(Nx=ay(function(){d();Nx=void 0},0)):f-h>=10&&(by(e,b.tier),g.o=f)}
function Xx(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Rx().storePayload({isJspb:!1},a.payload);Tx(a);var c=Ux(a),d=new Map;d.set(c,[a.payload]);var e=Vx(a.payload)||"";b&&(Hx=new b);return new Gk(function(f,g){Hx&&Hx.isReady()?cy(d,Hx,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Ux(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Px[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Zx(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Gk(function(e,f){var g=$x(c,d),h=g.j;g.j=!1;dy(g.i);dy(g.h);g.h=0;Hx&&Hx.isReady()?d===void 0&&T("enable_web_tiered_gel")?ey(e,f,a,b,c,300,h):ey(e,f,a,b,c,d,h):(by(c,d),e())})}
function ey(a,b,c,d,e,f,g){var h=Hx;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Rx().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Rx().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Qx)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Rx().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Rx().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Qx[l];cy(k,h,a,b,c,!1,g)}
function by(a,b){function c(){Zx({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=$x(a,b),e=d===Mx||d===Lx?5E3:Fx;T("web_gel_timeout_cap")&&!d.h&&(e=ay(function(){c()},e),d.h=e);
dy(d.i);e=S("LOGGING_BATCH_TIMEOUT",O("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Ox&&(e=Ex);e=ay(function(){O("gel_min_batch_size")>0?Rx().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Gx&&c():c()},e);
d.i=e}
function cy(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={vd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,zd:void 0,yd:void 0},m=a.next()){var p=y(m.value);m=p.next().value;p=p.next().value;g.batchRequest=Ni({context:Au(b.config_||zu())});if(!Oa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Px[m])&&
fy(g.batchRequest,m,p);delete Px[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";gy(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.zd=function(r){T("start_client_gcf")&&yn.sa(function(){return B(function(t){return t.yield(hy(r),0)})});
k--;k||c()};
g.vd=0;g.yd=function(r){return function(){r.vd++;if(e.bypassNetworkless&&r.vd===1)try{tv(b,l,r.batchRequest,iy({writeThenSend:!0},r.dangerousLogToVisitorSession,r.zd,r.yd,f)),Ox=!1}catch(t){pq(t),d()}k--;k||c()}}(g);
try{tv(b,l,g.batchRequest,iy(e,g.dangerousLogToVisitorSession,g.zd,g.yd,f)),Ox=!1}catch(r){pq(r),d()}}}
function iy(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Vi:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};jy()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function gy(a,b,c){jy()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),kq("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function fy(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Tx(a){var b=Mq("il_payload_scraping")==="enable_il_payload_scraping";if(!G("yt.logging.transport.enableScrapingForTest"))if(b)xx=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",xx),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),E("yt.logging.transport.scrapeClientEvent",
!0);else return;b=G("yt.logging.transport.scrapedPayloadsForTesting");var c=G("yt.logging.transport.payloadToScrape"),d=G("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",b)}
function jy(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function ay(a,b){return T("transport_use_scheduler")===!1?Iq(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Qr(function(){if(wx().currentState==="none")a();else{var c={};wx().install((c.none={callback:a},c))}},b):Qr(a,b)}
function dy(a){T("transport_use_scheduler")?yn.ta(a):window.clearTimeout(a)}
function hy(a){var b,c,d,e,f,g,h,k,l,m,p,r,t,x,z;return B(function(w){if(w.h==1)return d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Cx(d,Mp),g=(f=d)==null?void 0:f.hotHashData,h=Cx(d,Lp),l=(k=d)==null?void 0:k.coldHashData,(m=dx().resolve(new Yw(tu)))?g?e?w.yield(vu(m,g,e),3):w.yield(vu(m,g),3):w.v(3):w.v(2);if(w.h!=2)return l?h?w.yield(wu(m,l,h),2):w.yield(wu(m,l),2):w.v(2);r=(p=d)==null?void 0:p.rawFinchStaticConfigGroup;x=(t=d)==null?void 0:t.finchStaticHashData;
if(!x)return r&&qq(new U("Finch config data is present, but hash is missing.")),w.return();z=dx().resolve(new Yw(Dx));return z?w.yield(z.uj({config:r||{},Xi:x||""}),0):((r||x)&&qq(new U("FinchConfigManagerService is not present, but Finch config data is present.")),w.v(0))})}
function $x(a,b){b=b===void 0?200:b;return a?b===300?Mx:Kx:b===300?Lx:Jx}
function Vx(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Tv[b])return b}
function Wx(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var ky=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",ky);
function ly(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Lw();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,ky[b]=b in ky?ky[b]+1:0,a.sequence={index:ky[b],groupKey:b},d.endOfSequence&&delete ky[d.sequenceGroup]);T("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
Xx:Sx)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function Hs(a,b,c){c=c===void 0?{}:c;var d=uw;S("ytLoggingEventsDefaultDisabled",!1)&&uw===uw&&(d=null);ly(a,b,d,c)}
;var my=new Set,ny=0,oy=0,py=0,qy=[],ry=[],sy=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ty(){Tb(S("ERRORS")||[],function(a){uy.apply(null,a)});
kq("ERRORS",[])}
function Gs(a){uy(a)}
function vy(a){uy(a,"WARNING")}
function wy(a){a instanceof Error?uy(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",vy(a))}
function xy(a,b,c,d,e,f){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=lq("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=h,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.We)f||(f={}),f.componentStack=m}f&&yy(e,f);g?uy(e):vy(e)}}
function uy(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a){a.hasOwnProperty("level")&&a.level&&(b=a.level);if(T("console_log_js_exceptions")||["test","dev","autopush","staging"].includes(S("SERVER_VERSION")))d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),
a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a);if(!(ny>=5)){d=[];e=y(ry);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(w){}}d=[].concat(A(qy),A(d));var k=cc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";
k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=or(a.args[r],"params."+r,c,p),p>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var x="params."+r,z=qr(t[r]);c[x]=z;p+=x.length+z.length;if(p>500)break}}else c.params=qr(t)}if(d.length)for(r=0;r<d.length&&!(p=or(d[r],"params.context."+r,c,p),p>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=
navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=jr();c=y(a.fb);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.qj)){a=d.weight;break a}a=y(a.Za);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=y(dr);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Sc[r.name])for(e=
y(c.Sc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.ud(f);break}r.params||(r.params={});a=jr();r.params["params.errorServiceSignature"]="msg="+a.fb.length+"&cb="+a.Za.length;r.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
(new Qi(Ri,"sample")).constructor!==Qi&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!my.has(r.message)){if(g)zy(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(lr.yb("handleError",r),T("record_app_crashed_web")&&py===0&&r.sampleWeight===1&&(py++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),
Hs("appCrashed",g)),oy++):b==="WARNING"&&lr.yb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(sy);for(c=a.next();!c.done;c=a.next())if(Ns(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=
Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!lq("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=
e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));(d=S("PLAYER_CLIENT_VERSION"))&&h.kvPairs.push({key:"client.player.version",value:d});h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Hs("clientError",
h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Zx(void 0,void 0,!1))}T("suppress_error_204_logging")||zy(b,r)}try{my.add(r.message)}catch(w){}ny++}}}}
function zy(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=S("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b);(c=S("PLAYER_CLIENT_VERSION"))&&(a.postParams["client.player.version"]=c)}Vq(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function yy(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function Ay(){this.register=new Map}
function By(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.je("ABORTED")}
Ay.prototype.clear=function(){By(this);this.register.clear()};
var Cy=new Ay;var Dy=Date.now().toString();
function Ey(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Dy)for(a=1,b=0;b<Dy.length;b++)d[a%16]^=d[(a-1)%16]/4^Dy.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Fy,Gy=D.ytLoggingDocDocumentNonce_;Gy||(Gy=Ey(),E("ytLoggingDocDocumentNonce_",Gy));Fy=Gy;function Hy(a){this.h=a}
n=Hy.prototype;n.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
n.getAsJspb=function(){var a=new Op;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&eg(a,2,kf(this.h.veType)),this.h.veCounter!==void 0&&eg(a,6,kf(this.h.veCounter)),this.h.elementIndex!==void 0&&eg(a,3,kf(this.h.elementIndex)),this.h.isCounterfactual&&eg(a,5,ff(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();sg(a,Op,7,b)}this.h.youtubeData!==void 0&&sg(a,Np,8,this.h.jspbYoutubeData);return a};
n.toString=function(){return JSON.stringify(this.getAsJson())};
n.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
n.getLoggingDirectives=function(){return this.h.loggingDirectives};function Iy(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function Jy(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},kq("client-screen-nonce-store",c));c[b]=a}
function Ky(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ly(a){return S(Ky(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",Ly);function My(){var a=S("csn-to-ctt-auth-info");a||(a={},kq("csn-to-ctt-auth-info",a));return a}
function Ny(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Oy(a){a=Iy(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Oy);function Py(a,b,c){var d=My();(c=Oy(c))&&delete d[c];b&&(d[a]=b)}
function Qy(a){return My()[a]}
E("yt_logging_screen.getCttAuthInfo",Qy);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Iy(c)||b!==S(Ky(c)))if(Py(a,d,c),Jy(a,c),kq(Ky(c),b),b=function(){setTimeout(function(){a&&Hs("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Fy,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Ry(){var a=Mi(Sy),b;return(new Gk(function(c,d){a.onSuccess=function(e){Gq(e)?c(new Ty(e)):d(new Uy("Request failed, status="+Hq(e),"net.badstatus",e))};
a.onError=function(e){d(new Uy("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Uy("Request timed out","net.timeout",e))};
b=Vq("//googleads.g.doubleclick.net/pagead/id",a)})).cd(function(c){if(c instanceof Pk){var d;
(d=b)==null||d.abort()}return Lk(c)})}
function Uy(a,b,c){ib.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Uy,ib);function Ty(a){this.xhr=a}
;function Vy(){this.Z=0;this.h=null}
Vy.prototype.then=function(a,b,c){return this.Z===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Wy(a):this.Z===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Xy(a):this};
Vy.prototype.getValue=function(){return this.h};
Vy.prototype.isRejected=function(){return this.Z==2};
Vy.prototype.$goog_Thenable=!0;function Xy(a){var b=new Vy;a=a===void 0?null:a;b.Z=2;b.h=a===void 0?null:a;return b}
function Wy(a){var b=new Vy;a=a===void 0?null:a;b.Z=1;b.h=a===void 0?null:a;return b}
;function Yy(a){var b=S("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(nc(a)));return a}
function Zy(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=Aq(a,b||{},!1)}
function $y(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Bq(a)?"same-origin":"cors",credentials:Bq(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function az(){return ui()||(Ad||Bd)&&Ns("applewebkit")&&!Ns("version")&&(!Ns("safari")||Ns("gsa/"))||zd&&Ns("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function bz(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function cz(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Sp)if(Sp[d]==c.embeddedPlayerMode){b=Sp[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function dz(a){ib.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ez;this.isTimeout=a instanceof Uy&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Pk}
v(dz,ib);dz.prototype.name="BiscottiError";function ez(){ib.call(this,"Biscotti ID is missing from server")}
v(ez,ib);ez.prototype.name="BiscottiMissingError";var Sy={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},fz=null;function gz(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!az())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Ki(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(cz(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function dq(){var a=gz();if(a!==void 0)return Lk(a);fz||(fz=Ry().then(hz).cd(function(b){return iz(2,b)}));
return fz}
function hz(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new ez;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new ez;a=a.id;eq(a);fz=Wy(a);jz(18E5,2);return a}
function iz(a,b){b=new dz(b);eq("");fz=Xy(b);a>0&&jz(12E4,a-1);throw b;}
function jz(a,b){Iq(function(){Ry().then(hz,function(c){return iz(b,c)}).cd(Ek)},a)}
function kz(){try{var a=G("yt.ads.biscotti.getId_");return a?a():dq()}catch(b){return Lk(b)}}
;var Ob=pa(["data-"]);function lz(a){a&&(a.dataset?a.dataset[mz()]="true":Pb(a))}
function nz(a){return a?a.dataset?a.dataset[mz()]:a.getAttribute("data-loaded"):null}
var oz={};function mz(){return oz.loaded||(oz.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function pz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Mi(b);this.assets=a.assets||{};this.attrs=a.attrs||Mi(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
pz.prototype.clone=function(){var a=new pz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Na(c)=="object"?a[b]=Mi(c):a[b]=c}return a};var qz=["att/get"],rz=["share/get_share_panel"],sz=["share/get_web_player_share_panel"],tz=["feedback"],uz=["notification/modify_channel_preference"],vz=["browse/edit_playlist"],wz=["subscription/subscribe"],xz=["subscription/unsubscribe"];var yz=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",yz);function zz(a){fq(yz,arguments)}
;function Az(a,b,c){Bz(a,b,c===void 0?null:c)}
function Cz(a){a=Dz(a);var b=document.getElementById(a);b&&(Uw(a),b.parentNode.removeChild(b))}
function Ez(a,b){a&&b&&(a=""+Sa(b),(a=Fz[a])&&Sw(a))}
function Bz(a,b,c){c=c===void 0?null:c;var d=Dz(typeof a==="string"?a:a.toString()),e=document.getElementById(d),f=e&&nz(e),g=e&&!f;f?b&&b():(b&&(f=Qw(d,b),b=""+Sa(b),Fz[b]=f),g||(e=Gz(a,d,function(){nz(e)||(lz(e),Tw(d),Iq(function(){Uw(d)},0))},c)))}
function Gz(a,b,c,d){d=d===void 0?null:d;var e=Ti("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,typeof a==="string"?Jp(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Dz(a){var b=document.createElement("a");Db(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ic(a)}
var Fz={};function Hz(a){var b=Iz(a),c=document.getElementById(b),d=c&&nz(c);d||c&&!d||(c=Jz(a,b,function(){if(!nz(c)){lz(c);Tw(b);var e=Ya(Uw,b);Iq(e,0)}}))}
function Jz(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jp(a);Rb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Iz(a){var b=Ti("A");Db(b,new wb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ic(a)}
;function Kz(a){var b=C.apply(1,arguments);if(!Lz(a)||b.some(function(d){return!Lz(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Mz(a,c.value)}
function Mz(a,b){for(var c in b)if(Lz(b[c])){if(c in a&&!Lz(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Mz(a[c],b[c])}else if(Nz(b[c])){if(c in a&&!Nz(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Oz(a[c],b[c])}else a[c]=b[c];return a}
function Oz(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Lz(c)?a.push(Mz({},c)):Nz(c)?a.push(Oz([],c)):a.push(c);return a}
function Lz(a){return typeof a==="object"&&!Array.isArray(a)}
function Nz(a){return typeof a==="object"&&Array.isArray(a)}
;var Pz="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Qz(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=lc(window.location.href);e&&d.push(e);e=lc(a);if(Sb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Db(d,a),a=d.href)if(a=nc(a),a=oc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Oy()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Rz(a,b,f)}else Rz(a,b)}
function Rz(a,b,c){a=Sz(a);b=b?rc(b):"";c=c||5;az()&&wr(a,b,c)}
function Sz(a){for(var b=y(Pz),c=b.next();!c.done;c=b.next())a=wc(a,c.value);return"ST-"+ic(a).toString(36)}
;function Tz(a){for(var b=0,c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;function Uz(a){Gu.call(this,1,arguments);this.csn=a}
v(Uz,Gu);var Pu=new Hu("screen-created",Uz),Vz=[],Wz=0,Xz=new Map,Yz=new Map,Zz=new Map;
function $z(a,b,c,d,e,f){e=e===void 0?!1:e;f=f===void 0?{}:f;Object.assign(f,aA({cttAuthInfo:Qy(b)||void 0},b));for(var g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Ii(k)||!k.trackingParams&&!k.veType)&&vy(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=bA(h,b);if(k.veType&&!Yz.has(l)&&!Zz.has(l)&&!e){if(!T("il_attach_cache_limit")||Xz.size<1E3){Xz.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Xz.size>1E3&&vy(new U("IL Attach cache exceeded limit"))}h=
bA(c,b);Xz.has(h)?cA(c,b):Zz.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Vb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?dA("visualElementAttached",f,c):a?ly("visualElementAttached",c,a,f):Hs("visualElementAttached",c,f)}
function dA(a,b,c){Vz.push({Zf:a,payload:c,jj:void 0,options:b});Wz||(Wz=Qu())}
function Ru(a){if(Vz){for(var b=y(Vz),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Hs(c.Zf,c.payload,c.options));Vz.length=0}Wz=0}
function bA(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function cA(a,b){a=bA(a,b);if(Xz.has(a)){b=Xz.get(a)||[];var c=c===void 0?{}:c;$z(b[0],b[1],b[2],[b[3]],!0,c);Xz.delete(a)}}
function aA(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function eA(){}
eA.prototype.flush=function(a,b){a=a===void 0?[]:a;b=b===void 0?!1:b;if(T("enable_client_streamz_web")){a=y(a);for(var c=a.next();!c.done;c=a.next())c=ji(c.value),this.h&&sg(c,ei,2,this.h),c={serializedIncrementBatch:Fd(c.j())},Hs("streamzIncremented",c,{sendIsolatedPayload:b})}};
function hn(){}
v(hn,eA);function fA(a){var b=new ei;var c=new bi;c=yg(c,1,"botguard");a=yg(c,2,a);a=rg(a,bi);mg(b,1,fi,a);a&&!se(a)&&$f(b.D);this.h=b}
v(fA,eA);var gn,gA=new Map;function hA(){try{return!!self.localStorage}catch(a){return!1}}
;function iA(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function jA(a){if(hA()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=iA(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function kA(){if(!hA())return!1;var a=Or(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=iA(c.value),c!==void 0&&c!==a)return!0;return!1}
;function lA(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function mA(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");kq("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=nA;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function oA(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))mA();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))mA();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof eo?a.clone():new eo(a)).h.endsWith("/youtubeoptions");b&&mA()}if(S("LOGGED_IN",!0)&&lA()){b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=lc(window.location.href);c&&b.push(c);c=lc(a);Sb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=nc(a),(b=oc(b))?(b=Sz(b),b=(b=xr(b)||null)?xq(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;lA()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Qz(a,b)}}
var nA=null;function pA(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Qz(a,b);if(c)return!1;oA(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=sc(a,e);oA(b);a=void 0;a=a===void 0?Ab:a;a:if(f=b+f,a=a===void 0?Ab:a,!(f instanceof wb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof yb&&c.If(f)){f=new wb(f);break a}f=void 0}g=g.location;f=Cb(f||xb);f!==void 0&&(g.href=f);return!0}
;function qA(a){if(Ki(S("PLAYER_VARS",{}))!="1"){a&&cq();try{kz().then(function(){},function(){}),Iq(qA,18E5)}catch(b){pq(b)}}}
;function rA(){this.h={}}
n=rA.prototype;n.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
n.get=function(a){if(this.contains(a))return this.h[a]};
n.set=function(a,b){this.h[a]=b};
n.ec=function(){return Object.keys(this.h)};
n.remove=function(a){delete this.h[a]};function sA(){this.mappings=new rA}
sA.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
sA.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Eb(b)}}return a};
new sA;var tA=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function uA(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=mc(a);if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=yq(a).theme;return tA.get(c)||null}catch(d){}return null}
;function vA(a){var b=new Il;if(a.interpreterJavascript){var c=Hp(a.interpreterJavascript);c=Jb(c).toString();var d=new Gl;yg(d,6,c);sg(b,Gl,1,d,xe)}else a.interpreterUrl&&(c=Ip(a.interpreterUrl),c=qb(c).toString(),d=new Hl,yg(d,4,c),sg(b,Hl,2,d,xe));a.interpreterHash&&lg(b,3,Af(a.interpreterHash),xe);a.program&&lg(b,4,Af(a.program),xe);a.globalName&&lg(b,5,Af(a.globalName),xe);a.clientExperimentsStateBlob&&lg(b,7,Af(a.clientExperimentsStateBlob),xe);return b}
function wA(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
function xA(a){return Number(a.t)||7200}
;function yA(){var a=a===void 0?window:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Bc(),2);b=a;c=b.bgevmc;if(!c)throw Error("BGE Controls not exposed");return d.return({pause:function(){c.p()},
resume:function(){c.r()},
checkForRefresh:function(){return c.cr()}})})}
function Cc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=globalThis.performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function zA(a){window.bgens=a}
function AA(a){this.h=a}
AA.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
AA.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
AA.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function BA(){return new Promise(function(a){var b=window;b.ntpevasrs!==void 0?a(new AA(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new AA(c))}))})}
;var CA=pa(["https://static.doubleclick.net/instream/ad_status.js"]),DA=[],EA=function(a){var b=C.apply(1,arguments);if(b.length===0)return pb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return pb(c)}(CA),FA=!1;
function GA(){if(az()){var a=S("PLAYER_VARS",{});if(Ki(a)!="1"&&!cz(a)){var b=function(){FA=!0;"google_ad_status"in window?kq("DCLKSTAT",1):kq("DCLKSTAT",2)};
try{var c=Gb(document);Az(EA,b,c)}catch(d){}DA.push(yn.sa(function(){if(!(FA||"google_ad_status"in window)){try{Ez(EA.toString(),b)}catch(d){}FA=!0;kq("DCLKSTAT",3)}},5E3))}}}
function HA(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function X(a){this.h=a}
[new X("b.f_"),new X("j.s_"),new X("r.s_"),new X("e.h_"),new X("i.s_"),new X("s.t_"),new X("p.h_"),new X("s.i_"),new X("f.i_"),new X("a.b_"),new X("a.o_"),new X("g.o_"),new X("p.i_"),new X("p.m_"),new X("n.k_"),new X("i.f_"),new X("a.s_"),new X("m.c_"),new X("n.h_"),new X("o.p_"),new X("m.p_"),new X("o.a_"),new X("d.p_"),new X("e.i_")].reduce(function(a,b){a[b.h]=b;return a},{});function IA(a){return G("ytcsi."+(a||"")+"data_")||JA(a)}
function KA(){var a=IA();a.info||(a.info={});return a.info}
function LA(a){a=IA(a);a.metadata||(a.metadata={});return a.metadata}
function MA(a){a=IA(a);a.tick||(a.tick={});return a.tick}
function NA(a){a=IA(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function OA(a){a=NA(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function PA(a){var b=IA(a).nonce;b||(b=Ey(),IA(a).nonce=b);return b}
function JA(a){var b={tick:{},info:{}};E("ytcsi."+(a||"")+"data_",b);return b}
;function QA(){var a=G("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function RA(a){a=a||"";var b=SA();if(b[a])return b[a];var c=QA(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function SA(){var a=G("ytcsi.reference");if(a)return a;QA();return G("ytcsi.reference")}
;var Y={},TA=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.channel_activity="LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",Y.channels="LATENCY_ACTION_CHANNELS",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
Y.editor="LATENCY_ACTION_EDITOR",Y.embed="LATENCY_ACTION_EMBED",Y.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.favorites="LATENCY_ACTION_FAVORITES",Y.home="LATENCY_ACTION_HOME",Y.inboarding="LATENCY_ACTION_INBOARDING",Y.landing="LATENCY_ACTION_LANDING",Y.learning="LATENCY_ACTION_LEARNING",Y.learning_journey_browse=
"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",Y.learning_journey_watch="LATENCY_ACTION_LEARNING_JOURNEY_WATCH",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.management="LATENCY_ACTION_MANAGEMENT",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.notification_settings="LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",Y.onboarding="LATENCY_ACTION_ONBOARDING",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Y.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",Y.prebuffer="LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.projects="LATENCY_ACTION_PROJECTS",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.premium=
"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.privacy_policy="LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",Y.review="LATENCY_ACTION_REVIEW",Y.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",Y.store="LATENCY_ACTION_STORE",Y.supervision_dashboard=
"LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",Y.supervision_settings_dashboard="LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",Y.time_management="LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",Y.update_profile="LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",Y.viewing_permissions="LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",Y.shorts_settings="LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",Y.privacy_settings="LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",Y.tenx="LATENCY_ACTION_TENX",
Y.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]="LATENCY_ACTION_WATCH",Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch=
"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",Y.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",Y);function UA(a){return TA[a]||"LATENCY_ACTION_UNKNOWN"}
;function VA(a,b){Gu.call(this,1,arguments);this.timer=b}
v(VA,Gu);var WA=new Hu("aft-recorded",VA);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var XA=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",XA);function YA(){this.h=0}
function ZA(){YA.instance||(YA.instance=new YA);return YA.instance}
YA.prototype.tick=function(a,b,c,d){$A(this,"tick_"+a+"_"+b)||Hs("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
YA.prototype.info=function(a,b,c){var d=Object.keys(a).join("");$A(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Hs("latencyActionInfo",a,{cttAuthInfo:c}))};
YA.prototype.jspbInfo=function(){};
YA.prototype.span=function(a,b,c){var d=Object.keys(a).join("");$A(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Hs("latencyActionSpan",a,{cttAuthInfo:c}))};
function $A(a,b){XA[b]=XA[b]||{count:0};var c=XA[b];c.count++;c.time=W();a.h||(a.h=Qr(function(){var d=W(),e;for(e in XA)XA[e]&&d-XA[e].time>6E4&&delete XA[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||vy(c)),!0):!1}
;var aB=window;function bB(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function cB(){var a;if(T("csi_use_performance_navigation_timing")){var b,c,d,e=Z==null?void 0:(a=Z.getEntriesByType)==null?void 0:(b=a.call(Z,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=dB(e.requestStart),e.responseEnd=dB(e.responseEnd),e.redirectStart=dB(e.redirectStart),e.redirectEnd=dB(e.redirectEnd),e.domainLookupEnd=dB(e.domainLookupEnd),e.connectStart=dB(e.connectStart),e.connectEnd=dB(e.connectEnd),e.responseStart=dB(e.responseStart),
e.secureConnectionStart=dB(e.secureConnectionStart),e.domainLookupStart=dB(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Z.timing)):Z.timing;return a}
function dB(a){return Math.round(eB()+a)}
function eB(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=aB.performance||aB.mozPerformance||aB.msPerformance||aB.webkitPerformance||new bB;var fB=!1,gB=!1,hB={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},iB=Xa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||Ek,Z);function jB(a,b){kB("_start",a,b)}
function lB(a,b){if(!T("web_csi_action_sampling_enabled")||!IA(b).actionDisabled){var c=RA(b||"");Kz(c.info,a);a.loadType&&(c=a.loadType,LA(b).loadType=c);Kz(OA(b),a);c=PA(b);b=IA(b).cttAuthInfo;ZA().info(a,c,b)}}
function mB(){var a,b,c,d;return((d=dx().resolve(new Yw(tu))==null?void 0:(a=uu())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function kB(a,b,c){if(!T("web_csi_action_sampling_enabled")||!IA(c).actionDisabled){var d=PA(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(dx().resolve(new Yw(tu))==null?0:uu())&&!gB&&(gB=!0,kB("gcfl",W(),c));var f,g,h;e=(dx().resolve(new Yw(tu))==null?void 0:(f=uu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=mB();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}f?(e=Tz(d)%e!==0,IA(c).debugTicksExcludedLogged||
(f={},f.debugTicksExcluded=e,lB(f,c)),IA(c).debugTicksExcludedLogged=!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Z.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Z.mark(e);else{f=T("csi_use_performance_navigation_timing")?f-Z.timeOrigin:f-(Z.timeOrigin||Z.timing.navigationStart);try{Z.mark(e,{startTime:f})}catch(k){}}e=RA(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=
f.value,f();e=NA(c);e.gelTicks&&(e.gelTicks[a]=!0);f=MA(c);e=b||W();f[a]=e;f=IA(c).cttAuthInfo;a==="_start"?(a=ZA(),$A(a,"baseline_"+d)||Hs("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):ZA().tick(a,d,b,f);nB(c);return e}}}
function oB(){var a,b=(a=Z.getEntriesByType)==null?void 0:a.call(Z,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;(d=Z.clearMarks)==null||d.call(Z,c.name)}})}
function pB(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ww+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function qB(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function rB(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Gb(document)&&a.setAttribute("nonce",Gb(document));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=eB(),kB("rsf_"+b,c+Math.round(a.fetchStart)),kB("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function sB(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=Ub(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Wb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(kB("wffs",dB(b.startTime)),kB("wffe",dB(b.responseEnd)))}
function tB(a){var b=uB("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=uB(b[d],a);if(e)return e}return NaN}
function vB(a){E("ytglobal.timing"+(a||"")+"ready_",!0)}
function uB(a,b){if(a=MA(b)[a])return typeof a==="number"?a:a[a.length-1]}
function nB(a){var b=uB("_start",a),c=tB(a),d=!fB;b&&c&&d&&(Mu(WA,new VA(Math.round(c-b),a)),fB=!0)}
function wB(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=Xb(a,function(c){return c.name==="first-paint"}))return dB(a.startTime)}var b;
T("csi_use_performance_navigation_timing")?b=Z.getEntriesByType("first-paint")[0].startTime:b=Z.timing.rj;return b?Math.max(0,b):0}
;function xB(a,b){oq(function(){RA("").info.actionType=a;b&&kq("TIMING_AFT_KEYS",b);kq("TIMING_ACTION",a);var c=qB();Object.keys(c).length>0&&lB(c);c={isNavigation:!0,actionType:UA(S("TIMING_ACTION"))};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=UA(d));if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Oy())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=pB();if(d===1||d===-1)c.isVisible=!0;LA();KA();c.loadType="cold";d=KA();var e=cB(),f=eB(),g=S("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(kB("srt",e.responseStart),d.prerender!==1&&jB(f));d=wB();d>0&&kB("fpt",d);d=cB();d.isPerformanceNavigationTiming&&lB({performanceNavigationTiming:!0},void 0);kB("nreqs",d.requestStart,void 0);kB("nress",d.responseStart,void 0);kB("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(kB("nrs",d.redirectStart,void 0),kB("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(kB("ndnss",d.domainLookupStart,
void 0),kB("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(kB("ntcps",d.connectStart,void 0),kB("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=eB()&&d.connectEnd-d.secureConnectionStart>0&&(kB("nstcps",d.secureConnectionStart,void 0),kB("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&sB();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in hB)hB.hasOwnProperty(h)&&(e=hB[h],rB(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=
h.next())c.resourceInfo.push({resourceCache:d.value});lB(c);c=NA();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=OA();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(LA().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=MA();e=NA();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)k in e||typeof d[k]==="number"&&kB(k,uB(k));k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,Kz(c,d),Kz(k,d),d=!0;d&&lB(k)}vB();k=S("TIMING_ACTION");
G("ytglobal.timingready_")&&k&&yB()&&tB()&&nB()})()}
function zB(){var a=a===void 0?{}:a;oq(function(){AB();var b=a.sampleRate;if(!T("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=PA("attestation_challenge_fetch");b=Tz(c)%b!==0}b&&(IA("attestation_challenge_fetch").actionDisabled=!0);RA("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(IA("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);kq("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");oq(jB)(a.startTime,
"attestation_challenge_fetch");b={actionType:UA("attestation_challenge_fetch")};a.nj&&(b.previousAction=UA(S("TIMING_ACTION")));(c=Oy())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);BB(b,"attestation_challenge_fetch");vB("attestation_challenge_fetch")})()}
function AB(){oq(function(){yB("attestation_challenge_fetch")&&CB("aa",void 0,"attestation_challenge_fetch");var a=SA();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;var b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};QA().push(b);a.attestation_challenge_fetch=b;JA("attestation_challenge_fetch");iB();oB()})()}
function yB(a){return oq(function(){return DB("_start",a)})()}
function BB(a,b,c){oq(lB)(a,b,c===void 0?!1:c)}
function CB(a,b,c){return oq(kB)(a,b,c)}
function DB(a,b){return oq(function(){var c=MA(b);return a in c})()}
function EB(a){if(!T("universal_csi_network_ticks"))return"";a=mc(a)||"";for(var b=Object.keys(Eu),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function FB(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=Eu[a];return b?(GB(b),function(){var c=T("universal_csi_network_ticks")?(c=Fu[a])?GB(c):!1:!1;return c}):function(){}}
function GB(a){return oq(function(){if(DB(a))return!1;CB(a,void 0,void 0);return!0})()}
function HB(a){oq(function(){if(!yB("attestation_challenge_fetch")||DB(a,"attestation_challenge_fetch"))return!1;CB(a,void 0,"attestation_challenge_fetch");return!0})()}
function IB(){oq(function(){var a=PA();requestAnimationFrame(function(){setTimeout(function(){a===PA()&&CB("ol",void 0,void 0)},0)})})()}
var JB=window;JB.ytcsi&&(JB.ytcsi.infoGel=BB,JB.ytcsi.tick=CB);function KB(a,b,c){var d=this;this.network=a;this.options=b;this.H=c;this.j=0;this.h=null;this.i=new fn;b.ye?LB(this,MB(this)):b.preload&&LB(this,new Promise(function(e){Qr(function(){e(NB(d))},0)}))}
function MB(a){var b,c,d,e,f,g;return B(function(h){if(h.h==1)return b=D,b.ytAtRC?(c=O("att_init_delay",0),Rr(function(){var k,l;return B(function(m){if(m.h==1){if(!b.ytAtRC)return a.i.la(6,a.j++),m.return();a.i.la(2,a.j++);k=OB(null);return m.yield(a.dc(k),2)}l=m.i;b.ytAtRC&&b.ytAtRC(JSON.stringify(l));m.h=0})},c)):a.i.la(1,a.j++),h.yield(BA(),2);
if(h.h!=3)return d=h.i,d.bindInnertubeChallengeFetcher(function(k){a.i.la(3,a.j++);return a.dc(OB(k))}),d.registerChallengeFetchedCallback(function(k){k=k.challenge;
if(!k)throw Error("BGE_MACR");k={challenge:k,Db:wA(k),vm:e,bgChallenge:new Il};k=Promise.resolve(k);a.h=k}),h.yield(Bc(),3);
e=h.i;f=d.getLatestChallengeResponse();g=f.challenge;if(!g)throw Error("BGE_MACIL");return h.return({challenge:g,Db:wA(g),vm:e,bgChallenge:new Il})})}
KB.prototype.u=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
KB.prototype.o=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&LB(d,NB(d));e=!1;f={};g=function(){var k,l,m,p,r;return B(function(t){switch(t.h){case 1:if(!d.options.cj||!d.options.ye){t.v(2);break}return t.yield(yA(),3);case 3:return k=t.i,t.yield((l=k)==null?void 0:l.checkForRefresh(),2);case 2:return t.yield(d.h,5);case 5:m=t.i;f.challenge=m.challenge;if(!m.vm){"c1a"in m.Db&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");t.v(6);break}p=Object.assign({},{c:m.challenge,e:a},b);
wa(t,7);e=!0;return t.yield(m.vm.snapshot({Ia:p}),9);case 9:(r=t.i)?f.webResponse=r:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";xa(t,6);break;case 7:ya(t),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 6:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var x=m.Db,z={};x.c6a&&(z.reportingStatus=String(Number(x.c)^HA()));x.c6b&&(z.broadSpectrumDetectionResult=String(Number(x.c)^Number(S("CATSTAT",0))));f.adblockReporting=z}return t.return(f)}})};
return h.return(Promise.race([g(),PB(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function OB(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function NB(a){var b,c,d,e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return b=OB(Rl().h),wa(m,2),m.yield(QB(a,b),4);case 4:c=m.i;xa(m,3);break;case 2:return ya(m),vy(Error("Failed to fetch attestation challenge after 5 attempts; not retrying for 24h.")),RB(a,864E5),m.return({challenge:"",Db:{},vm:void 0,bgChallenge:void 0});case 3:d=c.Wf;e=c.Xf;f=xA(e);RB(a,f*1E3);g=void 0;if(!("c1a"in e&&c.bgChallenge)){m.v(5);break}h=vA(c.bgChallenge);wa(m,6);return m.yield(Sl(Rl(),h),8);case 8:xa(m,7);
break;case 6:return k=ya(m),vy(k),m.return({challenge:d,Db:e,vm:g,bgChallenge:h});case 7:return wa(m,9),g=new Ol({challenge:h,Mb:{ra:"aGIf"}}),m.yield(g.Qb,11);case 11:xa(m,5);break;case 9:l=ya(m),vy(l),g=void 0;case 5:return m.return({challenge:d,Db:e,vm:g,bgChallenge:h})}})}
function SB(a,b){var c;return B(function(d){if(d.h==1)return zA(2),wa(d,2),d.yield(a.network.dc(b),4);if(d.h!=2)return(c=d.i)?c.challenge&&!c.bgChallenge?zA(1):zA(4):zA(3),d.return(c);ya(d);zA(3);return d.return(void 0)})}
KB.prototype.dc=function(a){var b=this,c;return B(function(d){c=b.H;if(!c||c.wa())return d.return(SB(b,a));HB("att_pna");return d.return(new Promise(function(e){lk(c,"publicytnetworkstatus-online",function(){SB(b,a).then(e)})}))})};
function TB(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=wA(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Wf:b,Xf:c})}
function QB(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.v(4);break}if(!(d>0)){h.v(5);break}e.Md=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Qr(function(){l(void 0)},k.Md)}}(e)),5);
case 5:return wa(h,7),a.i.la(4,a.j++),h.yield(a.dc(b),9);case 9:return f=h.i,h.return(TB(f));case 7:c=g=ya(h),g instanceof Error&&vy(g);case 8:d++;e={Md:void 0};h.v(2);break;case 4:throw c;}})}
function LB(a,b){a.h=b}
function UB(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=NB(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function RB(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(UB(a),0):(Qr(c,Math.min(e,6E4)),f.v(0))})}
var d=Date.now()+b;c()}
function PB(a,b){return new Promise(function(c){Qr(function(){c(b())},a)})}
;var VB={},WB=(VB.WEB_UNPLUGGED="^unplugged/",VB.WEB_UNPLUGGED_ONBOARDING="^unplugged/",VB.WEB_UNPLUGGED_OPS="^unplugged/",VB.WEB_UNPLUGGED_PUBLIC="^unplugged/",VB.WEB_CREATOR="^creator/",VB.WEB_KIDS="^kids/",VB.WEB_EXPERIMENTS="^experiments/",VB.WEB_MUSIC="^music/",VB.WEB_REMIX="^music/",VB.WEB_MUSIC_EMBEDDED_PLAYER="^music/",VB.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",VB);
function XB(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=WB[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(WB).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function YB(){this.h=ZB.instance}
YB.prototype.dc=function(a){HB("att_fsr");return $B(this.h,a).then(function(b){HB("att_frr");return b})};var aC=new Xw("INNERTUBE_TRANSPORT_TOKEN");function bC(){var a,b,c;return B(function(d){if(d.h==1)return a=dx().resolve(aC),a?d.yield(cC(a),2):(vy(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return vy(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Yi;return d.return(c)}vy(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function dC(){this.h={};if(this.i=zr()){var a=xr("CONSISTENCY");a&&eC(this,{encryptedTokenJarContents:a})}}
dC.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ja.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];eC(this,a)}};
function eC(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&wr("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var fC=window.location.hostname.split(".").slice(-2).join(".");function gC(){this.i=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=hC(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.h=void 0)}
var iC;function jC(){iC=G("yt.clientLocationService.instance");iC||(iC=new gC,E("yt.clientLocationService.instance",iC));return iC}
n=gC.prototype;
n.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.j||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.j||
this.locationPlayabilityToken};
n.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.h=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=hC(this))&&this.localStorage.set("yt-location-playability-token",a,15552E3):wr("YT_CL",JSON.stringify({loctok:a}),15552E3,fC,!0))};
function hC(a){return a.localStorage===void 0?new ys("yt-client-location"):a.localStorage}
n.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.localStorage=hC(this))&&this.localStorage.remove("yt-location-playability-token"):yr("YT_CL");this.j=void 0;this.i!==-1&&(clearTimeout(this.i),this.i=-1)};
n.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.h=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
n.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
n.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function kC(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=S("INNERTUBE_CONTEXT");if(!d)return uy(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Ni(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;Dr();var g="USER_INTERFACE_THEME_LIGHT";Gr(165)?g="USER_INTERFACE_THEME_DARK":Gr(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:uA()||g;e.userInterfaceTheme=f;if(!b){if(f=Lr())e.connectionType=f;T("web_log_effective_connection_type")&&(f=Mr())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=xu())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=yq(D.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=D.location.href,T("kevlar_woffle")&&rr.instance&&(k=rr.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),
e.mainAppWebInfo.webDisplayMode=sr(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=S("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;
break a}catch(na){}l=void 0}l&&(e.timeZone=l)}(l=S("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Nq();dC.instance||(dC.instance=new dC);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:Fi(dC.instance.h)});!T("web_prequest_context_killswitch")&&(l=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=Dr();l=Gr(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?c&&(b=Oy())&&(d.clientScreenNonce=b):!b&&(b=Oy())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=G("yt.mdx.remote.remoteClient_"))d.remoteClient=a;jC().setLocationOnInnerTubeContext(d);try{var m=Cq(),p=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:p};for(var r=y(Object.entries(m)),t=r.next();!t.done;t=r.next()){var x=y(t.value),z=x.next().value,w=x.next().value;m=z;p=w;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+p})}var H,
F;if(((H=d.client)==null?void 0:H.clientName)==="TVHTML5"||((F=d.client)==null?void 0:F.clientName)==="TVHTML5_UNPLUGGED"){var V=S("INNERTUBE_CONTEXT");V.adSignalsInfo&&(d.adSignalsInfo.advertisingId=V.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=V.adSignalsInfo.limitAdTracking)}}catch(na){uy(na)}return d}
;function lC(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));(a=S("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a);return b}
;function mC(a){return function(){return new a}}
;function nC(){}
nC.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?vr:c;var d={context:kC(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+XB(this.j());(e=(f=Cx(a.commandMetadata,Qp))==null?void 0:f.apiUrl)&&(b=e);f=Zy(Yy(b));a=Object.assign({},{command:a},void 0);d={input:f,hb:$y(f),Ja:d,config:a};d.config.Xb?d.config.Xb.identity=c:d.config.Xb={identity:c};return d}c=new U("Error: Failed to create Request from Command.",a);uy(c)};
da.Object.defineProperties(nC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function oC(){}
v(oC,nC);function pC(){}
v(pC,oC);pC.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",hb:$y("/getDatasyncIdsEndpoint","GET"),Ja:{}}};
pC.prototype.j=function(){return[]};
pC.prototype.i=function(){};
pC.prototype.h=function(){};var qC={},rC=(qC.GET_DATASYNC_IDS=mC(pC),qC);var sC="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store manifest player_preload shorts_prefetch".split(" "),tC=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PanelResponse"];
function ZB(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.uc||(a.uc={});a.uc=Object.assign({},rC,a.uc)}
function uC(a,b,c){var d=vC;if(ZB.instance!==void 0){if(c=ZB.instance,a=[d!==c.u,a!==c.fa,b!==c.j,!1,!1,!1,void 0!==c.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else ZB.instance=new ZB(d,a,b,c)}
function cC(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?vr:c;var d=wC(a,b);return d?new Gk(function(e,f){var g,h,k,l,m;return B(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));p.v(0);break}oA(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.ue){m=xC(h.config,l);p.v(4);break}return p.yield(yC(h.config,l),5);case 5:m=p.i;case 4:e(zC(a,h,m)),p.h=
0}})}):Lk(new U("Error: No request builder found for command.",b))}
function $B(a,b){function c(){}
var d="/youtubei/v1/"+XB(qz);var e=e===void 0?{Xb:{identity:vr}}:e;var f=f===void 0?!0:f;c=FB(EB(d));b.context||(b.context=kC(void 0,f));return new Gk(function(g){var h,k,l,m,p;return B(function(r){if(r.h==1)return h=Yy(d),k=Bq(h)?"same-origin":"cors",a.j.ue?(l=xC(e,k),r.v(2)):r.yield(yC(e,k),3);r.h!=2&&(l=r.i);m=Zy(Yy(d));p={input:m,hb:$y(m),Ja:b,config:e};g(zC(a,p,l,c));r.h=0})})}
function AC(a){var b,c,d,e,f,g;return B(function(h){switch(h.h){case 1:if(!((b=a)==null?0:(c=b.Ja)==null?0:c.context)){h.v(0);break}d=a.Ja.context;h.v(3);break;case 3:e=y([]),f=e.next();case 6:if(f.done){h.v(0);break}g=f.value;return h.yield(g.vj(d),7);case 7:f=e.next(),h.v(6)}})}
function BC(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(sC);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function zC(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,p,r,t,x,z,w,H,F,V,na,ka,Qd,Mb,hb,Ra,Ga,Qa,Ev,Fv,Gv,Hv;return B(function(oa){switch(oa.h){case 1:g=(e=b.config)==null?void 0:(f=e.Ij)==null?void 0:f.Hj;oa.v(2);break;case 3:h=oa.i;if(!h||h.isExpired()){oa.v(2);break}k=h.h();if(!T("web_process_response_store_responses")||h.isProcessed()){oa.v(5);break}BC(a,k,b);return oa.yield((void 0).oj(g),5);case 5:return oa.return(Promise.resolve(k));case 2:if((l=a.i)==null||!l.Dj(b.input,b.Ja)){oa.v(7);break}return oa.yield(a.i.lj(b.input,b.Ja),
8);case 8:return m=oa.i,BC(a,m,b),oa.return(m);case 7:return oa.yield(AC(b),9);case 9:return(t=(r=b.config)==null?void 0:r.requestKey)&&a.h.has(t)?p=a.h.get(t):(x=JSON.stringify(b.Ja),H=(w=(z=b.hb)==null?void 0:z.headers)!=null?w:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},H,c)}),F=Object.assign({},b.hb),b.hb.method==="POST"&&(F=Object.assign({},F,{body:x})),((V=b.config)==null?0:V.fg)&&CB(b.config.fg),na=function(){return a.fa.fetch(b.input,F,b.config)},p=na(),t&&a.h.set(t,p)),oa.yield(p,
10);
case 10:(ka=oa.i)&&T("web_streaming_player")&&Array.isArray(ka)&&(ka=ka[0].playerResponse);if(ka&&"error"in ka&&((Qd=ka)==null?0:(Mb=Qd.error)==null?0:Mb.details))for(hb=ka.error.details,Ra=y(hb),Ga=Ra.next();!Ga.done;Ga=Ra.next())Qa=Ga.value,(Ev=Qa["@type"])&&tC.indexOf(Ev)>-1&&(delete Qa["@type"],ka=Qa);t&&a.h.has(t)&&a.h.delete(t);((Fv=b.config)==null?0:Fv.gg)&&CB(b.config.gg);if(ka||(Gv=a.i)==null||!Gv.Wi(b.input,b.Ja)){oa.v(11);break}return oa.yield(a.i.kj(b.input,b.Ja),12);case 12:ka=oa.i;case 11:return BC(a,
ka,b),((Hv=b.config)==null?0:Hv.cg)&&CB(b.config.cg),d(),oa.return(ka||void 0)}})}
function wC(a,b){a:{a=a.u;var c,d=(c=Cx(b,Rp))==null?void 0:c.signal;if(d&&a.uc&&(c=a.uc[d])){var e=c();break a}var f;if((c=(f=Cx(b,Pp))==null?void 0:f.request)&&a.Xe&&(f=a.Xe[c])){e=f();break a}for(e in b)if(a.Qd[e]&&(b=a.Qd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function yC(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Xb)==null?void 0:d.sessionIndex;var h=g.yield;var k=ur({sessionIndex:e});if(!(k instanceof Gk)){var l=new Gk(Ek);Hk(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},lC(b),f)))})}
function xC(a,b){var c;a=a==null?void 0:(c=a.Xb)==null?void 0:c.sessionIndex;c=ur({sessionIndex:a});return Object.assign({},lC(b),c)}
;function CC(){}
v(CC,oC);CC.prototype.j=function(){return wz};
CC.prototype.i=function(a){return Cx(a,bq)||void 0};
CC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(CC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function DC(){}
v(DC,oC);DC.prototype.j=function(){return xz};
DC.prototype.i=function(a){return Cx(a,aq)||void 0};
DC.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(DC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var EC=new Xw("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function FC(a){this.H=a}
v(FC,oC);FC.prototype.j=function(){return rz};
FC.prototype.i=function(a){return Cx(a,Vp)||Cx(a,Wp)||Cx(a,Up)};
FC.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
FC[Ww]=[EC];function GC(){}
v(GC,oC);GC.prototype.j=function(){return tz};
GC.prototype.i=function(a){return Cx(a,Tp)||void 0};
GC.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(GC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function HC(){}
v(HC,oC);HC.prototype.j=function(){return tz};
HC.prototype.i=function(a){return Cx(a,$p)};
HC.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(HC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function IC(){}
v(IC,oC);IC.prototype.j=function(){return uz};
IC.prototype.i=function(a){return Cx(a,Zp)||void 0};
IC.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function JC(){}
v(JC,oC);JC.prototype.j=function(){return vz};
JC.prototype.i=function(a){return Cx(a,Yp)||void 0};
JC.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function KC(){}
v(KC,oC);KC.prototype.j=function(){return sz};
KC.prototype.i=function(a){return Cx(a,Xp)};
KC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function LC(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var MC=D.caches,NC;function OC(a){var b=a.indexOf(":");return b===-1?{ee:a}:{ee:a.substring(0,b),datasyncId:a.substring(b+1)}}
function PC(){return B(function(a){if(NC!==void 0)return a.return(NC);NC=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return wa(d,2),d.yield(MC.open("test-only"),4);case 4:return d.yield(MC.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(NC)})}
function QC(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(PC(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(MC.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=OC(f),h=g.datasyncId,!h||a.includes(h)||b.push(MC.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function RC(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(PC(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Or("cache contains other");return h.yield(MC.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=OC(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function SC(){try{return!!self.sessionStorage}catch(a){return!1}}
;function TC(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function UC(a){if(SC()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=TC(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function VC(){if(!SC())return!1;var a=Or(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=TC(c.value),c!==void 0&&c!==a)return!0;return!1}
;function WC(){bC().then(function(a){a&&(Zt(a),QC(a),jA(a),UC(a))})}
function XC(){var a=new iw;yn.sa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.v(2);break}b=Or("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Zt(h);QC(h);jA(h);UC(h);return g.return()}c=kA();d=VC();return g.yield(RC(),3);case 3:return e=g.i,g.yield($t(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.wa()?WC():lk(a,"publicytnetworkstatus-online",WC),g.h=0}})})}
;function YC(a){return new Promise(function(b){window.setTimeout(b,a)})}
function ZC(a,b,c){this.requestKey=a;this.o=b;this.i=c;this.u=function(){return new XMLHttpRequest};
this.h=void 0;this.j=[]}
ZC.prototype.getLatestChallengeResponse=function(){return this.i};
function nm(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){zB();CB("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new el(9,"Missing fetcher");return h.yield(a.h(b,c),2)}d=h.i;f=(e=d)==null?void 0:e.bgChallenge;if(!f)throw new el(15,"Missing field");a.i=d;a.j.forEach(function(k){k(d)});
g=vA(f);CB("att_fc",void 0,"attestation_challenge_fetch");AB();return h.return(g)})}
function Xm(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=new sj(100,3E5,.25,2),d=void 0;case 2:if(!(c.i<10)){h.v(4);break}wa(h,5);if(!(c.i>0)){h.v(7);break}return h.yield(YC(c.getValue()),7);case 7:return h.yield($C(a,b),9);case 9:return e=h.i,h.return(e);case 5:f=ya(h);f instanceof el?d=f:(g=f instanceof Error?f.message:"Unknown",d=new el(9,g));tj(c);h.v(2);break;case 4:if(d)throw d;throw new el(9,"Unknown error");}})}
function $C(a,b){b=Yl(Zl(new Xl,b),a.requestKey);var c=new Ml,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=function(){if(Gq(d)){var e=tn(d.responseText);c.resolve(e)}else c.reject(new el(cl(Hq(d)),d.statusText))};
d.onerror=function(){c.reject(new el(cl(Hq(d)),d.statusText))};
d.send(b.serialize());return c.promise}
function aD(a){var b={bicf:function(f){a.h=f},
blc:function(){return a.getLatestChallengeResponse()},
bcr:function(f){a.j.push(f)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(var d=y(c.ntpqfbel),e=d.next();!e.done;e=d.next())e=e.value,e(b);c.ntpqfbel=void 0}
;function bD(a){var b,c;(b=a.ytcsi)==null||(c=b.tick)==null||c.call(b,"pot_ist")}
function cD(a){if(a instanceof Error){var b=G("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function dD(a,b){var c=this;this.h=0;var d;this.Yb=(d=b==null?void 0:b.Yb)!=null?d:window;this.wd=b==null?void 0:b.wd;var e;this.requestKey=(e=b==null?void 0:b.requestKey)!=null?e:Mq("par_bir_key")||"O43z0dpjhgX20SCx4KAo";var f;this.Ce=(f=b==null?void 0:b.Ce)!=null?f:function(k){return new $l(k)};
var g;d=(g=b==null?void 0:b.ej)!=null?g:function(k,l,m){return new ZC(k,l,m)};
this.bgChallenge=vA(a.bgChallenge);this.ttlSeconds=xA(wA(a.challenge||""));this.Oa=d(this.requestKey,T("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(D.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);this.Fe=b==null?void 0:b.Fe;aD(this.Oa);var h;this.le=(h=b==null?void 0:b.le)!=null?h:function(k){dk(c.Yb.document,"visibilitychange",function(){c.Yb.document.visibilityState===
"visible"&&k()})}}
function eD(a){if(!a.vm){var b={maxAttempts:5,ke:a.ttlSeconds*1E3};bD(a.Yb);a.vm=a.Ce({Oa:a.Oa,Mb:{disable:T("html5_web_po_disable_remote_logging"),ra:"aGIf",nf:Lq(),Qf:T("wpo_dis_lfdms")?0:1E3,Sb:function(d){var e=gA.get(d);e||(e=new fA(d),e=new Zk(e),gA.set(d,e));return e}},
Tb:b,Af:a.bgChallenge,Pc:cD});a.h=Date.now();gm(a.vm,function(){a.h=Date.now()});
a.Yb.bgevmc={p:function(){var d;(d=a.vm)==null||d.pause()},
r:function(){var d;(d=a.vm)==null||d.resume()},
cr:function(){var d,e;return(e=(d=a.vm)==null?void 0:d.checkForRefresh())!=null?e:Promise.resolve()}};
Jc(a.vm,function(){return B(function(d){return d.return(fD(a))})});
var c=a.j.bind(a);a.wd&&a.ttlSeconds>0&&a.wd.then(function(d){d.listen("publicytnetworkstatus-online",c)});
a.le(c)}}
dD.prototype.j=function(){if(Date.now()>this.h+this.ttlSeconds*1E3){var a;(a=this.vm)==null||em(a)}};
function fD(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new Tm({vm:a.vm,Oa:a.Oa,Jd:!0,onError:cD,Tb:a.Fe});return a.i}
function gD(a,b){a=new dD(a,b);eD(a);(b==null?0:b.aj)||fD(a)}
function hD(a){try{var b=JSON.parse(a);if(b.bgChallenge)return b}catch(c){}}
function iD(){var a=window,b={};a=a===void 0?window:a;var c=a.ytAtR,d;b==null||(d=b.Wd)==null||d.wj();if(c){if(c=hD(c)){var e;b==null||(e=b.Wd)==null||e.je("SUCCESS");gD(c,b)}a.ytAtR=void 0}else a.ytAtRC=function(f){if(f=hD(f)){var g;b==null||(g=b.Wd)==null||g.je("SUCCESS");gD(f,b);a.ytAtRC=void 0}}}
;var jD=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function kD(){this.state=1;this.vm=null;this.h=void 0}
n=kD.prototype;n.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=Hp(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=Ip(a.interpreterSafeUrl).toString());lD(this,e,d,a.program,b,c)}else vy(Error("BL:CIP"))};
function lD(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,Az(Jp(c),function(){window[g]?mD(a,d,g,e):(a.state=3,Cz(c),vy(new U("BL:ULB",""+c)))},f)):b?(f=Ti("SCRIPT"),b instanceof Hb?(f.textContent=Jb(b),Kb(f)):f.textContent=b,f.nonce=Gb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?mD(a,d,g,e):(a.state=4,vy(new U("BL:ULBJ")))):vy(new U("BL:ULV"))}
n.isLoading=function(){return this.state===2};
function mD(a,b,c,d){a.state=5;var e=!!a.h&&jD.includes(lc(a.h)||"");try{var f=new Ol({program:b,globalName:c,Mb:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,ra:"aGIf"}});f.Qb.then(function(){a.state=6;d&&d(b)});
a.Cd(f)}catch(g){a.state=7,g instanceof Error&&vy(g)}}
n.invoke=function(a){a=a===void 0?{}:a;return this.Hd()?this.De({Ia:a}):null};
n.dispose=function(){this.Cd(null);this.state=8};
n.Hd=function(){return!!this.vm};
n.De=function(a){return this.vm.se(a)};
n.Cd=function(a){yc(this.vm);this.vm=a};function nD(){var a=G("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function oD(){kD.apply(this,arguments)}
v(oD,kD);oD.prototype.Cd=function(a){var b;(b=nD())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.se.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
oD.prototype.Hd=function(){return!!nD()};
oD.prototype.De=function(a){return nD().bgvmc(a)};var pD=new Xw("AUTH_SERVICE_TOKEN");function qD(a){nx.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(qD,nx);qD.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
qD.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
qD.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
qD.prototype.i=function(){this.h=new Map};function rD(a){nx.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(rD,nx);rD.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
rD.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
rD.prototype.u=function(a,b){a(b==null?void 0:b.event)};
rD.prototype.H=function(a,b){a(b==null?void 0:b.event)};function sD(){this.o=new qD;this.u=new rD}
sD.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function tD(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
tD.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Oy(c===void 0?0:c)){a=this.client;d=new Hy({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=bA(d,c);Yz.set(f,!0);cA(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=aA({cttAuthInfo:Qy(c)||void 0,automatedLogEventSource:void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?dA("visualElementGestured",f,d):a?ly("visualElementGestured",
d,a,f):Hs("visualElementGestured",d,f);b=!0}else b=!1;else b=!1;return b};
tD.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Hy({trackingParams:a}),b,c===void 0?0:c)};
tD.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Oy(d);a||(a=(a=Ly(d===void 0?0:d))?new Hy({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=aA({cttAuthInfo:Qy(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?dA("visualElementStateChanged",d,b):a?ly("visualElementStateChanged",b,a,d):Hs("visualElementStateChanged",b,d))}};
function uD(a,b){if(b===void 0)for(var c=Ny(),d=0;d<c.length;d++)c[d]!==void 0&&uD(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&$z(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function vD(){sD.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Qr(wD)}
v(vD,sD);vD.prototype.j=function(){Hs("finalPayload",{csn:Oy()})};
vD.prototype.h=function(){By(Cy)};
vD.prototype.i=function(){var a=uD;tD.instance||(tD.instance=new tD);a(tD.instance)};
function wD(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Ce();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Hs("genericClientExperimentEvent",{eventType:c});delete jq.CLIENT_EXPERIMENT_EVENTS}}
;function xD(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(xD,U);var yD=new Xw("NETWORK_SLI_TOKEN");function zD(a){this.h=a}
zD.prototype.fetch=function(a,b,c){var d=this,e;return B(function(f){e=AD(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){vy(g);
if((c==null?0:c.mf)&&g instanceof xD&&g.errorType===1)return Promise.reject(g)}))})};
function AD(a,b,c){if(a.h){var d=mc(wc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=mv(c));return new window.Request(b,a)}
zD.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.Jf)&&a.ok)return Yg(b.Jf,d);d=d.replace(")]}'","");if((b==null?0:b.mf)&&d)try{var e=JSON.parse(d)}catch(g){throw new xD(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.dj(),c=c.then(function(d){vy(new U("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
zD[Ww]=[new Yw(yD)];var BD=new Xw("NETWORK_MANAGER_TOKEN");function CD(){}
function DD(){var a=G("ytglobal.storage_");a||(a=new CD,E("ytglobal.storage_",a));return a}
CD.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(ED()):d.return()})};
function ED(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",CD);function Fs(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Fs.prototype.xa=function(a){this.handleError(a)};
Fs.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":FD(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function FD(a,b){DD().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:GD(c==null?void 0:c.usage),deviceStorageQuotaMbytes:GD(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function GD(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var vC={Qd:{feedbackEndpoint:mC(GC),modifyChannelNotificationPreferenceEndpoint:mC(IC),playlistEditEndpoint:mC(JC),shareEntityEndpoint:mC(FC),subscribeEndpoint:mC(CC),undoFeedbackEndpoint:mC(HC),unsubscribeEndpoint:mC(DC),webPlayerShareEntityServiceEndpoint:mC(KC)}};function HD(){var a=dx();$w(a,{nc:BD,Gd:zD});$w(a,{nc:pD,Gd:tr});var b=jC(),c=a.resolve(pD),d=a.resolve(BD),e={};b&&(e.client_location=b);uC(d,c,e);$w(a,{nc:aC,ze:ZB.instance})}
;var ID=new Map;function JD(a,b,c,d,e){b=new KD(a,b,c,d===void 0?function(){}:d,e===void 0?null:e);
ID.set(a,b)}
function LD(a){if(!a.onReadyPatchApplied){var b=a.addEventListener;a.addEventListener=function(c,d){c==="onReady"?Promise.resolve().then(function(){d(a)}):b.call(a,c,d)};
a.onReadyPatchApplied=!0}}
function KD(a,b,c,d,e){J.call(this);this.container=a;this.webPlayerContextConfig=b;this.h=c;this.Pc=d;this.playerVars=e;MD(this)}
v(KD,J);function MD(a){if(G("yt.player.Application.create"))Promise.resolve().then(function(){ND(a)});
else{OD(Ip(a.webPlayerContextConfig.trustedJsUrl),function(){ND(a)},function(){a.I||a.Pc()});
var b=a.webPlayerContextConfig.trustedCssUrl;b&&PD(Ip(b))}}
function ND(a){if(!a.I){var b=G("yt.player.Application.create");try{a.api=b(a.container,{args:a.playerVars},a.webPlayerContextConfig,void 0).getInternalApi(),LD(a.api),a.api.isReady=function(){return!0},a.h(a.api)}catch(c){throw a.Pc(),c;
}}}
KD.prototype.X=function(){this.api&&this.api.destroy();Ui(this.container);J.prototype.X.call(this)};
function PD(a){var b="ytp-"+a.toString();if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;Rb(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function OD(a,b,c){var d="ytp-"+a.toString(),e=document.getElementById(d);if(e)e.dataset.failed?c():e.dataset.loaded?b():(e.addEventListener("error",function(){c()}),e.addEventListener("load",function(){b()}));
else{var f=document.createElement("script");f.id=d;f.addEventListener("error",function(){f.dataset.failed="true";c()});
f.addEventListener("load",function(){f.dataset.loaded="true";b()});
Lb(f,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(f,a.firstChild)}}
;function QD(a){S("ENABLE_WEBVIEW_API")&&window.ytwebviewplayer&&(window.addEventListener("message",function(b){try{var c=JSON.parse(b.data),d=c.methodName,e=c.args||[];a:{for(var f=y(e),g=f.next();!g.done;g=f.next())if(String(g.value).includes("javascript:")){var h=!0;break a}h=!1}if(h)throw Error('Dangerous call to "'+d+'" with ['+e+"].");if(d&&typeof a[d]==="function")a[d].apply(a,A(e));else throw Error('Unknown API method: "'+d+'".');}catch(k){uy(k)}}),a.addEventListener("onReady",function(){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onPlayerReady"}))}),
a.addEventListener("onStateChange",function(b){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onStateChange",
state:b}))}),a.addEventListener("onError",function(b){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onError",
errorCode:b}))}))}
;var RD={},SD=(RD["api.invalidparam"]=2,RD.auth=150,RD["drm.auth"]=150,RD["heartbeat.net"]=150,RD["heartbeat.servererror"]=150,RD["heartbeat.stop"]=150,RD["html5.unsupportedads"]=5,RD["fmt.noneavailable"]=5,RD["fmt.decode"]=5,RD["fmt.unplayable"]=5,RD["html5.missingapi"]=5,RD["html5.unsupportedlive"]=5,RD["drm.unavailable"]=5,RD["mrm.blocked"]=151,RD["embedder.identity.denied"]=152,RD["embedder.identity.missing.referrer"]=153,RD);var TD=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function UD(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function VD(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(TD);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config)if(typeof a==="string")b.embed_config=a;else if(Pa(a))try{var e=JSON.stringify(a);b.embed_config=e}catch(f){console.error("Invalid embedConfig JSON",f)}return b}
function WD(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function XD(a,b){J.call(this);var c=this;this.api=a;this.j=this.G=!1;this.K=[];this.V={};this.o=[];this.i=[];this.ba=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.aa=T("web_player_split_event_bus_iframe");this.B=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.u=function(d){c.onMessage(d)};
YD.addEventListener("message",this.u);if(a=S("WIDGET_ID"))this.sessionId=a;b&&this.u(b);ZD(this,"onReady",function(){c.G=!0;var d=c.api.getVideoData();if(!d.isPlayable){c.ba=!0;d=d.errorCode;var e=e===void 0?5:e;c.errorCode=d?SD[d]||e:e;c.sendMessage("onError",Number(c.errorCode))}$D(c);c.h||c.j||window.parent===window||!c.sessionId||aE(c,{event:"readyToListen"},window.parent)});
ZD(this,"onVideoProgress",this.qg.bind(this));ZD(this,"onVolumeChange",this.rg.bind(this));ZD(this,"onApiChange",this.jg.bind(this));ZD(this,"onPlaybackQualityChange",this.ng.bind(this));ZD(this,"onPlaybackRateChange",this.og.bind(this));ZD(this,"onStateChange",this.pg.bind(this));ZD(this,"onWebglSettingsChanged",this.sg.bind(this));ZD(this,"onCaptionsTrackListChanged",this.kg.bind(this));ZD(this,"captionssettingschanged",this.lg.bind(this))}
v(XD,J);function $D(a){if(a.h)if(a.j)a.sendMessage("alreadyInitialized");else if(a.G){a.j=!0;a.G=!1;a.sendMessage("initialDelivery",bE(a));a.sendMessage("onReady");CB("ep_init_ar");for(var b=y(a.K),c=b.next();!c.done;c=b.next())aE(a,c.value);a.K=[]}}
function cE(a,b){a.sendMessage("infoDelivery",b)}
n=XD.prototype;n.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.j?aE(this,a):this.K.push(a)};
function dE(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function ZD(a,b,c){a.o.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function bE(a){if(!a.api)return null;var b=a.api.getApiInterface();Yb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
n.pg=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());cE(this,a)};
n.ng=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());cE(this,a)};
n.og=function(a){cE(this,{playbackRate:a})};
n.jg=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.rg=function(){cE(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
n.qg=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());cE(this,a)};
n.sg=function(){cE(this,{sphericalProperties:this.api.getSphericalProperties()})};
n.kg=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};cE(this,a)}};
n.lg=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};cE(this,a)}};
n.onMessage=function(a){if(!(this.B!=="*"&&a.origin!==this.B||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.B=this.targetOrigin=a);this.h=c;this.sessionId=b;$D(this);break;case "command":if(c=b.func,b=b.args,c==="addEventListener"&&b)c=b[0],b=a.origin,c==="onReady"?this.api.logApiCall(c+" invocation",b):c==="onError"&&this.ba&&(this.api.logApiCall(c+" invocation",
b,this.errorCode),this.errorCode=void 0),this.api.logApiCall(c+" registration",b),this.V[c]||c==="onReady"||(a=dE(this,c,b),this.i.push({eventType:c,listener:a,origin:b}),this.aa?this.api.handleExternalCall("addEventListener",[c,a],b):this.api.addEventListener(c,a),this.V[c]=!0);else if(a=a.origin,this.api.isExternalMethodAvailable(c,a)){b=b||[];if(b.length>0&&UD(c)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},c){case "loadVideoById":case "cueVideoById":e=VD(d[0],d[1]!==
void 0?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];typeof e==="string"&&(e={mediaContentUrl:e,startSeconds:d[1]!==void 0?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=VD(e);break;case "loadPlaylist":case "cuePlaylist":e=WD(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(c,b,a);UD(c)&&cE(this,bE(this))}}}};
function aE(a,b,c){if(c=c===void 0?a.h:c){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var d=JSON.stringify(b);c.postMessage(d,a.targetOrigin)}catch(e){vy(e)}}}
n.X=function(){J.prototype.X.call(this);YD.removeEventListener("message",this.u);for(var a=0;a<this.o.length;a++){var b=this.o[a];this.api.removeEventListener(b.eventType,b.listener)}this.o=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.aa?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var YD=window;function eE(a,b,c){J.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){d.onMessage(e)};
fE.addEventListener("message",this.i);gE(this,"RECEIVING")}
v(eE,J);n=eE.prototype;n.addListener=function(a,b){if(!(a in this.h)){var c=this.mg.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
n.mg=function(a,b){this.I||gE(this,a,hE(a,b))};
n.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
n.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
n.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function iE(a,b){switch(a){case "loadVideoById":return[VD(b)];case "cueVideoById":return[VD(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[WD(b)];case "cuePlaylist":return[WD(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function jE(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function hE(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function gE(a,b,c){a.I||(b={id:a.id,command:b},c&&(b.data=c),kE.postMessage(JSON.stringify(b),a.origin))}
n.onMessage=function(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.I){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=iE(c,b||{}),b=this.api.handleExternalCall(c,
b,a||null),(b=jE(c,b))&&gE(this,c,b))}}}}}};
n.X=function(){fE.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);J.prototype.X.call(this)};
var fE=window,kE=window.parent;var lE=new oD;function mE(){return lE.Hd()}
function nE(a){a=a===void 0?{}:a;return lE.invoke(a)}
;function oE(a,b,c,d,e){J.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.Ub=e;this.Va=!1;this.api={};this.oa=this.u=null;this.V=new On;this.h={};this.ba=this.Aa=this.elementId=this.Wa=this.config=null;this.aa=!1;this.j=this.G=null;this.Ha={};this.gd=["onReady"];this.lastError=null;this.lb=NaN;this.K={};this.ha=0;this.i=this.o=a;Ac(this,this.V);pE(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(qE(this),rE(this))}
v(oE,J);n=oE.prototype;n.getId=function(){return this.B};
n.loadNewVideoConfig=function(a){if(!this.I){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof pz||(b=new pz(b));this.config=b;this.setConfig(a);rE(this);this.isReady()&&sE(this)}};
function qE(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
n.setConfig=function(a){this.Wa=a;this.config=tE(a);qE(this);if(!this.Aa){var b;this.Aa=uE(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=qn(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=qn(Number(a)||a))};
function sE(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function vE(a){var b=!0,c=wE(a);c&&a.config&&(b=c.dataset.version===xE(a));return b&&!!G("yt.player.Application.create")}
function rE(a){if(!a.I&&!a.aa){var b=vE(a);if(b&&(wE(a)?"html5":null)==="html5")a.ba="html5",a.isReady()||yE(a);else if(zE(a),a.ba="html5",b&&a.j&&a.o)a.o.appendChild(a.j),yE(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=AE(a,"player_bootstrap_method")?G("yt.player.Application.createAlternate")||G("yt.player.Application.create"):G("yt.player.Application.create");var e=a.config?tE(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Ub);yE(a)};
a.aa=!0;b?a.G():(Az(xE(a),a.G),(b=BE(a))&&Hz(b||""),CE(a)&&!c&&E("yt.player.Application.create",null))}}}
function wE(a){var b=Si(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function yE(a){if(!a.I){var b=wE(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.aa=!1;if(!AE(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}DE(a)}else a.lb=setTimeout(function(){yE(a)},50)}}
function DE(a){pE(a);a.Va=!0;var b=wE(a);if(b){a.u=EE(a,b,"addEventListener");a.oa=EE(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=EE(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);sE(a);a.Aa&&a.Aa(a.api);a.V.yb("onReady",a.api)}
function EE(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function pE(a){a.Va=!1;if(a.oa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.oa(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.u=null;a.oa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
n.isReady=function(){return this.Va};
n.addEventListener=function(a,b){var c=this,d=uE(this,b);d&&(Sb(this.gd,a)>=0||this.h[a]||(b=FE(this,a),this.u&&this.u(a,b)),this.V.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
n.removeEventListener=function(a,b){this.I||(b=uE(this,b))&&this.V.unsubscribe(a,b)};
function uE(a,b){var c=b;if(typeof b==="string"){if(a.Ha[b])return a.Ha[b];c=function(){var d=C.apply(0,arguments),e=G(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ha[b]=c}return c?c:null}
function FE(a,b){function c(d){function e(){if(!a.I)try{a.V.yb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.We});g.level="WARNING";throw g;}}
if(AE(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.K,h=String(f);h in g&&delete g[h]},0);
Ji(a.K,String(f))}}
return a.h[b]=c}
n.getPlayerType=function(){return this.ba||(wE(this)?"html5":null)};
n.getLastError=function(){return this.lastError};
function zE(a){a.cancel();pE(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=wE(a);b&&(vE(a)||!CE(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));a.o&&Ui(a.o)}
n.cancel=function(){this.G&&Ez(xE(this),this.G);clearTimeout(this.lb);this.aa=!1};
n.X=function(){zE(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ha=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Wa=this.config=this.api=null;delete this.o;delete this.i;J.prototype.X.call(this)};
function CE(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function xE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function BE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function AE(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function tE(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Mi(e):e}return b}
;var GE={},HE="player_uid_"+(Math.random()*1E9>>>0);function IE(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Si(c):c;var e=HE+"_"+Sa(c),f=GE[e];if(f&&d)return JE(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new oE(c,e,a,b,void 0);GE[e]=f;f.addOnDisposeCallback(function(){delete GE[f.getId()]});
return f.api}
function JE(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var KE=null,LE=null,ME;function NE(a){KE=a;KE.addEventListener("onVideoDataChange",OE);KE.addEventListener("onReady",PE);a=S("POST_MESSAGE_ID","player");var b=S("POST_MESSAGE_ORIGIN");S("ENABLE_JS_API")?LE=new XD(KE,ME):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(LE=new eE(KE,a,b));ME=void 0}
function QE(){GA();T("ytidb_create_logger_embed_killswitch")||Es();var a={};vD.h||(vD.h=new vD);vD.h.install((a.flush_logs={callback:function(){Zx()}},a));
Ms||tw();HD();yn.sa(function(){XC()});
a=O("att_init_delay",200);T("enable_rta_manager")&&setTimeout(function(){T("attmusi")&&iD();var b=new YB;var c={preload:!T("enable_rta_npi"),ye:T("attmusi")},d;c=(d=c)!=null?d:{preload:!0};d=c.Zi?void 0:new iw;KB.instance=new KB(b,c,d);b=KB.instance;if(T("attmusi")&&T("attmusi_ue")){b={s:b.o.bind(b),ir:b.u.bind(b)};c=window;c.attmp=b;if(c.attmq!==void 0){d=y(c.attmq);for(var e=d.next();!e.done;e=d.next())e=e.value,e(b)}c.attmq=void 0}else c=b.o.bind(b),E("yt.aba.att",c),b=b.u.bind(b),E("yt.aba.att2",
b)},a);
Qr(function(){if(T("enable_zw_ping")){var b=S("INNERTUBE_CLIENT_NAME","UNKNOWN_INTERFACE"),c="/establish_zw";b==="WEB_EMBEDDED_PLAYER"?c="/embed/establish_zw":b==="TVHTML5"&&(c="https://www.youtube.com/tv/establish_zw");S("COOKIELESS",!1)&&b==="WEB_EMBEDDED_PLAYER"?(b=new Headers,b.set("X-Goog-Visitor-Id",S("VISITOR_DATA")),fetch(c,{method:"GET",mode:"no-cors",headers:b})):fetch(c,{method:"GET",mode:"no-cors",credentials:"include"})}})}
function RE(){IB();var a=Dr(),b=Gr(119),c=window.devicePixelRatio>1;if(document.body&&Gn(document.body,"exp-invert-logo"))if(c&&!Gn(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Gn(d,"inverted-hdpi")){var e=En(d);Fn(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Gn(document.body,"inverted-hdpi")&&Hn();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Hr(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Ar[b]:(c=d.toString(16),Ar[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Ar)Ar.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Ar[f])));var f=d.join("&");wr(b,f,63072E3,a.i,c)}}
function OE(){SE()}
function PE(){CB("ep_init_pr");SE()}
function SE(){var a=KE.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function TE(){KE&&KE.sendAbandonmentPing&&KE.sendAbandonmentPing();S("PL_ATT")&&lE.dispose();for(var a=yn,b=0,c=DA.length;b<c;b++)a.ta(DA[b]);DA.length=0;Cz(EA.toString());FA=!1;kq("DCLKSTAT",0);zc(LE);KE&&(KE.removeEventListener("onVideoDataChange",OE),KE.destroy(),KE=null)}
;CB("ep_init_eps");E("yt.setConfig",kq);E("yt.config.set",kq);E("yt.setMsg",zz);E("yt.msgs.set",zz);E("yt.logging.errors.log",uy);
E("writeEmbed",function(){CB("ep_init_wes");var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}qA(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});b=document.referrer;window!==window.top&&b&&b!==document.URL&&(a.args.loaderUrl=b);b=LC();if(!b.serializedForcedExperimentIds){var c=yq(window.location.href);c.forced_experiments&&(b.serializedForcedExperimentIds=c.forced_experiments)}var d;((d=
a.args)==null?0:d.autoplay)?xB("watch",["pbs","pbu","pbp"]):a.args&&bz(a.args)?xB("video_preview",["ol"]):xB("embed_no_video",["ep_init_ar"]);T("embeds_use_player_instances_library")||S("ENABLE_WEBVIEW_API")?(JD(document.getElementById("player"),b,function(e){S("ENABLE_WEBVIEW_API")?(e=e.getTrustedApi(),LD(e),QD(e)):NE(e)},function(){throw Error("Unable to load player JS");
},a.args),S("ENABLE_WEBVIEW_API")||QE()):(a=IE(a,b),NE(a),QE());
CB("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",G("yt.abuse.player.botguardInitialized")||mE);E("yt.abuse.player.invokeBotguard",G("yt.abuse.player.invokeBotguard")||nE);E("yt.abuse.dclkstatus.checkDclkStatus",G("yt.abuse.dclkstatus.checkDclkStatus")||HA);E("yt.player.exports.navigate",G("yt.player.exports.navigate")||pA);E("yt.util.activity.init",G("yt.util.activity.init")||Hw);E("yt.util.activity.getTimeSinceActive",G("yt.util.activity.getTimeSinceActive")||Lw);
E("yt.util.activity.setTimestamp",G("yt.util.activity.setTimestamp")||Iw);window.addEventListener("load",oq(function(){RE()}));
window.addEventListener("pageshow",oq(function(a){a.persisted||RE()}));
window.addEventListener("pagehide",oq(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?TE():a.persisted||TE()}));
(function(){var a=a===void 0?xy:a;var b=b===void 0?{}:b;E("yt.logging.errors.log",uy);ty();kr(jr(),b);window.onerror=a;Xk=wy;window.addEventListener("unhandledrejection",function(c){if(c.reason instanceof Error){var d=c.reason;yy(d,{source:"unhandledrejection"});d.name==="AbortError"&&(d.level="WARNING")}wy(c.reason);c.preventDefault()})})();
(function(){if(S("ENABLE_JS_API")){var a=function(b){ME=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
CB("ep_init_epe");}).call(this);
