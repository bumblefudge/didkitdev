(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(106)),c={id:"install",title:"Installation"},o={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"Container",source:"@site/docs\\install.md",slug:"/install",permalink:"/devsite/docs/install",editUrl:"https://github.com/spruceid/didkit/docs/install.md",version:"current",sidebar:"someSidebar",previous:{title:"Core Concepts",permalink:"/devsite/docs/concepts"},next:{title:"CLI Commands",permalink:"/devsite/docs/cli_commands"}},l=[{value:"Container",id:"container",children:[]},{value:"Manual",id:"manual",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"container"},"Container"),Object(i.b)("p",null,"Both the CLI and HTTP server are containerised and available under\n",Object(i.b)("inlineCode",{parentName:"p"},"ghcr.io/spruceid/didkit-(cli|http)"),"."),Object(i.b)("p",null,"The image are private for now, so a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"}),"Personal Access Token"),"\nis required. Once created you can login like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker login ghcr.io -u USERNAME --password-stdin\n")),Object(i.b)("p",null,"You can use the images like CLIs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run ghcr.io/spruceid/didkit-cli:latest --help\n$ docker run --init -p 8080 ghcr.io/spruceid/didkit-http:latest --port 8080\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can pass JWKs either by sharing a volume with ",Object(i.b)("inlineCode",{parentName:"p"},"docker run --volume"),", or by passing the JWK directly with ",Object(i.b)("inlineCode",{parentName:"p"},"docker run -e JWK=$MY_JWK")," or ",Object(i.b)("inlineCode",{parentName:"p"},"docker run didkit-http --jwk $MY_JWK"),".")),Object(i.b)("h4",{id:"build-images"},"Build Images"),Object(i.b)("p",null,"The Dockerfiles rely on having ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/spruceid/ssi"}),"ssi")," in the root of ",Object(i.b)("inlineCode",{parentName:"p"},"didkit")," (a symbolic link will not work, unfortunately)."),Object(i.b)("p",null,"Then the images can be built with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker build -f Dockerfile-cli . -t didkit-cli\n$ docker build -f Dockerfile-http . -t didkit-http\n")),Object(i.b)("p",null,"And to use them, replace ",Object(i.b)("inlineCode",{parentName:"p"},"ghcr.io/spruceid/didkit-(cli|http):latest")," with ",Object(i.b)("inlineCode",{parentName:"p"},"didkit-(cli|http)"),"."),Object(i.b)("h3",{id:"manual"},"Manual"),Object(i.b)("p",null,"DIDKit is written in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust"),". To get Rust, you can use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://rustup.rs/"}),"Rustup"),"."),Object(i.b)("p",null,"We depend on some Rust nightly features. When installing with Rustup, pick the nightly release channel. Or run ",Object(i.b)("inlineCode",{parentName:"p"},"rustup default nightly")," to switch to it.\n(",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://doc.rust-lang.org/nightly/edition-guide/rust-2018/rustup-for-managing-rust-versions.html"}),"More info"),")"),Object(i.b)("p",null,"Spruce's ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/spruceid/ssi"}),"ssi")," library must be cloned alongside the ",Object(i.b)("inlineCode",{parentName:"p"},"didkit")," repository:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ git clone https://github.com/spruceid/ssi ../ssi\n")),Object(i.b)("p",null,"Build DIDKit using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://doc.rust-lang.org/cargo/"}),"Cargo"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ cargo build\n")),Object(i.b)("p",null,"That will give you the DIDKit CLI and HTTP server executables located at\n",Object(i.b)("inlineCode",{parentName:"p"},"target/debug/didkit")," and ",Object(i.b)("inlineCode",{parentName:"p"},"target/debug/didkit-http"),", respectively. You can also build and install DIDKit's components separately. Building the FFI libraries will require additional dependencies. See the corresponding readmes linked below for more info."))}p.isMDXComponent=!0}}]);