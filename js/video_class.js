/**
 * Created by Jason on 2016/5/11.
 */
$(function(){

    //µ±Ç°Ñ¡ÖÐµÄÊÓÆµ 1¡¢2¡¢3
    var cur_video =1;

    //¿Î³ÌÊÓÆµÇÐ»»
    $('#_first_class').click(function(){
        $('._mark:eq(0)').css('display','');
        $('._mark:eq(1)').css('display','none');
        $('._mark:eq(2)').css('display','none');
        $('._video:eq(0)').show(50);
        $('._video:eq(1)').hide(50);
        $('._video:eq(2)').hide(50);
        cur_video=1;
    });
    $('#_second_class').click(function(){
        $('._mark:eq(1)').css('display','');
        $('._mark:eq(0)').css('display','none');
        $('._mark:eq(2)').css('display','none');
        $('._video:eq(1)').show(50)
        $('._video:eq(0)').hide(50);
        $('._video:eq(2)').hide(50);
        cur_video = 2;
    });
    $('#_third_class').click(function(){
        $('._mark:eq(2)').css('display','');
        $('._mark:eq(1)').css('display','none');
        $('._mark:eq(0)').css('display','none');
        $('._video:eq(2)').show(50);
        $('._video:eq(0)').hide(50);
        $('._video:eq(1)').hide(50)
        cur_video=3;
    });

    $('#_bottom_class button').eq(0).click(function(){
        switch(cur_video){
            case 1:
                $('#_third_class').click();
                break;
            case 2:
                $('#_first_class').click();
                break;
            case 3:
                $('#_second_class').click();
                break;
        };
    });

    $('#_bottom_class button').eq(1).click(function(){
        switch(cur_video){
            case 1:
                $('#_second_class').click();
                break;
            case 2:
                $('#_third_class').click();
                break;
            case 3:
                $('#_first_class').click();
                break;
        }
    });

    var arrs_img = ["images/video/u32.jpg","images/video/video3.jpg","images/video/video2.png"]

    //设置当前正在播放的图片
    $('#first-class-img img').attr('src',arrs_img[0]);
    $('#second-class-img img').attr('src',arrs_img[1]);
    $('#third-class-img img').attr('src',arrs_img[2]);

    //处于选中状态的分类设置为红色
    var a = $('.hide-radio:checked').each(function(){
        $(this).parent().addClass('classify-checked');
    })

    //改变所选分类的颜色
    var z = $('.hide-radio');
    redChange(z);


    //定义全局变量,并设置默认值都为全部
    var cls_label = $('.classify-checked').eq(0).text();
    var tea_label = $('.classify-checked').eq(1).text();
    var font_label = $('.classify-checked').eq(2).text();
    var content_label = $('.classify-checked').eq(3).text();

    //给选中的标签元素加颜色
    function redChange(element){
        $(element).each(function(){
                $(this).click(function(){
                    $(this).parent().addClass('classify-checked');
                    $(this).parent().siblings().removeClass('classify-checked');
                    signChioce(this);
                    askDataFrom();                              //每次点击都要向后台请求相关的数据
                })
        })
    }

    //每次点击选取元素后都要获取当前四个全集变量此刻的值
    function signChioce(element){
        var mparent = $(element).attr("name");

        switch (mparent) {
            case "class":                      //根据父窗口ID 判断当前标签属于哪一行
                cls_label = $(element).parent().text();       //将被点击标签的内容 放到响应行的变量里
                break;
            case "expert":
                tea_label = $(element).parent().text();       //将被点击标签的内容 放到响应行的变量里
                break;
            case "font":
                font_label = $(element).parent().text();       //将被点击标签的内容 放到响应行的变量里
                break;
            case "comment":
                content_label = $(element).parent().text();       //将被点击标签的内容 放到响应行的变量里
                break;
            default:
        }
    }


    //定义数组，用来存放课程展示数据
    var arrs = [
        ["images/video/show.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai3.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai1.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai4.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai5.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai6.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai7.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai8.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai9.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai10.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai11.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai12.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai13.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai14.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai15.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai16.jpg","大承文化",1000,500,'500.00'],
        ["images/video/xingai17.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai18.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai19.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai20.png","大承文化",1000,500,'500.00'],
        ["images/video/xingai21.png","大承文化",1000,500,'500.00'],
    ];

    //书法大家谈
    var arrs2 = [
        ["images/video/person1.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person2.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person3.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person4.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/person5.png","huihui","美术学院","书法大家谈（先行版）"],
    ]

    //相关课程
    var arrs3 = [
        ["images/video/class1.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/class2.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/class3.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/class4.png","huihui","美术学院","书法大家谈（先行版）"],
        ["images/video/class5.png","huihui","美术学院","书法大家谈（先行版）"],
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
        $('#related hr:last').remove();
        $('._box_class :last').removeClass('_box_class');                         //最后一行去掉底部的空隙

        //鼠标划过课程展示部分时的动态效果
        //鼠标离开恢复
        $('._buy .col-md-4').each(function(){
            $(this).hover(function(){
                $(this).find('.hid').css('top','30px');
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

    //上一页
    function prevPage()
    {
       var p =CUR_PAGE - 1;
        if(p < 1)
            return;
        gotoPage(p);
    }

    //下一页
    function nextPage()
    {
        var p = parseInt(CUR_PAGE) +parseInt(1);
        if(p >MAX_PAGE)
            return;
        gotoPage(p);
    }

    //指定跳转页数
    function gotoPage(numbe)
    {
        var number = parseInt(numbe);
        cur_index = (number-1) *COLUMN_NUM *ROW_NUM;
        cur_index2 = (number-1)*3;
        initPage();
        CUR_PAGE = number;
        initPageBar();
    }

    //向后台请求选出来的课程数据
    function askDataFrom(){
        $.ajax({
            type: "post",
            url: "xxx.php",                      // 向后台请求信息的地址
            data: {
                action: 'askClassResource',
                class: cls_label,                   // 分类
                teacher: tea_label,                 //名师
                fontFamily: font_label,              //字体
                contxt: content_label,                //内容
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数

                                    //将后端返回的信息放入数组里
            }
        });
    }

    initPageBar();
    initPage();


    //翻页之上一页
    $('#prev-page').click(function(){
        prevPage();
    })
    //翻页之下一页
    $('#next-page').click(function(){
        nextPage();
    })

    function initPageBar(){
        $('#pagination').empty();
        $('#pagination').append("<li ><a >上一页</a></li>");
        if(MAX_PAGE<=5){
            for(var i = 1;i <= MAX_PAGE; i++){
                $('#pagination').append("<li ><a>"+ i +"</a></li>");
                if(i==CUR_PAGE){
                    $('#pagination li:last').addClass('active');
                }
            }
            $('#pagination').append("<li ><a >下一页</a></li>");
            pageClick();
            return;
        }
        if(CUR_PAGE - 1>= 4){
            $('#pagination').append("<li><a >1</a></li><li><a>...</a></li>")
            for(var i = CUR_PAGE - 2;i <= CUR_PAGE; i++){
                $('#pagination').append("<li ><a >"+ i +"</a></li>");
                if(i == CUR_PAGE)
                    $('#pagination li:last').addClass('active');
            }
        }
        else{
            for(var i = 1;i <= CUR_PAGE; i++){
                $('#pagination').append("<li ><a>"+ i +"</a></li>");
                if(i==CUR_PAGE)
                    $('#pagination li:last').addClass('active');
            }

        }
        if(MAX_PAGE - CUR_PAGE >= 4){
            for(var j = parseInt(CUR_PAGE)+parseInt(1);j <= parseInt(CUR_PAGE)+parseInt(2); j++){
                $('#pagination').append("<li ><a >"+ j +"</a></li>");
            }
            $('#pagination').append("<li><a >...</a></li><li><a>"+ MAX_PAGE+"</a></li>")
        }
        else{
            for(var i = parseInt(CUR_PAGE) + parseInt(1);i <= parseInt(MAX_PAGE); i++){
                $('#pagination').append("<li ><a >"+ i +"</a></li>");
            }
        }
        $('#pagination').append("<li ><a >下一页</a></li>");
        pageClick();
    }

    function pageClick() {
        $('#page li').each(function () {
            $(this).css('cursor', 'pointer');
            $(this).click(function () {
                var num = $(this).text();
                if (/^\d+$/.test($(this).text())) {
                    gotoPage(num);
                    return;
                }
                if (num == "上一页") {
                    prevPage();
                    return;
                }
                if (num == "下一页") {
                    nextPage();
                    return;
                }
            });
        });
    };


    var he = $('#tbc').height();                                      //底下区域部分对其设置高度
    $('._teacher').css('height',he);

    //点击书法大家谈部分和相关课程部分的立即收听按钮
    //获取所点击课程的名字将其存在全局变量中，并传到下一个页面
    $('.related-talk').each(function(){
        $(this).click(function(){
            var txt = $(this).prev().find('span').eq(2).text();
            txt = txt.substring(3);
            window.localStorage.setItem('videoName',txt);
        })
    })

    $('.related-class').each(function(){
        $(this).click(function(){
            var txt = $(this).prev().find('span').eq(2).text();
            txt = txt.substring(3);
            window.localStorage.setItem('className',txt);
        })
    })
})