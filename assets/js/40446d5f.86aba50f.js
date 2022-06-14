"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[497],{5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5003:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(5773),i=t(808),o=(t(7378),t(5318)),a=["components"],c={},s="typescript-service",l={unversionedId:"tools/typescript-service",id:"tools/typescript-service",title:"typescript-service",description:"",source:"@site/docs/tools/typescript-service.mdx",sourceDirName:"tools",slug:"/tools/typescript-service",permalink:"/rnx-kit/docs/tools/typescript-service",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/typescript-service.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"typescript-react-native-resolver",permalink:"/rnx-kit/docs/tools/typescript-react-native-resolver"}},p={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Language Services",id:"language-services",level:2},{value:"Customizing the Language Service",id:"customizing-the-language-service",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript-service"},"typescript-service"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rnx-kit/typescript-service")," gives you access to TypeScript's language\nservices, and lets you customize how module resolution occurs."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The starting point for working with TypeScript is reading configuration from the\ncommand line, or from a\n",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"configuration file"),"\nlike ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,o.kt)("p",null,"Both methods yeild a ",(0,o.kt)("inlineCode",{parentName:"p"},"ParedCommandLine")," object, offering the same level of\ncontrol over how TypeScript behaves."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import ts from "typescript";\n\n// Read configuration from a NodeJS command-line\nconst cmdLine = ts.parseCommandLine(process.argv.slice(2));\n\n// Read configuration from a project file (parsed into a TypeScript command-line object)\nconst configFileName = findConfigFile(searchPath);\nif (!configFileName) {\n  throw new Error(`Failed to find config file under ${searchPath}`);\n}\nconst cmdLine = readConfigFile(configFileName);\nif (!cmdLine) {\n  throw new Error(`Failed to read config file ${configFileName}`);\n}\n\n// For either method, handle errors\nif (cmdLine.errors.length > 0) {\n  ...\n}\n')),(0,o.kt)("h2",{id:"language-services"},"Language Services"),(0,o.kt)("p",null,"TypeScript's language service allows you to work with source code continuously,\nunlike the TypeScript compiler, which makes a single pass through the code. The\nlanguage service tends to load only what is needed to fulfill the current\nrequest, such as getting diagnostics for a particular source file, or re-loading\na changed file being watched. This saves time and memory, when full source\nvalidation isn't needed."),(0,o.kt)("p",null,"The language service is accessible through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Project")," classes.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," manages shared state across all projects, and is meant to be a\nsingleton. ",(0,o.kt)("inlineCode",{parentName:"p"},"Project")," contains a TypeScript configuration, which includes a list\nof source files. TypeScript configuration comes from either the command line or\na file like ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,o.kt)("p",null,"You can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Project")," to validate code, and emit transpiled JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const service = new Service();\nconst project = service.openProject(cmdLine);\n\n// validate\nconst fileHasErrors = project.validateFile(fileName);\nconst projectHasErrors = project.validate();\n\n// emit\nconst fileEmitted = project.emitFile(fileName);\nconst projectEmitted = project.emit();\n")),(0,o.kt)("p",null,"You can also change which files are in a project. This is typically done in\nresponse to an external event, like a callback notifying you that a file has\nbeen added, updated or removed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import ts from "typescript";\n\nfunction onFileEvent(eventType: string, fileName: string, payload?: string) {\n  if (eventType === "add") {\n    project.addFile(fileName);\n  } else if (eventType === "modify") {\n    project.updateFile(\n      fileName,\n      payload && ts.ScriptSnapshot.fromString(payload)\n    );\n  } else if (eventType === "delete") {\n    project.deleteFile(fileName);\n  }\n}\n')),(0,o.kt)("p",null,"When you're finished working with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Project"),", you must ",(0,o.kt)("inlineCode",{parentName:"p"},"dispose")," of it to\nproperly release all internal resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"project.dispose();\n")),(0,o.kt)("h2",{id:"customizing-the-language-service"},"Customizing the Language Service"),(0,o.kt)("p",null,"The language service is initialized using a host interface. You can customize\nthe host interface to change the way TypeScript works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const enhanceLanguageServiceHost = (host: ts.LanguageServiceHost): void => {\n  // change host functions in here\n};\n\nconst service = new Service();\nconst project = service.openProject(cmdLine, enhanceLanguageServiceHost);\n")),(0,o.kt)("p",null,"For example, you can replace the functions which control how modules and type\nreferences are resolved to files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function resolveModuleNames(\n  moduleNames: string[],\n  containingFile: string,\n  reusedNames: string[] | undefined,\n  redirectedReference: ResolvedProjectReference | undefined,\n  options: CompilerOptions\n): (ResolvedModule | undefined)[] {\n  /* ... */\n}\n\nfunction resolveTypeReferenceDirectives(\n  typeDirectiveNames: string[],\n  containingFile: string,\n  redirectedReference: ResolvedProjectReference | undefined,\n  options: CompilerOptions\n): (ResolvedTypeReferenceDirective | undefined)[] {\n  /* ... */\n}\n\nconst enhanceLanguageServiceHost = (host: ts.LanguageServiceHost): void => {\n  host.resolveModuleNames = resolveModuleNames;\n  host.resolveTypeReferenceDirectives = resolveTypeReferenceDirectives;\n};\n")))}f.isMDXComponent=!0}}]);