//>>built
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/io-query","esri/kernel","esri/urlUtils","esri/SpatialReference","esri/layers/TiledMapServiceLayer","esri/layers/ArcGISMapServiceLayer","esri/layers/TileInfo","esri/layers/TimeInfo"],function(j,k,d,l,m,s,g,t,h,n,o,p,q,r){return k([o,p],{declaredClass:"esri.layers.ArcGISTiledMapServiceLayer",_agolAttrs:["World_Topo_Map","World_Street_Map","Ocean_Basemap"],constructor:function(a,b){if(b){if(b.roundrobin)j.deprecated(this.declaredClass+
" : Constructor option 'roundrobin' deprecated. Use option 'tileServers'."),b.tileServers=b.roundrobin;this._setTileServers(b.tileServers);this._loadCallback=b.loadCallback}this._params=d.mixin({},this._url.query);this._initLayer=d.hitch(this,this._initLayer);var c=b&&b.resourceInfo;c?this._initLayer(c):(this._load=d.hitch(this,this._load),this._load())},_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_setTileServers:function(a){if(a&&0<a.length){this.tileServers=
a;var b,c=a.length;for(b=0;b<c;b++)a[b]=h.urlToObject(a[b]).path}},_initLayer:function(a,b){this.inherited(arguments);this.resourceInfo=m.toJson(a);this.tileInfo=new q(a.tileInfo);if(!this.spatialReference&&this.tileInfo.spatialReference)this.spatialReference=new n(this.tileInfo.spatialReference.toJson());this.isPNG32="PNG24"===this.tileInfo.format||"PNG32"===this.tileInfo.format;if(a.timeInfo)this.timeInfo=new r(a.timeInfo);var c=this._url.path,i=this._loadCallback,e="file:"===window.location.protocol?
"http:":window.location.protocol,f=c.match(/^https?\:\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+)\/mapserver/i),f=f&&f[2];if(!this.tileServers)if(a.tileServers)this._setTileServers(a.tileServers);else{var d=-1!==c.search(/^https?\:\/\/server\.arcgisonline\.com/i),g=-1!==c.search(/^https?\:\/\/services\.arcgisonline\.com/i);if(d||g)this._setTileServers([c,c.replace(d?/server\.arcgisonline/i:/services\.arcgisonline/i,d?"services.arcgisonline":"server.arcgisonline")])}if(f&&
-1!==l.indexOf(this._agolAttrs,f))this.hasAttributionData=!0,this.attributionDataUrl=this.attributionDataUrl||e+"//static.arcgis.com/attribution/"+f;this.loaded=!0;this.onLoad(this);i&&(delete this._loadCallback,i(this))},getTileUrl:function(a,b,c){var d=this.tileServers,e=this._url.query,a=(d?d[b%d.length]:this._url.path)+"/tile/"+a+"/"+b+"/"+c;this._resampling&&(a+="?blankTile=false");e&&(a=this._resampling?a+("&"+g.objectToQuery(e)):a+("?"+g.objectToQuery(e)));if((b=this._getToken())&&(!e||!e.token))a+=
(-1===a.indexOf("?")?"?":"&")+"token="+b;return h.addProxy(a)}})});