/**
 * Created by Jason on 2016/6/29.
 */
$(function(){

    //将作者和作品名字从全局变量中取出
    var author_name = window.localStorage.getItem('authorName');
    var work_name = window.localStorage.getItem('workName');

    window.localStorage.clear();

    //存放后台传来的用于页面初始化的数据
    var arrs = ["images/work-order/xuanchuan.png","images/work-order/xuanchuan.png","images/work-order/huihui.png","images/work-order/xc3.png","images/work-order/xc4.png","images/work-order/xc5.png","images/work-order/works1.jpg","images/work-order/works2.png",18349,'3000.00',"何公洲简介：","野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","近年来，先后出版发行有《公洲墨迹》《野夫小品集》《于右任书法技耍》《荣宝斋何公洲画集》《野夫古装人物技法》等。并先后在全国政协礼堂，荣宝斋，北京炎黄博物馆，济南王雪涛纪念馆，台湾高雄举办个展","本次活动主要针对广大书法爱好者","练习书法有一段时间了，最近是不是觉得无论自己怎么努力，感觉都没有进步了呢？那就加入我们吧，这里有全国著名的书法家亲临指导，让您的学艺之路豁然明亮，找对方向，才能事半功倍！"]

    //向后台请求私人订制作品页面的数据
    $.ajax({
        type:"post",
        url:"xxx.php",      // 向后台发送信息的地址
        data:{
            action:'personalOrder',
            authorName:author_name,                              //作者名字
            workName:work_name,                                  //作品名称
        },
        dataType:"json",
        success:function(res){

            // 成功时执行的回调函数

        }
    });

    //得到大宣传图片的宽度
    //设置其他作品展示区的宽度和大宣传图的宽度一样
    var wi = $('#ad_img').width();

    $('.show >div').css('width',wi);

    var wi2 = $('.my-works').width();

    $('.my-works').css({'height':wi2});

    //以下是页面信息初始化
    //初始化大宣传图
    function initPic(index){
        $('#ad_img').attr('src',index);
    }

    initPic(arrs[0]);

    //存放大图显示的地址
    var picPath;

    //查看小图的作品大图
    $('.hui-pic').each(function(i){
        $(this).hover(function(){
            picPath = $(this).attr('src');
            initPic(picPath);
        })
    })

    //初始化小宣传图
    $('.small-maps .publicity').each(function(i){
        $(this).find('img').attr('src',arrs[1+i]);
    })

    //初始化其他作品展示宣传图
    $('.my-works').each(function(i){
        $(this).find('img').attr('src',arrs[6+i]);
    })

    //初始化此商品的收藏次数
    $('#times').text(arrs[8]);

    //初始化此商品的价格
    $('#cost').text(arrs[9]);

    //初始化作者介绍
    $('#lab').text(arrs[10]);

    //初始化主要成就
    $('#lab_info').text(arrs[11]);

    //初始化作品介绍
    $('#lab2').text(arrs[12]);

    //初始化作品的主要内容
    $('#lab2_info').text(arrs[13]);


    //点击作者介绍和作品介绍进行的切换
    $('.activtiy a:first').click(function(){

        $(this).addClass('actived').removeClass('un-actived');
        $(this).next().addClass('un-actived').removeClass('actived');

        $('.events:first').show(50);
        $('.events:last').css('display','none')
    })

    $('.activtiy a:last').click(function(){
        $(this).addClass('actived').removeClass('un-actived');
        $(this).prev().addClass('un-actived').removeClass('actived');

        $('.events:last').show(50);
        $('.events:first').css('display','none')
    })

    $('#sy_num_gid2').val(0);                                                         //购买数量初始状态是0
    var txt = parseInt($('#sy_num_gid2').val(),10);                                 //获得当前购买的数量,讲的得到的字符串转换成数字

    //购买时选择作品尺寸，作品名字，组合形式栏目的内容，进行的颜色切换
    $('.chioce-radio').each(function(){
        $(this).removeAttr('checked');                                                //去掉radio默认的选中状态

        $(this).click(function(){

            $(this).parent().addClass('after-chioce');
            $(this).parent().parent().find('p span').empty();                        //如果之前打出提示信息则隐藏
            $(this).parent().siblings().removeClass('after-chioce');
            $('#sy_num_gid2').val(1);
            txt = txt + 1;
        })
    })

    //点击数量中的“-”
    $('#sy_minus_gid2').click(function(){

        txt = txt - 1;
        if(txt <= 0){
            txt = 0;
            $(this).css('cursor','text');
            return;
        }

        $(this).css('cursor','pointer');
        $('#sy_num_gid2').val(txt);

    })

    //点击数量中的“+”
    $('#sy_plus_gid2').click(function(){

        txt = txt + 1;
        $('#sy_num_gid2').val(txt);
    })

    ////用户自定义作品
    $('input[name="user-defined"]').focus(function(){

        $(this).parent().find('.after-chioce').removeClass('after-chioce');
        $(this).parent().find('p span').empty();
    })

    //点击立即购买时进行的验证
    $('#buy_now').click(function(){

        //尺寸必选
        if($('.share').eq(0).find('.after-chioce').length == 0){
            var txt = "请选择尺寸！";
            $('.share').eq(0).find('p span').text(txt);
            return;
        }

        //获取用户选择的尺寸
        else{
            var size = $('.share').eq(0).find('.after-chioce').text();
        }

        //作品名字必选
        if($('.share').eq(1).find('.after-chioce').length == 0 && $('input[name="user-defined"]').val() == ''){
            var txt = "请选择或自定义作品名字！";
            $('.share').eq(1).find('p span').text(txt);
            return;
        }

        //获取用户订购的作品名
        else{
            var bigorsmall = $('.share').eq(1).find('.after-chioce').text() + $('input[name="user-defined"]').val();
        }

        //组合形式必选
        if($('.share').eq(2).find('.after-chioce').length == 0){
            var txt = "请选择组合形式！";
            $('.share').eq(2).find('p span').text(txt);
            return;
        }

        //获取用户所选的组合形式
        else{
            var style = $('.share').eq(2).find('.after-chioce').text();
        }

        //获得作品购买的数量
        var number = $('#sy_num_gid2').val();

        //获得用户的备注留言
        var leaveword = $('textarea[name="message"]').val();

        //向后台发送用户购买的相关信息数据
        $.ajax({
            type:"post",
            url:"xxx.php",      // 向后台发送信息的地址
            data:{
                action:'userOrderData',
                authorName:author_name,                              //作者名字
                workName:bigorsmall,                                  //作品名称
                workSize:size,                                      //作品的尺寸
                workNum:number,                                     //作品的数量
                leaveWord:leaveword,                               //用户的留言
            },
            dataType:"json",
            success:function(res){

                // 成功时执行的回调函数

            }
        });

        $('#buy_now a').attr('href','order.html');
    })
})