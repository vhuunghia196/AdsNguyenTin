$(document).ready(function() {
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
        
        if($(this).scrollTop() >= 80){
            $("#goToTop").show("slow");
            $(".product-menu").css({"position": "fixed", "top": "60px"})
        }
        else{
            $("#goToTop").hide("slow");
            $(".product-menu").css({"position": "relative", "top": "0"})
        }
    })
    $("#goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(".product-content:not(:first-child())").hide()
    $(".product-menu a").click(function(){
        event.preventDefault()
        var tab = $(this).attr("href")
        $(".product-content").hide()
        $(tab).show()
        $(".product-menu a").removeClass()
        $(this).addClass("active")
    })
    $(".foot-product a, .sub-pd a").click(function(){
        event.preventDefault()
        var tab = $(this).attr("href")
        $(".product-content").hide()
        $(tab).show()
        $(".product-menu a").removeClass()
        var a = document.querySelectorAll(".product-menu a")
        for(var j = 0; j < 4; j++)
        {
            if($(a[j]).attr("href") === tab)
            {
                $(a[j]).addClass("active")
            }
        }
        $("html, body").animate({
            scrollTop: 0
        }, 0)
    })
    var sub= ["#led", "#alu", "#hd", "#mica"]
    var x = location.hash
    for(var i = 0; i <= 3; i++)
    {
        if(x === sub[i])
        {
            $(".product-content").hide()
            $(sub[i]).show()
            $(".product-menu a").removeClass()
            var a = document.querySelectorAll(".product-menu a")
            for( var j = 0; j < 4; j++)
                if($(a[j]).attr("href") === sub[i])
                    $(a[j]).addClass("active")
        }
    }
    
    $(".product-content-contents a").click(function(){
        event.preventDefault()
        var img = $(this).children().children().attr("src")
        $(".zoom").prepend(`
            <div class="bg-zoom">
                <img src="${img}" alt="image" class="zoom1"/>
                <a href="#" class="close">X</a>
            </div>
        `)
    })
    $(".zoom").on("click", ".close", function(){
        event.preventDefault()
        $(this).parent().remove()
    })
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