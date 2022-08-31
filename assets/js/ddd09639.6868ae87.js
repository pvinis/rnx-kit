"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[6209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},o="metro-serializer-esbuild",l={unversionedId:"tools/metro-serializer-esbuild",id:"tools/metro-serializer-esbuild",title:"metro-serializer-esbuild",description:"",source:"@site/docs/tools/metro-serializer-esbuild.mdx",sourceDirName:"tools",slug:"/tools/metro-serializer-esbuild",permalink:"/rnx-kit/docs/tools/metro-serializer-esbuild",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/metro-serializer-esbuild.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-resolver-symlinks",permalink:"/rnx-kit/docs/tools/metro-resolver-symlinks"},next:{title:"metro-serializer",permalink:"/rnx-kit/docs/tools/metro-serializer"}},s={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>fabric</code>",id:"fabric",level:3},{value:"<code>minify</code>",id:"minify",level:3},{value:"<code>target</code>",id:"target",level:3},{value:"<code>sourceMapPaths</code>",id:"sourcemappaths",level:3},{value:"<code>analyze</code>",id:"analyze",level:3},{value:"<code>logLevel</code>",id:"loglevel",level:3},{value:"Known Limitations",id:"known-limitations",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metro-serializer-esbuild"},"metro-serializer-esbuild"),(0,r.kt)("p",null,"Allow Metro to use ",(0,r.kt)("a",{parentName:"p",href:"https://esbuild.github.io"},"esbuild")," for bundling and\nserialization."),(0,r.kt)("p",null,"This tool is in Beta, and has been yielding good results so far. See the list of\nknown issues below for more information."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Metro currently does not implement tree shaking, i.e. it does not attempt to\nremove unused code from the JS bundle. For instance, given this code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { partition } from "lodash";\n')),(0,r.kt)("p",null,"Metro will bundle all of ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," in your bundle even though you're only using a\nsmall part of it. In ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash"),"'s case, you can add\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lodash/babel-plugin-lodash#readme"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-lodash"))," to\nyour Babel config to help Metro strip away some modules, but not all libraries\nwill come with such helpers. For more details, see issues\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/issues/227"},"#227")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/issues/632"},"#632"),"."),(0,r.kt)("p",null,"metro-serializer-esbuild addresses this by letting esbuild take over bundling."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This plugin currently depends on some unstable features introduced in Metro\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/metro/releases/tag/v0.66.1"},"0.66.1"),". Breaking\nchanges were introduced in Metro 0.60, so this plugin will not work with React\nNative below 0.64."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"esbuild works best when we pass it ES6 modules. The first thing we must do is to\ndisable import/export transformation by enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"disableImportExportTransform"),"\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},' module.exports = {\n   presets: [\n     [\n       "module:metro-react-native-babel-preset",\n+      { disableImportExportTransform: true },\n     ],\n   ],\n };\n')),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"@rnx-kit/babel-preset-metro-react-native"),", you can instead set\n",(0,r.kt)("inlineCode",{parentName:"p"},"esbuild")," as transform profile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},' module.exports = {\n   presets: [\n     [\n       "@rnx-kit/babel-preset-metro-react-native",\n+      { unstable_transformProfile: "esbuild" },\n     ],\n   ],\n };\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that Hermes currently does not fully implement the\n",(0,r.kt)("a",{parentName:"p",href:"https://kangax.github.io/compat-table/es6/"},"ES6 spec"),". esbuild, on the other\nhand, does not fully support\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evanw/esbuild/issues/297"},"lowering to ES5"),'. This\nessentially means that you may have to add additional plugins if you\'re seeing\nesbuild outputting "target environment is not supported yet" errors during\nbundle. For an example, see the error and its solution in\n',(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/issues/1743"},"#1743"),".")),(0,r.kt)("p",null,"Next, configure Metro to use the esbuild serializer by making the following\nchanges to ",(0,r.kt)("inlineCode",{parentName:"p"},"metro.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const {\n+  MetroSerializer,\n+  esbuildTransformerConfig,\n+} = require("@rnx-kit/metro-serializer-esbuild");\n\n module.exports = makeMetroConfig({\n+  serializer: {\n+    customSerializer: MetroSerializer(),\n+  },\n+  transformer: esbuildTransformerConfig,\n });\n')),(0,r.kt)("p",null,"We can now create a bundle as usual, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"react-native bundle --entry-file index.js --platform ios --dev false ...\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"Similar to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/metro-serializer#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"metro-serializer")),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"metro-serializer-esbuild")," also supports plugins. Additionally, you can\nconfigure the output of the plugin by passing an options object as the second\nparameter. For instance, to output ES6 compliant code, set the target option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},' const myPlugins = [...];\n module.exports = makeMetroConfig({\n   serializer: {\n     customSerializer: MetroSerializer(myPlugins, {\n+      target: "es6"\n     }),\n   },\n   transformer: esbuildTransformerConfig,\n });\n')),(0,r.kt)("p",null,"Below are all the currently supported options."),(0,r.kt)("h3",{id:"fabric"},(0,r.kt)("inlineCode",{parentName:"h3"},"fabric")),(0,r.kt)("p",null,"When enabled, includes Fabric-enabled version of React. You can save some bytes\nby disabling this if you haven't migrated to Fabric yet."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"minify"},(0,r.kt)("inlineCode",{parentName:"h3"},"minify")),(0,r.kt)("p",null,"When enabled, the generated code will be minified instead of pretty-printed."),(0,r.kt)("p",null,"See the full documentation at ",(0,r.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#minify"},"https://esbuild.github.io/api/#minify"),"."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in production environment; ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h3",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h3"},"target")),(0,r.kt)("p",null,"Sets the target environment for the transpiled JavaScript code."),(0,r.kt)("p",null,"See the full documentation at ",(0,r.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#target"},"https://esbuild.github.io/api/#target"),"."),(0,r.kt)("p",null,"Values: Any JS language version string such as ",(0,r.kt)("inlineCode",{parentName:"p"},"es6")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"esnext"),". You can also\nuse environment names. See the full documentation for a list of supported names."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"hermes0.7.0"),"."),(0,r.kt)("h3",{id:"sourcemappaths"},(0,r.kt)("inlineCode",{parentName:"h3"},"sourceMapPaths")),(0,r.kt)("p",null,"Determines whether paths in the output source map are absolute or relative to\nthe directory containing the source map."),(0,r.kt)("p",null,"Values: ",(0,r.kt)("inlineCode",{parentName:"p"},"absolute")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"relative")),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"relative"),"."),(0,r.kt)("h3",{id:"analyze"},(0,r.kt)("inlineCode",{parentName:"h3"},"analyze")),(0,r.kt)("p",null,"Sets whether esbuild should output a report at the end of bundling."),(0,r.kt)("p",null,"See the full documentation at ",(0,r.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#analyze"},"https://esbuild.github.io/api/#analyze"),"."),(0,r.kt)("p",null,"Values: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose")),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"loglevel"},(0,r.kt)("inlineCode",{parentName:"h3"},"logLevel")),(0,r.kt)("p",null,"The log level passed to esbuild."),(0,r.kt)("p",null,"See the full documentation at ",(0,r.kt)("a",{parentName:"p",href:"https://esbuild.github.io/api/#log-level"},"https://esbuild.github.io/api/#log-level")),(0,r.kt)("p",null,"Values: ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"warning")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"silent")),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"warning"),"."),(0,r.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dev server may not work with this serializer. To work around this limitation,\nyou can save the esbuild specific Metro config to a separate file and only\nspecify it when needed, e.g.:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"react-native bundle ... --config metro+esbuild.config.js\n"))),(0,r.kt)("li",{parentName:"ul"},"esbuild does not properly tree-shake ",(0,r.kt)("inlineCode",{parentName:"li"},"export *"),". This is a known limitation\n(see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/1420"},"https://github.com/evanw/esbuild/issues/1420"),"). It is also not recommended\nto use ",(0,r.kt)("inlineCode",{parentName:"li"},"export *")," in your code as they may lead to duplicate exports. For more\ndetails, read ",(0,r.kt)("a",{parentName:"li",href:"https://hackmd.io/Z021hgSGStKlYLwsqNMOcg"},"https://hackmd.io/Z021hgSGStKlYLwsqNMOcg"),". This can be mitigated\nwith an ESLint rule, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"no-export-all")," from\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/eslint-plugin#readme"},(0,r.kt)("inlineCode",{parentName:"a"},"@rnx-kit/eslint-plugin")),".")))}d.isMDXComponent=!0}}]);