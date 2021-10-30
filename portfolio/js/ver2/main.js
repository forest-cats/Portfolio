// TOPへ戻る
$(function(){
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
				if( now > 100 && 100 < under ){// 最上部から現在位置まで > 最下部から現在位置まで
					if( !visible ){ //非表示だったら
						element.fadeIn();
					}
				} else if( visible ){// 100px以下かつ表示状態だったら
					element.fadeOut();
				}
				// フラグを削除
				Timeout = null;
			} );
		}
	} );
} );


//アンカーリンク：スムーススクロール
$(function(){
	// #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
	$('a[href^="#"]').click(function(){
		var adjust = -150;  // 位置調整
		var speed = 800; //速度
		// アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
		var href= $(this).attr("href");
		// 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
		var position = target.offset().top + adjust;
		// スムーススクロール linear（等速） or swing（変速）
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});


// 画面読み込み時にtransitionのアニメーションを動作させないおまじない
$(function () {
	$(window).on('load',function(){
		$('body').removeClass('preload');
	});
});

