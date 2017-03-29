$(document).ready(function() {

	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
	
	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});
	$(".top_menu ul li a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_menu").click(function(){
		if ($(".top_menu").is(":visible")){
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated")
		} else {
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated")
		}
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .resume_item").animated("fadeInRight", "fadeOutRight");

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup_content").magnificPopup();

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".portfolio_description").attr("id", "work_" + i);
	});

	$(function() {$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();});

	$(".top_menu ul a").mPageScroll2id();

});

$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});