$(document).ready(function(){
    var tooltip;
    $('.trigger').hover(function(evt){
        var width, heigth;
        tooltip = $(this).attr('data-tooltip');
        var objectOffset = $(this).offset();
        width = $(this).width;
        heigth = $(this).heigth;
        $(tooltip).show();
        $(tooltip).offset({
            left: objectOffset.left+30,
            top: objectOffset.top+30
        });  
    },function(){
        $(tooltip).hide();
    });
});