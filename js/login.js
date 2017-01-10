/**
 * Created by Jason on 2016/5/13.
 */
$(function(){
  //验证注册信息
    //生成验证码
    function get_verification_code(len){
        var code = "";
        for(var i = 0;i < len; i++ ){
            code += Math.floor(Math.random() * 10);
        }
        return code;
    }

    //alert(get_verification_code(6));
//向用户发送验证码
//http://222.73.117.138:7891/mt?un=N5901404&pw=6c800e62&da=18335161563&sm=[baixunaa]hi huihui&dc=15&rd=1&tf=3&rf=2

    $('#get_check_num').click(function(){
        v_code =  get_verification_code(6);

        var errorMsg = '验证码已发送，请查收注意';
        $("#get_check_num").parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px;margin-left: 50%">'+errorMsg+'</span>');

        setTimeout(function(){
            $('#get_check_num').parent().children('span').remove();
        },1000)

        //$.ajax({
        //    type:"GET",
        //    url: "http://222.73.117.138:7891/mt",
        //    dataType:'text',
        //    data:{
        //        un :  "N5901404",
        //        pw :  "6c800e62",
        //        da:   $('#number').val(),
        //        sm :  "【百讯天下】" + v_code ,
        //        dc : "15",
        //        rd : "1",
        //        tf : "3",
        //        rf : "2",
        //    },
        //    success: function (data) {
        //        alert(data);
        //    }
        //});
    });


    //获得焦点时触发
    //将打出的提示信息影藏
    $('#number').focus(function(){
        $('#number').parent().children('span').remove();
    });
    $('#check_num').focus(function(){
        $('#check_num').parent().children('span').remove();
    });
    $('#password').focus(function(){
        $('#password').parent().children('span').remove();
    });


    //加载和刷新页面时，将之前用户所填的信息去掉
    $('#number').attr('value','');
    $('#check_num').attr('value','');
    $('#password').attr('value','');


    //点击提交按钮时进行的表单验证
    $('#_submit_login').click(function(){

        //清空错误提示信息
        $('#number').parent().children('span').remove();
        $('#check_num').parent().children('span').remove();
        $('#password').parent().children('span').remove();

        if( $('#number').val()==""){
            var errorMsg = '手机号必填';
            $("#number").parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }
        if( $("#check_num").val()==""){
            var errorMsg = '验证码必填';
            $("#check_num").parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }
        if( $("#password").val()==""){
            var errorMsg = '密码必填';
            $("#password").parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }
        var user = $('#number').val();
        if(!(user && /^1[3|4|5|8]\d{9}$/.test(user))){
            var errorMsg = '手机号不合法';
            $('#number').parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }

        //验证码验证
        if(($('#check_num').val() != v_code)){
            var errorMsg = '验证码不正确';
            $(this).parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }

        //密码的验证
        var p = $('#password').val();
        if(!(/^[a-zA-Z]\w{5,10}$/.test(p))){
            var errorMsg = '密码必须以字母开头，长度在6-11之间，只能包含字符、数字和下划线';
            $('#password').parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }

        else{
            $.ajax({
                type:"post",
                url:"xxx.php",      // 向后台发送用户注册的地址
                data:{
                    action:'regaister',
                    password:$('#password').val(),
                    phoneNum:$('#number').val(),         //将用户的手机号打包
                    remember:$("#check").prop('checked'),  //是否记住密码   true,false
                },
                dataType:"json",
                success:function(res){
                    // 成功时执行的回调函数

                    //登录成功，返回当前页面,登录框隐藏，遮罩层隐藏
                    $('.registerlogin').css('display','none');
                    $('.sft').css('display','none');
                }
            });
        };
    })



    //登录页面验证

    //加载和刷新页面时，将之前用户所填的信息去掉
    $('#phone').attr('value','');
    $('#_pass').attr('value','');


    //获得焦点时触发
    //将打出的提示信息影藏
    $('#phone').focus(function(){
        $('#phone').parent().children('span').remove();
    });
    $('#_pass').focus(function(){
        $('#_pass').parent().children('span').remove();
    });

    //点击登录按钮后进行的表单验证
    $('#_login').click(function(){

        //将之前所有的错误信息清除掉
        $('#phone').parent().children('span').remove();
        $('#_pass').parent().children('span').remove();

        //手机号和密码不能为空
        if( $('#phone').val()==""){
            var errorMsg = '手机号必填';
            $("#phone").parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }
        if( $("#_pass").val()==""){
            var errorMsg = '密码必填';
            $("#_pass").parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }
        var user = $('#phone').val();
        if(!(user && /^1[3|4|5|8]\d{9}$/.test(user))){
            var errorMsg = '手机号不合法';
            $('#phone').parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }
        //密码的验证
        var p = $('#_pass').val();
        if(!(/^[a-zA-Z]\w{5,10}$/.test(p))){
            var errorMsg = '密码必须以字母开头，长度在6-11之间，只能包含字符、数字和下划线';
            $('#_pass').parent().append('<span style="background-color: white;display: block;color: red;font-size: 10px">'+errorMsg+'</span>');
            return;
        }

        //表单验证通过，向后台发送数据
        else{
            $.ajax({
                type:"post",
                url:"xxx.php",      // 向后台发送用户注册的地址
                data:{
                    action:'login',
                    password:$('#_pass').val(),          //将用户的密码打包
                    phoneNum:$('#phone').val(),           //将用户的手机号打包
                    remember:$("#_check").prop('checked'),  //是否记住密码   true,false
                },
                dataType:"json",
                success:function(res){
                    // 成功时执行的回调函数

                    //登录成功，返回当前页面,登录框隐藏，遮罩层隐藏
                    $('.registerlogin').css('display','none');
                    $('.sft').css('display','none');

                    //登陆后将用户名存在cookie中
                    $.cookie("username",user.val(),{path: "../"})

                }
            });
        }
    })

    //点击注册登录时的页面切换
  $('#reginster').click(function(){
      $('._b_box').css('display','');
      $('._b2_box').css('display','none');
      $(this).css({'background-color':'grey','color':'white'});
      $(this).next().css({'background-color':'white','color':'black'})
  });
    $('#login').click(function(){
        $('._b2_box').css('display','');
        $('._b_box').css('display','none');
        $(this).css({'background-color':'grey','color':'white'});
        $(this).prev().css({'background-color':'white','color':'black'})
    })





    //点击登录按钮
    $('#my_login').click(function(){

        $('.sft').css('display', '');  //遮罩层出现
        $('.registerlogin').css('display','');               //注册登录框出现
        $('#login').click();
        $('body').css({'overflow-y': 'hidden', 'overflow': 'none'}) //禁止页面的滚动事件
    })


    //点击注册按钮
    $('#my_reginster').click(function(){

        $('.sft').css('display', '');  //遮罩层出现
        $('.registerlogin').css('display','');               //注册登录框出现
        $('#reginster').click();
        $('body').css({'overflow-y': 'hidden', 'overflow': 'none'}) //禁止页面的滚动事件
    })

    //免费视频页面，试看完之后，点击注册按钮，进行注册
    $('#video_register').click(function(){
        $('#my_reginster').click();
    })

    //免费视频页面，试看完之后，点击登陆按钮，进行登陆
    $('#video_login').click(function(){
        $('#my_login').click();
    })


    //首页点击页脚下边的注册按钮时进行的转换
    $('#reginster2').click(function(){
        $('#my_reginster').click();
        var user = $('input[name="user"]').val();                     //获取用户的手机号，将其填入注册框里
        $('#number').val(user);
        var password = $('input[name="password"]').val();           //获取用户输入的密码，将其填入注册框里
        $("#password").val(password);
    })

    //免费视频页面点击全部评论部分的登录

    $('#log').click(function(){
        $('#my_login').click();
    })




    //点击遮罩层时出现的效果
    //遮罩层消失，登录框消失
    $('.sft').click(function(){
        $('.sft').css('display','none');
        $('.registerlogin').css('display','none');
        $('body').css({'overflow-y': 'hidden', 'overflow': ''})              //解除页面的滚动事件
        $('#editor').css({'display':'none'});                          //免费视频页面的评论框影藏掉

    })
})