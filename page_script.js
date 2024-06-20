function butotnClick2() {
    console.log("ボタンがクリックされました２")

    gtag('set', { 'user_id': 'USER_ID_test240620' })
    var random_lat = Math.floor(Math.random() * 100) + 150;
    var random_lng = Math.floor(Math.random() * 100) + 150;

    gtag('set', { 'usrt_lat': 'latnum' + random_lat })
    gtag('set', { 'user_lng': 'lngnim' + random_lng })
}

let button2 = document.getElementById('btn_1');
console.log("テスト用")
button2.addEventListener('click', butotnClick2);
gtag('config', 'G-ERHTPZWRQ3', {
    'user_id': 'USER_ID_test5000000'
});

var random_lat = Math.floor(Math.random() * 100) + 150;
var random_lng = Math.floor(Math.random() * 100) + 150;
gtag('set', { 'user_id': 'USER_ID_testP240620', 'usrt_lat': 'Platnum' + random_lat, 'user_lng': 'Plngnim' + random_lng })
