
$(function() {


  $(".tabs_nav .actibe_btn_header").mouseover( function() {
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



  $(".tabs_nav button:nth-child(2)").mouseleave(function() {
      if($(document).width()>800){
  $(".hidden_tab_container").hide()
}
  })
  $(".tabs_nav button:nth-child(3)").mouseleave(function() {
    $(".hidden_tab_container").hide()
  })
  $(".tabs_nav button:nth-child(4)").mouseleave(function() {
    $(".hidden_tab_container").hide()
  })
  $(".tabs_nav button:nth-child(5)").mouseleave(function() {
    $(".hidden_tab_container").hide()
  })
  $(".hidden_tab_container").mouseleave( function() {
    $(this).delay(300).hide(0)
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
