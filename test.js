setTimeout(function() {
    // $('div').fireworks();

    $('#on_bg').click(function() { $('div.bg').fireworks(); });
    $('#on_blue').click(function() { $('div.blue').fireworks(); });
    $('#on_red').click(function() { $('div.red').fireworks(); });
    $('#on_all').click(function() { $('div').fireworks(); });
    $('#off_bg').click(function() { $('div.bg').fireworks('destroy'); });
    $('#off_blue').click(function() { $('div.blue').fireworks('destroy'); });
    $('#off_red').click(function() { $('div.red').fireworks('destroy'); });
    $('#off_all').click(function() { $('div').fireworks('destroy'); });
});
