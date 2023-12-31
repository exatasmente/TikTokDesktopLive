(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rive"] = factory();
	else
		root["rive"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var Rive = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(moduleArg = {}) {

var m=moduleArg,aa,ba;m.ready=new Promise((b,a)=>{aa=b;ba=a});
function ca(){function b(h){const g=d;c=a=0;d=new Map;g.forEach(l=>{try{l(h)}catch(k){console.error(k)}});this.Qa();e&&e.nb()}let a=0,c=0,d=new Map,e=null,f=null;this.requestAnimationFrame=function(h){a||(a=requestAnimationFrame(b.bind(this)));const g=++c;d.set(g,h);return g};this.cancelAnimationFrame=function(h){d.delete(h);a&&0==d.size&&(cancelAnimationFrame(a),a=0)};this.lb=function(h){f&&(document.body.remove(f),f=null);h||(f=document.createElement("div"),f.style.backgroundColor="black",f.style.position=
"fixed",f.style.right=0,f.style.top=0,f.style.color="white",f.style.padding="4px",f.innerHTML="RIVE FPS",h=function(g){f.innerHTML="RIVE FPS "+g.toFixed(1)},document.body.appendChild(f));e=new function(){let g=0,l=0;this.nb=function(){var k=performance.now();l?(++g,k-=l,1E3<k&&(h(1E3*g/k),g=l=0)):(l=k,g=0)}}};this.ib=function(){f&&(document.body.remove(f),f=null);e=null};this.Qa=function(){}}
function ea(b){console.assert(!0);const a=new Map;let c=-Infinity;this.push=function(d){d=d+((1<<b)-1)>>b;a.has(d)&&clearTimeout(a.get(d));a.set(d,setTimeout(function(){a.delete(d);0==a.length?c=-Infinity:d==c&&(c=Math.max(...a.keys()),console.assert(c<d))},1E3));c=Math.max(d,c);return c<<b}}
const fa=new function(){function b(){if(!a){var t=document.createElement("canvas"),v={alpha:1,depth:0,stencil:0,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,preferLowPowerToHighPerformance:0,failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:1,renderViaOffscreenBackBuffer:1};let q=t.getContext("webgl2",v);if(q)c=2;else if(q=t.getContext("webgl",v))c=1;else return console.log("No WebGL support. Image mesh will not be drawn."),!1;d=Math.min(q.getParameter(q.MAX_RENDERBUFFER_SIZE),
q.getParameter(q.MAX_TEXTURE_SIZE));function F(I,w,y){w=q.createShader(w);q.shaderSource(w,y);q.compileShader(w);y=q.getShaderInfoLog(w);if(0<y.length)throw y;q.attachShader(I,w)}t=q.createProgram();F(t,q.VERTEX_SHADER,"attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
F(t,q.FRAGMENT_SHADER,"precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");q.bindAttribLocation(t,0,"vertex");q.bindAttribLocation(t,1,"uv");q.linkProgram(t);v=q.getProgramInfoLog(t);if(0<v.trim().length)throw v;e=q.getUniformLocation(t,"mat");f=q.getUniformLocation(t,"translate");q.useProgram(t);q.bindBuffer(q.ARRAY_BUFFER,q.createBuffer());
q.enableVertexAttribArray(0);q.enableVertexAttribArray(1);q.bindBuffer(q.ELEMENT_ARRAY_BUFFER,q.createBuffer());q.uniform1i(q.getUniformLocation(t,"image"),0);q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0);a=q}return!0}let a=null,c=0,d=0,e=null,f=null,h=0,g=0;this.wb=function(){b();return d};this.gb=function(t){if(!b())return null;const v=a.createTexture();a.bindTexture(a.TEXTURE_2D,v);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,t);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);
a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);2==c?(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),a.generateMipmap(a.TEXTURE_2D)):a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);return v};const l=new ea(8),k=new ea(8),p=new ea(10),r=new ea(10);this.kb=function(t,v,q,F,I){if(b()){var w=l.push(t),y=k.push(v);if(a.canvas.width!=w||a.canvas.height!=y)a.canvas.width=w,a.canvas.height=y;
a.viewport(0,y-v,t,v);a.disable(a.SCISSOR_TEST);a.clearColor(0,0,0,0);a.clear(a.COLOR_BUFFER_BIT);a.enable(a.SCISSOR_TEST);q.sort((z,da)=>da.Ua-z.Ua);w=p.push(F);h!=w&&(a.bufferData(a.ARRAY_BUFFER,8*w,a.DYNAMIC_DRAW),h=w);w=0;for(var J of q)a.bufferSubData(a.ARRAY_BUFFER,w,J.Da),w+=4*J.Da.length;console.assert(w==4*F);for(var P of q)a.bufferSubData(a.ARRAY_BUFFER,w,P.Xa),w+=4*P.Xa.length;console.assert(w==8*F);w=r.push(I);g!=w&&(a.bufferData(a.ELEMENT_ARRAY_BUFFER,2*w,a.DYNAMIC_DRAW),g=w);J=0;for(var W of q)a.bufferSubData(a.ELEMENT_ARRAY_BUFFER,
J,W.indices),J+=2*W.indices.length;console.assert(J==2*I);W=0;P=!0;w=J=0;for(const z of q){z.image.za!=W&&(a.bindTexture(a.TEXTURE_2D,z.image.cb||null),W=z.image.za);z.zb?(a.scissor(z.Ia,y-z.Ja-z.Pa,z.Gb,z.Pa),P=!0):P&&(a.scissor(0,y-v,t,v),P=!1);q=2/t;const da=-2/v;a.uniform4f(e,z.oa[0]*q*z.va,z.oa[1]*da*z.wa,z.oa[2]*q*z.va,z.oa[3]*da*z.wa);a.uniform2f(f,z.oa[4]*q*z.va+q*(z.Ia-z.xb*z.va)-1,z.oa[5]*da*z.wa+da*(z.Ja-z.yb*z.wa)+1);a.vertexAttribPointer(0,2,a.FLOAT,!1,0,w);a.vertexAttribPointer(1,2,
a.FLOAT,!1,0,w+4*F);a.drawElements(a.TRIANGLES,z.indices.length,a.UNSIGNED_SHORT,J);w+=4*z.Da.length;J+=2*z.indices.length}console.assert(w==4*F);console.assert(J==2*I)}};this.canvas=function(){return b()&&a.canvas}};
m.onRuntimeInitialized=function(){function b(n){switch(n){case k.srcOver:return"source-over";case k.screen:return"screen";case k.overlay:return"overlay";case k.darken:return"darken";case k.lighten:return"lighten";case k.colorDodge:return"color-dodge";case k.colorBurn:return"color-burn";case k.hardLight:return"hard-light";case k.softLight:return"soft-light";case k.difference:return"difference";case k.exclusion:return"exclusion";case k.multiply:return"multiply";case k.hue:return"hue";case k.saturation:return"saturation";
case k.color:return"color";case k.luminosity:return"luminosity"}}function a(n){return"rgba("+((16711680&n)>>>16)+","+((65280&n)>>>8)+","+((255&n)>>>0)+","+((4278190080&n)>>>24)/255+")"}function c(){0<J.length&&(fa.kb(y.drawWidth(),y.drawHeight(),J,P,W),J=[],W=P=0,y.reset(512,512));for(const n of w){for(const u of n.da)u();n.da=[]}w.clear()}var d=m.RenderPaintStyle;const e=m.RenderPath,f=m.RenderPaint,h=m.Renderer,g=m.StrokeCap,l=m.StrokeJoin,k=m.BlendMode,p=d.fill,r=d.stroke,t=m.FillRule.evenOdd;
let v=1;var q=m.RenderImage.extend("CanvasRenderImage",{__construct:function(){this.__parent.__construct.call(this);this.za=v;v=v+1&2147483647||1},decode:function(n){let u=Xa;u.total++;var D=this,B=new Image;B.src=URL.createObjectURL(new Blob([n],{type:"image/png"}));B.onload=function(){D.ab=B;D.cb=fa.gb(B);D.size(B.width,B.height);u.loaded++;if(u.loaded===u.total){const E=u.ready;E&&(E(),u.ready=null)}}}}),F=e.extend("CanvasRenderPath",{__construct:function(){this.__parent.__construct.call(this);
this.ia=new Path2D},rewind:function(){this.ia=new Path2D},addPath:function(n,u,D,B,E,G,A){var C=this.ia,R=C.addPath;n=n.ia;const K=new DOMMatrix;K.a=u;K.b=D;K.c=B;K.d=E;K.e=G;K.f=A;R.call(C,n,K)},fillRule:function(n){this.Ga=n},moveTo:function(n,u){this.ia.moveTo(n,u)},lineTo:function(n,u){this.ia.lineTo(n,u)},cubicTo:function(n,u,D,B,E,G){this.ia.bezierCurveTo(n,u,D,B,E,G)},close:function(){this.ia.closePath()}}),I=f.extend("CanvasRenderPaint",{color:function(n){this.Ha=a(n)},thickness:function(n){this.eb=
n},join:function(n){switch(n){case l.miter:this.ya="miter";break;case l.round:this.ya="round";break;case l.bevel:this.ya="bevel"}},cap:function(n){switch(n){case g.butt:this.xa="butt";break;case g.round:this.xa="round";break;case g.square:this.xa="square"}},style:function(n){this.bb=n},blendMode:function(n){this.$a=b(n)},clearGradient:function(){this.qa=null},linearGradient:function(n,u,D,B){this.qa={Va:n,Wa:u,La:D,Ma:B,Ca:[]}},radialGradient:function(n,u,D,B){this.qa={Va:n,Wa:u,La:D,Ma:B,Ca:[],ub:!0}},
addStop:function(n,u){this.qa.Ca.push({color:n,stop:u})},completeGradient:function(){},draw:function(n,u,D){let B=this.bb;var E=this.Ha,G=this.qa;n.globalCompositeOperation=this.$a;if(null!=G){E=G.Va;var A=G.Wa;const R=G.La;var C=G.Ma;const K=G.Ca;G.ub?(G=R-E,C-=A,E=n.createRadialGradient(E,A,0,E,A,Math.sqrt(G*G+C*C))):E=n.createLinearGradient(E,A,R,C);for(let T=0,M=K.length;T<M;T++)A=K[T],E.addColorStop(A.stop,a(A.color));this.Ha=E;this.qa=null}switch(B){case r:n.strokeStyle=E;n.lineWidth=this.eb;
n.lineCap=this.xa;n.lineJoin=this.ya;n.stroke(u);break;case p:n.fillStyle=E,n.fill(u,D)}}});const w=new Set;let y=null,J=[],P=0,W=0;var z=m.CanvasRenderer=h.extend("Renderer",{__construct:function(n){this.__parent.__construct.call(this);this.ha=[1,0,0,1,0,0];this.ba=n.getContext("2d");this.Fa=n;this.da=[]},save:function(){this.ha.push(...this.ha.slice(this.ha.length-6));this.da.push(this.ba.save.bind(this.ba))},restore:function(){const n=this.ha.length-6;if(6>n)throw"restore() called without matching save().";
this.ha.splice(n);this.da.push(this.ba.restore.bind(this.ba))},transform:function(n,u,D,B,E,G){const A=this.ha,C=A.length-6;A.splice(C,6,A[C]*n+A[C+2]*u,A[C+1]*n+A[C+3]*u,A[C]*D+A[C+2]*B,A[C+1]*D+A[C+3]*B,A[C]*E+A[C+2]*G+A[C+4],A[C+1]*E+A[C+3]*G+A[C+5]);this.da.push(this.ba.transform.bind(this.ba,n,u,D,B,E,G))},rotate:function(n){const u=Math.sin(n);n=Math.cos(n);this.transform(n,u,-u,n,0,0)},_drawPath:function(n,u){this.da.push(u.draw.bind(u,this.ba,n.ia,n.Ga===t?"evenodd":"nonzero"))},drawImage:function(n,
...u){var D=this.ba;this.da.push(function(){D.drawImage(n,...u)})},_drawRiveImage:function(n,u,D){var B=n.ab;if(B){var E=this.ba,G=b(u);this.da.push(function(){E.globalCompositeOperation=G;E.globalAlpha=D;E.drawImage(B,0,0);E.globalAlpha=1})}},_getMatrix:function(n){const u=this.ha,D=u.length-6;for(let B=0;6>B;++B)n[B]=u[D+B]},_drawImageMesh:function(n,u,D,B,E,G,A,C,R,K){var T=this.ba.canvas.width,M=this.ba.canvas.height;const pb=R-A,qb=K-C;A=Math.max(A,0);C=Math.max(C,0);R=Math.min(R,T);K=Math.min(K,
M);const ua=R-A,va=K-C;console.assert(ua<=Math.min(pb,T));console.assert(va<=Math.min(qb,M));if(!(0>=ua||0>=va)){R=ua<pb||va<qb;T=K=1;var ia=Math.ceil(ua*K),ja=Math.ceil(va*T);M=fa.wb();ia>M&&(K*=M/ia,ia=M);ja>M&&(T*=M/ja,ja=M);y||(y=new m.DynamicRectanizer(M),y.reset(512,512));M=y.addRect(ia,ja);0>M&&(c(),w.add(this),M=y.addRect(ia,ja),console.assert(0<=M));var rb=M&65535,sb=M>>16;J.push({oa:this.ha.slice(this.ha.length-6),image:n,Ia:rb,Ja:sb,xb:A,yb:C,Gb:ia,Pa:ja,va:K,wa:T,Da:new Float32Array(B),
Xa:new Float32Array(E),indices:new Uint16Array(G),zb:R,Ua:n.za<<1|(R?1:0)});P+=B.length;W+=G.length;var na=this.ba,cc=b(u);this.da.push(function(){na.save();na.resetTransform();na.globalCompositeOperation=cc;na.globalAlpha=D;na.drawImage(fa.canvas(),rb,sb,ia,ja,A,C,ua,va);na.restore()})}},_clipPath:function(n){this.da.push(this.ba.clip.bind(this.ba,n.ia,n.Ga===t?"evenodd":"nonzero"))},clear:function(){w.add(this);this.da.push(this.ba.clearRect.bind(this.ba,0,0,this.Fa.width,this.Fa.height))},flush:function(){},
translate:function(n,u){this.transform(1,0,0,1,n,u)}});m.makeRenderer=function(n){return new z(n)};m.renderFactory={makeRenderPaint:function(){return new I},makeRenderPath:function(){return new F},makeRenderImage:function(){return new q}};let da=m.load,Xa=null;m.load=function(n){return new Promise(function(u){let D=null;Xa={total:0,loaded:0,ready:function(){u(D)}};D=da(n);0==Xa.total&&u(D)})};d=new ca;m.requestAnimationFrame=d.requestAnimationFrame.bind(d);m.cancelAnimationFrame=d.cancelAnimationFrame.bind(d);
m.enableFPSCounter=d.lb.bind(d);m.disableFPSCounter=d.ib;d.Qa=c;m.cleanup=function(){y&&y.delete()}};var ha=Object.assign({},m),ka="./this.program",la="object"==typeof window,ma="function"==typeof importScripts,x="",oa,pa;
if(la||ma)ma?x=self.location.href:"undefined"!=typeof document&&document.currentScript&&(x=document.currentScript.src),_scriptDir&&(x=_scriptDir),0!==x.indexOf("blob:")?x=x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1):x="",ma&&(pa=b=>{var a=new XMLHttpRequest;a.open("GET",b,!1);a.responseType="arraybuffer";a.send(null);return new Uint8Array(a.response)}),oa=(b,a,c)=>{var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?
a(d.response):c()};d.onerror=c;d.send(null)};var qa=m.print||console.log.bind(console),ra=m.printErr||console.error.bind(console);Object.assign(m,ha);ha=null;m.thisProgram&&(ka=m.thisProgram);var sa;m.wasmBinary&&(sa=m.wasmBinary);var noExitRuntime=m.noExitRuntime||!0;"object"!=typeof WebAssembly&&ta("no native wasm support detected");var wa,H,xa=!1,ya,L,za,Aa,Ba,N,Ca,Da;
function Ea(){var b=wa.buffer;m.HEAP8=ya=new Int8Array(b);m.HEAP16=za=new Int16Array(b);m.HEAP32=Ba=new Int32Array(b);m.HEAPU8=L=new Uint8Array(b);m.HEAPU16=Aa=new Uint16Array(b);m.HEAPU32=N=new Uint32Array(b);m.HEAPF32=Ca=new Float32Array(b);m.HEAPF64=Da=new Float64Array(b)}var Fa,Ga=[],Ha=[],Ia=[];function Ja(){var b=m.preRun.shift();Ga.unshift(b)}var Ka=0,La=null,Ma=null;
function ta(b){if(m.onAbort)m.onAbort(b);b="Aborted("+b+")";ra(b);xa=!0;b=new WebAssembly.RuntimeError(b+". Build with -sASSERTIONS for more info.");ba(b);throw b;}function Na(b){return b.startsWith("data:application/octet-stream;base64,")}var Oa;Oa="canvas_advanced.wasm";if(!Na(Oa)){var Pa=Oa;Oa=m.locateFile?m.locateFile(Pa,x):x+Pa}function Qa(b){if(b==Oa&&sa)return new Uint8Array(sa);if(pa)return pa(b);throw"both async and sync fetching of the wasm failed";}
function Ra(b){if(!sa&&(la||ma)){if("function"==typeof fetch&&!b.startsWith("file://"))return fetch(b,{credentials:"same-origin"}).then(a=>{if(!a.ok)throw"failed to load wasm binary file at '"+b+"'";return a.arrayBuffer()}).catch(()=>Qa(b));if(oa)return new Promise((a,c)=>{oa(b,d=>a(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Qa(b))}function Sa(b,a,c){return Ra(b).then(d=>WebAssembly.instantiate(d,a)).then(d=>d).then(c,d=>{ra("failed to asynchronously prepare wasm: "+d);ta(d)})}
function Ta(b,a){var c=Oa;return sa||"function"!=typeof WebAssembly.instantiateStreaming||Na(c)||c.startsWith("file://")||"function"!=typeof fetch?Sa(c,b,a):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,b).then(a,function(e){ra("wasm streaming compile failed: "+e);ra("falling back to ArrayBuffer instantiation");return Sa(c,b,a)}))}var Ua=b=>{for(;0<b.length;)b.shift()(m)};
function Va(b){if(void 0===b)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var a=b.charCodeAt(0);return 48<=a&&57>=a?`_${b}`:b}function Wa(b,a){b=Va(b);return{[b]:function(){return a.apply(this,arguments)}}[b]}function Ya(){this.ja=[void 0];this.Oa=[]}var O=new Ya,Za=void 0;function Q(b){throw new Za(b);}
var $a=b=>{b||Q("Cannot use deleted val. handle = "+b);return O.get(b).value},S=b=>{switch(b){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:return O.Ya({Ta:1,value:b})}};
function ab(b){var a=Error,c=Wa(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`};return c}var bb=void 0,cb=void 0;function U(b){for(var a="";L[b];)a+=cb[L[b++]];return a}var db=[];
function eb(){for(;db.length;){var b=db.pop();b.W.na=!1;b["delete"]()}}var fb=void 0,V={};function gb(b,a){for(void 0===a&&Q("ptr should not be undefined");b.$;)a=b.ra(a),b=b.$;return a}var hb={};function ib(b){b=jb(b);var a=U(b);kb(b);return a}function lb(b,a){var c=hb[b];void 0===c&&Q(a+" has unknown type "+ib(b));return c}function mb(){}var nb=!1;function ob(b){--b.count.value;0===b.count.value&&(b.ca?b.fa.ka(b.ca):b.Z.X.ka(b.Y))}
function tb(b,a,c){if(a===c)return b;if(void 0===c.$)return null;b=tb(b,a,c.$);return null===b?null:c.jb(b)}var ub={};function vb(b,a){a=gb(b,a);return V[a]}var wb=void 0;function xb(b){throw new wb(b);}function yb(b,a){a.Z&&a.Y||xb("makeClassHandle requires ptr and ptrType");!!a.fa!==!!a.ca&&xb("Both smartPtrType and smartPtr must be specified");a.count={value:1};return zb(Object.create(b,{W:{value:a}}))}
function zb(b){if("undefined"===typeof FinalizationRegistry)return zb=a=>a,b;nb=new FinalizationRegistry(a=>{ob(a.W)});zb=a=>{var c=a.W;c.ca&&nb.register(a,{W:c},a);return a};mb=a=>{nb.unregister(a)};return zb(b)}var Ab={};function Bb(b){for(;b.length;){var a=b.pop();b.pop()(a)}}function Cb(b){return this.fromWireType(Ba[b>>2])}var Db={},Eb={};
function X(b,a,c){function d(g){g=c(g);g.length!==b.length&&xb("Mismatched type converter count");for(var l=0;l<b.length;++l)Y(b[l],g[l])}b.forEach(function(g){Eb[g]=a});var e=Array(a.length),f=[],h=0;a.forEach((g,l)=>{hb.hasOwnProperty(g)?e[l]=hb[g]:(f.push(g),Db.hasOwnProperty(g)||(Db[g]=[]),Db[g].push(()=>{e[l]=hb[g];++h;h===f.length&&d(e)}))});0===f.length&&d(e)}
function Fb(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${b}`);}}function Gb(b,a,c={}){var d=a.name;b||Q(`type "${d}" must have a positive integer typeid pointer`);if(hb.hasOwnProperty(b)){if(c.tb)return;Q(`Cannot register type '${d}' twice`)}hb[b]=a;delete Eb[b];Db.hasOwnProperty(b)&&(a=Db[b],delete Db[b],a.forEach(e=>e()))}
function Y(b,a,c={}){if(!("argPackAdvance"in a))throw new TypeError("registerType registeredInstance requires argPackAdvance");Gb(b,a,c)}function Hb(b){Q(b.W.Z.X.name+" instance already deleted")}function Ib(){}
function Jb(b,a,c){if(void 0===b[a].aa){var d=b[a];b[a]=function(){b[a].aa.hasOwnProperty(arguments.length)||Q(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${b[a].aa})!`);return b[a].aa[arguments.length].apply(this,arguments)};b[a].aa=[];b[a].aa[d.ma]=d}}
function Kb(b,a,c){m.hasOwnProperty(b)?((void 0===c||void 0!==m[b].aa&&void 0!==m[b].aa[c])&&Q(`Cannot register public name '${b}' twice`),Jb(m,b,b),m.hasOwnProperty(c)&&Q(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),m[b].aa[c]=a):(m[b]=a,void 0!==c&&(m[b].Hb=c))}function Lb(b,a,c,d,e,f,h,g){this.name=b;this.constructor=a;this.ga=c;this.ka=d;this.$=e;this.ob=f;this.ra=h;this.jb=g;this.Ra=[]}
function Mb(b,a,c){for(;a!==c;)a.ra||Q(`Expected null or instance of ${c.name}, got an instance of ${a.name}`),b=a.ra(b),a=a.$;return b}function Nb(b,a){if(null===a)return this.Aa&&Q(`null is not a valid ${this.name}`),0;a.W||Q(`Cannot pass "${Ob(a)}" as a ${this.name}`);a.W.Y||Q(`Cannot pass deleted object as a pointer of type ${this.name}`);return Mb(a.W.Y,a.W.Z.X,this.X)}
function Pb(b,a){if(null===a){this.Aa&&Q(`null is not a valid ${this.name}`);if(this.ua){var c=this.Ba();null!==b&&b.push(this.ka,c);return c}return 0}a.W||Q(`Cannot pass "${Ob(a)}" as a ${this.name}`);a.W.Y||Q(`Cannot pass deleted object as a pointer of type ${this.name}`);!this.ta&&a.W.Z.ta&&Q(`Cannot convert argument of type ${a.W.fa?a.W.fa.name:a.W.Z.name} to parameter type ${this.name}`);c=Mb(a.W.Y,a.W.Z.X,this.X);if(this.ua)switch(void 0===a.W.ca&&Q("Passing raw pointer to smart pointer is illegal"),
this.Fb){case 0:a.W.fa===this?c=a.W.ca:Q(`Cannot convert argument of type ${a.W.fa?a.W.fa.name:a.W.Z.name} to parameter type ${this.name}`);break;case 1:c=a.W.ca;break;case 2:if(a.W.fa===this)c=a.W.ca;else{var d=a.clone();c=this.Bb(c,S(function(){d["delete"]()}));null!==b&&b.push(this.ka,c)}break;default:Q("Unsupporting sharing policy")}return c}
function Qb(b,a){if(null===a)return this.Aa&&Q(`null is not a valid ${this.name}`),0;a.W||Q(`Cannot pass "${Ob(a)}" as a ${this.name}`);a.W.Y||Q(`Cannot pass deleted object as a pointer of type ${this.name}`);a.W.Z.ta&&Q(`Cannot convert argument of type ${a.W.Z.name} to parameter type ${this.name}`);return Mb(a.W.Y,a.W.Z.X,this.X)}
function Rb(b,a,c,d){this.name=b;this.X=a;this.Aa=c;this.ta=d;this.ua=!1;this.ka=this.Bb=this.Ba=this.Sa=this.Fb=this.Ab=void 0;void 0!==a.$?this.toWireType=Pb:(this.toWireType=d?Nb:Qb,this.ea=null)}function Sb(b,a,c){m.hasOwnProperty(b)||xb("Replacing nonexistant public symbol");void 0!==m[b].aa&&void 0!==c?m[b].aa[c]=a:(m[b]=a,m[b].ma=c)}
var Tb=(b,a)=>{var c=[];return function(){c.length=0;Object.assign(c,arguments);if(b.includes("j")){var d=m["dynCall_"+b];d=c&&c.length?d.apply(null,[a].concat(c)):d.call(null,a)}else d=Fa.get(a).apply(null,c);return d}};function Z(b,a){b=U(b);var c=b.includes("j")?Tb(b,a):Fa.get(a);"function"!=typeof c&&Q(`unknown function pointer with signature ${b}: ${a}`);return c}var Ub=void 0;
function Vb(b,a){function c(f){e[f]||hb[f]||(Eb[f]?Eb[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};a.forEach(c);throw new Ub(`${b}: `+d.map(ib).join([", "]));}
function Wb(b,a,c,d,e){var f=a.length;2>f&&Q("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==a[1]&&null!==c,g=!1;for(c=1;c<a.length;++c)if(null!==a[c]&&void 0===a[c].ea){g=!0;break}var l="void"!==a[0].name,k=f-2,p=Array(k),r=[],t=[];return function(){arguments.length!==k&&Q(`function ${b} called with ${arguments.length} arguments, expected ${k} args!`);t.length=0;r.length=h?2:1;r[0]=e;if(h){var v=a[1].toWireType(t,this);r[1]=v}for(var q=0;q<k;++q)p[q]=
a[q+2].toWireType(t,arguments[q]),r.push(p[q]);q=d.apply(null,r);if(g)Bb(t);else for(var F=h?1:2;F<a.length;F++){var I=1===F?v:p[F-2];null!==a[F].ea&&a[F].ea(I)}v=l?a[0].fromWireType(q):void 0;return v}}function Xb(b,a){for(var c=[],d=0;d<b;d++)c.push(N[a+4*d>>2]);return c}
function Yb(b,a,c){b instanceof Object||Q(`${c} with invalid "this": ${b}`);b instanceof a.X.constructor||Q(`${c} incompatible with "this" of type ${b.constructor.name}`);b.W.Y||Q(`cannot call emscripten binding method ${c} on deleted object`);return Mb(b.W.Y,b.W.Z.X,a.X)}function Zb(b){b>=O.Ea&&0===--O.get(b).Ta&&O.Za(b)}
function $b(b,a,c){switch(a){case 0:return function(d){return this.fromWireType((c?ya:L)[d])};case 1:return function(d){return this.fromWireType((c?za:Aa)[d>>1])};case 2:return function(d){return this.fromWireType((c?Ba:N)[d>>2])};default:throw new TypeError("Unknown integer type: "+b);}}function Ob(b){if(null===b)return"null";var a=typeof b;return"object"===a||"array"===a||"function"===a?b.toString():""+b}
function ac(b,a){switch(a){case 2:return function(c){return this.fromWireType(Ca[c>>2])};case 3:return function(c){return this.fromWireType(Da[c>>3])};default:throw new TypeError("Unknown float type: "+b);}}
function bc(b,a,c){switch(a){case 0:return c?function(d){return ya[d]}:function(d){return L[d]};case 1:return c?function(d){return za[d>>1]}:function(d){return Aa[d>>1]};case 2:return c?function(d){return Ba[d>>2]}:function(d){return N[d>>2]};default:throw new TypeError("Unknown integer type: "+b);}}
var dc="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ec=(b,a,c)=>{var d=a+c;for(c=a;b[c]&&!(c>=d);)++c;if(16<c-a&&b.buffer&&dc)return dc.decode(b.subarray(a,c));for(d="";a<c;){var e=b[a++];if(e&128){var f=b[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var h=b[a++]&63;e=224==(e&240)?(e&15)<<12|f<<6|h:(e&7)<<18|f<<12|h<<6|b[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
fc="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,gc=(b,a)=>{var c=b>>1;for(var d=c+a/2;!(c>=d)&&Aa[c];)++c;c<<=1;if(32<c-b&&fc)return fc.decode(L.subarray(b,c));c="";for(d=0;!(d>=a/2);++d){var e=za[b+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c},hc=(b,a,c)=>{void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=a;c=c<2*b.length?c/2:b.length;for(var e=0;e<c;++e)za[a>>1]=b.charCodeAt(e),a+=2;za[a>>1]=0;return a-d},ic=b=>2*b.length,jc=(b,a)=>{for(var c=0,d="";!(c>=a/
4);){var e=Ba[b+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d},kc=(b,a,c)=>{void 0===c&&(c=2147483647);if(4>c)return 0;var d=a;c=d+c-4;for(var e=0;e<b.length;++e){var f=b.charCodeAt(e);if(55296<=f&&57343>=f){var h=b.charCodeAt(++e);f=65536+((f&1023)<<10)|h&1023}Ba[a>>2]=f;a+=4;if(a+4>c)break}Ba[a>>2]=0;return a-d},lc=b=>{for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);55296<=d&&57343>=d&&++c;a+=4}return a},mc=
{};function nc(b){var a=mc[b];return void 0===a?U(b):a}var oc=[];function pc(b){var a=oc.length;oc.push(b);return a}function qc(b,a){for(var c=Array(b),d=0;d<b;++d)c[d]=lb(N[a+4*d>>2],"parameter "+d);return c}
var rc=[],sc={},uc=()=>{if(!tc){var b={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ka||"./this.program"},a;for(a in sc)void 0===sc[a]?delete b[a]:b[a]=sc[a];var c=[];for(a in b)c.push(`${a}=${b[a]}`);tc=c}return tc},tc,vc=[null,[],[]];
Object.assign(Ya.prototype,{get(b){return this.ja[b]},has(b){return void 0!==this.ja[b]},Ya(b){var a=this.Oa.pop()||this.ja.length;this.ja[a]=b;return a},Za(b){this.ja[b]=void 0;this.Oa.push(b)}});Za=m.BindingError=class extends Error{constructor(b){super(b);this.name="BindingError"}};O.ja.push({value:void 0},{value:null},{value:!0},{value:!1});O.Ea=O.ja.length;m.count_emval_handles=function(){for(var b=0,a=O.Ea;a<O.ja.length;++a)void 0!==O.ja[a]&&++b;return b};bb=m.PureVirtualError=ab("PureVirtualError");
for(var wc=Array(256),xc=0;256>xc;++xc)wc[xc]=String.fromCharCode(xc);cb=wc;m.getInheritedInstanceCount=function(){return Object.keys(V).length};m.getLiveInheritedInstances=function(){var b=[],a;for(a in V)V.hasOwnProperty(a)&&b.push(V[a]);return b};m.flushPendingDeletes=eb;m.setDelayFunction=function(b){fb=b;db.length&&fb&&fb(eb)};wb=m.InternalError=class extends Error{constructor(b){super(b);this.name="InternalError"}};
Ib.prototype.isAliasOf=function(b){if(!(this instanceof Ib&&b instanceof Ib))return!1;var a=this.W.Z.X,c=this.W.Y,d=b.W.Z.X;for(b=b.W.Y;a.$;)c=a.ra(c),a=a.$;for(;d.$;)b=d.ra(b),d=d.$;return a===d&&c===b};Ib.prototype.clone=function(){this.W.Y||Hb(this);if(this.W.pa)return this.W.count.value+=1,this;var b=zb,a=Object,c=a.create,d=Object.getPrototypeOf(this),e=this.W;b=b(c.call(a,d,{W:{value:{count:e.count,na:e.na,pa:e.pa,Y:e.Y,Z:e.Z,ca:e.ca,fa:e.fa}}}));b.W.count.value+=1;b.W.na=!1;return b};
Ib.prototype["delete"]=function(){this.W.Y||Hb(this);this.W.na&&!this.W.pa&&Q("Object already scheduled for deletion");mb(this);ob(this.W);this.W.pa||(this.W.ca=void 0,this.W.Y=void 0)};Ib.prototype.isDeleted=function(){return!this.W.Y};Ib.prototype.deleteLater=function(){this.W.Y||Hb(this);this.W.na&&!this.W.pa&&Q("Object already scheduled for deletion");db.push(this);1===db.length&&fb&&fb(eb);this.W.na=!0;return this};Rb.prototype.pb=function(b){this.Sa&&(b=this.Sa(b));return b};
Rb.prototype.Ka=function(b){this.ka&&this.ka(b)};Rb.prototype.argPackAdvance=8;Rb.prototype.readValueFromPointer=Cb;Rb.prototype.deleteObject=function(b){if(null!==b)b["delete"]()};
Rb.prototype.fromWireType=function(b){function a(){return this.ua?yb(this.X.ga,{Z:this.Ab,Y:c,fa:this,ca:b}):yb(this.X.ga,{Z:this,Y:b})}var c=this.pb(b);if(!c)return this.Ka(b),null;var d=vb(this.X,c);if(void 0!==d){if(0===d.W.count.value)return d.W.Y=c,d.W.ca=b,d.clone();d=d.clone();this.Ka(b);return d}d=this.X.ob(c);d=ub[d];if(!d)return a.call(this);d=this.ta?d.fb:d.pointerType;var e=tb(c,this.X,d.X);return null===e?a.call(this):this.ua?yb(d.X.ga,{Z:d,Y:e,fa:this,ca:b}):yb(d.X.ga,{Z:d,Y:e})};
Ub=m.UnboundTypeError=ab("UnboundTypeError");
var zc={I:function(b,a,c){b=U(b);a=lb(a,"wrapper");c=$a(c);var d=[].slice,e=a.X,f=e.ga,h=e.$.ga,g=e.$.constructor;b=Wa(b,function(){e.$.Ra.forEach(function(k){if(this[k]===h[k])throw new bb(`Pure virtual function ${k} must be implemented in JavaScript`);}.bind(this));Object.defineProperty(this,"__parent",{value:f});this.__construct.apply(this,d.call(arguments))});f.__construct=function(){this===f&&Q("Pass correct 'this' to __construct");var k=g.implement.apply(void 0,[this].concat(d.call(arguments)));
mb(k);var p=k.W;k.notifyOnDestruction();p.pa=!0;Object.defineProperties(this,{W:{value:p}});zb(this);k=p.Y;k=gb(e,k);V.hasOwnProperty(k)?Q(`Tried to register registered instance: ${k}`):V[k]=this};f.__destruct=function(){this===f&&Q("Pass correct 'this' to __destruct");mb(this);var k=this.W.Y;k=gb(e,k);V.hasOwnProperty(k)?delete V[k]:Q(`Tried to unregister unregistered instance: ${k}`)};b.prototype=Object.create(f);for(var l in c)b.prototype[l]=c[l];return S(b)},L:function(b){var a=Ab[b];delete Ab[b];
var c=a.Ba,d=a.ka,e=a.Na,f=e.map(h=>h.sb).concat(e.map(h=>h.Db));X([b],f,h=>{var g={};e.forEach((l,k)=>{var p=h[k],r=l.qb,t=l.rb,v=h[k+e.length],q=l.Cb,F=l.Eb;g[l.mb]={read:I=>p.fromWireType(r(t,I)),write:(I,w)=>{var y=[];q(F,I,v.toWireType(y,w));Bb(y)}}});return[{name:a.name,fromWireType:function(l){var k={},p;for(p in g)k[p]=g[p].read(l);d(l);return k},toWireType:function(l,k){for(var p in g)if(!(p in k))throw new TypeError(`Missing field: "${p}"`);var r=c();for(p in g)g[p].write(r,k[p]);null!==
l&&l.push(d,r);return r},argPackAdvance:8,readValueFromPointer:Cb,ea:d}]})},z:function(){},G:function(b,a,c,d,e){var f=Fb(c);a=U(a);Y(b,{name:a,fromWireType:function(h){return!!h},toWireType:function(h,g){return g?d:e},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var g=ya;else if(2===c)g=za;else if(4===c)g=Ba;else throw new TypeError("Unknown boolean type size: "+a);return this.fromWireType(g[h>>f])},ea:null})},e:function(b,a,c,d,e,f,h,g,l,k,p,r,t){p=U(p);f=Z(e,f);g&&(g=Z(h,g));k&&(k=
Z(l,k));t=Z(r,t);var v=Va(p);Kb(v,function(){Vb(`Cannot construct ${p} due to unbound types`,[d])});X([b,a,c],d?[d]:[],function(q){q=q[0];if(d){var F=q.X;var I=F.ga}else I=Ib.prototype;q=Wa(v,function(){if(Object.getPrototypeOf(this)!==w)throw new Za("Use 'new' to construct "+p);if(void 0===y.la)throw new Za(p+" has no accessible constructor");var P=y.la[arguments.length];if(void 0===P)throw new Za(`Tried to invoke ctor of ${p} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(y.la).toString()}) parameters instead!`);
return P.apply(this,arguments)});var w=Object.create(I,{constructor:{value:q}});q.prototype=w;var y=new Lb(p,q,w,t,F,f,g,k);y.$&&(void 0===y.$.sa&&(y.$.sa=[]),y.$.sa.push(y));F=new Rb(p,y,!0,!1);I=new Rb(p+"*",y,!1,!1);var J=new Rb(p+" const*",y,!1,!0);ub[b]={pointerType:I,fb:J};Sb(v,q);return[F,I,J]})},k:function(b,a,c,d,e,f,h){var g=Xb(c,d);a=U(a);f=Z(e,f);X([],[b],function(l){function k(){Vb(`Cannot call ${p} due to unbound types`,g)}l=l[0];var p=`${l.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);
var r=l.X.constructor;void 0===r[a]?(k.ma=c-1,r[a]=k):(Jb(r,a,p),r[a].aa[c-1]=k);X([],g,function(t){t=Wb(p,[t[0],null].concat(t.slice(1)),null,f,h);void 0===r[a].aa?(t.ma=c-1,r[a]=t):r[a].aa[c-1]=t;if(l.X.sa)for(const v of l.X.sa)v.constructor.hasOwnProperty(a)||(v.constructor[a]=t);return[]});return[]})},s:function(b,a,c,d,e,f,h,g){a=U(a);f=Z(e,f);X([],[b],function(l){l=l[0];var k=`${l.name}.${a}`,p={get(){Vb(`Cannot access ${k} due to unbound types`,[c])},enumerable:!0,configurable:!0};p.set=g?
()=>{Vb(`Cannot access ${k} due to unbound types`,[c])}:()=>{Q(`${k} is a read-only property`)};Object.defineProperty(l.X.constructor,a,p);X([],[c],function(r){r=r[0];var t={get(){return r.fromWireType(f(d))},enumerable:!0};g&&(g=Z(h,g),t.set=v=>{var q=[];g(d,r.toWireType(q,v));Bb(q)});Object.defineProperty(l.X.constructor,a,t);return[]});return[]})},o:function(b,a,c,d,e,f){var h=Xb(a,c);e=Z(d,e);X([],[b],function(g){g=g[0];var l=`constructor ${g.name}`;void 0===g.X.la&&(g.X.la=[]);if(void 0!==g.X.la[a-
1])throw new Za(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${g.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);g.X.la[a-1]=()=>{Vb(`Cannot construct ${g.name} due to unbound types`,h)};X([],h,function(k){k.splice(1,0,null);g.X.la[a-1]=Wb(l,k,null,e,f);return[]});return[]})},a:function(b,a,c,d,e,f,h,g){var l=Xb(c,d);a=U(a);f=Z(e,f);X([],[b],function(k){function p(){Vb(`Cannot call ${r} due to unbound types`,
l)}k=k[0];var r=`${k.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);g&&k.X.Ra.push(a);var t=k.X.ga,v=t[a];void 0===v||void 0===v.aa&&v.className!==k.name&&v.ma===c-2?(p.ma=c-2,p.className=k.name,t[a]=p):(Jb(t,a,r),t[a].aa[c-2]=p);X([],l,function(q){q=Wb(r,q,k,f,h);void 0===t[a].aa?(q.ma=c-2,t[a]=q):t[a].aa[c-2]=q;return[]});return[]})},d:function(b,a,c,d,e,f,h,g,l,k){a=U(a);e=Z(d,e);X([],[b],function(p){p=p[0];var r=`${p.name}.${a}`,t={get(){Vb(`Cannot access ${r} due to unbound types`,
[c,h])},enumerable:!0,configurable:!0};t.set=l?()=>{Vb(`Cannot access ${r} due to unbound types`,[c,h])}:()=>{Q(r+" is a read-only property")};Object.defineProperty(p.X.ga,a,t);X([],l?[c,h]:[c],function(v){var q=v[0],F={get(){var w=Yb(this,p,r+" getter");return q.fromWireType(e(f,w))},enumerable:!0};if(l){l=Z(g,l);var I=v[1];F.set=function(w){var y=Yb(this,p,r+" setter"),J=[];l(k,y,I.toWireType(J,w));Bb(J)}}Object.defineProperty(p.X.ga,a,F);return[]});return[]})},F:function(b,a){a=U(a);Y(b,{name:a,
fromWireType:function(c){var d=$a(c);Zb(c);return d},toWireType:function(c,d){return S(d)},argPackAdvance:8,readValueFromPointer:Cb,ea:null})},l:function(b,a,c,d){function e(){}c=Fb(c);a=U(a);e.values={};Y(b,{name:a,constructor:e,fromWireType:function(f){return this.constructor.values[f]},toWireType:function(f,h){return h.value},argPackAdvance:8,readValueFromPointer:$b(a,c,d),ea:null});Kb(a,e)},c:function(b,a,c){var d=lb(b,"enum");a=U(a);b=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},
constructor:{value:Wa(`${d.name}_${a}`,function(){})}});b.values[c]=d;b[a]=d},u:function(b,a,c){c=Fb(c);a=U(a);Y(b,{name:a,fromWireType:function(d){return d},toWireType:function(d,e){return e},argPackAdvance:8,readValueFromPointer:ac(a,c),ea:null})},q:function(b,a,c,d,e,f){var h=Xb(a,c);b=U(b);e=Z(d,e);Kb(b,function(){Vb(`Cannot call ${b} due to unbound types`,h)},a-1);X([],h,function(g){Sb(b,Wb(b,[g[0],null].concat(g.slice(1)),null,e,f),a-1);return[]})},j:function(b,a,c,d,e){a=U(a);-1===e&&(e=4294967295);
e=Fb(c);var f=g=>g;if(0===d){var h=32-8*c;f=g=>g<<h>>>h}c=a.includes("unsigned")?function(g,l){return l>>>0}:function(g,l){return l};Y(b,{name:a,fromWireType:f,toWireType:c,argPackAdvance:8,readValueFromPointer:bc(a,e,0!==d),ea:null})},g:function(b,a,c){function d(f){f>>=2;var h=N;return new e(h.buffer,h[f+1],h[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][a];c=U(c);Y(b,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{tb:!0})},
v:function(b,a){a=U(a);var c="std::string"===a;Y(b,{name:a,fromWireType:function(d){var e=N[d>>2],f=d+4;if(c)for(var h=f,g=0;g<=e;++g){var l=f+g;if(g==e||0==L[l]){h=h?ec(L,h,l-h):"";if(void 0===k)var k=h;else k+=String.fromCharCode(0),k+=h;h=l+1}}else{k=Array(e);for(g=0;g<e;++g)k[g]=String.fromCharCode(L[f+g]);k=k.join("")}kb(d);return k},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var f,h="string"==typeof e;h||e instanceof Uint8Array||e instanceof Uint8ClampedArray||
e instanceof Int8Array||Q("Cannot pass non-string to std::string");var g;if(c&&h)for(f=g=0;f<e.length;++f){var l=e.charCodeAt(f);127>=l?g++:2047>=l?g+=2:55296<=l&&57343>=l?(g+=4,++f):g+=3}else g=e.length;f=g;g=yc(4+f+1);l=g+4;N[g>>2]=f;if(c&&h){if(h=l,l=f+1,f=L,0<l){l=h+l-1;for(var k=0;k<e.length;++k){var p=e.charCodeAt(k);if(55296<=p&&57343>=p){var r=e.charCodeAt(++k);p=65536+((p&1023)<<10)|r&1023}if(127>=p){if(h>=l)break;f[h++]=p}else{if(2047>=p){if(h+1>=l)break;f[h++]=192|p>>6}else{if(65535>=p){if(h+
2>=l)break;f[h++]=224|p>>12}else{if(h+3>=l)break;f[h++]=240|p>>18;f[h++]=128|p>>12&63}f[h++]=128|p>>6&63}f[h++]=128|p&63}}f[h]=0}}else if(h)for(h=0;h<f;++h)k=e.charCodeAt(h),255<k&&(kb(l),Q("String has UTF-16 code units that do not fit in 8 bits")),L[l+h]=k;else for(h=0;h<f;++h)L[l+h]=e[h];null!==d&&d.push(kb,g);return g},argPackAdvance:8,readValueFromPointer:Cb,ea:function(d){kb(d)}})},t:function(b,a,c){c=U(c);if(2===a){var d=gc;var e=hc;var f=ic;var h=()=>Aa;var g=1}else 4===a&&(d=jc,e=kc,f=lc,
h=()=>N,g=2);Y(b,{name:c,fromWireType:function(l){for(var k=N[l>>2],p=h(),r,t=l+4,v=0;v<=k;++v){var q=l+4+v*a;if(v==k||0==p[q>>g])t=d(t,q-t),void 0===r?r=t:(r+=String.fromCharCode(0),r+=t),t=q+a}kb(l);return r},toWireType:function(l,k){"string"!=typeof k&&Q(`Cannot pass non-string to C++ string type ${c}`);var p=f(k),r=yc(4+p+a);N[r>>2]=p>>g;e(k,r+4,p+a);null!==l&&l.push(kb,r);return r},argPackAdvance:8,readValueFromPointer:Cb,ea:function(l){kb(l)}})},N:function(b,a,c,d,e,f){Ab[b]={name:U(a),Ba:Z(c,
d),ka:Z(e,f),Na:[]}},M:function(b,a,c,d,e,f,h,g,l,k){Ab[b].Na.push({mb:U(a),sb:c,qb:Z(d,e),rb:f,Db:h,Cb:Z(g,l),Eb:k})},H:function(b,a){a=U(a);Y(b,{vb:!0,name:a,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},r:function(b,a,c){b=$a(b);a=lb(a,"emval::as");var d=[],e=S(d);N[c>>2]=e;return a.toWireType(d,b)},w:function(b,a,c,d,e){b=oc[b];a=$a(a);c=nc(c);var f=[];N[d>>2]=S(f);return b(a,c,f,e)},i:function(b,a,c,d){b=oc[b];a=$a(a);c=nc(c);b(a,c,null,d)},f:Zb,h:function(b,a){var c=
qc(b,a),d=c[0];a=d.name+"_$"+c.slice(1).map(function(h){return h.name}).join("_")+"$";var e=rc[a];if(void 0!==e)return e;var f=Array(b-1);e=pc((h,g,l,k)=>{for(var p=0,r=0;r<b-1;++r)f[r]=c[r+1].readValueFromPointer(k+p),p+=c[r+1].argPackAdvance;h=h[g].apply(h,f);for(r=0;r<b-1;++r)c[r+1].hb&&c[r+1].hb(f[r]);if(!d.vb)return d.toWireType(l,h)});return rc[a]=e},p:function(b){b=nc(b);return S(m[b])},K:function(b,a){b=$a(b);a=$a(a);return S(b[a])},m:function(b){4<b&&(O.get(b).Ta+=1)},J:function(b){return S(nc(b))},
n:function(b){var a=$a(b);Bb(a);Zb(b)},x:function(b,a){b=lb(b,"_emval_take_value");b=b.readValueFromPointer(a);return S(b)},b:()=>{ta("")},A:b=>{var a=L.length;b>>>=0;if(2147483648<b)return!1;for(var c=1;4>=c;c*=2){var d=a*(1+.2/c);d=Math.min(d,b+100663296);var e=Math;d=Math.max(b,d);a:{e=e.min.call(e,2147483648,d+(65536-d%65536)%65536)-wa.buffer.byteLength+65535>>>16;try{wa.grow(e);Ea();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},B:(b,a)=>{var c=0;uc().forEach(function(d,e){var f=
a+c;e=N[b+4*e>>2]=f;for(f=0;f<d.length;++f)ya[e++>>0]=d.charCodeAt(f);ya[e>>0]=0;c+=d.length+1});return 0},C:(b,a)=>{var c=uc();N[b>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});N[a>>2]=d;return 0},D:()=>52,y:function(){return 70},E:(b,a,c,d)=>{for(var e=0,f=0;f<c;f++){var h=N[a>>2],g=N[a+4>>2];a+=8;for(var l=0;l<g;l++){var k=L[h+l],p=vc[b];0===k||10===k?((1===b?qa:ra)(ec(p,0)),p.length=0):p.push(k)}e+=g}N[d>>2]=e;return 0}};
(function(){function b(c){H=c=c.exports;wa=H.O;Ea();Fa=H.U;Ha.unshift(H.P);Ka--;m.monitorRunDependencies&&m.monitorRunDependencies(Ka);if(0==Ka&&(null!==La&&(clearInterval(La),La=null),Ma)){var d=Ma;Ma=null;d()}return c}var a={a:zc};Ka++;m.monitorRunDependencies&&m.monitorRunDependencies(Ka);if(m.instantiateWasm)try{return m.instantiateWasm(a,b)}catch(c){ra("Module.instantiateWasm callback failed with error: "+c),ba(c)}Ta(a,function(c){b(c.instance)}).catch(ba);return{}})();
var kb=b=>(kb=H.Q)(b),yc=b=>(yc=H.R)(b),jb=b=>(jb=H.S)(b);m.__embind_initialize_bindings=()=>(m.__embind_initialize_bindings=H.T)();m.dynCall_jiji=(b,a,c,d,e)=>(m.dynCall_jiji=H.V)(b,a,c,d,e);var Ac;Ma=function Bc(){Ac||Cc();Ac||(Ma=Bc)};
function Cc(){function b(){if(!Ac&&(Ac=!0,m.calledRun=!0,!xa)){Ua(Ha);aa(m);if(m.onRuntimeInitialized)m.onRuntimeInitialized();if(m.postRun)for("function"==typeof m.postRun&&(m.postRun=[m.postRun]);m.postRun.length;){var a=m.postRun.shift();Ia.unshift(a)}Ua(Ia)}}if(!(0<Ka)){if(m.preRun)for("function"==typeof m.preRun&&(m.preRun=[m.preRun]);m.preRun.length;)Ja();Ua(Ga);0<Ka||(m.setStatus?(m.setStatus("Running..."),setTimeout(function(){setTimeout(function(){m.setStatus("")},1);b()},1)):b())}}
if(m.preInit)for("function"==typeof m.preInit&&(m.preInit=[m.preInit]);0<m.preInit.length;)m.preInit.pop()();Cc();


  return moduleArg.ready
}

);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rive);

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@rive-app/canvas","version":"2.1.0","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerTouchInteractions: () => (/* reexport safe */ _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions)
/* harmony export */ });
/* harmony import */ var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerTouchInteractions: () => (/* binding */ registerTouchInteractions)
/* harmony export */ });
var _this = undefined;
/**
 * Returns the clientX and clientY properties from touch or mouse events. Also
 * calls preventDefault() on the event if it is a touchstart or touchmove to prevent
 * scrolling the page on mobile devices
 * @param event - Either a TouchEvent or a MouseEvent
 * @returns - Coordinates of the clientX and clientY properties from the touch/mouse event
 */
var getClientCoordinates = function (event) {
    var _a, _b;
    if (["touchstart", "touchmove"].indexOf(event.type) > -1 &&
        ((_a = event.touches) === null || _a === void 0 ? void 0 : _a.length)) {
        event.preventDefault();
        return {
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
        };
    }
    else if (event.type === "touchend" &&
        ((_b = event.changedTouches) === null || _b === void 0 ? void 0 : _b.length)) {
        return {
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY,
        };
    }
    else {
        return {
            clientX: event.clientX,
            clientY: event.clientY,
        };
    }
};
/**
 * Registers mouse move/up/down callback handlers on the canvas to send meaningful coordinates to
 * the state machine pointer move/up/down functions based on cursor interaction
 */
var registerTouchInteractions = function (_a) {
    var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive = _a.rive, fit = _a.fit, alignment = _a.alignment;
    if (!canvas ||
        !stateMachines.length ||
        !renderer ||
        !rive ||
        !artboard ||
        typeof window === "undefined") {
        return null;
    }
    var processEventCallback = function (event) {
        var boundingRect = event.currentTarget.getBoundingClientRect();
        var _a = getClientCoordinates(event), clientX = _a.clientX, clientY = _a.clientY;
        if (!clientX && !clientY) {
            return;
        }
        var canvasX = clientX - boundingRect.left;
        var canvasY = clientY - boundingRect.top;
        var forwardMatrix = rive.computeAlignment(fit, alignment, {
            minX: 0,
            minY: 0,
            maxX: boundingRect.width,
            maxY: boundingRect.height,
        }, artboard.bounds);
        var invertedMatrix = new rive.Mat2D();
        forwardMatrix.invert(invertedMatrix);
        var canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
        var transformedVector = rive.mapXY(invertedMatrix, canvasCoordinatesVector);
        var transformedX = transformedVector.x();
        var transformedY = transformedVector.y();
        transformedVector.delete();
        invertedMatrix.delete();
        canvasCoordinatesVector.delete();
        forwardMatrix.delete();
        switch (event.type) {
            // Pointer moving/hovering on the canvas
            case "touchmove":
            case "mouseover":
            case "mouseout":
            case "mousemove": {
                for (var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++) {
                    var stateMachine = stateMachines_1[_i];
                    stateMachine.pointerMove(transformedX, transformedY);
                }
                break;
            }
            // Pointer click initiated but not released yet on the canvas
            case "touchstart":
            case "mousedown": {
                for (var _b = 0, stateMachines_2 = stateMachines; _b < stateMachines_2.length; _b++) {
                    var stateMachine = stateMachines_2[_b];
                    stateMachine.pointerDown(transformedX, transformedY);
                }
                break;
            }
            // Pointer click released on the canvas
            case "touchend":
            case "mouseup": {
                for (var _c = 0, stateMachines_3 = stateMachines; _c < stateMachines_3.length; _c++) {
                    var stateMachine = stateMachines_3[_c];
                    stateMachine.pointerUp(transformedX, transformedY);
                }
                break;
            }
            default:
        }
    };
    var callback = processEventCallback.bind(_this);
    canvas.addEventListener("mouseover", callback);
    canvas.addEventListener("mouseout", callback);
    canvas.addEventListener("mousemove", callback);
    canvas.addEventListener("mousedown", callback);
    canvas.addEventListener("mouseup", callback);
    canvas.addEventListener("touchmove", callback);
    canvas.addEventListener("touchstart", callback);
    canvas.addEventListener("touchend", callback);
    return function () {
        canvas.removeEventListener("mouseover", callback);
        canvas.removeEventListener("mouseout", callback);
        canvas.removeEventListener("mousemove", callback);
        canvas.removeEventListener("mousedown", callback);
        canvas.removeEventListener("mouseup", callback);
        canvas.removeEventListener("touchmove", callback);
        canvas.removeEventListener("touchstart", callback);
        canvas.removeEventListener("touchend", callback);
    };
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alignment: () => (/* binding */ Alignment),
/* harmony export */   EventType: () => (/* binding */ EventType),
/* harmony export */   Fit: () => (/* binding */ Fit),
/* harmony export */   Layout: () => (/* binding */ Layout),
/* harmony export */   LoopType: () => (/* binding */ LoopType),
/* harmony export */   Rive: () => (/* binding */ Rive),
/* harmony export */   RuntimeLoader: () => (/* binding */ RuntimeLoader),
/* harmony export */   StateMachineInput: () => (/* binding */ StateMachineInput),
/* harmony export */   StateMachineInputType: () => (/* binding */ StateMachineInputType),
/* harmony export */   Testing: () => (/* binding */ Testing)
/* harmony export */ });
/* harmony import */ var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// #region layout
// Fit options for the canvas
var Fit;
(function (Fit) {
    Fit["Cover"] = "cover";
    Fit["Contain"] = "contain";
    Fit["Fill"] = "fill";
    Fit["FitWidth"] = "fitWidth";
    Fit["FitHeight"] = "fitHeight";
    Fit["None"] = "none";
    Fit["ScaleDown"] = "scaleDown";
})(Fit || (Fit = {}));
// Alignment options for the canvas
var Alignment;
(function (Alignment) {
    Alignment["Center"] = "center";
    Alignment["TopLeft"] = "topLeft";
    Alignment["TopCenter"] = "topCenter";
    Alignment["TopRight"] = "topRight";
    Alignment["CenterLeft"] = "centerLeft";
    Alignment["CenterRight"] = "centerRight";
    Alignment["BottomLeft"] = "bottomLeft";
    Alignment["BottomCenter"] = "bottomCenter";
    Alignment["BottomRight"] = "bottomRight";
})(Alignment || (Alignment = {}));
// Alignment options for Rive animations in a HTML canvas
var Layout = /** @class */ (function () {
    function Layout(params) {
        var _a, _b, _c, _d, _e, _f;
        this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
        this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
        this.minX = (_c = params === null || params === void 0 ? void 0 : params.minX) !== null && _c !== void 0 ? _c : 0;
        this.minY = (_d = params === null || params === void 0 ? void 0 : params.minY) !== null && _d !== void 0 ? _d : 0;
        this.maxX = (_e = params === null || params === void 0 ? void 0 : params.maxX) !== null && _e !== void 0 ? _e : 0;
        this.maxY = (_f = params === null || params === void 0 ? void 0 : params.maxY) !== null && _f !== void 0 ? _f : 0;
    }
    // Alternative constructor to build a Layout from an interface/object
    Layout.new = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        console.warn("This function is deprecated: please use `new Layout({})` instead");
        return new Layout({ fit: fit, alignment: alignment, minX: minX, minY: minY, maxX: maxX, maxY: maxY });
    };
    /**
     * Makes a copy of the layout, replacing any specified parameters
     */
    Layout.prototype.copyWith = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        return new Layout({
            fit: fit !== null && fit !== void 0 ? fit : this.fit,
            alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
            minX: minX !== null && minX !== void 0 ? minX : this.minX,
            minY: minY !== null && minY !== void 0 ? minY : this.minY,
            maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
            maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY,
        });
    };
    // Returns fit for the Wasm runtime format
    Layout.prototype.runtimeFit = function (rive) {
        if (this.cachedRuntimeFit)
            return this.cachedRuntimeFit;
        var fit;
        if (this.fit === Fit.Cover)
            fit = rive.Fit.cover;
        else if (this.fit === Fit.Contain)
            fit = rive.Fit.contain;
        else if (this.fit === Fit.Fill)
            fit = rive.Fit.fill;
        else if (this.fit === Fit.FitWidth)
            fit = rive.Fit.fitWidth;
        else if (this.fit === Fit.FitHeight)
            fit = rive.Fit.fitHeight;
        else if (this.fit === Fit.ScaleDown)
            fit = rive.Fit.scaleDown;
        else
            fit = rive.Fit.none;
        this.cachedRuntimeFit = fit;
        return fit;
    };
    // Returns alignment for the Wasm runtime format
    Layout.prototype.runtimeAlignment = function (rive) {
        if (this.cachedRuntimeAlignment)
            return this.cachedRuntimeAlignment;
        var alignment;
        if (this.alignment === Alignment.TopLeft)
            alignment = rive.Alignment.topLeft;
        else if (this.alignment === Alignment.TopCenter)
            alignment = rive.Alignment.topCenter;
        else if (this.alignment === Alignment.TopRight)
            alignment = rive.Alignment.topRight;
        else if (this.alignment === Alignment.CenterLeft)
            alignment = rive.Alignment.centerLeft;
        else if (this.alignment === Alignment.CenterRight)
            alignment = rive.Alignment.centerRight;
        else if (this.alignment === Alignment.BottomLeft)
            alignment = rive.Alignment.bottomLeft;
        else if (this.alignment === Alignment.BottomCenter)
            alignment = rive.Alignment.bottomCenter;
        else if (this.alignment === Alignment.BottomRight)
            alignment = rive.Alignment.bottomRight;
        else
            alignment = rive.Alignment.center;
        this.cachedRuntimeAlignment = alignment;
        return alignment;
    };
    return Layout;
}());

// Runtime singleton; use getInstance to provide a callback that returns the
// Rive runtime
var RuntimeLoader = /** @class */ (function () {
    // Class is never instantiated
    function RuntimeLoader() {
    }
    // Loads the runtime
    RuntimeLoader.loadRuntime = function () {
        _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
            // Loads Wasm bundle
            locateFile: function () { return RuntimeLoader.wasmURL; },
        }).then(function (rive) {
            var _a;
            RuntimeLoader.runtime = rive;
            // Fire all the callbacks
            while (RuntimeLoader.callBackQueue.length > 0) {
                (_a = RuntimeLoader.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader.runtime);
            }
        });
    };
    // Provides a runtime instance via a callback
    RuntimeLoader.getInstance = function (callback) {
        // If it's not loading, start loading runtime
        if (!RuntimeLoader.isLoading) {
            RuntimeLoader.isLoading = true;
            RuntimeLoader.loadRuntime();
        }
        if (!RuntimeLoader.runtime) {
            RuntimeLoader.callBackQueue.push(callback);
        }
        else {
            callback(RuntimeLoader.runtime);
        }
    };
    // Provides a runtime instance via a promise
    RuntimeLoader.awaitInstance = function () {
        return new Promise(function (resolve) {
            return RuntimeLoader.getInstance(function (rive) { return resolve(rive); });
        });
    };
    // Manually sets the wasm url
    RuntimeLoader.setWasmUrl = function (url) {
        RuntimeLoader.wasmURL = url;
    };
    // Flag to indicate that loading has started/completed
    RuntimeLoader.isLoading = false;
    // List of callbacks for the runtime that come in while loading
    RuntimeLoader.callBackQueue = [];
    // Path to the Wasm file; default path works for testing only;
    // if embedded wasm is used then this is never used.
    RuntimeLoader.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
    return RuntimeLoader;
}());

// #endregion
// #region animations
// Wraps animations and instances from the runtime and keeps track of playback
// state
var Animation = /** @class */ (function () {
    /**
     * Constructs a new animation
     * @constructor
     * @param {any} animation: runtime animation object
     * @param {any} instance: runtime animation instance object
     */
    function Animation(animation, artboard, runtime, playing) {
        this.animation = animation;
        this.artboard = artboard;
        this.playing = playing;
        this.loopCount = 0;
        // Time to which the animation should move to on the next render
        this.scrubTo = null;
        this.instance = new runtime.LinearAnimationInstance(animation, artboard);
    }
    Object.defineProperty(Animation.prototype, "name", {
        // Returns the animation's name
        get: function () {
            return this.animation.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "time", {
        // Returns the animation's current time
        get: function () {
            return this.instance.time;
        },
        // Sets the animation's current time
        set: function (value) {
            this.instance.time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "loopValue", {
        // Returns the animation's loop type
        get: function () {
            return this.animation.loopValue;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Advances the animation by the give time. If the animation needs scrubbing,
     * time is ignored and the stored scrub value is used.
     * @param time the time to advance the animation by if no scrubbing required
     */
    Animation.prototype.advance = function (time) {
        if (this.scrubTo === null) {
            this.instance.advance(time);
        }
        else {
            this.instance.time = 0;
            this.instance.advance(this.scrubTo);
            this.scrubTo = null;
        }
    };
    /**
     * Apply interpolated keyframe values to the artboard. This should be called after calling
     * .advance() on an animation instance so that new values are applied to properties.
     *
     * Note: This does not advance the artboard, which updates all objects on the artboard
     * @param mix - Mix value for the animation from 0 to 1
     */
    Animation.prototype.apply = function (mix) {
        this.instance.apply(mix);
    };
    Object.defineProperty(Animation.prototype, "needsScrub", {
        get: function () {
            return this.scrubTo !== null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Deletes the backing Wasm animation instance; once this is called, this
     * animation is no more.
     */
    Animation.prototype.cleanup = function () {
        this.instance.delete();
    };
    return Animation;
}());
// #endregion
// #region state machines
var StateMachineInputType;
(function (StateMachineInputType) {
    StateMachineInputType[StateMachineInputType["Number"] = 56] = "Number";
    StateMachineInputType[StateMachineInputType["Trigger"] = 58] = "Trigger";
    StateMachineInputType[StateMachineInputType["Boolean"] = 59] = "Boolean";
})(StateMachineInputType || (StateMachineInputType = {}));
/**
 * An input for a state machine
 */
var StateMachineInput = /** @class */ (function () {
    function StateMachineInput(type, runtimeInput) {
        this.type = type;
        this.runtimeInput = runtimeInput;
    }
    Object.defineProperty(StateMachineInput.prototype, "name", {
        /**
         * Returns the name of the input
         */
        get: function () {
            return this.runtimeInput.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachineInput.prototype, "value", {
        /**
         * Returns the current value of the input
         */
        get: function () {
            return this.runtimeInput.value;
        },
        /**
         * Sets the value of the input
         */
        set: function (value) {
            this.runtimeInput.value = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fires a trigger; does nothing on Number or Boolean input types
     */
    StateMachineInput.prototype.fire = function () {
        if (this.type === StateMachineInputType.Trigger) {
            this.runtimeInput.fire();
        }
    };
    return StateMachineInput;
}());

var StateMachine = /** @class */ (function () {
    /**
     * @constructor
     * @param stateMachine runtime state machine object
     * @param instance runtime state machine instance object
     */
    function StateMachine(stateMachine, runtime, playing, artboard) {
        this.stateMachine = stateMachine;
        this.playing = playing;
        this.artboard = artboard;
        /**
         * Caches the inputs from the runtime
         */
        this.inputs = [];
        this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
        this.initInputs(runtime);
    }
    Object.defineProperty(StateMachine.prototype, "name", {
        get: function () {
            return this.stateMachine.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachine.prototype, "statesChanged", {
        /**
         * Returns a list of state names that have changed on this frame
         */
        get: function () {
            var names = [];
            for (var i = 0; i < this.instance.stateChangedCount(); i++) {
                names.push(this.instance.stateChangedNameByIndex(i));
            }
            return names;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Advances the state machine instance by a given time.
     * @param time - the time to advance the animation by in seconds
     */
    StateMachine.prototype.advance = function (time) {
        this.instance.advance(time);
    };
    /**
     * Fetches references to the state machine's inputs and caches them
     * @param runtime an instance of the runtime; needed for the SMIInput types
     */
    StateMachine.prototype.initInputs = function (runtime) {
        // Fetch the inputs from the runtime if we don't have them
        for (var i = 0; i < this.instance.inputCount(); i++) {
            var input = this.instance.input(i);
            this.inputs.push(this.mapRuntimeInput(input, runtime));
        }
    };
    /**
     * Maps a runtime input to it's appropriate type
     * @param input
     */
    StateMachine.prototype.mapRuntimeInput = function (input, runtime) {
        if (input.type === runtime.SMIInput.bool) {
            return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
        }
        else if (input.type === runtime.SMIInput.number) {
            return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
        }
        else if (input.type === runtime.SMIInput.trigger) {
            return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
        }
    };
    /**
     * Deletes the backing Wasm state machine instance; once this is called, this
     * state machine is no more.
     */
    StateMachine.prototype.cleanup = function () {
        this.instance.delete();
    };
    return StateMachine;
}());
// #endregion
// #region animator
/**
 * Manages animation
 */
var Animator = /** @class */ (function () {
    /**
     * Constructs a new animator
     * @constructor
     * @param runtime Rive runtime; needed to instance animations & state machines
     * @param artboard the artboard that holds all animations and state machines
     * @param animations optional list of animations
     * @param stateMachines optional list of state machines
     */
    function Animator(runtime, artboard, eventManager, animations, stateMachines) {
        if (animations === void 0) { animations = []; }
        if (stateMachines === void 0) { stateMachines = []; }
        this.runtime = runtime;
        this.artboard = artboard;
        this.eventManager = eventManager;
        this.animations = animations;
        this.stateMachines = stateMachines;
    }
    /**
     * Adds animations and state machines by their names. If names are shared
     * between animations & state machines, then the first one found will be
     * created. Best not to use the same names for these in your Rive file.
     * @param animatable the name(s) of animations and state machines to add
     * @returns a list of names of the playing animations and state machines
     */
    Animator.prototype.add = function (animatables, playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        animatables = mapToStringArray(animatables);
        // If animatables is empty, play or pause everything
        if (animatables.length === 0) {
            this.animations.forEach(function (a) { return (a.playing = playing); });
            this.stateMachines.forEach(function (m) { return (m.playing = playing); });
        }
        else {
            // Play/pause already instanced items, or create new instances
            var instancedAnimationNames = this.animations.map(function (a) { return a.name; });
            var instancedMachineNames = this.stateMachines.map(function (m) { return m.name; });
            for (var i = 0; i < animatables.length; i++) {
                var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                var mIndex = instancedMachineNames.indexOf(animatables[i]);
                if (aIndex >= 0 || mIndex >= 0) {
                    if (aIndex >= 0) {
                        // Animation is instanced, play/pause it
                        this.animations[aIndex].playing = playing;
                    }
                    else {
                        // State machine is instanced, play/pause it
                        this.stateMachines[mIndex].playing = playing;
                    }
                }
                else {
                    // Try to create a new animation instance
                    var anim = this.artboard.animationByName(animatables[i]);
                    if (anim) {
                        var newAnimation = new Animation(anim, this.artboard, this.runtime, playing);
                        // Display the first frame of the specified animation
                        newAnimation.advance(0);
                        newAnimation.apply(1.0);
                        this.animations.push(newAnimation);
                    }
                    else {
                        // Try to create a new state machine instance
                        var sm = this.artboard.stateMachineByName(animatables[i]);
                        if (sm) {
                            var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                            this.stateMachines.push(newStateMachine);
                        }
                    }
                }
            }
        }
        // Fire play/paused events for animations
        if (fireEvent) {
            if (playing) {
                this.eventManager.fire({
                    type: EventType.Play,
                    data: this.playing,
                });
            }
            else {
                this.eventManager.fire({
                    type: EventType.Pause,
                    data: this.paused,
                });
            }
        }
        return playing ? this.playing : this.paused;
    };
    /**
     * Play the named animations/state machines
     * @param animatables the names of the animations/machines to play; plays all if empty
     * @returns a list of the playing items
     */
    Animator.prototype.play = function (animatables) {
        return this.add(animatables, true);
    };
    /**
     * Pauses named animations and state machines, or everything if nothing is
     * specified
     * @param animatables names of the animations and state machines to pause
     * @returns a list of names of the animations and state machines paused
     */
    Animator.prototype.pause = function (animatables) {
        return this.add(animatables, false);
    };
    /**
     * Set time of named animations
     * @param animations names of the animations to scrub
     * @param value time scrub value, a floating point number to which the playhead is jumped
     * @returns a list of names of the animations that were scrubbed
     */
    Animator.prototype.scrub = function (animatables, value) {
        var forScrubbing = this.animations.filter(function (a) {
            return animatables.includes(a.name);
        });
        forScrubbing.forEach(function (a) { return (a.scrubTo = value); });
        return forScrubbing.map(function (a) { return a.name; });
    };
    Object.defineProperty(Animator.prototype, "playing", {
        /**
         * Returns a list of names of all animations and state machines currently
         * playing
         */
        get: function () {
            return this.animations
                .filter(function (a) { return a.playing; })
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.filter(function (m) { return m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "paused", {
        /**
         * Returns a list of names of all animations and state machines currently
         * paused
         */
        get: function () {
            return this.animations
                .filter(function (a) { return !a.playing; })
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.filter(function (m) { return !m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Stops and removes all named animations and state machines
     * @param animatables animations and state machines to remove
     * @returns a list of names of removed items
     */
    Animator.prototype.stop = function (animatables) {
        var _this = this;
        animatables = mapToStringArray(animatables);
        // If nothing's specified, wipe them out, all of them
        var removedNames = [];
        // Stop everything
        if (animatables.length === 0) {
            removedNames = this.animations
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.map(function (m) { return m.name; }));
            // Clean up before emptying the arrays
            this.animations.forEach(function (a) { return a.cleanup(); });
            this.stateMachines.forEach(function (m) { return m.cleanup(); });
            // Empty out the arrays
            this.animations.splice(0, this.animations.length);
            this.stateMachines.splice(0, this.stateMachines.length);
        }
        else {
            // Remove only the named animations/state machines
            var animationsToRemove = this.animations.filter(function (a) {
                return animatables.includes(a.name);
            });
            animationsToRemove.forEach(function (a) {
                a.cleanup();
                _this.animations.splice(_this.animations.indexOf(a), 1);
            });
            var machinesToRemove = this.stateMachines.filter(function (m) {
                return animatables.includes(m.name);
            });
            machinesToRemove.forEach(function (m) {
                m.cleanup();
                _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
            });
            removedNames = animationsToRemove
                .map(function (a) { return a.name; })
                .concat(machinesToRemove.map(function (m) { return m.name; }));
        }
        this.eventManager.fire({
            type: EventType.Stop,
            data: removedNames,
        });
        // Return the list of animations removed
        return removedNames;
    };
    Object.defineProperty(Animator.prototype, "isPlaying", {
        /**
         * Returns true if at least one animation is active
         */
        get: function () {
            return (this.animations.reduce(function (acc, curr) { return acc || curr.playing; }, false) ||
                this.stateMachines.reduce(function (acc, curr) { return acc || curr.playing; }, false));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isPaused", {
        /**
         * Returns true if all animations are paused and there's at least one animation
         */
        get: function () {
            return (!this.isPlaying &&
                (this.animations.length > 0 || this.stateMachines.length > 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isStopped", {
        /**
         * Returns true if there are no playing or paused animations/state machines
         */
        get: function () {
            return this.animations.length === 0 && this.stateMachines.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If there are no animations or state machines, add the first one found
     * @returns the name of the animation or state machine instanced
     */
    Animator.prototype.atLeastOne = function (playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        var instancedName;
        if (this.animations.length === 0 && this.stateMachines.length === 0) {
            if (this.artboard.animationCount() > 0) {
                // Add the first animation
                this.add([(instancedName = this.artboard.animationByIndex(0).name)], playing, fireEvent);
            }
            else if (this.artboard.stateMachineCount() > 0) {
                // Add the first state machine
                this.add([(instancedName = this.artboard.stateMachineByIndex(0).name)], playing, fireEvent);
            }
        }
        return instancedName;
    };
    /**
     * Checks if any animations have looped and if so, fire the appropriate event
     */
    Animator.prototype.handleLooping = function () {
        for (var _i = 0, _a = this.animations.filter(function (a) { return a.playing; }); _i < _a.length; _i++) {
            var animation = _a[_i];
            // Emit if the animation looped
            if (animation.loopValue === 0 && animation.loopCount) {
                animation.loopCount = 0;
                // This is a one-shot; if it has ended, delete the instance
                this.stop(animation.name);
            }
            else if (animation.loopValue === 1 && animation.loopCount) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.Loop },
                });
                animation.loopCount = 0;
            }
            // Wasm indicates a loop at each time the animation
            // changes direction, so a full loop/lap occurs every
            // two loop counts
            else if (animation.loopValue === 2 && animation.loopCount > 1) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.PingPong },
                });
                animation.loopCount = 0;
            }
        }
    };
    /**
     * Checks if states have changed in state machines and fires a statechange
     * event
     */
    Animator.prototype.handleStateChanges = function () {
        var statesChanged = [];
        for (var _i = 0, _a = this.stateMachines.filter(function (sm) { return sm.playing; }); _i < _a.length; _i++) {
            var stateMachine = _a[_i];
            statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
        }
        if (statesChanged.length > 0) {
            this.eventManager.fire({
                type: EventType.StateChange,
                data: statesChanged,
            });
        }
    };
    Animator.prototype.handleAdvancing = function (time) {
        this.eventManager.fire({
            type: EventType.Advance,
            data: time,
        });
    };
    return Animator;
}());
// #endregion
// #region events
/**
 * Supported event types triggered in Rive
 */
var EventType;
(function (EventType) {
    EventType["Load"] = "load";
    EventType["LoadError"] = "loaderror";
    EventType["Play"] = "play";
    EventType["Pause"] = "pause";
    EventType["Stop"] = "stop";
    EventType["Loop"] = "loop";
    EventType["Draw"] = "draw";
    EventType["Advance"] = "advance";
    EventType["StateChange"] = "statechange";
})(EventType || (EventType = {}));
/**
 * Looping types: one-shot, loop, and ping-pong
 */
var LoopType;
(function (LoopType) {
    LoopType["OneShot"] = "oneshot";
    LoopType["Loop"] = "loop";
    LoopType["PingPong"] = "pingpong";
})(LoopType || (LoopType = {}));
// Manages Rive events and listeners
var EventManager = /** @class */ (function () {
    function EventManager(listeners) {
        if (listeners === void 0) { listeners = []; }
        this.listeners = listeners;
    }
    // Gets listeners of specified type
    EventManager.prototype.getListeners = function (type) {
        return this.listeners.filter(function (e) { return e.type === type; });
    };
    // Adds a listener
    EventManager.prototype.add = function (listener) {
        if (!this.listeners.includes(listener)) {
            this.listeners.push(listener);
        }
    };
    /**
     * Removes a listener
     * @param listener the listener with the callback to be removed
     */
    EventManager.prototype.remove = function (listener) {
        // We can't simply look for the listener as it'll be a different instance to
        // one originally subscribed. Find all the listeners of the right type and
        // then check their callbacks which should match.
        for (var i = 0; i < this.listeners.length; i++) {
            var currentListener = this.listeners[i];
            if (currentListener.type === listener.type) {
                if (currentListener.callback === listener.callback) {
                    this.listeners.splice(i, 1);
                    break;
                }
            }
        }
    };
    /**
     * Clears all listeners of specified type, or every listener if no type is
     * specified
     * @param type the type of listeners to clear, or all listeners if not
     * specified
     */
    EventManager.prototype.removeAll = function (type) {
        var _this = this;
        if (!type) {
            this.listeners.splice(0, this.listeners.length);
        }
        else {
            this.listeners
                .filter(function (l) { return l.type === type; })
                .forEach(function (l) { return _this.remove(l); });
        }
    };
    // Fires an event
    EventManager.prototype.fire = function (event) {
        var eventListeners = this.getListeners(event.type);
        eventListeners.forEach(function (listener) { return listener.callback(event); });
    };
    return EventManager;
}());
// Manages a queue of tasks
var TaskQueueManager = /** @class */ (function () {
    function TaskQueueManager(eventManager) {
        this.eventManager = eventManager;
        this.queue = [];
    }
    // Adds a task top the queue
    TaskQueueManager.prototype.add = function (task) {
        this.queue.push(task);
    };
    // Processes all tasks in the queue
    TaskQueueManager.prototype.process = function () {
        while (this.queue.length > 0) {
            var task = this.queue.shift();
            if (task === null || task === void 0 ? void 0 : task.action) {
                task.action();
            }
            if (task === null || task === void 0 ? void 0 : task.event) {
                this.eventManager.fire(task.event);
            }
        }
    };
    return TaskQueueManager;
}());
var Rive = /** @class */ (function () {
    function Rive(params) {
        var _a;
        // Tracks if a Rive file is loaded
        this.loaded = false;
        /**
         * Tracks if a Rive file is loaded; we need this in addition to loaded as some
         * commands (e.g. contents) can be called as soon as the file is loaded.
         * However, playback commands need to be queued and run in order once initial
         * animations and autoplay has been sorted out. This applies to play, pause,
         * and start.
         */
        this.readyForPlaying = false;
        // Runtime artboard
        this.artboard = null;
        // place to clear up event listeners
        this.eventCleanup = null;
        this.shouldDisableRiveListeners = false;
        // Durations to generate a frame for the last second. Used for performance profiling.
        this.durations = [];
        this.frameTimes = [];
        this.frameCount = 0;
        /**
         * Used be draw to track when a second of active rendering time has passed.
         * Used for debugging purposes
         */
        this.renderSecondTimer = 0;
        this.canvas = params.canvas;
        this.src = params.src;
        this.buffer = params.buffer;
        this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
        this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
        // New event management system
        this.eventManager = new EventManager();
        if (params.onLoad)
            this.on(EventType.Load, params.onLoad);
        if (params.onLoadError)
            this.on(EventType.LoadError, params.onLoadError);
        if (params.onPlay)
            this.on(EventType.Play, params.onPlay);
        if (params.onPause)
            this.on(EventType.Pause, params.onPause);
        if (params.onStop)
            this.on(EventType.Stop, params.onStop);
        if (params.onLoop)
            this.on(EventType.Loop, params.onLoop);
        if (params.onStateChange)
            this.on(EventType.StateChange, params.onStateChange);
        if (params.onAdvance)
            this.on(EventType.Advance, params.onAdvance);
        /**
         * @deprecated Use camelCase'd versions instead.
         */
        if (params.onload && !params.onLoad)
            this.on(EventType.Load, params.onload);
        if (params.onloaderror && !params.onLoadError)
            this.on(EventType.LoadError, params.onloaderror);
        if (params.onplay && !params.onPlay)
            this.on(EventType.Play, params.onplay);
        if (params.onpause && !params.onPause)
            this.on(EventType.Pause, params.onpause);
        if (params.onstop && !params.onStop)
            this.on(EventType.Stop, params.onstop);
        if (params.onloop && !params.onLoop)
            this.on(EventType.Loop, params.onloop);
        if (params.onstatechange && !params.onStateChange)
            this.on(EventType.StateChange, params.onstatechange);
        // Hook up the task queue
        this.taskQueue = new TaskQueueManager(this.eventManager);
        this.init({
            src: this.src,
            buffer: this.buffer,
            autoplay: params.autoplay,
            animations: params.animations,
            stateMachines: params.stateMachines,
            artboard: params.artboard,
            useOffscreenRenderer: params.useOffscreenRenderer,
        });
    }
    // Alternative constructor to build a Rive instance from an interface/object
    Rive.new = function (params) {
        console.warn("This function is deprecated: please use `new Rive({})` instead");
        return new Rive(params);
    };
    // Initializes the Rive object either from constructor or load()
    Rive.prototype.init = function (_a) {
        var _this = this;
        var src = _a.src, buffer = _a.buffer, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c;
        this.src = src;
        this.buffer = buffer;
        // If no source file url specified, it's a bust
        if (!this.src && !this.buffer) {
            throw new Error(Rive.missingErrorMessage);
        }
        // List of animations that should be initialized.
        var startingAnimationNames = mapToStringArray(animations);
        // List of state machines that should be initialized
        var startingStateMachineNames = mapToStringArray(stateMachines);
        // Ensure loaded is marked as false if loading new file
        this.loaded = false;
        this.readyForPlaying = false;
        // Ensure the runtime is loaded
        RuntimeLoader.awaitInstance()
            .then(function (runtime) {
            _this.runtime = runtime;
            // Get the canvas where you want to render the animation and create a renderer
            _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
            // Initial size adjustment based on devicePixelRatio if no width/height are
            // specified explicitly
            if (!(_this.canvas.width || _this.canvas.height)) {
                _this.resizeDrawingSurfaceToCanvas();
            }
            // Load Rive data from a source uri or a data buffer
            _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay)
                .then(function () { return _this.setupRiveListeners(); })
                .catch(function (e) {
                console.error(e);
            });
        })
            .catch(function (e) {
            console.error(e);
        });
    };
    Rive.prototype.setupRiveListeners = function () {
        var _this = this;
        if (!this.shouldDisableRiveListeners) {
            var activeStateMachines = (this.animator.stateMachines || [])
                .filter(function (sm) { return sm.playing && _this.runtime.hasListeners(sm.instance); })
                .map(function (sm) { return sm.instance; });
            this.eventCleanup = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.registerTouchInteractions)({
                canvas: this.canvas,
                artboard: this.artboard,
                stateMachines: activeStateMachines,
                renderer: this.renderer,
                rive: this.runtime,
                fit: this._layout.runtimeFit(this.runtime),
                alignment: this._layout.runtimeAlignment(this.runtime),
            });
        }
    };
    // Initializes runtime with Rive data and preps for playing
    Rive.prototype.initData = function (artboardName, animationNames, stateMachineNames, autoplay) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, msg;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.src) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, loadRiveFile(this.src)];
                    case 1:
                        _b.buffer = _d.sent();
                        _d.label = 2;
                    case 2:
                        // Load the Rive file
                        _c = this;
                        return [4 /*yield*/, this.runtime.load(new Uint8Array(this.buffer))];
                    case 3:
                        // Load the Rive file
                        _c.file = _d.sent();
                        if (this.file) {
                            // Initialize and draw frame
                            this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                            // Everything's set up, emit a load event
                            this.loaded = true;
                            this.eventManager.fire({
                                type: EventType.Load,
                                data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer",
                            });
                            // Flag ready for playback commands and clear the task queue; this order
                            // is important or it may infinitely recurse
                            this.readyForPlaying = true;
                            this.taskQueue.process();
                            this.drawFrame();
                            return [2 /*return*/, Promise.resolve()];
                        }
                        else {
                            msg = "Problem loading file; may be corrupt!";
                            console.warn(msg);
                            this.eventManager.fire({ type: EventType.LoadError, data: msg });
                            return [2 /*return*/, Promise.reject(msg)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Initialize for playback
    Rive.prototype.initArtboard = function (artboardName, animationNames, stateMachineNames, autoplay) {
        // Fetch the artboard
        var rootArtboard = artboardName
            ? this.file.artboardByName(artboardName)
            : this.file.defaultArtboard();
        // Check we have a working artboard
        if (!rootArtboard) {
            var msg = "Invalid artboard name or no default artboard";
            console.warn(msg);
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            return;
        }
        this.artboard = rootArtboard;
        // Check that the artboard has at least 1 animation
        if (this.artboard.animationCount() < 1) {
            var msg = "Artboard has no animations";
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            throw msg;
        }
        // Initialize the animator
        this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
        // Initialize the animations; as loaded hasn't happened yet, we need to
        // suppress firing the play/pause events until the load event has fired. To
        // do this we tell the animator to suppress firing events, and add event
        // firing to the task queue.
        var instanceNames;
        if (animationNames.length > 0 || stateMachineNames.length > 0) {
            instanceNames = animationNames.concat(stateMachineNames);
            this.animator.add(instanceNames, autoplay, false);
        }
        else {
            instanceNames = [this.animator.atLeastOne(autoplay, false)];
        }
        // Queue up firing the playback events
        this.taskQueue.add({
            event: {
                type: autoplay ? EventType.Play : EventType.Pause,
                data: instanceNames,
            },
        });
    };
    // Draws the current artboard frame
    Rive.prototype.drawFrame = function () {
        this.startRendering();
    };
    /**
     * Draw rendering loop; renders animation frames at the correct time interval.
     * @param time the time at which to render a frame
     */
    Rive.prototype.draw = function (time, onSecond) {
        var before = performance.now();
        // Clear the frameRequestId, as we're now rendering a fresh frame
        this.frameRequestId = null;
        // On the first pass, make sure lastTime has a valid value
        if (!this.lastRenderTime) {
            this.lastRenderTime = time;
        }
        // Handle the onSecond callback
        this.renderSecondTimer += time - this.lastRenderTime;
        if (this.renderSecondTimer > 5000) {
            this.renderSecondTimer = 0;
            onSecond === null || onSecond === void 0 ? void 0 : onSecond();
        }
        // Calculate the elapsed time between frames in seconds
        var elapsedTime = (time - this.lastRenderTime) / 1000;
        this.lastRenderTime = time;
        // - Advance non-paused animations by the elapsed number of seconds
        // - Advance any animations that require scrubbing
        // - Advance to the first frame even when autoplay is false
        var activeAnimations = this.animator.animations
            .filter(function (a) { return a.playing || a.needsScrub; })
            // The scrubbed animations must be applied first to prevent weird artifacts
            // if the playing animations conflict with the scrubbed animating attribuates.
            .sort(function (first) { return (first.needsScrub ? -1 : 1); });
        for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
            var animation = activeAnimations_1[_i];
            animation.advance(elapsedTime);
            if (animation.instance.didLoop) {
                animation.loopCount += 1;
            }
            animation.apply(1.0);
        }
        // - Advance non-paused state machines by the elapsed number of seconds
        // - Advance to the first frame even when autoplay is false
        var activeStateMachines = this.animator.stateMachines.filter(function (a) { return a.playing; });
        for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
            var stateMachine = activeStateMachines_1[_a];
            stateMachine.advance(elapsedTime);
            // stateMachine.instance.apply(this.artboard);
        }
        // Once the animations have been applied to the artboard, advance it
        // by the elapsed time.
        this.artboard.advance(elapsedTime);
        var renderer = this.renderer;
        // Canvas must be wiped to prevent artifacts
        renderer.clear();
        renderer.save();
        // Update the renderer alignment if necessary
        this.alignRenderer();
        this.artboard.draw(renderer);
        renderer.restore();
        renderer.flush();
        // Check for any animations that looped
        this.animator.handleLooping();
        // Check for any state machines that had a state change
        this.animator.handleStateChanges();
        // Report advanced time
        this.animator.handleAdvancing(elapsedTime);
        // Add duration to create frame to durations array
        this.frameCount++;
        var after = performance.now();
        this.frameTimes.push(after);
        this.durations.push(after - before);
        while (this.frameTimes[0] <= after - 1000) {
            this.frameTimes.shift();
            this.durations.shift();
        }
        // Calling requestAnimationFrame will rerun draw() at the correct rate:
        // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
        if (this.animator.isPlaying) {
            // Request a new rendering frame
            this.startRendering();
        }
        else if (this.animator.isPaused) {
            // Reset the end time so on playback it starts at the correct frame
            this.lastRenderTime = 0;
        }
        else if (this.animator.isStopped) {
            // Reset animation instances, artboard and time
            // TODO: implement this properly when we have instancing
            // this.initArtboard();
            // this.drawFrame();
            this.lastRenderTime = 0;
        }
    };
    /**
     * Align the renderer
     */
    Rive.prototype.alignRenderer = function () {
        var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
        // Align things up safe in the knowledge we can restore if changed
        renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
            minX: _layout.minX,
            minY: _layout.minY,
            maxX: _layout.maxX,
            maxY: _layout.maxY,
        }, artboard.bounds);
    };
    Object.defineProperty(Rive.prototype, "fps", {
        get: function () {
            return this.durations.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "frameTime", {
        get: function () {
            if (this.durations.length === 0) {
                return 0;
            }
            return (this.durations.reduce(function (a, b) { return a + b; }, 0) / this.durations.length).toFixed(4);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Cleans up all Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances,
     * renderer instance, file and runtime.
     *
     * Once this is called, you will need to initialise a new instance of the
     * Rive class
     */
    Rive.prototype.cleanup = function () {
        var _a, _b;
        // Stop the renderer if it hasn't already been stopped.
        this.stopRendering();
        // Clean up any artboard, animation or state machine instances.
        this.cleanupInstances();
        // Delete the renderer
        (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.delete();
        this.renderer = null;
        // Delete the rive file
        (_b = this.file) === null || _b === void 0 ? void 0 : _b.delete();
        this.file = null;
    };
    /**
     * Cleans up any Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances.
     *
     * Once this is called, things will need to be reinitialized or bad things
     * might happen.
     */
    Rive.prototype.cleanupInstances = function () {
        if (this.eventCleanup !== null) {
            this.eventCleanup();
        }
        // Delete all animation and state machine instances
        this.stop();
        if (this.artboard) {
            this.artboard.delete();
            this.artboard = null;
        }
    };
    /**
     * Tries to query the setup Artboard for a text run node with the given name.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - TextValueRun node or undefined if the text run cannot be queried
     */
    Rive.prototype.retrieveTextRun = function (textRunName) {
        var _a;
        if (!textRunName) {
            console.warn("No text run name provided");
            return;
        }
        if (!this.artboard) {
            console.warn("Tried to access text run, but the Artboard is null");
            return;
        }
        var textRun = this.artboard.textRun(textRunName);
        if (!textRun) {
            console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
            return;
        }
        return textRun;
    };
    /**
     * Returns a string from a given text run node name, or undefined if the text run
     * cannot be queried.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - String value of the text run node or undefined
     */
    Rive.prototype.getTextRunValue = function (textRunName) {
        var textRun = this.retrieveTextRun(textRunName);
        return textRun ? textRun.text : undefined;
    };
    /**
     * Sets a text value for a given text run node name if possible
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @param textRunValue - String value to set on the text run node
     */
    Rive.prototype.setTextRunValue = function (textRunName, textRunValue) {
        var textRun = this.retrieveTextRun(textRunName);
        if (textRun) {
            textRun.text = textRunValue;
        }
    };
    // Plays specified animations; if none specified, it unpauses everything.
    Rive.prototype.play = function (animationNames, autoplay) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, queue up the play
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.play(animationNames, autoplay); },
            });
            return;
        }
        this.animator.play(animationNames);
        if (this.eventCleanup) {
            this.eventCleanup();
        }
        this.setupRiveListeners();
        this.startRendering();
    };
    // Pauses specified animations; if none specified, pauses all.
    Rive.prototype.pause = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.pause(animationNames); },
            });
            return;
        }
        if (this.eventCleanup) {
            this.eventCleanup();
        }
        this.animator.pause(animationNames);
    };
    Rive.prototype.scrub = function (animationNames, value) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.scrub(animationNames, value); },
            });
            return;
        }
        // Scrub the animation time; we draw a single frame here so that if
        // nothing's currently playing, the scrubbed animation is still rendered/
        this.animator.scrub(animationNames, value || 0);
        this.drawFrame();
    };
    // Stops specified animations; if none specifies, stops them all.
    Rive.prototype.stop = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.stop(animationNames); },
            });
            return;
        }
        this.animator.stop(animationNames);
        if (this.eventCleanup) {
            this.eventCleanup();
        }
    };
    /**
     * Resets the animation
     * @param artboard the name of the artboard, or default if none given
     * @param animations the names of animations for playback
     * @param stateMachines the names of state machines for playback
     * @param autoplay whether to autoplay when reset, defaults to false
     *
     */
    Rive.prototype.reset = function (params) {
        var _a;
        // Get the current artboard, animations, state machines, and playback states
        var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
        var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
        var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
        var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
        // Stop everything and clean up
        this.cleanupInstances();
        // Reinitialize an artboard instance with the state
        this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
        this.taskQueue.process();
    };
    // Loads a new Rive file, keeping listeners in place
    Rive.prototype.load = function (params) {
        // Stop all animations
        this.stop();
        // Reinitialize
        this.init(params);
    };
    Object.defineProperty(Rive.prototype, "layout", {
        /**
         * Returns the current layout. Note that layout should be treated as
         * immutable. If you want to change the layout, create a new one use the
         * layout setter
         */
        get: function () {
            return this._layout;
        },
        // Sets a new layout
        set: function (layout) {
            this._layout = layout;
            // If the maxX or maxY are 0, then set them to the canvas width and height
            if (!layout.maxX || !layout.maxY) {
                this.resizeToCanvas();
            }
            if (this.loaded && !this.animator.isPlaying) {
                this.drawFrame();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the layout bounds to the current canvas size; this is typically called
     * when the canvas is resized
     */
    Rive.prototype.resizeToCanvas = function () {
        this._layout = this.layout.copyWith({
            minX: 0,
            minY: 0,
            maxX: this.canvas.width,
            maxY: this.canvas.height,
        });
    };
    /**
     * Accounts for devicePixelRatio as a multiplier to render the size of the canvas drawing surface.
     * Uses the size of the backing canvas to set new width/height attributes. Need to re-render
     * and resize the layout to match the new drawing surface afterwards.
     * Useful function for consumers to include in a window resize listener
     */
    Rive.prototype.resizeDrawingSurfaceToCanvas = function () {
        if (this.canvas instanceof HTMLCanvasElement && !!window) {
            var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
            var dpr = window.devicePixelRatio || 1;
            this.canvas.width = dpr * width;
            this.canvas.height = dpr * height;
            this.startRendering();
            this.resizeToCanvas();
        }
    };
    Object.defineProperty(Rive.prototype, "source", {
        // Returns the animation source, which may be undefined
        get: function () {
            return this.src;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "activeArtboard", {
        /**
         * Returns the name of the active artboard
         */
        get: function () {
            return this.artboard ? this.artboard.name : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "animationNames", {
        // Returns a list of animation names on the chosen artboard
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var animationNames = [];
            for (var i = 0; i < this.artboard.animationCount(); i++) {
                animationNames.push(this.artboard.animationByIndex(i).name);
            }
            return animationNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "stateMachineNames", {
        /**
         * Returns a list of state machine names from the current artboard
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var stateMachineNames = [];
            for (var i = 0; i < this.artboard.stateMachineCount(); i++) {
                stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
            }
            return stateMachineNames;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the inputs for the specified instanced state machine, or an empty
     * list if the name is invalid or the state machine is not instanced
     * @param name the state machine name
     * @returns the inputs for the named state machine
     */
    Rive.prototype.stateMachineInputs = function (name) {
        // If the file's not loaded, early out, nothing to pause
        if (!this.loaded) {
            return;
        }
        var stateMachine = this.animator.stateMachines.find(function (m) { return m.name === name; });
        return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
    };
    Object.defineProperty(Rive.prototype, "playingStateMachineNames", {
        // Returns a list of playing machine names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "playingAnimationNames", {
        // Returns a list of playing animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations.filter(function (a) { return a.playing; }).map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
        // Returns a list of paused animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations
                .filter(function (a) { return !a.playing; })
                .map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
        /**
         *  Returns a list of paused machine names
         * @returns a list of state machine names that are paused
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return !m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPlaying", {
        /**
         * @returns true if any animation is playing
         */
        get: function () {
            return this.animator.isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPaused", {
        /**
         * @returns true if all instanced animations are paused
         */
        get: function () {
            return this.animator.isPaused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isStopped", {
        /**
         * @returns true if no animations are playing or paused
         */
        get: function () {
            return this.animator.isStopped;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "bounds", {
        /**
         * @returns the bounds of the current artboard, or undefined if the artboard
         * isn't loaded yet.
         */
        get: function () {
            return this.artboard ? this.artboard.bounds : undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */
    Rive.prototype.on = function (type, callback) {
        this.eventManager.add({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes from a Rive-generated event
     * @param type the type of event to unsubscribe from
     * @param callback the callback to unsubscribe
     */
    Rive.prototype.off = function (type, callback) {
        this.eventManager.remove({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes from a Rive-generated event
     * @deprecated
     * @param callback the callback to unsubscribe from
     */
    Rive.prototype.unsubscribe = function (type, callback) {
        console.warn("This function is deprecated: please use `off()` instead.");
        this.off(type, callback);
    };
    /**
     * Unsubscribes all Rive listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */
    Rive.prototype.removeAllRiveEventListeners = function (type) {
        this.eventManager.removeAll(type);
    };
    /**
     * Unsubscribes all listeners from an event type, or everything if no type is
     * given
     * @deprecated
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */
    Rive.prototype.unsubscribeAll = function (type) {
        console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
        this.removeAllRiveEventListeners(type);
    };
    /**
     * Stops the rendering loop; this is different from pausing in that it doesn't
     * change the state of any animation. It stops rendering from occurring. This
     * is designed for situations such as when Rive isn't visible.
     *
     * The only way to start rendering again is to call `startRendering`.
     * Animations that are marked as playing will start from the position that
     * they would have been at if rendering had not been stopped.
     */
    Rive.prototype.stopRendering = function () {
        if (this.loaded && this.frameRequestId) {
            if (this.runtime.cancelAnimationFrame) {
                this.runtime.cancelAnimationFrame(this.frameRequestId);
            }
            else {
                cancelAnimationFrame(this.frameRequestId);
            }
            this.frameRequestId = null;
        }
    };
    /**
     * Starts the rendering loop if it has been previously stopped. If the
     * renderer is already active, then this will have zero effect.
     */
    Rive.prototype.startRendering = function () {
        if (this.loaded && this.artboard && !this.frameRequestId) {
            if (this.runtime.requestAnimationFrame) {
                this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this));
            }
            else {
                this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
            }
        }
    };
    /**
     * Enables frames-per-second (FPS) reporting for the runtime
     * If no callback is provided, Rive will append a fixed-position div at the top-right corner of
     * the page with the FPS reading
     * @param fpsCallback - Callback from the runtime during the RAF loop that supplies the FPS value
     */
    Rive.prototype.enableFPSCounter = function (fpsCallback) {
        this.runtime.enableFPSCounter(fpsCallback);
    };
    /**
     * Disables frames-per-second (FPS) reporting for the runtime
     */
    Rive.prototype.disableFPSCounter = function () {
        this.runtime.disableFPSCounter();
    };
    Object.defineProperty(Rive.prototype, "contents", {
        /**
         * Returns the contents of a Rive file: the artboards, animations, and state machines
         */
        get: function () {
            if (!this.loaded) {
                return undefined;
            }
            var riveContents = {
                artboards: [],
            };
            for (var i = 0; i < this.file.artboardCount(); i++) {
                var artboard = this.file.artboardByIndex(i);
                var artboardContents = {
                    name: artboard.name,
                    animations: [],
                    stateMachines: [],
                };
                for (var j = 0; j < artboard.animationCount(); j++) {
                    var animation = artboard.animationByIndex(j);
                    artboardContents.animations.push(animation.name);
                }
                for (var k = 0; k < artboard.stateMachineCount(); k++) {
                    var stateMachine = artboard.stateMachineByIndex(k);
                    var name_1 = stateMachine.name;
                    var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                    var inputContents = [];
                    for (var l = 0; l < instance.inputCount(); l++) {
                        var input = instance.input(l);
                        inputContents.push({ name: input.name, type: input.type });
                    }
                    artboardContents.stateMachines.push({
                        name: name_1,
                        inputs: inputContents,
                    });
                }
                riveContents.artboards.push(artboardContents);
            }
            return riveContents;
        },
        enumerable: false,
        configurable: true
    });
    // Error message for missing source or buffer
    Rive.missingErrorMessage = "Rive source file or data buffer required";
    return Rive;
}());

// Loads Rive data from a URI via fetch.
var loadRiveFile = function (src) { return __awaiter(void 0, void 0, void 0, function () {
    var req, res, buffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req = new Request(src);
                return [4 /*yield*/, fetch(req)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.arrayBuffer()];
            case 2:
                buffer = _a.sent();
                return [2 /*return*/, buffer];
        }
    });
}); };
// #endregion
// #region utility functions
/*
 * Utility function to ensure an object is a string array
 */
var mapToStringArray = function (obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else if (obj instanceof Array) {
        return obj;
    }
    // If obj is undefined, return empty array
    return [];
};
// #endregion
// #region testing utilities
// Exports to only be used for tests
var Testing = {
    EventManager: EventManager,
    TaskQueueManager: TaskQueueManager,
};
// #endregion

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rive.js.map