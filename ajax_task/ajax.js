$('#btn').click(
    function(){
        console.log('click')
    // Ajax通信を開始
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7ea43822490152e8b1b6e53e606bfdcf',
        dataType: 'json',
        success: function(json){
            document.getElementById('temp').innerHTML += json.weather[0].main;
        },
        error: function() {
            window.alert('error')
        }
    })

  });