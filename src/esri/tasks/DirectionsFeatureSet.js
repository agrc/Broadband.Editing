//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","esri/kernel","esri/geometry/Extent","esri/geometry/Polyline","esri/tasks/FeatureSet"],function(j,m,e,p,q,n,k,o){return j(o,{declaredClass:"esri.tasks.DirectionsFeatureSet",constructor:function(c,i){this.routeId=c.routeId;this.routeName=c.routeName;m.mixin(this,c.summary);this.extent=new n(this.envelope);var b=this._fromCompressedGeometry,f=this.features,d=this.extent.spatialReference,a=[];e.forEach(i,function(c,g){f[g].setGeometry(a[g]=
b(c,d))});this.strings=c.strings;this.mergedGeometry=this._mergePolylinesToSinglePath(a,d);this.geometryType="esriGeometryPolyline";delete this.envelope},_fromCompressedGeometry:function(c,i){var b=0,f=0,d=[],a,e,g=c.replace(/(\+)|(\-)/g," $&").split(" "),h,j=g.length,l=parseInt(g[1],32);for(h=2;h<j;h+=2)b=a=parseInt(g[h],32)+b,f=e=parseInt(g[h+1],32)+f,d.push([a/l,e/l]);b=new k({paths:[d]});b.setSpatialReference(i);return b},_mergePolylinesToSinglePath:function(c,i){var b=[];e.forEach(c,function(a){e.forEach(a.paths,
function(a){b=b.concat(a)})});var f=[],d=[0,0];e.forEach(b,function(a){if(a[0]!==d[0]||a[1]!==d[1])f.push(a),d=a});return(new k({paths:[f]})).setSpatialReference(i)}})});