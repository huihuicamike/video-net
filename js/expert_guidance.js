/**
 * Created by Jason on 2016/6/28.
 */
$(function(){
    var name = window.localStorage.getItem('expertName');                     //专家的名字

    //定义数组，用来存放页面初始化用到的数据
    var arrs = ["images/zhangzhanli.jpg","images/zhangzhanli.jpg","images/zhangzhanli.jpg","images/zhangzhanli.jpg","images/zhangzhanli.jpg","images/zhangzhanli.jpg",'国内知名书法家何公洲做客指导',"何公洲老师，著名书法家，老一辈书法家欧阳中石的学生。","100元","何公洲","野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","近年来，先后出版发行有《公洲墨迹》《野夫小品集》《于右任书法技耍》《荣宝斋何公洲画集》《野夫古装人物技法》等。并先后在全国政协礼堂，荣宝斋，北京炎黄博物馆，济南王雪涛纪念馆，台湾高雄举办个展","本次活动主要针对广大书法爱好者","练习书法有一段时间了，最近是不是觉得无论自己怎么努力，感觉都没有进步了呢？那就加入我们吧，这里有全国著名的书法家亲临指导，让您的学艺之路豁然明亮，找对方向，才能事半功倍！"]

    $.ajax({
        type: "post",
        url: "xxx.php",                      // 向后台请求信息的地址
        data: {
            action: 'askExpertGuidance',
            expertName:name,                      //专家的名字

        },
        dataType: "json",
        success: function (res) {
            // 成功时执行的回调函数

            //将后端返回的信息放入数组里
        }
    });

    $('.advertising-map').attr('src',arrs[0]);                              //设置专家的大宣传图

    //设置专家的小宣传图
    $('.small-maps img').eq(0).attr('src',arrs[1]);
    $('.small-maps img').eq(1).attr('src',arrs[2]);
    $('.small-maps img').eq(2).attr('src',arrs[3]);
    $('.small-maps img').eq(3).attr('src',arrs[4]);
    $('.small-maps img').eq(4).attr('src',arrs[5]);

    //题目
    $('.guidance h5').text(arrs[6]);
    //专家简介
    $('#summary').text(arrs[7]);
    //费用
    $('.fees span').text(arrs[8]);
    //专家名字
    $('.name').text(arrs[9]);
    //专家简介
    $('#brief_introduct').text(arrs[10]);
    //主要成就
    $('#achievement').text(arrs[11]);
    //活动介绍
    $('#active_brief label').text(arrs[12]);
    //宣传语
    $('#conduct').text(arrs[13]);


    //表单中全部城市下拉选项单的宽度
    var wi = $('input[name="user"]').width();
    $('#city').css('width',wi);

    //点击专家介绍和活动介绍进行的切换
    $('.active a:first').click(function(){
        $(this).addClass('actived').removeClass('un-actived');
        $(this).next().addClass('un-actived').removeClass('actived');

        $('.events:first').show(50);
        $('.events:last').css('display','none')
    })

    $('.active a:last').click(function(){
        $(this).addClass('actived').removeClass('un-actived');
        $(this).prev().addClass('un-actived').removeClass('actived');

        $('.events:last').show(50);
        $('.events:first').css('display','none')
    })


    var username = $("input[name='user']");                                    //获得姓名
    var userphone = $("input[name='phone']");                                  //获得手机号
    //点击立即购买进行提交表单
     $('#buy').click(function(){
        var city = $("#city option[selected='selected']").val();                   //获得所在城市
         $('.note').remove();

         if($(username).val() == ''){
             var errorMsg = '姓名不能为空';
             $("input[name='user']").parent().append('<span class="note" style="display: block;color: red;font-size: 10px;text-align:left;">'+errorMsg+'</span>');
             return;
         }

         if($(userphone).val() == ''){
             var errorMsg = '手机号不能为空';
             $("input[name='phone']").parent().append('<span class="note" style="display: block;color: red;font-size: 10px;text-align:left;">'+errorMsg+'</span>');
             return;
         }
         if(!($(userphone).val() && /^1[3|4|5|8]\d{9}$/.test($(userphone).val()))){
             var errorMsg = '手机号不合法';
             $("input[name='phone']").parent().append('<span class="note" style="display: block;color: red;font-size: 10px;text-align:left;">'+errorMsg+'</span>');
             return;
         }

             $(this).attr('href','order.html');


         //将用户所填的信息保存到全局变量中
         window.localStorage.setItem('username',username);
         window.localStorage.setItem('usercity',city);
         window.localStorage.setItem('userphone',userphone);

     })

    //输入框获得焦点将提示信息隐藏
    $(username).focus(function(){
        $(this).parent().find('.note').remove();
    })
    $(userphone).focus(function(){
        $(this).parent().find('.note').remove();
    })
})