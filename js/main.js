$(function(){
    $("#imgbuttonb").click(function(){
        $("input:radio[name='a']:radio[value='b']").prop('checked',true);
    });
    $("#imgbuttona").click(function(){
        $("input:radio[name='a']:radio[value='a']").prop('checked',true);
    });
});