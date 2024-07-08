"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[447],{72268:function(e,t,a){a.r(t),a.d(t,{getQueryString:function(){return _}});var n=a(88763),o=a(68154),r=a(60480),f=a(80243),i=a(84938),d=a.n(i),s=a(71532),c=a(72505),l=a.n(c),b=a(89745),p=(a(91930),a(91101)),m=a(70542),u=a(69858),h=a(39304),y=a(96083),w=a(58305),g=a(14662);const v=!(!{}.GATSBY_ALGOLIA_APPLICATION_ID||!{}.GATSBY_ALGOLIA_SEARCH_API_KEY),k={}.GATSBY_ALGOLIA_INDEX_ENV_PREFIX;let S=null;v?S=d()({}.GATSBY_ALGOLIA_APPLICATION_ID,{}.GATSBY_ALGOLIA_SEARCH_API_KEY):console.warn("AIO: Algolia config missing.");const A=!(!{}.GATSBY_IMS_SRC||!{}.GATSBY_IMS_CONFIG),I={openAPI:{src:null,block:null,frontMatter:"openAPISpec"},frame:{src:null,block:null,frontMatter:"frameSrc"}},x=e=>{e((e=>!e))},Y=(e,t,n)=>{const o=I[e];o.has=null==t?void 0:t[o.frontMatter],void 0!==o.has&&o.src!==o.has&&(o.src=o.has),o.src&&!o.block&&(n(!0),"openAPI"===e?o.block=(0,f.Ay)((()=>Promise.all([a.e(3),a.e(851),a.e(40),a.e(223),a.e(380)]).then(a.bind(a,51855)))):"frame"===e&&(o.block=(0,f.Ay)((()=>Promise.all([a.e(3),a.e(223),a.e(188)]).then(a.bind(a,51188))))),o.block.load().then((()=>{n(!1)})))},P=(e,t)=>{const a=new URLSearchParams(window.location.search);a.set(e,t),window.history.replaceState({},"",`${window.location.pathname}?${a}`)},_=()=>new URLSearchParams(window.location.search).toString(),L=()=>{const e=function(e,a){return void 0===a&&(a=""),t(e)?"http://localhost:8000":function(e){return e.indexOf("developer-stage")>=0}(e)?`https://developer-stage.adobe.com${a}`:`https://developer.adobe.com${a}`};function t(e){return e.indexOf("localhost")>=0}const a=t(window.location.host)?e(window.location.host):`${e(window.location.host,"/search-frame")}`,n=new URLSearchParams(window.location.search);return n&&n.toString().length>0?`${a}?${n.toString()}`:a};var E={name:"hr37al",styles:"grid-area:main"},G={name:"boasoc",styles:"min-height:100vh;background-color:var(--spectrum-global-color-gray-50)"},O={name:"1wwehzg",styles:"min-height:100vh;background-color:transparent"};t.default=e=>{let{children:t,pageContext:a,location:f}=e;const{0:i,1:d}=(0,n.useState)(null),{0:c,1:_}=(0,n.useState)(!0),{0:C,1:N}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e={}.GATSBY_IMS_SRC,t={}.GATSBY_IMS_CONFIG;e&&t?(async()=>{try{await(a=`${e}`,new Promise(((e,t)=>{const n=document.createElement("script");n.src=a,n.onload=t=>e(t),n.onerror=e=>t(e),n.onabort=e=>t(e),document.head.appendChild(n)})));let n=JSON.parse(t);n.onReady=()=>{d(window.adobeIMS),_(!1)},window.adobeImsFactory.createIMSLib(n),window.adobeIMS.initialize()}catch(n){console.error("AIO: IMS error.")}finally{_(!1)}var a})():(console.warn("AIO: IMS config missing."),_(!1))}),[]);const M=(0,s.GR)("1814815295"),{allMdx:z,allSitePage:R,site:$,allGithub:B,allGithubContributors:T}=M,{siteMetadata:j,pathPrefix:H}=$,{home:F,versions:q,pages:U,subPages:D,docs:V}=j,{0:J,1:W}=(0,n.useState)(!1),{0:K,1:X}=(0,n.useState)(!1),{0:Q,1:Z}=(0,n.useState)(!1),{0:ee,1:te}=(0,n.useState)(!1),{0:ae,1:ne}=(0,n.useState)(!1);(0,n.useEffect)((()=>{new URL(window.location).searchParams.get(b.kj.query)&&W(!0)}),[W]),(0,n.useEffect)((()=>{window.innerWidth>=1280&&(X(!1),ne(!1))}),[f]),(0,n.useEffect)((()=>{window.onpopstate=()=>{const e=new URL(window.location).searchParams;e.get(b.kj.query)?(e.get(b.kj.query),W(!0)):W(!1)}}),[]),f.pathname=(0,b.tU)(decodeURIComponent(f.pathname)),U.forEach((e=>{(0,b.iu)(e),e.menu&&e.menu.forEach((e=>{(0,b.iu)(e)}))})),q&&q.forEach((e=>{(0,b.iu)(e)})),(0,b.iu)(F),(0,b.iu)(V);const oe=e=>{(0,b.iu)(e),e.pages&&e.pages.forEach((e=>{oe(e)}))};D&&D.forEach((e=>{oe(e)}));const re=(0,b.mc)(f.pathname),fe=(0,b._Y)(U),ie=(0,b.Nk)(re,D),de=(0,b.yu)(re,fe,D);de.length>0&&ne(!0);const se=null==a?void 0:a.frontmatter,ce=(0,g.Ay)(),le=(0,g.Ay)(),be="aio-Search-close";if(Y("openAPI",se,Z),Y("frame",se,Z),(0,n.useEffect)((()=>{v&&l().get("https://raw.githubusercontent.com/AdobeDocs/search-indices/main/product-index-map.json").then((e=>{const t=e.data;"string"==typeof t?N(JSON.parse(t)):"[object Array]"==Object.prototype.toString.call(t)&&N(t)})).catch((e=>{console.error(`AIO: Failed fetching search index.\n${e}`)})),window.innerWidth<=1280&&ne(!0),window.addEventListener("resize",(()=>{window.innerWidth<=1280&&ne(!0)}))}),[]),"/search-frame"===H)return(0,r.Y)(n.default.Fragment,null,(0,r.Y)(o.m,null,(0,r.Y)("noscript",null,`\n          <style>\n            #${ce} {\n              grid-template-columns: 0 auto;\n            }\n            \n            #${le} {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        `)),(0,r.Y)(r.mL,{styles:(0,r.AH)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:transparent;",J&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,r.Y)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:O},v&&C&&(0,r.Y)(m.v,{algolia:S,indexAll:C,indexPrefix:k||"",showSearch:!0,setShowSearch:W,searchButtonId:be,isIFramed:!0})));let pe="";const me=function(e,t){void 0===e&&(e=0);const a=document.getElementById("searchIframe");if(a.contentWindow.postMessage(JSON.stringify({localPathName:window.location.pathname}),"*"),"/"!==window.location.pathname&&pe!==window.location.pathname){if(e>30)return void console.warn("Loading Search iFrame timed out");window.setTimeout((()=>{me(a,e+1,t)}),100)}if(!t){new URL(window.location).searchParams.get(b.kj.query)&&W(!0)}t=!0},ue=()=>{const e=document.getElementById("searchIframe");let t;try{if(t=e.contentDocument,"complete"===t.readyState)return void(e.onload=()=>{me()})}catch(a){window.setTimeout(ue,100)}},he=e=>{try{const t="string"==typeof e.data?JSON.parse(e.data):e.data;t.query?(P(b.kj.query,t.query),P(b.kj.keywords,t.keywords),P(b.kj.index,t.index)):t.received&&(pe=t.received)}catch(t){console.error(t)}};return(0,n.useEffect)((()=>{window.addEventListener("message",he),v&&te(!0)}),[]),(0,n.useEffect)((()=>{ue()}),[ee]),(0,r.Y)(n.default.Fragment,null,(0,r.Y)(o.m,null,(0,r.Y)("noscript",null,`\n          <style>\n            #${ce} {\n              grid-template-columns: 0 auto;\n            }\n            \n            #${le} {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        `)),(0,r.Y)(r.mL,{styles:(0,r.AH)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;",J&&"overflow: hidden;"," ",K&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,r.Y)(p.Kq,{value:{ims:i,isLoadingIms:c,location:f,pageContext:a,hasSideNav:ae,siteMetadata:j,pathPrefix:H,allSitePage:R,allMdx:z,allGithub:B,allGithubContributors:T}},(0,r.Y)(y.k,{title:null==se?void 0:se.title,description:null==se?void 0:se.description,keywords:null==se?void 0:se.keywords}),(0,r.Y)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:G},(0,r.Y)(n.default.Fragment,null,(0,r.Y)("div",{id:ce,css:(0,r.AH)("display:grid;grid-template-areas:'header header' 'sidenav main';grid-template-rows:var(--spectrum-global-dimension-size-800);grid-template-columns:",ae?`${b.CS} auto`:"0 auto",";@media screen and (max-width: ",b.fy,"){grid-template-columns:0 auto;}@media screen and (max-width: ",b.Vh,"){grid-template-rows:20px;}")},(0,r.Y)("div",{css:(0,r.AH)("grid-area:header;position:fixed;height:var(--spectrum-global-dimension-size-800);left:0;right:0;background-color:var(--spectrum-global-color-gray-50);z-index:2;@media screen and (max-width: ",b.Vh,"){height:var(--spectrum-global-dimension-size-600);}")},(0,r.Y)(h.Z,{hasIMS:A,ims:i,isLoadingIms:c,home:F,versions:q,pages:U,docs:V,location:f,hasSideNav:ae,toggleSideNav:()=>{x(X)},hasSearch:v&&null!==C,showSearch:J,setShowSearch:W,searchButtonId:be})),v&&ee&&(0,r.Y)("iframe",{id:"searchIframe",src:L(),tabIndex:"0",css:(0,r.AH)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0px;right:0px;bottom:0px;background-color:transparent;z-index:10;width:100%;height:100%;display:",J?"block":"none",";@media screen and (max-width: ",b.Vh,"){top:var(--spectrum-global-dimension-size-600);}")}),(0,r.Y)("div",{id:le,hidden:!ae,css:(0,r.AH)("grid-area:sidenav;position:fixed;z-index:1;width:",b.CS,";height:100%;background-color:var(--spectrum-global-color-gray-75);@media screen and (max-width: ",b.fy,"){transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(",K?"0":"-100%",");}@media screen and (max-width: ",b.Vh,"){width:95%;}")},(0,r.Y)(u.f,{mainNavPages:U,versions:q,location:f,selectedPages:ie,selectedSubPages:de,setShowSideNav:X})),(0,r.Y)("div",{css:E},(0,r.Y)("main",{hidden:!I.openAPI.has},I.openAPI.src&&I.openAPI.block&&(0,n.createElement)(I.openAPI.block,{src:I.openAPI.src})),(0,r.Y)("main",{hidden:!I.frame.has},I.frame.src&&I.frame.block&&(0,n.createElement)(I.frame.block,{src:I.frame.src,height:null==se?void 0:se.frameHeight,location:f})),!I.openAPI.has&&!I.frame.has&&t)),(0,r.Y)("div",{css:(0,r.AH)("position:fixed;top:0;left:0;right:0;bottom:0;display:",Q?"grid":"none",";place-items:center center;")},(0,r.Y)(w.a,{size:"L"})),ae&&(0,r.Y)("div",{role:"presentation",css:(0,r.AH)("display:none;@media screen and (max-width: ",b.fy,"){display:block;transition:opacity 160ms ease-in;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;opacity:0;position:fixed;top:0;left:0;height:100%;width:100%;",K&&"\n                    pointer-events: auto;\n                    opacity: 1;\n                  ",";}"),onClick:()=>{x(X)}})))))}}}]);
//# sourceMappingURL=ff106bf9-368f6a15ca27852dd09b.js.map