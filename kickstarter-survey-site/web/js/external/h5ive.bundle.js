/*! h5ive:storage | (c) Kyle Simpson | MIT License: http://getify.mit-license.org */
(function(e){e.h5={}})(this),function(e){if(!e)throw new Error("storage.h5ive: core.h5ive required.");e.storage=function(e){function i(e){var i,s;for(i in e)s={"h5ive:data":e[i]},r&&(s["h5ive:expires"]=r),t.setItem(i,JSON.stringify(s));return n}function s(e){Object.prototype.toString.call(e)!="[object Array]"&&(e=[e]);for(var r=0;r<e.length;r++)t.removeItem(e[r]);return n}function o(e){var n,r,i=[],s=(new Date).getTime();Object.prototype.toString.call(e)!=="[object Array]"&&(e=[e]);for(n=0;n<e.length;n++){r=i[e[n]]=t.getItem(e[n]);try{r=JSON.parse(r);if("h5ive:data"in r){if("h5ive:expires"in r&&s>=r["h5ive:expires"]){delete i[e[n]],t.removeItem(e[n]);continue}i[e[n]]=r["h5ive:data"]}}catch(o){}}if(e.length<2){if(e.length>0&&e[0]in i)return i[e[0]];return}return i}var t,n,r;return e=e||{},"expires"in e&&typeof e.expires=="number"&&e.expires>0&&(r=e.expires+(new Date).getTime()),e.expires=="session"?t=sessionStorage:t=localStorage,n={save:i,discard:s,get:o},n}}(this.h5);