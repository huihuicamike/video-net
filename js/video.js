/**
 * Created by Jason on 2016/6/24.
 */
$(function(){

    //将上一个页面传来的要购买课程的名字从全局变量中拿出
    var name = window.localStorage.getItem('classname');


    var CLASS_LIAT_ROW = 8;                             //课程链表一共有多少行
    var classlist_cur_index = 0;                        //指向数组的索引
    var ClASS_LIAT_PAGE = 1;                            //课程链表部分的页码

    var CHAT_ROW = 3;                                 //书法大家谈每页显示的行数
    var chat_cur_index = 0
    var CLASS_CHAT_PAGE = 1;                          //书法大家谈的页码

    var RELATED_ROE = 3;                             //相关课程每页显示的行数
    var related_cur_index = 0
    var RELATED_PAGE = 1;                            //相关课程部分的页码

    var  DISCUSS_ROW = 5;                            //课程讨论区每页显示的数目
    var  discuss_cur_index = 0;
    var CUR_PAGE = 1;                                 //当前页码
    var MAX_PAGE = 10;                               //最大页码

    //定义数组用来存放页面视频部分初始化用到的数据
    var arrs = ["http://weixin.shufamei.com/weixin/video/vm/0a4e782c1ab6406ba1df79c8f54523ce.mp4",'书法的字体，如何练就一手好字？','何公洲','￥50.00','10课时','初中生','51分钟','1000','1000','365天','之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...']



    //用来存放课程链表的数组
    var classList_arrs = [
        ["第一课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/0a4e782c1ab6406ba1df79c8f54523ce.mp4"],
        ["第二课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/1.mp4"],
        ["第三课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/2.mp4",],
        ["第四课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/3.mp4"],
        ["第五课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/4.mp4"],
        ["第六课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/0a4e782c1ab6406ba1df79c8f54523ce.mp4"],
        ["第七课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/cfb33ab59f8c46ffa7b6b786c9d489c3.mp4"],
        ["第八课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/3.mp4"],
        ["第九课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/1.mp4"],
        ["第十课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/3.mp4"],
        ["第十一课：","书法的历史","免费视频","http://weixin.shufamei.com/weixin/video/vm/4.mp4"],
    ]

    //用来存放书法大家谈数据信息
    var chat_arrs = [
        ["images/video/person4.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/person2.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/person1.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/person3.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/person2.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
    ]

    //用来存放相关课程的数组
    var relatedClass_arrs = [
        ["images/video/class5.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/class3.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/class2.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/class4.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
        ["images/video/class1.png","何公洲","张站立","学习书法中关于毛笔的重要性"],
    ]

    //存放视频讨论内容的数组
    var discuss_arrs  = [
        ["images/person/person12.jpg","辉辉","2016-4-29       14:48:49","沙发",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
        ["images/person/person11.jpg","辉辉","2016-4-29       14:48:49","板凳",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
        ["images/person/person10.jpg","辉辉","2016-4-29       14:48:49","地板",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
        ["images/person/person9.jpg","辉辉","2016-4-29       14:48:49","四楼",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
        ["images/person/person8.jpg","辉辉","2016-4-29       14:48:49","五楼",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
        ["images/person/person6.jpg","辉辉","2016-4-29       14:48:49","六楼",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
        ["images/person/person5.jpg","辉辉","2016-4-29       14:48:49","七楼",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
        ["images/person/person4.jpg","辉辉","2016-4-29       14:48:49","八楼",'之前的产品策略就是用我们的播放器覆盖页面video区域，从TBS2.1开始会逐步放开这块的 ...'],
    ];



    //向后台请求页面初始化所需的数据
    $.ajax({
        type: "post",
        url: "xxx.php",                                                                 // 向后台发送信息的地址
        data: {
            action: 'initVideoPage',
            videoName: name,                                                               //视频的名称
        },
        dataType: "json",
        success: function (res) {
            // 成功时执行的回调函数
        }
    });

    //视频播放器
    SewisePlayer.setup({
        server: "vod",
        type: "mp4",
        url: "http://139.129.200.57/video/huihui.mp4",
        skin: "vodFoream",//vodFoream，liveOrange,liveRadio,liveWhite,vodFlowPlayer,vodFoream,vodMobileTransparent,vodMobileWhite,vodOrange,vodTransparent,vodWhite
        lang: 'zh_CN'
    }, "player");
    player(arrs[0]);

    //播放视频
    function player(ele){
        SewisePlayer.toPlay(ele, "", 0, true);
    }

    $('#video_name').find('span').eq(0).text(arrs[1]);     //课程名称
    $('#video_name').find('span').eq(1).text(arrs[2]);     //课程作者
    $('#video_price').find('span').text(arrs[3]);           //课程价钱
    $('#class_num').text(arrs[4]);                           //课程数目
    $('#class_object').text(arrs[5]);                        //适用范围
    $('#class_duration').text(arrs[6]);                     //课程时长
    $('#watch_num').text(arrs[7]);                           //观看数
    $('#buy_num').text(arrs[8]);                              //购买数
    $('#validity_num').text(arrs[9]);                         //有效期
    $('#keySpeaker').text(arrs[2]);                             //主讲人
    $('#panel-1 section').text("课程简介：" + arrs[10]);      //课程简介

    var panel =  $('#video-panel div');
    //页面加载时默认选中课程详情面板
  $(panel).eq(0).find('.hid').css('opacity','1');
    $('.video-info >div').eq(0).show(500);

    //面板切换时的效果
        $('.video-panel >div:first').click(function(){
            $(this).addClass('actived');
            $(this).siblings().removeClass('actived');
            $(this).find('.hid').css('opacity','1');
            $(this).siblings().find('.hid').css('opacity','0');
            $('#panel-2').slideUp();
            $('#panel-1').slideDown(500);
        });

    $('.video-panel >div:last').click(function(){
        $(this).addClass('actived');
        $(this).siblings().removeClass('actived');
        $(this).find('.hid').css('opacity','1');
        $(this).siblings().find('.hid').css('opacity','0');
        $('#panel-1').slideUp();
        $('#panel-2').slideDown(500);

        //点击推介视频里的免费视频时进行播放该视频
        $('#panel-2 .see').each(function(i){
            $(this).click(function(){
                player(classList_arrs[i][3])
            })
        })
    });


    var he = $('.video-img img').height();
    $('.video-info div').css({'font-size':'12px'});

    //课程目录链表增加一行元素
    function addClassEle(index){
        $('#panel-2').prepend("<p><label>"+ classList_arrs[index][0] +"：</label><span>"+ classList_arrs[index][1] +"</span><a class=\"pull-right see\">"+ classList_arrs[index][2] +"</a></p>")
    }

    //初始化课程链表部分的数据
    function initClassArea(){
        $('#panel-2 p').remove();
        for(var i = 0; (i < CLASS_LIAT_ROW) && (classlist_cur_index < classList_arrs.length); i++){
            addClassEle(classlist_cur_index);
            classlist_cur_index++;
        }
    }

    initClassArea();

    $('#more').click(function(){
        ClASS_LIAT_PAGE += 1;
        initMorePage("课程链表",ClASS_LIAT_PAGE);
        initClassArea();
    })

    //书法大家谈部分增加一行元素
    function addChatEle(index){
        $('#everyone-talk').append("<div class=\"row space bgcolor\"> <div class=\"col-md-7 video-img\"> <img  src=\""+ chat_arrs[index][0] +"\"> </div> <div class=\"col-md-5 video-info\" ><div><label>主持人：<span>"+ chat_arrs[index][1] +"</span></label><label>嘉宾：<span>"+ chat_arrs[index][2] +"</span></label><label>节目名字：<span>"+ chat_arrs[index][3] +"</span></label></div> </div> </div>")
    }

    //初始化书法大家谈部分函数
    function initChatArea(){
        $('#everyone-talk .space').remove();
        for(var i = 0; (i < CHAT_ROW) && (chat_cur_index < chat_arrs.length); i++){
            addChatEle(chat_cur_index);
            chat_cur_index++;
        }

        $('.space .video-info:last').append("<a class=\"more pull-right\" id=\"more_program\">更多节目内容</a>")
    }

    initChatArea();

    //点击书法大家谈中的更多节目内容
    $('#more_program').click(function(){
        CLASS_CHAT_PAGE += 1;
        initMorePage("书法大家谈",CLASS_CHAT_PAGE);
        initChatArea();
    })

    // 相关课程部分增加一行元素
    function addRelatedEle(index) {
        $('#related-class').append("<div class=\"row related-courses-box bgcolor\"> <div class=\"col-md-7 related-courses-img\"> <img  src=\""+ relatedClass_arrs[index][0] +"\"> </div> <div class=\"col-md-5 video-info\" > <div><label>主持人：<span>"+ relatedClass_arrs[index][1] +"</span></label><label>嘉宾：<span>"+ relatedClass_arrs[index][2] +"</span></label><label>节目名字：<span>"+ relatedClass_arrs[index][3] +"</span></label></div> </div> </div>")
    }

    // 初始化相关课程区域
    function initRelatedArea(){
        $('.related-courses-box').remove();
        for(var i = 0;( i < RELATED_ROE) && ( related_cur_index < relatedClass_arrs.length); i++){
            addRelatedEle(related_cur_index);
            related_cur_index++;
        }

        $('.related-courses-box .video-info:last').append("<a class=\"more pull-right\" id=\"more_class\">更多课程</a>")
    }

    initRelatedArea();

    //点击相关课程中的更多课程
    $('#more_class').click(function(){
        RELATED_PAGE += 1;
        initMorePage("相关课程",RELATED_PAGE);
        initRelatedArea();
    })

    //视频讨论区增加一行元素
    function addDiscussEle(index){
        $('#discuss_text').append("<div class=\"thread-box\"> <div class=\"thread\"> <span class=\"thread-img\"> <a  href=\"#\"> <img class=\"media-object\" src=\""+ discuss_arrs[index][0] +"\" alt=\"...\"></a></span><span class=\"thread-name\">"+ discuss_arrs[index][1] +"</span></div><div class=\"thread-aside\"><div class=\"thread-main\"><span class=\"fl\"><span></span>"+ discuss_arrs[index][2] +"</span><span class=\"fr\"><span class=\"thread-num-first\">"+ discuss_arrs[index][3] +"</span></span></div><div class=\"thread-item-label\">"+ discuss_arrs[index][4] +"</div><div class=\"thread-foot\"><span class=\"fl\"><a class=\"thread-btn\">回复</a></span><span class=\"fr\"><a  class=\"tip\">举报</a></span></div></div></div>")
    }

    //初始化课程讨论区部分页面函数
    function initDisscussArea(){
        $('#discuss_text').empty();
        for(var i = 0;(i <  DISCUSS_ROW) && (discuss_cur_index < discuss_arrs.length);i++){
            addDiscussEle(discuss_cur_index);
            discuss_cur_index++;
        }
    }
    initDisscussArea();
    initPageBar();

    //向后台请求页面初始化所需的数据
    function initMorePage(ele,num){
        $.ajax({
            type: "post",
            url: "xxx.php",                          // 向后台发送信息的地址
            data: {
                action: 'initVideoPageMore',
                section:ele,
                PageNum: num,
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数
            }
        });
    }


    //跳转页码数
    function gotoPage(ele,num){

        var number = parseInt(num);
        initMorePage(ele,number);           //向后台请求数据
        CUR_PAGE = num;                   //设置当前的页码数

        discuss_cur_index = 0;
        classlist_cur_index = 0;
        chat_cur_index = 0;
        related_cur_index = 0;

        initClassArea();
        initChatArea();
        initDisscussArea();
        initRelatedArea();
        initPageBar();
    }

    //点击上一页
    function prevPage(){
        if(CUR_PAGE <= 1){
            return;
        }
        var numb = parseInt(CUR_PAGE) -1;
        gotoPage("视频讨论区",numb);
        //alert(CUR_PAGE);
    }

    //点击下一页
    function nextPage(){
        if(CUR_PAGE >= MAX_PAGE){
            return;
        }
        var numb = parseInt(CUR_PAGE) + 1;
        gotoPage("视频讨论区",numb);
    }

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
                    gotoPage( "视频讨论区",num);
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

    //点击网友的回复按钮
    $('.thread-btn').each(function(){

        $(this).click(function(){

            //获取网友的名字
            var name = $(this).parent().parent().parent().prev().find('.thread-name').text();
            textareaShow();

            //点击关闭按钮
            $('#closeIcon').click(function(){
                cancelComment();
            })

            //点击取消按钮
            $('#cancel').click(function(){
                cancelComment();
            })

            //点击评论框的发表按钮
            $('#publish').click(function(){
                sendInfoBtn("net-friend",name);
            })
        })
    })

    //点击发表评论按钮，评论视频的内容
    $('#comment').click(function(){
        var name = $('#video_name .first').text();                       //获取视频的名称
        textareaShow();

        //点击关闭按钮
        $('#closeIcon').click(function(){
            cancelComment();
        })

        //点击取消按钮
        $('#cancel').click(function(){
            cancelComment();
        })

        //点击评论框的发表按钮
        $('#publish').click(function(){
            sendInfoBtn("video",name);
        })
    })

    //评论框显示函数
    function textareaShow(){
        $('.sft').css('display','');
        $('body').css({'overflow':'none','overflow-y':'hidden'});                 //禁止页面的滚动事件
        $('#editor').css({'display':''});
    }

    //关闭评论框函数(点击关闭按钮),或者点击取消按钮，取消评论
    function cancelComment(){
        $('#tinymce p').html('');
        $('#editor').css({'display':'none'});
        $('.sft').css('display','none');
        $('body').css({'overflow':'','overflow-y':''});
    }

    //点击发表按钮函数
    function sendInfoBtn(ele,name){
        //获取用户填写的文本内容
        var text = $('.froala-element p').text();
        $('.froala-element p').text("");
        //向后台发送用户的评论内容
        sendCommentInfo(ele,name,text);
        cancelComment();
    }

    //向后台发送评论的内容函数
    //三个参数，e,表示评论的是视频还是网友;name,表示视频或网友的名字；obj,表示评论的内容
    function sendCommentInfo(e,name,obj){

        $.ajax({
            type: "post",
            url: "xxx.php",                                                                 // 向后台发送信息的地址
            data: {
                action: 'myCommentText',
                ele: e,                                                               //评论的是视频还是网友
                Name:name,                                                         //视频或网友的名字
                commentInfo:obj,                                                //评论的内容
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数
            }
        });
    }

    //点击评论框的取消按钮
    $('#cancel').click(function(){
        cancelComment();
    })

    $('#publish').click(function(){
        sendInfoBtn("");
    })

    var tip_off_txt;
    //举报部分胡的态效果
    $('.form-input').each(function(){

        $(this).click(function(){
            $(this).addClass('form-input-checked');
            $(this).parent().siblings().find('i').removeClass('form-input-checked');
            tip_off_txt = $(this).next().text();

            $('#typw_area div').text(tip_off_txt);

        })
    })

    //点击举报按钮时弹出模态弹出框
    var tip_name = '';                           //存放网友的名字
    $('.tip').each(function(){
        $(this).click(function(){
            tip_name = $(this).parent().parent().parent().prev().find('.thread-name').text();                  //获取要举报的人的姓名
            $('#mymodal-data').modal('toggle');
        })
    })

    //点击举报弹框中的举报按钮时，将举报的内容传到后台
    $('#tip-off').click(function(){
        var name = $('#video_name .first').text();
        $.ajax({
            type: "post",
            url: "xxx.php",                                                                 // 向后台发送信息的地址
            data: {
                action: 'tip-off',
                Name: name,                                                               //视频的名称
                netFriendName:tip_name,                                                   //网友的名字
                commentInfo:tip_off_txt,                                                   //举报的内容
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数
            }
        });

        $(this).prev().click();
    })

})

