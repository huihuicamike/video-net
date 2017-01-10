/**
 * Created by Jason on 2016/8/2.
 */
$(function(){

    //存放轮播图的数组
    var arrs = ["images/banner5.jpg","images/banner4.jpg","images/banner3.jpg","images/banner2.jpg","images/banner1.jpg"];

    //初始化轮播图
    $('div[role="listbox"] .item').each(function(i){
        $(this).find('img').attr('src',arrs[i]);
    })

    //存放今日推荐的数组
    var arrs_today = ["关于创作的那些事","创作过程中令人难忘的事","教你如何爱上书法"]

    //用来存放书法大家作品的数组
    var arrs2 = [
        ["images/free_class/work1.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work2.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work3.jpeg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work4.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work5.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work6.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work7.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work8.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work1.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work2.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work3.jpeg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work4.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work5.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work6.jpg","衣冠图","何公州教师","5000次","500.00"],
        ["images/free_class/work7.jpg","衣冠图","何公州教师","5000次","500.00"],
    ]

    //定义全局变量
    var LAST_ELE = '';

    //定义一些全局变量
    var PAGE = 1;                                 //页码
    var cur_index = 0;
    var COLUMN    = 5;                             //列数
    var ROW = 3;                                  //行数
    var MAX_PAGE = Math.ceil(arrs2.length / 18);

    //向后端请求数据
    function askData(number){
        $.ajax({
            type:"post",
            url:"xxx.php",      // 向后台发送信息的地址
            data:{
                action:'personalTdilor',
                rowNum:ROW,
                columnNum:COLUMN,
                pageNum:number,                   //请求的页码数
            },
            dataType:"json",
            success:function(res){
                //将后台传来的数据放入数组arrs2中

            }
        });
    }

    askData(PAGE);

    // 增加一个元素
    function addEle(index){


        $('.outwrap-content >div:last').append("<div class=\"col-md-3\"> <div class=\"_box_b\"> <img src=\""+ arrs2[index][0] +"\"> <div class=\"hid\"> <p><label>作品名称：</label><span class=\"work-name\">"+ arrs2[index][1] +"</span></p> <p><label>作品作者：</label><span class='author'>"+ arrs2[index][2] +"</span></p> <p><label>购买次数：</label><span>"+ arrs2[index][3] +"</span></p> </div> <div class=\"bottom-course\"><label>价格：</label><span>￥"+ arrs2[index][4] +"</span><a href='work-order.html'>马上定制</a></div> </div> </div>")
    }

    //增加一行元素
    function addRow(){
        $('.outwrap-content').append(" <div class=\"contentwrap allshadow web clearfix row _box_class\"></div>");

        if($('.classify ').length == 0){
            $('.outwrap-content >div:last').append("<div class=\"col-md-4 classify clearfix\"> <p class=\"title\"><span>今日</span><br>精彩推荐</p> <a class=\"detile\"> 详情展示 ></a> <div class=\"raise-weapon\"> <a  target=\"_blank\">关于创作的那些事</a> <a  target=\"_blank\" >创作过程中令人难忘的事</a> <a  target=\"_blank\">教你如何爱上书法</a> </div>");

            for(var i = 0; (i < 8) && (cur_index < arrs2.length); i++) {

                addEle(cur_index);
                cur_index++;
            }
            return;
        }

        for(var i = 0; (i < COLUMN) && (cur_index < arrs2.length); i++){
            addEle(cur_index);
            cur_index ++;
        }
    }



    //初始化整页元素
    function initPage(){
        if(cur_index >= arrs2.length)
            cur_index=0;

        $('.outwrap-content').html(' ');

        for(var i=0;i<ROW;i++)
        {
            addRow();
            if(cur_index >= arrs2.length)
                break;
        }

        //鼠标划过课程展示部分时的动态效果
        //鼠标离开恢复
        $('.allshadow .col-md-3').each(function(){

            $(this).hover(function(){

                $(this).find('.hid').css('top','28px');
            });
            $(this).mouseleave(function(){
                $(this).find('.hid').css('top','90px');
            })
        })
    }

    //指定跳转页数
    function gotoPage(num){

        //向后端请求数据
       askData(num);

        var number = parseInt(num);                                 //将字符串转换成数字
        if(num < 1){
            return;
        }

        cur_index = 0;
        PAGE = number;                                         //设置当前的页码
        initPage();
        initPageBar();
    }

    //上一页
    function prevPage(){
        var p = PAGE -1;
        if(p < 1){
            return;
        }
        gotoPage(p);
    }

    //下一页
    function nextPage(){
        var p = parseInt(PAGE) +parseInt(1);
        if(p >MAX_PAGE)
            return;
        gotoPage(p);
    }
    //
    initPage();
    initPageBar();

    //点击上一页
    $('#prev').click(function(){

        prevPage();
    })

    //点击下一页
    $('#next').click(function(){

         nextPage();
    })

    //翻页导航条
    function initPageBar(){

        $('#pagination').empty();
        $('#pagination').append("<li ><a >上一页</a></li>");
        if(MAX_PAGE<=5){
            for(var i = 1;i <= MAX_PAGE; i++){
                $('#pagination').append("<li ><a>"+ i +"</a></li>");
                if(i==PAGE){
                    $('#pagination li:last').addClass('active');
                }
            }
            $('#pagination').append("<li ><a >下一页</a></li>");
            pageClick();
            return;
        }
        if(PAGE - 1>= 4){
            $('#pagination').append("<li><a >1</a></li><li><a>...</a></li>")
            for(var i = PAGE - 2;i <= PAGE; i++){
                $('#pagination').append("<li ><a >"+ i +"</a></li>");
                if(i == PAGE)
                    $('#pagination li:last').addClass('active');
            }
        }
        else{
            for(var i = 1;i <= PAGE; i++){
                $('#pagination').append("<li ><a>"+ i +"</a></li>");
                if(i==PAGE)
                    $('#pagination li:last').addClass('active');
            }

        }
        if(MAX_PAGE - PAGE >= 4){
            for(var j = parseInt(PAGE)+parseInt(1);j <= parseInt(PAGE)+parseInt(2); j++){
                $('#pagination').append("<li ><a >"+ j +"</a></li>");
            }
            $('#pagination').append("<li><a >...</a></li><li><a>"+ MAX_PAGE+"</a></li>")
        }
        else{
            for(var i = parseInt(PAGE) + parseInt(1);i <= parseInt(MAX_PAGE); i++){
                $('#pagination').append("<li ><a >"+ i +"</a></li>");
            }
        }
        $('#pagination').append("<li ><a >下一页</a></li>");
        pageClick();
    }

    function pageClick() {
        $('#page li').each(function () {
            $(this).css('cursor', 'pointer');
            $(this).click(function() {
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

    //点击马上订制按钮
    $('.bottom-course a').click(function(){

        var author_name = $(this).parent().prev().find('.author').text();                           //作者名字
        var work_name = $(this).parent().prev().find('.work-name').text();                      //作品名字

        //将作者名字和作品名字存放在全局变量中
        window.localStorage.setItem('authorName',author_name);
        window.localStorage.setItem('workName',work_name);
    })
})