$(document).ready(function() {
    $("div.contact").addClass(" wow animate__bounceInLeft")
    $("div.contact1").addClass(" wow animate__bounceInRight")
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();
    $("#goToTop").hide()
    $(window).scroll(function() {
        
        if($(this).scrollTop() >= 90){
            $("#goToTop").show("slow");
        }
        else{
            $("#goToTop").hide("slow");
        }
    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(".service-contents > .service-content:not(:first-child())").hide()
    $(".service-menu a").click(function(){
        event.preventDefault()
        $(".service-menu a").removeClass()
        $(this).addClass("active")
        var tab = $(this).attr("href")
        $(".service-content").hide()
        $(tab).show()
    })
    var tab1 = $(".service-menu #tab1")
    var tab2 = $(".service-menu #tab2")
    var tab3 = $(".service-menu #tab3")
    var tab4 = $(".service-menu #tab4")
    $(".sub-sv a").click(function(){
        event.preventDefault()             
        var content = $(this).attr("href")
        $(".service-menu a").removeClass()
        if(content === tab1.children().attr("href"))
            tab1.children().addClass("active")
        if(content === tab2.children().attr("href"))
            tab2.children().addClass("active")
        if(content === tab3.children().attr("href"))
            tab3.children().addClass("active")
        if(content === tab4.children().attr("href"))
            tab4.children().addClass("active")
        $(".service-content").hide()
        $(content).show()
    })
    $(".foot-service a").click(function(){
        event.preventDefault()             
        var content = $(this).attr("href")
        $(".service-menu a").removeClass()
        if(content === tab1.children().attr("href"))
            tab1.children().addClass("active")
        if(content === tab2.children().attr("href"))
            tab2.children().addClass("active")
        if(content === tab3.children().attr("href"))
            tab3.children().addClass("active")
        if(content === tab4.children().attr("href"))
            tab4.children().addClass("active")
        $(".service-content").hide()
        $(content).show()
        $("html, body").animate({
            scrollTop: 0
        },2000);
    })
    var x = location.hash;
    
    var tab = ["#tab1", "#tab2", "#tab3", "#tab4"]
    for (var i = 0; i <= 3; i++)
    {
        if(x === tab[i])
        {
            $(".service-menu a").removeClass()
            $(tab[i]).children().addClass("active")
            $(".service-content").hide()
            var a = $(tab[i]).children().attr("href")
            $(a).show()
        }
    }
    $(".icon-menu a").click(function(){
        event.preventDefault()
        if($("div.menu > ul").attr("class") === "unclick-icon-menu")
        {
            $("div.menu > ul").fadeIn(500).addClass("click-icon-menu").removeClass("unclick-icon-menu")
            $(".icon-menu a").css({"border": "1px solid black", "border-radius": "5px"})
        }
        else{
            $("div.menu > ul").fadeOut(500).addClass("unclick-icon-menu").removeClass("click-icon-menu")
            $(".icon-menu a").css({"border": "none"})
        }
    })
})