//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/has","esri/kernel","esri/request","esri/deferredUtils","esri/tasks/Task","esri/tasks/FindResult"],function(h,g,i,j,p,q,k,l,m,n){return h(m,{declaredClass:"esri.tasks.FindTask",constructor:function(a,b){this._url.path+="/find";this._handler=g.hitch(this,this._handler);this.gdbVersion=b&&b.gdbVersion},_handler:function(a,b,e,f,d){try{var c=[];i.forEach(a.results,function(a,b){c[b]=new n(a)});this._successHandler([c],
"onComplete",e,d)}catch(o){this._errorHandler(o,f,d)}},execute:function(a,b,e){var a=this._encode(g.mixin({},this._url.query,{f:"json"},a.toJson())),f=this._handler,d=this._errorHandler;if(this.gdbVersion)a.gdbVersion=this.gdbVersion;var c=new j(l._dfdCanceller);c._pendingDfd=k({url:this._url.path,content:a,callbackParamName:"callback",load:function(a,d){f(a,d,b,e,c)},error:function(a){d(a,e,c)}});return c},onComplete:function(){}})});