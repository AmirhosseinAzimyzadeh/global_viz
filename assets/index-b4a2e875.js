var Ac=Object.defineProperty;var Cc=(n,t,e)=>t in n?Ac(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var rn=(n,t,e)=>(Cc(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ks="149",Lc=0,xa=1,Rc=2,ul=1,Pc=2,Li=3,fn=0,Me=1,un=2,hn=0,oi=1,va=2,ya=3,Ma=4,Dc=5,ei=100,Ic=101,Nc=102,Sa=103,ba=104,Fc=200,Uc=201,zc=202,Oc=203,hl=204,fl=205,Bc=206,kc=207,Gc=208,Vc=209,Hc=210,Wc=0,qc=1,Xc=2,Is=3,$c=4,Yc=5,jc=6,Zc=7,Qs=0,Jc=1,Kc=2,en=0,Qc=1,tu=2,eu=3,nu=4,iu=5,dl=300,ui=301,hi=302,Ns=303,Fs=304,zr=306,Us=1e3,Ie=1001,zs=1002,oe=1003,wa=1004,$r=1005,Ae=1006,ru=1007,Ii=1008,Fn=1009,su=1010,au=1011,pl=1012,ou=1013,Ln=1014,Rn=1015,Ni=1016,lu=1017,cu=1018,li=1020,uu=1021,Ne=1023,hu=1024,fu=1025,Dn=1026,fi=1027,du=1028,pu=1029,mu=1030,gu=1031,_u=1033,Yr=33776,jr=33777,Zr=33778,Jr=33779,Ea=35840,Ta=35841,Aa=35842,Ca=35843,xu=36196,La=37492,Ra=37496,Pa=37808,Da=37809,Ia=37810,Na=37811,Fa=37812,Ua=37813,za=37814,Oa=37815,Ba=37816,ka=37817,Ga=37818,Va=37819,Ha=37820,Wa=37821,Kr=36492,vu=36283,qa=36284,Xa=36285,$a=36286,Un=3e3,Ut=3001,yu=3200,Mu=3201,ml=0,Su=1,Oe="srgb",Fi="srgb-linear",Qr=7680,bu=519,Ya=35044,ja="300 es",Os=1035;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ts=Math.PI/180,Bs=180/Math.PI;function Gi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(te[n&255]+te[n>>8&255]+te[n>>16&255]+te[n>>24&255]+"-"+te[t&255]+te[t>>8&255]+"-"+te[t>>16&15|64]+te[t>>24&255]+"-"+te[e&63|128]+te[e>>8&255]+"-"+te[e>>16&255]+te[e>>24&255]+te[i&255]+te[i>>8&255]+te[i>>16&255]+te[i>>24&255]).toLowerCase()}function xe(n,t,e){return Math.max(t,Math.min(e,n))}function wu(n,t){return(n%t+t)%t}function es(n,t,e){return(1-e)*n+e*t}function Za(n){return(n&n-1)===0&&n!==0}function ks(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ye{constructor(){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],d=r[0],p=r[3],_=r[6],b=r[1],y=r[4],E=r[7],M=r[2],L=r[5],P=r[8];return s[0]=o*d+a*b+c*M,s[3]=o*p+a*y+c*L,s[6]=o*_+a*E+c*P,s[1]=l*d+u*b+f*M,s[4]=l*p+u*y+f*L,s[7]=l*_+u*E+f*P,s[2]=h*d+m*b+g*M,s[5]=h*p+m*y+g*L,s[8]=h*_+m*E+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=e*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=f*d,t[1]=(r*l-u*i)*d,t[2]=(a*i-r*o)*d,t[3]=h*d,t[4]=(u*e-r*c)*d,t[5]=(r*s-a*e)*d,t[6]=m*d,t[7]=(i*c-l*e)*d,t[8]=(o*e-i*s)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ns.makeScale(t,e)),this}rotate(t){return this.premultiply(ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(ns.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ns=new ye;function gl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ui(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const is={[Oe]:{[Fi]:In},[Fi]:{[Oe]:vr}},se={legacyMode:!0,get workingColorSpace(){return Fi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.legacyMode||t===e||!t||!e)return n;if(is[t]&&is[t][e]!==void 0){const i=is[t][e];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}},_l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ht={r:0,g:0,b:0},Le={h:0,s:0,l:0},ji={h:0,s:0,l:0};function rs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function Zi(n,t){return t.r=n.r,t.g=n.g,t.b=n.b,t}let Ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=se.workingColorSpace){if(t=wu(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=rs(o,s,t+1/3),this.g=rs(o,s,t),this.b=rs(o,s,t-1/3)}return se.toWorkingColorSpace(this,r),this}setStyle(t,e=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,se.toWorkingColorSpace(this,e),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,se.toWorkingColorSpace(this,e),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,l,u,e)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,se.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,se.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Oe){const i=_l[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return se.fromWorkingColorSpace(Zi(this,Ht),t),xe(Ht.r*255,0,255)<<16^xe(Ht.g*255,0,255)<<8^xe(Ht.b*255,0,255)<<0}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Zi(this,Ht),e);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Zi(this,Ht),e),t.r=Ht.r,t.g=Ht.g,t.b=Ht.b,t}getStyle(t=Oe){return se.fromWorkingColorSpace(Zi(this,Ht),t),t!==Oe?`color(${t} ${Ht.r} ${Ht.g} ${Ht.b})`:`rgb(${Ht.r*255|0},${Ht.g*255|0},${Ht.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Le),Le.h+=t,Le.s+=e,Le.l+=i,this.setHSL(Le.h,Le.s,Le.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Le),t.getHSL(ji);const i=es(Le.h,ji.h,e),r=es(Le.s,ji.s,e),s=es(Le.l,ji.l,e);return this.setHSL(i,r,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Ft.NAMES=_l;let Gn;class xl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=Ui("canvas")),Gn.width=t.width,Gn.height=t.height;const i=Gn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ui("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=In(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class vl{constructor(t=null){this.isSource=!0,this.uuid=Gi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ss(r[o].image)):s.push(ss(r[o]))}else s=ss(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ss(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;class he extends _i{constructor(t=he.DEFAULT_IMAGE,e=he.DEFAULT_MAPPING,i=Ie,r=Ie,s=Ae,o=Ii,a=Ne,c=Fn,l=he.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Gi(),this.name="",this.source=new vl(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case Ie:t.x=t.x<0?0:1;break;case zs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case Ie:t.y=t.y<0?0:1;break;case zs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}he.DEFAULT_IMAGE=null;he.DEFAULT_MAPPING=dl;he.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,i=0,r=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,E=(m+1)/2,M=(_+1)/2,L=(u+h)/4,P=(f+d)/4,v=(g+p)/4;return y>E&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=P/i):E>M?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=v/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=P/s,r=v/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-d)/b,this.z=(h-u)/b,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends _i{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const r={width:t,height:e,depth:1};this.texture=new he(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ae,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yl extends he{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=oe,this.minFilter=oe,this.wrapR=Ie,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tu extends he{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=oe,this.minFilter=oe,this.wrapR=Ie,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],d=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(f!==d||c!==h||l!==m||u!==g){let p=1-a;const _=c*h+l*m+u*g+f*d,b=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const M=Math.sqrt(y),L=Math.atan2(M,_*b);p=Math.sin(p*L)/M,a=Math.sin(a*L)/M}const E=a*b;if(c=c*p+h*E,l=l*p+m*E,u=u*p+g*E,f=f*p+d*E,p===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*m-l*h,t[e+1]=c*g+u*h+l*f-a*m,t[e+2]=l*g+u*m+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"YZX":this._x=h*u*f+l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f-h*m*g;break;case"XZY":this._x=h*u*f-l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*r-a*i,u=c*i+a*e-s*r,f=c*r+s*i-o*e,h=-s*e-o*i-a*r;return this.x=l*c+h*-s+u*-a-f*-o,this.y=u*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return as.copy(this).projectOnVector(t),this.sub(as)}reflect(t){return this.sub(as.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const as=new U,Ja=new Vi;class Hi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],f=t[c+1],h=t[c+2];u<e&&(e=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),f=t.getY(c),h=t.getZ(c);u<e&&(e=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,i,r),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)xn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(xn)}else i.boundingBox===null&&i.computeBoundingBox(),os.copy(i.boundingBox),os.applyMatrix4(t.matrixWorld),this.union(os);const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yi),Ji.subVectors(this.max,yi),Vn.subVectors(t.a,yi),Hn.subVectors(t.b,yi),Wn.subVectors(t.c,yi),sn.subVectors(Hn,Vn),an.subVectors(Wn,Hn),vn.subVectors(Vn,Wn);let e=[0,-sn.z,sn.y,0,-an.z,an.y,0,-vn.z,vn.y,sn.z,0,-sn.x,an.z,0,-an.x,vn.z,0,-vn.x,-sn.y,sn.x,0,-an.y,an.x,0,-vn.y,vn.x,0];return!ls(e,Vn,Hn,Wn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!ls(e,Vn,Hn,Wn,Ji))?!1:(Ki.crossVectors(sn,an),e=[Ki.x,Ki.y,Ki.z],ls(e,Vn,Hn,Wn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return xn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $e=[new U,new U,new U,new U,new U,new U,new U,new U],xn=new U,os=new Hi,Vn=new U,Hn=new U,Wn=new U,sn=new U,an=new U,vn=new U,yi=new U,Ji=new U,Ki=new U,yn=new U;function ls(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yn.fromArray(n,s);const a=r.x*Math.abs(yn.x)+r.y*Math.abs(yn.y)+r.z*Math.abs(yn.z),c=t.dot(yn),l=e.dot(yn),u=i.dot(yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Au=new Hi,Mi=new U,cs=new U;class ta{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Au.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Mi,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(cs)),this.expandByPoint(Mi.copy(t.center).sub(cs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new U,us=new U,Qi=new U,on=new U,hs=new U,tr=new U,fs=new U;class Cu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.direction).multiplyScalar(e).add(this.origin),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){us.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),on.copy(this.origin).sub(us);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Qi),a=on.dot(this.direction),c=-on.dot(Qi),l=on.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Qi).multiplyScalar(h).add(us),m}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const i=Ye.dot(this.direction),r=Ye.dot(Ye)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,i,r,s){hs.subVectors(e,t),tr.subVectors(i,t),fs.crossVectors(hs,tr);let o=this.direction.dot(fs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,t);const c=a*this.direction.dot(tr.crossVectors(on,tr));if(c<0)return null;const l=a*this.direction.dot(hs.cross(on));if(l<0||c+l>o)return null;const u=-a*on.dot(fs);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,r,s,o,a,c,l,u,f,h,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/qn.setFromMatrixColumn(t,0).length(),s=1/qn.setFromMatrixColumn(t,1).length(),o=1/qn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,m=o*f,g=a*u,d=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=h-d*l,e[9]=-a*c,e[2]=d-h*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,m=c*f,g=l*u,d=l*f;e[0]=h+d*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=d+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,m=c*f,g=l*u,d=l*f;e[0]=h-d*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=d-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,m=o*f,g=a*u,d=a*f;e[0]=c*u,e[4]=g*l-m,e[8]=h*l+d,e[1]=c*f,e[5]=d*l+h,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,m=o*l,g=a*c,d=a*l;e[0]=c*u,e[4]=d-h*f,e[8]=g*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*f+g,e[10]=h-d*f}else if(t.order==="XZY"){const h=o*c,m=o*l,g=a*c,d=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+d,e[5]=o*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*u,e[10]=d*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Ru)}lookAt(t,e,i){const r=this.elements;return me.subVectors(t,e),me.lengthSq()===0&&(me.z=1),me.normalize(),ln.crossVectors(i,me),ln.lengthSq()===0&&(Math.abs(i.z)===1?me.x+=1e-4:me.z+=1e-4,me.normalize(),ln.crossVectors(i,me)),ln.normalize(),er.crossVectors(me,ln),r[0]=ln.x,r[4]=er.x,r[8]=me.x,r[1]=ln.y,r[5]=er.y,r[9]=me.y,r[2]=ln.z,r[6]=er.z,r[10]=me.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],d=i[6],p=i[10],_=i[14],b=i[3],y=i[7],E=i[11],M=i[15],L=r[0],P=r[4],v=r[8],T=r[12],D=r[1],F=r[5],$=r[9],A=r[13],C=r[2],V=r[6],j=r[10],Y=r[14],B=r[3],Z=r[7],K=r[11],lt=r[15];return s[0]=o*L+a*D+c*C+l*B,s[4]=o*P+a*F+c*V+l*Z,s[8]=o*v+a*$+c*j+l*K,s[12]=o*T+a*A+c*Y+l*lt,s[1]=u*L+f*D+h*C+m*B,s[5]=u*P+f*F+h*V+m*Z,s[9]=u*v+f*$+h*j+m*K,s[13]=u*T+f*A+h*Y+m*lt,s[2]=g*L+d*D+p*C+_*B,s[6]=g*P+d*F+p*V+_*Z,s[10]=g*v+d*$+p*j+_*K,s[14]=g*T+d*A+p*Y+_*lt,s[3]=b*L+y*D+E*C+M*B,s[7]=b*P+y*F+E*V+M*Z,s[11]=b*v+y*$+E*j+M*K,s[15]=b*T+y*A+E*Y+M*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*m-i*c*m)+d*(+e*c*m-e*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+e*l*f-e*a*m-s*o*f+i*o*m+s*a*u-i*l*u)+_*(-r*a*u-e*c*f+e*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],b=f*p*l-d*h*l+d*c*m-a*p*m-f*c*_+a*h*_,y=g*h*l-u*p*l-g*c*m+o*p*m+u*c*_-o*h*_,E=u*d*l-g*f*l+g*a*m-o*d*m-u*a*_+o*f*_,M=g*f*c-u*d*c-g*a*h+o*d*h+u*a*p-o*f*p,L=e*b+i*y+r*E+s*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=b*P,t[1]=(d*h*s-f*p*s-d*r*m+i*p*m+f*r*_-i*h*_)*P,t[2]=(a*p*s-d*c*s+d*r*l-i*p*l-a*r*_+i*c*_)*P,t[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*m-i*c*m)*P,t[4]=y*P,t[5]=(u*p*s-g*h*s+g*r*m-e*p*m-u*r*_+e*h*_)*P,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*_-e*c*_)*P,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*m+e*c*m)*P,t[8]=E*P,t[9]=(g*f*s-u*d*s-g*i*m+e*d*m+u*i*_-e*f*_)*P,t[10]=(o*d*s-g*a*s+g*i*l-e*d*l-o*i*_+e*a*_)*P,t[11]=(u*a*s-o*f*s-u*i*l+e*f*l+o*i*m-e*a*m)*P,t[12]=M*P,t[13]=(u*d*r-g*f*r+g*i*h-e*d*h-u*i*p+e*f*p)*P,t[14]=(g*a*r-o*d*r-g*i*c+e*d*c+o*i*p-e*a*p)*P,t[15]=(o*f*r-u*a*r+u*i*c-e*f*c-o*i*h+e*a*h)*P,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,h=s*l,m=s*u,g=s*f,d=o*u,p=o*f,_=a*f,b=c*l,y=c*u,E=c*f,M=i.x,L=i.y,P=i.z;return r[0]=(1-(d+_))*M,r[1]=(m+E)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(m-E)*L,r[5]=(1-(h+_))*L,r[6]=(p+b)*L,r[7]=0,r[8]=(g+y)*P,r[9]=(p-b)*P,r[10]=(1-(h+d))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=qn.set(r[0],r[1],r[2]).length();const o=qn.set(r[4],r[5],r[6]).length(),a=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Re.copy(this);const l=1/s,u=1/o,f=1/a;return Re.elements[0]*=l,Re.elements[1]*=l,Re.elements[2]*=l,Re.elements[4]*=u,Re.elements[5]*=u,Re.elements[6]*=u,Re.elements[8]*=f,Re.elements[9]*=f,Re.elements[10]*=f,e.setFromRotationMatrix(Re),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o){const a=this.elements,c=2*s/(e-t),l=2*s/(i-r),u=(e+t)/(e-t),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,r,s,o){const a=this.elements,c=1/(e-t),l=1/(i-r),u=1/(o-s),f=(e+t)*c,h=(i+r)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const qn=new U,Re=new Wt,Lu=new U(0,0,0),Ru=new U(1,1,1),ln=new U,er=new U,me=new U,Ka=new Wt,Qa=new Vi;class Or{constructor(t=0,e=0,i=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ka.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ka,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pu=0;const to=new U,Xn=new Vi,je=new Wt,nr=new U,Si=new U,Du=new U,Iu=new Vi,eo=new U(1,0,0),no=new U(0,1,0),io=new U(0,0,1),Nu={type:"added"},ro={type:"removed"};class ne extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DEFAULT_UP.clone();const t=new U,e=new Or,i=new Vi,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ye}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(eo,t)}rotateY(t){return this.rotateOnAxis(no,t)}rotateZ(t){return this.rotateOnAxis(io,t)}translateOnAxis(t,e){return to.copy(t).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eo,t)}translateY(t){return this.translateOnAxis(no,t)}translateZ(t){return this.translateOnAxis(io,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(je.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?nr.copy(t):nr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?je.lookAt(Si,nr,this.up):je.lookAt(nr,Si,this.up),this.quaternion.setFromRotationMatrix(je),r&&(je.extractRotation(r.matrixWorld),Xn.setFromRotationMatrix(je),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Nu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ro)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ro)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),je.multiply(t.parent.matrixWorld)),t.applyMatrix4(je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,Du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ne.DEFAULT_UP=new U(0,1,0);ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pe=new U,Ze=new U,ds=new U,Je=new U,$n=new U,Yn=new U,so=new U,ps=new U,ms=new U,gs=new U;class Qe{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Pe.subVectors(t,e),r.cross(Pe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Pe.subVectors(r,e),Ze.subVectors(i,e),ds.subVectors(t,e);const o=Pe.dot(Pe),a=Pe.dot(Ze),c=Pe.dot(ds),l=Ze.dot(Ze),u=Ze.dot(ds),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Je),Je.x>=0&&Je.y>=0&&Je.x+Je.y<=1}static getUV(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Je),c.set(0,0),c.addScaledVector(s,Je.x),c.addScaledVector(o,Je.y),c.addScaledVector(a,Je.z),c}static isFrontFacing(t,e,i,r){return Pe.subVectors(i,e),Ze.subVectors(t,e),Pe.cross(Ze).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pe.subVectors(this.c,this.b),Ze.subVectors(this.a,this.b),Pe.cross(Ze).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Qe.getUV(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;$n.subVectors(r,i),Yn.subVectors(s,i),ps.subVectors(t,i);const c=$n.dot(ps),l=Yn.dot(ps);if(c<=0&&l<=0)return e.copy(i);ms.subVectors(t,r);const u=$n.dot(ms),f=Yn.dot(ms);if(u>=0&&f<=u)return e.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector($n,o);gs.subVectors(t,s);const m=$n.dot(gs),g=Yn.dot(gs);if(g>=0&&m<=g)return e.copy(s);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Yn,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return so.subVectors(s,r),a=(f-u)/(f-u+(m-g)),e.copy(r).addScaledVector(so,a);const _=1/(p+d+h);return o=d*_,a=h*_,e.copy(i).addScaledVector($n,o).addScaledVector(Yn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Fu=0;class Wi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=oi,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hl,this.blendDst=fl,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const r=this[e];if(r===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(i.blending=this.blending),this.side!==fn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sl extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gt=new U,ir=new Nt;class ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ya,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Gt.fromBufferAttribute(this,e),Gt.applyMatrix3(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Gt.fromBufferAttribute(this,e),Gt.applyMatrix4(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Gt.fromBufferAttribute(this,e),Gt.applyNormalMatrix(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Gt.fromBufferAttribute(this,e),Gt.transformDirection(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bl extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wl extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ge extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Uu=0;const Te=new Wt,_s=new ne,jn=new U,ge=new Hi,bi=new Hi,Zt=new U;class dn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gl(t)?wl:bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ye().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Te.makeRotationFromQuaternion(t),this.applyMatrix4(Te),this}rotateX(t){return Te.makeRotationX(t),this.applyMatrix4(Te),this}rotateY(t){return Te.makeRotationY(t),this.applyMatrix4(Te),this}rotateZ(t){return Te.makeRotationZ(t),this.applyMatrix4(Te),this}translate(t,e,i){return Te.makeTranslation(t,e,i),this.applyMatrix4(Te),this}scale(t,e,i){return Te.makeScale(t,e,i),this.applyMatrix4(Te),this}lookAt(t){return _s.lookAt(t),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ge.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,ge.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,ge.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(ge.min),this.boundingBox.expandByPoint(ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(ge.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(ge.min,bi.min),ge.expandByPoint(Zt),Zt.addVectors(ge.max,bi.max),ge.expandByPoint(Zt)):(ge.expandByPoint(bi.min),ge.expandByPoint(bi.max))}ge.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Zt.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Zt));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(jn.fromBufferAttribute(t,l),Zt.add(jn)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<a;D++)l[D]=new U,u[D]=new U;const f=new U,h=new U,m=new U,g=new Nt,d=new Nt,p=new Nt,_=new U,b=new U;function y(D,F,$){f.fromArray(r,D*3),h.fromArray(r,F*3),m.fromArray(r,$*3),g.fromArray(o,D*2),d.fromArray(o,F*2),p.fromArray(o,$*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(A),b.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(A),l[D].add(_),l[F].add(_),l[$].add(_),u[D].add(b),u[F].add(b),u[$].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let D=0,F=E.length;D<F;++D){const $=E[D],A=$.start,C=$.count;for(let V=A,j=A+C;V<j;V+=3)y(i[V+0],i[V+1],i[V+2])}const M=new U,L=new U,P=new U,v=new U;function T(D){P.fromArray(s,D*3),v.copy(P);const F=l[D];M.copy(F),M.sub(P.multiplyScalar(P.dot(F))).normalize(),L.crossVectors(v,F);const A=L.dot(u[D])<0?-1:1;c[D*4]=M.x,c[D*4+1]=M.y,c[D*4+2]=M.z,c[D*4+3]=A}for(let D=0,F=E.length;D<F;++D){const $=E[D],A=$.start,C=$.count;for(let V=A,j=A+C;V<j;V+=3)T(i[V+0]),T(i[V+1]),T(i[V+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,f=new U;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),d=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,d),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(d,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Zt.fromBufferAttribute(t,e),Zt.normalize(),t.setXYZ(e,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){a.isInterleavedBufferAttribute?m=c[d]*a.data.stride+a.offset:m=c[d]*u;for(let _=0;_<u;_++)h[g++]=l[m++]}return new ke(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=t(h,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new Wt,Zn=new Cu,xs=new ta,wi=new U,Ei=new U,Ti=new U,vs=new U,rr=new U,sr=new Nt,ar=new Nt,or=new Nt,ys=new U,lr=new U;class tn extends ne{constructor(t=new dn,e=new Sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){rr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(vs.fromBufferAttribute(f,t),o?rr.addScaledVector(vs,u):rr.addScaledVector(vs.sub(e),u))}e.add(rr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),t.ray.intersectsSphere(xs)===!1)||(ao.copy(s).invert(),Zn.copy(t.ray).applyMatrix4(ao),i.boundingBox!==null&&Zn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=r[d.materialIndex],_=Math.max(d.start,h.start),b=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let y=_,E=b;y<E;y+=3){const M=a.getX(y),L=a.getX(y+1),P=a.getX(y+2);o=cr(this,p,t,Zn,l,u,M,L,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=d.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=a.getX(d),b=a.getX(d+1),y=a.getX(d+2);o=cr(this,r,t,Zn,l,u,_,b,y),o&&(o.faceIndex=Math.floor(d/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=r[d.materialIndex],_=Math.max(d.start,h.start),b=Math.min(c.count,Math.min(d.start+d.count,h.start+h.count));for(let y=_,E=b;y<E;y+=3){const M=y,L=y+1,P=y+2;o=cr(this,p,t,Zn,l,u,M,L,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=d.materialIndex,e.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=d,b=d+1,y=d+2;o=cr(this,r,t,Zn,l,u,_,b,y),o&&(o.faceIndex=Math.floor(d/3),e.push(o))}}}}function zu(n,t,e,i,r,s,o,a){let c;if(t.side===Me?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===fn,a),c===null)return null;lr.copy(a),lr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(lr);return l<e.near||l>e.far?null:{distance:l,point:lr.clone(),object:n}}function cr(n,t,e,i,r,s,o,a,c){n.getVertexPosition(o,wi),n.getVertexPosition(a,Ei),n.getVertexPosition(c,Ti);const l=zu(n,t,e,i,wi,Ei,Ti,ys);if(l){r&&(sr.fromBufferAttribute(r,o),ar.fromBufferAttribute(r,a),or.fromBufferAttribute(r,c),l.uv=Qe.getUV(ys,wi,Ei,Ti,sr,ar,or,new Nt)),s&&(sr.fromBufferAttribute(s,o),ar.fromBufferAttribute(s,a),or.fromBufferAttribute(s,c),l.uv2=Qe.getUV(ys,wi,Ei,Ti,sr,ar,or,new Nt));const u={a:o,b:a,c,normal:new U,materialIndex:0};Qe.getNormal(wi,Ei,Ti,u.normal),l.face=u}return l}class qi extends dn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(f,2));function g(d,p,_,b,y,E,M,L,P,v,T){const D=E/P,F=M/v,$=E/2,A=M/2,C=L/2,V=P+1,j=v+1;let Y=0,B=0;const Z=new U;for(let K=0;K<j;K++){const lt=K*F-A;for(let z=0;z<V;z++){const X=z*D-$;Z[d]=X*b,Z[p]=lt*y,Z[_]=C,l.push(Z.x,Z.y,Z.z),Z[d]=0,Z[p]=0,Z[_]=L>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(z/P),f.push(1-K/v),Y+=1}}for(let K=0;K<v;K++)for(let lt=0;lt<P;lt++){const z=h+lt+V*K,X=h+lt+V*(K+1),nt=h+(lt+1)+V*(K+1),tt=h+(lt+1)+V*K;c.push(z,X,tt),c.push(X,nt,tt),B+=6}a.addGroup(m,B,T),m+=B,h+=Y}}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function di(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ae(n){const t={};for(let e=0;e<n.length;e++){const i=di(n[e]);for(const r in i)t[r]=i[r]}return t}function Ou(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function El(n){return n.getRenderTarget()===null&&n.outputEncoding===Ut?Oe:Fi}const Bu={clone:di,merge:ae};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.uniformsGroups=Ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Tl extends ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ve extends Tl{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Jn=-90,Kn=1;class Vu extends ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new ve(Jn,Kn,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new ve(Jn,Kn,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new ve(Jn,Kn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ve(Jn,Kn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new ve(Jn,Kn,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new ve(Jn,Kn,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=en,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,c),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Al extends he{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hu extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Al(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ae}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Me,blending:hn});s.uniforms.tEquirect.value=e;const o=new tn(r,s),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Ae),new Vu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Ms=new U,Wu=new U,qu=new ye;class wn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ms.subVectors(i,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(Ms),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qu.getNormalMatrix(t),r=this.coplanarPoint(Ms).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new ta,ur=new U;class ea{constructor(t=new wn,e=new wn,i=new wn,r=new wn,s=new wn,o=new wn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],d=i[11],p=i[12],_=i[13],b=i[14],y=i[15];return e[0].setComponents(a-r,f-c,d-h,y-p).normalize(),e[1].setComponents(a+r,f+c,d+h,y+p).normalize(),e[2].setComponents(a+s,f+l,d+m,y+_).normalize(),e[3].setComponents(a-s,f-l,d-m,y-_).normalize(),e[4].setComponents(a-o,f-u,d-g,y-b).normalize(),e[5].setComponents(a+o,f+u,d+g,y+b).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ur.x=r.normal.x>0?t.max.x:t.min.x,ur.y=r.normal.y>0?t.max.y:t.min.y,ur.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cl(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Xu(n,t){const e=t.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,h=l.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,l),m.count===-1?n.bufferSubData(f,0,h):(e?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class na extends dn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,h=e/c,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const b=_*h-o;for(let y=0;y<l;y++){const E=y*f-s;g.push(E,-b,0),d.push(0,0,1),p.push(y/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<a;b++){const y=b+l*_,E=b+l*(_+1),M=b+1+l*(_+1),L=b+1+l*_;m.push(y,E,L),m.push(E,M,L)}this.setIndex(m),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2))}static fromJSON(t){return new na(t.width,t.height,t.widthSegments,t.heightSegments)}}var $u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu="vec3 transformed = vec3( position );",th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,dh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ph=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",yh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Vh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,td=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ed=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ad=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bt={alphamap_fragment:$u,alphamap_pars_fragment:Yu,alphatest_fragment:ju,alphatest_pars_fragment:Zu,aomap_fragment:Ju,aomap_pars_fragment:Ku,begin_vertex:Qu,beginnormal_vertex:th,bsdfs:eh,iridescence_fragment:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:rh,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:oh,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:uh,color_vertex:hh,common:fh,cube_uv_reflection_fragment:dh,defaultnormal_vertex:ph,displacementmap_pars_vertex:mh,displacementmap_vertex:gh,emissivemap_fragment:_h,emissivemap_pars_fragment:xh,encodings_fragment:vh,encodings_pars_fragment:yh,envmap_fragment:Mh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:bh,envmap_pars_vertex:wh,envmap_physical_pars_fragment:Uh,envmap_vertex:Eh,fog_vertex:Th,fog_pars_vertex:Ah,fog_fragment:Ch,fog_pars_fragment:Lh,gradientmap_pars_fragment:Rh,lightmap_fragment:Ph,lightmap_pars_fragment:Dh,lights_lambert_fragment:Ih,lights_lambert_pars_fragment:Nh,lights_pars_begin:Fh,lights_toon_fragment:zh,lights_toon_pars_fragment:Oh,lights_phong_fragment:Bh,lights_phong_pars_fragment:kh,lights_physical_fragment:Gh,lights_physical_pars_fragment:Vh,lights_fragment_begin:Hh,lights_fragment_maps:Wh,lights_fragment_end:qh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:jh,map_fragment:Zh,map_pars_fragment:Jh,map_particle_fragment:Kh,map_particle_pars_fragment:Qh,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphcolor_vertex:nf,morphnormal_vertex:rf,morphtarget_pars_vertex:sf,morphtarget_vertex:af,normal_fragment_begin:of,normal_fragment_maps:lf,normal_pars_fragment:cf,normal_pars_vertex:uf,normal_vertex:hf,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:pf,clearcoat_pars_fragment:mf,iridescence_pars_fragment:gf,output_fragment:_f,packing:xf,premultiplied_alpha_fragment:vf,project_vertex:yf,dithering_fragment:Mf,dithering_pars_fragment:Sf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:wf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:Tf,shadowmap_vertex:Af,shadowmask_pars_fragment:Cf,skinbase_vertex:Lf,skinning_pars_vertex:Rf,skinning_vertex:Pf,skinnormal_vertex:Df,specularmap_fragment:If,specularmap_pars_fragment:Nf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Uf,transmission_fragment:zf,transmission_pars_fragment:Of,uv_pars_fragment:Bf,uv_pars_vertex:kf,uv_vertex:Gf,uv2_pars_fragment:Vf,uv2_pars_vertex:Hf,uv2_vertex:Wf,worldpos_vertex:qf,background_vert:Xf,background_frag:$f,backgroundCube_vert:Yf,backgroundCube_frag:jf,cube_vert:Zf,cube_frag:Jf,depth_vert:Kf,depth_frag:Qf,distanceRGBA_vert:td,distanceRGBA_frag:ed,equirect_vert:nd,equirect_frag:id,linedashed_vert:rd,linedashed_frag:sd,meshbasic_vert:ad,meshbasic_frag:od,meshlambert_vert:ld,meshlambert_frag:cd,meshmatcap_vert:ud,meshmatcap_frag:hd,meshnormal_vert:fd,meshnormal_frag:dd,meshphong_vert:pd,meshphong_frag:md,meshphysical_vert:gd,meshphysical_frag:_d,meshtoon_vert:xd,meshtoon_frag:vd,points_vert:yd,points_frag:Md,shadow_vert:Sd,shadow_frag:bd,sprite_vert:wd,sprite_frag:Ed},it={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ye},uv2Transform:{value:new ye},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ye}}},Be={basic:{uniforms:ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ft(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:ae([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:ae([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ft(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:ae([it.points,it.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:ae([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:ae([it.common,it.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:ae([it.sprite,it.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:ae([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:ae([it.lights,it.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Be.physical={uniforms:ae([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const hr={r:0,b:0,g:0};function Td(n,t,e,i,r,s,o){const a=new Ft(0);let c=s===!0?0:1,l,u,f=null,h=0,m=null;function g(p,_){let b=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const E=n.xr,M=E.getSession&&E.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?d(a,c):y&&y.isColor&&(d(y,1),b=!0),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===zr)?(u===void 0&&(u=new tn(new qi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:di(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==Ut,(f!==y||h!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new tn(new na(2,2),new On({name:"BackgroundMaterial",uniforms:di(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=y.encoding!==Ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,_){p.getRGB(hr,El(n)),i.buffers.color.setClear(hr.r,hr.g,hr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,d(a,c)},render:g}}function Ad(n,t,e,i){const r=n.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null);let l=c,u=!1;function f(C,V,j,Y,B){let Z=!1;if(o){const K=d(Y,j,V);l!==K&&(l=K,m(l.object)),Z=_(C,Y,j,B),Z&&b(C,Y,j,B)}else{const K=V.wireframe===!0;(l.geometry!==Y.id||l.program!==j.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=j.id,l.wireframe=K,Z=!0)}B!==null&&e.update(B,34963),(Z||u)&&(u=!1,v(C,V,j,Y),B!==null&&n.bindBuffer(34963,e.get(B).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(C){return i.isWebGL2?n.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function d(C,V,j){const Y=j.wireframe===!0;let B=a[C.id];B===void 0&&(B={},a[C.id]=B);let Z=B[V.id];Z===void 0&&(Z={},B[V.id]=Z);let K=Z[Y];return K===void 0&&(K=p(h()),Z[Y]=K),K}function p(C){const V=[],j=[],Y=[];for(let B=0;B<r;B++)V[B]=0,j[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:Y,object:C,attributes:{},index:null}}function _(C,V,j,Y){const B=l.attributes,Z=V.attributes;let K=0;const lt=j.getAttributes();for(const z in lt)if(lt[z].location>=0){const nt=B[z];let tt=Z[z];if(tt===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),nt===void 0||nt.attribute!==tt||tt&&nt.data!==tt.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function b(C,V,j,Y){const B={},Z=V.attributes;let K=0;const lt=j.getAttributes();for(const z in lt)if(lt[z].location>=0){let nt=Z[z];nt===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor));const tt={};tt.attribute=nt,nt&&nt.data&&(tt.data=nt.data),B[z]=tt,K++}l.attributes=B,l.attributesNum=K,l.index=Y}function y(){const C=l.newAttributes;for(let V=0,j=C.length;V<j;V++)C[V]=0}function E(C){M(C,0)}function M(C,V){const j=l.newAttributes,Y=l.enabledAttributes,B=l.attributeDivisors;j[C]=1,Y[C]===0&&(n.enableVertexAttribArray(C),Y[C]=1),B[C]!==V&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,V),B[C]=V)}function L(){const C=l.newAttributes,V=l.enabledAttributes;for(let j=0,Y=V.length;j<Y;j++)V[j]!==C[j]&&(n.disableVertexAttribArray(j),V[j]=0)}function P(C,V,j,Y,B,Z){i.isWebGL2===!0&&(j===5124||j===5125)?n.vertexAttribIPointer(C,V,j,B,Z):n.vertexAttribPointer(C,V,j,Y,B,Z)}function v(C,V,j,Y){if(i.isWebGL2===!1&&(C.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const B=Y.attributes,Z=j.getAttributes(),K=V.defaultAttributeValues;for(const lt in Z){const z=Z[lt];if(z.location>=0){let X=B[lt];if(X===void 0&&(lt==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),lt==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),X!==void 0){const nt=X.normalized,tt=X.itemSize,O=e.get(X);if(O===void 0)continue;const xt=O.buffer,ct=O.type,ut=O.bytesPerElement;if(X.isInterleavedBufferAttribute){const rt=X.data,Dt=rt.stride,St=X.offset;if(rt.isInstancedInterleavedBuffer){for(let vt=0;vt<z.locationSize;vt++)M(z.location+vt,rt.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let vt=0;vt<z.locationSize;vt++)E(z.location+vt);n.bindBuffer(34962,xt);for(let vt=0;vt<z.locationSize;vt++)P(z.location+vt,tt/z.locationSize,ct,nt,Dt*ut,(St+tt/z.locationSize*vt)*ut)}else{if(X.isInstancedBufferAttribute){for(let rt=0;rt<z.locationSize;rt++)M(z.location+rt,X.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let rt=0;rt<z.locationSize;rt++)E(z.location+rt);n.bindBuffer(34962,xt);for(let rt=0;rt<z.locationSize;rt++)P(z.location+rt,tt/z.locationSize,ct,nt,tt*ut,tt/z.locationSize*rt*ut)}}else if(K!==void 0){const nt=K[lt];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(z.location,nt);break;case 3:n.vertexAttrib3fv(z.location,nt);break;case 4:n.vertexAttrib4fv(z.location,nt);break;default:n.vertexAttrib1fv(z.location,nt)}}}}L()}function T(){$();for(const C in a){const V=a[C];for(const j in V){const Y=V[j];for(const B in Y)g(Y[B].object),delete Y[B];delete V[j]}delete a[C]}}function D(C){if(a[C.id]===void 0)return;const V=a[C.id];for(const j in V){const Y=V[j];for(const B in Y)g(Y[B].object),delete Y[B];delete V[j]}delete a[C.id]}function F(C){for(const V in a){const j=a[V];if(j[C.id]===void 0)continue;const Y=j[C.id];for(const B in Y)g(Y[B].object),delete Y[B];delete j[C.id]}}function $(){A(),u=!0,l!==c&&(l=c,m(l.object))}function A(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:$,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:E,disableUnusedAttributes:L}}function Cd(n,t,e,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,u,f),e.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Ld(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),_=n.getParameter(36348),b=n.getParameter(36349),y=h>0,E=o||t.has("OES_texture_float"),M=y&&E,L=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:L}}function Rd(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new wn,a=new ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,y=b*4;let E=_.clippingState||null;c.value=E,E=u(g,h,y,m);for(let M=0;M!==y;++M)E[M]=e[M];_.clippingState=E,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const _=m+d*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,E=m;y!==d;++y,E+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Pd(n){let t=new WeakMap;function e(o,a){return a===Ns?o.mapping=ui:a===Fs&&(o.mapping=hi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ns||a===Fs)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Hu(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Dd extends Tl{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,oo=[.125,.215,.35,.446,.526,.582],An=20,Ss=new Dd,lo=new Ft;let bs=null;const En=(1+Math.sqrt(5))/2,ti=1/En,co=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,En,ti),new U(0,En,-ti),new U(ti,0,En),new U(-ti,0,En),new U(En,ti,0),new U(-En,ti,0)];class uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){bs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bs),t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bs=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:Ni,format:Ne,encoding:Un,depthBuffer:!1},r=ho(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Id(s)),this._blurMaterial=Nd(s,t,e)}return r}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,Ss)}_sceneToCubeUV(t,e,i,r){const a=new ve(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(lo),u.toneMapping=en,u.autoClear=!1;const m=new Sl({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new tn(new qi,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(lo),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):b===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const y=this._cubeSize;fr(r,b*y,_>2?y:0,y,y),u.setRenderTarget(r),d&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ui||t.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;fr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ss)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=co[(r-1)%co.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new tn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*An-1),d=s/g,p=isFinite(s)?1+Math.floor(u*d):An;p>An&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${An}`);const _=[];let b=0;for(let P=0;P<An;++P){const v=P/d,T=Math.exp(-v*v/2);_.push(T),P===0?b+=T:P<p&&(b+=2*T)}for(let P=0;P<_.length;P++)_[P]=_[P]/b;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const E=this._sizeLods[r],M=3*E*(r>y-ii?r-y+ii:0),L=4*(this._cubeSize-E);fr(e,M,L,3*E,2*E),c.setRenderTarget(e),c.render(f,Ss)}}function Id(n){const t=[],e=[],i=[];let r=n;const s=n-ii+1+oo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-ii?c=oo[o-n+ii-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,b=new Float32Array(d*g*m),y=new Float32Array(p*g*m),E=new Float32Array(_*g*m);for(let L=0;L<m;L++){const P=L%3*2/3-1,v=L>2?0:-1,T=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];b.set(T,d*g*L),y.set(h,p*g*L);const D=[L,L,L,L,L,L];E.set(D,_*g*L)}const M=new dn;M.setAttribute("position",new ke(b,d)),M.setAttribute("uv",new ke(y,p)),M.setAttribute("faceIndex",new ke(E,_)),t.push(M),r>ii&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ho(n,t,e){const i=new zn(n,t,e);return i.texture.mapping=zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Nd(n,t,e){const i=new Float32Array(An),r=new U(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function fo(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function po(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fd(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ns||c===Fs,u=c===ui||c===hi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new uo(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){e===null&&(e=new uo(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ud(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zd(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function l(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let y=0,E=b.length;y<E;y+=3){const M=b[y+0],L=b[y+1],P=b[y+2];h.push(M,L,L,P,P,M)}}else{const b=g.array;d=g.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const M=y+0,L=y+1,P=y+2;h.push(M,L,L,P,P,M)}}const p=new(gl(h)?wl:bl)(h,1);p.version=d;const _=s.get(f);_&&t.remove(_),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Od(n,t,e,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,m){n.drawElements(s,m,a,h*c),e.update(m,s,1)}function f(h,m,g){if(g===0)return;let d,p;if(r)d=n,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Bd(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function kd(n,t){return n[0]-t[0]}function Gd(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Vd(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Jt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let j=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;E===!0&&(D=1),M===!0&&(D=2),L===!0&&(D=3);let F=u.attributes.position.count*D,$=1;F>t.maxTextureSize&&($=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const A=new Float32Array(F*$*4*p),C=new yl(A,F,$,p);C.type=Rn,C.needsUpdate=!0;const V=D*4;for(let Y=0;Y<p;Y++){const B=P[Y],Z=v[Y],K=T[Y],lt=F*$*4*Y;for(let z=0;z<B.count;z++){const X=z*V;E===!0&&(o.fromBufferAttribute(B,z),A[lt+X+0]=o.x,A[lt+X+1]=o.y,A[lt+X+2]=o.z,A[lt+X+3]=0),M===!0&&(o.fromBufferAttribute(Z,z),A[lt+X+4]=o.x,A[lt+X+5]=o.y,A[lt+X+6]=o.z,A[lt+X+7]=0),L===!0&&(o.fromBufferAttribute(K,z),A[lt+X+8]=o.x,A[lt+X+9]=o.y,A[lt+X+10]=o.z,A[lt+X+11]=K.itemSize===4?o.w:1)}}_={count:p,texture:C,size:new Nt(F,$)},s.set(u,_),u.addEventListener("dispose",j)}let b=0;for(let E=0;E<m.length;E++)b+=m[E];const y=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];i[u.id]=p}for(let M=0;M<d;M++){const L=p[M];L[0]=M,L[1]=m[M]}p.sort(Gd);for(let M=0;M<8;M++)M<d&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(kd);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const L=a[M],P=L[0],v=L[1];P!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+M)!==_[P]&&u.setAttribute("morphTarget"+M,_[P]),b&&u.getAttribute("morphNormal"+M)!==b[P]&&u.setAttribute("morphNormal"+M,b[P]),r[M]=v,y+=v):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const E=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Hd(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);return r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Ll=new he,Rl=new yl,Pl=new Tu,Dl=new Al,mo=[],go=[],_o=new Float32Array(16),xo=new Float32Array(9),vo=new Float32Array(4);function xi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=mo[r];if(s===void 0&&(s=new Float32Array(r),mo[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function qt(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xt(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Br(n,t){let e=go[t];e===void 0&&(e=new Int32Array(t),go[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Wd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qt(e,t))return;n.uniform2fv(this.addr,t),Xt(e,t)}}function Xd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qt(e,t))return;n.uniform3fv(this.addr,t),Xt(e,t)}}function $d(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qt(e,t))return;n.uniform4fv(this.addr,t),Xt(e,t)}}function Yd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qt(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xt(e,t)}else{if(qt(e,i))return;vo.set(i),n.uniformMatrix2fv(this.addr,!1,vo),Xt(e,i)}}function jd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qt(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xt(e,t)}else{if(qt(e,i))return;xo.set(i),n.uniformMatrix3fv(this.addr,!1,xo),Xt(e,i)}}function Zd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qt(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xt(e,t)}else{if(qt(e,i))return;_o.set(i),n.uniformMatrix4fv(this.addr,!1,_o),Xt(e,i)}}function Jd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Kd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qt(e,t))return;n.uniform2iv(this.addr,t),Xt(e,t)}}function Qd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qt(e,t))return;n.uniform3iv(this.addr,t),Xt(e,t)}}function tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qt(e,t))return;n.uniform4iv(this.addr,t),Xt(e,t)}}function ep(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function np(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qt(e,t))return;n.uniform2uiv(this.addr,t),Xt(e,t)}}function ip(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qt(e,t))return;n.uniform3uiv(this.addr,t),Xt(e,t)}}function rp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qt(e,t))return;n.uniform4uiv(this.addr,t),Xt(e,t)}}function sp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||Ll,r)}function ap(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Pl,r)}function op(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Dl,r)}function lp(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Rl,r)}function cp(n){switch(n){case 5126:return Wd;case 35664:return qd;case 35665:return Xd;case 35666:return $d;case 35674:return Yd;case 35675:return jd;case 35676:return Zd;case 5124:case 35670:return Jd;case 35667:case 35671:return Kd;case 35668:case 35672:return Qd;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}function up(n,t){n.uniform1fv(this.addr,t)}function hp(n,t){const e=xi(t,this.size,2);n.uniform2fv(this.addr,e)}function fp(n,t){const e=xi(t,this.size,3);n.uniform3fv(this.addr,e)}function dp(n,t){const e=xi(t,this.size,4);n.uniform4fv(this.addr,e)}function pp(n,t){const e=xi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mp(n,t){const e=xi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gp(n,t){const e=xi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _p(n,t){n.uniform1iv(this.addr,t)}function xp(n,t){n.uniform2iv(this.addr,t)}function vp(n,t){n.uniform3iv(this.addr,t)}function yp(n,t){n.uniform4iv(this.addr,t)}function Mp(n,t){n.uniform1uiv(this.addr,t)}function Sp(n,t){n.uniform2uiv(this.addr,t)}function bp(n,t){n.uniform3uiv(this.addr,t)}function wp(n,t){n.uniform4uiv(this.addr,t)}function Ep(n,t,e){const i=this.cache,r=t.length,s=Br(e,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ll,s[o])}function Tp(n,t,e){const i=this.cache,r=t.length,s=Br(e,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pl,s[o])}function Ap(n,t,e){const i=this.cache,r=t.length,s=Br(e,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Dl,s[o])}function Cp(n,t,e){const i=this.cache,r=t.length,s=Br(e,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Rl,s[o])}function Lp(n){switch(n){case 5126:return up;case 35664:return hp;case 35665:return fp;case 35666:return dp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return bp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}class Rp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=cp(e.type)}}class Pp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Lp(e.type)}}class Dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ws=/(\w+)(\])?(\[|\.)?/g;function yo(n,t){n.seq.push(t),n.map[t.id]=t}function Ip(n,t,e){const i=n.name,r=i.length;for(ws.lastIndex=0;;){const s=ws.exec(i),o=ws.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){yo(e,l===void 0?new Rp(a,n,t):new Pp(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Dp(a),yo(e,f)),e=f}}}class yr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Ip(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Mo(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let Np=0;function Fp(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Up(n){switch(n){case Un:return["Linear","( value )"];case Ut:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function So(n,t,e){const i=n.getShaderParameter(t,35713),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Fp(n.getShaderSource(t),o)}else return r}function zp(n,t){const e=Up(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Op(n,t){let e;switch(t){case Qc:e="Linear";break;case tu:e="Reinhard";break;case eu:e="OptimizedCineon";break;case nu:e="ACESFilmic";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Bp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ri).join(`
`)}function kp(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gp(n,t){const e={},i=n.getProgramParameter(t,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ri(n){return n!==""}function bo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gs(n){return n.replace(Vp,Hp)}function Hp(n,t){const e=bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Gs(e)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eo(n){return n.replace(Wp,qp)}function qp(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function To(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xp(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ui:case hi:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yp(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function jp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qs:t="ENVMAP_BLENDING_MULTIPLY";break;case Jc:t="ENVMAP_BLENDING_MIX";break;case Kc:t="ENVMAP_BLENDING_ADD";break}return t}function Zp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Jp(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Xp(e),l=$p(e),u=Yp(e),f=jp(e),h=Zp(e),m=e.isWebGL2?"":Bp(e),g=kp(s),d=r.createProgram();let p,_,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Ri).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ri).join(`
`),_.length>0&&(_+=`
`)):(p=[To(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),_=[m,To(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==en?"#define TONE_MAPPING":"",e.toneMapping!==en?bt.tonemapping_pars_fragment:"",e.toneMapping!==en?Op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.encodings_pars_fragment,zp("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),o=Gs(o),o=bo(o,e),o=wo(o,e),a=Gs(a),a=bo(a,e),a=wo(a,e),o=Eo(o),a=Eo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=b+p+o,E=b+_+a,M=Mo(r,35633,y),L=Mo(r,35632,E);if(r.attachShader(d,M),r.attachShader(d,L),e.index0AttributeName!==void 0?r.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),n.debug.checkShaderErrors){const T=r.getProgramInfoLog(d).trim(),D=r.getShaderInfoLog(M).trim(),F=r.getShaderInfoLog(L).trim();let $=!0,A=!0;if(r.getProgramParameter(d,35714)===!1){$=!1;const C=So(r,M,"vertex"),V=So(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+C+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||F==="")&&(A=!1);A&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:_}})}r.deleteShader(M),r.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new yr(r,d)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=Gp(r,d)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=L,this}let Kp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new tm(t),e.set(t,i)),i}}class tm{constructor(t){this.id=Kp++,this.code=t,this.usedTimes=0}}function em(n,t,e,i,r,s,o){const a=new Ml,c=new Qp,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,T,D,F,$){const A=F.fog,C=$.geometry,V=v.isMeshStandardMaterial?F.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),Y=j&&j.mapping===zr?j.image.height:null,B=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,K=Z!==void 0?Z.length:0;let lt=0;C.morphAttributes.position!==void 0&&(lt=1),C.morphAttributes.normal!==void 0&&(lt=2),C.morphAttributes.color!==void 0&&(lt=3);let z,X,nt,tt;if(B){const Dt=Be[B];z=Dt.vertexShader,X=Dt.fragmentShader}else z=v.vertexShader,X=v.fragmentShader,c.update(v),nt=c.getVertexShaderID(v),tt=c.getFragmentShaderID(v);const O=n.getRenderTarget(),xt=v.alphaTest>0,ct=v.clearcoat>0,ut=v.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:v.type,vertexShader:z,fragmentShader:X,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:tt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:h,outputEncoding:O===null?n.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Un,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Su,tangentSpaceNormalMap:v.normalMapType===ml,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ut,clearcoat:ct,clearcoatMap:ct&&!!v.clearcoatMap,clearcoatRoughnessMap:ct&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ct&&!!v.clearcoatNormalMap,iridescence:ut,iridescenceMap:ut&&!!v.iridescenceMap,iridescenceThicknessMap:ut&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===oi,alphaMap:!!v.alphaMap,alphaTest:xt,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!C.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!A,useFog:v.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:lt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:en,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===Me,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(T,v),b(T,v),T.push(n.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function _(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function y(v){const T=g[v.type];let D;if(T){const F=Be[T];D=Bu.clone(F.uniforms)}else D=v.uniforms;return D}function E(v,T){let D;for(let F=0,$=l.length;F<$;F++){const A=l[F];if(A.cacheKey===T){D=A,++D.usedTimes;break}}return D===void 0&&(D=new Jp(n,T,v,s),l.push(D)),D}function M(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function L(v){c.remove(v)}function P(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:M,releaseShaderCache:L,programs:l,dispose:P}}function nm(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function im(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ao(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Co(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,m,g,d,p){let _=n[t];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},n[t]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),t++,_}function a(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):e.push(_)}function c(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function l(f,h){e.length>1&&e.sort(f||im),i.length>1&&i.sort(h||Ao),r.length>1&&r.sort(h||Ao)}function u(){for(let f=t,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function rm(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Co,n.set(i,[o])):r>=s.length?(o=new Co,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function sm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ft};break;case"SpotLight":e={position:new U,direction:new U,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function am(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let om=0;function lm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cm(n,t){const e=new sm,i=am(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,o=new Wt,a=new Wt;function c(u,f){let h=0,m=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let d=0,p=0,_=0,b=0,y=0,E=0,M=0,L=0,P=0,v=0;u.sort(lm);const T=f!==!0?Math.PI:1;for(let F=0,$=u.length;F<$;F++){const A=u[F],C=A.color,V=A.intensity,j=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=C.r*V*T,m+=C.g*V*T,g+=C.b*V*T;else if(A.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(A.sh.coefficients[B],V);else if(A.isDirectionalLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity*T),A.castShadow){const Z=A.shadow,K=i.get(A);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.directionalShadow[d]=K,r.directionalShadowMap[d]=Y,r.directionalShadowMatrix[d]=A.shadow.matrix,E++}r.directional[d]=B,d++}else if(A.isSpotLight){const B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(C).multiplyScalar(V*T),B.distance=j,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,r.spot[_]=B;const Z=A.shadow;if(A.map&&(r.spotLightMap[P]=A.map,P++,Z.updateMatrices(A),A.castShadow&&v++),r.spotLightMatrix[_]=Z.matrix,A.castShadow){const K=i.get(A);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.spotShadow[_]=K,r.spotShadowMap[_]=Y,L++}_++}else if(A.isRectAreaLight){const B=e.get(A);B.color.copy(C).multiplyScalar(V),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),r.rectArea[b]=B,b++}else if(A.isPointLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity*T),B.distance=A.distance,B.decay=A.decay,A.castShadow){const Z=A.shadow,K=i.get(A);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=A.shadow.matrix,M++}r.point[p]=B,p++}else if(A.isHemisphereLight){const B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(V*T),B.groundColor.copy(A.groundColor).multiplyScalar(V*T),r.hemi[y]=B,y++}}b>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=it.LTC_FLOAT_1,r.rectAreaLTC2=it.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=it.LTC_HALF_1,r.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==y||D.numDirectionalShadows!==E||D.numPointShadows!==M||D.numSpotShadows!==L||D.numSpotMaps!==P)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=b,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=L+P-v,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=y,D.numDirectionalShadows=E,D.numPointShadows=M,D.numSpotShadows=L,D.numSpotMaps=P,r.version=om++)}function l(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let b=0,y=u.length;b<y;b++){const E=u[b];if(E.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),h++}else if(E.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const M=r.rectArea[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(E.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(E.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:r}}function Lo(n,t){const e=new cm(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function um(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Lo(n,t),e.set(s,[c])):o>=a.length?(c=new Lo(n,t),a.push(c)):c=a[o],c}function r(){e=new WeakMap}return{get:i,dispose:r}}class hm extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fm extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mm(n,t,e){let i=new ea;const r=new Nt,s=new Nt,o=new Jt,a=new hm({depthPacking:Mu}),c=new fm,l={},u=e.maxTextureSize,f={[fn]:Me,[Me]:fn,[un]:un},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:dm,fragmentShader:pm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new tn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul,this.render=function(E,M,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const P=n.getRenderTarget(),v=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),D=n.state;D.setBlending(hn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let F=0,$=E.length;F<$;F++){const A=E[F],C=A.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const V=C.getFrameExtents();if(r.multiply(V),s.copy(C.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,C.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,C.mapSize.y=s.y)),C.map===null){const Y=this.type!==Li?{minFilter:oe,magFilter:oe}:{};C.map=new zn(r.x,r.y,Y),C.map.texture.name=A.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();const j=C.getViewportCount();for(let Y=0;Y<j;Y++){const B=C.getViewport(Y);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),D.viewport(o),C.updateMatrices(A,Y),i=C.getFrustum(),y(M,L,C.camera,A,this.type)}C.isPointLightShadow!==!0&&this.type===Li&&_(C,L),C.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(P,v,T)};function _(E,M){const L=t.update(d);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(M,null,L,h,d,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(M,null,L,m,d,null)}function b(E,M,L,P,v,T){let D=null;const F=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)D=F;else if(D=L.isPointLight===!0?c:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=D.uuid,A=M.uuid;let C=l[$];C===void 0&&(C={},l[$]=C);let V=C[A];V===void 0&&(V=D.clone(),C[A]=V),D=V}return D.visible=M.visible,D.wireframe=M.wireframe,T===Li?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:f[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.map=M.map,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=P,D.farDistance=v),D}function y(E,M,L,P,v){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Li)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const F=t.update(E),$=E.material;if(Array.isArray($)){const A=F.groups;for(let C=0,V=A.length;C<V;C++){const j=A[C],Y=$[j.materialIndex];if(Y&&Y.visible){const B=b(E,Y,P,L.near,L.far,v);n.renderBufferDirect(L,null,F,B,E,j)}}}else if($.visible){const A=b(E,$,P,L.near,L.far,v);n.renderBufferDirect(L,null,F,A,E,null)}}const D=E.children;for(let F=0,$=D.length;F<$;F++)y(D[F],M,L,P,v)}}function gm(n,t,e){const i=e.isWebGL2;function r(){let R=!1;const k=new Jt;let J=null;const ot=new Jt(0,0,0,0);return{setMask:function(ft){J!==ft&&!R&&(n.colorMask(ft,ft,ft,ft),J=ft)},setLocked:function(ft){R=ft},setClear:function(ft,Pt,Yt,Qt,pn){pn===!0&&(ft*=Qt,Pt*=Qt,Yt*=Qt),k.set(ft,Pt,Yt,Qt),ot.equals(k)===!1&&(n.clearColor(ft,Pt,Yt,Qt),ot.copy(k))},reset:function(){R=!1,J=null,ot.set(-1,0,0,0)}}}function s(){let R=!1,k=null,J=null,ot=null;return{setTest:function(ft){ft?xt(2929):ct(2929)},setMask:function(ft){k!==ft&&!R&&(n.depthMask(ft),k=ft)},setFunc:function(ft){if(J!==ft){switch(ft){case Wc:n.depthFunc(512);break;case qc:n.depthFunc(519);break;case Xc:n.depthFunc(513);break;case Is:n.depthFunc(515);break;case $c:n.depthFunc(514);break;case Yc:n.depthFunc(518);break;case jc:n.depthFunc(516);break;case Zc:n.depthFunc(517);break;default:n.depthFunc(515)}J=ft}},setLocked:function(ft){R=ft},setClear:function(ft){ot!==ft&&(n.clearDepth(ft),ot=ft)},reset:function(){R=!1,k=null,J=null,ot=null}}}function o(){let R=!1,k=null,J=null,ot=null,ft=null,Pt=null,Yt=null,Qt=null,pn=null;return{setTest:function(Ot){R||(Ot?xt(2960):ct(2960))},setMask:function(Ot){k!==Ot&&!R&&(n.stencilMask(Ot),k=Ot)},setFunc:function(Ot,qe,Ee){(J!==Ot||ot!==qe||ft!==Ee)&&(n.stencilFunc(Ot,qe,Ee),J=Ot,ot=qe,ft=Ee)},setOp:function(Ot,qe,Ee){(Pt!==Ot||Yt!==qe||Qt!==Ee)&&(n.stencilOp(Ot,qe,Ee),Pt=Ot,Yt=qe,Qt=Ee)},setLocked:function(Ot){R=Ot},setClear:function(Ot){pn!==Ot&&(n.clearStencil(Ot),pn=Ot)},reset:function(){R=!1,k=null,J=null,ot=null,ft=null,Pt=null,Yt=null,Qt=null,pn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,_=!1,b=null,y=null,E=null,M=null,L=null,P=null,v=null,T=!1,D=null,F=null,$=null,A=null,C=null;const V=n.getParameter(35661);let j=!1,Y=0;const B=n.getParameter(7938);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),j=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),j=Y>=2);let Z=null,K={};const lt=n.getParameter(3088),z=n.getParameter(2978),X=new Jt().fromArray(lt),nt=new Jt().fromArray(z);function tt(R,k,J){const ot=new Uint8Array(4),ft=n.createTexture();n.bindTexture(R,ft),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Pt=0;Pt<J;Pt++)n.texImage2D(k+Pt,0,6408,1,1,0,6408,5121,ot);return ft}const O={};O[3553]=tt(3553,3553,1),O[34067]=tt(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),xt(2929),c.setFunc(Is),Kt(!1),we(xa),xt(2884),ie(hn);function xt(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function ct(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function ut(R,k){return m[R]!==k?(n.bindFramebuffer(R,k),m[R]=k,i&&(R===36009&&(m[36160]=k),R===36160&&(m[36009]=k)),!0):!1}function rt(R,k){let J=d,ot=!1;if(R)if(J=g.get(k),J===void 0&&(J=[],g.set(k,J)),R.isWebGLMultipleRenderTargets){const ft=R.texture;if(J.length!==ft.length||J[0]!==36064){for(let Pt=0,Yt=ft.length;Pt<Yt;Pt++)J[Pt]=36064+Pt;J.length=ft.length,ot=!0}}else J[0]!==36064&&(J[0]=36064,ot=!0);else J[0]!==1029&&(J[0]=1029,ot=!0);ot&&(e.isWebGL2?n.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Dt(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const St={[ei]:32774,[Ic]:32778,[Nc]:32779};if(i)St[Sa]=32775,St[ba]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(St[Sa]=R.MIN_EXT,St[ba]=R.MAX_EXT)}const vt={[Fc]:0,[Uc]:1,[zc]:768,[hl]:770,[Hc]:776,[Gc]:774,[Bc]:772,[Oc]:769,[fl]:771,[Vc]:775,[kc]:773};function ie(R,k,J,ot,ft,Pt,Yt,Qt){if(R===hn){_===!0&&(ct(3042),_=!1);return}if(_===!1&&(xt(3042),_=!0),R!==Dc){if(R!==b||Qt!==T){if((y!==ei||L!==ei)&&(n.blendEquation(32774),y=ei,L=ei),Qt)switch(R){case oi:n.blendFuncSeparate(1,771,1,771);break;case va:n.blendFunc(1,1);break;case ya:n.blendFuncSeparate(0,769,0,1);break;case Ma:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case oi:n.blendFuncSeparate(770,771,1,771);break;case va:n.blendFunc(770,1);break;case ya:n.blendFuncSeparate(0,769,0,1);break;case Ma:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,M=null,P=null,v=null,b=R,T=Qt}return}ft=ft||k,Pt=Pt||J,Yt=Yt||ot,(k!==y||ft!==L)&&(n.blendEquationSeparate(St[k],St[ft]),y=k,L=ft),(J!==E||ot!==M||Pt!==P||Yt!==v)&&(n.blendFuncSeparate(vt[J],vt[ot],vt[Pt],vt[Yt]),E=J,M=ot,P=Pt,v=Yt),b=R,T=!1}function be(R,k){R.side===un?ct(2884):xt(2884);let J=R.side===Me;k&&(J=!J),Kt(J),R.blending===oi&&R.transparent===!1?ie(hn):ie(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const ot=R.stencilWrite;l.setTest(ot),ot&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),It(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xt(32926):ct(32926)}function Kt(R){D!==R&&(R?n.frontFace(2304):n.frontFace(2305),D=R)}function we(R){R!==Lc?(xt(2884),R!==F&&(R===xa?n.cullFace(1029):R===Rc?n.cullFace(1028):n.cullFace(1032))):ct(2884),F=R}function Vt(R){R!==$&&(j&&n.lineWidth(R),$=R)}function It(R,k,J){R?(xt(32823),(A!==k||C!==J)&&(n.polygonOffset(k,J),A=k,C=J)):ct(32823)}function We(R){R?xt(3089):ct(3089)}function Ce(R){R===void 0&&(R=33984+V-1),Z!==R&&(n.activeTexture(R),Z=R)}function w(R,k,J){J===void 0&&(Z===null?J=33984+V-1:J=Z);let ot=K[J];ot===void 0&&(ot={type:void 0,texture:void 0},K[J]=ot),(ot.type!==R||ot.texture!==k)&&(Z!==J&&(n.activeTexture(J),Z=J),n.bindTexture(R,k||O[R]),ot.type=R,ot.texture=k)}function x(){const R=K[Z];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(R){X.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),X.copy(R))}function dt(R){nt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),nt.copy(R))}function Lt(R,k){let J=f.get(k);J===void 0&&(J=new WeakMap,f.set(k,J));let ot=J.get(R);ot===void 0&&(ot=n.getUniformBlockIndex(k,R.name),J.set(R,ot))}function zt(R,k){const ot=f.get(k).get(R);u.get(k)!==ot&&(n.uniformBlockBinding(k,ot,R.__bindingPointIndex),u.set(k,ot))}function $t(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,K={},m={},g=new WeakMap,d=[],p=null,_=!1,b=null,y=null,E=null,M=null,L=null,P=null,v=null,T=!1,D=null,F=null,$=null,A=null,C=null,X.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:xt,disable:ct,bindFramebuffer:ut,drawBuffers:rt,useProgram:Dt,setBlending:ie,setMaterial:be,setFlipSided:Kt,setCullFace:we,setLineWidth:Vt,setPolygonOffset:It,setScissorTest:We,activeTexture:Ce,bindTexture:w,unbindTexture:x,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:_t,texImage3D:ht,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:q,texStorage3D:mt,texSubImage2D:et,texSubImage3D:st,compressedTexSubImage2D:yt,compressedTexSubImage3D:at,scissor:gt,viewport:dt,reset:$t}}function _m(n,t,e,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,x){return _?new OffscreenCanvas(w,x):Ui("canvas")}function y(w,x,H,Q){let et=1;if((w.width>Q||w.height>Q)&&(et=Q/Math.max(w.width,w.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const st=x?ks:Math.floor,yt=st(et*w.width),at=st(et*w.height);d===void 0&&(d=b(yt,at));const q=H?b(yt,at):d;return q.width=yt,q.height=at,q.getContext("2d").drawImage(w,0,0,yt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+yt+"x"+at+")."),q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return Za(w.width)&&Za(w.height)}function M(w){return a?!1:w.wrapS!==Ie||w.wrapT!==Ie||w.minFilter!==oe&&w.minFilter!==Ae}function L(w,x){return w.generateMipmaps&&x&&w.minFilter!==oe&&w.minFilter!==Ae}function P(w){n.generateMipmap(w)}function v(w,x,H,Q,et=!1){if(a===!1)return x;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let st=x;return x===6403&&(H===5126&&(st=33326),H===5131&&(st=33325),H===5121&&(st=33321)),x===33319&&(H===5126&&(st=33328),H===5131&&(st=33327),H===5121&&(st=33323)),x===6408&&(H===5126&&(st=34836),H===5131&&(st=34842),H===5121&&(st=Q===Ut&&et===!1?35907:32856),H===32819&&(st=32854),H===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function T(w,x,H){return L(w,H)===!0||w.isFramebufferTexture&&w.minFilter!==oe&&w.minFilter!==Ae?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){return w===oe||w===wa||w===$r?9728:9729}function F(w){const x=w.target;x.removeEventListener("dispose",F),A(x),x.isVideoTexture&&g.delete(x)}function $(w){const x=w.target;x.removeEventListener("dispose",$),V(x)}function A(w){const x=i.get(w);if(x.__webglInit===void 0)return;const H=w.source,Q=p.get(H);if(Q){const et=Q[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&C(w),Object.keys(Q).length===0&&p.delete(H)}i.remove(w)}function C(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const H=w.source,Q=p.get(H);delete Q[x.__cacheKey],o.memory.textures--}function V(w){const x=w.texture,H=i.get(w),Q=i.get(x);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)n.deleteFramebuffer(H.__webglFramebuffer[et]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[et]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let et=0;et<H.__webglColorRenderbuffer.length;et++)H.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[et]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let et=0,st=x.length;et<st;et++){const yt=i.get(x[et]);yt.__webglTexture&&(n.deleteTexture(yt.__webglTexture),o.memory.textures--),i.remove(x[et])}i.remove(x),i.remove(w)}let j=0;function Y(){j=0}function B(){const w=j;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),j+=1,w}function Z(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function K(w,x){const H=i.get(w);if(w.isVideoTexture&&We(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(H,w,x);return}}e.bindTexture(3553,H.__webglTexture,33984+x)}function lt(w,x){const H=i.get(w);if(w.version>0&&H.__version!==w.version){ct(H,w,x);return}e.bindTexture(35866,H.__webglTexture,33984+x)}function z(w,x){const H=i.get(w);if(w.version>0&&H.__version!==w.version){ct(H,w,x);return}e.bindTexture(32879,H.__webglTexture,33984+x)}function X(w,x){const H=i.get(w);if(w.version>0&&H.__version!==w.version){ut(H,w,x);return}e.bindTexture(34067,H.__webglTexture,33984+x)}const nt={[Us]:10497,[Ie]:33071,[zs]:33648},tt={[oe]:9728,[wa]:9984,[$r]:9986,[Ae]:9729,[ru]:9985,[Ii]:9987};function O(w,x,H){if(H?(n.texParameteri(w,10242,nt[x.wrapS]),n.texParameteri(w,10243,nt[x.wrapT]),(w===32879||w===35866)&&n.texParameteri(w,32882,nt[x.wrapR]),n.texParameteri(w,10240,tt[x.magFilter]),n.texParameteri(w,10241,tt[x.minFilter])):(n.texParameteri(w,10242,33071),n.texParameteri(w,10243,33071),(w===32879||w===35866)&&n.texParameteri(w,32882,33071),(x.wrapS!==Ie||x.wrapT!==Ie)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,10240,D(x.magFilter)),n.texParameteri(w,10241,D(x.minFilter)),x.minFilter!==oe&&x.minFilter!==Ae&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===oe||x.minFilter!==$r&&x.minFilter!==Ii||x.type===Rn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ni&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function xt(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",F));const Q=x.source;let et=p.get(Q);et===void 0&&(et={},p.set(Q,et));const st=Z(x);if(st!==w.__cacheKey){et[st]===void 0&&(et[st]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[st].usedTimes++;const yt=et[w.__cacheKey];yt!==void 0&&(et[w.__cacheKey].usedTimes--,yt.usedTimes===0&&C(x)),w.__cacheKey=st,w.__webglTexture=et[st].texture}return H}function ct(w,x,H){let Q=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=35866),x.isData3DTexture&&(Q=32879);const et=xt(w,x),st=x.source;e.bindTexture(Q,w.__webglTexture,33984+H);const yt=i.get(st);if(st.version!==yt.__version||et===!0){e.activeTexture(33984+H),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const at=M(x)&&E(x.image)===!1;let q=y(x.image,at,!1,u);q=Ce(x,q);const mt=E(q)||a,_t=s.convert(x.format,x.encoding);let ht=s.convert(x.type),gt=v(x.internalFormat,_t,ht,x.encoding,x.isVideoTexture);O(Q,x,mt);let dt;const Lt=x.mipmaps,zt=a&&x.isVideoTexture!==!0,$t=yt.__version===void 0||et===!0,R=T(x,q,mt);if(x.isDepthTexture)gt=6402,a?x.type===Rn?gt=36012:x.type===Ln?gt=33190:x.type===li?gt=35056:gt=33189:x.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Dn&&gt===6402&&x.type!==pl&&x.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ln,ht=s.convert(x.type)),x.format===fi&&gt===6402&&(gt=34041,x.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=li,ht=s.convert(x.type))),$t&&(zt?e.texStorage2D(3553,1,gt,q.width,q.height):e.texImage2D(3553,0,gt,q.width,q.height,0,_t,ht,null));else if(x.isDataTexture)if(Lt.length>0&&mt){zt&&$t&&e.texStorage2D(3553,R,gt,Lt[0].width,Lt[0].height);for(let k=0,J=Lt.length;k<J;k++)dt=Lt[k],zt?e.texSubImage2D(3553,k,0,0,dt.width,dt.height,_t,ht,dt.data):e.texImage2D(3553,k,gt,dt.width,dt.height,0,_t,ht,dt.data);x.generateMipmaps=!1}else zt?($t&&e.texStorage2D(3553,R,gt,q.width,q.height),e.texSubImage2D(3553,0,0,0,q.width,q.height,_t,ht,q.data)):e.texImage2D(3553,0,gt,q.width,q.height,0,_t,ht,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&$t&&e.texStorage3D(35866,R,gt,Lt[0].width,Lt[0].height,q.depth);for(let k=0,J=Lt.length;k<J;k++)dt=Lt[k],x.format!==Ne?_t!==null?zt?e.compressedTexSubImage3D(35866,k,0,0,0,dt.width,dt.height,q.depth,_t,dt.data,0,0):e.compressedTexImage3D(35866,k,gt,dt.width,dt.height,q.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage3D(35866,k,0,0,0,dt.width,dt.height,q.depth,_t,ht,dt.data):e.texImage3D(35866,k,gt,dt.width,dt.height,q.depth,0,_t,ht,dt.data)}else{zt&&$t&&e.texStorage2D(3553,R,gt,Lt[0].width,Lt[0].height);for(let k=0,J=Lt.length;k<J;k++)dt=Lt[k],x.format!==Ne?_t!==null?zt?e.compressedTexSubImage2D(3553,k,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(3553,k,gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage2D(3553,k,0,0,dt.width,dt.height,_t,ht,dt.data):e.texImage2D(3553,k,gt,dt.width,dt.height,0,_t,ht,dt.data)}else if(x.isDataArrayTexture)zt?($t&&e.texStorage3D(35866,R,gt,q.width,q.height,q.depth),e.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,_t,ht,q.data)):e.texImage3D(35866,0,gt,q.width,q.height,q.depth,0,_t,ht,q.data);else if(x.isData3DTexture)zt?($t&&e.texStorage3D(32879,R,gt,q.width,q.height,q.depth),e.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,_t,ht,q.data)):e.texImage3D(32879,0,gt,q.width,q.height,q.depth,0,_t,ht,q.data);else if(x.isFramebufferTexture){if($t)if(zt)e.texStorage2D(3553,R,gt,q.width,q.height);else{let k=q.width,J=q.height;for(let ot=0;ot<R;ot++)e.texImage2D(3553,ot,gt,k,J,0,_t,ht,null),k>>=1,J>>=1}}else if(Lt.length>0&&mt){zt&&$t&&e.texStorage2D(3553,R,gt,Lt[0].width,Lt[0].height);for(let k=0,J=Lt.length;k<J;k++)dt=Lt[k],zt?e.texSubImage2D(3553,k,0,0,_t,ht,dt):e.texImage2D(3553,k,gt,_t,ht,dt);x.generateMipmaps=!1}else zt?($t&&e.texStorage2D(3553,R,gt,q.width,q.height),e.texSubImage2D(3553,0,0,0,_t,ht,q)):e.texImage2D(3553,0,gt,_t,ht,q);L(x,mt)&&P(Q),yt.__version=st.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ut(w,x,H){if(x.image.length!==6)return;const Q=xt(w,x),et=x.source;e.bindTexture(34067,w.__webglTexture,33984+H);const st=i.get(et);if(et.version!==st.__version||Q===!0){e.activeTexture(33984+H),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,at=x.image[0]&&x.image[0].isDataTexture,q=[];for(let k=0;k<6;k++)!yt&&!at?q[k]=y(x.image[k],!1,!0,l):q[k]=at?x.image[k].image:x.image[k],q[k]=Ce(x,q[k]);const mt=q[0],_t=E(mt)||a,ht=s.convert(x.format,x.encoding),gt=s.convert(x.type),dt=v(x.internalFormat,ht,gt,x.encoding),Lt=a&&x.isVideoTexture!==!0,zt=st.__version===void 0||Q===!0;let $t=T(x,mt,_t);O(34067,x,_t);let R;if(yt){Lt&&zt&&e.texStorage2D(34067,$t,dt,mt.width,mt.height);for(let k=0;k<6;k++){R=q[k].mipmaps;for(let J=0;J<R.length;J++){const ot=R[J];x.format!==Ne?ht!==null?Lt?e.compressedTexSubImage2D(34069+k,J,0,0,ot.width,ot.height,ht,ot.data):e.compressedTexImage2D(34069+k,J,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(34069+k,J,0,0,ot.width,ot.height,ht,gt,ot.data):e.texImage2D(34069+k,J,dt,ot.width,ot.height,0,ht,gt,ot.data)}}}else{R=x.mipmaps,Lt&&zt&&(R.length>0&&$t++,e.texStorage2D(34067,$t,dt,q[0].width,q[0].height));for(let k=0;k<6;k++)if(at){Lt?e.texSubImage2D(34069+k,0,0,0,q[k].width,q[k].height,ht,gt,q[k].data):e.texImage2D(34069+k,0,dt,q[k].width,q[k].height,0,ht,gt,q[k].data);for(let J=0;J<R.length;J++){const ft=R[J].image[k].image;Lt?e.texSubImage2D(34069+k,J+1,0,0,ft.width,ft.height,ht,gt,ft.data):e.texImage2D(34069+k,J+1,dt,ft.width,ft.height,0,ht,gt,ft.data)}}else{Lt?e.texSubImage2D(34069+k,0,0,0,ht,gt,q[k]):e.texImage2D(34069+k,0,dt,ht,gt,q[k]);for(let J=0;J<R.length;J++){const ot=R[J];Lt?e.texSubImage2D(34069+k,J+1,0,0,ht,gt,ot.image[k]):e.texImage2D(34069+k,J+1,dt,ht,gt,ot.image[k])}}}L(x,_t)&&P(34067),st.__version=et.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function rt(w,x,H,Q,et){const st=s.convert(H.format,H.encoding),yt=s.convert(H.type),at=v(H.internalFormat,st,yt,H.encoding);i.get(x).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,at,x.width,x.height,x.depth,0,st,yt,null):e.texImage2D(et,0,at,x.width,x.height,0,st,yt,null)),e.bindFramebuffer(36160,w),It(x)?h.framebufferTexture2DMultisampleEXT(36160,Q,et,i.get(H).__webglTexture,0,Vt(x)):(et===3553||et>=34069&&et<=34074)&&n.framebufferTexture2D(36160,Q,et,i.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function Dt(w,x,H){if(n.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let Q=33189;if(H||It(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===Rn?Q=36012:et.type===Ln&&(Q=33190));const st=Vt(x);It(x)?h.renderbufferStorageMultisampleEXT(36161,st,Q,x.width,x.height):n.renderbufferStorageMultisample(36161,st,Q,x.width,x.height)}else n.renderbufferStorage(36161,Q,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const Q=Vt(x);H&&It(x)===!1?n.renderbufferStorageMultisample(36161,Q,35056,x.width,x.height):It(x)?h.renderbufferStorageMultisampleEXT(36161,Q,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,w)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<Q.length;et++){const st=Q[et],yt=s.convert(st.format,st.encoding),at=s.convert(st.type),q=v(st.internalFormat,yt,at,st.encoding),mt=Vt(x);H&&It(x)===!1?n.renderbufferStorageMultisample(36161,mt,q,x.width,x.height):It(x)?h.renderbufferStorageMultisampleEXT(36161,mt,q,x.width,x.height):n.renderbufferStorage(36161,q,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function St(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,et=Vt(x);if(x.depthTexture.format===Dn)It(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,et):n.framebufferTexture2D(36160,36096,3553,Q,0);else if(x.depthTexture.format===fi)It(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,et):n.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function vt(w){const x=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");St(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=n.createRenderbuffer(),Dt(x.__webglDepthbuffer[Q],w,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Dt(x.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function ie(w,x,H){const Q=i.get(w);x!==void 0&&rt(Q.__webglFramebuffer,w,w.texture,36064,3553),H!==void 0&&vt(w)}function be(w){const x=w.texture,H=i.get(w),Q=i.get(x);w.addEventListener("dispose",$),w.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,o.memory.textures++);const et=w.isWebGLCubeRenderTarget===!0,st=w.isWebGLMultipleRenderTargets===!0,yt=E(w)||a;if(et){H.__webglFramebuffer=[];for(let at=0;at<6;at++)H.__webglFramebuffer[at]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),st)if(r.drawBuffers){const at=w.texture;for(let q=0,mt=at.length;q<mt;q++){const _t=i.get(at[q]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&It(w)===!1){const at=st?x:[x];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let q=0;q<at.length;q++){const mt=at[q];H.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[q]);const _t=s.convert(mt.format,mt.encoding),ht=s.convert(mt.type),gt=v(mt.internalFormat,_t,ht,mt.encoding,w.isXRRenderTarget===!0),dt=Vt(w);n.renderbufferStorageMultisample(36161,dt,gt,w.width,w.height),n.framebufferRenderbuffer(36160,36064+q,36161,H.__webglColorRenderbuffer[q])}n.bindRenderbuffer(36161,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,Q.__webglTexture),O(34067,x,yt);for(let at=0;at<6;at++)rt(H.__webglFramebuffer[at],w,x,36064,34069+at);L(x,yt)&&P(34067),e.unbindTexture()}else if(st){const at=w.texture;for(let q=0,mt=at.length;q<mt;q++){const _t=at[q],ht=i.get(_t);e.bindTexture(3553,ht.__webglTexture),O(3553,_t,yt),rt(H.__webglFramebuffer,w,_t,36064+q,3553),L(_t,yt)&&P(3553)}e.unbindTexture()}else{let at=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?at=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,Q.__webglTexture),O(at,x,yt),rt(H.__webglFramebuffer,w,x,36064,at),L(x,yt)&&P(at),e.unbindTexture()}w.depthBuffer&&vt(w)}function Kt(w){const x=E(w)||a,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0,et=H.length;Q<et;Q++){const st=H[Q];if(L(st,x)){const yt=w.isWebGLCubeRenderTarget?34067:3553,at=i.get(st).__webglTexture;e.bindTexture(yt,at),P(yt),e.unbindTexture()}}}function we(w){if(a&&w.samples>0&&It(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],H=w.width,Q=w.height;let et=16384;const st=[],yt=w.stencilBuffer?33306:36096,at=i.get(w),q=w.isWebGLMultipleRenderTargets===!0;if(q)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+mt,36161,null),e.bindFramebuffer(36160,at.__webglFramebuffer),n.framebufferTexture2D(36009,36064+mt,3553,null,0);e.bindFramebuffer(36008,at.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,at.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){st.push(36064+mt),w.depthBuffer&&st.push(yt);const _t=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(_t===!1&&(w.depthBuffer&&(et|=256),w.stencilBuffer&&(et|=1024)),q&&n.framebufferRenderbuffer(36008,36064,36161,at.__webglColorRenderbuffer[mt]),_t===!0&&(n.invalidateFramebuffer(36008,[yt]),n.invalidateFramebuffer(36009,[yt])),q){const ht=i.get(x[mt]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ht,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,et,9728),m&&n.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),q)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+mt,36161,at.__webglColorRenderbuffer[mt]);const _t=i.get(x[mt]).__webglTexture;e.bindFramebuffer(36160,at.__webglFramebuffer),n.framebufferTexture2D(36009,36064+mt,3553,_t,0)}e.bindFramebuffer(36009,at.__webglMultisampledFramebuffer)}}function Vt(w){return Math.min(f,w.samples)}function It(w){const x=i.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function We(w){const x=o.render.frame;g.get(w)!==x&&(g.set(w,x),w.update())}function Ce(w,x){const H=w.encoding,Q=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Os||H!==Un&&(H===Ut?a===!1?t.has("EXT_sRGB")===!0&&Q===Ne?(w.format=Os,w.minFilter=Ae,w.generateMipmaps=!1):x=xl.sRGBToLinear(x):(Q!==Ne||et!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),x}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=lt,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=ie,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=It}function xm(n,t,e){const i=e.isWebGL2;function r(s,o=null){let a;if(s===Fn)return 5121;if(s===lu)return 32819;if(s===cu)return 32820;if(s===su)return 5120;if(s===au)return 5122;if(s===pl)return 5123;if(s===ou)return 5124;if(s===Ln)return 5125;if(s===Rn)return 5126;if(s===Ni)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===uu)return 6406;if(s===Ne)return 6408;if(s===hu)return 6409;if(s===fu)return 6410;if(s===Dn)return 6402;if(s===fi)return 34041;if(s===Os)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===du)return 6403;if(s===pu)return 36244;if(s===mu)return 33319;if(s===gu)return 33320;if(s===_u)return 36249;if(s===Yr||s===jr||s===Zr||s===Jr)if(o===Ut)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ea||s===Ta||s===Aa||s===Ca)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Aa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===La||s===Ra)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===La)return o===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ra)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pa||s===Da||s===Ia||s===Na||s===Fa||s===Ua||s===za||s===Oa||s===Ba||s===ka||s===Ga||s===Va||s===Ha||s===Wa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Pa)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Da)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ia)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Na)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fa)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ua)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===za)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oa)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ba)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ka)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ga)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Va)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ha)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wa)return o===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Kr)return o===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===vu||s===qa||s===Xa||s===$a)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$a)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===li?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class vm extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dr extends ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,i),_=this._getHandJoint(l,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new dr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Mm extends he{constructor(t,e,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Dn,u!==Dn&&u!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Dn&&(i=Ln),i===void 0&&u===fi&&(i=li),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:oe,this.minFilter=c!==void 0?c:oe,this.flipY=!1,this.generateMipmaps=!1}}class Sm extends _i{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,g=null;const d=e.getContextAttributes();let p=null,_=null;const b=[],y=[],E=new Set,M=new Map,L=new ve;L.layers.enable(1),L.viewport=new Jt;const P=new ve;P.layers.enable(2),P.viewport=new Jt;const v=[L,P],T=new vm;T.layers.enable(1),T.layers.enable(2);let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=b[z];return X===void 0&&(X=new Es,b[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=b[z];return X===void 0&&(X=new Es,b[z]=X),X.getGripSpace()},this.getHand=function(z){let X=b[z];return X===void 0&&(X=new Es,b[z]=X),X.getHandSpace()};function $(z){const X=y.indexOf(z.inputSource);if(X===-1)return;const nt=b[X];nt!==void 0&&nt.dispatchEvent({type:z.type,data:z.inputSource})}function A(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",C);for(let z=0;z<b.length;z++){const X=y[z];X!==null&&(y[z]=null,b[z].disconnect(X))}D=null,F=null,t.setRenderTarget(p),m=null,h=null,f=null,r=null,_=null,lt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",A),r.addEventListener("inputsourceschange",C),d.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,X),r.updateRenderState({baseLayer:m}),_=new zn(m.framebufferWidth,m.framebufferHeight,{format:Ne,type:Fn,encoding:t.outputEncoding,stencilBuffer:d.stencil})}else{let X=null,nt=null,tt=null;d.depth&&(tt=d.stencil?35056:33190,X=d.stencil?fi:Dn,nt=d.stencil?li:Ln);const O={colorFormat:32856,depthFormat:tt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(O),r.updateRenderState({layers:[h]}),_=new zn(h.textureWidth,h.textureHeight,{format:Ne,type:Fn,depthTexture:new Mm(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:d.stencil,encoding:t.outputEncoding,samples:d.antialias?4:0});const xt=t.properties.get(_);xt.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),lt.setContext(r),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function C(z){for(let X=0;X<z.removed.length;X++){const nt=z.removed[X],tt=y.indexOf(nt);tt>=0&&(y[tt]=null,b[tt].disconnect(nt))}for(let X=0;X<z.added.length;X++){const nt=z.added[X];let tt=y.indexOf(nt);if(tt===-1){for(let xt=0;xt<b.length;xt++)if(xt>=y.length){y.push(nt),tt=xt;break}else if(y[xt]===null){y[xt]=nt,tt=xt;break}if(tt===-1)break}const O=b[tt];O&&O.connect(nt)}}const V=new U,j=new U;function Y(z,X,nt){V.setFromMatrixPosition(X.matrixWorld),j.setFromMatrixPosition(nt.matrixWorld);const tt=V.distanceTo(j),O=X.projectionMatrix.elements,xt=nt.projectionMatrix.elements,ct=O[14]/(O[10]-1),ut=O[14]/(O[10]+1),rt=(O[9]+1)/O[5],Dt=(O[9]-1)/O[5],St=(O[8]-1)/O[0],vt=(xt[8]+1)/xt[0],ie=ct*St,be=ct*vt,Kt=tt/(-St+vt),we=Kt*-St;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(we),z.translateZ(Kt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Vt=ct+Kt,It=ut+Kt,We=ie-we,Ce=be+(tt-we),w=rt*ut/It*Vt,x=Dt*ut/It*Vt;z.projectionMatrix.makePerspective(We,Ce,w,x,Vt,It)}function B(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;T.near=P.near=L.near=z.near,T.far=P.far=L.far=z.far,(D!==T.near||F!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,F=T.far);const X=z.parent,nt=T.cameras;B(T,X);for(let O=0;O<nt.length;O++)B(nt[O],X);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),z.matrix.copy(T.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const tt=z.children;for(let O=0,xt=tt.length;O<xt;O++)tt[O].updateMatrixWorld(!0);nt.length===2?Y(T,L,P):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return E};let Z=null;function K(z,X){if(u=X.getViewerPose(l||o),g=X,u!==null){const nt=u.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let tt=!1;nt.length!==T.cameras.length&&(T.cameras.length=0,tt=!0);for(let O=0;O<nt.length;O++){const xt=nt[O];let ct=null;if(m!==null)ct=m.getViewport(xt);else{const rt=f.getViewSubImage(h,xt);ct=rt.viewport,O===0&&(t.setRenderTargetTextures(_,rt.colorTexture,h.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(_))}let ut=v[O];ut===void 0&&(ut=new ve,ut.layers.enable(O),ut.viewport=new Jt,v[O]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.viewport.set(ct.x,ct.y,ct.width,ct.height),O===0&&T.matrix.copy(ut.matrix),tt===!0&&T.cameras.push(ut)}}for(let nt=0;nt<b.length;nt++){const tt=y[nt],O=b[nt];tt!==null&&O!==void 0&&O.update(tt,X,l||o)}if(Z&&Z(z,X),X.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let nt=null;for(const tt of E)X.detectedPlanes.has(tt)||(nt===null&&(nt=[]),nt.push(tt));if(nt!==null)for(const tt of nt)E.delete(tt),M.delete(tt),i.dispatchEvent({type:"planeremoved",data:tt});for(const tt of X.detectedPlanes)if(!E.has(tt))E.add(tt),M.set(tt,X.lastChangedTime),i.dispatchEvent({type:"planeadded",data:tt});else{const O=M.get(tt);tt.lastChangedTime>O&&(M.set(tt,tt.lastChangedTime),i.dispatchEvent({type:"planechanged",data:tt}))}}g=null}const lt=new Cl;lt.setAnimationLoop(K),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}}function bm(n,t){function e(d,p){p.color.getRGB(d.fogColor.value,El(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,_,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),l(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,y)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),g(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,_,b):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Me&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Me&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*E}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uv2Transform.value.copy(y.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,_,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Me&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function wm(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(35375):0;function c(b,y){const E=y.program;i.uniformBlockBinding(b,E)}function l(b,y){let E=r[b.id];E===void 0&&(g(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",p));const M=y.program;i.updateUBOMapping(b,M);const L=t.render.frame;s[b.id]!==L&&(h(b),s[b.id]=L)}function u(b){const y=f();b.__bindingPointIndex=y;const E=n.createBuffer(),M=b.__size,L=b.usage;return n.bindBuffer(35345,E),n.bufferData(35345,M,L),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,E),E}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=r[b.id],E=b.uniforms,M=b.__cache;n.bindBuffer(35345,y);for(let L=0,P=E.length;L<P;L++){const v=E[L];if(m(v,L,M)===!0){const T=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let F=0;for(let $=0;$<D.length;$++){const A=D[$],C=d(A);typeof A=="number"?(v.__data[0]=A,n.bufferSubData(35345,T+F,v.__data)):A.isMatrix3?(v.__data[0]=A.elements[0],v.__data[1]=A.elements[1],v.__data[2]=A.elements[2],v.__data[3]=A.elements[0],v.__data[4]=A.elements[3],v.__data[5]=A.elements[4],v.__data[6]=A.elements[5],v.__data[7]=A.elements[0],v.__data[8]=A.elements[6],v.__data[9]=A.elements[7],v.__data[10]=A.elements[8],v.__data[11]=A.elements[0]):(A.toArray(v.__data,F),F+=C.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,v.__data)}}n.bindBuffer(35345,null)}function m(b,y,E){const M=b.value;if(E[y]===void 0){if(typeof M=="number")E[y]=M;else{const L=Array.isArray(M)?M:[M],P=[];for(let v=0;v<L.length;v++)P.push(L[v].clone());E[y]=P}return!0}else if(typeof M=="number"){if(E[y]!==M)return E[y]=M,!0}else{const L=Array.isArray(E[y])?E[y]:[E[y]],P=Array.isArray(M)?M:[M];for(let v=0;v<L.length;v++){const T=L[v];if(T.equals(P[v])===!1)return T.copy(P[v]),!0}}return!1}function g(b){const y=b.uniforms;let E=0;const M=16;let L=0;for(let P=0,v=y.length;P<v;P++){const T=y[P],D={boundary:0,storage:0},F=Array.isArray(T.value)?T.value:[T.value];for(let $=0,A=F.length;$<A;$++){const C=F[$],V=d(C);D.boundary+=V.boundary,D.storage+=V.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,P>0){L=E%M;const $=M-L;L!==0&&$-D.boundary<0&&(E+=M-L,T.__offset=E)}E+=D.storage}return L=E%M,L>0&&(E+=M-L),b.__size=E,b.__cache={},this}function d(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function _(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:_}}function Em(){const n=Ui("canvas");return n.style.display="block",n}function Il(n={}){this.isWebGLRenderer=!0;const t=n.canvas!==void 0?n.canvas:Em(),e=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Un,this.physicallyCorrectLights=!1,this.toneMapping=en,this.toneMappingExposure=1;const d=this;let p=!1,_=0,b=0,y=null,E=-1,M=null;const L=new Jt,P=new Jt;let v=null,T=t.width,D=t.height,F=1,$=null,A=null;const C=new Jt(0,0,T,D),V=new Jt(0,0,T,D);let j=!1;const Y=new ea;let B=!1,Z=!1,K=null;const lt=new Wt,z=new Nt,X=new U,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return y===null?F:1}let O=e;function xt(S,N){for(let G=0;G<S.length;G++){const I=S[G],W=t.getContext(I,N);if(W!==null)return W}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ks}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&N.shift(),O=xt(N,S),O===null)throw xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ct,ut,rt,Dt,St,vt,ie,be,Kt,we,Vt,It,We,Ce,w,x,H,Q,et,st,yt,at,q,mt;function _t(){ct=new Ud(O),ut=new Ld(O,ct,n),ct.init(ut),at=new xm(O,ct,ut),rt=new gm(O,ct,ut),Dt=new Bd,St=new nm,vt=new _m(O,ct,rt,St,ut,at,Dt),ie=new Pd(d),be=new Fd(d),Kt=new Xu(O,ut),q=new Ad(O,ct,Kt,ut),we=new zd(O,Kt,Dt,q),Vt=new Hd(O,we,Kt,Dt),et=new Vd(O,ut,vt),x=new Rd(St),It=new em(d,ie,be,ct,ut,q,x),We=new bm(d,St),Ce=new rm,w=new um(ct,ut),Q=new Td(d,ie,be,rt,Vt,u,o),H=new mm(d,Vt,ut),mt=new wm(O,Dt,ut,rt),st=new Cd(O,ct,Dt,ut),yt=new Od(O,ct,Dt,ut),Dt.programs=It.programs,d.capabilities=ut,d.extensions=ct,d.properties=St,d.renderLists=Ce,d.shadowMap=H,d.state=rt,d.info=Dt}_t();const ht=new Sm(d,O);this.xr=ht,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=ct.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ct.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(T,D,!1))},this.getSize=function(S){return S.set(T,D)},this.setSize=function(S,N,G){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,D=N,t.width=Math.floor(S*F),t.height=Math.floor(N*F),G!==!1&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(T*F,D*F).floor()},this.setDrawingBufferSize=function(S,N,G){T=S,D=N,F=G,t.width=Math.floor(S*G),t.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(C)},this.setViewport=function(S,N,G,I){S.isVector4?C.set(S.x,S.y,S.z,S.w):C.set(S,N,G,I),rt.viewport(L.copy(C).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(V)},this.setScissor=function(S,N,G,I){S.isVector4?V.set(S.x,S.y,S.z,S.w):V.set(S,N,G,I),rt.scissor(P.copy(V).multiplyScalar(F).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(S){rt.setScissorTest(j=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){A=S},this.getClearColor=function(S){return S.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(S=!0,N=!0,G=!0){let I=0;S&&(I|=16384),N&&(I|=256),G&&(I|=1024),O.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Ce.dispose(),w.dispose(),St.dispose(),ie.dispose(),be.dispose(),Vt.dispose(),q.dispose(),mt.dispose(),It.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ot),ht.removeEventListener("sessionend",ft),K&&(K.dispose(),K=null),Pt.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=Dt.autoReset,N=H.enabled,G=H.autoUpdate,I=H.needsUpdate,W=H.type;_t(),Dt.autoReset=S,H.enabled=N,H.autoUpdate=G,H.needsUpdate=I,H.type=W}function Lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zt(S){const N=S.target;N.removeEventListener("dispose",zt),$t(N)}function $t(S){R(S),St.remove(S)}function R(S){const N=St.get(S).programs;N!==void 0&&(N.forEach(function(G){It.releaseProgram(G)}),S.isShaderMaterial&&It.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,I,W,pt){N===null&&(N=nt);const Mt=W.isMesh&&W.matrixWorld.determinant()<0,wt=bc(S,N,G,I,W);rt.setMaterial(I,Mt);let Et=G.index,Rt=1;I.wireframe===!0&&(Et=we.getWireframeAttribute(G),Rt=2);const Tt=G.drawRange,At=G.attributes.position;let Bt=Tt.start*Rt,fe=(Tt.start+Tt.count)*Rt;pt!==null&&(Bt=Math.max(Bt,pt.start*Rt),fe=Math.min(fe,(pt.start+pt.count)*Rt)),Et!==null?(Bt=Math.max(Bt,0),fe=Math.min(fe,Et.count)):At!=null&&(Bt=Math.max(Bt,0),fe=Math.min(fe,At.count));const Xe=fe-Bt;if(Xe<0||Xe===1/0)return;q.setup(W,I,wt,G,Et);let mn,kt=st;if(Et!==null&&(mn=Kt.get(Et),kt=yt,kt.setIndex(mn)),W.isMesh)I.wireframe===!0?(rt.setLineWidth(I.wireframeLinewidth*tt()),kt.setMode(1)):kt.setMode(4);else if(W.isLine){let Ct=I.linewidth;Ct===void 0&&(Ct=1),rt.setLineWidth(Ct*tt()),W.isLineSegments?kt.setMode(1):W.isLineLoop?kt.setMode(2):kt.setMode(3)}else W.isPoints?kt.setMode(0):W.isSprite&&kt.setMode(4);if(W.isInstancedMesh)kt.renderInstances(Bt,Xe,W.count);else if(G.isInstancedBufferGeometry){const Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Hr=Math.min(G.instanceCount,Ct);kt.renderInstances(Bt,Xe,Hr)}else kt.render(Bt,Xe)},this.compile=function(S,N){function G(I,W,pt){I.transparent===!0&&I.side===un&&I.forceSinglePass===!1?(I.side=Me,I.needsUpdate=!0,Ee(I,W,pt),I.side=fn,I.needsUpdate=!0,Ee(I,W,pt),I.side=un):Ee(I,W,pt)}h=w.get(S),h.init(),g.push(h),S.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(d.physicallyCorrectLights),S.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let pt=0;pt<W.length;pt++){const Mt=W[pt];G(Mt,S,I)}else G(W,S,I)}),g.pop(),h=null};let k=null;function J(S){k&&k(S)}function ot(){Pt.stop()}function ft(){Pt.start()}const Pt=new Cl;Pt.setAnimationLoop(J),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(S){k=S,ht.setAnimationLoop(S),S===null?Pt.stop():Pt.start()},ht.addEventListener("sessionstart",ot),ht.addEventListener("sessionend",ft),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(N),N=ht.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,N,y),h=w.get(S,g.length),h.init(),g.push(h),lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(lt),Z=this.localClippingEnabled,B=x.init(this.clippingPlanes,Z),f=Ce.get(S,m.length),f.init(),m.push(f),Yt(S,N,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort($,A),B===!0&&x.beginShadows();const G=h.state.shadowsArray;if(H.render(G,S,N),B===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(f,S),h.setupLights(d.physicallyCorrectLights),N.isArrayCamera){const I=N.cameras;for(let W=0,pt=I.length;W<pt;W++){const Mt=I[W];Qt(f,S,Mt,Mt.viewport)}}else Qt(f,S,N);y!==null&&(vt.updateMultisampleRenderTarget(y),vt.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(d,S,N),q.resetDefaultState(),E=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Yt(S,N,G,I){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){I&&X.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);const Mt=Vt.update(S),wt=S.material;wt.visible&&f.push(S,Mt,wt,G,X.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Dt.render.frame&&(S.skeleton.update(),S.skeleton.frame=Dt.render.frame),!S.frustumCulled||Y.intersectsObject(S))){I&&X.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);const Mt=Vt.update(S),wt=S.material;if(Array.isArray(wt)){const Et=Mt.groups;for(let Rt=0,Tt=Et.length;Rt<Tt;Rt++){const At=Et[Rt],Bt=wt[At.materialIndex];Bt&&Bt.visible&&f.push(S,Mt,Bt,G,X.z,At)}}else wt.visible&&f.push(S,Mt,wt,G,X.z,null)}}const pt=S.children;for(let Mt=0,wt=pt.length;Mt<wt;Mt++)Yt(pt[Mt],N,G,I)}function Qt(S,N,G,I){const W=S.opaque,pt=S.transmissive,Mt=S.transparent;h.setupLightsView(G),B===!0&&x.setGlobalState(d.clippingPlanes,G),pt.length>0&&pn(W,N,G),I&&rt.viewport(L.copy(I)),W.length>0&&Ot(W,N,G),pt.length>0&&Ot(pt,N,G),Mt.length>0&&Ot(Mt,N,G),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function pn(S,N,G){const I=ut.isWebGL2;K===null&&(K=new zn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Ni:Fn,minFilter:Ii,samples:I&&s===!0?4:0})),d.getDrawingBufferSize(z),I?K.setSize(z.x,z.y):K.setSize(ks(z.x),ks(z.y));const W=d.getRenderTarget();d.setRenderTarget(K),d.clear();const pt=d.toneMapping;d.toneMapping=en,Ot(S,N,G),d.toneMapping=pt,vt.updateMultisampleRenderTarget(K),vt.updateRenderTargetMipmap(K),d.setRenderTarget(W)}function Ot(S,N,G){const I=N.isScene===!0?N.overrideMaterial:null;for(let W=0,pt=S.length;W<pt;W++){const Mt=S[W],wt=Mt.object,Et=Mt.geometry,Rt=I===null?Mt.material:I,Tt=Mt.group;wt.layers.test(G.layers)&&qe(wt,N,G,Et,Rt,Tt)}}function qe(S,N,G,I,W,pt){S.onBeforeRender(d,N,G,I,W,pt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(d,N,G,I,S,pt),W.transparent===!0&&W.side===un&&W.forceSinglePass===!1?(W.side=Me,W.needsUpdate=!0,d.renderBufferDirect(G,N,I,W,S,pt),W.side=fn,W.needsUpdate=!0,d.renderBufferDirect(G,N,I,W,S,pt),W.side=un):d.renderBufferDirect(G,N,I,W,S,pt),S.onAfterRender(d,N,G,I,W,pt)}function Ee(S,N,G){N.isScene!==!0&&(N=nt);const I=St.get(S),W=h.state.lights,pt=h.state.shadowsArray,Mt=W.state.version,wt=It.getParameters(S,W.state,pt,N,G),Et=It.getProgramCacheKey(wt);let Rt=I.programs;I.environment=S.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(S.isMeshStandardMaterial?be:ie).get(S.envMap||I.environment),Rt===void 0&&(S.addEventListener("dispose",zt),Rt=new Map,I.programs=Rt);let Tt=Rt.get(Et);if(Tt!==void 0){if(I.currentProgram===Tt&&I.lightsStateVersion===Mt)return ma(S,wt),Tt}else wt.uniforms=It.getUniforms(S),S.onBuild(G,wt,d),S.onBeforeCompile(wt,d),Tt=It.acquireProgram(wt,Et),Rt.set(Et,Tt),I.uniforms=wt.uniforms;const At=I.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=x.uniform),ma(S,wt),I.needsLights=Ec(S),I.lightsStateVersion=Mt,I.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.directionalShadowMap.value=W.state.directionalShadowMap,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotShadowMap.value=W.state.spotShadowMap,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMap.value=W.state.pointShadowMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix);const Bt=Tt.getUniforms(),fe=yr.seqWithValue(Bt.seq,At);return I.currentProgram=Tt,I.uniformsList=fe,Tt}function ma(S,N){const G=St.get(S);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function bc(S,N,G,I,W){N.isScene!==!0&&(N=nt),vt.resetTextureUnits();const pt=N.fog,Mt=I.isMeshStandardMaterial?N.environment:null,wt=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Un,Et=(I.isMeshStandardMaterial?be:ie).get(I.envMap||Mt),Rt=I.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Tt=!!I.normalMap&&!!G.attributes.tangent,At=!!G.morphAttributes.position,Bt=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color,Xe=I.toneMapped?d.toneMapping:en,mn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,kt=mn!==void 0?mn.length:0,Ct=St.get(I),Hr=h.state.lights;if(B===!0&&(Z===!0||S!==M)){const de=S===M&&I.id===E;x.setState(I,S,de)}let jt=!1;I.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Hr.state.version||Ct.outputEncoding!==wt||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||Ct.envMap!==Et||I.fog===!0&&Ct.fog!==pt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==x.numPlanes||Ct.numIntersection!==x.numIntersection)||Ct.vertexAlphas!==Rt||Ct.vertexTangents!==Tt||Ct.morphTargets!==At||Ct.morphNormals!==Bt||Ct.morphColors!==fe||Ct.toneMapping!==Xe||ut.isWebGL2===!0&&Ct.morphTargetsCount!==kt)&&(jt=!0):(jt=!0,Ct.__version=I.version);let gn=Ct.currentProgram;jt===!0&&(gn=Ee(I,N,W));let ga=!1,vi=!1,Wr=!1;const re=gn.getUniforms(),_n=Ct.uniforms;if(rt.useProgram(gn.program)&&(ga=!0,vi=!0,Wr=!0),I.id!==E&&(E=I.id,vi=!0),ga||M!==S){if(re.setValue(O,"projectionMatrix",S.projectionMatrix),ut.logarithmicDepthBuffer&&re.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,vi=!0,Wr=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const de=re.map.cameraPosition;de!==void 0&&de.setValue(O,X.setFromMatrixPosition(S.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&re.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&re.setValue(O,"viewMatrix",S.matrixWorldInverse)}if(W.isSkinnedMesh){re.setOptional(O,W,"bindMatrix"),re.setOptional(O,W,"bindMatrixInverse");const de=W.skeleton;de&&(ut.floatVertexTextures?(de.boneTexture===null&&de.computeBoneTexture(),re.setValue(O,"boneTexture",de.boneTexture,vt),re.setValue(O,"boneTextureSize",de.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qr=G.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0&&ut.isWebGL2===!0)&&et.update(W,G,I,gn),(vi||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,re.setValue(O,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(_n.envMap.value=Et,_n.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),vi&&(re.setValue(O,"toneMappingExposure",d.toneMappingExposure),Ct.needsLights&&wc(_n,Wr),pt&&I.fog===!0&&We.refreshFogUniforms(_n,pt),We.refreshMaterialUniforms(_n,I,F,D,K),yr.upload(O,Ct.uniformsList,_n,vt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(yr.upload(O,Ct.uniformsList,_n,vt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&re.setValue(O,"center",W.center),re.setValue(O,"modelViewMatrix",W.modelViewMatrix),re.setValue(O,"normalMatrix",W.normalMatrix),re.setValue(O,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const de=I.uniformsGroups;for(let Xr=0,Tc=de.length;Xr<Tc;Xr++)if(ut.isWebGL2){const _a=de[Xr];mt.update(_a,gn),mt.bind(_a,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function wc(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ec(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,N,G){St.get(S.texture).__webglTexture=N,St.get(S.depthTexture).__webglTexture=G;const I=St.get(S);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=G===void 0,I.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const G=St.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){y=S,_=N,b=G;let I=!0,W=null,pt=!1,Mt=!1;if(S){const Et=St.get(S);Et.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(36160,null),I=!1):Et.__webglFramebuffer===void 0?vt.setupRenderTarget(S):Et.__hasExternalTextures&&vt.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);const Tt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(W=Tt[N],pt=!0):ut.isWebGL2&&S.samples>0&&vt.useMultisampledRTT(S)===!1?W=St.get(S).__webglMultisampledFramebuffer:W=Tt,L.copy(S.viewport),P.copy(S.scissor),v=S.scissorTest}else L.copy(C).multiplyScalar(F).floor(),P.copy(V).multiplyScalar(F).floor(),v=j;if(rt.bindFramebuffer(36160,W)&&ut.drawBuffers&&I&&rt.drawBuffers(S,W),rt.viewport(L),rt.scissor(P),rt.setScissorTest(v),pt){const Et=St.get(S.texture);O.framebufferTexture2D(36160,36064,34069+N,Et.__webglTexture,G)}else if(Mt){const Et=St.get(S.texture),Rt=N||0;O.framebufferTextureLayer(36160,36064,Et.__webglTexture,G||0,Rt)}E=-1},this.readRenderTargetPixels=function(S,N,G,I,W,pt,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){rt.bindFramebuffer(36160,wt);try{const Et=S.texture,Rt=Et.format,Tt=Et.type;if(Rt!==Ne&&at.convert(Rt)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const At=Tt===Ni&&(ct.has("EXT_color_buffer_half_float")||ut.isWebGL2&&ct.has("EXT_color_buffer_float"));if(Tt!==Fn&&at.convert(Tt)!==O.getParameter(35738)&&!(Tt===Rn&&(ut.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!At){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-I&&G>=0&&G<=S.height-W&&O.readPixels(N,G,I,W,at.convert(Rt),at.convert(Tt),pt)}finally{const Et=y!==null?St.get(y).__webglFramebuffer:null;rt.bindFramebuffer(36160,Et)}}},this.copyFramebufferToTexture=function(S,N,G=0){const I=Math.pow(2,-G),W=Math.floor(N.image.width*I),pt=Math.floor(N.image.height*I);vt.setTexture2D(N,0),O.copyTexSubImage2D(3553,G,0,0,S.x,S.y,W,pt),rt.unbindTexture()},this.copyTextureToTexture=function(S,N,G,I=0){const W=N.image.width,pt=N.image.height,Mt=at.convert(G.format),wt=at.convert(G.type);vt.setTexture2D(G,0),O.pixelStorei(37440,G.flipY),O.pixelStorei(37441,G.premultiplyAlpha),O.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?O.texSubImage2D(3553,I,S.x,S.y,W,pt,Mt,wt,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(3553,I,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Mt,N.mipmaps[0].data):O.texSubImage2D(3553,I,S.x,S.y,Mt,wt,N.image),I===0&&G.generateMipmaps&&O.generateMipmap(3553),rt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G,I,W=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=S.max.x-S.min.x+1,Mt=S.max.y-S.min.y+1,wt=S.max.z-S.min.z+1,Et=at.convert(I.format),Rt=at.convert(I.type);let Tt;if(I.isData3DTexture)vt.setTexture3D(I,0),Tt=32879;else if(I.isDataArrayTexture)vt.setTexture2DArray(I,0),Tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,I.flipY),O.pixelStorei(37441,I.premultiplyAlpha),O.pixelStorei(3317,I.unpackAlignment);const At=O.getParameter(3314),Bt=O.getParameter(32878),fe=O.getParameter(3316),Xe=O.getParameter(3315),mn=O.getParameter(32877),kt=G.isCompressedTexture?G.mipmaps[0]:G.image;O.pixelStorei(3314,kt.width),O.pixelStorei(32878,kt.height),O.pixelStorei(3316,S.min.x),O.pixelStorei(3315,S.min.y),O.pixelStorei(32877,S.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Tt,W,N.x,N.y,N.z,pt,Mt,wt,Et,Rt,kt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Tt,W,N.x,N.y,N.z,pt,Mt,wt,Et,kt.data)):O.texSubImage3D(Tt,W,N.x,N.y,N.z,pt,Mt,wt,Et,Rt,kt),O.pixelStorei(3314,At),O.pixelStorei(32878,Bt),O.pixelStorei(3316,fe),O.pixelStorei(3315,Xe),O.pixelStorei(32877,mn),W===0&&I.generateMipmaps&&O.generateMipmap(Tt),rt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?vt.setTextureCube(S,0):S.isData3DTexture?vt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?vt.setTexture2DArray(S,0):vt.setTexture2D(S,0),rt.unbindTexture()},this.resetState=function(){_=0,b=0,y=null,rt.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Tm extends Il{}Tm.prototype.isWebGL1Renderer=!0;class Am extends ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ra extends dn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new U,h=new U,m=[],g=[],d=[],p=[];for(let _=0;_<=i;_++){const b=[],y=_/i;let E=0;_==0&&o==0?E=.5/e:_==i&&c==Math.PI&&(E=-.5/e);for(let M=0;M<=e;M++){const L=M/e;f.x=-t*Math.cos(r+L*s)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(r+L*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),d.push(h.x,h.y,h.z),p.push(L+E,1-y),b.push(l++)}u.push(b)}for(let _=0;_<i;_++)for(let b=0;b<e;b++){const y=u[_][b+1],E=u[_][b],M=u[_+1][b],L=u[_+1][b+1];(_!==0||o>0)&&m.push(y,E,L),(_!==i-1||c<Math.PI)&&m.push(E,M,L)}this.setIndex(m),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2))}static fromJSON(t){return new ra(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cm extends Wi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ro={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lm{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Rm=new Lm;class Nl{constructor(t){this.manager=t!==void 0?t:Rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Pm extends Nl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ro.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ui("img");function c(){u(),Ro.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Fl extends Nl{constructor(t){super(t)}load(t,e,i,r){const s=new he,o=new Pm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Ul extends ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ts=new Wt,Po=new U,Do=new U;class Dm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Po.setFromMatrixPosition(t.matrixWorld),e.position.copy(Po),Do.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Do),e.updateMatrixWorld(),Ts.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ts),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ts)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Im extends Dm{constructor(){super(new ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Bs*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Nm extends Ul{constructor(t,e,i=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Im}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fm extends Ul{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ks}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ks);function Mr(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function Um(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function zl(n){let t,e,i;n.length!==2?(t=Mr,e=(a,c)=>Mr(n(a),c),i=(a,c)=>n(a)-c):(t=n===Mr||n===Um?n:zm,e=n,i=n);function r(a,c,l=0,u=a.length){if(l<u){if(t(c,c)!==0)return u;do{const f=l+u>>>1;e(a[f],c)<0?l=f+1:u=f}while(l<u)}return l}function s(a,c,l=0,u=a.length){if(l<u){if(t(c,c)!==0)return u;do{const f=l+u>>>1;e(a[f],c)<=0?l=f+1:u=f}while(l<u)}return l}function o(a,c,l=0,u=a.length){const f=r(a,c,l,u-1);return f>l&&i(a[f-1],c)>-i(a[f],c)?f-1:f}return{left:r,center:o,right:s}}function zm(){return 0}function Om(n){return n===null?NaN:+n}const Bm=zl(Mr),km=Bm.right;zl(Om).center;const Gm=km;class Io extends Map{constructor(t,e=Wm){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[i,r]of t)this.set(i,r)}get(t){return super.get(No(this,t))}has(t){return super.has(No(this,t))}set(t,e){return super.set(Vm(this,t),e)}delete(t){return super.delete(Hm(this,t))}}function No({_intern:n,_key:t},e){const i=t(e);return n.has(i)?n.get(i):e}function Vm({_intern:n,_key:t},e){const i=t(e);return n.has(i)?n.get(i):(n.set(i,e),e)}function Hm({_intern:n,_key:t},e){const i=t(e);return n.has(i)&&(e=n.get(i),n.delete(i)),e}function Wm(n){return n!==null&&typeof n=="object"?n.valueOf():n}const qm=Math.sqrt(50),Xm=Math.sqrt(10),$m=Math.sqrt(2);function Er(n,t,e){const i=(t-n)/Math.max(0,e),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),o=s>=qm?10:s>=Xm?5:s>=$m?2:1;let a,c,l;return r<0?(l=Math.pow(10,-r)/o,a=Math.round(n*l),c=Math.round(t*l),a/l<n&&++a,c/l>t&&--c,l=-l):(l=Math.pow(10,r)*o,a=Math.round(n/l),c=Math.round(t/l),a*l<n&&++a,c*l>t&&--c),c<a&&.5<=e&&e<2?Er(n,t,e*2):[a,c,l]}function Ym(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const i=t<n,[r,s,o]=i?Er(t,n,e):Er(n,t,e);if(!(s>=r))return[];const a=s-r+1,c=new Array(a);if(i)if(o<0)for(let l=0;l<a;++l)c[l]=(s-l)/-o;else for(let l=0;l<a;++l)c[l]=(s-l)*o;else if(o<0)for(let l=0;l<a;++l)c[l]=(r+l)/-o;else for(let l=0;l<a;++l)c[l]=(r+l)*o;return c}function Vs(n,t,e){return t=+t,n=+n,e=+e,Er(n,t,e)[2]}function jm(n,t,e){t=+t,n=+n,e=+e;const i=t<n,r=i?Vs(t,n,e):Vs(n,t,e);return(i?-1:1)*(r<0?1/-r:r)}function Zm(n,t,e){n=+n,t=+t,e=(r=arguments.length)<2?(t=n,n=0,1):r<3?1:+e;for(var i=-1,r=Math.max(0,Math.ceil((t-n)/e))|0,s=new Array(r);++i<r;)s[i]=n+i*e;return s}var Jm={value:()=>{}};function Ol(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new Sr(e)}function Sr(n){this._=n}function Km(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}Sr.prototype=Ol.prototype={constructor:Sr,on:function(n,t){var e=this._,i=Km(n+"",e),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=Qm(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(n=i[s]).type)e[r]=Fo(e[r],n.name,t);else if(t==null)for(r in e)e[r]=Fo(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Sr(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function Qm(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function Fo(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=Jm,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var Hs="http://www.w3.org/1999/xhtml";const Uo={svg:"http://www.w3.org/2000/svg",xhtml:Hs,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function kr(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Uo.hasOwnProperty(t)?{space:Uo[t],local:n}:n}function tg(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Hs&&t.documentElement.namespaceURI===Hs?t.createElement(n):t.createElementNS(e,n)}}function eg(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Bl(n){var t=kr(n);return(t.local?eg:tg)(t)}function ng(){}function sa(n){return n==null?ng:function(){return this.querySelector(n)}}function ig(n){typeof n!="function"&&(n=sa(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=new Array(o),c,l,u=0;u<o;++u)(c=s[u])&&(l=n.call(c,c.__data__,u,s))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new Se(i,this._parents)}function rg(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function sg(){return[]}function kl(n){return n==null?sg:function(){return this.querySelectorAll(n)}}function ag(n){return function(){return rg(n.apply(this,arguments))}}function og(n){typeof n=="function"?n=ag(n):n=kl(n);for(var t=this._groups,e=t.length,i=[],r=[],s=0;s<e;++s)for(var o=t[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(i.push(n.call(c,c.__data__,l,o)),r.push(c));return new Se(i,r)}function Gl(n){return function(){return this.matches(n)}}function Vl(n){return function(t){return t.matches(n)}}var lg=Array.prototype.find;function cg(n){return function(){return lg.call(this.children,n)}}function ug(){return this.firstElementChild}function hg(n){return this.select(n==null?ug:cg(typeof n=="function"?n:Vl(n)))}var fg=Array.prototype.filter;function dg(){return Array.from(this.children)}function pg(n){return function(){return fg.call(this.children,n)}}function mg(n){return this.selectAll(n==null?dg:pg(typeof n=="function"?n:Vl(n)))}function gg(n){typeof n!="function"&&(n=Gl(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],c,l=0;l<o;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&a.push(c);return new Se(i,this._parents)}function Hl(n){return new Array(n.length)}function _g(){return new Se(this._enter||this._groups.map(Hl),this._parents)}function Tr(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Tr.prototype={constructor:Tr,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function xg(n){return function(){return n}}function vg(n,t,e,i,r,s){for(var o=0,a,c=t.length,l=s.length;o<l;++o)(a=t[o])?(a.__data__=s[o],i[o]=a):e[o]=new Tr(n,s[o]);for(;o<c;++o)(a=t[o])&&(r[o]=a)}function yg(n,t,e,i,r,s,o){var a,c,l=new Map,u=t.length,f=s.length,h=new Array(u),m;for(a=0;a<u;++a)(c=t[a])&&(h[a]=m=o.call(c,c.__data__,a,t)+"",l.has(m)?r[a]=c:l.set(m,c));for(a=0;a<f;++a)m=o.call(n,s[a],a,s)+"",(c=l.get(m))?(i[a]=c,c.__data__=s[a],l.delete(m)):e[a]=new Tr(n,s[a]);for(a=0;a<u;++a)(c=t[a])&&l.get(h[a])===c&&(r[a]=c)}function Mg(n){return n.__data__}function Sg(n,t){if(!arguments.length)return Array.from(this,Mg);var e=t?yg:vg,i=this._parents,r=this._groups;typeof n!="function"&&(n=xg(n));for(var s=r.length,o=new Array(s),a=new Array(s),c=new Array(s),l=0;l<s;++l){var u=i[l],f=r[l],h=f.length,m=bg(n.call(u,u&&u.__data__,l,i)),g=m.length,d=a[l]=new Array(g),p=o[l]=new Array(g),_=c[l]=new Array(h);e(u,f,d,p,_,m,t);for(var b=0,y=0,E,M;b<g;++b)if(E=d[b]){for(b>=y&&(y=b+1);!(M=p[y])&&++y<g;);E._next=M||null}}return o=new Se(o,i),o._enter=a,o._exit=c,o}function bg(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function wg(){return new Se(this._exit||this._groups.map(Hl),this._parents)}function Eg(n,t,e){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function Tg(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,r=e.length,s=i.length,o=Math.min(r,s),a=new Array(r),c=0;c<o;++c)for(var l=e[c],u=i[c],f=l.length,h=a[c]=new Array(f),m,g=0;g<f;++g)(m=l[g]||u[g])&&(h[g]=m);for(;c<r;++c)a[c]=e[c];return new Se(a,this._parents)}function Ag(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function Cg(n){n||(n=Lg);function t(f,h){return f&&h?n(f.__data__,h.__data__):!f-!h}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var o=e[s],a=o.length,c=r[s]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new Se(r,this._parents).order()}function Lg(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function Rg(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Pg(){return Array.from(this)}function Dg(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function Ig(){let n=0;for(const t of this)++n;return n}function Ng(){return!this.node()}function Fg(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],s=0,o=r.length,a;s<o;++s)(a=r[s])&&n.call(a,a.__data__,s,r);return this}function Ug(n){return function(){this.removeAttribute(n)}}function zg(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Og(n,t){return function(){this.setAttribute(n,t)}}function Bg(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function kg(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function Gg(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Vg(n,t){var e=kr(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?zg:Ug:typeof t=="function"?e.local?Gg:kg:e.local?Bg:Og)(e,t))}function Wl(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Hg(n){return function(){this.style.removeProperty(n)}}function Wg(n,t,e){return function(){this.style.setProperty(n,t,e)}}function qg(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function Xg(n,t,e){return arguments.length>1?this.each((t==null?Hg:typeof t=="function"?qg:Wg)(n,t,e??"")):pi(this.node(),n)}function pi(n,t){return n.style.getPropertyValue(t)||Wl(n).getComputedStyle(n,null).getPropertyValue(t)}function $g(n){return function(){delete this[n]}}function Yg(n,t){return function(){this[n]=t}}function jg(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Zg(n,t){return arguments.length>1?this.each((t==null?$g:typeof t=="function"?jg:Yg)(n,t)):this.node()[n]}function ql(n){return n.trim().split(/^|\s+/)}function aa(n){return n.classList||new Xl(n)}function Xl(n){this._node=n,this._names=ql(n.getAttribute("class")||"")}Xl.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function $l(n,t){for(var e=aa(n),i=-1,r=t.length;++i<r;)e.add(t[i])}function Yl(n,t){for(var e=aa(n),i=-1,r=t.length;++i<r;)e.remove(t[i])}function Jg(n){return function(){$l(this,n)}}function Kg(n){return function(){Yl(this,n)}}function Qg(n,t){return function(){(t.apply(this,arguments)?$l:Yl)(this,n)}}function t_(n,t){var e=ql(n+"");if(arguments.length<2){for(var i=aa(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?Qg:t?Jg:Kg)(e,t))}function e_(){this.textContent=""}function n_(n){return function(){this.textContent=n}}function i_(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function r_(n){return arguments.length?this.each(n==null?e_:(typeof n=="function"?i_:n_)(n)):this.node().textContent}function s_(){this.innerHTML=""}function a_(n){return function(){this.innerHTML=n}}function o_(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function l_(n){return arguments.length?this.each(n==null?s_:(typeof n=="function"?o_:a_)(n)):this.node().innerHTML}function c_(){this.nextSibling&&this.parentNode.appendChild(this)}function u_(){return this.each(c_)}function h_(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function f_(){return this.each(h_)}function d_(n){var t=typeof n=="function"?n:Bl(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function p_(){return null}function m_(n,t){var e=typeof n=="function"?n:Bl(n),i=t==null?p_:typeof t=="function"?t:sa(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function g_(){var n=this.parentNode;n&&n.removeChild(this)}function __(){return this.each(g_)}function x_(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function v_(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function y_(n){return this.select(n?v_:x_)}function M_(n){return arguments.length?this.property("__data__",n):this.node().__data__}function S_(n){return function(t){n.call(this,t,this.__data__)}}function b_(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function w_(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,r=t.length,s;e<r;++e)s=t[e],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function E_(n,t,e){return function(){var i=this.__on,r,s=S_(t);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(n.type,s,e),r={type:n.type,name:n.name,value:t,listener:s,options:e},i?i.push(r):this.__on=[r]}}function T_(n,t,e){var i=b_(n+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(r=0,u=a[c];r<s;++r)if((o=i[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=t?E_:w_,r=0;r<s;++r)this.each(a(i[r],t,e));return this}function jl(n,t,e){var i=Wl(n),r=i.CustomEvent;typeof r=="function"?r=new r(t,e):(r=i.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function A_(n,t){return function(){return jl(this,n,t)}}function C_(n,t){return function(){return jl(this,n,t.apply(this,arguments))}}function L_(n,t){return this.each((typeof t=="function"?C_:A_)(n,t))}function*R_(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var Zl=[null];function Se(n,t){this._groups=n,this._parents=t}function Xi(){return new Se([[document.documentElement]],Zl)}function P_(){return this}Se.prototype=Xi.prototype={constructor:Se,select:ig,selectAll:og,selectChild:hg,selectChildren:mg,filter:gg,data:Sg,enter:_g,exit:wg,join:Eg,merge:Tg,selection:P_,order:Ag,sort:Cg,call:Rg,nodes:Pg,node:Dg,size:Ig,empty:Ng,each:Fg,attr:Vg,style:Xg,property:Zg,classed:t_,text:r_,html:l_,raise:u_,lower:f_,append:d_,insert:m_,remove:__,clone:y_,datum:M_,on:T_,dispatch:L_,[Symbol.iterator]:R_};function D_(n){return typeof n=="string"?new Se([[document.querySelector(n)]],[document.documentElement]):new Se([[n]],Zl)}function oa(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function Jl(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function $i(){}var zi=.7,Ar=1/zi,ci="\\s*([+-]?\\d+)\\s*",Oi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ve="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",I_=/^#([0-9a-f]{3,8})$/,N_=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),F_=new RegExp(`^rgb\\(${Ve},${Ve},${Ve}\\)$`),U_=new RegExp(`^rgba\\(${ci},${ci},${ci},${Oi}\\)$`),z_=new RegExp(`^rgba\\(${Ve},${Ve},${Ve},${Oi}\\)$`),O_=new RegExp(`^hsl\\(${Oi},${Ve},${Ve}\\)$`),B_=new RegExp(`^hsla\\(${Oi},${Ve},${Ve},${Oi}\\)$`),zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};oa($i,Bn,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Oo,formatHex:Oo,formatHex8:k_,formatHsl:G_,formatRgb:Bo,toString:Bo});function Oo(){return this.rgb().formatHex()}function k_(){return this.rgb().formatHex8()}function G_(){return Kl(this).formatHsl()}function Bo(){return this.rgb().formatRgb()}function Bn(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=I_.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?ko(t):e===3?new ue(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?pr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?pr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=N_.exec(n))?new ue(t[1],t[2],t[3],1):(t=F_.exec(n))?new ue(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=U_.exec(n))?pr(t[1],t[2],t[3],t[4]):(t=z_.exec(n))?pr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=O_.exec(n))?Ho(t[1],t[2]/100,t[3]/100,1):(t=B_.exec(n))?Ho(t[1],t[2]/100,t[3]/100,t[4]):zo.hasOwnProperty(n)?ko(zo[n]):n==="transparent"?new ue(NaN,NaN,NaN,0):null}function ko(n){return new ue(n>>16&255,n>>8&255,n&255,1)}function pr(n,t,e,i){return i<=0&&(n=t=e=NaN),new ue(n,t,e,i)}function V_(n){return n instanceof $i||(n=Bn(n)),n?(n=n.rgb(),new ue(n.r,n.g,n.b,n.opacity)):new ue}function Cr(n,t,e,i){return arguments.length===1?V_(n):new ue(n,t,e,i??1)}function ue(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}oa(ue,Cr,Jl($i,{brighter(n){return n=n==null?Ar:Math.pow(Ar,n),new ue(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?zi:Math.pow(zi,n),new ue(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new ue(Nn(this.r),Nn(this.g),Nn(this.b),Lr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Go,formatHex:Go,formatHex8:H_,formatRgb:Vo,toString:Vo}));function Go(){return`#${Pn(this.r)}${Pn(this.g)}${Pn(this.b)}`}function H_(){return`#${Pn(this.r)}${Pn(this.g)}${Pn(this.b)}${Pn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Vo(){const n=Lr(this.opacity);return`${n===1?"rgb(":"rgba("}${Nn(this.r)}, ${Nn(this.g)}, ${Nn(this.b)}${n===1?")":`, ${n})`}`}function Lr(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Nn(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Pn(n){return n=Nn(n),(n<16?"0":"")+n.toString(16)}function Ho(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Fe(n,t,e,i)}function Kl(n){if(n instanceof Fe)return new Fe(n.h,n.s,n.l,n.opacity);if(n instanceof $i||(n=Bn(n)),!n)return new Fe;if(n instanceof Fe)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),o=NaN,a=s-r,c=(s+r)/2;return a?(t===s?o=(e-i)/a+(e<i)*6:e===s?o=(i-t)/a+2:o=(t-e)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new Fe(o,a,c,n.opacity)}function W_(n,t,e,i){return arguments.length===1?Kl(n):new Fe(n,t,e,i??1)}function Fe(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}oa(Fe,W_,Jl($i,{brighter(n){return n=n==null?Ar:Math.pow(Ar,n),new Fe(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?zi:Math.pow(zi,n),new Fe(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new ue(As(n>=240?n-240:n+120,r,i),As(n,r,i),As(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Fe(Wo(this.h),mr(this.s),mr(this.l),Lr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Lr(this.opacity);return`${n===1?"hsl(":"hsla("}${Wo(this.h)}, ${mr(this.s)*100}%, ${mr(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Wo(n){return n=(n||0)%360,n<0?n+360:n}function mr(n){return Math.max(0,Math.min(1,n||0))}function As(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}function q_(n,t,e,i,r){var s=n*n,o=s*n;return((1-3*n+3*s-o)*t+(4-6*s+3*o)*e+(1+3*n+3*s-3*o)*i+o*r)/6}function X_(n){var t=n.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),r=n[i],s=n[i+1],o=i>0?n[i-1]:2*r-s,a=i<t-1?n[i+2]:2*s-r;return q_((e-i/t)*t,o,r,s,a)}}const la=n=>()=>n;function $_(n,t){return function(e){return n+e*t}}function Y_(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function j_(n){return(n=+n)==1?Ql:function(t,e){return e-t?Y_(t,e,n):la(isNaN(t)?e:t)}}function Ql(n,t){var e=t-n;return e?$_(n,e):la(isNaN(n)?t:n)}const Rr=function n(t){var e=j_(t);function i(r,s){var o=e((r=Cr(r)).r,(s=Cr(s)).r),a=e(r.g,s.g),c=e(r.b,s.b),l=Ql(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=c(u),r.opacity=l(u),r+""}}return i.gamma=n,i}(1);function Z_(n){return function(t){var e=t.length,i=new Array(e),r=new Array(e),s=new Array(e),o,a;for(o=0;o<e;++o)a=Cr(t[o]),i[o]=a.r||0,r[o]=a.g||0,s[o]=a.b||0;return i=n(i),r=n(r),s=n(s),a.opacity=1,function(c){return a.r=i(c),a.g=r(c),a.b=s(c),a+""}}}var J_=Z_(X_);function K_(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,i=t.slice(),r;return function(s){for(r=0;r<e;++r)i[r]=n[r]*(1-s)+t[r]*s;return i}}function Q_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function t0(n,t){var e=t?t.length:0,i=n?Math.min(e,n.length):0,r=new Array(i),s=new Array(e),o;for(o=0;o<i;++o)r[o]=ca(n[o],t[o]);for(;o<e;++o)s[o]=t[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function e0(n,t){var e=new Date;return n=+n,t=+t,function(i){return e.setTime(n*(1-i)+t*i),e}}function De(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function n0(n,t){var e={},i={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=ca(n[r],t[r]):i[r]=t[r];return function(s){for(r in e)i[r]=e[r](s);return i}}var Ws=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cs=new RegExp(Ws.source,"g");function i0(n){return function(){return n}}function r0(n){return function(t){return n(t)+""}}function tc(n,t){var e=Ws.lastIndex=Cs.lastIndex=0,i,r,s,o=-1,a=[],c=[];for(n=n+"",t=t+"";(i=Ws.exec(n))&&(r=Cs.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:De(i,r)})),e=Cs.lastIndex;return e<t.length&&(s=t.slice(e),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?r0(c[0].x):i0(t):(t=c.length,function(l){for(var u=0,f;u<t;++u)a[(f=c[u]).i]=f.x(l);return a.join("")})}function ca(n,t){var e=typeof t,i;return t==null||e==="boolean"?la(t):(e==="number"?De:e==="string"?(i=Bn(t))?(t=i,Rr):tc:t instanceof Bn?Rr:t instanceof Date?e0:Q_(t)?K_:Array.isArray(t)?t0:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?n0:De)(n,t)}function s0(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var qo=180/Math.PI,qs={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ec(n,t,e,i,r,s){var o,a,c;return(o=Math.sqrt(n*n+t*t))&&(n/=o,t/=o),(c=n*e+t*i)&&(e-=n*c,i-=t*c),(a=Math.sqrt(e*e+i*i))&&(e/=a,i/=a,c/=a),n*i<t*e&&(n=-n,t=-t,c=-c,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(t,n)*qo,skewX:Math.atan(c)*qo,scaleX:o,scaleY:a}}var gr;function a0(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?qs:ec(t.a,t.b,t.c,t.d,t.e,t.f)}function o0(n){return n==null||(gr||(gr=document.createElementNS("http://www.w3.org/2000/svg","g")),gr.setAttribute("transform",n),!(n=gr.transform.baseVal.consolidate()))?qs:(n=n.matrix,ec(n.a,n.b,n.c,n.d,n.e,n.f))}function nc(n,t,e,i){function r(l){return l.length?l.pop()+" ":""}function s(l,u,f,h,m,g){if(l!==f||u!==h){var d=m.push("translate(",null,t,null,e);g.push({i:d-4,x:De(l,f)},{i:d-2,x:De(u,h)})}else(f||h)&&m.push("translate("+f+t+h+e)}function o(l,u,f,h){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),h.push({i:f.push(r(f)+"rotate(",null,i)-2,x:De(l,u)})):u&&f.push(r(f)+"rotate("+u+i)}function a(l,u,f,h){l!==u?h.push({i:f.push(r(f)+"skewX(",null,i)-2,x:De(l,u)}):u&&f.push(r(f)+"skewX("+u+i)}function c(l,u,f,h,m,g){if(l!==f||u!==h){var d=m.push(r(m)+"scale(",null,",",null,")");g.push({i:d-4,x:De(l,f)},{i:d-2,x:De(u,h)})}else(f!==1||h!==1)&&m.push(r(m)+"scale("+f+","+h+")")}return function(l,u){var f=[],h=[];return l=n(l),u=n(u),s(l.translateX,l.translateY,u.translateX,u.translateY,f,h),o(l.rotate,u.rotate,f,h),a(l.skewX,u.skewX,f,h),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,f,h),l=u=null,function(m){for(var g=-1,d=h.length,p;++g<d;)f[(p=h[g]).i]=p.x(m);return f.join("")}}}var l0=nc(a0,"px, ","px)","deg)"),c0=nc(o0,", ",")",")"),mi=0,Pi=0,Ai=0,ic=1e3,Pr,Di,Dr=0,kn=0,Gr=0,Bi=typeof performance=="object"&&performance.now?performance:Date,rc=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function ua(){return kn||(rc(u0),kn=Bi.now()+Gr)}function u0(){kn=0}function Ir(){this._call=this._time=this._next=null}Ir.prototype=sc.prototype={constructor:Ir,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?ua():+e)+(t==null?0:+t),!this._next&&Di!==this&&(Di?Di._next=this:Pr=this,Di=this),this._call=n,this._time=e,Xs()},stop:function(){this._call&&(this._call=null,this._time=1/0,Xs())}};function sc(n,t,e){var i=new Ir;return i.restart(n,t,e),i}function h0(){ua(),++mi;for(var n=Pr,t;n;)(t=kn-n._time)>=0&&n._call.call(void 0,t),n=n._next;--mi}function Xo(){kn=(Dr=Bi.now())+Gr,mi=Pi=0;try{h0()}finally{mi=0,d0(),kn=0}}function f0(){var n=Bi.now(),t=n-Dr;t>ic&&(Gr-=t,Dr=n)}function d0(){for(var n,t=Pr,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:Pr=e);Di=n,Xs(i)}function Xs(n){if(!mi){Pi&&(Pi=clearTimeout(Pi));var t=n-kn;t>24?(n<1/0&&(Pi=setTimeout(Xo,n-Bi.now()-Gr)),Ai&&(Ai=clearInterval(Ai))):(Ai||(Dr=Bi.now(),Ai=setInterval(f0,ic)),mi=1,rc(Xo))}}function $o(n,t,e){var i=new Ir;return t=t==null?0:+t,i.restart(r=>{i.stop(),n(r+t)},t,e),i}var p0=Ol("start","end","cancel","interrupt"),m0=[],ac=0,Yo=1,$s=2,br=3,jo=4,Ys=5,wr=6;function Vr(n,t,e,i,r,s){var o=n.__transition;if(!o)n.__transition={};else if(e in o)return;g0(n,e,{name:t,index:i,group:r,on:p0,tween:m0,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:ac})}function ha(n,t){var e=Ue(n,t);if(e.state>ac)throw new Error("too late; already scheduled");return e}function He(n,t){var e=Ue(n,t);if(e.state>br)throw new Error("too late; already running");return e}function Ue(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function g0(n,t,e){var i=n.__transition,r;i[t]=e,e.timer=sc(s,0,e.time);function s(l){e.state=Yo,e.timer.restart(o,e.delay,e.time),e.delay<=l&&o(l-e.delay)}function o(l){var u,f,h,m;if(e.state!==Yo)return c();for(u in i)if(m=i[u],m.name===e.name){if(m.state===br)return $o(o);m.state===jo?(m.state=wr,m.timer.stop(),m.on.call("interrupt",n,n.__data__,m.index,m.group),delete i[u]):+u<t&&(m.state=wr,m.timer.stop(),m.on.call("cancel",n,n.__data__,m.index,m.group),delete i[u])}if($o(function(){e.state===br&&(e.state=jo,e.timer.restart(a,e.delay,e.time),a(l))}),e.state=$s,e.on.call("start",n,n.__data__,e.index,e.group),e.state===$s){for(e.state=br,r=new Array(h=e.tween.length),u=0,f=-1;u<h;++u)(m=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(r[++f]=m);r.length=f+1}}function a(l){for(var u=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=Ys,1),f=-1,h=r.length;++f<h;)r[f].call(n,u);e.state===Ys&&(e.on.call("end",n,n.__data__,e.index,e.group),c())}function c(){e.state=wr,e.timer.stop(),delete i[t];for(var l in i)return;delete n.__transition}}function _0(n,t){var e=n.__transition,i,r,s=!0,o;if(e){t=t==null?null:t+"";for(o in e){if((i=e[o]).name!==t){s=!1;continue}r=i.state>$s&&i.state<Ys,i.state=wr,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[o]}s&&delete n.__transition}}function x0(n){return this.each(function(){_0(this,n)})}function v0(n,t){var e,i;return function(){var r=He(this,n),s=r.tween;if(s!==e){i=e=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===t){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function y0(n,t,e){var i,r;if(typeof e!="function")throw new Error;return function(){var s=He(this,n),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:t,value:e},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}s.tween=r}}function M0(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=Ue(this.node(),e).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===n)return o.value;return null}return this.each((t==null?v0:y0)(e,n,t))}function fa(n,t,e){var i=n._id;return n.each(function(){var r=He(this,i);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return Ue(r,i).value[t]}}function oc(n,t){var e;return(typeof t=="number"?De:t instanceof Bn?Rr:(e=Bn(t))?(t=e,Rr):tc)(n,t)}function S0(n){return function(){this.removeAttribute(n)}}function b0(n){return function(){this.removeAttributeNS(n.space,n.local)}}function w0(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttribute(n);return o===r?null:o===i?s:s=t(i=o,e)}}function E0(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttributeNS(n.space,n.local);return o===r?null:o===i?s:s=t(i=o,e)}}function T0(n,t,e){var i,r,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttribute(n):(o=this.getAttribute(n),c=a+"",o===c?null:o===i&&c===r?s:(r=c,s=t(i=o,a)))}}function A0(n,t,e){var i,r,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttributeNS(n.space,n.local):(o=this.getAttributeNS(n.space,n.local),c=a+"",o===c?null:o===i&&c===r?s:(r=c,s=t(i=o,a)))}}function C0(n,t){var e=kr(n),i=e==="transform"?c0:oc;return this.attrTween(n,typeof t=="function"?(e.local?A0:T0)(e,i,fa(this,"attr."+n,t)):t==null?(e.local?b0:S0)(e):(e.local?E0:w0)(e,i,t))}function L0(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function R0(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function P0(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&R0(n,s)),e}return r._value=t,r}function D0(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&L0(n,s)),e}return r._value=t,r}function I0(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=kr(n);return this.tween(e,(i.local?P0:D0)(i,t))}function N0(n,t){return function(){ha(this,n).delay=+t.apply(this,arguments)}}function F0(n,t){return t=+t,function(){ha(this,n).delay=t}}function U0(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?N0:F0)(t,n)):Ue(this.node(),t).delay}function z0(n,t){return function(){He(this,n).duration=+t.apply(this,arguments)}}function O0(n,t){return t=+t,function(){He(this,n).duration=t}}function B0(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?z0:O0)(t,n)):Ue(this.node(),t).duration}function k0(n,t){if(typeof t!="function")throw new Error;return function(){He(this,n).ease=t}}function G0(n){var t=this._id;return arguments.length?this.each(k0(t,n)):Ue(this.node(),t).ease}function V0(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;He(this,n).ease=e}}function H0(n){if(typeof n!="function")throw new Error;return this.each(V0(this._id,n))}function W0(n){typeof n!="function"&&(n=Gl(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],c,l=0;l<o;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&a.push(c);return new nn(i,this._parents,this._name,this._id)}function q0(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,r=e.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var c=t[a],l=e[a],u=c.length,f=o[a]=new Array(u),h,m=0;m<u;++m)(h=c[m]||l[m])&&(f[m]=h);for(;a<i;++a)o[a]=t[a];return new nn(o,this._parents,this._name,this._id)}function X0(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function $0(n,t,e){var i,r,s=X0(t)?ha:He;return function(){var o=s(this,n),a=o.on;a!==i&&(r=(i=a).copy()).on(t,e),o.on=r}}function Y0(n,t){var e=this._id;return arguments.length<2?Ue(this.node(),e).on.on(n):this.each($0(e,n,t))}function j0(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function Z0(){return this.on("end.remove",j0(this._id))}function J0(n){var t=this._name,e=this._id;typeof n!="function"&&(n=sa(n));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],c=a.length,l=s[o]=new Array(c),u,f,h=0;h<c;++h)(u=a[h])&&(f=n.call(u,u.__data__,h,a))&&("__data__"in u&&(f.__data__=u.__data__),l[h]=f,Vr(l[h],t,e,h,l,Ue(u,e)));return new nn(s,this._parents,t,e)}function K0(n){var t=this._name,e=this._id;typeof n!="function"&&(n=kl(n));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var c=i[a],l=c.length,u,f=0;f<l;++f)if(u=c[f]){for(var h=n.call(u,u.__data__,f,c),m,g=Ue(u,e),d=0,p=h.length;d<p;++d)(m=h[d])&&Vr(m,t,e,d,h,g);s.push(h),o.push(u)}return new nn(s,o,t,e)}var Q0=Xi.prototype.constructor;function tx(){return new Q0(this._groups,this._parents)}function ex(n,t){var e,i,r;return function(){var s=pi(this,n),o=(this.style.removeProperty(n),pi(this,n));return s===o?null:s===e&&o===i?r:r=t(e=s,i=o)}}function lc(n){return function(){this.style.removeProperty(n)}}function nx(n,t,e){var i,r=e+"",s;return function(){var o=pi(this,n);return o===r?null:o===i?s:s=t(i=o,e)}}function ix(n,t,e){var i,r,s;return function(){var o=pi(this,n),a=e(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(n),pi(this,n))),o===c?null:o===i&&c===r?s:(r=c,s=t(i=o,a))}}function rx(n,t){var e,i,r,s="style."+t,o="end."+s,a;return function(){var c=He(this,n),l=c.on,u=c.value[s]==null?a||(a=lc(t)):void 0;(l!==e||r!==u)&&(i=(e=l).copy()).on(o,r=u),c.on=i}}function sx(n,t,e){var i=(n+="")=="transform"?l0:oc;return t==null?this.styleTween(n,ex(n,i)).on("end.style."+n,lc(n)):typeof t=="function"?this.styleTween(n,ix(n,i,fa(this,"style."+n,t))).each(rx(this._id,n)):this.styleTween(n,nx(n,i,t),e).on("end.style."+n,null)}function ax(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function ox(n,t,e){var i,r;function s(){var o=t.apply(this,arguments);return o!==r&&(i=(r=o)&&ax(n,o,e)),i}return s._value=t,s}function lx(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,ox(n,t,e??""))}function cx(n){return function(){this.textContent=n}}function ux(n){return function(){var t=n(this);this.textContent=t??""}}function hx(n){return this.tween("text",typeof n=="function"?ux(fa(this,"text",n)):cx(n==null?"":n+""))}function fx(n){return function(t){this.textContent=n.call(this,t)}}function dx(n){var t,e;function i(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&fx(r)),t}return i._value=n,i}function px(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,dx(n))}function mx(){for(var n=this._name,t=this._id,e=cc(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=Ue(c,t);Vr(c,n,e,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new nn(i,this._parents,n,e)}function gx(){var n,t,e=this,i=e._id,r=e.size();return new Promise(function(s,o){var a={value:o},c={value:function(){--r===0&&s()}};e.each(function(){var l=He(this,i),u=l.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&s()})}var _x=0;function nn(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function cc(){return++_x}var Ke=Xi.prototype;nn.prototype={constructor:nn,select:J0,selectAll:K0,selectChild:Ke.selectChild,selectChildren:Ke.selectChildren,filter:W0,merge:q0,selection:tx,transition:mx,call:Ke.call,nodes:Ke.nodes,node:Ke.node,size:Ke.size,empty:Ke.empty,each:Ke.each,on:Y0,attr:C0,attrTween:I0,style:sx,styleTween:lx,text:hx,textTween:px,remove:Z0,tween:M0,delay:U0,duration:B0,ease:G0,easeVarying:H0,end:gx,[Symbol.iterator]:Ke[Symbol.iterator]};function xx(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var vx={time:null,delay:0,duration:250,ease:xx};function yx(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Mx(n){var t,e;n instanceof nn?(t=n._id,n=n._name):(t=cc(),(e=vx).time=ua(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Vr(c,n,t,l,o,e||yx(c,t));return new nn(i,this._parents,n,t)}Xi.prototype.interrupt=x0;Xi.prototype.transition=Mx;const js=Math.PI,Zs=2*js,Tn=1e-6,Sx=Zs-Tn;function uc(n){this._+=n[0];for(let t=1,e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function bx(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return uc;const e=10**t;return function(i){this._+=i[0];for(let r=1,s=i.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+i[r]}}class wx{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?uc:bx(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,i,r){this._append`Q${+t},${+e},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(t,e,i,r,s,o){this._append`C${+t},${+e},${+i},${+r},${this._x1=+s},${this._y1=+o}`}arcTo(t,e,i,r,s){if(t=+t,e=+e,i=+i,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,c=i-t,l=r-e,u=o-t,f=a-e,h=u*u+f*f;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(h>Tn)if(!(Math.abs(f*c-l*u)>Tn)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let m=i-o,g=r-a,d=c*c+l*l,p=m*m+g*g,_=Math.sqrt(d),b=Math.sqrt(h),y=s*Math.tan((js-Math.acos((d+h-p)/(2*_*b)))/2),E=y/b,M=y/_;Math.abs(E-1)>Tn&&this._append`L${t+E*u},${e+E*f}`,this._append`A${s},${s},0,0,${+(f*m>u*g)},${this._x1=t+M*c},${this._y1=e+M*l}`}}arc(t,e,i,r,s,o){if(t=+t,e=+e,i=+i,o=!!o,i<0)throw new Error(`negative radius: ${i}`);let a=i*Math.cos(r),c=i*Math.sin(r),l=t+a,u=e+c,f=1^o,h=o?r-s:s-r;this._x1===null?this._append`M${l},${u}`:(Math.abs(this._x1-l)>Tn||Math.abs(this._y1-u)>Tn)&&this._append`L${l},${u}`,i&&(h<0&&(h=h%Zs+Zs),h>Sx?this._append`A${i},${i},0,1,${f},${t-a},${e-c}A${i},${i},0,1,${f},${this._x1=l},${this._y1=u}`:h>Tn&&this._append`A${i},${i},0,${+(h>=js)},${f},${this._x1=t+i*Math.cos(s)},${this._y1=e+i*Math.sin(s)}`)}rect(t,e,i,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}var Zo={},Ls={},Rs=34,Ci=10,Ps=13;function hc(n){return new Function("d","return {"+n.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function Ex(n,t){var e=hc(n);return function(i,r){return t(e(i),r,n)}}function Jo(n){var t=Object.create(null),e=[];return n.forEach(function(i){for(var r in i)r in t||e.push(t[r]=r)}),e}function ce(n,t){var e=n+"",i=e.length;return i<t?new Array(t-i+1).join(0)+e:e}function Tx(n){return n<0?"-"+ce(-n,6):n>9999?"+"+ce(n,6):ce(n,4)}function Ax(n){var t=n.getUTCHours(),e=n.getUTCMinutes(),i=n.getUTCSeconds(),r=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":Tx(n.getUTCFullYear())+"-"+ce(n.getUTCMonth()+1,2)+"-"+ce(n.getUTCDate(),2)+(r?"T"+ce(t,2)+":"+ce(e,2)+":"+ce(i,2)+"."+ce(r,3)+"Z":i?"T"+ce(t,2)+":"+ce(e,2)+":"+ce(i,2)+"Z":e||t?"T"+ce(t,2)+":"+ce(e,2)+"Z":"")}function Cx(n){var t=new RegExp('["'+n+`
\r]`),e=n.charCodeAt(0);function i(f,h){var m,g,d=r(f,function(p,_){if(m)return m(p,_-1);g=p,m=h?Ex(p,h):hc(p)});return d.columns=g||[],d}function r(f,h){var m=[],g=f.length,d=0,p=0,_,b=g<=0,y=!1;f.charCodeAt(g-1)===Ci&&--g,f.charCodeAt(g-1)===Ps&&--g;function E(){if(b)return Ls;if(y)return y=!1,Zo;var L,P=d,v;if(f.charCodeAt(P)===Rs){for(;d++<g&&f.charCodeAt(d)!==Rs||f.charCodeAt(++d)===Rs;);return(L=d)>=g?b=!0:(v=f.charCodeAt(d++))===Ci?y=!0:v===Ps&&(y=!0,f.charCodeAt(d)===Ci&&++d),f.slice(P+1,L-1).replace(/""/g,'"')}for(;d<g;){if((v=f.charCodeAt(L=d++))===Ci)y=!0;else if(v===Ps)y=!0,f.charCodeAt(d)===Ci&&++d;else if(v!==e)continue;return f.slice(P,L)}return b=!0,f.slice(P,g)}for(;(_=E())!==Ls;){for(var M=[];_!==Zo&&_!==Ls;)M.push(_),_=E();h&&(M=h(M,p++))==null||m.push(M)}return m}function s(f,h){return f.map(function(m){return h.map(function(g){return u(m[g])}).join(n)})}function o(f,h){return h==null&&(h=Jo(f)),[h.map(u).join(n)].concat(s(f,h)).join(`
`)}function a(f,h){return h==null&&(h=Jo(f)),s(f,h).join(`
`)}function c(f){return f.map(l).join(`
`)}function l(f){return f.map(u).join(n)}function u(f){return f==null?"":f instanceof Date?Ax(f):t.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:i,parseRows:r,format:o,formatBody:a,formatRows:c,formatRow:l,formatValue:u}}var Lx=Cx(","),Rx=Lx.parse;function Px(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.text()}function Dx(n,t){return fetch(n,t).then(Px)}function Ix(n){return function(t,e,i){return arguments.length===2&&typeof e=="function"&&(i=e,e=void 0),Dx(t,e).then(function(r){return n(r,i)})}}var Nx=Ix(Rx);function Fx(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);if(!(n.status===204||n.status===205))return n.json()}function Ux(n,t){return fetch(n,t).then(Fx)}function zx(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Nr(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,i=n.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+n.slice(e+1)]}function gi(n){return n=Nr(Math.abs(n)),n?n[1]:NaN}function Ox(n,t){return function(e,i){for(var r=e.length,s=[],o=0,a=n[0],c=0;r>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),s.push(e.substring(r-=a,r+a)),!((c+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(t)}}function Bx(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var kx=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Fr(n){if(!(t=kx.exec(n)))throw new Error("invalid format: "+n);var t;return new da({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Fr.prototype=da.prototype;function da(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}da.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Gx(n){t:for(var t=n.length,e=1,i=-1,r;e<t;++e)switch(n[e]){case".":i=r=e;break;case"0":i===0&&(i=e),r=e;break;default:if(!+n[e])break t;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var fc;function Vx(n,t){var e=Nr(n,t);if(!e)return n+"";var i=e[0],r=e[1],s=r-(fc=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+Nr(n,Math.max(0,t+s-1))[0]}function Ko(n,t){var e=Nr(n,t);if(!e)return n+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const Qo={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:zx,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Ko(n*100,t),r:Ko,s:Vx,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function tl(n){return n}var el=Array.prototype.map,nl=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Hx(n){var t=n.grouping===void 0||n.thousands===void 0?tl:Ox(el.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?tl:Bx(el.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f){f=Fr(f);var h=f.fill,m=f.align,g=f.sign,d=f.symbol,p=f.zero,_=f.width,b=f.comma,y=f.precision,E=f.trim,M=f.type;M==="n"?(b=!0,M="g"):Qo[M]||(y===void 0&&(y=12),E=!0,M="g"),(p||h==="0"&&m==="=")&&(p=!0,h="0",m="=");var L=d==="$"?e:d==="#"&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",P=d==="$"?i:/[%p]/.test(M)?o:"",v=Qo[M],T=/[defgprs%]/.test(M);y=y===void 0?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function D(F){var $=L,A=P,C,V,j;if(M==="c")A=v(F)+A,F="";else{F=+F;var Y=F<0||1/F<0;if(F=isNaN(F)?c:v(Math.abs(F),y),E&&(F=Gx(F)),Y&&+F==0&&g!=="+"&&(Y=!1),$=(Y?g==="("?g:a:g==="-"||g==="("?"":g)+$,A=(M==="s"?nl[8+fc/3]:"")+A+(Y&&g==="("?")":""),T){for(C=-1,V=F.length;++C<V;)if(j=F.charCodeAt(C),48>j||j>57){A=(j===46?r+F.slice(C+1):F.slice(C))+A,F=F.slice(0,C);break}}}b&&!p&&(F=t(F,1/0));var B=$.length+F.length+A.length,Z=B<_?new Array(_-B+1).join(h):"";switch(b&&p&&(F=t(Z+F,Z.length?_-A.length:1/0),Z=""),m){case"<":F=$+F+A+Z;break;case"=":F=$+Z+F+A;break;case"^":F=Z.slice(0,B=Z.length>>1)+$+F+A+Z.slice(B);break;default:F=Z+$+F+A;break}return s(F)}return D.toString=function(){return f+""},D}function u(f,h){var m=l((f=Fr(f),f.type="f",f)),g=Math.max(-8,Math.min(8,Math.floor(gi(h)/3)))*3,d=Math.pow(10,-g),p=nl[8+g/3];return function(_){return m(d*_)+p}}return{format:l,formatPrefix:u}}var _r,dc,pc;Wx({thousands:",",grouping:[3],currency:["$",""]});function Wx(n){return _r=Hx(n),dc=_r.format,pc=_r.formatPrefix,_r}function qx(n){return Math.max(0,-gi(Math.abs(n)))}function Xx(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(gi(t)/3)))*3-gi(Math.abs(n)))}function $x(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,gi(t)-gi(n))+1}function pa(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}const il=Symbol("implicit");function mc(){var n=new Io,t=[],e=[],i=il;function r(s){let o=n.get(s);if(o===void 0){if(i!==il)return i;n.set(s,o=t.push(s)-1)}return e[o%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],n=new Io;for(const o of s)n.has(o)||n.set(o,t.push(o)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return mc(t,e).unknown(i)},pa.apply(r,arguments),r}function gc(){var n=mc().unknown(void 0),t=n.domain,e=n.range,i=0,r=1,s,o,a=!1,c=0,l=0,u=.5;delete n.unknown;function f(){var h=t().length,m=r<i,g=m?r:i,d=m?i:r;s=(d-g)/Math.max(1,h-c+l*2),a&&(s=Math.floor(s)),g+=(d-g-s*(h-c))*u,o=s*(1-c),a&&(g=Math.round(g),o=Math.round(o));var p=Zm(h).map(function(_){return g+s*_});return e(m?p.reverse():p)}return n.domain=function(h){return arguments.length?(t(h),f()):t()},n.range=function(h){return arguments.length?([i,r]=h,i=+i,r=+r,f()):[i,r]},n.rangeRound=function(h){return[i,r]=h,i=+i,r=+r,a=!0,f()},n.bandwidth=function(){return o},n.step=function(){return s},n.round=function(h){return arguments.length?(a=!!h,f()):a},n.padding=function(h){return arguments.length?(c=Math.min(1,l=+h),f()):c},n.paddingInner=function(h){return arguments.length?(c=Math.min(1,h),f()):c},n.paddingOuter=function(h){return arguments.length?(l=+h,f()):l},n.align=function(h){return arguments.length?(u=Math.max(0,Math.min(1,h)),f()):u},n.copy=function(){return gc(t(),[i,r]).round(a).paddingInner(c).paddingOuter(l).align(u)},pa.apply(f(),arguments)}function Yx(n){return function(){return n}}function _c(n){return+n}var rl=[0,1];function ri(n){return n}function Js(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:Yx(isNaN(t)?NaN:.5)}function jx(n,t){var e;return n>t&&(e=n,n=t,t=e),function(i){return Math.max(n,Math.min(t,i))}}function Zx(n,t,e){var i=n[0],r=n[1],s=t[0],o=t[1];return r<i?(i=Js(r,i),s=e(o,s)):(i=Js(i,r),s=e(s,o)),function(a){return s(i(a))}}function Jx(n,t,e){var i=Math.min(n.length,t.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<i;)r[o]=Js(n[o],n[o+1]),s[o]=e(t[o],t[o+1]);return function(a){var c=Gm(n,a,1,i)-1;return s[c](r[c](a))}}function Kx(){var n=rl,t=rl,e=ca,i,r,s,o=ri,a,c,l;function u(){var h=Math.min(n.length,t.length);return o!==ri&&(o=jx(n[0],n[h-1])),a=h>2?Jx:Zx,c=l=null,f}function f(h){return h==null||isNaN(h=+h)?s:(c||(c=a(n.map(i),t,e)))(i(o(h)))}return f.invert=function(h){return o(r((l||(l=a(t,n.map(i),De)))(h)))},f.domain=function(h){return arguments.length?(n=Array.from(h,_c),u()):n.slice()},f.range=function(h){return arguments.length?(t=Array.from(h),u()):t.slice()},f.rangeRound=function(h){return t=Array.from(h),e=s0,u()},f.clamp=function(h){return arguments.length?(o=h?!0:ri,u()):o!==ri},f.interpolate=function(h){return arguments.length?(e=h,u()):e},f.unknown=function(h){return arguments.length?(s=h,f):s},function(h,m){return i=h,r=m,u()}}function Qx(){return Kx()(ri,ri)}function tv(n,t,e,i){var r=jm(n,t,e),s;switch(i=Fr(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(t));return i.precision==null&&!isNaN(s=Xx(r,o))&&(i.precision=s),pc(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=$x(r,Math.max(Math.abs(n),Math.abs(t))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=qx(r))&&(i.precision=s-(i.type==="%")*2);break}}return dc(i)}function ev(n){var t=n.domain;return n.ticks=function(e){var i=t();return Ym(i[0],i[i.length-1],e??10)},n.tickFormat=function(e,i){var r=t();return tv(r[0],r[r.length-1],e??10,i)},n.nice=function(e){e==null&&(e=10);var i=t(),r=0,s=i.length-1,o=i[r],a=i[s],c,l,u=10;for(a<o&&(l=o,o=a,a=l,l=r,r=s,s=l);u-- >0;){if(l=Vs(o,a,e),l===c)return i[r]=o,i[s]=a,t(i);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return n},n}function sl(n){return Math.sign(n)*n*n}function nv(n){return Math.sign(n)*Math.sqrt(Math.abs(n))}function xc(){var n=Qx(),t=[0,1],e=!1,i;function r(s){var o=nv(n(s));return isNaN(o)?i:e?Math.round(o):o}return r.invert=function(s){return n.invert(sl(s))},r.domain=function(s){return arguments.length?(n.domain(s),r):n.domain()},r.range=function(s){return arguments.length?(n.range((t=Array.from(s,_c)).map(sl)),r):t.slice()},r.rangeRound=function(s){return r.range(s).round(!0)},r.round=function(s){return arguments.length?(e=!!s,r):e},r.clamp=function(s){return arguments.length?(n.clamp(s),r):n.clamp()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return xc(n.domain(),t).round(e).clamp(n.clamp()).unknown(i)},pa.apply(r,arguments),ev(r)}function iv(n){for(var t=n.length/6|0,e=new Array(t),i=0;i<t;)e[i]="#"+n.slice(i*6,++i*6);return e}const rv=n=>J_(n[n.length-1]);var sv=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(iv);const vc=rv(sv);function cn(n){return function(){return n}}const al=Math.abs,ee=Math.atan2,Mn=Math.cos,av=Math.max,Ds=Math.min,ze=Math.sin,si=Math.sqrt,le=1e-12,ki=Math.PI,Ur=ki/2,ov=2*ki;function lv(n){return n>1?0:n<-1?ki:Math.acos(n)}function ol(n){return n>=1?Ur:n<=-1?-Ur:Math.asin(n)}function cv(n){let t=3;return n.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const i=Math.floor(e);if(!(i>=0))throw new RangeError(`invalid digits: ${e}`);t=i}return n},()=>new wx(t)}function uv(n){return n.innerRadius}function hv(n){return n.outerRadius}function fv(n){return n.startAngle}function dv(n){return n.endAngle}function pv(n){return n&&n.padAngle}function mv(n,t,e,i,r,s,o,a){var c=e-n,l=i-t,u=o-r,f=a-s,h=f*c-u*l;if(!(h*h<le))return h=(u*(t-s)-f*(n-r))/h,[n+h*c,t+h*l]}function xr(n,t,e,i,r,s,o){var a=n-e,c=t-i,l=(o?s:-s)/si(a*a+c*c),u=l*c,f=-l*a,h=n+u,m=t+f,g=e+u,d=i+f,p=(h+g)/2,_=(m+d)/2,b=g-h,y=d-m,E=b*b+y*y,M=r-s,L=h*d-g*m,P=(y<0?-1:1)*si(av(0,M*M*E-L*L)),v=(L*y-b*P)/E,T=(-L*b-y*P)/E,D=(L*y+b*P)/E,F=(-L*b+y*P)/E,$=v-p,A=T-_,C=D-p,V=F-_;return $*$+A*A>C*C+V*V&&(v=D,T=F),{cx:v,cy:T,x01:-u,y01:-f,x11:v*(r/M-1),y11:T*(r/M-1)}}function ll(){var n=uv,t=hv,e=cn(0),i=null,r=fv,s=dv,o=pv,a=null,c=cv(l);function l(){var u,f,h=+n.apply(this,arguments),m=+t.apply(this,arguments),g=r.apply(this,arguments)-Ur,d=s.apply(this,arguments)-Ur,p=al(d-g),_=d>g;if(a||(a=u=c()),m<h&&(f=m,m=h,h=f),!(m>le))a.moveTo(0,0);else if(p>ov-le)a.moveTo(m*Mn(g),m*ze(g)),a.arc(0,0,m,g,d,!_),h>le&&(a.moveTo(h*Mn(d),h*ze(d)),a.arc(0,0,h,d,g,_));else{var b=g,y=d,E=g,M=d,L=p,P=p,v=o.apply(this,arguments)/2,T=v>le&&(i?+i.apply(this,arguments):si(h*h+m*m)),D=Ds(al(m-h)/2,+e.apply(this,arguments)),F=D,$=D,A,C;if(T>le){var V=ol(T/h*ze(v)),j=ol(T/m*ze(v));(L-=V*2)>le?(V*=_?1:-1,E+=V,M-=V):(L=0,E=M=(g+d)/2),(P-=j*2)>le?(j*=_?1:-1,b+=j,y-=j):(P=0,b=y=(g+d)/2)}var Y=m*Mn(b),B=m*ze(b),Z=h*Mn(M),K=h*ze(M);if(D>le){var lt=m*Mn(y),z=m*ze(y),X=h*Mn(E),nt=h*ze(E),tt;if(p<ki)if(tt=mv(Y,B,X,nt,lt,z,Z,K)){var O=Y-tt[0],xt=B-tt[1],ct=lt-tt[0],ut=z-tt[1],rt=1/ze(lv((O*ct+xt*ut)/(si(O*O+xt*xt)*si(ct*ct+ut*ut)))/2),Dt=si(tt[0]*tt[0]+tt[1]*tt[1]);F=Ds(D,(h-Dt)/(rt-1)),$=Ds(D,(m-Dt)/(rt+1))}else F=$=0}P>le?$>le?(A=xr(X,nt,Y,B,m,$,_),C=xr(lt,z,Z,K,m,$,_),a.moveTo(A.cx+A.x01,A.cy+A.y01),$<D?a.arc(A.cx,A.cy,$,ee(A.y01,A.x01),ee(C.y01,C.x01),!_):(a.arc(A.cx,A.cy,$,ee(A.y01,A.x01),ee(A.y11,A.x11),!_),a.arc(0,0,m,ee(A.cy+A.y11,A.cx+A.x11),ee(C.cy+C.y11,C.cx+C.x11),!_),a.arc(C.cx,C.cy,$,ee(C.y11,C.x11),ee(C.y01,C.x01),!_))):(a.moveTo(Y,B),a.arc(0,0,m,b,y,!_)):a.moveTo(Y,B),!(h>le)||!(L>le)?a.lineTo(Z,K):F>le?(A=xr(Z,K,lt,z,h,-F,_),C=xr(Y,B,X,nt,h,-F,_),a.lineTo(A.cx+A.x01,A.cy+A.y01),F<D?a.arc(A.cx,A.cy,F,ee(A.y01,A.x01),ee(C.y01,C.x01),!_):(a.arc(A.cx,A.cy,F,ee(A.y01,A.x01),ee(A.y11,A.x11),!_),a.arc(0,0,h,ee(A.cy+A.y11,A.cx+A.x11),ee(C.cy+C.y11,C.cx+C.x11),_),a.arc(C.cx,C.cy,F,ee(C.y11,C.x11),ee(C.y01,C.x01),!_))):a.arc(0,0,h,M,E,_)}if(a.closePath(),u)return a=null,u+""||null}return l.centroid=function(){var u=(+n.apply(this,arguments)+ +t.apply(this,arguments))/2,f=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-ki/2;return[Mn(f)*u,ze(f)*u]},l.innerRadius=function(u){return arguments.length?(n=typeof u=="function"?u:cn(+u),l):n},l.outerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:cn(+u),l):t},l.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:cn(+u),l):e},l.padRadius=function(u){return arguments.length?(i=u==null?null:typeof u=="function"?u:cn(+u),l):i},l.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:cn(+u),l):r},l.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:cn(+u),l):s},l.padAngle=function(u){return arguments.length?(o=typeof u=="function"?u:cn(+u),l):o},l.context=function(u){return arguments.length?(a=u??null,l):a},l}function ai(n,t,e){this.k=n,this.x=t,this.y=e}ai.prototype={constructor:ai,scale:function(n){return n===1?this:new ai(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new ai(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new ai(1,0,0);ai.prototype;const gv="https://raw.githubusercontent.com/AmirhosseinAzimyzadeh/global_viz/main/public/data/countries.json",_v="https://raw.githubusercontent.com/AmirhosseinAzimyzadeh/global_viz/main/public/data/population.csv";class xv{constructor(){rn(this,"worldMap");rn(this,"selectedCountry");rn(this,"changeListeners");rn(this,"maxPopulation");rn(this,"selectedCountryCenter");this.worldMap=null,this.changeListeners=[],this.selectedCountry=null,this.maxPopulation=0,this.selectedCountryCenter=null}async init(){const t=document.createElement("div");t.innerText="Loading...",t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",document.body.appendChild(t);const e=await Ux(gv),i=await Nx(_v);if(!e)throw new Error("Failed to load world map data");if(!i)throw new Error("Failed to load population data");this.worldMap={...e,features:e.features.filter(r=>i.find(s=>s.countryCode===r.properties.ISO_A3)).map(r=>{var s;return{...r,properties:{...r.properties,population:Number((s=i.find(o=>o.countryCode===r.properties.ISO_A3))==null?void 0:s.population)}}})},this.maxPopulation=this.worldMap.features.reduce((r,s)=>Math.max(r,s.properties.population),0),document.body.removeChild(t)}addChangeListener(t){this.changeListeners.push(t)}setSelectedCountry(t){var i;this.changeListeners.forEach(r=>r(t));const e=document.getElementById("selected_country");if(t===null)this.selectedCountryCenter=null,e.innerText="--";else{e.innerText=`${t.ADMIN} [2021] (${t.ISO_A3}) - Population: ${t.population.toLocaleString("en-US")}`;const r=(i=this.worldMap)==null?void 0:i.features.find(m=>m.properties.ISO_A3===t.ISO_A3);let s=1/0,o=-1/0,a=1/0,c=-1/0;const{geometry:l}=r;let u;l.type==="Polygon"?u=[l.coordinates]:u=l.coordinates;const f=u.reduce((m,g,d)=>g.length>u[m].length?d:m,0);u[f].forEach(m=>{m.forEach(([g,d])=>{s=Math.min(s,d),o=Math.max(o,d),a=Math.min(a,g),c=Math.max(c,g)})}),this.selectedCountryCenter=[(a+c)/2,(s+o)/2]}this.selectedCountry=t}getSelectedCountry(){return this.selectedCountry}getWorldMap(){return this.worldMap}getMaxPopulation(){return this.maxPopulation}getSelectedCountryCenter(){return this.selectedCountryCenter}}const _e=new xv;function cl(){if(document.getElementById("chart")){document.body.removeChild(document.getElementById("chart"));const h=document.createElement("div");h.id="chart",document.body.appendChild(h)}const t=_e.getWorldMap().features.map(h=>({name:h.properties.ADMIN,value:h.properties.population,code:h.properties.ISO_A3})),e={top:10,right:10,bottom:10,left:10},i=window.innerHeight-e.left-e.right,r=window.innerHeight-e.top-e.bottom,s=.3*r,o=.48*i,a=(h,m)=>{_e.setSelectedCountry({ADMIN:m.name,ISO_A3:m.code,population:m.value})},c=()=>{_e.setSelectedCountry(null)},l=D_("#chart").append("svg").style("position","relative").attr("width",i+e.left+e.right).attr("height",r+e.top+e.bottom).append("g").attr("transform",`translate(${i/2+e.left},${r/2+e.top})`),u=gc().range([0,2*Math.PI]).align(0).domain(t.map(h=>h.name)),f=xc().range([s,o]).domain([0,_e.getMaxPopulation()]);l.append("g").selectAll("path").data(t).enter().append("path").attr("class","chart_hover").attr("id",h=>h.code).attr("fill","rgba(0,0,0,0.02)").attr("d",ll().innerRadius(h=>f(h.value)).outerRadius(o).startAngle(h=>Number(u(h.name))).endAngle(h=>Number(u(h.name))+u.bandwidth()).padAngle(0).padRadius(s)).attr("stroke","white").on("mouseover",a).on("mouseout",c),l.append("g").selectAll("path").data(t).enter().append("path").attr("class","chart_hover").attr("fill",h=>vc(h.value/_e.getMaxPopulation())).attr("d",ll().innerRadius(s).outerRadius(h=>f(h.value)).startAngle(h=>Number(u(h.name))).endAngle(h=>Number(u(h.name))+u.bandwidth()).padAngle(.001).padRadius(s)).on("mouseover",a).on("mouseout",c),l.append("g").selectAll("g").data(t).enter().append("g").attr("text-anchor",h=>(Number(u(h.name))+u.bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI?"end":"start").attr("transform",h=>"rotate("+((Number(u(h.name))+u.bandwidth()/2)*180/Math.PI-90)+")translate("+(f(h.value)+10)+",0)").append("text").text(h=>h.name).attr("transform",h=>(Number(u(h.name))+u.bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI?"rotate(180)":"rotate(0)").style("font-size","11px").attr("alignment-baseline","middle").style("font-size","6px").style("cursor","default").on("mouseover",(h,m)=>{h.target!==null&&_e.setSelectedCountry({ADMIN:m.name,ISO_A3:m.code,population:m.value})}).on("mouseout",h=>{h.target!==null&&_e.setSelectedCountry(null)})}const vv=200;class yv{constructor(t=vv){rn(this,"threshold");rn(this,"timerId");this.threshold=t,this.timerId=null}use(t){const e=()=>{this.timerId=null,t()};this.timerId===null?this.timerId=setTimeout(e,this.threshold):(clearTimeout(Number(this.timerId)),this.timerId=setTimeout(e,this.threshold))}clear(){clearTimeout(Number(this.timerId)),this.timerId=null}}const ni=640*10,Cn=320*10;let Sn=null,bn=null;async function yc(n){if(n===null&&bn!==null)return bn;Sn||(Sn=document.createElement("canvas")),Sn.width=ni,Sn.height=Cn;const t=Sn.getContext("2d");t.clearRect(0,0,ni,Cn);const e=_e.getWorldMap();if(t.clearRect(0,0,ni,Cn),t.fillStyle="rgb(230, 230, 235)",t.fillRect(0,0,ni,Cn),!bn)return Mv(t,e),bn=Sn.toDataURL(),bn;const i=await Sv(bn);if(t.drawImage(i,0,0,ni,Cn),n){const r=e.features.find(s=>s.properties.ISO_A3===n);if(r)return console.log(r.properties),Mc("rgba(0,255,0)","transparent",t,Sc(r),5),Sn.toDataURL()}return bn}function Mv(n,t){t.features.forEach(e=>{Mc("white",vc(e.properties.population/_e.getMaxPopulation()),n,Sc(e))})}function Mc(n,t,e,i,r=1){i.forEach(s=>{s.forEach(o=>{e.beginPath(),o.forEach(([a,c])=>{const l=(a+180)*(ni/360),u=(c+90)*(Cn/180);e.lineTo(l,Cn-u)}),e.closePath(),e.fillStyle=t,e.strokeStyle=n,e.lineWidth=r,e.stroke(),e.fill()})})}function Sc(n){const{geometry:t}=n;let e;return t.type==="Polygon"?e=[t.coordinates]:e=t.coordinates,e}function Sv(n){return new Promise((t,e)=>{const i=new Image;i.onload=()=>t(i),i.onerror=e,i.src=n})}document.querySelector("#app").innerHTML=`
  <canvas
    id="canvas"
    style="max-width: 100%; height: 100vh;"
  ></canvas>
`;const bv=new yv;async function wv(){await _e.init();let n=window.innerWidth,t=window.innerHeight;const e=document.querySelector("#canvas");e.width=n,e.height=t;const i=new Il({canvas:e,antialias:!0}),r=2;let s=n/t;const o=.01,a=9e3,c=new ve(r,s,o,a);c.position.z=2;const l=new Am;l.background=new Ft("rgb(245, 245, 245)");const u=new ra(10,50,50),f=await yc(null),h=new Fl().load(f),m=new Cm({map:h,opacity:1,color:"rgb(245, 245, 245)"});m.needsUpdate=!0;const g=new tn(u,m);g.position.z=-1e3,g.material.needsUpdate=!0,g.rotation.y=-Math.PI/2,l.add(g);const d=new Nm("#fff",.5);d.position.set(-1,2,2),l.add(d);const p=new Fm("#fff",.8);return l.add(p),{sphere:g,renderer:i,camera:c,material:m,scene:l}}function Ev(){wv().then(({sphere:n,renderer:t,scene:e,camera:i})=>{cl(),_e.addChangeListener(()=>{bv.use(()=>{var a;yc((a=_e.getSelectedCountry())==null?void 0:a.ISO_A3).then(c=>{new Fl().load(c,l=>{n.material.map=l})})})});let r=-Math.PI/2,s=0;window.addEventListener("resize",()=>{cl();const a=document.querySelector("#canvas");a.width=window.innerWidth,a.height=window.innerHeight,t.setSize(window.innerWidth,window.innerHeight),i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix()});const o=()=>{requestAnimationFrame(o);const a=_e.getSelectedCountryCenter();if(a){const[c,l]=a;r=-Math.PI/2-c*Math.PI/180,s=l*Math.PI/90/2,n.rotation.x=s,n.rotation.y=r}else n.rotation.y+=.001,s=0,r=-Math.PI/2;t.render(e,i)};o()})}Ev();
