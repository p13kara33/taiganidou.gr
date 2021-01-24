




// change fixed h1 while scrolling through sections
$(document).ready(function () {

	$(window).scroll(function () {

		var mySecs = document.querySelectorAll("section");
		var myHeights = [mySecs[0].offsetHeight];


		for (var i = 1; i < 10; i++){
			myHeights[i] = myHeights[i-1] + mySecs[i].offsetHeight;

		}


    	if ($(this).scrollTop() < myHeights[0])
    	{	
			$('h1').html('<br><br>κεντρο ξενων γλωσσων');

    	}
    	else if (($(this).scrollTop() > myHeights[0]) && ($(this).scrollTop() < myHeights[1]))
    	{ 
        //change yes to no
        	$('h1').html('<br><br>ποιοι ειμαστε');
    	} 
    	else if (($(this).scrollTop() > myHeights[1]) && ($(this).scrollTop() < myHeights[2]))
    	{
        //set h1 text to yes
        	$('h1').html('<br><br>Προτεραιοτητες');
    	}
    	else if (($(this).scrollTop() > myHeights[2]) && ($(this).scrollTop() < myHeights[3]))
		{
			$("h1").html('<br><br>Μεθοδολογια');
		}
		else if (($(this).scrollTop() > myHeights[3]) && ($(this).scrollTop() < myHeights[4]))
		{
			$("h1").html('<br><br>ΓΛΩΣΣΕΣ & ΤΜΗΜΑΤΑ');
		}
		else if (($(this).scrollTop() > myHeights[4]) && ($(this).scrollTop() < myHeights[5]))
		{
			$("h1").html('<br><br>ΕΚΠΑΙΔΕΥΣΗ');
		}
		else if (($(this).scrollTop() > myHeights[5]) && ($(this).scrollTop() < myHeights[6]))
		{
			$("h1").html('<br><br>ΝΕΑ - PROJECTS');
		}
		else if (($(this).scrollTop() > myHeights[6]) && ($(this).scrollTop() < myHeights[7]))
		{
			$("h1").html('<br><br>MUTUAL LOVE');
		}
		else if (($(this).scrollTop() > myHeights[7]) && ($(this).scrollTop() < myHeights[8]))
		{
			$("h1").html('<br><br>ΕΠΙΚΟΙΝΩΝΙΑ');
		}
		else if (($(this).scrollTop() > myHeights[8]) && ($(this).scrollTop() < myHeights[9]))
		{
			$("h1").html('<br><br>ΣΥΝΔΕΣΜΟΙ');
		}
	});
});
// var section = document.querySelectorAll("section")[0];
// var h1 = section.querySelectorAll("div")[1];
// h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>κεντρο ξενων γλωσσων</h1>"
// // console.log(h1.innerHTML);


// // var my_sec = document.getElementsByTagName("section");


// var my_sec = document.querySelectorAll("section")[1];


// inView('#homeSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>κεντρο ξενων γλωσσων</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});


// // inView('#aboutSec').on('enter', function(el){
// // 		var h1 = section.querySelectorAll("div")[1];
// // 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ποιοι ειμαστε</h1>";})
// // 	.on("exit", el => {el.style.opacity = 1});

// inView('#priorSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ΠΡΟΤΕΡΑΙΟΤΗΤΕΣ</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});

// inView('#methSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ΜΕΘΟΔΟΛΟΓΙΑ</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});

// inView('#langSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ΓΛΩΣΣΕΣ & ΤΜΗΜΑΤΑ</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});

// inView('#eduSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ΕΚΠΑΙΔΕΥΣΗ</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});

// inView('#projSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ΝΕΑ - PROJECTS</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});

// inView('#loveSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>MUTUAL LOVE</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});

// inView('#contactSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ΕΠΙΚΟΙΝΩΝΙΑ</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});

// inView('#linkSec').on('enter', function(el){
// 		var h1 = section.querySelectorAll("div")[1];
// 		h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ΣΥΝΔΕΣΜΟΙ</h1>";})
// 	.on("exit", el => {el.style.opacity = 1});
// var h11 = my_sec.querySelectorAll("h1")[0];
// h11.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>κεντρο ξενων γλωσσων</h1>"



// console.log(my_sec);
// if (my_sec == "aboutSec") {
// 	h1.innerHTML = "<h1 class='text-center align-self-center text-uppercase align-middle'><br><br>ποιοι ειμαστε</h1>";
// } 

