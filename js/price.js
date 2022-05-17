

$(function(){
    $(".option").change(function(){
        $(".txt").text($(this).val());
    });
});