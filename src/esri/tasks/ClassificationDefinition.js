//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel"],function(c,b){return c(null,{declaredClass:"esri.tasks.ClassificationDefinition",type:null,baseSymbol:null,colorRamp:null,toJson:function(){var a={};this.baseSymbol&&b.mixin(a,{baseSymbol:this.baseSymbol.toJson()});this.colorRamp&&b.mixin(a,{colorRamp:this.colorRamp.toJson()});return a}})});