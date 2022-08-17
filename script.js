$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");

            
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        //rest functions
        // let div =  document.querySelector(".achieve");
        //  let rect = div.getBoundingClientRect();
        //   h = rect.height;
        //  console.log(h)
        //  if(h=700){
        //      let about = document.querySelector(".about-content");
        //      about.style.animation = fadeInLeft ;
        //  }
        if(this.scrollY>=180){
            $('.column.left').addClass("fadeleft");
            $(".column.right.about-img").addClass("animate__fadeInRight")
        }
        if(this.scrollY>=800){
            $('.box').addClass("animate__rollIn")
        }
        
        if(this.scrollY>=1400){
            $('.tilesWrap').addClass("animate__flipInY")
        }
        if(this.scrollY>=2700){
            $('.achieve').addClass("animate__flipInY")
        }
        if(this.scrollY>=3000){
            $('.skills-content').addClass("animate__fadeInRight")
        }
        if(this.scrollY>=3600){
            $('.card').addClass("animate__fadeInLeft")
           
        }
        // if(this.scrollY>=3200){
        //     $('.skills-content').addClass("animate__fadeInRight")
        // }
    });


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java Enthusiast","Web Developer","Front End Enthusiast", "Content Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Java Enthusiast","Web Developer","Front End Enthusiast", "Content Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Try your best until you succeed as F.A.I.L => First Attempt In Learning"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
   
});