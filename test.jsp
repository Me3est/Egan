<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Title</title>
  <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
</head>
<body>
<h2>commentTest</h2>
<%--<form action="" id="reg_comment">--%>
<%--  <input type="text" id="txt_comment" name="comment" placeholder="댓글 추가" >--%>
<%--  <button type="button" id="btn_submit_comment">등록</button>--%>
<%--</form>--%>

댓글달기: <input type="text" id="test_comment" name="comment"> <br>
<button id="sendBtn" type="button">SEND</button>
<button id="modBtn" type="button">MODIFY</button> <%-- 수정버튼을 누르면 리스트에 있는 댓글 내용이 수정하는 칸으로 이동하게 하기. 다 고치고 send 버튼 누르면 등록되게 하기--%>


<%--  나중에 ajax로 댓글 가져와서 집어 넣을거임 --%>
<div id="commentList"></div>

<script>

  let bno = 2417;

  /* 댓글 다 불러오기 */
  let showList = function(bno) {
    $.ajax({
      type:'GET',       // 요청 메서드
      url: '/board/comments?bno='+bno,  // 요청 URI

      /*dataType : 'json',*/   //생력하면 기본값(json) 이 들어간다.// 전송받을 데이터의 타입
      /*data : JSON.stringify(person),*/ // 위에꺼 생략하면 변환이 필요 없다.  // 서버로 전송할 데이터. stringify()로 직렬화 필요.
      success : function(result){
        //person2 = JSON.parse(result);  // 위에 dataType 에서 변환 안했으니까 받을때도 필요 없다. 생략 가능.  // 서버로부터 응답이 도착하면 호출될 함수
        console.log("received="+result);       // result는 서버가 전송한 데이터
        console.log("toHtml: " + toHtml(result))
        $("#commentList").html(toHtml(result));
        // 배열로 들어온걸(result) 함수를 이용해서 ul에 넣어서 가져온다.
      },
      error   : function(){ alert("error") } // 에러가 발생했을 때, 호출될 함수
    }); // $.ajax()
  }

  /* 댓글 다 불러오기 할때 쓰는 포멧 */
  let toHtml = function(comments) {
    let tmp2 ="";
    comments.forEach(function(comment) {
      let dt = new Date(comment.reg_date);
      let year=dt.getFullYear();
      let mon=dt.getMonth()+1;
      let date=dt.getDate();
      let hour=dt.getHours();
      let min =dt.getMinutes();
      let sec =dt.getSeconds();

      tmp2 +='<div class="list_item">';
      tmp2 +='  <div>';
      tmp2 +='    <div class="item_head">';
      tmp2 +='      <span>'+comment.commenter+'</span>';
      tmp2 +='      <span>'+(year+"-"+mon+"-"+date+" "+hour+":"+min+":"+sec)+'</span>';
      tmp2 +='    </div>';
      tmp2 +='  <div class="item_body">';
      tmp2 +='    <input type="text" class="comment_title" name="comment_title" value="'+comment.comment+'" readonly />';
      tmp2 +='    </div>';
      tmp2 +='  </div>';
      tmp2 +='  <div data-cno='+comment.cno+ ' data-bno='+comment.bno+'>';
      tmp2 +='    <button type="button" class="btn_comment btn_comment_modify">수정</button>';
      tmp2 +='    <button type="button" class="btn_comment btn_comment_del">삭제</button>';
      tmp2 +='  </div>';
      tmp2 +='</div>';
    })
    return tmp2;

  }

  $(document).ready(function(){
    showList(bno); // 일단 리스트 다 불러오기

    // 새 댓글 쓰기
    $("#sendBtn").click(function(){

      let comment = $('#test_comment').val().trim(); // 입력한 댓글을 가지고 와서 ajax의 data에 보냄.

      if(comment=='') {
        alert("댓글 입력하세요");
        $('input[name=comment]').focus();
        return;
      }

      // alert("="+'/board/comments?bno='+bno+"=");
      $.ajax({
        type:'POST',       // 요청 메서드
        url: '/board/comments?bno='+bno,  // 요청 URI - Ex17_CommentController 의 맵핑 "/comments"가 받음
        headers : { "content-type": "application/json" }, // 요청 헤더
        //dataType : 'json', // 전송받을 데이터의 타입
        data : JSON.stringify({bno:bno, comment:comment}),  // 서버로 전송할 데이터. stringify()로 직렬화 필요.
        success : function(result){
          // alert("received="+result);       // result는 서버가 전송한 데이터
          showList(bno)
        },
        error   : function(){ alert("error") } // 에러가 발생했을 때, 호출될 함수
      });
    });

    // 수정
    $("#modBtn").click(function(){
      let comment = $('#test_comment').val();

      if(comment.trim()=='') {
        alert("댓글 입력하세요");
        $('input[name=comment]').focus();
        return;
      }

      let cno = $(this).attr('data-cno');
      // alert("+"+cno+"+"+comment+"+");
      $.ajax({
          type:'PATCH',       // 요청 메서드
          url: '/board/comments/'+cno,  // 요청 URI - Ex17_CommentController 의 맵핑 "/comments/{cno}"가 받음
          headers : { "content-type": "application/json" }, // 요청 헤더
          //dataType : 'json', // 전송받을 데이터의 타입
          data : JSON.stringify({cno:cno, comment:comment}),  // 서버로 전송할 데이터. stringify()로 직렬화 필요.
          success : function(result){
            // alert("received="+result);       // result는 서버가 전송한 데이터
            showList(bno)
          },
          error   : function(){ alert("error") } // 에러가 발생했을 때, 호출될 함수
        });
      }
    );

    // 댓글 수정 - 각 글들에 있는 '수정'버튼 클릭하면 맨 위에 새댓글 입력하는 부분에 현재 글의 내용이 들어간다.
    $(document).on('click','.btn_comment_modify',function(){
      let cno = $(this).parent().attr("data-cno");
      let bno = $(this).parent().attr("data-bno");

      let comment = $(this).parents('.list_item').find('.comment_title').val();
      alert(comment);

      // 1. comment의 내용을 input에 뿌려주기
      $('#test_comment').val(comment);
      // 2. cno 전달하기
      $('#modBtn').attr("data-cno",cno);

    });


    // 댓글 하나 삭제
    $(document).on('click','.btn_comment_del',function(){
      let cno = $(this).parent().attr("data-cno");
      let bno = $(this).parent().attr("data-bno");

      alert("="+cno+","+bno+"=");

      console.log('/board/comments/'+cno+'?bno='+bno);

      $.ajax({
        type:'DELETE',
        url: '/board/comments/'+cno+'?bno='+bno,
        success : function(result){
          alert(result)
          showList(bno)
        },
        error   : function(){ alert("error") } // 에러가 발생했을 때, 호출될 함수
      }); // $.ajax()
    });
  });

</script>
</body>
</html>