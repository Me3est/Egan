$(document).ready(function() {

    // 장바구니 버튼

    // 구매버튼
    // $(document).on('click', '#btn_pay', function() {
    //     location.href="http://localhost:8080/egan/myPage"
    // })

    // 리뷰 버튼
    // $(document).on('click', '#rev_btn', function() {
    //     $('.review_popup').css({display:'block'})
    //     $('.layer').css({display:'block'})
    // })

    // 문의 버튼
    // $(document).on('click', '#qna_btn', function() {
    //     $('.qna_popup').css({display:'block'})
    //     $('.layer').css({display:'block'})
    // })

    // 작성중인 글 버튼
    $(document).on('click', '#wrt_cancle_btn', function() {
        alert("11")
    })
    $(document).on('click', '#wrt_keep_going_btn', function() {
        alert("11")
    })
    // 로그인 버튼
    $(document).on('click', '#log_cancle_btn', function() {
        $('.logChk_popup').css({display:'none'})
        $('.layer').css({display:'none'})
    })
    $(document).on('click', '#logChk_commit_btn', function() {
        location.href="http://localhost:8080/egan/login"
    })
    // 장바구니 팝업
    $(document).on('click', '#cart_stay_btn', function() {
        $('.cart_popup').css({display: 'none'})
        $('.layer').css({display:'none'})
    })
    $(document).on('click', '#cart_commit_btn', function() {
        location.href="http://localhost:8080/egan/myPage"
        $('.layer').css({display:'none'})
    })
    // 리뷰 팝업
    $(document).on('click', '#review_cancle_btn', function() {
        $('.review_popup').css({display: 'none'})
        $('.layer').css({display:'none'})
    })
    $(document).on('click', '#review_commit_btn', function() {
        $('.review_popup').css({display: 'none'})
        $('.layer').css({display:'none'})
    })
    // 문의 팝업
    $(document).on('click', '#qna_cancle_btn', function() {
        $('.qna_popup').css({display: 'none'})
        $('.layer').css({display:'none'})
    })
    $(document).on('click', '#qna_commit_btn', function() {
        $('.qna_popup').css({display: 'none'})
        $('.layer').css({display:'none'})
    })


    // 리뷰내용
    $('.move_tr').click(function() {
        if($(this).next('.tab_content').hasClass('dis_block')) {
            $(this).next('.tab_content').removeClass('dis_block');
        }
        else {
            $(this).next('.tab_content').addClass('dis_block')
        }
    })


    // 상품 개수 카운트
    $('#p_minus').click(function() {
        let item_count = $('#txt_qty').val();
        if(item_count > 1) {
            $('#txt_qty').val(+item_count - 1) ;
            aa((+item_count-1) * 10000)

        }
        else  {
            alert('최소 주문 수량은 1개 입니다.')
        }
    })
    $('#p_plus').click(function() {
        let item_count = $('#txt_qty').val();
        $('#txt_qty').val(+item_count + 1) ;
        console.log(item_count)
        aa((+item_count+1) * 10000)
    })

    // 탭 버튼 스크롤 
    let tab_loc = $('.item_ex_main').offset().top;
    let h_hei = $('.header').height();

    // if(h_hei <= $(window).scrollTop()) {
    //     $('.item_ex_tab').css({
    //         position: 'fixed',
    //         // top:'70px'
    //         top: $('.header').height()
    // })
    // }
    let s_top = 0;
    $(window).resize(function (){
            $('.item_ex_tab').css({
                position: 'fixed',
                top: $('.header').height()
            })

    });
    $(window).scroll(function() {
        // 탭 스크롤 이밴트

        s_top = $(window).scrollTop();
        console.log(s_top+h_hei, tab_loc, h_hei)
        if(s_top+h_hei > tab_loc) {
            $('.item_ex_tab').css({
                position:'fixed',
                top: $('.header').height()
            })
            $('.detail_item_box').css({
                paddingTop:'60px'
            })

            // 탭 이동시 색 변경 이벤트
            for(let i=0; i<4; i++) {
                if((s_top + 130) + h_hei > $('.tb_dt').eq(i).offset().top) {
                    $('.tab').removeClass('tab_active');
                    $('.tab').eq(i).addClass('tab_active');
                }
            }
        }
        else if(s_top+h_hei <= tab_loc) {
            $('.item_ex_tab').css({
                position:'static',
            })
            $('.detail_item_box').css({
                paddingTop:'0px'
            })

        }

        if($(window).innerWidth() <= 1024) {
            s_top = $(window).scrollTop();
            if(s_top+h_hei > tab_loc) {
                $('.item_ex_tab').css({
                    position:'fixed',
                    top: $('.header').height()
                })
                $('.detail_item_box').css({
                    // paddingTop:'60px'
                })
            }

        }
        if($(window).innerWidth() <= 480) {
            s_top = $(window).scrollTop();
            if(s_top+h_hei+500 > tab_loc) {
                $('.item_ex_tab').css({
                    position:'fixed',
                    top: $('.header').height()
                })
                $('.detail_item_box').css({
                    // paddingTop:'60px'
                })
            }

        }
    })


    // if (matchMedia("screen and (max-width: 1024px)").matches)  {
    //     $(window).scroll(function() {
    //         let s_top = $(window).scrollTop();
    //          if(s_top+h_hei > tab_loc) {
    //              $('.item_ex_tab').css({
    //                  position:'fixed',
    //                  top:'50px'
    //              })
    //              $('.detail_item_box').css({
    //                  paddingTop:'60px'
    //              })
    //          }
    //     })
    // }

    // 탭 스크롤 부드럽게 이동
    let tab_hei = $('.item_ex_tab').innerHeight();
    $('.item_ex_tab a').click(function() {
        event.preventDefault();

        let href = $(this).attr('href');
        let pos = $(href).offset().top;
        $('html, body').animate({
            scrollTop : pos - (tab_hei  + 70)
        }, 1000)
    })

    //탭 클릭 이벤트
    // $('.tab').click(function() {
    //     $('.tab').removeClass('tab_active');
    //     $(this).addClass('tab_active');
    // })
    let bWidth = window.innerWidth;
    window.addEventListener("resize", () => {
        const nWidth = window.innerWidth;
        if ((bWidth < 1024 && nWidth >= 1024) || (bWidth > 1023 && nWidth <= 1023)) {
            location.reload();
        }
        // beforeWidth = nowWidth;
    });
})

// 최종금액 입력
let item_price = 0;
function aa(item_price) {
    $('.total_price').text(`최종금액 : ${item_price.toLocaleString('kr')}원`);
}

// 새로고침
//    history.scrollRestoration = "manual"