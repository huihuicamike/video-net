/**
 * Created by Jason on 2016/5/3.
 */
$(function() {

    //头部导航栏点击效果
    $('._top_nav li').each(function () {
        //$(this).onmouseover.css('background-color','orange');
        //$(this).siblings().css('background-color','darkgray')
        $(this).click(function () {
            $(this).find('a').css('background-color', 'orange');
            $(this).siblings().find('a').css('background-color', 'darkgray')

        });
    })
    //宣传视频
    var vid = [
        'http://weixin.shufamei.com/weixin/video/vm/1.mp4',
        'http://weixin.shufamei.com/weixin/video/vm/1.mp4',
        'http://weixin.shufamei.com/weixin/video/vm/1.mp4',
        'http://weixin.shufamei.com/weixin/video/vm/1.mp4',
    ];

    //视频轮播时事件
    $('._player').each(function () {


        $(this).click(function () {
            //点击任何一张图片上的按钮时，随机播放一个视频资源
            var j = Math.floor(Math.random() * vid.length);

            $('._sft').css('display', '');  //遮罩层出现
            $('#player').css('display', '');  //视频播放器出现

            SewisePlayer.setup({
                server: "vod",
                type: "mp4",
                //url: "http://jackzhang1204.github.io/materials/mov_bbb.mp4",
                skin: "vodFoream",//vodFoream，liveOrange,liveRadio,liveWhite,vodFlowPlayer,vodFoream,vodMobileTransparent,vodMobileWhite,vodOrange,vodTransparent,vodWhite
                lang: 'zh_CN'
            }, "player");
            SewisePlayer.toPlay(vid[j], "测试视频", 0, true);
            //SewisePlayer.toPlay("http://139.129.200.57/video/huihui.mp4", "测试视频", 0, true);

            //轮播暂停
            $("#carousel-example-generic").carousel('pause');
            $('body').css({'overflow-y': 'hidden', 'overflow': 'none'}) //禁止页面的滚动事件
        });
    });

    $('._close').click(function(){
        SewisePlayer.doStop();    //停止播放视频
        $('#player >div:last').remove()
        //SewisePlayer.playTime(0)
        $('._sft').css('display', 'none');  //遮罩层隐藏
        $('#player').css('display', 'none');     //视频播放器隐藏
        $('body').css({'overflow-y': 'auto', 'overflow': ''})  // 解除页面的滚动事件
        $("#carousel-example-generic").carousel('cycle');
    })
    //点击播放器之外的页面的任何地方推出播放页面，
    // 遮罩层消失
    //视屏继续轮播
    $('#player').click(function (e) {

        //避免冒泡事件
        e = window.event || e;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    });

    //获得播放器元素
    var myvideo = document.getElementsByTagName('video')[0];
    $('._sft').click(function () {
        //点击遮罩层时，正在播放的视频停止播放
        myvideo.pause();
        myvideo.currentTime = 0;

        $('._sft').css('display', 'none');  //遮罩层隐藏
        $('#player').css('display', 'none');     //视频播放器隐藏
        $('body').css({'overflow-y': 'auto', 'overflow': ''})  // 解除页面的滚动事件
        $("#carousel-example-generic").carousel('cycle');
    })

    window.onbeforeunload = function (e) {
        myvideo.pause();
    }



    //点击播放器上边的关闭按钮时，也可关闭视频，与点击遮罩层的效果一样
    $('.glyphicon-remove-circle').click(function () {
        //点击关闭按钮时，正在播放的视频停止播放
        var myvideo = document.getElementsByTagName('video')[0];
        myvideo.pause();
        myvideo.currentTime = 0;
        $('._sft').css('display', 'none');
        $('._video').css('display', 'none');
        $('body').css({'overflow-y': 'auto', 'overflow': ''})  // 解除页面的滚动事件
        $("#carousel-example-generic").carousel('cycle');
    });

    //鼠标滑到专家图片上时，出现其介绍信息，鼠标离开时，效果消失
    $('._l_expert').mouseenter(function () {

        $('.info').delay(200).animate({'opacity':'0.657589'},500);
    });
    $('._l_expert').mouseleave(function(){

        $('.info').delay(200).animate({'opacity':'0'},500);
    })


    $('._r_expert').mouseenter(function () {

        $('.info2').delay(200).animate({'opacity':'0.657589'},500);
    });
    $('._r_expert').mouseleave(function(){

        $('.info2').delay(200).animate({'opacity':'0'},500);
    })


    //点击导航面板时图标点亮和变暗的变化
    //导航栏的下三角效果
    $('._nav_list li').each(function () {
        $(this).click(function () {
            $(this).find('img').eq(0).css('display', 'none');
            $(this).find('img').eq(1).css('display', '');       //被点击的图片点亮
            $(this).find('div').css('opacity', '1');            //下边的小三角出现
            $(this).find('a').css('color', '#333')              //字体颜色改变
            $(this).siblings().each(function () {
                $(this).find('a').css('color', '#428bca')
                $(this).find('img').eq(0).css('display', '');
                $(this).find('img').eq(1).css('display', 'none');
                $(this).find('div').css('opacity', '0');
            });
        });
    });

    //存放面板部分的视频信息
    var arr_videos = [
        ['高清','24:10','搜狐',"images/video/xingai9.jpg",'何公洲','张站立','免费收听','几十位专家级书法大师现场讲课','知名书法大师亲自授课，让您享受行云流水的书法艺术氛围的同时，学习到书法的真谛','马上免费试听'],
        ['标清','34:10','搜狐',"images/video/xingai10.jpg",'何公洲','张站立','免费收听','几十位专家级书法大师现场讲课','知名书法大师亲自授课，让您享受行云流水的书法艺术氛围的同时，学习到书法的真谛','马上免费试听'],
        ['超清','44:10','搜狐',"images/video/xingai3.jpg",'何公洲','张站立','免费收听','几十位专家级书法大师现场讲课','知名书法大师亲自授课，让您享受行云流水的书法艺术氛围的同时，学习到书法的真谛','马上免费试听'],
        ['很清','44:10','搜狐',"images/video/xingai8.jpg",'何公洲','张站立','免费收听','几十位专家级书法大师现场讲课','知名书法大师亲自授课，让您享受行云流水的书法艺术氛围的同时，学习到书法的真谛','马上免费试听'],
        ['高清','54:10','搜狐',"images/video/xingai18.png",'何公洲','张站立','免费收听','几十位专家级书法大师现场讲课','知名书法大师亲自授课，让您享受行云流水的书法艺术氛围的同时，学习到书法的真谛','马上免费试听'],
    ]

    var NUM = 5;

    $('._tit').each(function(i){

        $(this).text(arr_videos[i][7])
    });
    $('._text').each(function(i){
        $(this).text(arr_videos[i][8])
    });
    $('._link').each(function(i){
        $(this).html(""+ arr_videos[i][9] +"<img src='images/player.png'>")
    })
    //视频的类型
    //$('._t').each(function(i){
    //    $(this).text(arr_videos[i][0]);
    //});
    //视频的时间
    $('._b').each(function(i){
        $(this).text(arr_videos[i][1]);
    });
    //$('._l').each(function(i){
    //    $(this).text(arr_videos[i][2]);
    //});
    $('._video_link').each(function(i){
        $(this).attr('src',arr_videos[i][3])
    });
    $('._p').each(function(i){
        $(this).text(arr_videos[i][4])
    });
    $('._g').each(function(i){
        $(this).text(arr_videos[i][5])
    });
    $('._label2').each(function(i){
        $(this).text(arr_videos[i][6])
    });



    //存放知名讲师资源的数组
    var arrs = [
        ['images/index/u101.jpg','何公洲','大成文化专家讲师','首都师范大学教授，师从书法大家欧阳中，朱培尔，用简单生动的语言，让学生听得明白、听出精彩！！'],
        ['images/index/u163.jpg','李优良','大成文化专家讲师','师从欧阳中石先生，深厚的文化素养和书法家娴熟的笔法技巧，让李优良在当代书坛具有一定的影响力！'],
        ['images/index/u147.png','王岳川','大成文化专家讲师','当代中国书法“文化书法”理论的创始人。将中国文化和书法艺术传播到世界40多个国家！'],
        ['images/index/u155.png','孟云飞','大成文化专家讲师','孟教授组织并参与编写教育部书法教材。孟教授的讲解清晰，到位，有趣，影响广泛，深受好评。'],
        ['images/index/u157.jpg','张站立','大成文化专家讲师','首师大附属中学书法教师，参编全国中小学书法教材多部。讲解'],
        ['images/index/u159.jpg','赵宏','大成文化专家讲师','首师大继续教育学院书法专业副教授、硕士生导师。“九年义务制教育”中小学书法教材编委会成员。！'],
    ]

    var cur_index = 0;
    var COLUMN_NUM=3;
    var ROW_NUM=2;
    var CUR_PAGE = 1;
    var MAX_PAGE =  Math.ceil(arrs.length/ROW_NUM/COLUMN_NUM);


    //向后端请求知名讲师部分的资源
    $.ajax({
        type:"post",
        url:"xxx.php",      // 向后台请求信息的地址
        data:{
            action:'famousLecturer',       //知名讲师部分
        },
        dataType:"json",
        success:function(res){
            // 成功时执行的回调函数

          arrs.push();               //将后端返回的信息放入数组里
        }
    });


    function  addEle(arr_index){
        $('.box >div:last').append("<div class='col-md-4'><div class='media'> <a class='pull-left _famose_per' href='#'> <img class='media-object' alt='...' src='"+arrs[arr_index][0]+"'> </a> <div class='media-body' style='position: relative'> <div class='_name'> </div> <label class='_name_f'>"+arrs[arr_index][1]+"</label> <div class='_introduce'> </div> <label class='_info_f'>"+arrs[arr_index][2]+"</label>  <div class='_left_p'>"+arrs[arr_index][3]+"</div> </div></div> </div>")

    }
    function addrow(){
        $('.box').append("<div class='row _famose'></div>");
        for(var i = 0; (i < arrs.length) &&(i < COLUMN_NUM); i++){
            addEle(cur_index);
            cur_index ++;
        }
    }
    function initPage()
    {
        $('.box').html('');
        if(cur_index >= arrs.length)
            cur_index=0;

        for(var i=0;i<ROW_NUM;i++)
        {
            addrow();
            if(cur_index >= arrs.length)
                break;
        }
    }

    initPage();

    //点击面板里视频区的马上观看按钮，进行视频观看页面的跳转
    $('._link').each(function(){
        $(this).click(function(){
            //获得要加载的视频的名字，并存入全局变量
            var txt = $(this).prev().prev().text();
            window.localStorage.setItem('videoName',txt);
        })
    })

    //点击高考书法模拟题
    $('._try_img').click(function(){
        window.localStorage.setItem('title','高考书法模拟题');
    })

    $('.g-immediately').click(function(){
        window.localStorage.setItem('title','高考书法模拟题');
    })

    //点击中考书法模拟题
    $('._login_img').click(function(){
         window.localStorage.setItem('title','中考书法模拟题');
    })

    $('.z-immediately').click(function(){
        window.localStorage.setItem('title','中考书法模拟题');
    })


    //加载页面的时候，将页脚部分输入框的内容清空
    $('input[name="user"]').attr('value','');
    $('input[name="password"]').attr('value','');
    $('input[name="mail"]').attr('value','')

})