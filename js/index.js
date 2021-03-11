$(document).ready(function(){
    $('#menu_btn').click(function(){
        $('#hidden_wrap').css({
            display : 'block'
        });
    });
    $('#hidden_close').click(function(){
        $('#hidden_wrap').css({
            display : 'none'
        });
    });
    $('#search').click(function(){
        $('#ranking_wrap').css({
            display:'block'
        });
    });
    $('#ranking_close').click(function(){
        $('#ranking_wrap').css({
            display : 'none'
        });
    });
    $('#sec_box1_one img').hover(function(){
        $('#sec_box1_one_name').css({
            display : 'block'
        });
    },function(){
        $('#sec_box1_one_name').css({
            display : 'none'
        });
    });

    $('.sec_box2_twoimg').hover(function(){
        let sec_box2_hover = $(this).index();
        $('.sec_box2_two_name').eq(sec_box2_hover).css({
            display : 'block'
        });
    },function(){
        let sec_box2_hover = $(this).index();
        $('.sec_box2_two_name').eq(sec_box2_hover).css({
            display : 'none'
        });
    });

    $('.sec_box1_twoimg').hover(function(){
        let sec_box1_hover = $(this).index();
        $('.sec_box1_two_name').eq(sec_box1_hover).css({
            display : 'block'
        });
    },function(){
        let sec_box1_hover = $(this).index();   
        $('.sec_box1_two_name').eq(sec_box1_hover).css({
            display : 'none'
        });
    });
    $('.sec_box2_two_dif').hover(function(){
        let sec_box2_dif_hover = $(this).index();
        $('.sec_box2_two_dif_name').eq(sec_box2_dif_hover).css({
            display : 'block'
        });
    },function(){
        let sec_box2_dif_hover = $(this).index();
        $('.sec_box2_two_dif_name').eq(sec_box2_dif_hover).css({
            display : 'none'
        });
    });

    $('.sec_box1_more').hover(function(){
        $(this).css({
            textDecoration : 'underline',
            textUnderlinePosition : 'under'
        });
    },function(){
        $(this).css({
            textDecoration : 'none'
        });
    });

    $('.sec_box2_more').hover(function(){
        $(this).css({
            textDecoration : 'underline', 
            textUnderlinePosition : 'under'
        });
    },function(){
        $(this).css({
            textDecoration : 'none'
        });
    });

    $(window).scroll(function(){
        if($(this).scrollTop() < 960){
            $('#m_shop_img').attr('src', 'img/mobile/mobile_header/moblie_header_icon/shopping_cart_icon_color.png');
            $('#m_menu_img').attr('src', 'img/mobile/mobile_header/moblie_header_icon/menu_btn_color.png');
            $('#m_login_img').attr('src', 'img/mobile/mobile_header/moblie_header_icon/lock_icon_color.png');
            $('#header_menu_icon').attr('src', 'img/button_icon/menu_btn_color.png');
            $('#header_search_icon').attr('src', 'img/button_icon/search_btn_color.png');
        }
        else if($(this).scrollTop() > 960){
            $('#m_shop_img').attr('src', 'img/mobile/mobile_header/moblie_header_icon/shopping_cart_icon.png');
            $('#m_menu_img').attr('src', 'img/mobile/mobile_header/moblie_header_icon/menu_btn.png');
            $('#m_login_img').attr('src', 'img/mobile/mobile_header/moblie_header_icon/lock_icon.png');
            $('#header_menu_icon').attr('src', 'img/button_icon/menu_btn.png');
            $('#header_search_icon').attr('src', 'img/button_icon/search_btn.png');
        }
    }); 
}); // End