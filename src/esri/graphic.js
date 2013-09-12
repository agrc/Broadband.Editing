//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/domUtils","esri/lang","esri/InfoTemplate","esri/geometry/jsonUtils","esri/symbols/jsonUtils"],function(g,d,k,l,e,f,h,i,j){return g(null,{declaredClass:"esri.Graphic",constructor:function(a,b,c,d){a&&!a.declaredClass?(this.geometry=a.geometry?i.fromJson(a.geometry):null,this.symbol=a.symbol?j.fromJson(a.symbol):null,this.attributes=a.attributes||null,this.infoTemplate=a.infoTemplate?new h(a.infoTemplate):null):(this.geometry=a,
this.symbol=b,this.attributes=c,this.infoTemplate=d)},_shape:null,_graphicsLayer:null,_visible:!0,visible:!0,getDojoShape:function(){return this._shape},getLayer:function(){return this._graphicsLayer},setGeometry:function(a){this.geometry=a;if(a=this._graphicsLayer)a._updateExtent(this),a._draw(this,!0);return this},setSymbol:function(a,b){var c=this._graphicsLayer,d=this._shape;if(this.symbol=a)this.symbol._stroke=this.symbol._fill=null;c&&(b&&d&&c._removeShape(this),c._draw(this,!0));return this},
setAttributes:function(a){this.attributes=a;return this},setInfoTemplate:function(a){this.infoTemplate=a;return this},getInfoTemplate:function(){return this._getEffInfoTemplate()},_getEffInfoTemplate:function(){var a=this.getLayer();return this.infoTemplate||a&&a.infoTemplate},getTitle:function(){var a=this.getInfoTemplate(),b=a&&a.title;if(d.isFunction(b))b=b.call(a,this);else if(d.isString(b))var c=(a=this._graphicsLayer)&&a._getDateOpts,b=f.substitute(this.attributes,b,{first:!0,dateFormat:c&&
c.call(a)});return b},getContent:function(){var a=this.getInfoTemplate(),b=a&&a.content;if(d.isFunction(b))b=b.call(a,this);else if(d.isString(b))var c=(a=this._graphicsLayer)&&a._getDateOpts,b=f.substitute(this.attributes,b,{dateFormat:c&&c.call(a)});return b},show:function(){this.visible=this._visible=!0;var a=this._shape;a?(a=-1===a.declaredClass.toLowerCase().indexOf("canvas")?a.getEventSource():null)&&e.show(a):this._graphicsLayer&&this._graphicsLayer._draw(this,!0);return this},hide:function(){this.visible=
this._visible=!1;var a=this._shape;if(a)(a=-1===a.declaredClass.toLowerCase().indexOf("canvas")?a.getEventSource():null)?e.hide(a):(a=this._graphicsLayer)&&a._removeShape(this);return this},toJson:function(){var a={};if(this.geometry)a.geometry=this.geometry.toJson();if(this.attributes)a.attributes=d.mixin({},this.attributes);if(this.symbol)a.symbol=this.symbol.toJson();if(this.infoTemplate)a.infoTemplate=this.infoTemplate.toJson();return a}})});