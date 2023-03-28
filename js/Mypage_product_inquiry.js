//toggle
$(function(){
    const $toggle = document.querySelector(".toggleSwitch");
    const $toggle2 = document.querySelector(".toggleButton");
    $toggle.onclick = () => {
        $toggle2.classList.toggle('active');
    }
});

$(function(){

    $("#cancel_correction").click(function(){
        modalClose();
    });
    $("#modal_open_correction").click(function(){        $("#popup_correction").css('display','flex').hide().fadeIn();
    });
    $("#new_popup").click(function(){
        $("#popup2").css('display','flex').hide().fadeIn();
        $("#popup").fadeOut();
    });
    $("#confirm2").click(function(){
        modalClose();
    });
    function modalClose(){
        $("#popup_correction").fadeOut();
        $("#popup2").fadeOut();
    }
});


// 상품후기 작성 팝업창
$(function(){
    $("#cancel_product").click(function(){
        modalClose_product();
    });
    $("#modal-open").click(function(){        $("#popup_product").css('display','flex').hide().fadeIn();
    });
    $("#new_popup_product").click(function(){

        $("#popup_product").fadeOut();
    });

    function modalClose_product(){
        $("#popup_product").fadeOut();
    }
});


$(function(){
    // '취소'버튼 클릭
    $("#confirm").click(function(){
        modalClose3();
    });
    $("#close").click(function(){
        modalClose4();
    });
    $("#pass").click(function(){
        $("#popup4").css('display','flex').hide().fadeIn();
        modalClose3();
    });
    // 팝업창 위치 잡고 열기
    $("#modal-open2").click(function(){        $("#popup3").css('display','flex').hide().fadeIn();
    });
    const popup = document.getElementById("popup3")

    //클릭시 이벤트 타깃 요소에 popup-wrap가 있을시 끄기
    popup.addEventListener("click", e => {
        const evTarget = e.target
        if(evTarget.classList.contains("popup-wrap")) {
            modalClose3()
        }
    })
    // modal창 켜진 상태에서 esc버튼 누르면 끄기
    window.addEventListener("keyup", e => {
        if(event.keyCode == 27) {
            modalClose3()
            modalClose4()
        }
    })
    // function 1개로 만들면 display:none이라서 사라질때 글씨가 겹친다.
    // 2번 팝업으로 넘어갈때 1번 팝업 닫아주면서 넘어간다.
    function modalClose3(){
        $("#popup3").fadeOut();
    }
    function modalClose4(){
        $("#popup4").fadeOut();
    }
})


