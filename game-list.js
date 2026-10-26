// 種類ごとの一覧ページ（jigsaw.html など）の表示処理。ページ側で var KIND="jigsaw" を指定します。
(function(){
var m=document.getElementById("m"),K=GAME_KINDS.filter(function(k){return k.id==KIND})[0];
function pad(n){return("00"+n).slice(-3)}
if(!K){m.innerHTML='<p class="none">このゲームは見つかりません。</p>';return}
var L=[];(PUZZLES[K.id]||[]).forEach(function(r){if(typeof r=="number")L.push(r);else for(var n=r[0];n<=r[1];n++)L.push(n)});
L=L.filter(function(n,i){return L.indexOf(n)==i}).sort(function(a,b){return b-a});
document.title=K.title+" | さとモンと仲間たち";
m.innerHTML='<p class="bk"><a href="games.html">← ミニゲーム一覧へ</a></p><h2>'+K.emoji+" "+K.title+'</h2><p class="none" style="margin:0 0 16px;font-size:.88rem">新しい作品が上に並びます。</p>'
+(L.length?'<div class="grid">'+L.map(function(n){var nm=K.prefix+pad(n);
 return'<a class="g" href="games/'+nm+'.html"><div class="pic"><span>'+K.emoji+'</span><img src="games/thumb/'+nm+'.jpg" alt="" loading="lazy" onerror="this.remove()"></div><div class="bd"><b>'+nm+'</b></div></a>'}).join("")+'</div>':'<p class="none">まだ作品がありません。</p>');
})();
