//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","esri/kernel","esri/lang","esri/SpatialReference","esri/geometry/Point","esri/layers/LOD"],function(e,f,c,j,k,g,d,h,i){return e(null,{declaredClass:"esri.layers.TileInfo",constructor:function(a){var l;f.mixin(this,a);this.width=this.cols;this.height=this.rows;var a=this.spatialReference,b=this.origin;if(a)l=this.spatialReference=new d(a.toJson?a.toJson():a),a=l;if(b)this.origin=new h(b.toJson?b.toJson():b),!b.spatialReference&&
a&&this.origin.setSpatialReference(new d(a.toJson()));this.lods=c.map(this.lods,function(a){return new i(a)})},toJson:function(){return g.fixJson({rows:this.rows,cols:this.cols,dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin&&this.origin.toJson(),spatialReference:this.spatialReference&&this.spatialReference.toJson(),lods:this.lods&&c.map(this.lods,function(a){return a.toJson()})})}})});