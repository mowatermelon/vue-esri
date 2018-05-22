// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,c){Object.defineProperty(c,"__esModule",{value:!0});c.glLayout=function(d,e){void 0===e&&(e=0);var c=d.stride;return d.fieldNames.filter(function(a){a=d.fields.get(a).optional;return!(a&&a.glPadding)}).map(function(a){var b=d.fields.get(a),g=b.constructor.ElementCount;var f=h[b.constructor.ElementType];if(!f)throw Error("BufferType not supported in WebGL");return{name:a,stride:c,count:g,type:f,offset:b.offset,normalized:b.optional&&!!b.optional.glNormalized,
divisor:e}})};var h={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}});