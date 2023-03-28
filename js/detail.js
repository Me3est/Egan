$(document).ready(function () {

    // $('.menu_basket_btn').click(function () {
    //     $('.popup_outer_box').css({
    //         display: 'block',
    //     })
    // })
    // 로그인 버튼
    $(document).on('click', '#log_cancle_btn', function() {
        $('.logChk_popup').css({display:'none'})
        $('.layer').css({display:'none'})
//         $('html').css({overflowY:'visible'})
    })
    $(document).on('click', '#logChk_commit_btn', function() {
        location.href="http://localhost:8080/egan/login"
    })
    $('#cancel').click(function () {
        $('.popup_outer_box').css({
            display: 'none',
        })
        $('.layer').css({display:'none'})
//         $('html').css({overflowY:'visible'})
    })
      $('#put').click(function () {
        $('.basket_popup').css({
            display: 'block',
        })
           $('.popup_outer_box').css({
            display: 'none',
        })
    })
    $('#check').click(function () {
        location.href="http://localhost:8080/egan/myPage"
    })
    $('#contiune').click(function () {
        $('.basket_popup').css({
            display: 'none',
        })
        $('.popup_outer_box').css({
            display: 'none',
        })
        $('.menu_basket_btn').css({
            pointerEvents: 'auto',
        })
        $('.layer').css({display:'none'})
//         $('html').css({overflowY:'visible'})
    })
    $('#check').click(function () {
        location.href="http://localhost:8080/egan/myPage"
    })



})
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
let pmTxt = document.querySelector('#pm_txt')
let count = 0;
function plus() {
    count = +pmTxt.value + 1;
    pmTxt.value = count;
    total(count);
}
function minus() {
    if (count > 1) {
        count--;
        pmTxt.value = count;

        total(count);
    }
}
function total(count) {
    let o_price = document.querySelector('.o_price');
    o_price = +o_price.innerText.replace(",", "").replace("원", ""); // "10000원"-> "10000"
    let f_price = o_price * count;
    document.querySelector('.total_price').innerText = f_price.toLocaleString("ko") + "원"
}


$(document).ready(function () {

    $('.search').click(function () {
        $('.model_background').css({
            display: 'block',
        })
    })
    $('.close').click(function () {
        $('.model_background').css({
            display: 'none',
        })
    })

    // let d_hei = $(document).height();
    // $(window).scroll(function () {
    //     let count = 0;
    //     let s_bot = $(window).scrollTop() + $(window).height();
    //
    //     if(count < 4 && d_hei <= s_bot) {
    //         for(let i=0; i<4; i++) {
    //            $('.menu_box').append(`<c:forEach var="dto" items="${list }">
    //                                         <div class="menu_list">
    //                                           <div class="menu_item">
    //                                             <a href="http://localhost:8080/egan/real_detail/${dto.p_index}">
    //                                             <img src="<c:url value='${dto.saveImage}'/>" alt="c">
    //                                             </a>
    //                                             <button class="menu_basket_btn"></button>
    //                                           </div>
    //                                           <div class="menu_txt">
    //                                             <p class="p_name">${dto.p_name}</p>
    //                                             <p class="p_sale">32%</p>
    //                                             <p class="p_sale">32%</p>
    //                                             <p class="p_price">${dto.p_price}</p>
    //                                           </div>
    //                                         </div>
    //                                   </c:forEach>`)
    //         }
    //         d_hei = s_bot;
    //         count++
    //     }
    // })
})
