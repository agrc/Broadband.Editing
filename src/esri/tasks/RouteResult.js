//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","esri/kernel","esri/graphic","esri/tasks/DirectionsFeatureSet"],function(c,j,d,k,l,e,i){return c(null,{declaredClass:"esri.tasks.RouteResult",constructor:function(a){var f=a.spatialReference,b=a.route;if(a.directions){var g=[],h=[];d.forEach(a.directions.features,function(a,b){h[b]=a.compressedGeometry;g[b]=a.strings});a.directions.strings=g;this.directions=new i(a.directions,h)}this.routeName=a.routeName;if(b){if(b.geometry)b.geometry.spatialReference=
f;this.route=new e(b)}if(a.stops){var c=this.stops=[];d.forEach(a.stops,function(a){if(a.geometry)a.geometry.spatialReference=f;c[a.attributes.Sequence-1]=new e(a)})}},routeName:null,directions:null,route:null,stops:null})});