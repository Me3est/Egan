// 계산
function plus() {
    // 개수 변경
    let txt_qty = document.getElementById('txt_qty');
    let qty = +txt_qty.value + 1; // "0" -> 0
    txt_qty.value = qty;
    //////////////////////////////////
    get_final_price(qty);
}

function minus() {
    // 개수 변경
    let txt_qty = document.getElementById('txt_qty');

    if(txt_qty.value > 1) {
        let qty = +txt_qty.value - 1; // "0" -> 0
        txt_qty.value = qty;
        //////////////////////////////////
        get_final_price(qty);
    }
    else {
        alert("최소 주문 수량은 1개 입니다.");
    }
}

function get_final_price(qty) {
    // 최종금액 변경
    let o_price = document.getElementById('o_price');
    o_price = +o_price.innerText.replace(",","").replace("원",""); // "10000원"-> "10000"
    let f_price = o_price * qty;
    document.getElementById('f_price').innerText = f_price.toLocaleString("ko")
}
// 체크박스
$(document).ready(function() {
    $('.chk_all').click(function(){
        console.log($('.chk_all').is(':checked'))

        let curr_chk = $('.chk_all').is(':checked');
        if(curr_chk) { // true 나오면 아래 10개 다 체크하기
            $('.chk').prop('checked', true);
        }
        else {
            $('.chk').prop('checked', false);
        }
    })
})

