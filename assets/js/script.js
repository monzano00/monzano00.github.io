/* Width of each carousel image, in pixels */
// let carouselWidth = 400; 

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  pageDots: false
  flickity.
});

// Finally, how do we know what to change the image row position to? In our CSS, we picked the dimensions for the "picture frame," and also made our images that same size. In our JavaScript, if we keep track of the image we are currently displaying, then the total offset amount would be width of image × how many images from the left.


// For example: Suppose we know we're currently on image #2 and that each image is 400px wide. To display the next image, we know it is image #3. 400 pixels × 2 images = 800 pixels to the left. This is a negative number if you think of the left edge of the frame as zero! So we would set the CSS to left: -800px;.


// when the user clicks on the Next button, run code that will shift the image strip to the left by changing the image strip CSS.
// when the user clicks on the Previous button, run code that will shift the image strip the right by changing the image strip CSS.

/* Part 1.1: Get the elements */
// let prevButton = document.getElementById("button-previous");
// let nextButton = document.getElementById("button-next");
// nextButton.classList.add("hidden");

// prevButton.classList.toggle("hidden");


// using js to change images
// using js to change hover elements
// using js for automatic carousel

if (document.getElementById("left")){
	let imageRow = document.getElementById("left");
}

if ( document.getElementById("coding-projects")) {
	let codingproject = document.getElementById("coding-projects");

}

if ( document.getElementById("digit")) {
	let digit = document.getElementById("digit");

}

digit.style.webkitAnimationPlayState = "paused";

var play = digit.animate(
	
)

function codingmouseover() {
	digit.style.webkitAnimationPlayState = "running";
}

function codingmouseout() {
	digit.style.webkitAnimationPlayState = "paused";
}



// codingproject.onmouseover = function() {codingmouseover()};

// codingproject.onmouseout = function() {codingmouseout()};


if (document.getElementById("timestampberkeley")) {
	let berk = document.getElementById("timestampberkeley");
	let riv = document.getElementById("timestampriverside");
	let norcoc = document.getElementById("timestampnorcoc");
	let norcoh = document.getElementById("timestampnorcoh");
	let schooltext = document.getElementById("schooltext");
	let schoolpic = document.getElementById("schoolpic");


	function showText(photo, text) {
		schoolpic.innerHTML = photo;
		schooltext.innerHTML = text;



	}

	norcoh.onclick = function() {showText("assets/img/Education/norcoh.jpg",
		"Activities and Societies: Future Business Leaders oft America (FBLA), Friday Night Live (FNL), Key Club, California Scholarship Federation."
	)}
}


// var flkty = new Flickity( '.carousel', {
// 	imagesLoaded: true,
// 	percentPosition: false
//   });

// var caption = document.querySelector('.caption');

// flkty.on( 'select', function() {
//   // set image caption using img's alt
//   caption.textContent = flkty.selectedElement.alt;
// });


/* Part 1.2: Create variable to keep track of which image we're on */



let imageNum = 0;


checkControls();

/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	// change imageNum
	
	imageNum = imageNum + 1;

	// how many pixels from the left should imageRow now be?

	let pixels = -carouselWidth * imageNum;

	// change css for imageRow

	imageRow.style.left = pixels;
	// want to remove pixels from the left

	checkControls();

}

/* Part 1.4: Change the onclick property for the next button */

nextButton.onclick = showNextImage;


/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	// change imageNum

	imageNum = imageNum - 1;


	// how many pixels from the left should imageRow now be?

	let pixels = -carouselWidth * imageNum;


	// change css for imageRow
	imageRow.style.left = pixels;
	checkControls();


}

/* Part 1.6: Change the onclick property for the prev button */

prevButton.onclick = showPrevImage;



/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 1.7 */
function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 0) {
		// What should happen if it's the first image?
		// hide the prev button
		// prevButton.style.display = "none";
		
    	prevButton.classList.toggle("hidden");

	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.toggle("hidden");

		
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 2) {
		// What should happen it's the last image?
		nextButton.classList.toggle("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.toggle("hidden");

	}
} 

