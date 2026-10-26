// ミニゲームの「種類」の一覧です。ゲームの種類を増やすときだけ編集します。
// page: 種類ごとの一覧ページ（パズルなど複数ある種類）／ file: 1つで完結するゲームの場所
// prefix: 作品名の頭（games/jigsaw_001.html の「jigsaw_」）。作品の番号は puzzles-data.js で管理します
// thumb: 種類のサムネイル（省略可。省略すると最新作品のサムネイルを使います）
var GAME_KINDS=[
 {id:"reversi",title:"リバーシ",emoji:"⚫",file:"games/reversi.html",thumb:"games/thumb/reversi.jpg"},
 {id:"jigsaw",title:"ジグソーパズル",emoji:"🧩",page:"jigsaw.html",prefix:"jigsaw_"},
 {id:"slide",title:"スライドパズル",emoji:"🔢",page:"slide.html",prefix:"slide_"},
 {id:"spotdiff",title:"間違い探し",emoji:"🔍",page:"spotdiff.html",prefix:"spotdiff_"},
 {id:"strip",title:"ストリップパズル",emoji:"🎞",page:"strip.html",prefix:"strip_"}
];
