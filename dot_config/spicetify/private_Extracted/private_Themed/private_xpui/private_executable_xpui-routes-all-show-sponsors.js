"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6923],{25361:(t,e,o)=>{o.d(e,{F:()=>a,m:()=>c});var s=o(59496),n=o(17657),r=o(94836);const a=420;function c({episodeBase62Id:t,getEpisodeSponsors:e,fetchedEpisodeSponsorsData:c=[],version:i}){const[u,d]=(0,s.useState)(c),l=(0,s.useCallback)((async()=>{try{if(!t)throw new Error("episodeBase62Id is required to fetch episode sponsors");const s=e??(await Promise.resolve().then(o.bind(o,16743))).getEpisodeSponsors;d(await s(t,{version:i}))}catch(t){d([])}}),[t,e,i]),f=(0,n.y1)(l,a);(0,s.useEffect)((function(){c.length||f()}),[f,c.length]);const h=(0,s.useCallback)((()=>({effectCallback:f})),[f]);return(0,r.H)(h),{fetchedEpisodeSponsorsData:u}}},57105:(t,e,o)=>{o.r(e),o.d(e,{AllShowSponsors:()=>f,default:()=>h});var s=o(59496),n=o(92053),r=o(58767),a=o(73063),c=o(86433),i=o(19901),u=o(54202),d=o(4637);const l=(0,s.lazy)((()=>Promise.all([o.e(1814),o.e(305)]).then(o.bind(o,40305))));function f(t){const{showId:e=""}=(0,n.UO)(),o=(0,s.useMemo)((()=>(0,r.xt)(e).toURI()),[e]),{location:{state:{showSponsorsData:f}={}}}=(0,i.P)(),{showSponsorsData:h}=(0,u.O)({showId:e,showSponsorsData:f});return h?.length?(0,d.jsx)(l,{uri:o,showId:e,showSponsorsData:h,...t}):(0,d.jsx)(a.InstrumentedRedirect,{to:(0,c.mH)(e)})}const h=f},54202:(t,e,o)=>{o.d(e,{O:()=>c});var s=o(59496),n=o(17657),r=o(25361),a=o(94836);function c({showId:t,showSponsorsData:e=[],getShowSponsors:c}){const[i,u]=(0,s.useState)(e),d=(0,s.useCallback)((async e=>{const s=(...t)=>{e.mounted&&u(...t)};try{if(!t)throw new Error("showId is required to fetch show sponsors");const e=c??(await Promise.resolve().then(o.bind(o,32264))).getShowSponsors;s(await e(t))}catch(t){s([])}}),[t,c]),l=(0,n.y1)(d,r.F);(0,s.useEffect)((function(){const t={mounted:!0};return e.length||l(t),()=>{t.mounted=!1}}),[l,e.length]);const f=(0,s.useCallback)((()=>{const t={mounted:!0};return{effectCallback(){l(t)},destructor(){t.mounted=!1}}}),[l]);return(0,a.H)(f),{showSponsorsData:i}}},94836:(t,e,o)=>{o.d(e,{H:()=>u});var s=o(59496),n=o(69062),r=o(78241),a=o(59693),c=o(57869),i=o(13476);function u(t){const e=(0,n.W6)(r.oF),o=(0,c.Y)((t=>{const e=t?.item??void 0;return(0,i.k6)(e)&&e.isPodcastAd?e.id??void 0:void 0})),u=(0,a.D)(o);(0,s.useEffect)((function(){const{effectCallback:s,destructor:n}=t();return o!==u&&Boolean(o)&&setTimeout(s,e),n}),[t,o,u,e])}},19901:(t,e,o)=>{o.d(e,{P:()=>c});var s=o(59496),n=o(33167);let r;const a=!1;function c(){const t=(0,n.D)(),{listen:e,location:o}=t;return a&&(r=o.state),(0,s.useEffect)((function(){return e(((t,e)=>{"POP"===e&&(t.state={...a?Object(r):void 0,...o.state,...t.state})}))})),t}}}]);
//# sourceMappingURL=xpui-routes-all-show-sponsors.js.map