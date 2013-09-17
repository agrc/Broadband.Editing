//>>built
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","esri/kernel","esri/lang","esri/symbols/jsonUtils","esri/renderers/Renderer"],function(n,i,k,p,q,l,m,o){return n(o,{declaredClass:"esri.renderer.ClassBreaksRenderer",constructor:function(a,c){this.breaks=[];this._symbols={};this.infos=[];if(a&&!a.declaredClass){var b=a;this.attributeField=b.field;if(a=b.defaultSymbol)this.defaultSymbol=m.fromJson(a);this._copy(["defaultLabel","classificationMethod:rest","normalizationType:rest",
"normalizationField","normalizationTotal"],b,this);var e=b.minValue;(b=b.classBreakInfos)&&b[0]&&l.isDefined(b[0].classMaxValue)&&i.forEach(b,function(a){var b=a.classMaxValue;a.minValue=e;e=a.maxValue=b},this);i.forEach(b,this._addBreakInfo,this)}else this.defaultSymbol=a,this.attributeField=c},addBreak:function(a,c,b){this._addBreakInfo(k.isObject(a)?a:{minValue:a,maxValue:c,symbol:b})},removeBreak:function(a,c){var b,e=this.breaks,d,f=e.length,g=this._symbols;for(d=0;d<f;d++)if(b=e[d],b[0]==a&&
b[1]==c){e.splice(d,1);delete g[a+"-"+c];this.infos.splice(d,1);break}},clearBreaks:function(){this.breaks=[];this._symbols={};this.infos=[]},getSymbol:function(a){var c=this.attributeField,b=a.attributes,e=this.breaks,d=e.length,f=this._symbols,g=this.isMaxInclusive;if(k.isFunction(c))a=c(a);else{var a=parseFloat(b[c]),c=this.normalizationType,h;c&&(h=parseFloat(this.normalizationTotal),b=parseFloat(b[this.normalizationField]),"log"===c?a=Math.log(a)*Math.LOG10E:"percent-of-total"===c&&!isNaN(h)?
a=100*(a/h):"field"===c&&!isNaN(b)&&(a/=b))}for(b=0;b<d;b++)if(c=e[b],c[0]<=a&&(g?a<=c[1]:a<c[1]))return f[c[0]+"-"+c[1]];return this.defaultSymbol},setMaxInclusive:function(a){this.isMaxInclusive=a},_normalizationTypeEnums:[["field","esriNormalizeByField"],["log","esriNormalizeByLog"],["percent-of-total","esriNormalizeByPercentOfTotal"]],_classificationMethodEnums:[["natural-breaks","esriClassifyNaturalBreaks"],["equal-interval","esriClassifyEqualInterval"],["quantile","esriClassifyQuantile"],["standard-deviation",
"esriClassifyStandardDeviation"],["geometrical-interval","esriClassifyGeometricalInterval"]],_copy:function(a,c,b){i.forEach(a,function(a){var d=a.split(":"),f,g,h;1<d.length&&(a=d[0],f=this["_"+a+"Enums"],"rest"===d[1]?(g="1",h="0"):"sdk"===d[1]&&(g="0",h="1"));d=c[a];if(void 0!==d&&(b[a]=d,f&&g)){var j,i=f.length;for(j=0;j<i;j++)if(f[j][g]===d){b[a]=f[j][h];break}}},this)},_addBreakInfo:function(a){var c=a.minValue,b=a.maxValue;this.breaks.push([c,b]);this.infos.push(a);var e=a.symbol;if(e&&!e.declaredClass)a.symbol=
m.fromJson(e);this._symbols[c+"-"+b]=a.symbol},toJson:function(){var a=this.infos||[],c=l.fixJson,b=a[0]&&a[0].minValue,a={type:"classBreaks",field:this.attributeField,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),minValue:-Infinity===b?-Number.MAX_VALUE:b,classBreakInfos:i.map(a,function(a){a=k.mixin({},a);a.symbol=a.symbol&&a.symbol.toJson();a.classMaxValue=Infinity===a.maxValue?Number.MAX_VALUE:a.maxValue;delete a.minValue;delete a.maxValue;return c(a)})};this._copy(["defaultLabel",
"classificationMethod:sdk","normalizationType:sdk","normalizationField","normalizationTotal"],this,a);return c(a)}})});