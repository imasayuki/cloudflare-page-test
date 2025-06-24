// 1.1 要素の書き換え (テキスト)　すべてのh2ヘッダーのテキスト内容を変更
let let_h2 = document.querySelectorAll("h2");
for (let element of let_h2) {
  element.textContent = "全てのh2のタイトルを変更";
}

// 1.2 要素の書き換え (css)
document.querySelector("#id1").remove(); //要素の消去
document.querySelector("h2").style.color = "blue"; //最初のh2ヘッダーのみ青色に
document.querySelector(".class1").style.border = "solid 1px blue"; //class1クラスのみ青色のボーダーラインを
document.querySelector("#id2").style.backgroundColor = "red"; //id1の背景を赤色に


// レモンの文字を太文字に
document.querySelector("#lemon").style.fontWeight= "bold"; /* 文字の太さ */
//　オレンジの文字を24pxに
document.querySelector("#orange").style.fontSize= "36px"; /* 太字の大きさ */
