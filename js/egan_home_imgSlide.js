let slide_wrap = document.querySelector('.slide_wrap');
let slide = document.querySelectorAll('.b_slide_img');

//  좌우 버튼을 클릭 했을 때 현재 몇번째 슬라이드를 보는 지 확인하기 위해서 변수 지정
let current_index = 0;

let slide_count = slide.length;


let slideWidth = 250; // 슬라이드 하나의 가로길이
let slideMargine = 30;  // 슬라이드의 마진

// 슬라이드 좌우 버튼
let prev_btn = document.querySelector('.prev_btn');
let next_btn = document.querySelector('.next_btn');

/* 슬라이드 앞뒤로 복사본 만들기 */
makeClone();

function makeClone () {
  /*기존 슬라이드에서 0 1 2 3 4 번째 클론슬라이드 생성 */
    for(let i = 0; i<slide_count; i++) {
      let cloneSlide = slide[i].cloneNode(true);

      /*복사본(클론슬라이드)에는 'clone'이라는 새로운 클래스를 넣어서 구분해줌 */
      cloneSlide.classList.add('clone');

      slide_wrap.appendChild(cloneSlide);
    }

    for(let i = slide_count -1; i>=0; i-- ){
    /* 기존 슬라이드에서  3 2 1 0  클론 슬라이드 생성 */
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slide_wrap.prepend(cloneSlide);
    }

    /* 전체너비 구해서 slide_wrap에 지정해줌  */

    updateWidth();
    /* 함수의 기능 : 전체 슬라이드 갯수를 구하고 모두 더하기 = 전체 너비 구하기*/

    firstWidth();
    /* 초기 기존 슬라이드로 위치 잡는 함수 ,  */


    setTimeout(function(){
      slide_wrap.classList.add('animated');
    },100);


}

function updateWidth() {
  let currentSlides = document.querySelectorAll('.b_slide_img'); // 복사본까지 합한 현재 슬라이드 (배열)
  let newSlideCount = currentSlides.length;
  // 현재 슬라이드(배열)의 길이

  let newWidth = (slideWidth + slideMargine) * newSlideCount - slideMargine + 'px';
  //새로운 슬라이드 전체의 넓이 = (슬라이드 한개의 너비 + 마진 ) * 배열방의 수 

  slide_wrap.style.width = newWidth;
}

function firstWidth() {
  /* 기존 슬라이드 위치로 지정하려면 (-슬라이드즈길이) 해줘야함 */
  let origineWidth = -(slideWidth + slideMargine) * slide_count;
  slide_wrap.style.transform = 'translateX(' + origineWidth + 'px)';
} 

/* 버튼 누를 때 마다 슬라이드 1개 너비 만큼 좌우로 움직임 */
next_btn.addEventListener('click',function(){
  moveSlide(current_index + 1);
});

prev_btn.addEventListener('click',function(){
  moveSlide(current_index - 1);
});

function moveSlide(num) {
  slide_wrap.style.left = -num * (slideWidth + slideMargine) + 'px';
  current_index = num;
  
  if (current_index === slide_count || current_index === -slide_count) {
    setTimeout(function(){
      slide_wrap.classList.remove('animated');
      slide_wrap.style.left = '0px';
      current_index = 0;
    }, 500);
    setTimeout(function(){
      slide_wrap.classList.add('animated');
    },600);
  }
  
}

let timer = undefined;

function autoslide() {
    if(timer == undefined) {
        timer = setInterval(function () {
            moveSlide(current_index + 1);
        }, 3000)
    }
}

autoslide();

function stopSlide(){
    clearInterval(timer);
    timer = undefined;
}

slide_wrap.addEventListener('mouseenter', function(){
    stopSlide();
})

slide_wrap.addEventListener('mouseleave', function() {
    autoslide();
})


