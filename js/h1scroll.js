

// // open and closing menu functions
//  function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }

// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }

function showCoords(event) {
  var x = event.pageX;
  var y = event.pageY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  // console.log(coords);
}


// change fixed h1 while scrolling through sections
$(document).ready(function () {

	$(window).scroll(function () { 
		// console.log(document.body.clientHeight)

		// var x = $(this).scrollTop(); 
		// console.log(x); 

		var mySecs = document.querySelectorAll("section");
		var myHeights = [mySecs[0].offsetHeight];
		// myHeights[0] = myHeights[0] - myHeights[0]*1/14 ;

		for (var i = 1; i < 10; i++){
			myHeights[i] = myHeights[i-1] + mySecs[i].offsetHeight;
		}
		var hght = (document.body.clientHeight);
		// console.log(hght);
		// console.log(myHeights);

		//thesi ipsous ton <hr> (pou einai anamesa se kathe section) sto sinolo tou body
		var hrs = document.querySelectorAll("hr");
		var grid = [];
		for(var i = 0; i < hrs.length; i++ ){
			var bodyRect = document.body.getBoundingClientRect();
    		elemRect = hrs[i].getBoundingClientRect();
    		grid[i] = elemRect.top - bodyRect.top;			
		}

		//thesi ipsous to h1 sto sinolo tou body
		var h1 = document.querySelector("h1");
		var bodyRect = document.body.getBoundingClientRect();
		elemRect = h1.getBoundingClientRect();
		var h1Pos = elemRect.top - bodyRect.top;
		grid[0] = grid[0] - grid[0]*1/10;

		// grid[0] = grid[0] * 0;

		// console.log('Element is ' + offset + ' vertical pixels from <body>');

		var imgs = $(".myImg");
		var imgsH = [imgs[0].outerHeight];


    	if (h1Pos < (grid[0]))
    	{	
			$('h1').html('<br>Καλως ηρθατε στο ταξιδι');
			// Ενα ταξιδι που γινεται σε ενα βιωματικο σχολειο Στο Κεντρο Ξενων γλωσσων ΔΙΑΔΡΑΣΗ
			$("h1").removeClass("abHead prHead methHead tmHead eduHead neaHead mlHead").addClass("headerH1");
    	}
    	else if ((h1Pos > (grid[0])) && (h1Pos < grid[1]))
    	{ 
        //change yes to no
        	$('h1').html("γνωριμια");
        	$('h1').removeClass("headerH1 prHead methHead tmHead eduHead neaHead mlHead").addClass("abHead");
		}
    	else if ((h1Pos > grid[1]) && (h1Pos < grid[2]))
    	{
        //set h1 text to yes
        	$('h1').html('Προτεραιοτητες');	
			$('h1').removeClass("headerH1 abHead methHead tmHead eduHead neaHead mlHead").addClass("prHead");
    	}
    	else if ((h1Pos > grid[2]) && (h1Pos < grid[3]))
		{
			$("h1").html('Μεθοδολογια');
			$('h1').removeClass("headerH1 abHead prHead tmHead eduHead neaHead mlHead").addClass("methHead");        	
		}
		else if ((h1Pos > grid[3]) && (h1Pos < grid[4]))
		{
			$("h1").html('ΤΜΗΜΑΤΑ');
			$('h1').removeClass("headerH1 abHead prHead methHead eduHead neaHead mlHead").addClass("tmHead");        	

		}
		else if ((h1Pos > grid[4]) && (h1Pos < grid[5]))
		{
			$("h1").html('ΕΚΠΑΙΔΕΥΣΗ');
			$('h1').removeClass("headerH1 abHead prHead methHead tmHead neaHead mlHead").addClass("eduHead");        	

		}
		else if ((h1Pos > grid[5]) && (h1Pos < grid[6]))
		{
			$("h1").html('ΝΕΑ');
			$('h1').removeClass("headerH1 abHead prHead methHead tmHead eduHead mlHead").addClass("neaHead");        	

		}
		else if ((h1Pos > grid[6]) && (h1Pos < grid[7]))
		{
			$("h1").html('MUTUAL LOVE');
			$('h1').removeClass("headerH1 abHead prHead methHead tmHead neaHead eduHead").addClass("mlHead");        	

		}
		// else if (($(this).scrollTop() > grid[7]) && ($(this).scrollTop() < grid[8]))
		// {
		// 	$("h1").html('ΕΠΙΚΟΙΝΩΝΙΑ');
		// }
		// else if (($(this).scrollTop() > grid[8]) && ($(this).scrollTop() < grid[9]))
		// {
		// 	$("h1").html('ΣΥΝΔΕΣΜΟΙ');
		// }

		// var textWrapper = document.querySelector('.ml12');
		// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	});
});

