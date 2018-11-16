$(document).ready(function(){
    $('#convert').on('click',function(){
        var text = $('#input').val();

        text = text.replace(/-\n/g,'').replace(/\n/g,' ');

        $('#output').val(text);
    });
});
