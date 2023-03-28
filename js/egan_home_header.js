
// 헤더 기능
$(document).ready(function(){

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();



        if(s_top > 0 ) {
            $('.header').css({
                background :'#FFFEEB',
                border: 'none'
            })
            $('.nav > a').css({
                color: 'black'
            })
            $('.h_menu > a').css({
                color: 'black'
            })
            $('.h_menu::after').css({
                borderRight: '1px solid black'
            })
            $('.shopping').css({
                background: 'url(./img/장바구니_black.png) no-repeat center / 20px'
            })
            $('.search').css({
                background: 'url(./img/h_검색.png) no-repeat center / 20px'
            })
            $('.ham_line').css({
                backgroundColor: '#000'
            })

        }
        else if (s_top === 0 ) {
            $('.header').css({
                background: 'transparent',
                border: 'none'
            })
            $('.logo > a').css({
                color: '#ffbf00',

            })
            $('.nav > a').css({
                color: '#ffbf00'
            })
            $('.h_menu > a').css({
                color: '#ffbf00'
            })
            $('.shopping').css({
                background: 'url(./img/shopping_yellow.png) no-repeat center / 20px'
            })
            $('.search').css({
                background: 'url(./img/header_search_yellow.png) no-repeat center / 20px'
            })
            $('.ham_line').css({
                backgroundColor: '#ffbf00',
            })
        }
    })
})


