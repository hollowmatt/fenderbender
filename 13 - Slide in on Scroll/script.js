// Move JS to this file from index.html

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	sliderImages.forEach(sliderImage => {
		// scrollY tells you pixels from top
		// innerHeight tells height of veiwport
		// add them to get the location of bottom of vewport in ralation to page
		// sliderImage.height gives height of image
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
		//sliderImage.offsetTop tells where top of image is in relation to top of page
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;

		if(isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}

	});
}

//debounce will limit the number of times the scroll event fires
window.addEventListener('scroll', debounce(checkSlide));