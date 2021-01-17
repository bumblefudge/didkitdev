(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||u[b]||i;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/did-core_architecture-8c0f7ea8dea959eff953e1f87a06ab54.png"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(106)),o={id:"glossary",title:"Glossary & References"},c={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary & References",description:"Terminology",source:"@site/docs\\glossary.md",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/spruceid/didkit/docs/glossary.md",version:"current",sidebar:"someSidebar",previous:{title:"Foreign Function Interfaces",permalink:"/docs/ffis"},next:{title:"Overview of Examples",permalink:"/docs/examples"}},s=[{value:"Terminology",id:"terminology",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],d={toc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"terminology"},"Terminology"),Object(i.b)("h4",{id:"did"},Object(i.b)("strong",{parentName:"h4"},"DID")),Object(i.b)("p",null,"Decentralized Identifiers are stable identifiers which are bound to a controlling keypair, which is usually rotatable without changing the identifier. This is achieved by a publication mechanism maintaining information about key material in verifiable data stores (usually distributed ledgers) over time. This information is referred to as a DID Document. The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/"}),"specification")," governing these identifiers is maintained by a dedicated W3C ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(i.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Architecture Diagram",src:n(153).default}),"\nSrc: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/#architecture-overview"}),"DID specification")),Object(i.b)("h4",{id:"did-document"},"DID Document"),Object(i.b)("p",null,'A record returned by a query for a DID, containing information on how to verify information linked in some way to that identifier. The name can be misleading, since in many cases this "document" is entirely ephemeral or contextual and not intended to be a static file or document stored or cached anywhere.  It is sometimes couched in a "Resolution object," which contains metadata about the query and resolution process, although most application developers have no need to worry about these DID mechanics. For a The ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-resolution/"}),"specification")," governing the DID--\x3eDocument resolution process is maintained by a dedicated W3C ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(i.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(i.b)("h4",{id:"did-method"},"DID Method"),Object(i.b)("p",null,"A set of interdependent governance, publication, and discovery mechanisms for DIDs in a given DID namespace, specified by a shared specification. This specification explains how to validate a DID (namespace rules), where to query and what to expect back when resolving a DID, etc. The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://w3c.github.io/did-spec-registries/#did-methods"}),"registry")," of compliant specifications for DID Methods is maintained by a dedicated W3C ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(i.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(i.b)("h4",{id:"didkey"},"DID:Key"),Object(i.b)("p",null,"A special DID Method that generates conformant, offchain DID documents for local, private, and/or ephemeral resolution from a keypair. This can be helpful for integrating conventional PKI or signing infrastructure with DID issuance, or to allow caching or local resolution of DID documents where it is undesirable or impossible to resolve remote DIDs. The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"specification")," for this method was originally created in, and maintained in, the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/"}),"W3C-Credentials Community Group"),"."),Object(i.b)("h2",{id:"further-reading"},"Further Reading"),Object(i.b)("p",null,"Further educational/contextual resources on decentralized identity topics can be found on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://identity.foundation/education/"}),"Education page")," of the Decentralized Identity Foundation."),Object(i.b)("p",null,"For a good introduction to the Semantic Web and JSON-LD as a data format and as a novel approach to web engineering, see these articles by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/mattr-global/learn-concepts-semantic-web-250784d6a49f"}),"Nader Helmy")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/transmute-techtalk/on-json-ld-and-the-semantics-of-identity-42d051d3ce14"}),"Orie Steele"),"."))}p.isMDXComponent=!0}}]);