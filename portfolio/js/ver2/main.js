$(function(){

	// ハンバーガー矢印部分
	$('.btn-trigger').on('click', function() {
		$('.btn-trigger').toggleClass('active');
		return false;
	});

	// クリックしたら開く：ハンバーガーメニュー
	$('#nav-hamburger').on('click', function(){
		$('.nav-inner').toggleClass('is-active');
		return false;
	});
	// リンク押下で閉じる＆閉まる：ハンバーガーメニュー
	$('.nav-inner ul li a[href^="#"]').on('click', function(){
		$('.btn-trigger').removeClass('active');
		$('.nav-inner').removeClass('is-active');
		return false;
	});

	// ハンバーガーメニュー用
	$('#nav-hamburger').hide();
	// スクロールイベントの設定
	$( window ).scroll( function(){
		// 1秒ごとに処理
		var Timeout = null;
		if( Timeout == null ){
			// セットタイムアウトを設定
			Timeout = setTimeout( function(){
				var now = $( window ).scrollTop();//最上部から現在位置の距離を取得
				if (now > 0) {
					if (window.matchMedia('(min-width: 1024px)').matches) {
						// PC表示の時の処理
						// console.log('テスト');
					} else {
						// スマホ表示の時の処理
						// 下にスクロールされた時
						$('header').fadeOut();
					}
				} else {
					if (window.matchMedia('(min-width: 1024px)').matches) {
						// PC表示の時の処理
						console.log('海賊王におれはなる！');
					} else {
						// 上にスクロールされた時
						$('header').fadeIn();
					}
				}
				// フラグを削除
				Timeout = null;
			});
		}
	});

	// ハンバーガーメニュー用
	$('#nav-hamburger').hide();
	// スクロールイベントの設定
	$( window ).scroll( function(){
		// 1秒ごとに処理
		var Timeout = null;
		if( Timeout == null ){
			// セットタイムアウトを設定
			Timeout = setTimeout( function(){
				var element = $( '#nav-hamburger' );
				var visible = element.is( ':visible' );//現在表示されているか否か
				var now = $( window ).scrollTop();//最上部から現在位置の距離を取得
				var under = $( 'body' ).height() - ( now + $(window).height() );//最下部から現在位置の距離
				if( now > 10 && 100 < under ){// 最上部から現在位置まで > 最下部から現在位置まで
					if( !visible ){ //非表示だったら
						element.fadeIn();
					}
				} else if( visible ){// 100px以下かつ表示状態だったら
					element.fadeOut();
				}
				// フラグを削除
				Timeout = null;
			});
		}
	});

	// タブ
	$('#contents-view-tab1').click(function(){
		$("#contents-view-slide").attr('class', 'move-to-first');
		$(".tab-nav").attr('class', 'tab-nav');
		$("#contents-view-tab1").attr('class', 'tab-nav selected');
	});
	$('#contents-view-tab2').click(function(){
		$("#contents-view-slide").attr('class', 'move-to-second');
		$(".tab-nav").attr('class', 'tab-nav');
		$("#contents-view-tab2").attr('class', 'tab-nav selected');
	});
	$('#contents-view-tab3').click(function(){
		$("#contents-view-slide").attr('class', 'move-to-third');
		$(".tab-nav").attr('class', 'tab-nav');
		$("#contents-view-tab3").attr('class', 'tab-nav selected');
	});

	// slick
	$('.slick-custom').slick({
		lazyLoad: 'ondemand',// or 'progressive'
		autoplay: false,  // オートプレイ
		dots: true,
		arrows: true
	});

	// TOPへ戻る
	$('#btn-top').hide();
	// スクロールイベントの設定
	$( window ).scroll( function(){
		// 1秒ごとに処理
		var Timeout = null;
		if( Timeout == null ){
			// セットタイムアウトを設定
			Timeout = setTimeout( function(){
				var element = $( '#btn-top' );
				var visible = element.is( ':visible' );//現在表示されているか否か
				var now = $( window ).scrollTop();//最上部から現在位置の距離を取得
				var under = $( 'body' ).height() - ( now + $(window).height() );//最下部から現在位置の距離
				if( now > 10 && 100 < under ){// 最上部から現在位置まで > 最下部から現在位置まで
					if( !visible ){ //非表示だったら
						element.fadeIn();
					}
				} else if( visible ){// 100px以下かつ表示状態だったら
					element.fadeOut();
				}
				// フラグを削除
				Timeout = null;
			});
		}
	});

	//アンカーリンク：スムーススクロール
	// #で始まるa要素をクリックした場合に処理
	$('a[href^="#"]').click(function(){
		if(window.matchMedia('(max-width: 480px)').matches) { // スマホ
			var adjust = -40;  // 位置調整
		} else if(window.matchMedia('(max-width: 1024px)').matches) { // タブレット縦長＆スマホ
			var adjust = -60;  // 位置調整
		} else {
		var adjust = -150;  // 位置調整
		};
		var speed = 800; //速度
		var href= $(this).attr("href"); // アンカーの値取得 リンク先（href）を取得
		var target = $(href == "#" || href == "" ? 'html' : href); // 移動先を取得 リンク先(href）のidがある要素を探す
		var position = target.offset().top + adjust; // 移動先を調整 idの要素の位置をoffset()で取得
		$('body,html').animate({scrollTop:position}, speed, 'swing'); //スムーススクロール linear（等速） or swing（変速）
		return false;
	});

	// 画面読み込み時にtransitionのアニメーションを動作させないおまじない
	$(window).on('load',function(){
		$('body').removeClass('preload');
	});
});



