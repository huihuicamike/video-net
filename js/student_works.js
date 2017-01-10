/**
 * Created by Jason on 2016/5/9.
 */
$(window).load(function() {
    //导航栏点击后的背景颜色
    $('.mynav li a').each(function(){
        $(this).click(function(){

            $(this).addClass('active');
            //$(this).removeClass('noactive');
            //alert($(this).parent().parent().find('a').length)
            //$(this).parent().parent().find('a:gt(0)').addClass('noactive');
            //$(this).parent().parent().find('a:gt(0)').removeClass('active');
        })
    })


    //存放学生作品信息
    var arrs = [
        ["images/student_works/u28.png",'huihui',23,'两年','优秀','images/student_works/u48.jpg'],
        ["images/student_works/u28.png",'huihui',23,'两年','优秀','images/student_works/u48.jpg'],
    ]

    var COL_NUM = 2;        //学生作品数
    var Vcur_index = 0

    //增加一名学生作品展示
    function addList(index){
        $('._work').append("<div class='col-md-6'><a class='other-video'><img src='"+ arrs[index][0] +"'><div class='info' style='display:none;'><div><label>学生：</label><span>"+ arrs[index][1] +"</span></div><div><label>姓名：</label><span>"+ arrs[index][2] +"</span></div><div><label>学习时间：</label><span>"+ arrs[index][3] +"</span></div><div><label>年龄：</label><span>"+ arrs[index][4] +"</span></div></div></a></div><div class='col-md-5'><a class='other-video'><img src='"+ arrs[index][5] +"'></a></div>")
        var h = $('._work .col-md-6').height();
        $('._work .col-md-5').height(h);
        var h2 = $('._work .col-md-5 img').height() / 2;

        $('._work .col-md-5 img').css('margin-top',"-"+h2+"px")
    }


    //初始化学生作品展示这一块
    function initList(){
        if(Vcur_index >= arrs.length){
            return;
        }

        $('#sw').append("<div class='row _work'></div>")
        for(var i = 0; i < COL_NUM; i++){
            addList(Vcur_index);
            Vcur_index++;
        }
    }

    initList();

    //存放优秀学生作品信息
    var _arrs = [
        ['images/student_works/u80.jpg','huihui','20岁','隶书课','10次'],
        ['images/student_works/u80.jpg','camike','20岁','行书课','10次'],
        ['images/student_works/u80.jpg','hello','20岁','楷书课','10次'],
        ['images/student_works/u80.jpg','world','20岁','草书课','10次'],
    ]

    var LIST_NUM = 4;       //优秀学生作品的个数
    var cur_index = 0;
    var WORKS_ROW = 2;

    //增加一个作品展示元素
    function addELeWork(index){

        $('.works:last').append("<div class='col-md-2'><a class='other-video'><img src='"+ _arrs[index][0] +"'><div class='shadow' style='display: none'><div><label style='margin-top:5px'>"+ _arrs[index][1] +"</label><span>"+ _arrs[index][2] +"</span></div><div><label>"+ _arrs[index][3] +"：</label><span>"+ _arrs[index][4] +"</span></div></div></a></div>")
    }

    //增加一行作品展示元素
    function addRowWork(){
        for(var i = 0; (i < LIST_NUM) && (cur_index < _arrs.length); i++){

            addELeWork(cur_index);
            cur_index ++;
        }
    }

    //初始化作品展示这一块
    function initWork(){
        if(cur_index >= arrs.length){
            return;
        }

        $('#work').append("<div class='row box works'></div>")
        for(var i = 0; i < WORKS_ROW; i++){
            addRowWork();
        }
    }

    initWork();

    //学生作品展示部分鼠标滑过时的效果展示
    $('.works .col-md-2').each(function(){
        $(this).hover(function(){
            $(this).find('.shadow').toggle(100);
        })
    })

    //学生作品展示部分鼠标滑过时的效果展示
    $('._work .col-md-6').each(function(){
        $(this).hover(function(){
            $(this).find('.info').toggle(100);
        })
    })


    //向后台请求学生作品信息页面
    $.ajax({
        type:"post",
        url:"xxx.php",      // 向后台发送信息的地址
        data:{
            action:'student_works',     //向后台请求学生作品信息

        },
        dataType:"json",
        success:function(res){
                                         //请求成功后的数据放在arrs数组和_arrs数组中
        }
    });
})


