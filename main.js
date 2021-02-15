// 特定の位置までスクロール//

$('.about-bt').click(function() {
  $("html,body").animate({scrollTop:$(".about").offset().top});
});

$('.service-bt').click(function() {
  $("html,body").animate({scrollTop:$(".service").offset().top});
});

$('.member-bt').click(function() {
  $("html,body").animate({scrollTop:$(".member").offset().top});
});

$('.recruit-bt').click(function() {
  $("html,body").animate({scrollTop:$(".recruit").offset().top});
});

$('.news-bt').click(function() {
  $("html,body").animate({scrollTop:$(".news").offset().top});
});


$('.ir-bt').click(function() {
  $("html,body").animate({scrollTop:$(".ir").offset().top});
});

$('.education-bt').click(function() {
  $("html,body").animate({scrollTop:$(".education").offset().top});
});

$('.contact-bt').click(function() {
  $("html,body").animate({scrollTop:$(".contact").offset().top});
});


// 上矢印でトップまで戻る
$('.to-top').click(function(){
  $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
});


$('.animated').waypoint({
  handler(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素にfadeInUpクラスを付けることで
       * アニメーションを開始
       */
      $(this.element).addClass('fadeInUp');

      /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '90%',
});


$('.submit-bt').on('click', (e) => {
  // hrefのリンク先に飛ばないようにする
  e.preventDefault();

  alert('この内容で送信して良いですか？');
});