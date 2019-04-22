$('document').ready(function(){
    $('.btn-first').hover(
        function(){
            $(this).css("background", "#394550");
            $(this).css("border-top", "1px solid #25aae3");
            $('.first-card').css("background", "#394550");
        },
        function(){
            $(this).css("background", "#25aae3");
            $(this).css("border-top", "1px solid #394550");
            $('.first-card').css("background", "#25aae3");
        }
);
     $('.btn-second').hover(
        function(){
            $(this).css("background", "#394550");
            $(this).css("border-top", "1px solid #25aae3");
            $('.second-card').css("background", "#394550");
        },
        function(){
            $(this).css("background", "#25aae3");
            $(this).css("border-top", "1px solid #394550");
            $('.second-card').css("background", "#25aae3");
        }
);
     $('.btn-third').hover(
        function(){
            $(this).css("background", "#394550");
            $(this).css("border-top", "1px solid #25aae3");
            $('.third-card').css("background", "#394550");
        },
        function(){
            $(this).css("background", "#25aae3");
            $(this).css("border-top", "1px solid #394550");
            $('.third-card').css("background", "#25aae3");
        }
);
});