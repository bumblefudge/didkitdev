(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(a),p=r,O=s["".concat(l,".").concat(p)]||s[p]||u[p]||i;return a?n.a.createElement(O,d(d({ref:t},c),{},{components:a})):n.a.createElement(O,d({ref:t},c))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var c=2;c<i;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(106)),l={id:"ffis",title:"Foreign Function Interfaces"},d={unversionedId:"ffis",id:"ffis",isDocsHomePage:!1,title:"Foreign Function Interfaces",description:"DIDKit has bindings for various languages and environments. Each corresponding directory contains a README with additional info particular to it. The Makefile used to build all the libraries requires GNU Make.",source:"@site/docs\\ffis.md",slug:"/ffis",permalink:"/docs/ffis",editUrl:"https://github.com/spruceid/didkit/docs/ffis.md",version:"current",sidebar:"someSidebar",previous:{title:"HTTP Syntax",permalink:"/docs/http_syntax"},next:{title:"Glossary & References",permalink:"/docs/glossary"}},o=[{value:"C",id:"c",children:[{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[]},{value:"+ Android",id:"-android",children:[]}]},{value:"Java",id:"java",children:[{value:"Build",id:"build-1",children:[]},{value:"Test",id:"test-1",children:[]},{value:"+ Android",id:"-android-1",children:[]}]},{value:"Android",id:"android",children:[{value:"Requires",id:"requires",children:[]},{value:"Build",id:"build-2",children:[]}]},{value:"Flutter",id:"flutter",children:[]},{value:"Usage",id:"usage",children:[]}],c={toc:o};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"DIDKit has bindings for various languages and environments. Each corresponding directory contains a README with additional info particular to it. The Makefile used to build all the libraries requires ","[GNU Make][https://www.gnu.org/software/make/]","."),Object(i.b)("p",null,"Building and testing each library requires tools for the corresponding environment:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C: C compiler and linker"),Object(i.b)("li",{parentName:"ul"},"Java: JDK and JRE"),Object(i.b)("li",{parentName:"ul"},"Android: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.android.com/ndk/"}),"Android NDK"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.android.com/studio/"}),"SDK tools"),", and Rust Android targets"),Object(i.b)("li",{parentName:"ul"},"Flutter: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/flutter/flutter"}),"Flutter"),"\nBuild")),Object(i.b)("p",null,"To build all the libraries, run ",Object(i.b)("inlineCode",{parentName:"p"},"make")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"/lib/")," directory of the DIDKit repo."),Object(i.b)("p",null,"To build and test a particular library, see the instructions below."),Object(i.b)("h2",{id:"c"},"C"),Object(i.b)("h3",{id:"build"},"Build"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ make -C ../ ../target/release/libdidkit.so\n")),Object(i.b)("h3",{id:"test"},"Test"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ make -C ../ ../target/test/c.stamp\n")),Object(i.b)("h3",{id:"-android"},"+ Android"),Object(i.b)("p",null,"To build the C shared library for Android targets, build the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#android"}),"DIDKit Android library"),"."),Object(i.b)("h2",{id:"java"},"Java"),Object(i.b)("p",null,"Java bindings for DIDKit, using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Java_Native_Interface"}),"JNI"),". The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JAR_(file_format)"}),"JAR")," file includes Java class files. To use this in an application, you must also include the shared library (",Object(i.b)("inlineCode",{parentName:"p"},"libdidkit.so"),") in your application in your Java Library Path."),Object(i.b)("h3",{id:"build-1"},"Build"),Object(i.b)("p",null,"Run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ make -C ../ ../target/didkit.jar\n")),Object(i.b)("p",null,"To build the shared library for your current platform/architecture:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ make -C ../ ../target/release/libdidkit.so\n")),Object(i.b)("h3",{id:"test-1"},"Test"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ make -C ../ ../target/tests/java.stamp\n")),Object(i.b)("h3",{id:"-android-1"},"+ Android"),Object(i.b)("p",null,"For Android, build the separate ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#android"}),"Android library (AAR file)")," which includes the Java class files and shared libraries for all Android targets."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/studio/projects/android-library.html#aar-contents"}),"Android Library (AAR file)")," for DIDKit. The AAR file includes Java class files using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Java_Native_Interface"}),"JNI"),", and binary shared libraries for Android's supported architectures (x86, armeabi-v7a, arm64-v8a, x86","_","64). The AAR can be added to existing Android projects using Android Studio or Gradle."),Object(i.b)("h3",{id:"requires"},"Requires"),Object(i.b)("p",null,"Android SDK and NDK for Linux x86","_","64. The Android SDK is expected to be installed at ",Object(i.b)("inlineCode",{parentName:"p"},"~/Android/Sdk"),". If it is somewhere else instead, you can specify it with a Make variable, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"make ANDROID_SDK_ROOT=/other/location/android-sdk")),Object(i.b)("p",null,"Rust Android targets are also required. To install those with ",Object(i.b)("inlineCode",{parentName:"p"},"rustup"),", run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ make -C ../ install-rustup-android\n")),Object(i.b)("h3",{id:"build-2"},"Build"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ make -C ../ ../target/test/aar.stamp\n")),Object(i.b)("h4",{id:"make-variables"},"Make variables"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_SDK_ROOT")," - path to Android SDK. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"~/Android/Sdk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_TOOLS")," - Android tools directory. Default is to pick one matching ",Object(i.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/build-tools/*"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_NDK_HOME")," - Android NDK directory. Default is ",Object(i.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk-bundle)")," if exists, or one matching ",Object(i.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk/*"),".")),Object(i.b)("h2",{id:"flutter"},"Flutter"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://flutter.dev/developing-packages/"}),"Flutter plugin")," for the DIDKit library. Includes Dart bindings, and functionality for Android and iOS (WIP)."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"You can depend on this plugin as a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://dart.dev/tools/pub/dependencies#path-packages"}),"path dependency"),"."),Object(i.b)("p",null,"You will also need to build the DIDKit library for your target platforms.\nTo do that for Android, trigger building the AAR file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"make -C ../ ../target/didkit.aar\n")))}b.isMDXComponent=!0}}]);