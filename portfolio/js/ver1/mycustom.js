/* ================================================== *
 *    skills-accordion
 * ================================================== */
$(function() {
  //1枚目のパネルを除いて非表示にする
  $('.skills-space > .accordion').hide();
  $('.skills-space > .skills-subtitle')
    .click(function(e){
      //すべてのパネルを閉じる。
      $('.skills-space > .accordion').slideUp(500);
      //選択したパネルのみ表示する
      $('+.accordion', this).slideDown(500);
    })
});
/* ================================================== *
 *    works-accordion
 * ================================================== */

$(function() {
  //1枚目のパネルを除いて非表示にする
  $('.works-contents > #cosmic-accordion').hide();
  $('.works-contents > #cosmic-icon')
    .click(function(e){
      //すべてのパネルを閉じる。
      $('.works-contents > #cosmic-accordion').slideToggle(500);
    })
});
$(function() {
  //1枚目のパネルを除いて非表示にする
  $('.works-contents > #strollinf-accordion').hide();
  $('.works-contents > #strollinf-icon')
    .click(function(e){
      //すべてのパネルを閉じる。
      $('.works-contents > #strollinf-accordion').slideToggle(500);
    })
});
$(function() {
  //1枚目のパネルを除いて非表示にする
  $('.works-contents > #crescent-accordion').hide();
  $('.works-contents > #crescent-icon')
    .click(function(e){
      //すべてのパネルを閉じる。
      $('.works-contents > #crescent-accordion').slideToggle(500);
    })
});
$(function() {
  //1枚目のパネルを除いて非表示にする
  $('.works-contents > #mijose-accordion').hide();
  $('.works-contents > #mijose-icon')
    .click(function(e){
      //すべてのパネルを閉じる。
      $('.works-contents > #mijose-accordion').slideToggle(500);
    })
});

/* ================================================== *
 *    Works-slick
 * ================================================== */
$(function() {
    $('.works-slick').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, //自動再生
        // centerMode: true,
        // centerPAdding: '5%',
        // dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, //自動再生
                centerMode: true,
                centerPAdding: '5%',
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true, //自動再生
                centerMode: true,
                centerPAdding: '5%',
            }
        }]
    });
});

/* ================================================== *
 *    ふわっと中心から表示
 * ================================================== */
$(function() {
    $('head').append(
        '<style>#fadein{display:none;}'
    );
    $(window).on("load", function() {
        $('#fadein').delay(600).fadeIn("slow");
    });
});

$(function() {
    $('head').append(
        '<style>footer{display:none;}'
    );
    $(window).on("load", function() {
        $('footer').delay(1000).fadeIn("slow");
    });
});

/* ================================================== *
 *    裏から順番に表示
 * ================================================== */
$(function() {
    $('head').append(
        '<style>.main-contents{display:none;}'
    );
    $(window).on("load", function() {
        $('.main-contents:nth-of-type(1)').delay(1400).fadeIn("slow");
        $('.main-contents:nth-of-type(2)').delay(1800).fadeIn("slow");
        $('.main-contents:nth-of-type(3)').delay(2200).fadeIn("slow");
        $('.main-contents:nth-of-type(4)').delay(2600).fadeIn("slow");
    });
});