// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./global","dojo/sniff","./now"],function(b,h,c,a,d){a("ie");b=a("webkit");a("opera");var e=d();a=c.requestAnimationFrame;a||(a=c[(b&&"webkit"||"moz")+"RequestAnimationFrame"])||(a=function(a){var b=d(),f=Math.max(0,16-(b-e)),g=c.setTimeout(function(){a(d())},f);e=b+f;return g});return a});