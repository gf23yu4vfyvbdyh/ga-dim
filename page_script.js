function butotnClick2(){
    alert('ボタンがクリックされました２');
}

let button2 = document.getElementById('btn_1');
console.log("テスト用")
// addEventListener( 'イベント', 処理)で要素にイベントが発火した際に処理を実行する
button2.addEventListener('click', butotnClick2);
