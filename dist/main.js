(()=>{var t={588:()=>{},969:t=>{"use strict";t.exports={}}},e={};function s(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}(()=>{"use strict";var t,e,o;!function(t){t.Surge="Surge",t.Loon="Loon",t.QuanX="QuanX",t.Shadowrocket="Shadowrocket",t.Node="Node"}(t||(t={})),function(t){t.Response="http-response",t.Request="http-request",t.Script="run-script"}(e||(e={})),function(t){t[t.BASE=0]="BASE",t[t.HTTP=1]="HTTP",t[t.SYS=2]="SYS",t[t.OTHER=3]="OTHER"}(o||(o={}));class i extends Error{constructor(t,e=o.BASE){super(t),this.name="baseErr",this.code=e,this.stack=(new Error).stack,Object.setPrototypeOf(this,i.prototype)}}class n{constructor(t,e){this.isMute=!1,this.logList=[],this.logSeparator="\n\n",this.appName=t,this.namespace=e,this.startTime=(new Date).getTime(),this.log(`🔔${this.appName}, 开始!`),this.initAction(),this.initEnv();let o=this.getStore("mute");this.isMute="true"==o,s(969)}initAction(){"undefined"!=typeof $response?this.action=e.Response:"undefined"!=typeof $request?this.action=e.Request:this.action=e.Script,this.log("脚本类型为："+this.action)}async doAction(){switch(this.action){case e.Request:this.result=await this.doRequestAction($request);break;case e.Response:this.result=await this.doResponseAction($request,$response);break;case e.Script:this.result=await this.doScriptAction();break;default:this.log(this.appName,"Unknow Action","未知的脚本类型"),this.result=!1}!1===this.result&&this.msg(this.appName,"不合法的脚本","请检查脚本配置信息")}run(){this.doAction().catch((t=>{t instanceof i?(this.log(""+t.code),t.code==o.BASE?this.msg(this.appName,t.message,""):t.code==o.HTTP?Math.random()>.8?this.msg(this.appName,"网络异常："+t.message,""):this.log(this.appName,"网络异常Log:"+t.message,""):this.log(t.message,"")):this.log(t),this.result=this.ajaxFailResult(t.message||t)})).finally((()=>{this.done()}))}transParams(t){return Object.keys(t).map((e=>`${e}=${encodeURIComponent(t[e])}`)).join("&")}httpResponseResult(t,e={}){return{response:{status:200,body:"string"==typeof t?t:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,GET","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",...e}}}}randomString(t){for(var e="",s=0;s<t;s++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e}handelLogHttp(){this.log(`运行 》 ${this.appName}系统运行日志http服务器`);let t=this.getStore(n.APP_LOG_KEY)||"";const e=new RegExp(this.logSeparator,"g");return t=t.replace(e,"<br>"),this.httpResponseResult(t,{"Content-Type":"text/html;charset=utf-8"})}send(t){return new Promise(((e,s)=>{this.doRequest(t,((t,n,r)=>{t?s(new i(t,o.HTTP)):e(n)}))}))}async post(t){return t.method="post",await this.send(t)}async get(t){return t.method="get",await this.send(t)}doRequest(e,s=((t,e,s)=>{})){const o=e.method?e.method.toLocaleLowerCase():"post";e.body&&e.headers&&!e.headers["Content-Type"]&&(e.headers["Content-Type"]="application/x-www-form-urlencoded"),e.headers&&delete e.headers["Content-Length"],this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?(this.env==t.Surge&&this.isNeedRewrite&&(e.headers=e.headers||{},Object.assign(e.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[o](e,((t,e,o)=>{!t&&e&&(e.body=o,e.statusCode=e.status?e.status:e.statusCode,e.status=e.statusCode),s(t,e,o)}))):this.env==t.QuanX?(e.method=o,this.isNeedRewrite&&(e.opts=e.opts||{},Object.assign(e.opts,{hints:!1})),$task.fetch(e).then((t=>{const{statusCode:e,statusCode:o,headers:i,body:n}=t;s(null,{status:e,statusCode:o,headers:i,body:n},n)}),(t=>s(t&&t.error||"UndefinedError",null,null)))):this.env==t.Node&&this.print("nodejs http request",e,this.env)}ajaxSuccessResult(t,e=null){let s={time:+new Date,datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:1,msg:t,data:e};return this.httpResponseResult(s)}ajaxFailResult(t,e=null){let s={time:+new Date,datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:0,msg:t,data:e};return this.httpResponseResult(s)}done(){const e=((new Date).getTime()-this.startTime)/1e3;if(this.print("运行 response: "+JSON.stringify(this.result)),this.log(`🔔${this.appName}, 结束! 🕛 ${e} 秒 ${this.logSeparator}`),this.env==t.Node)process.exit(1);else{let t=this.getStore(n.APP_LOG_KEY)||"";t=t.split(this.logSeparator).slice(0,1e4).join(this.logSeparator),t=this.logList.join("")+t,this.setStore(n.APP_LOG_KEY,t),this.print("注意本次运行日志已缓存到变量 "+this.namespace+"."+n.APP_LOG_KEY),this.result?$done(this.result):$done({})}}msg(e,s,o){this.isMute||(this.log("==============📣系统通知📣=============="+this.logSeparator+e+this.logSeparator+s+this.logSeparator+o),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$notification.post(e,s,o):this.env==t.QuanX&&$notify(e,s,o))}print(...t){t=t.map((t=>this.date("yyyy-MM-dd HH:mm:ss")+" "+t+this.logSeparator)),console.log(t.join(this.logSeparator))}log(...t){(t=t.map((t=>this.date("yyyy-MM-dd HH:mm:ss")+" "+("string"==typeof t?t:JSON.stringify(t))+this.logSeparator))).length>0&&(this.logList=[...this.logList,...t]),console.log(t.join(this.logSeparator))}getStore(e,s=!0){return s&&(e=this.namespace+"."+e),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$persistentStore.read(e):this.env==t.QuanX?$prefs.valueForKey(e):null}setStore(e,s,o=!0){return o&&(e=this.namespace+"."+e),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$persistentStore.write(s,e):this.env==t.QuanX&&$prefs.setValueForKey(s,e)}initEnv(){"undefined"!=typeof $task?this.env=t.QuanX:"undefined"!=typeof $loon?this.env=t.Loon:"undefined"!=typeof $rocket?this.env=t.Shadowrocket:"undefined"!=typeof $httpClient&&"undefined"==typeof $loon?this.env=t.Surge:this.env=t.Node,this.log("当前APP为: "+this.env)}date(t,e=""){const s=e?new Date(e):new Date;let o={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in o){let s=o[e];new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?s:("00"+s).substr((""+s).length)))}return t}getSignCount(){let t=this.getStore("sign_count"),e=this.date("yyyyMMdd");if(t){let[s,o]=t.split("_");return s==e&&o?Number(o):(this.setStore("sign_count",`${e}_0`),0)}return this.setStore("sign_count",`${e}_0`),0}incSignCount(){let t=this.getSignCount();t++;let e=this.date("yyyyMMdd");this.setStore("sign_count",`${e}_${t}`)}}n.APP_LOG_KEY="boxjs-log";const r=n;s(588),new class extends r{doRequestAction(t){throw new Error("Method not implemented.")}doResponseAction(t,e){throw new Error("Method not implemented.")}doScriptAction(){throw new Error("Method not implemented.")}}("开发示s例","gsonhub.demo")})()})();