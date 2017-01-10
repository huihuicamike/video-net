
$(function() {

    //将本页试题的类型重全局变量中拿出来
    var title = window.localStorage.getItem('title');

    //用来存放有多少套试题的数组
    var arrs = ["初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套","初中书法试题第一套"];

    //用来存放书法大赛宣传图、最新动态内容区的数据
    var arrs2 = ["images/work1.jpg", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源", "中国汉字的起源",]

    //用来存放大家都在谈内容区胡数据
    var arrs3 = ["进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可","进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可", "进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可", "进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可", "进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可", "进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可", "进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可", "进入全国书法总决赛的大承学员，6月5日18：00在大承文化前台报名即可",]

    var cur_index = 0;                 //数组中的索引
    var COLUMN_NUM = 6;                //每行的数目
    var ROW_NUM = 5;                  //每页的行数
    var CUR_PAGE = 1;                 //当前加载了试题的页码，默认是第一页
    var MAX_PAGE = Math.ceil(arrs.length / ROW_NUM / COLUMN_NUM);                      //最大的页数

    //向后端请求页面初始化胡数据
    $.ajax({
        type: "post",
        url: "xxx.php",                         // 向后台发送信息的地址
        data: {
            action: title,                        //试题的类型，中考、高考
            pageNumber:CUR_PAGE,                 //试题的页码
        },
        dataType: "json",
        success: function (res) {
                                    //将后台传来的数据放入数组arrs中

        }
    });

    $('.title').text(title);                                           //初始化此试题链表是中考还是高考的
    //alert(title)
    $('.advertising-map  >img').attr('src',arrs2[0]);                  //初始化书法大赛宣传图

    $('.news p').each(function(i){
        $(this).find('i').text(i+1);
        $(this).find('span').text(arrs2[i+1]);
    })
    $('.activities a').each(function(i){
        $(this).text(arrs3[i])
    })


//alert()
    function addEle(arr_index) {
        $('._box > div:last').append("<a class='col-md-12' href='title.html'>初中书法试题</a>");
    }

    function addRow() {
        $('._box').append(" <div class='row list' ></div>");
        for (var i = 0; (i < COLUMN_NUM) && (cur_index < arrs.length); i++) {
            addEle(cur_index);
            cur_index++;
        }
    }

    function initPage() {
        if (cur_index >= arrs.length)
            cur_index = 0;

        $('._box').html(' ');

        for (var i = 0; i < ROW_NUM; i++) {
            addRow();
            if (cur_index >= arrs.length)
                break;
        }
        $('._box div:last').css('border-bottom', '1px solid gray');

        $('.text').css({'cursor': 'pointer', 'text-decoration': 'none'});      //设置开始考试的样式


        //点击开始考试按钮时，将试卷的名字保存下来
        $('.text').each(function () {

            $(this).click(function () {

                $(this).blur();
                window.localStorage.setItem('title', $(this).prev().text());     //将考试的题目存储在本地变量里

            })
        })
    }

    initPage();

    function prevPage() {
        var p = CUR_PAGE - 1;
        if (p < 1)
            return;
        gotoPage(p);
    }

    function nextPage() {
        var p = parseInt(CUR_PAGE) + parseInt(1);
        if (p > MAX_PAGE)
            return;
        gotoPage(p);
    }

//指定跳转页数
    function gotoPage(numbe) {
        var number = parseInt(numbe);
        cur_index = 0;
        //cur_index2 = (number - 1) * 3;
        initPage();
        CUR_PAGE = number;
        initPageBar();
    }

    initPageBar();


//翻页之上一页
    $('#prev-page').click(function () {
        prevPage();
    })
//翻页之下一页
    $('#next-page').click(function () {
        nextPage();
    })

    function initPageBar() {
        $('#pagination').empty();
        $('#pagination').append("<li ><a >上一页</a></li>");
        if (MAX_PAGE <= 5) {
            for (var i = 1; i <= MAX_PAGE; i++) {
                $('#pagination').append("<li ><a>" + i + "</a></li>");
                if (i == CUR_PAGE) {
                    $('#pagination li:last').addClass('active');
                }
            }
            $('#pagination').append("<li ><a >下一页</a></li>");
            pageClick();
            return;
        }
        if (CUR_PAGE - 1 >= 4) {
            $('#pagination').append("<li><a >1</a></li><li><a>...</a></li>")
            for (var i = CUR_PAGE - 2; i <= CUR_PAGE; i++) {
                $('#pagination').append("<li ><a >" + i + "</a></li>");
                if (i == CUR_PAGE)
                    $('#pagination li:last').addClass('active');
            }
        }
        else {
            for (var i = 1; i <= CUR_PAGE; i++) {
                $('#pagination').append("<li ><a>" + i + "</a></li>");
                if (i == CUR_PAGE)
                    $('#pagination li:last').addClass('active');
            }

        }
        if (MAX_PAGE - CUR_PAGE >= 4) {
            for (var j = parseInt(CUR_PAGE) + parseInt(1); j <= parseInt(CUR_PAGE) + parseInt(2); j++) {
                $('#pagination').append("<li ><a >" + j + "</a></li>");
            }
            $('#pagination').append("<li><a >...</a></li><li><a>" + MAX_PAGE + "</a></li>")
        }
        else {
            for (var i = parseInt(CUR_PAGE) + parseInt(1); i <= parseInt(MAX_PAGE); i++) {
                $('#pagination').append("<li ><a >" + i + "</a></li>");
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

        //$('#senior').click(function(){
        //    window.localStorage.setItem('titleSenior',$(this).text());
        //    $(this).parent().addClass('active');
        //    $(this).parent().siblings().removeClass('active');
        //})
        //
        //$('#high').click(function(){
        //    window.localStorage.setItem('titleHigh',$(this).text());
        //    $(this).parent().addClass('active');
        //    $(this).parent().siblings().removeClass('active');
        //})
    }
})