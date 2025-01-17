(function($){$(function(){
    /*====================
     *
     * slickスライダー
     *
     ====================*/
    // top > newsのスライダー
    $(".slider-multiple").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="arrow-prev"></button>',
        nextArrow: '<button class="arrow-next"></button>',
        responsive: [{
            breakpoint: 415,
            settings: "unslick"
        }]
    });

    // top > キービジュアルのスライダー
    $(".slider-kv").slick({
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 1800,
        responsive: [{
            breakpoint: 415,
            settings: {
                dots: false
            }
        }]
    });

    // ギャラリースライダー（共有施設・ギャラリー）
    let slider_photo_setting_base = {
        infinite: false,
        asNavFor: '.slider-gallery_nav',
        prevArrow: '<button class="arrow-prev"></button>',
        nextArrow: '<button class="arrow-next"></button>',
    };

    // ギャラリースライダーのナビゲーションスライダー（共有施設・ギャラリー）
    let slider_photo_nav_setting_base = {
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-photo',
        focusOnSelect: true,
        swipeToSlide: true,
        arrows: false
    };

    const common_facilities_area = [
        "entrance",
        "rounge",
        "guest-room",
        "open-garden",
        "activity-space",
        "cabin",
        "owners-living",
        "kids",
        "parking",
        "emergency",
        "other",
    ];

    const event = [
        "tanabata",
        "halloween",
        "illumination"
    ];

    common_facilities_area.forEach(($target) => {
        let tmp_setting = {...slider_photo_setting_base};
        let tmp_nav_setting = {... slider_photo_nav_setting_base};

        tmp_setting['asNavFor'] = "." + $target + " .slider-gallery_nav";
        tmp_nav_setting['asNavFor'] = "." + $target + " .slider-photo";

        $("." + $target + " .slider-photo").slick(tmp_setting);
        $("." + $target + " .slider-gallery_nav").slick(tmp_nav_setting);
    });

    event.forEach(($target) => {
        let tmp_setting = {...slider_photo_setting_base};
        let tmp_nav_setting = {... slider_photo_nav_setting_base};

        tmp_setting['asNavFor'] = "." + $target + " .slider-gallery_nav";
        tmp_nav_setting['asNavFor'] = "." + $target + " .slider-photo";

        $("." + $target + " .slider-photo").slick(tmp_setting);
        $("." + $target + " .slider-gallery_nav").slick(tmp_nav_setting);
    });

    /*====================
     *
     * ライトボックス
     *
     ====================*/
    lightbox.option({
        'alwaysShowNavOnTouchDevices' : true,
        'disableScrolling': true,
        'positionFromTop': 100
    });

    /*====================
     *
     * ゾーン切り替え処理
     *
     ====================*/
    let zone_anchor = $(".zone-anchor");
    let zone_section = $(".zone-section");

    zone_anchor.on("click", function($e){
        // クリックした対象ゾーンを洗い出す
        target_class_name = $($e.currentTarget).attr("class").slice(12); //zone-anchorを削除

        if(target_class_name.indexOf('current') >= 0) {
            target_class_name = target_class_name.slice(0, -8); //currentを削除
        }

        // 全てのボタンからcurrentを外す
        zone_anchor.removeClass("current");
        zone_section.removeClass("current");

        // 同じゾーンのボタンを全てcurrentにする
        $(".zone-anchor." + target_class_name).addClass("current");
        $(".zone-section." + target_class_name).addClass("current");
    });

    /*====================
     *
     * スムーズスクロール
     *
     ====================*/
    $('a[href^="#"]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = 0;
        // スクロールの速度（ミリ秒）
        var speed = 400;
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

    /*====================
     *
     * レイジーロード
     *
     ====================*/
    $(window).on('scroll', function (){

        var elem = $('.concept_point');
        var isAnimate = 'animation-start';

        elem.each(function () {

            var elemOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();

            if(scrollPos > elemOffset - wh + (wh / 2) ){
                $(this).addClass(isAnimate);
            }
        });
    });

    /*====================
     *
     * SPナビ
     *
     ====================*/
    const ham = $('.site-header_hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = $('.site-header_panel'); //js-navの要素を取得し、変数navに格納
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
        ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
        $("body").toggleClass('active');
    });

    /*====================
     *
     * Google map
     *
     ====================*/


});})(jQuery);