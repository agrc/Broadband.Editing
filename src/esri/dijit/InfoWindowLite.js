//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/html","dojo/has","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/registry","esri/kernel","esri/domUtils","esri/InfoWindowBase"],function(p,k,l,m,j,t,q,e,f,n,h,r,u,o,s){var g=p([s],{declaredClass:"esri.dijit.InfoWindowLite",constructor:function(a,b){k.mixin(this,a);var c=this.domNode=q.byId(b);c.id=this.id||r.getUniqueId(this.declaredClass);e.add(c,"simpleInfoWindow");this._title=
f.create("div",{"class":"title"},c);this._content=f.create("div",{"class":"content"},c);this._close=f.create("div",{"class":"close"},c)},domNode:null,anchor:"upperright",fixedAnchor:null,coords:null,isShowing:!0,width:250,height:150,title:"Info Window",_bufferWidth:10,_bufferHeight:10,startup:function(){this._anchors=[g.ANCHOR_UPPERRIGHT,g.ANCHOR_LOWERRIGHT,g.ANCHOR_LOWERLEFT,g.ANCHOR_UPPERLEFT];this.resize(this.width,this.height);this.hide();this._closeConnect=l.connect(this._close,"onclick",this,
this.hide)},destroy:function(){this.isShowing&&this.hide();this.destroyDijits(this._title);this.destroyDijits(this._content);l.disconnect(this._closeConnect);f.destroy(this.domNode);this.domNode=this._title=this._content=this._anchors=this._closeConnect=null},setTitle:function(a){a?e.remove(this._title,"empty"):e.add(this._title,"empty");this.destroyDijits(this._title);this.__setValue("_title",a);return this},setContent:function(a){a?e.remove(this._title,"empty"):e.add(this._title,"empty");this.destroyDijits(this._content);
this.__setValue("_content",a);return this},setFixedAnchor:function(a){if(!(a&&-1===m.indexOf(this._anchors,a)))this.fixedAnchor=a,this.isShowing&&this.show(this.mapCoords||this.coords,a),this.onAnchorChange(a)},show:function(a,b,c){if(a){a.spatialReference?(this.mapCoords=a,a=this.coords=this.map.toScreen(a,!0)):(this.mapCoords=null,this.coords=a);if(!b||-1===m.indexOf(this._anchors,b))b=this._getAnchor(a);b=this.anchor=this.fixedAnchor||b;o.show(this.domNode);this._adjustContentArea();this._adjustPosition(a,
b);this.isShowing=!0;if(!c)this.onShow()}},hide:function(a,b){o.hide(this.domNode);this.isShowing=!1;if(!b)this.onHide()},move:function(a,b){if(b)a=this.coords.offset(a.x,a.y);else if(this.coords=a,this.mapCoords)this.mapCoords=this.map.toMap(a);this._adjustPosition(a,this.anchor)},resize:function(a,b){this.width=a;this.height=b;h.set(this.domNode,{width:a+"px",height:b+"px"});h.set(this._close,{left:a-2+"px",top:"-12px"});this._adjustContentArea();this.coords&&this._adjustPosition(this.coords,this.anchor);
this.onResize(a,b)},onShow:function(){this.__registerMapListeners();this.startupDijits(this._title);this.startupDijits(this._content)},onHide:function(){this.__unregisterMapListeners()},onResize:function(){},onAnchorChange:function(){},setMap:function(a){this.inherited(arguments);f.place(this.domNode,a.root)},_adjustContentArea:function(){var a=n.getContentBox(this.domNode),b=j.coords(this._title),c=j.coords(this._content),d=n.getContentBox(this._content);h.set(this._content,{height:a.h-b.h-(c.h-
d.h)+"px"})},_getAnchor:function(a){var b=this.map;return b&&a?(a.y<b.height/2?"lower":"upper")+(a.x<b.width/2?"right":"left"):"upperright"},_adjustPosition:function(a,b){var c=Math.round(a.x),d=Math.round(a.y),e=this._bufferWidth,f=this._bufferHeight,i=j.coords(this.domNode);switch(b){case g.ANCHOR_UPPERLEFT:c-=i.w+e;d-=i.h+f;break;case g.ANCHOR_UPPERRIGHT:c+=e;d-=i.h+f;break;case g.ANCHOR_LOWERRIGHT:c+=e;d+=f;break;case g.ANCHOR_LOWERLEFT:c-=i.w+e,d+=f}h.set(this.domNode,{left:c+"px",top:d+"px"})}});
k.mixin(g,{ANCHOR_UPPERRIGHT:"upperright",ANCHOR_LOWERRIGHT:"lowerright",ANCHOR_LOWERLEFT:"lowerleft",ANCHOR_UPPERLEFT:"upperleft"});return g});