$(document).ready(function() {
    let ham_chk = true;
    const timer = 300;
    $('#line_top, #line_bot').css({transition:`all ${timer / 1000}s `})
    $(document).on('click', '.ham_box', function() {
        if(ham_chk) {
            ham_chk = false;
            ham($('#line_top'), 'translateY(10px)', 'translateY(10px) rotate(45deg)')
            ham($('#line_mid'), -1, 'scale(0)')
            ham($('#line_bot'), 'translateY(-10px)', 'translateY(-10px) rotate(-45deg)')
        
            $('.ham_menu').addClass('ham_active')
        }
        else {
            ham_chk = true;
            ham($('#line_top'), 'translateY(10px) rotate(0)', 'translateY(0px) rotate(0)')
            ham($('#line_mid'), -1, 'scale(1)')
            ham($('#line_bot'), 'translateY(-10px) rotate(0)', 'translateY(0px) rotate(0)')
       
            $('.ham_menu').removeClass('ham_active')
        }
    })

    function ham(el, trans, rot) {
        if(trans != -1) {
            el.css({
                transform:trans
            })
        }
        setTimeout(function() {
            el.css({
                transform:rot
            })  
        }, timer)

    }
})