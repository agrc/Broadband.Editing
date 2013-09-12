//>>built
define(["require","dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_Widget","dijit/_Templated","esri/kernel","esri/dijit/_EventedWidget","dojo/i18n!esri/nls/jsapi","dojo/NodeList-dom"],function(q,r,o,n,l,i,z,A,s,g,f,t,p,u,v,B,w,x){var y=0;return r([w,u,v],{declaredClass:"esri.dijit._PopupRenderer",constructor:function(){this._nls=n.mixin({},x.widgets.popup)},templateString:"<div class='esriViewPopup'><div class='mainSection'><div class='header' dojoAttachPoint='_title'></div><div class='hzLine'></div><div dojoAttachPoint='_description'></div><div class='break'></div></div><div class='attachmentsSection hidden'><div>${_nls.NLS_attach}:</div><ul dojoAttachPoint='_attachmentsList'></ul><div class='break'></div></div><div class='mediaSection hidden'><div class='header' dojoAttachPoint='_mediaTitle'></div><div class='hzLine'></div><div class='caption' dojoAttachPoint='_mediaCaption'></div><div class='gallery' dojoAttachPoint='_gallery'><div class='mediaHandle prev' dojoAttachPoint='_prevMedia' dojoAttachEvent='onclick: _goToPrevMedia'></div><div class='mediaHandle next' dojoAttachPoint='_nextMedia' dojoAttachEvent='onclick: _goToNextMedia'></div><ul class='summary'><li class='image mediaCount hidden' dojoAttachPoint='_imageCount'>0</li><li class='image mediaIcon hidden'></li><li class='chart mediaCount hidden' dojoAttachPoint='_chartCount'>0</li><li class='chart mediaIcon hidden'></li></ul><div class='frame' dojoAttachPoint='_mediaFrame'></div></div></div><div class='editSummarySection hidden' dojoAttachPoint='_editSummarySection'><div class='break'></div><div class='break hidden' dojoAttachPoint='_mediaBreak'></div><div class='editSummary' dojoAttachPoint='_editSummary'></div></div></div>",
showTitle:!0,startup:function(){var C;this.inherited(arguments);var b=this.template,c=this.graphic,a=b.getComponents(c),e=this.showTitle?a.title:"",d=a.description,h=a.fields,j=a.mediaInfos,k=this.domNode,m=this._nls;this._prevMedia.title=m.NLS_prevMedia;this._nextMedia.title=m.NLS_nextMedia;g.set(this._title,"innerHTML",e);e||f.add(this._title,"hidden");!d&&h&&(d="",l.forEach(h,function(a){d+="<tr valign='top'>";d+="<td class='attrName'>"+a[0]+"</td>";d+="<td class='attrValue'>"+a[1].replace(/^\s*(https?:\/\/[^\s]+)\s*$/i,
"<a target='_blank' href='$1' title='$1'>"+m.NLS_moreInfo+"</a>")+"</td>";d+="</tr>"}),d&&(d="<table class='attrTable' cellpadding='0px' cellspacing='0px'>"+d+"</table>"));g.set(this._description,"innerHTML",d);d||f.add(this._description,"hidden");i.query("a",this._description).forEach(function(a){g.set(a,"target","_blank")});e&&d?i.query(".mainSection .hzLine",k).removeClass("hidden"):e||d?i.query(".mainSection .hzLine",k).addClass("hidden"):i.query(".mainSection",k).addClass("hidden");if(C=this._dfd=
b.getAttachments(c),b=C)b.addBoth(n.hitch(this,this._attListHandler,b)),g.set(this._attachmentsList,"innerHTML","<li>"+m.NLS_searching+"...</li>"),i.query(".attachmentsSection",k).removeClass("hidden");if(j&&j.length)i.query(".mediaSection",k).removeClass("hidden"),s.setSelectable(this._mediaFrame,!1),this._mediaInfos=j,this._mediaPtr=0,this._updateUI(),this._displayMedia();a.editSummary&&(g.set(this._editSummary,"innerHTML",a.editSummary),j&&j.length&&f.remove(this._mediaBreak,"hidden"),f.remove(this._editSummarySection,
"hidden"))},destroy:function(){this._dfd&&this._dfd.cancel();this._destroyFrame();this.template=this.graphic=this._nls=this._mediaInfos=this._mediaPtr=this._dfd=null;this.inherited(arguments)},_goToPrevMedia:function(){0>this._mediaPtr-1||(this._mediaPtr--,this._updateUI(),this._displayMedia())},_goToNextMedia:function(){this._mediaPtr+1!==this._mediaInfos.length&&(this._mediaPtr++,this._updateUI(),this._displayMedia())},_updateUI:function(){var b=this._mediaInfos,c=b.length,a=this.domNode,e=this._prevMedia,
d=this._nextMedia;if(1<c){var h=0,j=0;l.forEach(b,function(a){"image"===a.type?h++:-1!==a.type.indexOf("chart")&&j++});h&&(g.set(this._imageCount,"innerHTML",h),i.query(".summary .image",a).removeClass("hidden"));j&&(g.set(this._chartCount,"innerHTML",j),i.query(".summary .chart",a).removeClass("hidden"))}else i.query(".summary",a).addClass("hidden"),f.add(e,"hidden"),f.add(d,"hidden");b=this._mediaPtr;0===b?f.add(e,"hidden"):f.remove(e,"hidden");b===c-1?f.add(d,"hidden"):f.remove(d,"hidden");this._destroyFrame()},
_displayMedia:function(){var b=this._mediaInfos[this._mediaPtr],c=b.title,a=b.caption,e=i.query(".mediaSection .hzLine",this.domNode)[0];g.set(this._mediaTitle,"innerHTML",c);f[c?"remove":"add"](this._mediaTitle,"hidden");g.set(this._mediaCaption,"innerHTML",a);f[a?"remove":"add"](this._mediaCaption,"hidden");f[c&&a?"remove":"add"](e,"hidden");this._rid=null;if("image"===b.type)this._showImage(b.value);else{var d=this,c=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"],a=b.value.theme||
this.chartTheme||"esri/dijit/Rainbow";n.isString(a)&&(a=a.replace(/\./gi,"/"),-1===a.indexOf("/")&&(a="dojox/charting/themes/"+a),c.push(a));try{var h=this._rid=y++;q(c,function(a,c,e){if(h===d._rid)d._rid=null,d._showChart(b.type,b.value,a,c,e)})}catch(j){console.log("PopupRenderer: error loading modules")}}},_showImage:function(b){f.add(this._mediaFrame,"image");var c=p.get(this._gallery,"height"),a="<img class='esriPopupMediaImage' src='"+b.sourceURL+"' />";b.linkURL&&(a="<a target='_blank' href='"+
b.linkURL+"'>"+a+"</a>");g.set(this._mediaFrame,"innerHTML",a);var e=i.query(".esriPopupMediaImage",this._mediaFrame)[0],d=this,h;h=o.connect(e,"onload",function(){o.disconnect(h);h=null;d._imageLoaded(e,c)})},_showChart:function(b,c,a,e,d){f.remove(this._mediaFrame,"image");a=this._chart=new a(t.create("div",{"class":"chart"},this._mediaFrame),{margins:{l:4,t:4,r:4,b:4}});d&&a.setTheme(d);switch(b){case "piechart":a.addPlot("default",{type:"Pie",labels:!1});a.addSeries("Series A",c.fields);break;
case "linechart":a.addPlot("default",{type:"Markers"});a.addAxis("x",{min:0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});l.forEach(c.fields,function(a,b){a.x=b+1});a.addSeries("Series A",c.fields);break;case "columnchart":a.addPlot("default",{type:"Columns",gap:3});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});a.addSeries("Series A",c.fields);break;case "barchart":a.addPlot("default",{type:"Bars",gap:3}),a.addAxis("x",
{includeZero:!0,fixUpper:"minor",minorLabels:!1}),a.addAxis("y",{vertical:!0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1}),a.addSeries("Series A",c.fields)}this._action=new e(a);a.render()},_destroyFrame:function(){this._rid=null;if(this._chart)this._chart.destroy(),this._chart=null;if(this._action)this._action.destroy(),this._action=null;g.set(this._mediaFrame,"innerHTML","")},_imageLoaded:function(b,c){var a=b.height;a<c&&(a=Math.round((c-a)/2),p.set(b,"marginTop",a+"px"))},_attListHandler:function(b,
c){if(b===this._dfd){this._dfd=null;var a="";!(c instanceof Error)&&c&&c.length&&l.forEach(c,function(b){a+="<li>";a+="<a href='"+b.url+"' target='_blank'>"+(b.name||"[No name]")+"</a>";a+="</li>"});g.set(this._attachmentsList,"innerHTML",a||"<li>"+this._nls.NLS_noAttach+"</li>")}}})});