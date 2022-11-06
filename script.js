// バーガーをクリックしたらメニューにis-activeがなければを付与する、あれば外す。
$(function(){

    // ハンバーガーmenu
$('.burger').click(function(){
    $(".burger").toggleClass("is-active");
    $(".menu").toggleClass("is-active");

    $('a[href^="#"]').on('click', function() {
      $('.burger').click(); // .menuをクリックした時と同じ処理
    
      });
});

// ロゴクリックでTOPに戻る

$('#top-btn').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },500);
  })  

  $('a[href^="#').click(function () {
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      500
    );
  });
});

