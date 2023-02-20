"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[920],{6734:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(8404),a=n(8799);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}},3064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(8404),a=n(8799),l=n(8070),s=n(2757),c=n(4217),o=n(1750),u=n(6734),m=n(4218),h=n(8934);const i=function(){const e=(0,m.k6)(),t=(0,m.TH)(),{siteConfig:{baseUrl:n}}=(0,a.Z)(),r=h.Z.canUseDOM?new URLSearchParams(t.search):null,l=r?.get("q")||"",s=r?.get("ctx")||"",c=r?.get("version")||"",o=e=>{const n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const n=o(t);e.replace({search:n.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${n}search?${t.toString()}`}}};var p=n(8454),g=n(44),d=n(8938),f=n(2943),E=n(5946),y=n(3273),S=n(9761),w=n(4067);const P="searchQueryInput_nlui",b="searchResultItem_mpoB",v="searchResultItemPath_KY8r",I="searchResultItemSummary_u5uN";function R(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:n,searchContext:l,searchVersion:c,updateSearchPath:m}=i(),[h,d]=(0,r.useState)(n),[f,E]=(0,r.useState)(),[S,w]=(0,r.useState)(),b=`${e}${c}`,v=(0,r.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,r.useEffect)((()=>{m(h),f&&(h?f(h,(e=>{w(e)})):w(void 0))}),[h,f]);const I=(0,r.useCallback)((e=>{d(e.target.value)}),[]);return(0,r.useEffect)((()=>{n&&n!==h&&d(n)}),[n]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(b,l);E((()=>(0,g.v)(e,t,100)))}()}),[l,b]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,v)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,v),r.createElement("input",{type:"search",name:"q",className:P,"aria-label":"Search",onChange:I,value:h,autoComplete:"off",autoFocus:!0}),!f&&h&&r.createElement("div",null,r.createElement(y.Z,null)),S&&(S.length>0?r.createElement("p",null,t(S.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,S&&S.map((e=>r.createElement($,{key:e.document.i,searchResult:e}))))))}function $(e){let{searchResult:{document:t,type:n,page:a,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:a.b).slice(),h=u?t.s:t.t;o||m.push(a.t);let i="";if(w.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:b},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,d.C)(h,l):(0,f.o)(h,(0,E.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:v},(0,S.e)(m)),u&&r.createElement("p",{className:I,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,E.m)(s,"t"),l,100)}}))}const x=function(){return r.createElement(l.Z,null,r.createElement(R,null))}}}]);