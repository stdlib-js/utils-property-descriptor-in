// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r=void 0!==Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyDescriptor,i=Object.prototype.hasOwnProperty;e=r?function(e,r){var i;return null==e||void 0===(i=t(e,r))?null:i}:function(e,r){return function(e,r){return null!=e&&i.call(e,r)}(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};var n=e,a=Object,o=/./,c="function"==typeof Object.defineProperty?Object.defineProperty:null,s=Object.defineProperty;function l(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function p(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+u(n):u(n)+e,i&&(e="-"+e)),e}var f=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function d(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!l(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=p(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=p(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===g.call(e.specifier)?g.call(t):f.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function h(e){return"string"==typeof e}var b=Math.abs,w=String.prototype.toLowerCase,y=String.prototype.toUpperCase,v=String.prototype.replace,m=/e\+(\d)$/,E=/e-(\d)$/,x=/^(\d+)$/,j=/^(\d+)e/,k=/\.0$/,_=/\.0*e/,S=/(\..*[^0])0*e/;function O(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!l(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":b(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=v.call(t,S,"$1e"),t=v.call(t,_,"e"),t=v.call(t,k,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,m,"e+0$1"),t=v.call(t,E,"e-0$1"),e.alternate&&(t=v.call(t,x,"$1."),t=v.call(t,j,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):w.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function V(e,r,t){var i=r-e.length;return i<0?e:e=t?e+T(i):T(i)+e}var A=String.fromCharCode,$=isNaN,F=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function C(e){var r,t,i,n,a,o,c,s,l;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(h(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=I(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=d(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$(a)?String(i.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=O(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=p(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=V(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,t,i,n;for(t=[],n=0,i=P.exec(e);i;)(r=e.slice(n,P.lastIndex-i[0].length)).length&&t.push(r),t.push(R(i)),n=P.lastIndex,i=P.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function L(e){return"string"==typeof e}function W(e){var r,t,i;if(!L(e))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Z(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return C.apply(null,t)}var B,G=Object.prototype,N=G.toString,U=G.__defineGetter__,X=G.__defineSetter__,M=G.__lookupGetter__,D=G.__lookupSetter__;B=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?s:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(M.call(e,r)||D.call(e,r)?(i=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&U&&U.call(e,r,t.get),o&&X&&X.call(e,r,t.set),e};var z=B;function q(e,r,t){z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(e){return"boolean"==typeof e}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return J&&"symbol"==typeof Symbol.toStringTag}var Q,Y=Object.prototype.toString,ee=Object.prototype.hasOwnProperty,re="function"==typeof Symbol?Symbol:void 0,te="function"==typeof re?re.toStringTag:"";Q=K()?function(e){var r,t,i,n,a;if(null==e)return Y.call(e);t=e[te],a=te,r=null!=(n=e)&&ee.call(n,a);try{e[te]=void 0}catch(r){return Y.call(e)}return i=Y.call(e),r?e[te]=t:delete e[te],i}:function(e){return Y.call(e)};var ie=Q,ne=Boolean,ae=Boolean.prototype.toString,oe=K();function ce(e){return"object"==typeof e&&(e instanceof ne||(oe?function(e){try{return ae.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ie(e)))}function se(e){return H(e)||ce(e)}function le(e){return"number"==typeof e}function ue(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function pe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ue(n):ue(n)+e,i&&(e="-"+e)),e}q(se,"isPrimitive",H),q(se,"isObject",ce);var fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase;function de(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!le(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=pe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=pe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ge.call(e.specifier)?ge.call(t):fe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function he(e){return"string"==typeof e}var be=Math.abs,we=String.prototype.toLowerCase,ye=String.prototype.toUpperCase,ve=String.prototype.replace,me=/e\+(\d)$/,Ee=/e-(\d)$/,xe=/^(\d+)$/,je=/^(\d+)e/,ke=/\.0$/,_e=/\.0*e/,Se=/(\..*[^0])0*e/;function Oe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!le(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":be(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ve.call(t,Se,"$1e"),t=ve.call(t,_e,"e"),t=ve.call(t,ke,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ve.call(t,me,"e+0$1"),t=ve.call(t,Ee,"e-0$1"),e.alternate&&(t=ve.call(t,xe,"$1."),t=ve.call(t,je,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ye.call(e.specifier)?ye.call(t):we.call(t)}function Te(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ve(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Te(i):Te(i)+e}var Ae=String.fromCharCode,$e=isNaN,Fe=Array.isArray;function Ie(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ce(e){var r,t,i,n,a,o,c,s,l;if(!Fe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(he(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ie(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$e(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$e(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=de(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$e(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$e(a)?String(i.arg):Ae(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Oe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=pe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ve(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Pe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Re(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ze(e){var r,t,i,n;for(t=[],n=0,i=Pe.exec(e);i;)(r=e.slice(n,Pe.lastIndex-i[0].length)).length&&t.push(r),t.push(Re(i)),n=Pe.lastIndex,i=Pe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Le(e){return"string"==typeof e}function We(e){var r,t,i;if(!Le(e))throw new TypeError(We("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ze(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ce.apply(null,t)}function Be(){return new Function("return this;")()}var Ge="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Ue="object"==typeof globalThis?globalThis:null,Xe=function(e){if(arguments.length){if(!H(e))throw new TypeError(We("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Be()}if(Ue)return Ue;if(Ge)return Ge;if(Ne)return Ne;throw new Error("unexpected error. Unable to resolve global object.")}(),Me=Xe.document&&Xe.document.childNodes,De=Int8Array;function ze(){return/^\s*function\s*([^(]*)/i}var qe,He=/^\s*function\s*([^(]*)/i;q(ze,"REGEXP",He),qe=Array.isArray?Array.isArray:function(e){return"[object Array]"===ie(e)};var Je=qe;function Ke(e){return null!==e&&"object"==typeof e}var Qe=function(e){if("function"!=typeof e)throw new TypeError(We("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Je(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Ke);function Ye(e){var r,t,i,n;if(("Object"===(t=ie(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=He.exec(i.toString()))return r[1]}return Ke(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}q(Ke,"isObjectLikeArray",Qe);var er,rr,tr="function"==typeof o||"object"==typeof De||"function"==typeof Me?function(e){return Ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Ye(e).toLowerCase():r},ir=Object.getPrototypeOf;rr=Object.getPrototypeOf,er="function"===tr(rr)?ir:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===ie(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var nr=er;function ar(e){return null==e?null:(e=a(e),nr(e))}return function(e,r){var t,i;if(null==e)return null;i=Object(e);do{if(t=n(i,r))return t;i=ar(i)}while(i);return null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).propertyDescriptorIn=r();
//# sourceMappingURL=browser.js.map
