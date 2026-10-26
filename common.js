(function(){
var P=[["index.html","トップ"],["characters.html","なかまたち"],["comic.html","4コマ"],["gallery.html","ギャラリー"],["diary.html","絵日記"],["games.html","ゲーム"],["zukan.html","空想動物図鑑"]];
var cur=location.pathname.split("/").pop()||"index.html";
var h='<div class="hd-in"><a class="logo" href="index.html">🐻 さとモンと仲間たち</a><nav class="nav">'+
P.map(function(p){return '<a href="'+p[0]+'"'+(p[0]==cur?' class="on"':'')+'>'+p[1]+'</a>'}).join("")+'</nav></div>';
var e=document.createElement("header");e.className="hd";e.innerHTML=h;document.body.prepend(e);
var f=document.createElement("footer");f.className="ft";
f.innerHTML="このサイトは架空のキャラクターによるファンメイドの創作です。実在の団体・人物とは関係ありません。";
document.body.append(f);
})();

// アクセス集計（GoatCounter）：site-config.js に gc を入れたときだけ動きます（Cookieは使いません）
if(window.SITE&&SITE.gc){var gs=document.createElement("script");gs.async=true;gs.src="https://gc.zgo.at/count.js";gs.setAttribute("data-goatcounter","https://"+SITE.gc+".goatcounter.com/count");document.head.appendChild(gs)}
