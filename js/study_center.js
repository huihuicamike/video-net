/**
 * Created by Jason on 2016/5/6.
 */
$(function(){
    //定义数组，用来存放课程展示数据
    var arrs = [
        ["images/video/xingai17.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai1.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai11.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai10.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai7.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai6.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai8.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai19.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai4.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai13.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai12.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai21.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai3.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai5.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai14.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai17.png","大承文化",1000,500,'500.00'],
    ];

    //书法大家谈
    var arrs2 = [
        ["images/video/person5.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person4.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person3.png","huihui","美术学院","书法大家谈（先行版）"],
    ]

    //相关课程
    var arrs3 = [
        ["images/video/class1.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person2.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person1.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/class2.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/class3.png","huihui","美术学院","书法大家谈（先行版）"],
    ]
    var cur_index = 0;
    var cur_index2 = 0;  //名师课程直通车
    var cur_index3 = 0;  //相关课程
    var COLUMN_NUM=3;
    var ROW_NUM=4;
    var CUR_PAGE = 1;
    var MAX_PAGE =  Math.ceil(arrs.length/ROW_NUM/COLUMN_NUM);



    function addRow()
    {

        $('#tbc').append("<div class=\"row _box_class\"></div>");
        for(var i=0; (i<COLUMN_NUM) && (cur_index<arrs.length); i++)
        {
            addEle(cur_index);
            cur_index++;
        }
    }
    function addEle(arr_index)
    {

        $('#tbc >div:last').append("<div class=\"col-md-4\"> <div class=\"_box_b\"> <img src=\""+ arrs[arr_index][0] +"\"> <div class=\"hid\"> <p><label>课程名称：</label><span class='class-name'>"+ arrs[arr_index][1] +"</span></p> <p><label>学习量：</label><span>"+ arrs[arr_index][2] +"人</span></p> <p><label>收听次数：</label><span>"+ arrs[arr_index][3] +"次</span></p> </div> <div class=\"bottom-course\"><label>课程价格：</label><span>￥"+ arrs[arr_index][4] +"</span><a href='video.html'>购买</a></div> </div> </div>");
    }

    //书法大家谈
    function addList(arr2_index)
    {
        $('#_bnt').append("<div class='row _teacher_info'> <div class='col-md-7 _teacher_img'> <img src='"+ arrs2[arr2_index][0]+"'> </div> <div class='col-md-4 _teacher_intro'> <div class='_first'><span>姓名:"+ arrs2[arr2_index][1] +"</span><span>学校:"+ arrs2[arr2_index][2]+"</span><span class=\"related-talk-name\">名称:"+ arrs2[arr2_index][3]+"</span></div> <a class='_second related-talk' href=\"free_class.html\">立即收听 </a> </div> </div><hr>")
    }

    //相关课程
    function addRelatedList(index){
        $('#rlt_class').append("<div> <div class=\"row _teacher_info\"> <div class=\"col-md-7 _teacher_img\"> <img src=\""+ arrs3[index][0] +"\"> </div> <div class=\"col-md-4 _teacher_intro\"> <div class=\"_first\"><span>姓名:"+ arrs3[index][1] +"</span><span>学校:"+ arrs3[index][2] +"</span><span class=\"related-class-name\">名称:"+ arrs3[index][3] +"</span></div> <a class=\"_second related-class\" href=\"video.html\">立即收听 </a> </div> </div> <hr/>")
    }

    function initPage()
    {
        if(cur_index >= arrs.length)
            cur_index=0;

        //书法大家谈
        if(cur_index2 >= arrs2.length)
            cur_index2=0;

        //相关课程
        if(cur_index3 >= arrs3.length)
            cur_index3 = 0;

        $('#tbc').html('');
        $('#_bnt').html('');
        $('#rlt_class').html('');
        for(var i=0;i<ROW_NUM;i++)
        {
            addRow();
            if(cur_index >= arrs.length)
                break;
        }

        //书法大家谈
        for(var i=0;(i< 3)&&(cur_index2 < arrs2.length);i++)
        {
            addList(cur_index2);
            cur_index2 ++;
        }

        // 相关课程
        for(var i = 0; (i < 2) && (cur_index3 < arrs3.length); i++){
            addRelatedList(cur_index3);
            cur_index3++;
        }

        $('#_bnt hr :last').remove();   //去掉最后一条hr
        $('#rlt_class hr:last').remove();
        $('._box_class :last').removeClass('_box_class');                         //最后一行去掉底部的空隙

        //鼠标划过课程展示部分时的动态效果
        //鼠标离开恢复
        $('._buy .col-md-4').each(function(){
            $(this).hover(function(){
                $(this).find('.hid').css('top','67px');
            });
            $(this).mouseleave(function(){
                $(this).find('.hid').css('top','122px');
            })
        })

        clickBtn();
    }

    //点击立即购买
    function clickBtn(){
        $('.bottom-course a').each(function(){
            $(this).click(function(){

                //获得所点击栏目的课程名字,将其存在全局变量中
                var txt = $(this).parent().parent().find('.class-name').text();
                window.localStorage.setItem('classname',txt);
            })
        })
    }
    initPage();

    $.ajax({
        type:"post",
        url:"xxx.php",      // 向后台发送信息的地址
        data:{
            action:'学习中心初始化页面',
        },
        dataType:"json",
        success:function(res){
            //将后台传来的数据放入数组arrs和arrs2中

        }
    });



    //点击中高考试题图片的动画效果
    $('.gao_title').hover(function(){
        $(this).removeClass('gao_title').addClass('gao_title2');
    })
    $('.gao_title').mouseleave(function(){
        $(this).removeClass('gao_title2').addClass('gao_title');
    })

    $('.zhong_title').hover(function(){
        $(this).removeClass('zhong_title').addClass('zhong_title2');
    })

    $('.zhong_title').mouseleave(function(){
        $(this).removeClass('zhong_title2').addClass('zhong_title');
    })


    //点击中考试题和高考试题
    $('.zhong_title').click(function(){
        window.localStorage.setItem('title','高考书法试题')
    })

    $('.gao_title').click(function(){
        window.localStorage.setItem('title','中考书法试题')
    })

})