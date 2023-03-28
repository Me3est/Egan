
$(document).ready(function () {



    $(window).scroll(function () {
        let s_top = $(window).scrollTop();

        // 헤더
        if (s_top > 0) {
            $('.header').css({
                background: '#FFFEEB',
                border: 'none'
            })
            $('.logo > a').css({
                color: '#ffbf00'
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
                background: 'url(./img/장바구니_black.png) no-repeat center / 20px',


            })
            $('.search').css({
                background: 'url(./img/h_검색.png) no-repeat center / 20px'
            })
            $('.ham_line').css({
                backgroundColor: '#000'
            })
        }

        else if (s_top == 0) {
            $('.header').css({
                background: 'transparent',
                // borderBottom: '1px solid rgb(137, 137, 137)'
            })
            $('.logo > a').css({
                color: 'white',


            })
            $('.nav > a').css({
                color: 'white'
            })
            $('.h_menu > a').css({
                color: 'white'
            })
            $('.h_menu::after').css({
                borderRight: '1px solid white',
                borderRight: '1px solid #989898'
            })
            $('.shopping').css({
                background: 'url(./img/장바구니_white.png) no-repeat center / 20px'
            })
            $('.search').css({
                background: 'url(./img/h_검색2.png) no-repeat center / 20px'
            })
            $('.ham_line').css({
                backgroundColor: '#fff',
            })

        }

        // 메인
        if (s_top > 200) {
            $('.logo_box').css({
                opacity: '1'
            })
            $('.abBox').css({
                transform: 'translateX(100%)'
            })
        }
        else if (s_top < 100) {
            $('.logo_box').css({
                opacity: '0'
            })
            $('.abBox').css({
                transform: 'translateX(0)'
            })
        }

        if (s_top > 600) {
            $('.color_wrap1, .color_wrap2').css({
                opacity: '1',
                transform: 'translateY(0)'
            })

        }
        else if (s_top < 600) {
            $('.color_wrap1, .color_wrap2').css({
                opacity: '0',
                transform: 'translateY(100%)'
            })


        }
    });

});
function view() {
    const img = document.querySelectorAll('.info_img');
    const winTop = document.documentElement.scrollTop;


    img.forEach((i) => {
        const imgTop = i.offsetTop - 700;

        if (imgTop <= winTop)
            i.classList.add('on')
        else
            i.classList.remove('on')

    });


}




window.addEventListener('scroll', () => {
    view();
})
