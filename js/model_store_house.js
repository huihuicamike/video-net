/**
 * Created by Jason on 2016/8/4.
 */
$(function(){

    //定义全局变量
    var ROW_NUM = 5;                             //每页的行数
    var COLUNM_NUM = 5;                          //每页的列数
    var cur_index = 0;                           //指向数组的索引
    var MAX_PAGE;                          //最大的页码数
    var CUR_PAGE = 1;                              //当前显示的页码数

    //数组用来存放初始化页面信息的数据
    var arrs = [
        ["images/store_house/wangjianxin.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","王建新","首都师范大"],
        ["images/store_house/shenpeng.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","沈鹏","首都师范大"],
        ["images/store_house/hegongzhou.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","何公洲","首都师范大"],
        ["images/store_house/menghai.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","孟海","首都师范大"],
        ["images/store_house/wangmengchang.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","王孟昌","首都师范大"],
        ["images/store_house/linsanzhi.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","林散之","首都师范大"],
        ["images/knownmaster/tch2.jpg"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","李优良","首都师范大"],
        ["images/store_house/baihe.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","白鹤","首都师范大"],
        ["images/knownmaster/tch5.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","孟云飞","首都师范大"],
        ["images/knownmaster/tch1.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","朱中原","首都师范大"],
        ["images/knownmaster/tch3.jpg"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","冷万里","首都师范大"],
        ["images/knownmaster/pic6.jpg"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","王岳川","首都师范大"],
        ["images/knownmaster/tch5.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","孟云飞","首都师范大"],
        ["images/knownmaster/tch6.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","欧阳中石","首都师范大"],
        ["images/knownmaster/tch7.png"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","冷万里","首都师范大"],
        ["images/knownmaster/tch9.jpg"," 野夫（何公洲），1956年出生于河南辉县，硕士学历，副教授毕业于首都师范大学。从艺三十五年来，书法先后师从于欧阳中石先生和朱培尔先生。绘画从师于戴郭邦先生。","威锋","首都师范大"],
 ]


    MAX_PAGE = Math.ceil(arrs.length / (ROW_NUM * COLUNM_NUM) );

    function addEle(index){
        $('#master_library >div:last').append("<div class='col-md-3'> <div class='_box_b'> <img src='"+ arrs[index][0] +"'> <div class='hid2'> <p style='margin-top:10px;font-size:12px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ arrs[index][1] +" </p> </div> <div class='bottom-course2'> <p><label>姓名：</label><span>"+ arrs[index][2] +"</span></p> <p><label>任职学校：</label><span>"+ arrs[index][3] +"</span></p> </div> </div> </div>")
    }

    function addRow(){
        $('#master_library').append("<div class=\"row _box_class\"></div>");
        for(var i = 0;(i < COLUNM_NUM) && (cur_index < arrs.length); i++){
            addEle(cur_index);
            cur_index ++;
        }
    }


    function initPage(){

        $('#master_library').html('');
        for(var i = 0;(i < ROW_NUM) && (cur_index < arrs.length); i++){
            addRow();
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

    initPage();
    initPageBar()



    //跳转页码数
    function gotoPage(num){

        askNextpage();

        var number = parseInt(num);
        cur_index = 0;
        CUR_PAGE = number;

        initPage();
        initPageBar();
    }

    //点击上一页
    function prevPage(){
        if(CUR_PAGE <= 1){
            return;
        }
        var numb = parseInt(CUR_PAGE) -1;
        gotoPage(numb);
    }

    //点击下一页
    function nextPage(){

        if(CUR_PAGE >= MAX_PAGE){
            return;
        }
        var numb = parseInt(CUR_PAGE) + 1;
        gotoPage(numb);
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

    function askNextpage(){
        $.ajax({
            type: "post",
            url: "xxx.php",                                                                 // 向后台发送信息的地址
            data: {
                action: 'nextPageStoreHouse',
            },
            dataType: "json",
            success: function (res) {
                // 成功时执行的回调函数
            }
        });
    }

})