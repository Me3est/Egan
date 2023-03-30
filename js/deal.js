
$(document).ready(function() {
    let cate_no = get_url_info("cate");
    let item_no = get_url_info("item");
    console.log(rs)
    load_data(cate_no, item_no);
    // 데이터 집어넣기
   
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
            total_price = (rs.s_price * +$('#txt_qty').val())
            $('.total_price').text(total_price.toLocaleString('ko')+"원")
        }
        else  {
            alert('최소 주문 수량은 1개 입니다.')
        }
    })
    $('#p_plus').click(function() {
        let item_count = $('#txt_qty').val();
        $('#txt_qty').val(+item_count + 1) ;
        console.log(item_count)
        total_price = (rs.s_price * +$('#txt_qty').val())
        $('.total_price').text(total_price.toLocaleString('ko')+"원")
    })

    // 탭 버튼 스크롤 
    let tab_loc = $('.item_ex_main').offset().top;
    let h_hei = $('.header').height();
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
// 새로고침
//    history.scrollRestoration = "manual"

let rs = "";
function load_data(cate, item) {
    rs = ITEM_LIST[cate][item-1];
    console.log(rs);
    $('.detail_img > img').attr('src', rs.src);
    $('.dt_title').text(rs.title);
    $('.o_price').text(Number(rs.o_price).toLocaleString('ko')+"원");
    $('.s_price').text(Number(rs.s_price).toLocaleString('ko')+"원");
    $('.total_price').text(Number(rs.s_price).toLocaleString('ko')+"원");
    $('#item_ex > img').attr('src', rs.src);
    $('#item_ex_dt > img').attr('src', rs.src);
}