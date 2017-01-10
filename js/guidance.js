/**
 * Created by Jason on 2016/6/29.
 */
$(function(){

    var name = window.localStorage.getItem('activeName');

    window.localStorage.removeItem('activeName');

    //用来存放页面初始化用到的数据
    var arrs = ["何公洲","野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","近年来，先后出版发行有《公洲墨迹》《野夫小品集》《于右任书法技耍》《荣宝斋何公洲画集》《野夫古装人物技法》等。并先后在全国政协礼堂，荣宝斋，北京炎黄博馆，济南王雪涛纪念馆，台湾高雄举办个展","采用微信群线上视频或者语音回答提问的方式。","何公洲","国内知名书法家","对于书法相关知识的解答，一级作品的品鉴与指导等。","付费报名参加后请联系客服加入专家指导微信群。","对于书法相关知识的解答，一级作品的品鉴与指导等。","2016-8-10","对于书法相关知识的解答，二级作品的品鉴与指导等。","2016-8-10","对于书法相关知识的解答，三级作品的品鉴与指导等。","2016-8-10","对于书法相关知识的解答，四级作品的品鉴与指导等。","2016-8-10","对于书法相关知识的解答，五级作品的品鉴与指导等。","2016-8-10"]

    askGuidance();

    function askGuidance(){
        $.ajax({
            type: "post",
            url: "xxx.php",                                                                 // 向后台发送信息的地址
            data: {
                action: 'expertGuidance',
                activeName:name,                                                             //活动的名字,如果name为null则，后台传送我们推荐的专家活动
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数
            }
        });
    }


    //初始化页面数据
    //专家名字
    $('#expert_name').text(arrs[0]);
    //专家介绍
    $('.brief').text(arrs[1]);
    //主要成就和作品
    $('#works').text(arrs[2]);
    //活动方式
    $('#style').text(arrs[3]);
    //指导专家
    $('#guide').text(arrs[4]);
    //认证专家
    $('#identify').text(arrs[5]);
    //指导范围
    $('#scope').text(arrs[6]);
    //注意事项
    $('#notes').text(arrs[7]);
    //近期活动
    //活动1
    $('.recent-activities a').eq(0).find('.active').text(arrs[8]);
    $('.recent-activities a').eq(0).find('.active-date').text(arrs[9]);
    //活动2
    $('.recent-activities a').eq(1).find('.active').text(arrs[10]);
    $('.recent-activities a').eq(1).find('.active-date').text(arrs[11]);
    //活动3
    $('.recent-activities a').eq(2).find('.active').text(arrs[12]);
    $('.recent-activities a').eq(2).find('.active-date').text(arrs[13]);
    //活动4
    $('.recent-activities a').eq(3).find('.active').text(arrs[14]);
    $('.recent-activities a').eq(3).find('.active-date').text(arrs[15]);
    //活动5
    $('.recent-activities a').eq(4).find('.active').text(arrs[16]);
    $('.recent-activities a').eq(4).find('.active-date').text(arrs[17]);

    //设置专家指导区的高度
    var he = $('.box:first').height();
    $('.guide').css('height',he);

  //将活动的名字存在全局变量中
    $('.active').parent().each(function(){
        $(this).click(function(){
           var n = $(this).find('.active').text();
            window.localStorage.setItem('activeName',n);

            var h = window.location.href;
            window.open("" + h);
        })
    })
})

