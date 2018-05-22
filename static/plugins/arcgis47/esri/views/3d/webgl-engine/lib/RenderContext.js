// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","./RenderPass","./RenderSlot"],function(d,e,a,c){return function(){function b(){this.normals=this.lightingData=this.highlight=this.depth=this.camera=null;this.pass=a.MATERIAL;this.shadowMap=null;this.slot=c.BACKGROUND;this.options=this.rctx=this.framebufferTex=this.stencilRenderingHelper=this.offscreenRenderingHelper=this.ssaoHelper=null;this.renderOccludedOnly=!1}Object.defineProperty(b.prototype,"isHighlightPass",{get:function(){return this.pass===a.MATERIAL_HIGHLIGHT},
enumerable:!0,configurable:!0});return b}()});