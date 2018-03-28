// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","./core/requireUtils","dojo/main","dojo/has"],function(e,f,g,d){(function(){var a=g.config,c=a.has&&void 0!==a.has["config-deferredInstrumentation"],b=a.has&&void 0!==a.has["config-useDeferredInstrumentation"];void 0!==a.useDeferredInstrumentation||c||b||(d.add("config-deferredInstrumentation",!1,!0,!0),d.add("config-useDeferredInstrumentation",!1,!0,!0))})();return{version:"4.6",workerMessages:{request:function(a){return f.when(e,"./request").then(function(c){var b=a.options||{};
b.responseType="array-buffer";return c(a.url,b)}).then(function(a){return{data:{data:a.data,ssl:a.ssl},buffers:[a.data]}})}}}});