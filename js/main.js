$(document).ready(function() {
    $(".imgLiquidFill").imgLiquid();

    $(".page[data-page='5'] .bottomArea .history_build_box").each(function(key){
    	var count = $(".history_build_box:eq("+key+") .swiper-container .swiper-slide").length;
    	console.log(key, count);
	    new Swiper(".history_build_box:eq("+key+") .swiper-container", {
	        // Optional parameters
	        loop: true,
	        // Navigation arrows
	        nextButton: ".history_build_box:eq("+key+") .swiper-button-next",
	        prevButton: ".history_build_box:eq("+key+") .swiper-button-prev",
	        slidesPerView: count,
	        breakpoints: {
	            
	            450: {
	                slidesPerView: 1,
	            },
	            600: {
	                slidesPerView: 2,
	            },
	            
	        }
	    });    	
    });
});
