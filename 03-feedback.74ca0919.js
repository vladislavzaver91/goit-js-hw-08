var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=f||a||Function("return this")(),c=Object.prototype.toString,s=Math.max,l=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var o,r,i,f,a,u,c=0,d=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(O,t),d?g(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-c>=i}function O(){var e=m();if(j(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-u);return b?l(n,i-(e-c)):n}(e))}function S(e){return a=void 0,y&&o?g(e):(o=r=void 0,f)}function T(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(b)return a=setTimeout(O,t),g(u)}return void 0===a&&(a=setTimeout(O,t)),f}return t=p(t)||0,v(n)&&(d=!!n.leading,i=(b="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:S(m())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=v(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=o.test(e);return a||r.test(e)?i(e.slice(2),a?2:8):n.test(e)?NaN:+e}const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector("[name=message]")},y={};b.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Poletela forma =>"),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),b.form.addEventListener("input",(function(e){const{name:t,value:n}=e.target;y[t]=n;try{const e=JSON.stringify(y);localStorage.setItem("feedback-form-state",e)}catch(e){console.error(e.message)}})),function(){const e=localStorage.getItem("feedback-form-state");if(!e)return;try{const t=JSON.parse(e);console.log(t)}catch(e){console.error(e.message)}}();
//# sourceMappingURL=03-feedback.74ca0919.js.map