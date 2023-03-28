
    // 탭
let box1 = document.getElementsByClassName('box1');

    for(let j=0; j<box1.length; j++) {
        box1[j].addEventListener('click',function(){    
            for(let i=0; i<box1.length; i++) {
                box1[i].classList.remove('chgColor');
                box1[i].classList.remove('box2');
            }

            this.classList.add('chgColor');
        })
    }

    // 리뷰
let reviewBtn = document.getElementsByClassName('reviewBtn');


    for(let j=0; j<reviewBtn.length; j++) {
        reviewBtn[j].addEventListener('click',function(){    
            for(let i=0; i<reviewBtn.length; i++) {
                reviewBtn[i].classList.remove('BtnColorChg');
                reviewBtn[i].classList.remove('reviewBtn1');
            }

            this.classList.add('BtnColorChg');
        })
    }
