// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  
  //textに対して文字列（ボタンをクリックしました）を出力
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);

});

