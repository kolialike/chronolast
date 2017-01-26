!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;g>f;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&10>m&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var f=[],g=[],h={precision:100,elapse:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&0>b?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});
var heightlala = "";
var date_timer   = '2016-12-31 08:00:03';
$(document).ready(function() {
    
    $('#timer').countdown(date_timer, function(event) {
        $(".days strong").html(event.strftime('%D'));
        $(".hours strong").html(event.strftime('%H'));
        $(".minutes strong").html(event.strftime('%M'));
        $(".secs strong").html(event.strftime('%S'));
    });


    $("#slider").slider({
        range: true,
        min: 10,
        max: 10000,
        values: [ 10, 10000 ]
    });
    
});

jQuery(function($){

//favorite
  $(".fav").on('click', '.fav-item', function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
  });
//favorite

  var galleryTop = new Swiper('.main-slider .gallery-top', {
        spaceBetween: 10,
        slidesPerView: 1,
        initialSlide: 2,
    });
    var galleryThumbs = new Swiper('.main-slider .gallery-thumbs', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        initialSlide: 2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;



    //Табы по индексу
    var institutionSmallPictures = $(".adv-search-l-item > a");
    var institutionBigPictures = $(".adv-search-tabs > .tabs-content");
    institutionSmallPictures.on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var index = institutionSmallPictures.index($(this));
      institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
    });
    //Табы по индексу


    //Табы по индексу
    var watchesTabs = $(".watches-tabs .watches-tabs-items");
    var watchesTabsContentItem = $(".watches-tabs-content > .watches-tabs-content-item");
    watchesTabs.on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var index = watchesTabs.index($(this));
      watchesTabsContentItem.eq(index).addClass('active').siblings().removeClass('active');    
    });
    //Табы по индексу

    //Табы по индексу
    var watchesNavigation = $(".watches-navigation > .watches-navigation-step");
    var watchesNavigationContent = $(".watches-l > .watches-navigation-content");
    watchesNavigation.on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var index = watchesNavigation.index($(this));
      watchesNavigationContent.eq(index).addClass('active').siblings().removeClass('active');    
    });
    //Табы по индексу


    //Табы по индексу
    var selectSellingOtions = $(".select-selling-otions > .select-selling-otions-tabs");
    var selectSellingOtionsContent = $(".select-selling-otions-tabs-content > div");
    selectSellingOtions.on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var index = selectSellingOtions.index($(this));
      selectSellingOtionsContent.eq(index).addClass('active').siblings().removeClass('active');
      // $(".watches-content").height()-75;
    });
    //Табы по индексу

    // function Tabs () {
    //     tabs.on('click', function(event) {
    //         event.preventDefault();
    //         $(this).addClass('active').siblings().removeClass('active');
    //         var index = tabs.index($(this));
    //         tabsContent.eq(index).addClass('active').siblings().removeClass('active');
    //     });
    // }

    //header-menu
    var body = $("body");
    // $(".services-r-item").on('click', function(event) {
    //     event.preventDefault();
    //     $(this).toggleClass('active').siblings().removeClass('active');
    // });
    $(".message-file-all").on('click', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('open');
    });

    $(".MyChronoCash").on('click', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('open');
    });

    $(".bids").on('click', function(event) {
        event.preventDefault();
        $(this).parent().parent().toggleClass('bids-open');
    });
    //header-menu


    // faq
    var faq = $(".faq-menu li");
    faq.on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(".faq-r-item .title").on('click', function(event) {
        $(this).parent().toggleClass('open').siblings().removeClass('open');        
    });
    // faq


    //Slider
    var swiper = new Swiper('.seller .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        // spaceBetween: 30
        breakpoints: {
        // when window width is <= 320px
            500: {
              slidesPerView: 1,
              // spaceBetween: 10
            },
            // when window width is <= 480px
            800: {
              slidesPerView: 2,
              // spaceBetween: 20
            },
            // when window width is <= 640px
            1200: {
              slidesPerView: 3,
              // spaceBetween: 30
            }
        }
    });
    //Slider

    //modal-popup
    var static_modal = "";
    var getIdCModal = false;
    $(document).on('click', '[data-modal]', function(e) {

       e.preventDefault();
       var thisId = $(this).data('modal')?"#"+$(this).data('modal'):$(this).attr('href'),
           modalBlock = $(".datamodal"+thisId);
            
        if($(this).data('modalcopy')) {
            copyModals(thisId);
            return false;
        }

       static_modal = thisId;
       modalBlock.addClass('active');
       $("body").addClass('active-modal');
        
       $('.modalclose', modalBlock).on('click', function(e) {
           modalBlock.removeClass('active');
           $('body').removeClass('active-modal');
       });
    });
    function copyModals(id) {
        getIdCModal = 'onloadmodal'+getRandomInt(1111, 9999);
       $("body").addClass('active-modal').append('<div class="datamodal active" id="'+getIdCModal+'">'+$(id).html()+'</div>');
        if($("#"+getIdCModal).length>0) {
            $('.modalclose', "#"+getIdCModal).on('click', function(e) {
                $("#"+getIdCModal).detach();
                $('body').removeClass('active-modal');
                getIdCModal = false;
            });
        }
    }
    function getRandomInt(min, max) {
        min = min || 1;
        max = max || 99999999999;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //modal-popup

    $(".buy-it-now").draggable();


    // mobile-language
    // $(".mobile-menu-item > .language > a").on('click', function(event) {
    //     event.preventDefault();
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    // mobile-language

    // content-menu, active
    // var contentMenu = $(".content-menu > ul > li");
    // contentMenu.on('click', function(event) {
    //     event.preventDefault();
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    // content-menu, active

    var poMenuLi = $(".po-menu > li");
    poMenuLi.on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var index = poMenuLi.index($(this));
        $(".po-info-bottom-r > div").eq(index).addClass('open').siblings().removeClass('open');
    });
// var institutionSmallPictures = $(".institution-small-pictures").find("a");
//   var institutionBigPictures = $(".institution-big-pictures").find("img");
//   institutionSmallPictures.on('click', function(event) {
//       event.preventDefault();
//       $(this).addClass('active').siblings().removeClass('active');
//       var index = institutionSmallPictures.index($(this));
//       institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
//   });

    // menu-list-tile
      var menuTileList = $(".menu-tile-list a");
      var menuTile = $("#menu-tile");
      var menuList = $("#menu-list");
      menuTileList.on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var index = menuTileList.index($(this));
        if (index == 0) {
            menuTile.addClass('open');
            menuList.removeClass('open');
        } else {
            menuTile.removeClass('open');
            menuList.addClass('open');
        }
      });
    // menu-list-tile
    

    // var body = $("body")

    // menu
    var menuBurger = $(".menu-burger");
    menuBurger.on('click', function(event) {
        event.preventDefault();
        body.toggleClass('mobile-menu-open');
    });
    var mobileMenu = $(".mobile-menu");
    mobileMenu.on('click', function(event) {
        event.preventDefault();
        body.removeClass("mobile-menu-open");
    });
    var mobileMenuItem = $(".mobile-menu-item");
    mobileMenuItem.on('click', function(event) {
        var thisLala = event.target;
        if(!$(thisLala).data('lang')) event.stopPropagation();
    });

    function headerFixed() {
        var $menu = $('.header-bottom'); 
        if($menu.length > 0){
            var menuTop = $menu.offset().top;
            var windowTop = $window.scrollTop();
            if(windowTop >= menuTop){
                body.addClass("fixed-header");
            }else{
                body.removeClass("fixed-header");
            }
        }
    }

    var $window = $(window);
        //fixed-header-menu
    $(document).ready(function() {
        headerFixed();
        // console.log(222);
    });
    $(window).on('scroll', function() {
        // console.log(111);
        headerFixed();
    });

    $(window).resize(function() {
        headerFixed();
        //fixed-header-menu

            // console.log($menu.offset());

        // fixed-catalog-menu
        var $filter = $('.filter');
        if($filter.length > 0){
                 
                var menuTopNew = $filter.offset().top-52;
                $window.on('scroll', function() {
                    var windowTop = $window.scrollTop();
                    if(windowTop >= menuTopNew){
                        body.addClass("fixed-filter");

                    }else{
                        body.removeClass("fixed-filter");
                    }
                });
            
        }
        //fixed-catalog-menu


        $(".add-to-wishlist").on('click', function(event) {
            $(this).toggleClass('active');
        });

        // fixed-content-menu
            var contentMenu = $('.content-menu'); 
         if(contentMenu.length > 0){
                 
                var menuTopNew3 = contentMenu.offset().top-52;
                $window.on('scroll', function() {
                    var windowTop = $window.scrollTop();
                    if(windowTop >= menuTopNew3){
                        body.addClass("fixed-content-menu");
                        // $menu.css('box-shadow', '0,0,0,0,0');
                    }else{
                        body.removeClass("fixed-content-menu");
                    }
                });
            
        }
        //fixed-content-menu


        // fixed-po-menu

        var poInfoBottom = $('.po-info-bottom-fix'); 
         if(poInfoBottom.length > 0){
                 
                var menuTopNew2 = poInfoBottom.offset().top-52;
                $window.on('scroll', function() {
                    var windowTop = $window.scrollTop();
                    if(windowTop >= menuTopNew2){
                        body.addClass("fixed-po-menu");
                        // $menu.css('box-shadow', '0,0,0,0,0');
                    }else{
                        body.removeClass("fixed-po-menu");
                    }
                });
            
         };
        //fixed-po-menu
    //fixed-watches-r
    });
    // var $window = $(window);
    var watches = $('.watches-r'); 
     if(watches.length > 0){
        $(window).resize(function() {
              if($(window).width() > 1023){
                heightlala = $(".watches-content").height()-75;
                setTimeout(function(){      
                    var menuTopNew = watches.offset().top-92;
                    $window.on('scroll', function() {
                        var windowTop = $window.scrollTop();
                        if(windowTop > menuTopNew) {
                            body.addClass("watches-fixes").removeClass('watches-stop-fixed');
                            $(".watches-navigation").css('top', '95px');
                        } else {
                            body.removeClass("watches-fixes");
                            $(".watches-navigation").css('top', '95px');
                        }
                        if(windowTop > heightlala) {
                            body.removeClass("watches-fixes").addClass('watches-stop-fixed');
                            $(".watches-navigation").css('top', heightlala-275);
                        }
                        
                    });
                }, 1500);
            } else {
                
            }
        });
    }
    //fixed-watches-r




    $(".watches-navigation-step").on('click', function(event) {
        event.preventDefault();
        heightlala = $(".watches-navigation-content.active").height()-75;
    });
      $(".select-2").select2({ width: '100%' });


    $(".filter-fix > .filter-a > a").on('click', function(event) {
        // event.preventDefault();
        // event.stopPropagation();
        $(this).parent().toggleClass('open').siblings().removeClass('open');
        // $(".cancel").removeClass('open');
        var scrollTo = $("#filter");

        // body.stop().animate({
            // scrollTop: scrollTo.offset().top - body.offset().top + body.scrollTop()
        // });
        if ($(".filter-a").hasClass('open')) {
            body.addClass('filter-a-submenu-open');
            // console.log(1111);
        }else {
            body.removeClass('filter-a-submenu-open');
            // console.log(222);
        }
    });
    //filter-submenu
    $(".filter-item-container > p").on('click', function(event) {
      // event.preventDefault();
      $(this).parent().toggleClass('open');
    });
    //filter-submenu
    
});


       
// $(document).ready(function(e) {

//     if($(".news-full").length > 0) {


//         $(document).on('scroll', function(event) {
//             var $window = $(window);
//             var $newsFullR = $('.news-full-r'); 
//             var newsFullTop = $(".news-full").offset().top-118;
//             var blockHeight = $(".news-full > .wrapper").height()+$(".news-full > .wrapper").offset().top;
//             var windowTopV = $window.scrollTop();
//             var windowTopV = $window.scrollTop();
//             if(windowTopV > newsFullTop) $newsFullR.addClass("news-full-r-f-fixed");
//             else  $newsFullR.removeClass('news-full-r-f-fixed').removeClass('bottabs-news');
//             if(  windowTopV >= $(".news-full > .wrapper").height()-268) $newsFullR.addClass('bottabs-news').removeClass('news-full-r-f-fixed');


//         });


//     };
// });


$(document).click(function(e) {
    var div = $(".header-bottom-r");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
       $('.MyChronoCash-container').removeClass('open');
    }

});
// $(document).click(function(e) {
//     var div = $(".header-bottom-r");
//     if (!div.is(e.target) && div.has(e.target).length === 0) {
//        $('.message-file-container').removeClass('open');
//     }

// });
$(document).click(function(e) {
    var div = $(".filter-item, .filter-fix > .filter-a");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
       $(".filter-fix > .filter-a").removeClass('open');
       $("body").removeClass('filter-a-submenu-open');
       $(".cancel").removeClass('open');
    }

});
// $(document).click(function(e) {
//     var div = $(".filter-item-container, .filter-item-container-sub");
//     if (!div.is(e.target) && div.has(e.target).length === 0) {
//        $(".filter-item-container").removeClass('open');
//     }

// });

$(document).ready(function() {
    $("a.scrollto").click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top-104;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
    });
});

$(document).ready(function() {
    $(document).on('change', '.newinp > input', function() {
        if($(this).val() != "") $(this).addClass('notempty');
            else $(this).removeClass('notempty');
    });
    $(".newinp > input", document).each(function() {
        if($(this).val() != "") $(this).addClass('notempty');
            else $(this).removeClass('notempty');
    });
});

$(document).on('click', '.show-password', function(event) {
    $('input.input-password').attr('type', ($('input.input-password').attr('type') == 'password') ? 'text' : 'password');
});