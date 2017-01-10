/**
 * Created by Jason on 2016/5/11.
 */
$(function(){

    //数组，用来存放轮播图片
    var arr = ["images/banner5.jpg","images/banner4.jpg","images/banner3.jpg","images/banner2.jpg","images/banner1.jpg"];

    $('.item').find('img').each(function(i){
        $(this).attr('src',arr[i]);
    })


 //存放名师讲师的信息
    //定义数组，用来存放课程展示数据
    var arrs = [
        ["images/knownmaster/pic1.png","大承文化",1000,500,'何公洲老师'],
        ["images/knownmaster/pic2.png","大承文化",1000,500,'张站立老师'],
        ["images/knownmaster/pic3.jpg","大承文化",1000,500,'魏峰老师'],
        ["images/knownmaster/pic4.jpg","大承文化",1000,500,'张站立老师'],
        ["images/knownmaster/pic5.jpg","大承文化",1000,500,'李优良老师'],
        ["images/knownmaster/tch4.jpg","大承文化",1000,500,'冷万里老师'],
        ["images/knownmaster/pic7.png","大承文化",1000,500,'何公洲老师'],
        ["images/knownmaster/pic8.png","大承文化",1000,500,'李优良老师'],
    ];

    //存放名师库的信息
    var arrs2 = [
        ["images/knownmaster/tch1.png","朱中原，1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","朱中原","首都师范大"],
        ["images/knownmaster/tch2.jpg","李优良，1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","李优良","首都师范大"],
        ["images/knownmaster/tch3.jpg"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","冷万里","首都师范大"],
        ["images/knownmaster/pic6.jpg"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","王岳川","首都师范大"],
        ["images/knownmaster/tch5.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","孟云飞","首都师范大"],
        ["images/knownmaster/tch6.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","欧阳中石","首都师范大"],
        ["images/knownmaster/tch7.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","冷万里","首都师范大"],
        ["images/knownmaster/tch9.jpg"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","魏峰","首都师范大"],
    ]

    //向后台请求页面初始化数据
    $.ajax({
        type:"post",
        url:"xxx.php",      // 向后台发送信息的地址
        data:{
            action:'konwnmaster',
        },
        dataType:"json",
        success:function(res){
            //将后台传来的数据放入数组arrs和arrs2中
        }
    });


    //名师讲师团队全局变量
    var cur_index = 0;
    var COLUMN_NUM = 4;
    var ROW_NUM = 2;

    //名师库全局变量
    var cur_index2 = 0;
    var COLUMN_NUM2 = 4;
    var ROW_NUM2 = 2;


    //名师讲师团队增加一个元素
    function addEle(arr_index)
    {
        $('#tbc >div:last').append("<div class='col-md-3'> <div class='_box_b'> <img src='"+ arrs[arr_index][0] +"'><div class='hid'> <p><label>课程名称：</label><span>"+ arrs[arr_index][1] +"</span></p> <p><label>学习量：</label><span>"+ arrs[arr_index][2] +"</span></p> <p><label>收听次数：</label><span>"+ arrs[arr_index][3] +"次</span></p> </div> <div class='bottom-course'><label>"+ arrs[arr_index][4] +"</label><a href='free_class.html'>视频课程</a></div> </div> </div>");
    }

    //名师库增加一个元素
    function addEle2(arr_index){
        $('#master_library >div:last').append("<div class='col-md-3'> <div class='_box_b'> <img src='"+ arrs2[arr_index][0] +"'> <div class='hid2'> <p style='font-size: 12px;padding-top:10px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ arrs2[arr_index][1] +" </p> </div> <div class='bottom-course2'> <p><label>姓名：</label><span>"+ arrs2[arr_index][2] +"</span></p> <p><label>任职学校：</label><span>"+ arrs2[arr_index][3] +"</span></p> </div> </div> </div>")
    }

    //名师讲师团队增加一行元素
    function addRow(){

        $('#tbc').append("<div class='row _box_class'></div>");
        for(var i=0; (i<COLUMN_NUM) && (cur_index<arrs.length); i++)
        {
            addEle(cur_index);
            cur_index++;
        }
    }



    //名师库增加一行元素
    function addRow2(){
        $('#master_library').append("<div class=\"row _box_class\"></div>");
        for(var i = 0;(cur_index2 < arrs2.length) && (i < COLUMN_NUM2); i++){
            addEle2(cur_index2);
            cur_index2 ++;
        }
    }

    //初始化页面元素 名师讲师团队
    function initPage1(){

        if(cur_index >= arrs.length)     //名师讲师团队
            cur_index=0;


        for(var i = 0;(i < arrs.length) && (i < ROW_NUM); i ++){
            addRow();
        }

        //鼠标划过课程展示部分时的动态效果
        //鼠标离开恢复
        $('._buy .col-md-3').each(function(){

            $(this).hover(function(){

                $(this).find('.hid').css('top','28px');
            });
            $(this).mouseleave(function(){
                $(this).find('.hid').css('top','90px');
            })
        })
    }

    //初始化名师库部分
    function initPage2(){

        if(cur_index2 >= arrs2.length)      //名师库
            cur_index2 = 0;

        //$('._bottom').html('');

        //名师库初始化页面
        for(var j = 0;(j < arrs2.length) && (j < ROW_NUM2); j ++){
            addRow2();
        }


        //鼠标悬停遮罩层效果
        $('._bottom .col-md-3').each(function(){

                $(this).hover(function(){

                    $(this).find('.hid2').css('top','0');
                });
                $(this).mouseleave(function(){
                    $(this).find('.hid2').css('top','120px');
                })

        });
    }

    initPage1();
    initPage2();
})