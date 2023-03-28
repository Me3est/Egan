$(document).ready(function(){
    // 회원가입 폼 유효성 검사


    // 달력 함수
    $.datepicker.setDefaults({
        // dateFormat: 'yy-mm-dd', // 날짜 표현방식
        // showMonthAfterYear: true, // 년도 먼저 표시

        // // 한글화
        // monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        // dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], // 달력에 나타나는 요일
        // dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], // 요일에 마우스 올려놓으면 나타나는 툴팁

        // // 표시되는 달력 개수
        // numberOfMonths: [2,4],

        dateFormat: 'yy-mm-dd', //Input Display Format 변경
        changeMonth: true,
        changeYear: true,
        yearRange:'1900:2022'

        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
        // ,changeYear: true //콤보박스에서 년 선택 가능
        // ,changeMonth: true //콤보박스에서 월 선택 가능
        ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        ,buttonImage: "./img/calendar.png" //버튼 이미지 경로
        ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트

        ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        ,minDate: "-100Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "+0M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
    });

    $('.date_pick').datepicker({

        onSelect : function(dateString) {
            // console.log(dateString);

            aaaa(dateString)

        }

    });

});

function aaaa(tmp_date) {
    // alert(tmp_date)
    // ajax({
    //     type:???,
    //     url:??,
    //     dataType: "json",
    //     data: {date: "???"},
    //     success:...
    //     error;;...

    // })
}



// 새로고침
// history.scrollRestoration = "manual"