/**
 * Created by Jason on 2016/6/27.
 */
$(function() {
    var txt = window.localStorage.getItem('videoName');
    window.localStorage.removeItem('videoName')

    //用来存放后台传来的用来页面头部播放视频信息的数据
    var arrs_video = [
        ["2016-8-1期", "片段", "http://weixin.shufamei.com/weixin/video/xl/1.jpg", "http://weixin.shufamei.com/weixin/video/vm/1.mp4", "古代书法家关系", "60万次", "何公洲 李优良"],
        ["2016-8-2期", "片段", "http://weixin.shufamei.com/weixin/video/xl/2.jpg", "http://weixin.shufamei.com/weixin/video/vm/2.mp4", "天下第一小鲜肉", "60万次", "何公洲   王嘉宾"],
        ["2016-8-3期", "片段", "http://weixin.shufamei.com/weixin/video/xl/3.jpg", "http://weixin.shufamei.com/weixin/video/vm/3.mp4", "一代才子唐伯虎", "60万次", "何公洲  孟云飞"],
        ["2016-8-5期", "片段", "http://weixin.shufamei.com/weixin/video/xl/4.jpg", "http://weixin.shufamei.com/weixin/video/vm/4.mp4", "中日书法PK", "60万次", "何公洲  朱元璋"],
        ["2016-8-6期", "片段", "http://weixin.shufamei.com/weixin/video/xl/96d82252707f4fb79a69a4d0e948304e.jpg", "http://weixin.shufamei.com/weixin/video/vm/0a4e782c1ab6406ba1df79c8f54523ce.mp4", "文字起源（下）", "60万次", "何公洲  周华健"],
        ["2016-8-4期", "片段", "http://weixin.shufamei.com/weixin/video/xl/cfb33ab59f8c46ffa7b6b786c9d489c3.jpg", "http://weixin.shufamei.com/weixin/video/vm/cfb33ab59f8c46ffa7b6b786c9d489c3.mp4", "文字起源（上）", "60万次", "何公洲  朱中元"],
    ]

    //用来存放推荐的视频列表的数据
    var arrs_video_list = [
        ["http://weixin.shufamei.com/weixin/video/xl/2831f35751d34b6596fe41ba43115998.jpg", "片段：", "第一期：", "圣教序", "60万次", "何公洲  李优良"],
        ["http://weixin.shufamei.com/weixin/video/xl/1168264a078d4a928a112c1424cf87e1.jpg", "片段：", "第二期：", "毛笔的选择", "60万次", "何公洲   王嘉宾"],
        ["http://weixin.shufamei.com/weixin/video/xl/0e3bcd8684e2493a8d8bbd4dd8368ca2.jpg", "片段：", "第三期：", "中考书法解析(一)", "60万次", "何公洲  孟云飞"],
        ["http://weixin.shufamei.com/weixin/video/xl/4eb370e5c0704a2ea86a2172b0c20b4a.jpg", "片段：", "第四期：", "中考书法解析(二）", "60万次", "何公洲  李优良"],
        ["http://weixin.shufamei.com/weixin/video/xl/0948141afbae49c78836cca4eb877bc.jpg", "片段：", "第五期：", "中考书法解析(三)", "60万次", "何公洲  王建华"],
        ["http://weixin.shufamei.com/weixin/video/xl/d455fc04c3034001a63d2f05052722f8.jpg", "片段：", "第六期：", "中考书法解析(四)", "60万次", "何公洲  孟云飞"],
        ["http://weixin.shufamei.com/weixin/video/xl/ec35abbe7a554a558ff52bc682329c9e.jpg", "片段：", "第一期：", "中考书法解析(五)", "60万次", "何公洲  张站立"],
        ["http://weixin.shufamei.com/weixin/video/xl/06df93c31b30470583ef16debce1c1fd.jpg", "片段：", "第一期：", "中考书法解析(六)", "60万次", "何公洲   王嘉宾"],
        ["http://weixin.shufamei.com/image/3.jpg", "片段：", "第一期：", "毛笔书法教程", "60万次", "何公洲   王嘉宾"],
        ["http://weixin.shufamei.com/image/2.jpg", "片段：", "第二期：", "毛笔书法教程讲座", "60万次", "何公洲   王嘉宾"],
    ]
    //用来存放作品展示部分的数据信息
    var arrs_works_show = [
        ["images/free_class/work1.jpg","大承文化","何公洲","230.00"],
        ["images/free_class/work2.jpg","大承文化","辉辉","230.00"],
        ["images/free_class/work3.jpeg","大承文化","公谷","230.00"],
        ["images/free_class/work4.jpg","大承文化","何公洲","230.00"],
        ["images/free_class/work5.jpg","大承文化","何公洲","230.00"],
        ["images/free_class/work6.jpg","大承文化","何公洲","230.00"],
        ["images/free_class/work7.jpg","大承文化","何公洲","230.00"],
        ["images/free_class/work8.jpg","大承文化","何公洲","230.00"],
    ]
    //用来存放评论信息数组
    var arrs_forum = [
        ["images/person/person1.jpg", "蝌蚪雨", "2016-5-11   14:35:37", '沙发', "怎样能学好书法"],
        ["images/person/person2.jpg", "迪", "2016-5-10   14:48:49", '沙发', "现在的人都太依赖电脑手机了，把书法传统文化给摒弃了，渐行渐远，真是一大悲哀啊！"],
        ["images/person/person3.jpg", "Iris", "2016-5-9   13:41:13", '沙发', "其实，文化、知识、艺术的传播，真的真的不需要任何条件去交换去吸引，因为它们本身就是福利了。感谢大承文化的实力出品大礼包"],
        ["images/person/person4.jpg", "灰小耗", "2016-5-8   20:27:15", '沙发', "结绳记事说算是最早的书法记录吧"],
        ["images/person/person5.jpg", "草心人", "2016-5-7   16:24:57", '沙发', "没错！但其实不用那么复杂》但从一点，就可以看出“书圣“之功力高强。"],
        ["images/person/person6.jpg", "小船", "2016-5-6   09:51:19", '沙发', "单单就这点，就甩今人好几条街"],
        ["images/person/person7.jpg", "大林子", "2016-5-5   23:06:03", '沙发', "书法高深莫测？其实并非如此"],
        ["images/person/person8.jpg", "爱好者", "2016-5-4   19:34:24", '沙发', "艺术审美不是单纯的美与丑，任何文字艺术，都有雄、秀两个对立面"],
        ["images/person/person9.jpg", "平安", "2016-5-3   22:57:30", '沙发', "书法作为中华中华名族独特的艺术，负载着丰富的人文信息，延绵几千年经久不衰"],
        ["images/person/person10.jpg", "深夜的雪", "2016-5-2   14:48:49", '沙发', "草书艺术之美宛若无言而有诗篇之意蕴，无动而有舞蹈之神形，无色而有绘画的斑斓，无声而有音乐的旋律。"],
        ["images/person/person11.jpg", "大眼人生", "2016-4-29   20:4:03", '沙发', "惊！古代书法名家之间错综复杂关系"],
        ["images/person/person12.jpg", "王子", "2016-4-29   02:53:41", '沙发', "状元的书法都很拽吗？"]
    ]


    //定义全局变量
    //视频推荐区
    var VIDEO_ROW = 2;                          //行数
    var VIDEO_COLUMN = 5;                        //列数
    var Vcur_index = 0;                    //指向数组的索引

    //作品推荐区
    var WORKS_ROW = 2;                      //行数
    var WORKS_COLUMN = 4;                   //列数
    var Wcur_index = 0;                 //指向数组的索引

    //评论区
    var FORUM_ROW = 10;                      //行数
    var Fcur_index = 0;                 //指向数组的索引

    var PAGE_NUM = 1;                  //当前页码数
    var MAX_PAGE = Math.ceil(arrs_forum.length/10);               //最大的页码数
    //var MAX_PAGE = 5;               //最大的页码数


    //向后端请求视频的资源
    $.ajax({
        type: "post",
        url: "xxx.php",                      // 向后台请求信息的地址
        data: {
            action: 'videoResource',
            videoName: txt,                   //视频的名称
        },
        dataType: "json",
        success: function (res) {
            // 成功时执行的回调函数

            arrs_video.push();                     //将后端返回的信息放入数组里
            arrs_video_list.push();
            arrs_works_show.push();
            arrs_forum.push();
        }
    });

    //初始化播放器
    function initPlayer(video_name){
        SewisePlayer.setup({
            server: "vod",
            type: "mp4",
            //url: "http://jackzhang1204.github.io/materials/mov_bbb.mp4",
            skin: "vodFoream",//vodFoream，liveOrange,liveRadio,liveWhite,vodFlowPlayer,vodFoream,vodMobileTransparent,vodMobileWhite,vodOrange,vodTransparent,vodWhite
            lang: 'zh_CN'
        }, "player");
        SewisePlayer.toPlay(video_name, txt, 0, false);
    }

    initPlayer(arrs_video[0][3]);


    $('#my_comment').attr('value','');
    $('#my_comment').css('display','');

    //播放器加上评论框以后的高度
    $('#player >div').eq(1).css({'background-color': 'black', 'top': '-20px'});

    //点击播放列表里的视频函数
        $('.details-list img').each(function (i) {
            $(this).attr('src', arrs_video[i][2]);                                                 //初始化视频图片
            $(this).click(function () {
                $(this).addClass('navgi');
                $(this).parent().parent().siblings().find('img').removeClass('navgi');          // 标记正在播放的视频
                SewisePlayer.toPlay(arrs_video[i][3], txt, 0, true);
            })
        })

    //判断用户是否处于已登录状态，
    //检测到没登录
    //监听播放器当前进度，到达指定的时间是就停止播放
    var myvideo = $('video')[0];

    if(!$.cookie("username")){
        myvideo.addEventListener("timeupdate",function(){

            var t = myvideo.currentTime+"";       //将返回的当前进度的值转换成字符串，以便好操作，取小数点前面的值

            var  ts = parseInt(t.substring(0, t.indexOf(".")));

            //视频播放到5分钟时，检测用户是否已登录，如果还没有登录，则暂停播放，弹出提示框，让用户先登录在观看
            //if(ts >= 5) {
            //    myvideo.pause();
            //    $('#lab').css('display','');
            //}
        });
    }

    //离开页面时停止播放
    window.onbeforeunload = function (e) {
        myvideo.pause();
    }

        //初始化播放列表里的视频信息
        $('.class-info').each(function (i) {
            $(this).find('p').eq(0).find('label').text(arrs_video[i][1]);                         //视频类型，片段，完整版
            $(this).find('p').eq(0).find('span').eq(0).text(arrs_video[i][0]);                    //视频是第几期
            $(this).find('p').eq(0).find('span').eq(1).text(arrs_video[i][4]);                     //视频的题目
            $(this).find('p').eq(1).find('span').text(arrs_video[i][5]);                           //视频的播放次数
            $(this).find('p').eq(2).find('span').text(arrs_video[i][6]);                          //视频的标签
        })

        //点击提交用户评论消息的提交按钮，将用户的评论信息提交到后台
        $('#submit').click(function(){
            var comment =  $('#my_comment').val();                                                //获得用户的评论消息内容
            $('#my_comment').attr('value','');                                                   //将用户的评论消息清空

            //向后台发送用户的评论内容
            sendCommentInfo(comment);
        })

        $('.details-list img').each(function (i) {
            $(this).attr('src', arrs_video[i][2]);                                                 //初始化视频图片
            $(this).click(function () {
                $(this).addClass('navgi');
                $(this).parent().parent().siblings().find('img').removeClass('navgi');          // 标记正在播放的视频
                SewisePlayer.toPlay(arrs_video[i][3], txt, 0, true);

                //初始化播放器上边视频的名字\
                var version = $('.navgi').parent().next().find('p:eq(0) .video-version').text();
                var date = $('.navgi').parent().next().find('p:eq(0) .video-date').text();
                var title = $('.navgi').parent().next().find('p:eq(0) .video-title').text();

                $('#video-name span').eq(0).text(version);
                $('#video-name span').eq(1).text(date);
                $('#video-name span').eq(2).text(title);
            })
        })

   $('#column-new').hover(function(){
       if($(this).has('.active').length == 0){
           $(this).removeClass('un-active').addClass('active');
           $('#column-old').removeClass('active').addClass('un-active');
       }

       $('.details-list').eq(0).show(50);
       $('.details-list').eq(1).show(50);
       $('.details-list').eq(2).show(50);


       $('.details-list').eq(3).hide();
       $('.details-list').eq(4).hide();
       $('.details-list').eq(5).hide();

   })

    $('#column-old').hover(function(){
        if($(this).has('.active').length == 0){
            $(this).removeClass('un-active').addClass('active');
            $('#column-new').removeClass('active').addClass('un-active');
        }

        $('.details-list').eq(0).hide();
        $('.details-list').eq(1).hide();
        $('.details-list').eq(2).hide();


        $('.details-list').eq(3).show(50);
        $('.details-list').eq(4).show(50);
        $('.details-list').eq(5).show(50);
    })

    initVideo();
    initWorks();
    initForum();
    initPageBar();

    //推荐视频区域鼠标滑过的动画效果
    $('.list .col-md-2').each(function(){
        $(this).hover(function(){
            $(this).find('.shadow').toggle(100);
         })
    })

    $('.show .col-md-3').each(function(){
        $(this).hover(function(){
            $(this).find('.hid').toggle(100);
        })

        //鼠标移入作品，马上订制按钮变大
        $(this).mouseenter(function(){
            $(this).find('a').css('transform','scale(1.1)');
        })

        //鼠标移出作品，马上订制按钮恢复
        $(this).mouseleave(function(){
            $(this).find('a').css({'transform':'scale(1)'});
        })
    })

    //鼠标点击推荐视频列表里的内容时，打开新的窗口进行播放该视频
    $('.other-video').each(function(){
            $(this).click(function(){

                //获得被点击的视频的题目名字
                var name = $(this).find('.info-title').html();

                //将题目放在全局变量中
                window.localStorage.setItem('videoName',name);
                var href = window.location.href;

                window.open(""+ href);

            })
    })

    var type;
         //点击右侧的评论按钮
        $('#comment').click(function(){
            type = 0;

            textareaShow();

            //点击关闭按钮
            $('#closeIcon').click(function(){
               cancelComment();
            })

            //点击取消按钮
            $('#cancel').click(function(){
                cancelComment();
            })

        })

    //点击作品列表展示里的每条列表里的订制按钮时，将此作品的作品名字和作品作者获取并传到全局变量里
    $('.immediately-ordered').each(function(){
        $(this).click(function(){
            var p = $(this).parent().prev().find('p:eq(0) span').text();
            var q = $(this).parent().prev().find('p:eq(1) span').text();

            window.localStorage.setItem('authorName',q);
            window.localStorage.setItem('workName',p);
        })
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

        $.ajax({
            type: "post",
            url: "xxx.php",                                                                 // 向后台发送信息的地址
            data: {
                action: 'tip-off',
                Name: name,                                                               //视频的名称
                netFriendName:tip_name,                                                         //网友的名字
                commentInfo:tip_off_txt,                                                   //举报的内容
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数
            }
        });

        $(this).prev().click();
    })


    //增加一个推荐视频元素
    function addELeVideo(index){
        $('.list:last').append("<div class='col-md-2'><a class='other-video'><img src='"+ arrs_video_list[index][0] +"'><div class='info'><label> "+ arrs_video_list[index][1] +"</label><span class='info-date'>"+ arrs_video_list[index][2] +"</span> <span class='info-title'>"+ arrs_video_list[index][3] +"</span> <div class='shadow' style='display: none'><div><label style='margin-top:5px'>标签：</label><span>"+ arrs_video_list[index][4] +"</span></div><div><label>次数：</label><span>"+ arrs_video_list[index][5] +"</span></div></div></div></a></div>")
    }

    //增加一行推荐视频元素
    function addRowVideo(){
        $('#recommend_video').append("<div class='row box list'></div>")
        for(var i = 0; (i < VIDEO_COLUMN) && (Vcur_index < arrs_video_list.length); i++){
            addELeVideo(Vcur_index);
            Vcur_index ++;
        }
    }

    //初始化推荐视频这一块
    function initVideo(){
        if(Vcur_index >= arrs_video_list.length){
            return;
        }
        for(var i = 0; i < VIDEO_ROW; i++){
            addRowVideo();
        }
    }

    //增加一个作品展示元素
    function addELeWorks(index){
        $('.show:last').append("<div class='col-md-3'><img src='"+ arrs_works_show[index][0] +"'> <div class='hid' style='display: none'> <p><label>作品名称：</label><span>"+ arrs_works_show[index][1] +"</span></p> <p><label>作者：</label><span>"+ arrs_works_show[index][2] +"</span></p> </div> <div class='cost'><i>￥"+ arrs_works_show[index][3] +"</i><a class='immediately-ordered' href='work-order.html'>订制</a></div> </div>")}

    //增加一行作品展示元素
    function addRowWorks(){
        $('#works_show').append("<div class='row box show bottom-space top-space'></div>")
        for(var i = 0; (i < WORKS_COLUMN) && (Wcur_index < arrs_video_list.length); i++){
            addELeWorks(Wcur_index);
            Wcur_index ++;
        }
    }

    //初始化作品展示这一块
    function initWorks(){
        if(Wcur_index >= arrs_works_show.length){
            return;
        }
        for(var i = 0; i < WORKS_ROW; i++){
            addRowWorks();
        }
    }

    //增加一行品论区的元素
    function addELeForum(index){
        $('.media-box').prepend("<div class='thread-box'><div class='thread'><span class='thread-img'><a  href='#'> <img class='media-object' alt='...' src='"+ arrs_forum[index][0] +"'></a></span><span class='thread-name'>"+ arrs_forum[index][1] +"</span></div><div class='thread-aside'><div class='thread-main'><span class='fl'><span></span>"+ arrs_forum[index][2] +"</span><span class='fr'><span class='thread-num-first'>"+ arrs_forum[index][3] +"</span></span></div><div class='thread-item'>"+ arrs_forum[index][4] +"</div><div class='thread-foot'><span class='fl'><a class='thread-btn'>回复</a></span><span class='fr'><a class='tip'>举报</a></span></div></div></div>")
    }

    //评论区需要用到的全局变量
    var time,name, t,text,now_time;

    //初始化评论区这一块
    function initForum(){
        $('.thread-box').remove();
        for(var i = 0; (i < FORUM_ROW) || (Fcur_index >= arrs_forum.length); i++){

            addELeForum(Fcur_index);
            Fcur_index++;
            if(Fcur_index >= arrs_forum.length){
                break;
            }
        }


        //点击网友的回复按钮
        $('.thread-btn').each(function(){

            $(this).click(function(){
                type = 1;
                //获取发帖网友的名字及发帖时间
                name = $(this).parent().parent().parent().prev().find('.thread-name').text();
                time = $(this).parent().parent().prev().prev().find('.fl').text();
                t = $(this).parent().parent().prev().text();

                textareaShow();

                //点击关闭按钮
                $('#closeIcon').click(function(){
                    cancelComment();
                })

                //点击取消按钮
                $('#cancel').click(function(){
                    cancelComment();
                })

                ////点击评论框的发表按钮
                //$('#publish').click(function(){
                //    sendInfoBtn(name);
                //})
            })
        })


        //点击评论框的发表按钮
        //如果评论视频内容，则sendInfoBtn("")所传的参数为空字符串，
        //如果是回复的网友的话题，则sendInfoBtn("name")所传递的参数为所回复的网友的名字
        $('#publish').click(function(){
            sendInfoBtn("");
            if(type == 1){
                addComment();
                return;
            }
            if(type == 0){
                addComment2();
                return;
            }

    })

        //显示一条评论信息
        function addComment(){
            now_time = getLocalTime();

            $('.media-box').prepend("<div class='thread-box'><div class='thread'><span class='thread-img'><a  href='#'> <img class='media-object' alt='...' src='images/person/person12.jpg'></a></span><span class='thread-name'>我</span></div><div class='thread-aside'><div class='thread-main'><span class='fl'><span></span>"+ now_time +"</span><span class='fr'><span class='thread-num-first'>板凳</span></span></div><div><div class='thread-item-from'><span style='font-size:13px'><font color='#999999'>"+ name +"&nbsp;发表于&nbsp;"+ time +"</font></span></br></br>"+ t +"</div><div class='thread-item-medius'>"+ text +"</div></div><br/><div class='thread-foot'><span class='fl'><a class='thread-btn'>回复</a></span><span class='fr'><a class='tip'>举报</a></span></div></div></div>")
           $('.thread-btn:first').click(function(){
               type = 1;
               //获取发帖网友的名字及发帖时间
               name = $(this).parent().parent().parent().prev().find('.thread-name').text();
               time = $(this).parent().parent().prev().prev().find('.fl').text();
               t = $(this).parent().parent().prev().text();

               textareaShow();

               //点击关闭按钮
               $('#closeIcon').click(function(){
                   cancelComment();
               })

               //点击取消按钮
               $('#cancel').click(function(){
                   cancelComment();
               })

               ////点击评论框的发表按钮
               //$('#publish').click(function(){
               //    sendInfoBtn(name);
               //})
           })
        }

        function addComment2(){

            now_time = getLocalTime();

            $('.media-box').prepend("<div class='thread-box'><div class='thread'><span class='thread-img'><a  href='#'> <img class='media-object' alt='...' src='images/person/person12.jpg'></a></span><span class='thread-name'>我</span></div><div class='thread-aside'><div class='thread-main'><span class='fl'><span></span>"+ now_time +"</span><span class='fr'><span class='thread-num-first'>板凳</span></span></div><div><div class='thread-item-medius'>"+ text +"</div></div><br/><div class='thread-foot'><span class='fl'><a class='thread-btn'>回复</a></span><span class='fr'><a class='tip'>举报</a></span></div></div></div>")

        }




        //获取当前时间
        function getLocalTime(){
            return  new Date().toLocaleString()
        }


        var box_height = $(".media-box").offset().top - 300;             //获得评论区到顶部的偏移量
        var footer_height = $('._footer').offset().top - 490;             //获得页尾到顶部的偏移量

        //监听页面滚动事件,当页面滚动到评论区出现时评论按钮出现
        $(window).scroll(function(){
            var this_scrollTop = $(this).scrollTop();
            if(this_scrollTop>box_height ){
                $(".backtop-box").show();
            }
            else{
                $(".backtop-box").hide();
            }
            if(this_scrollTop > (footer_height)){

                $(".backtop-box").hide();
            }
        });

    }

    //跳转页码数
    function gotoPage(num){

        var number = parseInt(num);
        Fcur_index = (number - 1) * FORUM_ROW;
        PAGE_NUM = number;

        initForum();
        initPageBar();
    }

    //点击上一页
    function prevPage(){
        if(PAGE_NUM <= 1){
            return;
        }
        var numb = parseInt(PAGE_NUM) -1;
        gotoPage(numb);
    }

    //点击下一页
    function nextPage(){
        if(PAGE_NUM >= MAX_PAGE){
            return;
        }
        var numb = parseInt(PAGE_NUM) + 1;
        gotoPage(numb);
    }

    function initPageBar(){

        $('#pagination').empty();
        $('#pagination').append("<li ><a >上一页</a></li>");
        if(MAX_PAGE<=5){
            for(var i = 1;i <= MAX_PAGE; i++){
                $('#pagination').append("<li ><a>"+ i +"</a></li>");
                if(i==PAGE_NUM){
                    $('#pagination li:last').addClass('active');
                }
            }
            $('#pagination').append("<li ><a >下一页</a></li>");
            pageClick();
            return;
        }
        if(PAGE_NUM - 1>= 4){
            $('#pagination').append("<li><a >1</a></li><li><a>...</a></li>")
            for(var i = PAGE_NUM - 2;i <= PAGE_NUM; i++){
                $('#pagination').append("<li ><a >"+ i +"</a></li>");
                if(i == PAGE_NUM)
                    $('#pagination li:last').addClass('active');
            }
        }
        else{
            for(var i = 1;i <= PAGE_NUM; i++){
                $('#pagination').append("<li ><a>"+ i +"</a></li>");
                if(i==PAGE_NUM)
                    $('#pagination li:last').addClass('active');
            }

        }
        if(MAX_PAGE - PAGE_NUM >= 4){
            for(var j = parseInt(PAGE_NUM)+parseInt(1);j <= parseInt(PAGE_NUM)+parseInt(2); j++){
                $('#pagination').append("<li ><a >"+ j +"</a></li>");
            }
            $('#pagination').append("<li><a >...</a></li><li><a>"+ MAX_PAGE+"</a></li>")
        }
        else{
            for(var i = parseInt(PAGE_NUM) + parseInt(1);i <= parseInt(MAX_PAGE); i++){
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

    //评论框显示函数
    function textareaShow(){
        $('.sft').css('display','');
        $('body').css({'overflow':'none','overflow-y':'hidden'});                 //禁止页面的滚动事件
        $('#editor').css({'display':''});
    }

    //点击发表按钮函数
    function sendInfoBtn(name){
        //获取用户填写的文本内容
        text = $('.froala-element p').text();
        $('.froala-element p').text("");
        //向后台发送用户的评论内容
        sendCommentInfo(text,name);
        cancelComment();
    }

    //关闭评论框函数(点击关闭按钮),或者点击取消按钮，取消评论
    function cancelComment(){
        $('#tinymce p').html('');
        $('#editor').css({'display':'none'});
        $('.sft').css('display','none');
        $('body').css({'overflow':'','overflow-y':''});
    }


    //像后台发送评论的内容函数
    function sendCommentInfo(element,name){

        $.ajax({
            type: "post",
            url: "xxx.php",                                                                 // 向后台发送信息的地址
            data: {
                action: 'myCommentText',
                videoName: txt,                                                               //视频的名称
                netFriendName:name,                                                         //网友的名字
                commentInfo:element,
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数
            }
        });
    }
})