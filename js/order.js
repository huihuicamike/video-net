/**
 * Created by Jason on 2016/6/27.
 */
$(function(){

    //��ϵ�˵绰���ռ����ʱ���и�
    var he3 = $('.phone').height();

    $('.phone td').css('height',he3);

    //�ջ��������͵�ַһ�����и�
    var he = $('.addr').height();

    $('.area td').css('height',he);

    //�鷨���ɵĸ߶Ⱥ��и�һ��
    var he2 = $('#skill').height()

    $('#skill td:first').css('height',he2)

    //���ͷ�ʽ�͸��ʽ�ĸ߶Ⱥ��и�һ��
    var he4 = $('.method').height();

    $('.method td').css('height',he4);

    //�ռ��˵ĵ�ַ�߶Ⱥ��и�һ��
    var he5 = $('.addr').height();
    $('.addr td').css('height',he5)

    //��ע�ĸ߶Ⱥ��и�һ��
    var he6 = $('.remark').height();
    $('.remark td').css('min-height',he6)

    //�����ܼƵĸ߶Ⱥ��и�һ��
    var he7 = $('.all-cost').height();
    $('.all-cost td').css('height',he7);
})