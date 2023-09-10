"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[81],{22303:(e,t,n)=>{n.d(t,{Z:()=>d});var r,i,s=n(35270),o=n(22021),a=n(70586),l=n(75215);function u(e){return(0,o.uZ)((0,l.vU)(e),0,255)}function h(e,t,n){return e=Number(e),isNaN(e)?n:e<t?t:e>n?n:e}class p{static blendColors(e,t,n,r=new p){return r.r=Math.round(e.r+(t.r-e.r)*n),r.g=Math.round(e.g+(t.g-e.g)*n),r.b=Math.round(e.b+(t.b-e.b)*n),r.a=e.a+(t.a-e.a)*n,r._sanitize()}static fromRgb(e,t){const n=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(n){const e=n[2].split(/\s*,\s*/),r=n[1];if("rgb"===r&&3===e.length||"rgba"===r&&4===e.length){const n=e[0];if("%"===n.charAt(n.length-1)){const n=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(n[3]=parseFloat(e[3])),p.fromArray(n,t)}return p.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===r&&3===e.length||"hsla"===r&&4===e.length)return p.fromArray((0,s.B7)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new p){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const n=4===e.length?4:8,r=(1<<n)-1;let i=Number("0x"+e.substr(1));return isNaN(i)?null:(["b","g","r"].forEach((e=>{const s=i&r;i>>=n,t[e]=4===n?17*s:s})),t.a=1,t)}static fromArray(e,t=new p){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const n=(0,s.St)(e)?(0,s.h$)(e):null;return n&&p.fromArray(n,t)||p.fromRgb(e,t)||p.fromHex(e,t)}static fromJSON(e){return e&&new p([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,a.pC)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,a.pC)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?p.fromString(e,this):Array.isArray(e)?p.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof p||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${n.length<2?"0"+n:n}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=p.AlphaMode.ALWAYS){const t=u(this.r),n=u(this.g),r=u(this.b);return e===p.AlphaMode.ALWAYS||1!==this.a?[t,n,r,u(255*this.a)]:[t,n,r]}clone(){return new p(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return(0,a.pC)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(h(this.r,0,255)),this.g=Math.round(h(this.g,0,255)),this.b=Math.round(h(this.b,0,255)),this.a=h(this.a,0,1),this}_set(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a=r}}p.prototype.declaredClass="esri.Color",(i=(r=p||(p={})).AlphaMode||(r.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const d=p},35270:(e,t,n)=>{n.d(t,{B7:()=>l,St:()=>i,VL:()=>o,h$:()=>s,rW:()=>u});const r={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function i(e){return r[e]||r[e.toLowerCase()]}function s(e){return r[e]??r[e.toLowerCase()]}function o(e){return[...s(e)]}function a(e,t,n){n<0&&++n,n>1&&--n;const r=6*n;return r<1?e+(t-e)*r:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e}function l(e,t,n,r=1){const i=(e%360+360)%360/360,s=n<=.5?n*(t+1):n+t-n*t,o=2*n-s;return[Math.round(255*a(o,s,i+1/3)),Math.round(255*a(o,s,i)),Math.round(255*a(o,s,i-1/3)),r]}function u(e){const t=e.length>5,n=t?8:4,r=(1<<n)-1,i=t?1:17,s=t?9===e.length:5===e.length;let o=Number("0x"+e.substr(1));if(isNaN(o))return null;const a=[0,0,0,1];let l;return s&&(l=o&r,o>>=n,a[3]=i*l/255),l=o&r,o>>=n,a[2]=i*l,l=o&r,o>>=n,a[1]=i*l,l=o&r,o>>=n,a[0]=i*l,a}},68251:(e,t,n)=>{n.d(t,{BV:()=>o});var r=n(22021);class i{constructor(e,t){this.min=e,this.max=t,this.range=t-e}ndiff(e,t=0){return Math.ceil((e-t)/this.range)*this.range+t}_normalize(e,t,n,r=0,i=!1){return(n-=r)<e?n+=this.ndiff(e-n):n>t&&(n-=this.ndiff(n-t)),i&&n===t&&(n=e),n+r}normalize(e,t=0,n=!1){return this._normalize(this.min,this.max,e,t,n)}clamp(e,t=0){return(0,r.uZ)(e-t,this.min,this.max)+t}monotonic(e,t,n){return e<t?t:t+this.ndiff(e-t,n)}minimalMonotonic(e,t,n){return this._normalize(e,e+this.range,t,n)}center(e,t,n){return t=this.monotonic(e,t,n),this.normalize((e+t)/2,n)}diff(e,t,n){return this.monotonic(e,t,n)-e}shortestSignedDiff(e,t){e=this.normalize(e);const n=(t=this.normalize(t))-e,r=t<e?this.minimalMonotonic(e,t)-e:t-this.minimalMonotonic(t,e);return Math.abs(n)<Math.abs(r)?n:r}contains(e,t,n){return t=this.minimalMonotonic(e,t),(n=this.minimalMonotonic(e,n))>e&&n<t}}function s(e){for(const t in e){const n=e[t];n instanceof Function&&(e[t]=n.bind(e))}return e}s(new i(0,2*Math.PI)),s(new i(-Math.PI,Math.PI));const o=s(new i(0,360))},62357:(e,t,n)=>{n.d(t,{F2:()=>i,Wz:()=>s,t_:()=>o,vW:()=>a});const r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;function i(e){return e?e/72*96:0}function s(e){return e?72*e/96:0}function o(e){if("string"==typeof e){const t=e.match(r);if(t){const n=Number(t[1]),r=t[3]&&t[3].toLowerCase(),i="-"===e.charAt(0),o="px"===r?s(n):n;return i?-o:o}return console.warn("screenUtils.toPt: input not recognized!"),null}return e}function a(e=0,t=0){return{x:e,y:t}}},40081:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var r=n(43697),i=n(4757),s=n(22303),o=n(2368),a=n(96674),l=n(62357),u=n(5600),h=n(75215),p=(n(67676),n(52011));let d=class extends((0,a.eC)(o.j)){constructor(e){super(e),this.type="simple",this.color=new s.Z("black"),this.lineSize=2,this.fontSize=10,this.textColor=new s.Z("black"),this.textBackgroundColor=new s.Z([255,255,255,.6])}};(0,r._)([(0,u.Cb)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),(0,r._)([(0,u.Cb)({type:s.Z,nonNullable:!0,json:{type:[h.z8],write:{isRequired:!0}}})],d.prototype,"color",void 0),(0,r._)([(0,u.Cb)({type:Number,cast:l.t_,nonNullable:!0,range:{min:(0,l.Wz)(1)},json:{write:{isRequired:!0}}})],d.prototype,"lineSize",void 0),(0,r._)([(0,u.Cb)({type:Number,cast:l.t_,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"fontSize",void 0),(0,r._)([(0,u.Cb)({type:s.Z,nonNullable:!0,json:{type:[h.z8],write:{isRequired:!0}}})],d.prototype,"textColor",void 0),(0,r._)([(0,u.Cb)({type:s.Z,nonNullable:!0,json:{type:[h.z8],write:{isRequired:!0}}})],d.prototype,"textBackgroundColor",void 0),d=(0,r._)([(0,p.j)("esri.analysis.DimensionSimpleStyle")],d);const c=d;var g;n(66577),function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(g||(g={}));const y=[g.Horizontal,g.Vertical,g.Direct];var m=n(68251),b=n(90578),f=n(94139);let w=class extends((0,a.eC)(o.j)){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=g.Direct,this.offset=0,this.orientation=0}};(0,r._)([(0,u.Cb)({type:["length"],json:{write:{isRequired:!0}}})],w.prototype,"type",void 0),(0,r._)([(0,u.Cb)({type:f.Z,json:{write:!0}})],w.prototype,"startPoint",void 0),(0,r._)([(0,u.Cb)({type:f.Z,json:{write:!0}})],w.prototype,"endPoint",void 0),(0,r._)([(0,u.Cb)({type:y,nonNullable:!0,json:{write:{isRequired:!0}}})],w.prototype,"measureType",void 0),(0,r._)([(0,u.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],w.prototype,"offset",void 0),(0,r._)([(0,u.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,b.p)((e=>m.BV.normalize((0,h.q9)(e),0,!0)))],w.prototype,"orientation",void 0),w=(0,r._)([(0,p.j)("esri.analysis.LengthDimension")],w);const C=w;var _=n(46791),v=n(70921),k=n(70586),N=n(17445),x=n(6570),A=n(44547);const P=_.Z.ofType(C);let R=class extends i.Z{constructor(e){super(e),this.type="dimension",this.style=new c,this.extent=null}initialize(){this.addHandles((0,N.YP)((()=>this._computeExtent()),(e=>{((0,k.Wi)(e)||(0,k.Wi)(e.pending))&&this._set("extent",(0,k.pC)(e)?e.extent:null)}),N.tX))}get dimensions(){return this._get("dimensions")||new P}set dimensions(e){this._set("dimensions",(0,v.Z)(e,this.dimensions,P))}get spatialReference(){for(const e of this.dimensions){if((0,k.pC)(e.startPoint))return e.startPoint.spatialReference;if((0,k.pC)(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return(0,k.pC)(e)?(0,k.Wg)(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if((0,k.Wi)(e))return{pending:null,extent:null};const t=[];for(const e of this.dimensions)(0,k.pC)(e.startPoint)&&t.push(e.startPoint),(0,k.pC)(e.endPoint)&&t.push(e.endPoint);const n=(0,A.JY)(t,e);if((0,k.pC)(n.pending))return{pending:n.pending,extent:null};let r=null;return(0,k.pC)(n.geometries)&&(r=n.geometries.reduce(((e,t)=>(0,k.Wi)(e)?(0,k.pC)(t)?x.Z.fromPoint(t):null:(0,k.pC)(t)?e.union(x.Z.fromPoint(t)):e),null)),{pending:null,extent:r}}clear(){this.dimensions.removeAll()}};(0,r._)([(0,u.Cb)({type:["dimension"]})],R.prototype,"type",void 0),(0,r._)([(0,u.Cb)({cast:v.R,type:P,nonNullable:!0})],R.prototype,"dimensions",null),(0,r._)([(0,u.Cb)({readOnly:!0})],R.prototype,"spatialReference",null),(0,r._)([(0,u.Cb)({types:{key:"type",base:null,typeMap:{simple:c}},nonNullable:!0})],R.prototype,"style",void 0),(0,r._)([(0,u.Cb)({value:null,readOnly:!0})],R.prototype,"extent",void 0),(0,r._)([(0,u.Cb)({readOnly:!0})],R.prototype,"requiredPropertiesForEditing",null),R=(0,r._)([(0,p.j)("esri.analysis.DimensionAnalysis")],R);const S=R;var z=n(16453),M=n(30556),q=n(87085),j=n(38009);let Z=class extends((0,j.q)((0,z.R)(q.Z))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new S,this.opacity=1,e){const{source:t,style:n}=e;t&&n&&(t.style=n)}}initialize(){this.addHandles([(0,N.YP)((()=>this.source),((e,t)=>{(0,k.pC)(t)&&t.parent===this&&(t.parent=null),(0,k.pC)(e)&&(e.parent=this)}),N.tX)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return(0,k.Wg)(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new S)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,t,n,r){t.dimensions=e.filter((({startPoint:e,endPoint:t})=>(0,k.pC)(e)&&(0,k.pC)(t))).map((e=>e.toJSON(r))).toJSON()}};(0,r._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],Z.prototype,"type",void 0),(0,r._)([(0,u.Cb)({type:["ArcGISDimensionLayer"]})],Z.prototype,"operationalLayerType",void 0),(0,r._)([(0,u.Cb)({nonNullable:!0})],Z.prototype,"source",void 0),(0,r._)([(0,u.Cb)({readOnly:!0})],Z.prototype,"spatialReference",null),(0,r._)([(0,u.Cb)({types:{key:"type",base:null,typeMap:{simple:c}},json:{write:{ignoreOrigin:!0}}})],Z.prototype,"style",null),(0,r._)([(0,u.Cb)({readOnly:!0})],Z.prototype,"fullExtent",null),(0,r._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],Z.prototype,"opacity",void 0),(0,r._)([(0,u.Cb)({type:["show","hide"]})],Z.prototype,"listMode",void 0),(0,r._)([(0,u.Cb)({type:_.Z.ofType(C),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],Z.prototype,"dimensions",null),(0,r._)([(0,M.c)("web-scene","dimensions")],Z.prototype,"writeDimensions",null),Z=(0,r._)([(0,p.j)("esri.layers.DimensionLayer")],Z);const L=Z}}]);