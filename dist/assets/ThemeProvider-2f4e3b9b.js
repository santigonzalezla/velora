import{g as t,r as n}from"./index-d41c4a55.js";var r,e={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/r=e,function(){var t={}.hasOwnProperty;function n(){for(var r=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var s=typeof o;if("string"===s||"number"===s)r.push(o);else if(Array.isArray(o)){if(o.length){var i=n.apply(null,o);i&&r.push(i)}}else if("object"===s){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var a in o)t.call(o,a)&&o[a]&&r.push(a)}}}return r.join(" ")}r.exports?(n.default=n,r.exports=n):window.classNames=n}();const o=t(e.exports),s=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"});function i(t,r){const{prefixes:e}=n.useContext(s);return t||e[r]||r}function a(){const{breakpoints:t}=n.useContext(s);return t}function u(){const{minBreakpoint:t}=n.useContext(s);return t}function p(){const{dir:t}=n.useContext(s);return"rtl"===t}export{p as a,a as b,o as c,u as d,i as u};
