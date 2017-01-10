/**
 * Created by Jason on 2016/6/27.
 */
$(function(){

    //联系人电话和收件人邮编的行高
    var he3 = $('.phone').height();

    $('.phone td').css('height',he3);

    //收货人姓名和地址一栏的行高
    var he = $('.addr').height();

    $('.area td').css('height',he);

    //书法技巧的高度和行高一样
    var he2 = $('#skill').height()

    $('#skill td:first').css('height',he2)

    //配送方式和付款方式的高度和行高一样
    var he4 = $('.method').height();

    $('.method td').css('height',he4);

    //收件人的地址高度和行高一样
    var he5 = $('.addr').height();
    $('.addr td').css('height',he5)

    //备注的高度和行高一样
    var he6 = $('.remark').height();
    $('.remark td').css('min-height',he6)

    //费用总计的高度和行高一样
    var he7 = $('.all-cost').height();
    $('.all-cost td').css('height',he7);
})