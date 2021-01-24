
function delayUrlLoad(url, mils)
{
    setTimeout(function() {
        window.location.href = url;
    }, mils)
}

$(document).ready(function () {


	// $(".pageTrip").click(function(){
	// 	$("html, body").animate({
	// 			scrollTop: $(this).offset().top
	// 	});
	// 	$(".tr").addClass("FS");
	// 	$(".bC").addClass("bCL");
	// });

	$("#clickAbout").click(function(){
		$("html, body").animate({
			scrollTop: $("#fAbout").offset().top
		});
		$("#imAb").addClass("FS");
		$(".bC").addClass("bCL");
	});

	$("#clickPrior").click(function(){
		$("html, body").animate({
			scrollTop: $("#fPrior").offset().top
		});
		$("#imPr").addClass("FS");
		$(".bC").addClass("bCL");
	});

	$("#clickMeth").click(function(){
		$("html, body").animate({
			scrollTop: $("#fMeth").offset().top
		});
		$("#imM").addClass("FS");
		$(".bC").addClass("bCL");
	});

	$("#clickLang").click(function(){
		$("html, body").animate({
			scrollTop: $("#fLang").offset().top
		});
		$("#imLg").addClass("FS");
		$(".bC").addClass("bCL");
	});

	$("#clickEdu").click(function(){
		$("html, body").animate({
			scrollTop: $("#fEdu").offset().top
		});
		$("#imEd").addClass("FS");
		$(".bC").addClass("bCL");
	});

	$("#clickProj").click(function(){
		$("html, body").animate({
			scrollTop: $("#fProj").offset().top
		});
		$("#imPj").addClass("FS");
		$(".bC").addClass("bCL");
	});

});

