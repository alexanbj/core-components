"use strict";var name="@nrk/core-datepicker",version="1.0.0";function registerElements(e,t){return"string"==typeof t?registerElements(e,document.querySelectorAll(t)):t.length?[].map.call(t,function(t){return(t[e]=1)&&t}):t.nodeType?(t[e]=1)&&[t]:[]}var CustomEvent=function(){if("undefined"!=typeof window)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e);function e(e,t){void 0===t&&(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n}}();if("undefined"!=typeof window&&"function"!=typeof window.CustomEvent){function CustomEvent$1(e,t){void 0===t&&(t={bubbles:!1,cancelable:!1,detail:void 0});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}CustomEvent$1.prototype=window.Event.prototype,window.CustomEvent=CustomEvent$1}var KEY=name+"-"+version;function datepicker(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Datepicker,[null].concat(e)))}var Datepicker=function(e){this.elements=registerElements(e,KEY)};Datepicker.prototype.open=function(e){void 0===e&&(e=!0)},Datepicker.prototype.close=function(e){void 0===e&&(e=!1)},module.exports=datepicker;
