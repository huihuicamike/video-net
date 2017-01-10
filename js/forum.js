/**
 * Created by Jason on 2016/6/12.
 */
$(function(){

    //展开初中高中互动区
    $('#moreSkillDynamic').click(function(){
        $('#hide1').prev().toggle(500);
        $('#hide1').toggle(500);
    })

    $('#moreProduceDynamic').click(function(){
        $('#hide2').prev().toggle(500);
        $('#hide2').toggle(500);
    })

})