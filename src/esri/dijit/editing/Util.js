//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/has","esri/kernel"],function(g,c){var e={};return e={findFeatures:function(d,a,b){var f=a.objectIdField,a=c.filter(a.graphics,function(a){return c.some(d,function(b){return a.attributes[f]===b.objectId})});if(b)b(a);else return a},getSelection:function(d){var a=[];c.forEach(d,function(b){b=b.getSelectedFeatures();c.forEach(b,function(b){a.push(b)})});return a}}});