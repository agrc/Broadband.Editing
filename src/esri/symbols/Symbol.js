//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","esri/kernel","esri/lang"],function(b,c,d,h,i,g){function e(a){return a&&new d([a[0],a[1],a[2],a[3]/255])}function f(a){return a&&[a.r,a.g,a.b,Math.round(255*a.a)]}b=b(null,{declaredClass:"esri.symbol.Symbol",color:new d([0,0,0,1]),type:null,_stroke:null,_fill:null,constructor:function(a){if(a&&c.isObject(a)){c.mixin(this,a);if(this.color&&g.isDefined(this.color[0]))this.color=e(this.color);if((a=this.type)&&0===a.indexOf("esri"))this.type=
{esriSMS:"simplemarkersymbol",esriPMS:"picturemarkersymbol",esriSLS:"simplelinesymbol",esriCLS:"cartographiclinesymbol",esriSFS:"simplefillsymbol",esriPFS:"picturefillsymbol",esriTS:"textsymbol"}[a]}},setColor:function(a){this.color=a;return this},toJson:function(){return{color:f(this.color)}}});b.toDojoColor=e;b.toJsonColor=f;return b});