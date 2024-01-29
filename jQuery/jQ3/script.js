$("#zdj").on("click", function(){
    $(this).animate({
            height:495,
            width:1200,
            opacity: 1
        },
        {
            duration: 1000, //czas animacji
            ease: "swing", //typ animacji
            complete: function() { //funkcja zwrotna
            }
        }
    );
});