(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(7),s=t.n(i),a=(t(13),t(2)),o=t(3),p=t(5),u=t(4),d=(t(14),t(0)),j=function(e){Object(p.a)(t,e);var n=Object(u.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<999?"00".concat(e).slice(-3):e,".png");return Object(d.jsxs)("div",{class:"Pokecard",children:[Object(d.jsx)("h3",{children:this.props.name}),Object(d.jsx)("img",{src:n}),Object(d.jsxs)("h5",{children:["TYPE: ",this.props.type]}),Object(d.jsxs)("h5",{children:["EXP: ",this.props.exp]})]})}}]),t}(r.Component),b=j,h=(t(16),t(17),function(e){Object(p.a)(t,e);var n=Object(u.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Pokedex"}),Object(d.jsx)("h1",{children:this.props.isWinner?"WINNER":"LOSER"}),Object(d.jsx)("div",{className:"Pokedex-cards",children:this.props.pokemon.map((function(e){return Object(d.jsx)(b,{id:e.id,type:e.type,name:e.name,exp:e.base_experience})}))})]})}}]),t}(r.Component)),l=h,x=t(8),m=function(e){Object(p.a)(t,e);var n=Object(u.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(x.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),r=n.splice(t,1)[0];e.push(r)}var c=e.reduce((function(e,n){return e+n.base_experience})),i=n.reduce((function(e,n){return e+n.base_experience}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{pokemon:e,isWinner:c>i}),Object(d.jsx)(l,{pokemon:n,isWinner:i>c})]})}}]),t}(r.Component);m.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var O=m;var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(O,{})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.992d195d.chunk.js.map