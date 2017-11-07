
$(function() {


  $(".tabs_nav .active_btn_header").mouseover( function() {
    if ($(window).width() > 800){
  $(".hidden_tab_container").empty();
  $(".hidden_tab_container").show(0);
  }
  })
  $(".hidden_tab_container").mouseover( function() {
    $(this).show();

  })

})


$(function() {

  $(".tabs_nav button:nth-child(2)" ).mouseover(function() {
    if($(document).width()>800){
  $(".hidden_tab_container").load("pages/phones.html")
}
  })
  $(".tabs_nav button:nth-child(3)").mouseover(function() {
  $(".hidden_tab_container").load("pages/accesories.html")
  })
  $(".tabs_nav button:nth-child(4)").mouseover(function() {
  $(".hidden_tab_container").load("pages/sound.html")
  })
  $(".tabs_nav button:nth-child(5)").mouseover(function() {
  $(".hidden_tab_container").load("pages/watch.html")
  })
}
)

$(function() {
  var timeout;
  $(".active_btn_header").mouseleave(function() {
      if($(document).width()>800){

  $(".hidden_tab_container").delay(500).fadeOut(0);
}
$(".hidden_tab_container").mouseover( function() {
  $(this).fadeIn(0);

})
  })

  $(".hidden_tab_container").mouseleave( function() {
    $(this).hide(0)
  })


})

$(document).ready(function(){
	$('.mobile_menu_button').click(function(){
		$(this).toggleClass('open');
	});
});


$(".glass_img").click(function(){
  $("nav ul li:first-child").slideToggle();
})

$(".mobile_menu_button").click(function(){
 $("header .tabs_nav").slideToggle();
})
