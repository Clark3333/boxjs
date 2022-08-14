(()=>{"use strict";var t,e=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))},n=function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},o=function(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))};!function(t){t[t.Surge=0]="Surge",t[t.Loon=1]="Loon",t[t.QuanX=2]="QuanX",t[t.Shadowrocket=3]="Shadowrocket",t[t.Node=4]="Node"}(t||(t={}));var r,i=function(){function r(t,e){this.response={},this.name=t,this.namespace=e,this.logMsg=[],this.logSeparator="",this.startTime=(new Date).getTime(),this.log("🔔".concat(this.name,", 开始!")),this.initEnv()}return r.prototype.done=function(e){void 0===e&&(e={});var n=((new Date).getTime()-this.startTime)/1e3;this.log("🔔".concat(this.name,", 结束! 🕛 ").concat(n," 秒"));var o=this.getStore(r.APP_LOG_KEY,!0);o=o||""+this.logMsg.join("\n"),this.setStore(r.APP_LOG_KEY,o,!0),console.log("本次运行日志已缓存到变量 ".concat(this.namespace+"."+r.APP_LOG_KEY)),console.log("response: "+JSON.stringify(this.response)),this.env==t.Node?process.exit(1):$done(e)},r.prototype.getStore=function(e,n){return void 0===n&&(n=!1),n&&(e=this.namespace+"."+e),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$persistentStore.read(e):this.env==t.QuanX?$prefs.valueForKey(e):null},r.prototype.msg=function(e,n,o){this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$notification.post(e,n,o):this.env==t.QuanX&&$notify(e,n,o)},r.prototype.log=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(e=e.map((function(e){return t.date("yyyy-MM-dd HH:mm:ss")+" "+e+"\n"}))).length>0&&(this.logMsg=o(o([],this.logMsg,!0),e,!0)),console.log(e.join(this.logSeparator))},r.prototype.date=function(t,e){void 0===e&&(e=null);var n=e?new Date(e):new Date,o={"M+":n.getMonth()+1,"d+":n.getDate(),"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),o){var i=o[r];new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i:("00"+i).substr((""+i).length)))}return t},r.prototype.httpResponse=function(t){this.response={response:{status:200,body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,GET","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}}},r.prototype.send=function(t){var e=this;return new Promise((function(n,o){e.doRequest(t,(function(t,r,i){try{i=JSON.parse(i)}catch(t){i=null,e.log("JSON解析错误"+t)}t?o(t):n(i)}))}))},r.prototype.post=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return t.method="post",[4,this.send(t)];case 1:return[2,e.sent()]}}))}))},r.prototype.get=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return t.method="get",[4,this.send(t)];case 1:return[2,e.sent()]}}))}))},r.prototype.doRequest=function(e,n){void 0===n&&(n=function(t,e,n){});var o=e.method?e.method.toLocaleLowerCase():"post";e.body&&e.headers&&!e.headers["Content-Type"]&&(e.headers["Content-Type"]="application/x-www-form-urlencoded"),e.headers&&delete e.headers["Content-Length"],this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?(this.env==t.Surge&&this.isNeedRewrite&&(e.headers=e.headers||{},Object.assign(e.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[o](e,(function(t,e,o){!t&&e&&(e.body=o,e.statusCode=e.status?e.status:e.statusCode,e.status=e.statusCode),n(t,e,o)}))):this.env==t.QuanX?(e.method=o,this.isNeedRewrite&&(e.opts=e.opts||{},Object.assign(e.opts,{hints:!1})),$task.fetch(e).then((function(t){var e=t.statusCode,o=t.statusCode,r=t.headers,i=t.body;n(null,{status:e,statusCode:o,headers:r,body:i},i)}),(function(t){return n(t&&t.error||"UndefinedError",null,null)}))):this.env==t.Node&&(console.error("Node环境 不支持"),n("Node环境 不支持",null,null))},r.prototype.setStore=function(e,n,o){return void 0===o&&(o=!1),o&&(e=this.namespace+"."+e),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$persistentStore.write(n,e):this.env==t.QuanX&&$prefs.setValueForKey(n,e)},r.prototype.initEnv=function(){"undefined"!=typeof $task?this.env=t.QuanX:"undefined"!=typeof $httpClient&&"undefined"==typeof $loon?this.env=t.Surge:"undefined"!=typeof $loon?this.env=t.Loon:"undefined"!=typeof $rocket?this.env=t.Shadowrocket:this.env=t.Node},r.APP_LOG_KEY="boxjs-log",r}(),s=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=new(function(t){function e(e,n){return t.call(this,e,n)||this}return s(e,t),e.prototype.run=function(){return t=this,e=void 0,o=function(){return function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(t){return[2]}))},new((n=void 0)||(n=Promise))((function(r,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}));var t,e,n,o},e}(i))("中国联通","gsonhub.10010");a.run().catch((function(t){a.log(t)})).finally((function(){a.done()}))})();