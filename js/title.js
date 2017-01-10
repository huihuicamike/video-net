
$(function(){

    //用来存放后端发来的试题信息
    var arrs = [
        ['1.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(单选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['2.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(多选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['3.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(单选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['4.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(单选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['5.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(多选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['6.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(单选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['7.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(多选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['8.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(单选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['9.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(多选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['10.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(单选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['11.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(多选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
        ['12.博士作为官名最早出现在：请在以下勾选你认为正确的答案',' ','(单选)','A:秦',' ','B:汉',' ','C:唐',' ','D:汉',' '],
    ]

    function question(){
        var b = window.localStorage.getItem('title');      //将储存在本地变量里的考试试卷的题目拿出来
            window.localStorage.removeItem('title');     //将本地变量清除
        //后台将题目传到前端
        $.ajax({
            type:"post",
            url:"xxx.php",      // 向后台发送信息的地址
            data:{
                action:'title'+ b +'',    //考试书卷的名字
                pageNum:CUR_PAGE,    //向后台请求题目的页码
            },
            dataType:"json",
            success:function(res){

                arrs.length = 0;     //将数组清空
                                     // 成功时执行的回调函数

            }
        });

    }


    var cur_index = 0;
    var LIST_NUM = 15;     //每页放15道题
    var CUR_PAGE = 1;      //当前页码
    var MAX_PAGE = Math.ceil(arrs.length/15);    //最大页码

    //增加一个题目
    function addEle(arr_index){
        $('.box').append("<div class='question'> <h5>"+ arrs[arr_index][0] +"<img alt='' src='"+arrs[arr_index][1]  +"'><span>"+ arrs[arr_index][2] +"</span></h5> <p>"+ arrs[arr_index][3] +"<img alt='' src='"+ arrs[arr_index][4] +"'></p> <p>"+ arrs[arr_index][5] +"<img alt='' src='"+ arrs[arr_index][6] +"'></p> <p>"+ arrs[arr_index][7] +"<img alt='' src='"+ arrs[arr_index][8] +"'></p> <p>"+ arrs[arr_index][9] +"<img alt='' src='"+ arrs[arr_index][10] +"'></p> </div> <div><div style='display:none' class='resolve'>解析：</div><div class='analysis' style='display: inline-block'></div></div>")
    }

    function initPage(){

        question();
        $('.box').empty();
        if(cur_index >= arrs.length){
            cur_index = 0;
        }

        for(var i = 0;(i < LIST_NUM) && (cur_index < arrs.length); i++){
            addEle(cur_index);
            cur_index ++;
        }

        //判断传来的提示单选还是多选，给他们加对应的单选按钮或复选框
        $('h5 span').each(function(i){

            var radi = $(this).text() == '(单选)';

            if($(this).text() == '(单选)'){
                $(this).parent().parent().find('p').append("<input name='"+ i +"' type='radio' onclick='$(this).blur()'/>");
            }
            else{
                $(this).parent().parent().find('p').append('<input type="checkbox" onclick="$(this).blur()"/>')
            }
        })
    }

    function prevPage(){
        var p = CUR_PAGE -1;
        if(p < 1)
            return;
        gotoPage(p);
    }

    function nextPage(){
        var p = parseInt(CUR_PAGE) +parseInt(1);
        if(p >MAX_PAGE)
            return;
        gotoPage(p);
    }

    function gotoPage(num){
        var number = parseInt(num);
        cur_index = (number - 1) * LIST_NUM;
        CUR_PAGE = number;
        initPage();
        initPageBar();
        question();
    }

    initPage();
    initPageBar();

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

    //获取问题的答案
    function chiceAnswer(number){
        var ans = '';
        var num = parseInt(number) - 1;       //转换题号

        $(".question:eq("+ num +")").each(function(){
            //alert($(this).find('input').length)
            $(this).find('input').each(function(i){

                if(true == $(this).prop('checked')){
                    ans += $(this).parent().text()[0];         //答案的选项

                }

            })
        })
        return number + ':' + ans + ',';
    }


    //存放正确答案及其解析
    var _arrs = [
            ['c.jlfoieojfmkpopo'],
            ['c.jlfoieojfmkpopo'],
            ['c.jlfoieojfmkpopo'],
            ['c.jlfoieojfmkpopo'],
            ['c.jlfoieojfmkpopo'],
            ['c.jlfoieojfmkpopo'],
        ]


    //点击提交按钮
    $("#submit").click(function(){
        var text = '';
        var len = $('#submit').prev().find('.question').length;      //算出这份题有多少选择题
        for(var i = 1; i <= len; i++){
            text += chiceAnswer(i);                 //将问题的答案组成字符
        }

        //前端将题目答案传给后端，后端将正确答案及解析传过来
        $.ajax({
            type:"post",
            url:"xxx.php",      // 向后台发送信息的地址
            data:{
                action:'title_answer',
                txt:text,    //向后台请求题目的页码
            },
            dataType:"json",
            success:function(res){
                                     //后端返回了正确答案及解析，将其放在_arrs数组里
            }
        });
    })


})