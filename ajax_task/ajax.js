$('#btn').click(
    function(){ //functionは関数。プログラミングをまとめたもの

        console.log('click') //console.logは文字力を出力するメソッド。

    // Ajax通信を開始
    $.ajax({  //$（ドルマーク）は変数を表す目印　変数はプログラミング言語における「値を入れておく箱」　この行でここからajaxの箱ですよっていうことを示している

        'type': 'POST',//ここでサーバーに送信

        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4b5774e9f3d2a07b84f0f2f88e486224', //このURLから天気の情報を取ってくる

        dataType: 'json',//サーバーから返されるデータ。この場合jsonで返される

        success: function(json){
            document.getElementById('weather').innerHTML += json.weather[0].main; //非同期通信が成功したときはhtmlにあるid=weatherと返ってきたjsonデータを返す
        },
        error: function() {
            window.alert('Error')　//非同期通信が失敗したら、アラートでErrorを表示してくれる
        }
    })

  });