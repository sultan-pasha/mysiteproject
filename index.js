$(document).ready(function(){
    $(".form-control").hide();  
        $("#close_bttn").hide();
    $("#search_bttn").click(function(){
        $(".form-control").toggle(250);
        $(".navbar-brand").toggle(250);
        $(".nav-link").toggle(250);
        $(".navbar-toggler-icon").toggle(250);
        $(".navbar-toggler").toggle(250);
$(".close").click(function(){
    $(".form-control").hide(250);
    $(".navbar-brand").show(250);
    $(".nav-link").show(250);
    $(".navbar-toggler-icon").show(250);
    $(".navbar-toggler").show(250);

    });
    });
});